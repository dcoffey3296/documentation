"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[34618],{2278:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=r(74848),i=r(28453);const s={},a="How to get frame-accurate currentTime display in the UI Control bar",o={id:"getting-started/sdks/web/how-to-get-frame-accurate-currentime-display",title:"How to get frame-accurate currentTime display in the UI Control bar",description:"This article will show you how to display a frame-accurate currentTime on your THEOplayer instance UI control bar. For more information regarding the currentTime itself, please refer to the reference API.",source:"@site/theoplayer_versioned_docs/version-v7/getting-started/01-sdks/01-web/08-how-to-get-frame-accurate-currentime-display.md",sourceDirName:"getting-started/01-sdks/01-web",slug:"/getting-started/sdks/web/how-to-get-frame-accurate-currentime-display",permalink:"/documentation/pr-preview/pr-148/theoplayer/v7/getting-started/sdks/web/how-to-get-frame-accurate-currentime-display",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/getting-started/01-sdks/01-web/08-how-to-get-frame-accurate-currentime-display.md",tags:[],version:"v7",sidebarPosition:8,frontMatter:{},sidebar:"web",previous:{title:"How to customize quality selection and labels on the default UI (MP4)",permalink:"/documentation/pr-preview/pr-148/theoplayer/v7/getting-started/sdks/web/how-to-customize-quality-selection"},next:{title:"How to play an LCEVC source with THEOplayer",permalink:"/documentation/pr-preview/pr-148/theoplayer/v7/getting-started/sdks/web/how-to-play-an-lcevc-source-with-theoplayer"}},l={},c=[{value:"SDKs",id:"sdks",level:2},{value:"Changing the currentTime UI display",id:"changing-the-currenttime-ui-display",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android &amp; iOS SDK",id:"android--ios-sdk",level:5},{value:"Remarks",id:"remarks",level:2},{value:"Resources",id:"resources",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"how-to-get-frame-accurate-currenttime-display-in-the-ui-control-bar",children:"How to get frame-accurate currentTime display in the UI Control bar"})}),"\n",(0,n.jsxs)(t.p,{children:["This article will show you how to display a frame-accurate currentTime on your THEOplayer instance UI control bar. For more information regarding the currentTime itself, please refer to the ",(0,n.jsx)(t.a,{href:"pathname:///theoplayer/v7/api-reference/web/classes/ChromelessPlayer.html",children:"reference API"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"changing-the-currenttime-ui-display",children:"Changing the currentTime UI display"}),"\n",(0,n.jsx)(t.p,{children:"At this moment there is no official THEOplayer feature to display a frame-accurate currentTime in the UI Controlbar. The following snippets rewrite the innerHTMLText of the currentTime element."}),"\n",(0,n.jsx)(t.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'function secondsToHms(d) {\n  d = Number(d);\n  console.log(player.currentTime);\n  var ms = d % 1;\n  var h = Math.floor(d / 3600);\n  var m = Math.floor((d % 3600) / 60);\n  var s = Math.floor((d % 3600) % 60);\n\n  var hDisplay = h < 10 ? "0" + h : h;\n  var mDisplay = m < 10 ? "0" + m : m;\n  var sDisplay = s < 10 ? "0" + s : s;\n  var msDisplay = ms.toFixed(3);\n  //var msDisplay = d.toPrecision() -player.currentTime.toFixed();\n  return (\n    hDisplay +\n    ":" +\n    mDisplay +\n    ":" +\n    sDisplay +\n    "." +\n    String(msDisplay).split(".")[1]\n  );\n}\n\nsetInterval(function () {\n  document.querySelector(".vjs-current-time-display").innerText = secondsToHms(\n    player.currentTime\n  );\n}, 1);\n\nplayer.addEventListener("durationchange", function (e) {\n  document.querySelector(".vjs-duration").innerText = secondsToHms(\n    Math.floor(e.duration)\n  );\n});\n'})}),"\n",(0,n.jsx)(t.h5,{id:"android--ios-sdk",children:"Android & iOS SDK"}),"\n",(0,n.jsxs)(t.p,{children:["This can be done through JavaScript injection: ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-148/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add CSS or JavaScript files to an Android/iOS project"})]}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsx)(t.p,{children:"With the same logic, slightly modified, you could also decide to show the frame number for that second instead of the milliseconds."}),"\n",(0,n.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"pathname:///theoplayer/v7/api-reference/web/classes/ChromelessPlayer.html",children:"API reference - player properties"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var n=r(96540);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);