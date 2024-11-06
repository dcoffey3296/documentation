"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[21366],{9063:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>r});var s=i(74848),n=i(28453);const a={},o="Introduction",l={id:"knowledge-base/playback/subtitles-and-closed-captions/introduction",title:"Introduction",description:"THEOplayer supports rendering of subtitles and closed captions in both live and VOD content via the WebVTT format. You can supply subtitles and closed captions to THEOplayer in WebVTT format either externally via the `` element or embedded inside the HLS stream.",source:"@site/theoplayer/knowledge-base/03-playback/subtitles-and-closed-captions/00-introduction.md",sourceDirName:"knowledge-base/03-playback/subtitles-and-closed-captions",slug:"/knowledge-base/playback/subtitles-and-closed-captions/introduction",permalink:"/documentation/pr-preview/pr-153/theoplayer/knowledge-base/playback/subtitles-and-closed-captions/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer/knowledge-base/03-playback/subtitles-and-closed-captions/00-introduction.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"roku",previous:{title:"Video Clipping",permalink:"/documentation/pr-preview/pr-153/theoplayer/knowledge-base/playback/video-clipping"},next:{title:"Chapter markers",permalink:"/documentation/pr-preview/pr-153/theoplayer/knowledge-base/playback/subtitles-and-closed-captions/chapter-markers"}},d={},r=[{value:"Embedded WebVTTs in the HLS playlist",id:"embedded-webvtts-in-the-hls-playlist",level:2},{value:"Examples",id:"examples",level:2},{value:"Sideloading WebVTT",id:"sideloading-webvtt",level:3},{value:"HTTP Live Streaming Manifest with embedded WebVTT subtitles",id:"http-live-streaming-manifest-with-embedded-webvtt-subtitles",level:3},{value:"Demo",id:"demo",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,s.jsxs)(t.p,{children:["THEOplayer supports rendering of subtitles and closed captions in both live and VOD content via the WebVTT format. You can supply subtitles and closed captions to THEOplayer in WebVTT format either externally via the ",(0,s.jsx)(t.code,{children:"<track>"})," element or embedded inside the HLS stream."]}),"\n",(0,s.jsx)(t.h2,{id:"embedded-webvtts-in-the-hls-playlist",children:"Embedded WebVTTs in the HLS playlist"}),"\n",(0,s.jsx)(t.p,{children:"Apart from specifying the WebVTT file in the track element, THEOplayer has support for WebVTT captions and subtitles embedded in the HLS m3u8 manifest file."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.h3,{id:"sideloading-webvtt",children:"Sideloading WebVTT"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-153/theoplayer/how-to-guides/texttrack/how-to-insert-subtitles",children:"This page"})," explains how you can insert WebVTT files."]}),"\n",(0,s.jsx)(t.h3,{id:"http-live-streaming-manifest-with-embedded-webvtt-subtitles",children:"HTTP Live Streaming Manifest with embedded WebVTT subtitles"}),"\n",(0,s.jsx)(t.p,{children:"The following is a root HLS manifest with English, French, Spanish and Japanese subtitles. THEOplayer will handle and parse the required subtitles and synchronize them with the stream."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:'#EXTM3U\n#EXT-X-MEDIA:TYPE=SUBTITLES,GROUP-ID="subs",NAME="English",DEFAULT=YES,AUTOSELECT=YES,FORCED=NO,LANGUAGE="en",CHARACTERISTICS="public.accessibility.transcribes-spoken-dialog, public.accessibility.describes-music-and-sound",URI="subtitles/eng/prog_index.m3u8"\n#EXT-X-MEDIA:TYPE=SUBTITLES,GROUP-ID="subs",NAME="Fran\xe7ais",DEFAULT=NO,AUTOSELECT=YES,FORCED=NO,LANGUAGE="fr",CHARACTERISTICS="public.accessibility.transcribes-spoken-dialog, public.accessibility.describes-music-and-sound",URI="subtitles/fra/prog_index.m3u8"\n#EXT-X-MEDIA:TYPE=SUBTITLES,GROUP-ID="subs",NAME="Espa\xf1ol",DEFAULT=NO,AUTOSELECT=YES,FORCED=NO,LANGUAGE="es",CHARACTERISTICS="public.accessibility.transcribes-spoken-dialog, public.accessibility.describes-music-and-sound",URI="subtitles/spa/prog_index.m3u8"\n#EXT-X-MEDIA:TYPE=SUBTITLES,GROUP-ID="subs",NAME="\u65e5\u672c\u8a9e",DEFAULT=NO,AUTOSELECT=YES,FORCED=NO,LANGUAGE="ja",CHARACTERISTICS="public.accessibility.transcribes-spoken-dialog, public.accessibility.describes-music-and-sound",URI="subtitles/jpn/prog_index.m3u8"\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=1860000,RESOLUTION=960x540,CODECS="avc1.42c01f,mp4a.40.2",SUBTITLES="subs"\ngear1/prog_index.m3u8\n'})}),"\n",(0,s.jsx)(t.h2,{id:"demo",children:"Demo"}),"\n",(0,s.jsxs)(t.p,{children:["A demo on closed captions and subtitles can be found at ",(0,s.jsx)(t.a,{href:"https://demo.theoplayer.com/closed-captions-subtitles",children:"https://demo.theoplayer.com/closed-captions-subtitles"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>l});var s=i(96540);const n={},a=s.createContext(n);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);