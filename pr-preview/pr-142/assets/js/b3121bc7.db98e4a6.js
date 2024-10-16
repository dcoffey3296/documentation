"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50760],{57020:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var t=i(74848),o=i(28453);const s={},a="What is an impression",r={id:"faq/what-is-an-impression",title:"What is an impression",description:"This article explains what an impression is and how THEOplayer calculates impressions.",source:"@site/theoplayer_versioned_docs/version-v4/faq/12-what-is-an-impression.md",sourceDirName:"faq",slug:"/faq/what-is-an-impression",permalink:"/documentation/pr-preview/pr-142/theoplayer/v4/faq/what-is-an-impression",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/faq/12-what-is-an-impression.md",tags:[],version:"v4",sidebarPosition:12,frontMatter:{},sidebar:"faq",previous:{title:"Why the Visibility API does not work through an iframe on Safari and IE11",permalink:"/documentation/pr-preview/pr-142/theoplayer/v4/faq/why-visibilty-api-doesnt-work-in-iframe-on-safari-and-ie11"},next:{title:"How to know whether a live stream is playing",permalink:"/documentation/pr-preview/pr-142/theoplayer/v4/faq/how-to-know-when-livestream-is-playing"}},p={},l=[];function h(e){const n={h1:"h1",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"what-is-an-impression",children:"What is an impression"})}),"\n",(0,t.jsx)(n.p,{children:"This article explains what an impression is and how THEOplayer calculates impressions."}),"\n",(0,t.jsx)(n.p,{children:"THEOplayer will count an impression when the video or audio source is being played for the first time by our SDK. This can be triggered by a user clicking the Play button, or by playing the video automatically (autoplay). When you pause, play or seek within the same video or audio source, it still will be counted as only one impression. If a user refreshes the page or reloads the application, a second impression will be counted. If the content contains ads, these will not be counted towards the impression count. Except when the content only contains ads, then these will be counted towards the impression count."}),"\n",(0,t.jsx)(n.p,{children:"As an example, if you start a video, pause the video and then resume again it is only considered one impression. If on the other hand you start a video and then refresh your browser, or reload your application, it would be considered 2 impressions."})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var t=i(96540);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);