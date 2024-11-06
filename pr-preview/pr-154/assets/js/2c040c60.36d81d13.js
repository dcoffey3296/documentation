"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[22039],{12019:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=t(74848),r=t(28453);const o={},a="How to know whether a live stream is playing",s={id:"faq/how-to-know-when-livestream-is-playing",title:"How to know whether a live stream is playing",description:"You can check if a stream being played is live or VOD by checking its duration. If the duration returns Infinity, the stream would be live. Examples:",source:"@site/theoplayer_versioned_docs/version-v6/faq/14-how-to-know-when-livestream-is-playing.md",sourceDirName:"faq",slug:"/faq/how-to-know-when-livestream-is-playing",permalink:"/documentation/pr-preview/pr-154/theoplayer/v6/faq/how-to-know-when-livestream-is-playing",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/faq/14-how-to-know-when-livestream-is-playing.md",tags:[],version:"v6",sidebarPosition:14,frontMatter:{},sidebar:"faq",previous:{title:"What is an impression",permalink:"/documentation/pr-preview/pr-154/theoplayer/v6/faq/what-is-an-impression"},next:{title:"Which error related events does the player expose",permalink:"/documentation/pr-preview/pr-154/theoplayer/v6/faq/which-error-related-events-does-player-expose"}},l={},d=[{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5}];function c(e){const n={code:"code",h1:"h1",h5:"h5",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"how-to-know-whether-a-live-stream-is-playing",children:"How to know whether a live stream is playing"})}),"\n",(0,i.jsxs)(n.p,{children:["You can check if a stream being played is live or VOD by checking its duration. If the duration returns ",(0,i.jsx)(n.code,{children:"Infinity"}),", the stream would be live. Examples:"]}),"\n",(0,i.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"var isLive = player.duration === Infinity; // true or false\n"})}),"\n",(0,i.jsx)(n.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"boolean isLive = Double.isNaN(tpv.getPlayer().getDuration()); // true or false\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var i=t(96540);const r={},o=i.createContext(r);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);