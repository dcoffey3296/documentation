"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60355],{52568:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(74848),a=r(28453);const i={},o="How to apply accurate buffering strategy",s={id:"faq/how-to-apply-accurate-buffering-strategy",title:"How to apply accurate buffering strategy",description:"By default, THEOplayer buffers 20 seconds of video including audio/subtitles in order to guarantee smooth playout.",source:"@site/theoplayer/faq/58-how-to-apply-accurate-buffering-strategy.md",sourceDirName:"faq",slug:"/faq/how-to-apply-accurate-buffering-strategy",permalink:"/documentation/pr-preview/pr-147/theoplayer/faq/how-to-apply-accurate-buffering-strategy",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer/faq/58-how-to-apply-accurate-buffering-strategy.md",tags:[],version:"current",sidebarPosition:58,frontMatter:{},sidebar:"faq",previous:{title:"How to use the CDN fallback/backup stream feature",permalink:"/documentation/pr-preview/pr-147/theoplayer/faq/cdn-fallback-backup-stream-feature"},next:{title:"How can I distribute 4K content?",permalink:"/documentation/pr-preview/pr-147/theoplayer/faq/how-can-i-distribute-4k-content"}},d={},c=[{value:"Proactive strategy",id:"proactive-strategy",level:2},{value:"Resources",id:"resources",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"how-to-apply-accurate-buffering-strategy",children:"How to apply accurate buffering strategy"})}),"\n",(0,n.jsxs)(t.p,{children:["By default, THEOplayer buffers 20 seconds of video including audio/subtitles in order to guarantee smooth playout.\nTHEOplayer (alike other Web players) is relying on ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer",children:"HTML SourceBuffer API"})," for buffering purposes.\nUnfortunately there is no method which informs you how big the buffer size of given browser/device is. Of course, it can be different for device, and even browser.\nIn consequence in edge circumstances might happen that the following error is encountered:\n",(0,n.jsx)(t.code,{children:"Player error: Failed to execute 'appendBuffer' on 'SourceBuffer': The SourceBuffer is full, and cannot free space to append additional buffers."})]}),"\n",(0,n.jsx)(t.h2,{id:"proactive-strategy",children:"Proactive strategy"}),"\n",(0,n.jsxs)(t.p,{children:["One of the approach to deal with above issue is to apply proactive strategy which adjust ",(0,n.jsx)(t.code,{children:"player.abr.targetBuffer"})," depending on what quality is currently used.\nThe below table presents what approximately bandwidth is required for video streaming:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Resolutions"}),(0,n.jsx)(t.th,{children:"Required Bandwidth (H264)"}),(0,n.jsx)(t.th,{children:"Required Bandwidth (H265)"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1280x720 (HD)"}),(0,n.jsx)(t.td,{children:"3Mbps"}),(0,n.jsx)(t.td,{children:"1.5Mbps"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1920x1080 (FHD)"}),(0,n.jsx)(t.td,{children:"6Mbps"}),(0,n.jsx)(t.td,{children:"3Mbps"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"3840x2160 (UHD)"}),(0,n.jsx)(t.td,{children:"25Mbps"}),(0,n.jsx)(t.td,{children:"12Mbps"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"4096x2160 (4K)"}),(0,n.jsx)(t.td,{children:"32Mbps"}),(0,n.jsx)(t.td,{children:"15Mbps"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Taking above table into account, the logic responsible for the proactive strategy can look like:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'player.addEventListener("representationchange", function (event) {\n  // specifies how big bandwidth is required for the current quality\n  var representationBandwidth = event.representation.bandwidth;\n  // player.abr.targetBuffer is 20 by default\n  var targetBuffer = player.abr.targetBuffer;\n\n  // SD\n  if (representationBandwidth < 3000000) {\n    targetBuffer = 20;\n  } else if (\n    representationBandwidth > 3000000 &&\n    representationBandwidth < 6000000\n  ) {\n    // HD\n    targetBuffer = 10;\n  } else if (representationBandwidth > 6000000) {\n    //FHD, UHD, 4K\n    targetBuffer = 5;\n  }\n\n  player.abr.targetBuffer = targetBuffer;\n  console.log(\n    "representationchange - updated player.abr.targetBuffer: " +\n      player.abr.targetBuffer\n  );\n});\n'})}),"\n",(0,n.jsx)(t.p,{children:"Please note that the above numbers should be adjusted depending on the video content used."}),"\n",(0,n.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.synopi.com/bandwidth-required-for-hd-fhd-4k-video/",children:"Bandwidth Required For HD FHD 4K Video Streaming"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>s});var n=r(96540);const a={},i=n.createContext(a);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);