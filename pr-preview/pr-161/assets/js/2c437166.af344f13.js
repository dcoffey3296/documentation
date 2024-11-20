"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["58301"],{47370:function(e,t,i){i.r(t),i.d(t,{metadata:()=>n,contentTitle:()=>o,default:()=>p,assets:()=>l,toc:()=>c,frontMatter:()=>r});var n=JSON.parse('{"id":"faq/what-is-the-webAssembly-compileStreaming-failed-warning","title":"What is the \\"WebAssembly.compileStreaming failed\\" warning and what does it mean?","description":"When starting playback in THEOplayer, you might be seeing a warning in console that reads","source":"@site/theoplayer/faq/77-what-is-the-webAssembly-compileStreaming-failed-warning.md","sourceDirName":"faq","slug":"/faq/what-is-the-webAssembly-compileStreaming-failed-warning","permalink":"/documentation/pr-preview/pr-161/theoplayer/faq/what-is-the-webAssembly-compileStreaming-failed-warning","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/faq/77-what-is-the-webAssembly-compileStreaming-failed-warning.md","tags":[],"version":"current","sidebarPosition":77,"frontMatter":{},"sidebar":"faq","previous":{"title":"Which source is the one being played","permalink":"/documentation/pr-preview/pr-161/theoplayer/faq/which-source-is-the-one-being-played"},"next":{"title":"What PiP options to use to make the video stay visible while browsing or on other applications","permalink":"/documentation/pr-preview/pr-161/theoplayer/faq/how-to-make-pip-video-stay-visible-while-browsing"}}'),a=i("85893"),s=i("50065");let r={},o='What is the "WebAssembly.compileStreaming failed" warning and what does it mean?',l={},c=[];function h(e){let t={admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",header:"header",p:"p",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsxs)(t.h1,{id:"what-is-the-webassemblycompilestreaming-failed-warning-and-what-does-it-mean",children:['What is the "',(0,a.jsx)(t.code,{children:"WebAssembly.compileStreaming"}),' failed" warning and what does it mean?']})}),"\n",(0,a.jsxs)(t.p,{children:["When starting playback in THEOplayer, you might be seeing a warning in console that reads",(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.code,{children:"'WebAssembly.compileStreaming' failed because your server does not serve wasm with 'application/wasm' MIME type. Falling back to 'WebAssembly.compile' which is slower. Original error: TypeError: Failed to execute 'compile' on 'WebAssembly': Incorrect response MIME type. Expected 'application/wasm'."})]}),"\n",(0,a.jsxs)(t.p,{children:["The current HLS pipeline, default since THEOplayer 4.0, works (where possible) with a wasm worker.\nSome implementations cannot or choose not to serve ",(0,a.jsx)(t.em,{children:"wasm"}),", and we have a fallback mechanism for those cases, which avoids impact on user experience. If this fallback is triggered, this warning appears in console."]}),"\n",(0,a.jsxs)(t.p,{children:["In other words, ",(0,a.jsx)(t.em,{children:"wasm"})," allows for better overall performance and the player will try to use this solution first. If this is not possible, it will use different logic, but this doesn't impact the end users. You can safely ignore this warning."]}),"\n",(0,a.jsx)(t.admonition,{type:"important",children:(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.em,{children:"wasm"})," file must be served with the correct MIME type ('application/wasm'), otherwise the player will not recognise it properly and fall back onto the alternative (in this case, the warning will also be shown). If the file is served with the wrong MIME type (e.g.: text/html), this must be corrected on the server side."]})})]})}function p(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return o},a:function(){return r}});var n=i(67294);let a={},s=n.createContext(a);function r(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);