"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53384],{65767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=n(74848),o=n(28453);const s={},r="How to disable click to pause",a={id:"how-to-guides/ui/how-to-disable-click-to-pause",title:"How to disable click to pause",description:"When you use the default UI of THEOplayer you can pause (and resume) the video by clicking anywhere on the video (except in the control bar).",source:"@site/theoplayer_versioned_docs/version-v6/how-to-guides/11-ui/15-how-to-disable-click-to-pause.md",sourceDirName:"how-to-guides/11-ui",slug:"/how-to-guides/ui/how-to-disable-click-to-pause",permalink:"/documentation/pr-preview/pr-155/theoplayer/v6/how-to-guides/ui/how-to-disable-click-to-pause",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/11-ui/15-how-to-disable-click-to-pause.md",tags:[],version:"v6",sidebarPosition:15,frontMatter:{},sidebar:"roku",previous:{title:"How to detect the visibility of the default control bar",permalink:"/documentation/pr-preview/pr-155/theoplayer/v6/how-to-guides/ui/how-to-detect-visibility-default-control-bar"},next:{title:"Introduction",permalink:"/documentation/pr-preview/pr-155/theoplayer/v6/how-to-guides/license/introduction"}},l={},c=[{value:"SDKs",id:"sdks",level:2},{value:"Web SDK",id:"web-sdk",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"how-to-disable-click-to-pause",children:"How to disable click to pause"})}),"\n",(0,i.jsxs)(t.p,{children:["When you use the default UI of THEOplayer you can pause (and resume) the video by clicking anywhere on the video (except in the control bar).\nYou can confirm this behavior at ",(0,i.jsx)(t.a,{href:"https://demo.theoplayer.com/test-your-stream-with-statistics",children:"https://demo.theoplayer.com/test-your-stream-with-statistics"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"You might be interested in disabling this behavior because your functional requirements don't allow you to pause the video."}),"\n",(0,i.jsxs)(t.p,{children:["You can disable this default UX behavior through CSS on both the Web SDK, iOS SDK and Android SDK.\nThe next section will focus on the Web SDK specifically. We'll also discuss some related APIs.\nTo achieve the same on the iOS SDK you can implement the Web SDK approach through ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-155/theoplayer/v4/getting-started/sdks/ios/ios-sdk-customization",children:"iOS SDK customization"}),".\nTo achieve the same on the Android Legacy (4.12.x) SDK you can implement the Web SDK approach through ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-155/theoplayer/v4/getting-started/sdks/android/android-sdk-customization",children:"Android Legacy (4.12.x) SDK customization"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Roku SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Yes, but unverified through CSS/JavaScript injection"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Yes, but unverified through CSS/JavaScript injection"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"})]})})]}),"\n",(0,i.jsx)(t.h3,{id:"web-sdk",children:"Web SDK"}),"\n",(0,i.jsx)(t.p,{children:"The following CSS snippet disables pause to click by no longer catching the pointer event."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-css",children:".video-js .vjs-tech {\n  pointer-events: none;\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The following JavaScript snippet automatically resumes a video when someone tries to pause it by leveraging the ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/PlayerEventMap.html#pause",children:(0,i.jsx)(t.code,{children:"pause"})})," event and the ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v6/api-reference/web/classes/ChromelessPlayer.html#play",children:(0,i.jsx)(t.code,{children:"play()"})})," method."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'player.addEventListener("pause", () => {\n  player.play();\n});\n'})}),"\n",(0,i.jsx)(t.p,{children:"The following CSS snippet hides the play and pause button."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-css",children:".video-js .vjs-play-control {\n  display: none;\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Interested in autoplay behavior? You might find ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-155/theoplayer/v6/faq/how-to-combat-autoplay-policies",children:'"How to combat autoplay policies"'})," an interesting read."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);