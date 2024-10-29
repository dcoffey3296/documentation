"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65988],{29232:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=o(74848),n=o(28453);const s={},i="Which source is the one being played",a={id:"faq/which-source-is-the-one-being-played",title:"Which source is the one being played",description:"In THEOplayer, player.source.sources can be used to provide alternative sources for playback, for cross-platform support. What is the actual source being played, if more than one is provided that is supported on the current platform/browser?",source:"@site/theoplayer_versioned_docs/version-v6/faq/76-which-source-is-the-one-being-played.md",sourceDirName:"faq",slug:"/faq/which-source-is-the-one-being-played",permalink:"/documentation/pr-preview/pr-149/theoplayer/v6/faq/which-source-is-the-one-being-played",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/faq/76-which-source-is-the-one-being-played.md",tags:[],version:"v6",sidebarPosition:76,frontMatter:{},sidebar:"faq",previous:{title:"Widevine CDM deprecation notice for old browser versions",permalink:"/documentation/pr-preview/pr-149/theoplayer/v6/faq/old-widevine-cdm-deprecation-notice"},next:{title:'What is the "WebAssembly.compileStreaming failed" warning and what does it mean?',permalink:"/documentation/pr-preview/pr-149/theoplayer/v6/faq/what-is-the-webAssembly-compileStreaming-failed-warning"}},c={},l=[];function h(e){const t={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"which-source-is-the-one-being-played",children:"Which source is the one being played"})}),"\n",(0,r.jsxs)(t.p,{children:["In THEOplayer, ",(0,r.jsx)(t.code,{children:"player.source.sources"})," can be used to provide alternative sources for playback, for cross-platform support. What is the actual source being played, if more than one is provided that is supported on the current platform/browser?"]}),"\n",(0,r.jsxs)(t.p,{children:["The player will select the first source (top to bottom) of a type that is supported on the current platform and try to play it. The player will ",(0,r.jsx)("u",{children:"not"})," automatically select a new source from the list if the current one is failing to play for any reason unrelated to platform support."]}),"\n",(0,r.jsxs)(t.p,{children:["You can also find out which the source is that the player selects with the ",(0,r.jsx)(t.code,{children:"currentsourcechange"})," event (",(0,r.jsx)(t.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/CurrentSourceChangeEvent.html",children:"documentation"}),")."]}),"\n",(0,r.jsx)(t.p,{children:"A few additional notes:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"It is of course possible to make the player attempt to play a different source if the one being played errors or never starts to play, but this is to be done in the implementation."}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"player.source.sources"})," is not intended as a playlist. Playlists can also be accomplished on the implementation side. Here is a simple ",(0,r.jsx)(t.a,{href:"https://www.theoplayer.com/theoplayer-demo-playlist-and-caching",children:"example"})," for the Web SDK."]}),"\n",(0,r.jsx)(t.li,{children:"This mechanism is based on what the platform declares to support. It does not ensure that all codecs/features included in the stream are supported correctly on the current platform."}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>a});var r=o(96540);const n={},s=r.createContext(n);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);