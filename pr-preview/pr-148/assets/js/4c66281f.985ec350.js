"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8235],{38826:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>h});var r=t(74848),o=t(28453);const a={},i="What does the error message 'Unknown CDM error' mean",s={id:"faq/what-does-error-unknown-cdm-mean",title:"What does the error message 'Unknown CDM error' mean",description:"If you got to see this page, you probably know that CDM stands for Content Decryption Module, which is a component in the DRM pipeline, a part of the content protection process.",source:"@site/theoplayer/faq/18-what-does-error-unknown-cdm-mean.md",sourceDirName:"faq",slug:"/faq/what-does-error-unknown-cdm-mean",permalink:"/documentation/pr-preview/pr-148/theoplayer/faq/what-does-error-unknown-cdm-mean",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer/faq/18-what-does-error-unknown-cdm-mean.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{},sidebar:"faq",previous:{title:"How does Media Engagement Index (MEI) affect Autoplay on Chrome",permalink:"/documentation/pr-preview/pr-148/theoplayer/faq/how-does-mei-affect-autoplay-on-chrome"},next:{title:"What does the error message 'Something went wrong with Native playback' mean",permalink:"/documentation/pr-preview/pr-148/theoplayer/faq/what-does-error-something-went-wrong-during-playback-mean"}},c={},h=[];function d(e){const n={a:"a",h1:"h1",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"what-does-the-error-message-unknown-cdm-error-mean",children:"What does the error message 'Unknown CDM error' mean"})}),"\n",(0,r.jsx)(n.p,{children:"If you got to see this page, you probably know that CDM stands for Content Decryption Module, which is a component in the DRM pipeline, a part of the content protection process."}),"\n",(0,r.jsx)(n.p,{children:"There are 2 scenarios where this error can be triggered:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If a user is watching a DRM-protected stream, and then tries to Airplay ",(0,r.jsx)(n.strong,{children:"their whole screen"}),' (In the device status bar as opposed to Airplaying by clicking the icon in THEOplayer when watching in Safari). Because it cannot be guaranteed that the content is not being hijacked in this scenario, the player throws the "Unknown CDM error". This scenario is Mac/Safari specific.']}),"\n",(0,r.jsxs)(n.li,{children:["A second scenario where you would see this error is when, on iOS, you record your screen with built-in or third-party software while playing DRM-protected content. This scenario is iOS specific.\nSafari uses media error code 5, according to VideoJS documentation (",(0,r.jsx)(n.a,{href:"https://docs.videojs.com/mediaerror",children:"https://docs.videojs.com/mediaerror"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Using this knowledge, developers could handle this error by capturing the 2 cases under one, more generic message towards the user e.g. 'This content is protected and can't be viewed this way.'"})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var r=t(96540);const o={},a=r.createContext(o);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);