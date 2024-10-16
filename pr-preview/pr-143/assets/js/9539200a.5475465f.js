"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[69410],{52335:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>h});var n=i(74848),o=i(28453);const a={},r="What are the limitations of AirPlay",s={id:"faq/what-are-the-limitations-of-AirPlay",title:"What are the limitations of AirPlay",description:"When casting through AirPlay your viewer is relying on the native Apple video player.",source:"@site/theoplayer_versioned_docs/version-v7/faq/71-what-are-the-limitations-of-AirPlay.md",sourceDirName:"faq",slug:"/faq/what-are-the-limitations-of-AirPlay",permalink:"/documentation/pr-preview/pr-143/theoplayer/v7/faq/what-are-the-limitations-of-AirPlay",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/faq/71-what-are-the-limitations-of-AirPlay.md",tags:[],version:"v7",sidebarPosition:71,frontMatter:{},sidebar:"faq",previous:{title:"How to investigate a ticket",permalink:"/documentation/pr-preview/pr-143/theoplayer/v7/faq/how-to-investigate-a-ticket"},next:{title:"What are the Edgio challenges",permalink:"/documentation/pr-preview/pr-143/theoplayer/v7/faq/what-are-the-edgio-challenges"}},l={},h=[];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"what-are-the-limitations-of-airplay",children:"What are the limitations of AirPlay"})}),"\n",(0,n.jsxs)(t.p,{children:["When casting through ",(0,n.jsx)(t.a,{href:"https://www.theoplayer.com/theoplayer-demo-airplay",children:"AirPlay"})," your viewer is relying on the native Apple video player.\nThis setup gives rise to a number of limitations, as a third-party video player (i.e. THEOplayer) cannot circumvent the limitations of this native Apple video player."]}),"\n",(0,n.jsx)(t.p,{children:"Some of these limitations include, but are not limited to, the following:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"AirPlay does not support client-side ad-insertion.\nInstead, you could consider using server-side ad-insertion, or disabling client-side ad-insertion when allowing AirPlay."}),"\n",(0,n.jsx)(t.li,{children:"AirPlay does not support VR/360 videos. Instead, you should disable AirPlay for VR/360 videos."}),"\n",(0,n.jsx)(t.li,{children:"AirPlay does not support MPEG-DASH. Instead, you should use HLS if you want to allow AirPlay."}),"\n",(0,n.jsxs)(t.li,{children:["AirPlay does not support UI customization.\nInstead, you could implement a ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-143/theoplayer/v4/getting-started/sdks/tvos/getting-started",children:"tvOS application"})," to offer a custom playback experience on an Apple TV."]}),"\n",(0,n.jsxs)(t.li,{children:["AirPlay does not support some closed captions and subtitle formats, including CEA-608 and ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-143/theoplayer/v7/how-to-guides/texttrack/how-to-insert-subtitles",children:"sideloaded (WebVTT) subtitles"}),".\nInstead, you must use subtitles that are supported natively."]}),"\n",(0,n.jsx)(t.li,{children:"AirPlay does not support manual quality switches. Instead, viewers can only rely on automatic quality selection."}),"\n",(0,n.jsx)(t.li,{children:"AirPlay may not have proper support for LL-HLS. The delay might be greater than you expect, and stuttering may occur."}),"\n",(0,n.jsx)(t.li,{children:"AirPlay does not support authentication cookies. AirPlay streams run on a device other than the device initiating the session.\nThis means authentication cookies will not be available to retrieve playlists, encryption keys, ...\nThere is also no way to intercept these requests from the initiating device (other than DRM license requests)."}),"\n"]}),"\n",(0,n.jsxs)(t.admonition,{title:"Does native Safari support it?",type:"info",children:[(0,n.jsx)(t.p,{children:"When you want to know whether the native AirPlay video player supports a certain feature, you can compare the experience with the native Safari video player."}),(0,n.jsx)(t.p,{children:"For example, if you want to know whether MPEG-DASH is supported, you can enter your MPEG-DASH URL in the address bar of Safari, hit enter, and observe the results. The same results are most likely true for the native AirPlay video player."})]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>s});var n=i(96540);const o={},a=n.createContext(o);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);