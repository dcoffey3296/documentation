"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19030],{48999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=n(74848),a=n(28453);const s={},r="Why are the FairPlay license and certificate being requested again on iOS after ads?",o={id:"faq/why-is-DRM-license-retrieved-again-after-ads-on-iOS",title:"Why are the FairPlay license and certificate being requested again on iOS after ads?",description:"The DRM license and certificate are retrieved when a DRM-protected stream starts to be played. This is usually enough for a full playback session since in most cases the DRM context can be maintained.",source:"@site/theoplayer_versioned_docs/version-v4/faq/79-why-is-DRM-license-retrieved-again-after-ads-on-iOS.md",sourceDirName:"faq",slug:"/faq/why-is-DRM-license-retrieved-again-after-ads-on-iOS",permalink:"/documentation/pr-preview/pr-149/theoplayer/v4/faq/why-is-DRM-license-retrieved-again-after-ads-on-iOS",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/faq/79-why-is-DRM-license-retrieved-again-after-ads-on-iOS.md",tags:[],version:"v4",sidebarPosition:79,frontMatter:{},sidebar:"faq",previous:{title:"What PiP options to use to make the video stay visible while browsing or on other applications",permalink:"/documentation/pr-preview/pr-149/theoplayer/v4/faq/how-to-make-pip-video-stay-visible-while-browsing"},next:{title:"How to detect if the user changes the video quality",permalink:"/documentation/pr-preview/pr-149/theoplayer/v4/faq/how-to-detect-if-user-changes-video-quality"}},c={},d=[];function l(e){const t={br:"br",code:"code",h1:"h1",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"why-are-the-fairplay-license-and-certificate-being-requested-again-on-ios-after-ads",children:"Why are the FairPlay license and certificate being requested again on iOS after ads?"})}),"\n",(0,i.jsxs)(t.p,{children:["The DRM license and certificate are retrieved when a DRM-protected stream starts to be played. This is usually enough for a full playback session since in most cases the DRM context can be maintained.",(0,i.jsx)(t.br,{}),"\n","However, certain combinations of features may prevent this."]}),"\n",(0,i.jsxs)(t.p,{children:["The most common case is when we indicate that on iOS browsers the native fullscreen should be used (",(0,i.jsx)(t.code,{children:"allowNativeFullscreen: true"}),").  In this case, on these browsers ads and content will be played through the same ",(0,i.jsx)(t.code,{children:"<video>"})," element, regardless of whether the user is actually playing in fullscreen."]}),"\n",(0,i.jsx)(t.p,{children:"This means that when a midroll is played, the previous DRM context is lost, so upon resuming content playback it must be re-established and the DRM license and certificate need to be requested again."})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const a={},s=i.createContext(a);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);