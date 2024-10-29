"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[22129],{94804:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=t(74848),o=t(28453);const a={},s="Video Clipping",r={id:"knowledge-base/playback/video-clipping",title:"Video Clipping",description:"THEOplayer supports playing only a selected part of a video-on-demand stream, rather than playing it from start to finish. This can be used for example to watch a single game-changing event from a sports match, highlight an important part of a long video presentation, or skip straight to the best part of a song's video clip.",source:"@site/theoplayer_versioned_docs/version-v6/knowledge-base/03-playback/06-video-clipping.md",sourceDirName:"knowledge-base/03-playback",slug:"/knowledge-base/playback/video-clipping",permalink:"/documentation/pr-preview/pr-149/theoplayer/v6/knowledge-base/playback/video-clipping",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/knowledge-base/03-playback/06-video-clipping.md",tags:[],version:"v6",sidebarPosition:6,frontMatter:{},sidebar:"roku",previous:{title:"Basic guide to Web Audio API",permalink:"/documentation/pr-preview/pr-149/theoplayer/v6/knowledge-base/playback/basic-guide-web-audio-api"},next:{title:"Introduction",permalink:"/documentation/pr-preview/pr-149/theoplayer/v6/knowledge-base/playback/subtitles-and-closed-captions/introduction"}},p={},l=[{value:"API",id:"api",level:2},{value:"Basic setup",id:"basic-setup",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"video-clipping",children:"Video Clipping"})}),"\n",(0,i.jsx)(n.p,{children:"THEOplayer supports playing only a selected part of a video-on-demand stream, rather than playing it from start to finish. This can be used for example to watch a single game-changing event from a sports match, highlight an important part of a long video presentation, or skip straight to the best part of a song's video clip."}),"\n",(0,i.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,i.jsxs)(n.p,{children:["The start and end of the clipping window can be controlled through the ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/Clip.html",children:"Clip API"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"startTime"})," and ",(0,i.jsx)(n.code,{children:"endTime"}),", expressed in seconds"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["These properties are optional, and you don't need to specify both ",(0,i.jsx)(n.code,{children:"startTime"})," and ",(0,i.jsx)(n.code,{children:"endTime"}),". For example, you can set just ",(0,i.jsx)(n.code,{children:"startTime = 30"})," to have the video start at 30 seconds and play the rest of the video normally."]}),"\n",(0,i.jsx)(n.h2,{id:"basic-setup",children:"Basic setup"}),"\n",(0,i.jsx)(n.p,{children:"The following example shows a video clipped to start at 30 seconds and end at 60 seconds."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"var player = ...;\nplayer.source = {\n    sources : [{\n     src : '//cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8', // sets HLS source\n     type : 'application/x-mpegurl' // sets type to HLS\n    }],\n  poster: '//cdn.theoplayer.com/video/big_buck_bunny/poster.jpg'\n    };\n\nplayer.clip.startTime = 30;\nplayer.clip.endTime = 60;\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(96540);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);