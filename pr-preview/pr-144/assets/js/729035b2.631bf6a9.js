"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[31623],{219:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>h});var i=n(74848),t=n(28453);const a={},r="What are the Edgio challenges",s={id:"faq/what-are-the-edgio-challenges",title:"What are the Edgio challenges",description:"The purpose of this article is to group common challenges application developers might encounter when using Edgio (formerly known as Verizon Media and Edgecast) as the back-end.",source:"@site/theoplayer_versioned_docs/version-v7/faq/72-what-are-the-edgio-challenges.md",sourceDirName:"faq",slug:"/faq/what-are-the-edgio-challenges",permalink:"/documentation/pr-preview/pr-144/theoplayer/v7/faq/what-are-the-edgio-challenges",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/faq/72-what-are-the-edgio-challenges.md",tags:[],version:"v7",sidebarPosition:72,frontMatter:{},sidebar:"faq",previous:{title:"What are the limitations of AirPlay",permalink:"/documentation/pr-preview/pr-144/theoplayer/v7/faq/what-are-the-limitations-of-AirPlay"},next:{title:"How to use the Media Session API",permalink:"/documentation/pr-preview/pr-144/theoplayer/v7/faq/how-to-use-media-session-api"}},l={},h=[{value:"Why does Chromecast or AirPlay not work?",id:"why-does-chromecast-or-airplay-not-work",level:2},{value:"Why aren&#39;t all video qualities showing up?",id:"why-arent-all-video-qualities-showing-up",level:2},{value:"What should I know before tokenizing my stream?",id:"what-should-i-know-before-tokenizing-my-stream",level:2}];function d(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.header,{children:(0,i.jsx)(o.h1,{id:"what-are-the-edgio-challenges",children:"What are the Edgio challenges"})}),"\n",(0,i.jsxs)(o.p,{children:["The purpose of this article is to group common challenges application developers might encounter when using ",(0,i.jsx)(o.a,{href:"/documentation/pr-preview/pr-144/theoplayer/v7/how-to-guides/miscellaneous/verizon-media/introduction",children:"Edgio"})," (formerly known as Verizon Media and Edgecast) as the back-end."]}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsx)(o.li,{children:(0,i.jsx)(o.a,{href:"#why-does-chromecast-or-airplay-not-work",children:"Why does Chromecast or AirPlay not work?"})}),"\n",(0,i.jsx)(o.li,{children:(0,i.jsx)(o.a,{href:"#why-arent-all-video-qualities-showing-up",children:"Why aren't all video qualities showing up?"})}),"\n",(0,i.jsx)(o.li,{children:(0,i.jsx)(o.a,{href:"#what-should-i-know-before-tokenizing-my-stream",children:"What should I know before tokenizing my stream?"})}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"why-does-chromecast-or-airplay-not-work",children:"Why does Chromecast or AirPlay not work?"}),"\n",(0,i.jsxs)(o.p,{children:["If you've ",(0,i.jsx)(o.a,{href:"/documentation/pr-preview/pr-144/theoplayer/v7/how-to-guides/cast/chromecast/enable-chromecast-on-the-sender",children:"correctly enabled Chromecast"})," or AirPlay,\nbut you are not getting any playback on your Chromecast or AirPlay device,\nthen a likely cause is your ",(0,i.jsx)(o.a,{href:"/documentation/pr-preview/pr-144/theoplayer/v7/how-to-guides/miscellaneous/verizon-media/preplay#using-tokens",children:"tokenization"})," approach."]}),"\n",(0,i.jsx)(o.p,{children:"1/ When you tokenize a URL, you are also specifying an expiration date.\nIt is possible that your expiration date has passed when you initiate the casting session.\nYour stream will no longer be valid when this is the case, and result in unsuccessful casting."}),"\n",(0,i.jsx)(o.p,{children:"The solution? Use an expiration date that is valid for a longer time."}),"\n",(0,i.jsx)(o.p,{children:"2/ An Edgio token will be attached to one IP address when it's invoked for the first time (i.e. request to the Preplay URL with the token as a query parameter).\nThis could cause problems when either your sender device (i.e. iOS app, Android app, browser) or reciever device (i.e. Chromecast device)\nuses an iPv6 address, because those addresses are unique. (Meaning: the token could be invalid for your IPv6 receiver device because it was already attached to your different IPv4 sender device.)"}),"\n",(0,i.jsx)(o.p,{children:"The solution?"}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsxs)(o.li,{children:["You can disable IP address checking by adding ",(0,i.jsx)(o.code,{children:"pp2ip=0"})," to your token (and Preplay parameters)."]}),"\n",(0,i.jsxs)(o.li,{children:["You can implement a ",(0,i.jsx)(o.a,{href:"https://github.com/THEOplayer/samples-google-cast-v3-receiver",children:"custom Chromecast receiver app"})," that generates its own unique token.\n(This however doesn't address the issue on AirPlay, and also gives rise to challenges related to building a custom Chromecast app.)"]}),"\n",(0,i.jsx)(o.li,{children:"You can disable tokenization (if it's not a requirement)."}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"why-arent-all-video-qualities-showing-up",children:"Why aren't all video qualities showing up?"}),"\n",(0,i.jsxs)(o.p,{children:["If you notice that THEOplayer doesn't expose all your Edgio MPEG-DASH video qualities,\nthen the likely culprit is not aggregating the different ",(0,i.jsx)(o.code,{children:"AdaptationSet"}),"s as part of Edgio's multi-key approach."]}),"\n",(0,i.jsx)(o.p,{children:"The solution?"}),"\n",(0,i.jsxs)(o.p,{children:["Add ",(0,i.jsx)(o.code,{children:"singlevideolicense=1"})," to your Preplay parameters and/or token.\nDoing so will group all qualities to one ",(0,i.jsx)(o.code,{children:"AdaptationSet"})," with one key."]}),"\n",(0,i.jsx)(o.h2,{id:"what-should-i-know-before-tokenizing-my-stream",children:"What should I know before tokenizing my stream?"}),"\n",(0,i.jsxs)(o.p,{children:["Refer to ",(0,i.jsx)(o.a,{href:"/documentation/pr-preview/pr-144/theoplayer/v7/how-to-guides/miscellaneous/verizon-media/preplay#using-tokens",children:"Preplay - tokenization"}),"."]})]})}function c(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>s});var i=n(96540);const t={},a=i.createContext(t);function r(e){const o=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:o},e.children)}}}]);