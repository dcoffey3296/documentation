"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71005],{17693:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=i(74848),a=i(28453);const s={},r='What is the "WebAssembly.compileStreaming failed" warning and what does it mean?',o={id:"faq/what-is-the-webAssembly-compileStreaming-failed-warning",title:'What is the "WebAssembly.compileStreaming failed" warning and what does it mean?',description:"When starting playback in THEOplayer, you might be seeing a warning in console that reads",source:"@site/theoplayer/faq/77-what-is-the-webAssembly-compileStreaming-failed-warning.md",sourceDirName:"faq",slug:"/faq/what-is-the-webAssembly-compileStreaming-failed-warning",permalink:"/documentation/pr-preview/pr-152/theoplayer/faq/what-is-the-webAssembly-compileStreaming-failed-warning",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer/faq/77-what-is-the-webAssembly-compileStreaming-failed-warning.md",tags:[],version:"current",sidebarPosition:77,frontMatter:{},sidebar:"faq",previous:{title:"Which source is the one being played",permalink:"/documentation/pr-preview/pr-152/theoplayer/faq/which-source-is-the-one-being-played"},next:{title:"What PiP options to use to make the video stay visible while browsing or on other applications",permalink:"/documentation/pr-preview/pr-152/theoplayer/faq/how-to-make-pip-video-stay-visible-while-browsing"}},l={},c=[];function h(e){const t={admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsxs)(t.h1,{id:"what-is-the-webassemblycompilestreaming-failed-warning-and-what-does-it-mean",children:['What is the "',(0,n.jsx)(t.code,{children:"WebAssembly.compileStreaming"}),' failed" warning and what does it mean?']})}),"\n",(0,n.jsxs)(t.p,{children:["When starting playback in THEOplayer, you might be seeing a warning in console that reads",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.code,{children:"'WebAssembly.compileStreaming' failed because your server does not serve wasm with 'application/wasm' MIME type. Falling back to 'WebAssembly.compile' which is slower. Original error: TypeError: Failed to execute 'compile' on 'WebAssembly': Incorrect response MIME type. Expected 'application/wasm'."})]}),"\n",(0,n.jsxs)(t.p,{children:["The current HLS pipeline, default since THEOplayer 4.0, works (where possible) with a wasm worker.\nSome implementations cannot or choose not to serve ",(0,n.jsx)(t.em,{children:"wasm"}),", and we have a fallback mechanism for those cases, which avoids impact on user experience. If this fallback is triggered, this warning appears in console."]}),"\n",(0,n.jsxs)(t.p,{children:["In other words, ",(0,n.jsx)(t.em,{children:"wasm"})," allows for better overall performance and the player will try to use this solution first. If this is not possible, it will use different logic, but this doesn't impact the end users. You can safely ignore this warning."]}),"\n",(0,n.jsx)(t.admonition,{type:"important",children:(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.em,{children:"wasm"})," file must be served with the correct MIME type ('application/wasm'), otherwise the player will not recognise it properly and fall back onto the alternative (in this case, the warning will also be shown). If the file is served with the wrong MIME type (e.g.: text/html), this must be corrected on the server side."]})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var n=i(96540);const a={},s=n.createContext(a);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);