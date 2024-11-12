"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["81532"],{72890:function(e,t,a){a.r(t),a.d(t,{metadata:()=>n,contentTitle:()=>o,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>s});var n=JSON.parse('{"id":"faq/why-is-DRM-license-retrieved-again-after-ads-on-iOS","title":"Why are the FairPlay license and certificate being requested again on iOS after ads?","description":"The DRM license and certificate are retrieved when a DRM-protected stream starts to be played. This is usually enough for a full playback session since in most cases the DRM context can be maintained.","source":"@site/theoplayer/faq/79-why-is-DRM-license-retrieved-again-after-ads-on-iOS.md","sourceDirName":"faq","slug":"/faq/why-is-DRM-license-retrieved-again-after-ads-on-iOS","permalink":"/documentation/pr-preview/pr-156/theoplayer/faq/why-is-DRM-license-retrieved-again-after-ads-on-iOS","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/faq/79-why-is-DRM-license-retrieved-again-after-ads-on-iOS.md","tags":[],"version":"current","sidebarPosition":79,"frontMatter":{},"sidebar":"faq","previous":{"title":"What PiP options to use to make the video stay visible while browsing or on other applications","permalink":"/documentation/pr-preview/pr-156/theoplayer/faq/how-to-make-pip-video-stay-visible-while-browsing"},"next":{"title":"How to detect if the user changes the video quality","permalink":"/documentation/pr-preview/pr-156/theoplayer/faq/how-to-detect-if-user-changes-video-quality"}}'),i=a("85893"),r=a("50065");let s={},o="Why are the FairPlay license and certificate being requested again on iOS after ads?",c={},l=[];function d(e){let t={br:"br",code:"code",h1:"h1",header:"header",p:"p",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"why-are-the-fairplay-license-and-certificate-being-requested-again-on-ios-after-ads",children:"Why are the FairPlay license and certificate being requested again on iOS after ads?"})}),"\n",(0,i.jsxs)(t.p,{children:["The DRM license and certificate are retrieved when a DRM-protected stream starts to be played. This is usually enough for a full playback session since in most cases the DRM context can be maintained.",(0,i.jsx)(t.br,{}),"\n","However, certain combinations of features may prevent this."]}),"\n",(0,i.jsxs)(t.p,{children:["The most common case is when we indicate that on iOS browsers the native fullscreen should be used (",(0,i.jsx)(t.code,{children:"allowNativeFullscreen: true"}),").  In this case, on these browsers ads and content will be played through the same ",(0,i.jsx)(t.code,{children:"<video>"})," element, regardless of whether the user is actually playing in fullscreen."]}),"\n",(0,i.jsx)(t.p,{children:"This means that when a midroll is played, the previous DRM context is lost, so upon resuming content playback it must be re-established and the DRM license and certificate need to be requested again."})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,a){a.d(t,{Z:function(){return o},a:function(){return s}});var n=a(67294);let i={},r=n.createContext(i);function s(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);