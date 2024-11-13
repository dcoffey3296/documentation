"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["28115"],{88095:function(e,n,o){o.r(n),o.d(n,{metadata:()=>t,contentTitle:()=>s,default:()=>c,assets:()=>l,toc:()=>h,frontMatter:()=>r});var t=JSON.parse('{"id":"faq/what-are-the-edgio-challenges","title":"What are the Edgio challenges","description":"The purpose of this article is to group common challenges application developers might encounter when using Edgio (formerly known as Verizon Media and Edgecast) as the back-end.","source":"@site/theoplayer/faq/72-what-are-the-edgio-challenges.md","sourceDirName":"faq","slug":"/faq/what-are-the-edgio-challenges","permalink":"/documentation/pr-preview/pr-157/theoplayer/faq/what-are-the-edgio-challenges","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/faq/72-what-are-the-edgio-challenges.md","tags":[],"version":"current","sidebarPosition":72,"frontMatter":{},"sidebar":"faq","previous":{"title":"What are the limitations of AirPlay","permalink":"/documentation/pr-preview/pr-157/theoplayer/faq/what-are-the-limitations-of-AirPlay"},"next":{"title":"How to use the Media Session API","permalink":"/documentation/pr-preview/pr-157/theoplayer/faq/how-to-use-media-session-api"}}'),i=o("85893"),a=o("50065");let r={},s="What are the Edgio challenges",l={},h=[{value:"Why does Chromecast or AirPlay not work?",id:"why-does-chromecast-or-airplay-not-work",level:2},{value:"Why aren&#39;t all video qualities showing up?",id:"why-arent-all-video-qualities-showing-up",level:2},{value:"What should I know before tokenizing my stream?",id:"what-should-i-know-before-tokenizing-my-stream",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"what-are-the-edgio-challenges",children:"What are the Edgio challenges"})}),"\n",(0,i.jsxs)(n.p,{children:["The purpose of this article is to group common challenges application developers might encounter when using ",(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-157/theoplayer/how-to-guides/miscellaneous/verizon-media/introduction",children:"Edgio"})," (formerly known as Verizon Media and Edgecast) as the back-end."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#why-does-chromecast-or-airplay-not-work",children:"Why does Chromecast or AirPlay not work?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#why-arent-all-video-qualities-showing-up",children:"Why aren't all video qualities showing up?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#what-should-i-know-before-tokenizing-my-stream",children:"What should I know before tokenizing my stream?"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"why-does-chromecast-or-airplay-not-work",children:"Why does Chromecast or AirPlay not work?"}),"\n",(0,i.jsxs)(n.p,{children:["If you've ",(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-157/theoplayer/how-to-guides/cast/chromecast/enable-chromecast-on-the-sender",children:"correctly enabled Chromecast"})," or AirPlay,\nbut you are not getting any playback on your Chromecast or AirPlay device,\nthen a likely cause is your ",(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-157/theoplayer/how-to-guides/miscellaneous/verizon-media/preplay#using-tokens",children:"tokenization"})," approach."]}),"\n",(0,i.jsx)(n.p,{children:"1/ When you tokenize a URL, you are also specifying an expiration date.\nIt is possible that your expiration date has passed when you initiate the casting session.\nYour stream will no longer be valid when this is the case, and result in unsuccessful casting."}),"\n",(0,i.jsx)(n.p,{children:"The solution? Use an expiration date that is valid for a longer time."}),"\n",(0,i.jsx)(n.p,{children:"2/ An Edgio token will be attached to one IP address when it's invoked for the first time (i.e. request to the Preplay URL with the token as a query parameter).\nThis could cause problems when either your sender device (i.e. iOS app, Android app, browser) or reciever device (i.e. Chromecast device)\nuses an iPv6 address, because those addresses are unique. (Meaning: the token could be invalid for your IPv6 receiver device because it was already attached to your different IPv4 sender device.)"}),"\n",(0,i.jsx)(n.p,{children:"The solution?"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["You can disable IP address checking by adding ",(0,i.jsx)(n.code,{children:"pp2ip=0"})," to your token (and Preplay parameters)."]}),"\n",(0,i.jsxs)(n.li,{children:["You can implement a ",(0,i.jsx)(n.a,{href:"https://github.com/THEOplayer/samples-google-cast-v3-receiver",children:"custom Chromecast receiver app"})," that generates its own unique token.\n(This however doesn't address the issue on AirPlay, and also gives rise to challenges related to building a custom Chromecast app.)"]}),"\n",(0,i.jsx)(n.li,{children:"You can disable tokenization (if it's not a requirement)."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"why-arent-all-video-qualities-showing-up",children:"Why aren't all video qualities showing up?"}),"\n",(0,i.jsxs)(n.p,{children:["If you notice that THEOplayer doesn't expose all your Edgio MPEG-DASH video qualities,\nthen the likely culprit is not aggregating the different ",(0,i.jsx)(n.code,{children:"AdaptationSet"}),"s as part of Edgio's multi-key approach."]}),"\n",(0,i.jsx)(n.p,{children:"The solution?"}),"\n",(0,i.jsxs)(n.p,{children:["Add ",(0,i.jsx)(n.code,{children:"singlevideolicense=1"})," to your Preplay parameters and/or token.\nDoing so will group all qualities to one ",(0,i.jsx)(n.code,{children:"AdaptationSet"})," with one key."]}),"\n",(0,i.jsx)(n.h2,{id:"what-should-i-know-before-tokenizing-my-stream",children:"What should I know before tokenizing my stream?"}),"\n",(0,i.jsxs)(n.p,{children:["Refer to ",(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-157/theoplayer/how-to-guides/miscellaneous/verizon-media/preplay#using-tokens",children:"Preplay - tokenization"}),"."]})]})}function c(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,o){o.d(n,{Z:function(){return s},a:function(){return r}});var t=o(67294);let i={},a=t.createContext(i);function r(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);