"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78922],{78517:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=i(74848),r=i(28453);const s={},o="Clipping",l={id:"how-to-guides/miscellaneous/clipping",title:"Clipping",description:"THEOplayer supports playing only a selected part of a video-on-demand stream, rather than playing it from start to finish. This can be used for example to watch a single game-changing event from a sports match, highlight an important part of a long video presentation, or skip straight to the best part of a song's video clip.",source:"@site/theoplayer_versioned_docs/version-v6/how-to-guides/07-miscellaneous/06-clipping.md",sourceDirName:"how-to-guides/07-miscellaneous",slug:"/how-to-guides/miscellaneous/clipping",permalink:"/documentation/pr-preview/pr-154/theoplayer/v6/how-to-guides/miscellaneous/clipping",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/07-miscellaneous/06-clipping.md",tags:[],version:"v6",sidebarPosition:6,frontMatter:{},sidebar:"roku",previous:{title:"Web Audio",permalink:"/documentation/pr-preview/pr-154/theoplayer/v6/how-to-guides/miscellaneous/webaudio"},next:{title:"Picture-in-Picture",permalink:"/documentation/pr-preview/pr-154/theoplayer/v6/how-to-guides/miscellaneous/picture-in-picture"}},a={},c=[{value:"SDKs",id:"sdks",level:2},{value:"How to use the Clip API",id:"how-to-use-the-clip-api",level:2},{value:"Code Examples",id:"code-examples",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Legacy Android SDK (4.12.X)",id:"legacy-android-sdk-412x",level:5},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x",level:5},{value:"Remarks",id:"remarks",level:2},{value:"Resources",id:"resources",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"clipping",children:"Clipping"})}),"\n",(0,n.jsx)(t.p,{children:"THEOplayer supports playing only a selected part of a video-on-demand stream, rather than playing it from start to finish. This can be used for example to watch a single game-changing event from a sports match, highlight an important part of a long video presentation, or skip straight to the best part of a song's video clip."}),"\n",(0,n.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Through JavaScript injection"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Through JavaScript injection"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Through JavaScript injection"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Through JavaScript injection"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"No*"})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"how-to-use-the-clip-api",children:"How to use the Clip API"}),"\n",(0,n.jsx)(t.p,{children:"The Clip API helps you configure a clip within your content. This allows you to only show a certain part of a video."}),"\n",(0,n.jsx)(t.p,{children:"The start and end of the clipping window can be controlled through the Clip API:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"startTime"})," and ",(0,n.jsx)(t.code,{children:"endTime"}),", expressed in seconds"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["These properties are optional, and you don't need to specify both ",(0,n.jsx)(t.code,{children:"startTime"})," and ",(0,n.jsx)(t.code,{children:"endTime"}),". For example, you can set just ",(0,n.jsx)(t.code,{children:"startTime = 30"})," to have the video start at 30 seconds and play the rest of the video normally."]}),"\n",(0,n.jsx)(t.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,n.jsx)(t.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,n.jsx)(t.p,{children:"The following example shows a video clipped to start at 30 seconds and end at 60 seconds."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"player.source = {\n    sources : [{\n        src : '//cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8', // sets source\n        type : 'application/x-mpegurl' // sets correct type for current source (HLS)\n    }],\n    ...\n    };\n\n// In this example, the clipping is applied in an event listener to make sure it doesn't get called before the source is set\nplayer.addEventListener(\"durationchange\", function() {\n        player.clip.startTime = 30;\n        player.clip.endTime = 60;\n});\n"})}),"\n",(0,n.jsx)(t.h5,{id:"legacy-android-sdk-412x",children:"Legacy Android SDK (4.12.X)"}),"\n",(0,n.jsxs)(t.p,{children:["This is currently possible through JavaScript injection in your Android project. Find out more about this in the article ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add CSS or JavaScript files to an Android/iOS project"}),"."]}),"\n",(0,n.jsx)(t.h5,{id:"legacy-iostvos-sdk-412x",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,n.jsxs)(t.p,{children:["This is currently possible through JavaScript injection in your iOS project. Find out more about this in the article ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add CSS or JavaScript files to an Android/iOS project"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The event listener in the provided code sample is not strictly necessary, but it ensures that the clipping is applied after the source is set. If your source has not been set or is being set but the process is not complete, clipping will not have any effect."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/Clip.html",children:"Clip API Reference"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.theoplayer.com/blog/frame-accurate-clipping-in-hls",children:"Blog article"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add CSS or JavaScript files to an Android/iOS project"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>l});var n=i(96540);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);