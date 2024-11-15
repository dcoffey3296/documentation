"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["98285"],{9314:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>c,assets:()=>l,toc:()=>p,frontMatter:()=>s});var i=JSON.parse('{"id":"faq/what-is-an-impression","title":"What is an impression","description":"This article explains what an impression is and how THEOplayer calculates impressions.","source":"@site/theoplayer/faq/12-what-is-an-impression.md","sourceDirName":"faq","slug":"/faq/what-is-an-impression","permalink":"/documentation/pr-preview/pr-158/theoplayer/faq/what-is-an-impression","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/faq/12-what-is-an-impression.md","tags":[],"version":"current","sidebarPosition":12,"frontMatter":{},"sidebar":"faq","previous":{"title":"Why the Visibility API does not work through an iframe on Safari and IE11","permalink":"/documentation/pr-preview/pr-158/theoplayer/faq/why-visibilty-api-doesnt-work-in-iframe-on-safari-and-ie11"},"next":{"title":"How to know whether a live stream is playing","permalink":"/documentation/pr-preview/pr-158/theoplayer/faq/how-to-know-when-livestream-is-playing"}}'),o=t("85893"),a=t("50065");let s={},r="What is an impression",l={},p=[];function h(e){let n={h1:"h1",header:"header",p:"p",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"what-is-an-impression",children:"What is an impression"})}),"\n",(0,o.jsx)(n.p,{children:"This article explains what an impression is and how THEOplayer calculates impressions."}),"\n",(0,o.jsx)(n.p,{children:"THEOplayer will count an impression when the video or audio source is being played for the first time by our SDK. This can be triggered by a user clicking the Play button, or by playing the video automatically (autoplay). When you pause, play or seek within the same video or audio source, it still will be counted as only one impression. If a user refreshes the page or reloads the application, a second impression will be counted. If the content contains ads, these will not be counted towards the impression count. Except when the content only contains ads, then these will be counted towards the impression count."}),"\n",(0,o.jsx)(n.p,{children:"As an example, if you start a video, pause the video and then resume again it is only considered one impression. If on the other hand you start a video and then refresh your browser, or reload your application, it would be considered 2 impressions."})]})}function c(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return s}});var i=t(67294);let o={},a=i.createContext(o);function s(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);