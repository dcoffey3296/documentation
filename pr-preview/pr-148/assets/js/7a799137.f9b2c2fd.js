"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[39459],{23912:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=o(74848),i=o(28453);const s={},r="How to make the control bar always visible?",l={id:"how-to-guides/ui/how-to-make-control-keys-always-visible",title:"How to make the control bar always visible?",description:"The question above is typically asked by developers who want to be able to see the control bar at all times without having to continuously move the cursor over it (or tap the screen).",source:"@site/theoplayer_versioned_docs/version-v7/how-to-guides/11-ui/04-how-to-make-control-keys-always-visible.md",sourceDirName:"how-to-guides/11-ui",slug:"/how-to-guides/ui/how-to-make-control-keys-always-visible",permalink:"/documentation/pr-preview/pr-148/theoplayer/v7/how-to-guides/ui/how-to-make-control-keys-always-visible",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/how-to-guides/11-ui/04-how-to-make-control-keys-always-visible.md",tags:[],version:"v7",sidebarPosition:4,frontMatter:{},sidebar:"roku",previous:{title:"How to change the Big Play Button?",permalink:"/documentation/pr-preview/pr-148/theoplayer/v7/how-to-guides/ui/how-to-change-big-play-button"},next:{title:"Is it possible to hide/disable the Google IMA UI?",permalink:"/documentation/pr-preview/pr-148/theoplayer/v7/how-to-guides/ui/is-it-possible-to-hide-googla-ima"}},a={},d=[{value:"SDKs",id:"sdks",level:2},{value:"Code examples",id:"code-examples",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Legacy Android SDK (4.12.x)",id:"legacy-android-sdk-412x",level:5},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x",level:5}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"how-to-make-the-control-bar-always-visible",children:"How to make the control bar always visible?"})}),"\n",(0,n.jsx)(t.p,{children:"The question above is typically asked by developers who want to be able to see the control bar at all times without having to continuously move the cursor over it (or tap the screen)."}),"\n",(0,n.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Roku SDK"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Through CSS injection"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Through CSS injection"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"code-examples",children:"Code examples"}),"\n",(0,n.jsx)(t.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,n.jsx)(t.p,{children:"The following CSS line is aimed at overwriting the opacity transition and have the control bar always visible."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-css",children:".theo-secondary-color.vjs-control-bar {\n  opacity: 1 !important;\n}\n"})}),"\n",(0,n.jsx)(t.h5,{id:"legacy-android-sdk-412x",children:"Legacy Android SDK (4.12.x)"}),"\n",(0,n.jsx)(t.p,{children:"To achieve the same result on Android SDK, the same CSS need to be passed to your app."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Step 1"})}),"\n",(0,n.jsxs)(t.p,{children:["To learn how to inject CSS into your Android project, follow the guide ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-148/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"Android SDK Customization - Custom CSS and JavaScript files"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Step 2"})}),"\n",(0,n.jsx)(t.p,{children:"In the CSS file you created, add the code reported above in the Web SDK section."}),"\n",(0,n.jsx)(t.h5,{id:"legacy-iostvos-sdk-412x",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,n.jsx)(t.p,{children:"To achieve the same result on iOS SDK, the same CSS need to be passed to your app."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Step 1"})}),"\n",(0,n.jsxs)(t.p,{children:["To learn how to inject CSS into your iOS project, follow the guide ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-148/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"iOS SDK Customization - Custom CSS and JavaScript files"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Step 2"})}),"\n",(0,n.jsx)(t.p,{children:"In the CSS file you created, add the code reported above in the Web SDK section."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>l});var n=o(96540);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);