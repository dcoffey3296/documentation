"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5468],{80096:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var r=t(74848),o=t(28453);const i={},a="How to enable experimental native rendering on Android",d={id:"getting-started/sdks/android/how-to-enable-native-rendering",title:"How to enable experimental native rendering on Android",description:"This how-to guide describes how to implement experimental native rendering using the THEOplayer Legacy Android SDK (4.12.x).",source:"@site/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/02-android/04-how-to-enable-native-rendering.md",sourceDirName:"getting-started/01-sdks/02-android",slug:"/getting-started/sdks/android/how-to-enable-native-rendering",permalink:"/documentation/pr-preview/pr-153/theoplayer/v4/getting-started/sdks/android/how-to-enable-native-rendering",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/02-android/04-how-to-enable-native-rendering.md",tags:[],version:"v4",sidebarPosition:4,frontMatter:{},sidebar:"android",previous:{title:"How to couple the native MediaRouteButton to THEOplayer",permalink:"/documentation/pr-preview/pr-153/theoplayer/v4/getting-started/sdks/android/how-to-couple-native-mediaroutebutton"},next:{title:"How to do offline Playback with AES-128 Encrypted Streams on Android",permalink:"/documentation/pr-preview/pr-153/theoplayer/v4/getting-started/sdks/android/how-to-do-offline-playback-with-aes-128-encryption"}},s={},l=[{value:"Code example",id:"code-example",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"how-to-enable-experimental-native-rendering-on-android",children:"How to enable experimental native rendering on Android"})}),"\n",(0,r.jsx)(n.p,{children:"This how-to guide describes how to implement experimental native rendering using the THEOplayer Legacy Android SDK (4.12.x)."}),"\n",(0,r.jsx)(n.h2,{id:"code-example",children:"Code example"}),"\n",(0,r.jsx)(n.p,{children:"The snippet below configures a source description with THEOplayer which will be rendered natively:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"private void playSourceWithNativeRendering(String src) {\n    tpv.getPlayer().setSource(sourceDescription(\n        typedSource(src)\n            .setNativeRenderingEnabled(true)\n            .build()\n    ).build())\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This is an experimental feature and it can only be used with DASH streams. You can find more information about the feature on our API docs ",(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/source/TypedSource.Builder.html#setNativeRenderingEnabled(boolean)",children:"here"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"This API does not exist on the native Android SDK."})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var r=t(96540);const o={},i=r.createContext(o);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);