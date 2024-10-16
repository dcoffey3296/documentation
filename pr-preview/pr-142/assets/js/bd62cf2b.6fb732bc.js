"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65270],{87347:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(74848),o=r(28453);const s={slug:"/flutter/guides/custom-branches"},a="Custom branches",i={id:"external/flutter-theoplayer-sdk/doc/custom-branches",title:"Custom branches",description:"THEOplayer Flutter SDK is built on top of the existing THEOplayer iOS, Android, and Web SDKs. However, not all native SDK features are available in Flutter from the start.",source:"@site/theoplayer/external/flutter-theoplayer-sdk/doc/custom-branches.md",sourceDirName:"external/flutter-theoplayer-sdk/doc",slug:"/flutter/guides/custom-branches",permalink:"/documentation/pr-preview/pr-142/theoplayer/flutter/guides/custom-branches",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/-/doc/custom-branches.md",tags:[],version:"current",frontMatter:{slug:"/flutter/guides/custom-branches"},sidebar:"flutter",previous:{title:"Creating a minimal demo app",permalink:"/documentation/pr-preview/pr-142/theoplayer/flutter/guides/creating-minimal-app"},next:{title:"Using a custom DRM integration",permalink:"/documentation/pr-preview/pr-142/theoplayer/flutter/guides/custom_drm"}},l={},c=[{value:"Available custom branches",id:"available-custom-branches",level:2},{value:"How to make and use your own custom fork?",id:"how-to-make-and-use-your-own-custom-fork",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"custom-branches",children:"Custom branches"})}),"\n",(0,n.jsx)(t.p,{children:"THEOplayer Flutter SDK is built on top of the existing THEOplayer iOS, Android, and Web SDKs. However, not all native SDK features are available in Flutter from the start."}),"\n",(0,n.jsx)(t.p,{children:"These features will be gradually introduced to the Flutter SDK based on thoughtful prioritization."}),"\n",(0,n.jsx)(t.p,{children:"We understand that sometimes you may need these features before they are fully implemented on the Flutter side and require a working solution as soon as possible."}),"\n",(0,n.jsxs)(t.p,{children:["To address this need, we introduced custom branches prefixed with ",(0,n.jsx)(t.code,{children:"poc/"}),", showcasing sample implementations of existing native features in a custom Flutter SDK fork. These versions are stable enough to start experimenting with and making necessary modifications if needed."]}),"\n",(0,n.jsx)(t.p,{children:"(Please note that these branches may not always be up-to-date with the latest releases.)"}),"\n",(0,n.jsx)(t.p,{children:"These versions also serve as a starting point for custom integration needs. By examining the source code and reviewing changes commit by commit, you can gain a basic understanding of how to expose additional native THEOplayer APIs to Flutter, especially if you are already familiar with the underlying SDKs."}),"\n",(0,n.jsx)(t.h2,{id:"available-custom-branches",children:"Available custom branches"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Branch"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"https://github.com/THEOplayer/flutter-theoplayer-sdk/tree/poc/in-sdk-chromecast-support-7.x",children:"poc/in-sdk-chromecast-support-7.x"})})}),(0,n.jsx)("td",{children:"Exposing Chromecast capabilities on Android, iOS and Web"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"https://github.com/THEOplayer/flutter-theoplayer-sdk/tree/poc/in-sdk-google-ima-support-7.x",children:"poc/in-sdk-google-ima-support-7.x"})})}),(0,n.jsx)("td",{children:"Exposing Google IMA capabilities on Android and iOS"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"how-to-make-and-use-your-own-custom-fork",children:"How to make and use your own custom fork?"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Create a fork of the THEOplayer Flutter SDK repo on ",(0,n.jsx)(t.a,{href:"https://github.com/THEOplayer/flutter-theoplayer-sdk/",children:"GitHub"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Configure your project to use your forked custom ",(0,n.jsx)(t.a,{href:"https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/main/doc/creating-minimal-app.md#option-2-adding-theoplayer-flutter-sdk-as-submodule",children:"THEOplayer SDK as a submodule"})," in your project."]}),"\n",(0,n.jsx)(t.li,{children:"Import THEOplayer and start using it in your application."}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>i});var n=r(96540);const o={},s=n.createContext(o);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);