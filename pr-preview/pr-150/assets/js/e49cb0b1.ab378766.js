"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[34981],{65950:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var n=o(74848),i=o(28453);const a={},r="Why do I get a gray play button in my Android WebView and how to remove it?",d={id:"faq/why-do-i-get-a-grey-play-button",title:"Why do I get a gray play button in my Android WebView and how to remove it?",description:"You may ask this question if a gray play button is showed by default in your Android WebView.",source:"@site/theoplayer_versioned_docs/version-v4/faq/29-why-do-i-get-a-grey-play-button.md",sourceDirName:"faq",slug:"/faq/why-do-i-get-a-grey-play-button",permalink:"/documentation/pr-preview/pr-150/theoplayer/v4/faq/why-do-i-get-a-grey-play-button",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/faq/29-why-do-i-get-a-grey-play-button.md",tags:[],version:"v4",sidebarPosition:29,frontMatter:{},sidebar:"faq",previous:{title:"How to remove unwanted CC track in iOS or Safari",permalink:"/documentation/pr-preview/pr-150/theoplayer/v4/faq/how-to-remove-unwanted-cc-track-ios-safari"},next:{title:"MediaTek limitations",permalink:"/documentation/pr-preview/pr-150/theoplayer/v4/faq/mediatek-limitations"}},s={},l=[];function p(e){const t={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"why-do-i-get-a-gray-play-button-in-my-android-webview-and-how-to-remove-it",children:"Why do I get a gray play button in my Android WebView and how to remove it?"})}),"\n",(0,n.jsx)(t.p,{children:"You may ask this question if a gray play button is showed by default in your Android WebView."}),"\n",(0,n.jsx)(t.p,{children:"Similar questions are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"How to remove the default poster of a play button from the player?"}),"\n",(0,n.jsx)(t.li,{children:"There\u2019s a gray image of a play button in my video element background: how do I delete it?"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"This happens because this is the default image, included as a poster, displayed in Android WebView before playback start."}),"\n",(0,n.jsx)(t.p,{children:"You may solve the problem adding the following snippet to a custom WebViewClient:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"@Override\npublic Bitmap getDefaultVideoPoster() {\n    return Bitmap.createBitmap(10, 10, Bitmap.Config.ARGB_8888);\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>d});var n=o(96540);const i={},a=n.createContext(i);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);