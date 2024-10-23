"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[31756],{43692:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=t(74848),o=t(28453);const s={},a="What is an impression",r={id:"faq/what-is-an-impression",title:"What is an impression",description:"This article explains what an impression is and how THEOplayer calculates impressions.",source:"@site/theoplayer/faq/12-what-is-an-impression.md",sourceDirName:"faq",slug:"/faq/what-is-an-impression",permalink:"/documentation/pr-preview/pr-147/theoplayer/faq/what-is-an-impression",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer/faq/12-what-is-an-impression.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{},sidebar:"faq",previous:{title:"Why the Visibility API does not work through an iframe on Safari and IE11",permalink:"/documentation/pr-preview/pr-147/theoplayer/faq/why-visibilty-api-doesnt-work-in-iframe-on-safari-and-ie11"},next:{title:"How to know whether a live stream is playing",permalink:"/documentation/pr-preview/pr-147/theoplayer/faq/how-to-know-when-livestream-is-playing"}},p={},l=[];function h(e){const n={h1:"h1",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"what-is-an-impression",children:"What is an impression"})}),"\n",(0,i.jsx)(n.p,{children:"This article explains what an impression is and how THEOplayer calculates impressions."}),"\n",(0,i.jsx)(n.p,{children:"THEOplayer will count an impression when the video or audio source is being played for the first time by our SDK. This can be triggered by a user clicking the Play button, or by playing the video automatically (autoplay). When you pause, play or seek within the same video or audio source, it still will be counted as only one impression. If a user refreshes the page or reloads the application, a second impression will be counted. If the content contains ads, these will not be counted towards the impression count. Except when the content only contains ads, then these will be counted towards the impression count."}),"\n",(0,i.jsx)(n.p,{children:"As an example, if you start a video, pause the video and then resume again it is only considered one impression. If on the other hand you start a video and then refresh your browser, or reload your application, it would be considered 2 impressions."})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(96540);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);