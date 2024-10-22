"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[66550],{78901:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=i(74848),r=i(28453);const a={},s="Is it a problem if the viewer pauses a live stream for longer than the DVR window",o={id:"faq/is-it-a-problem-if-viewer-pauses-live-stream-longer-than-dvr-window",title:"Is it a problem if the viewer pauses a live stream for longer than the DVR window",description:"In general, this is no problem as the player will continue playback, once exhausted the current buffer, from the nearest point available, in this case the end of the sliding window.",source:"@site/theoplayer_versioned_docs/version-v7/faq/52-is-it-a-problem-if-viewer-pauses-live-stream-longer-than-dvr-window.md",sourceDirName:"faq",slug:"/faq/is-it-a-problem-if-viewer-pauses-live-stream-longer-than-dvr-window",permalink:"/documentation/pr-preview/pr-145/theoplayer/v7/faq/is-it-a-problem-if-viewer-pauses-live-stream-longer-than-dvr-window",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/faq/52-is-it-a-problem-if-viewer-pauses-live-stream-longer-than-dvr-window.md",tags:[],version:"v7",sidebarPosition:52,frontMatter:{},sidebar:"faq",previous:{title:"Is it possible to have multiple player instances play at the same time",permalink:"/documentation/pr-preview/pr-145/theoplayer/v7/faq/possible-to-have-multiple-player-instances-at-same-time"},next:{title:"THEOplayer Features & Modules",permalink:"/documentation/pr-preview/pr-145/theoplayer/v7/faq/theoplayer-features-modules"}},l={},p=[];function h(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"is-it-a-problem-if-the-viewer-pauses-a-live-stream-for-longer-than-the-dvr-window",children:"Is it a problem if the viewer pauses a live stream for longer than the DVR window"})}),"\n",(0,n.jsx)(t.p,{children:"In general, this is no problem as the player will continue playback, once exhausted the current buffer, from the nearest point available, in this case the end of the sliding window."}),"\n",(0,n.jsx)(t.p,{children:"The viewer may perceive this as a peculiar behavior. They will see at first a small video portion still player that connects to what they were watching before pausing the video: this is what was contained in the current buffer. Then the player will appear to seek on its own, without the user requesting it, to a new position."}),"\n",(0,n.jsx)(t.p,{children:"In case you wish to avoid this behavior and skip the current buffer, this is also possible with a simple snippet that on resume checks whether the current position is still within the DVR window, and if it is not, then it seeks directly to a new position (without playing the current buffer)."}),"\n",(0,n.jsx)(t.p,{children:"This is a JavaScript example for this, where the DVR window is 60 sec long and the new custom position to seek to is in the middle of it."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'player.addEventListener("play", () => {\n  player.currentTime =\n    player.seekable.end() - player.currentTime > 60\n      ? player.seekable.end() - 30\n      : player.currentTime;\n});\n'})})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>o});var n=i(96540);const r={},a=n.createContext(r);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);