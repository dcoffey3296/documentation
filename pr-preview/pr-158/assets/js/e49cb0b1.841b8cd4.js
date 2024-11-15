"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["17161"],{68860:function(e,t,n){n.r(t),n.d(t,{metadata:()=>o,contentTitle:()=>d,default:()=>p,assets:()=>s,toc:()=>l,frontMatter:()=>r});var o=JSON.parse('{"id":"faq/why-do-i-get-a-grey-play-button","title":"Why do I get a gray play button in my Android WebView and how to remove it?","description":"You may ask this question if a gray play button is showed by default in your Android WebView.","source":"@site/theoplayer_versioned_docs/version-v4/faq/29-why-do-i-get-a-grey-play-button.md","sourceDirName":"faq","slug":"/faq/why-do-i-get-a-grey-play-button","permalink":"/documentation/pr-preview/pr-158/theoplayer/v4/faq/why-do-i-get-a-grey-play-button","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/faq/29-why-do-i-get-a-grey-play-button.md","tags":[],"version":"v4","sidebarPosition":29,"frontMatter":{},"sidebar":"faq","previous":{"title":"How to remove unwanted CC track in iOS or Safari","permalink":"/documentation/pr-preview/pr-158/theoplayer/v4/faq/how-to-remove-unwanted-cc-track-ios-safari"},"next":{"title":"MediaTek limitations","permalink":"/documentation/pr-preview/pr-158/theoplayer/v4/faq/mediatek-limitations"}}'),i=n("85893"),a=n("50065");let r={},d="Why do I get a gray play button in my Android WebView and how to remove it?",s={},l=[];function u(e){let t={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"why-do-i-get-a-gray-play-button-in-my-android-webview-and-how-to-remove-it",children:"Why do I get a gray play button in my Android WebView and how to remove it?"})}),"\n",(0,i.jsx)(t.p,{children:"You may ask this question if a gray play button is showed by default in your Android WebView."}),"\n",(0,i.jsx)(t.p,{children:"Similar questions are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"How to remove the default poster of a play button from the player?"}),"\n",(0,i.jsx)(t.li,{children:"There\u2019s a gray image of a play button in my video element background: how do I delete it?"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"This happens because this is the default image, included as a poster, displayed in Android WebView before playback start."}),"\n",(0,i.jsx)(t.p,{children:"You may solve the problem adding the following snippet to a custom WebViewClient:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"@Override\npublic Bitmap getDefaultVideoPoster() {\n    return Bitmap.createBitmap(10, 10, Bitmap.Config.ARGB_8888);\n}\n"})})]})}function p(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return r}});var o=n(67294);let i={},a=o.createContext(i);function r(e){let t=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);