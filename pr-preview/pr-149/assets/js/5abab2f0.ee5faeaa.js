"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86564],{15167:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=t(74848),r=t(28453);const s={},a="IRIS.TV",o={id:"how-to-guides/integrations/iris-tv",title:"IRIS.TV",description:"Iris.TV is a recommendation engine. When hooking THEOplayer to the IrisTV SDK, a UI will be overlaid over the default player UI which can be used to navigate through recommendations.",source:"@site/theoplayer_versioned_docs/version-v4/how-to-guides/05-integrations/01-iris-tv.md",sourceDirName:"how-to-guides/05-integrations",slug:"/how-to-guides/integrations/iris-tv",permalink:"/documentation/pr-preview/pr-149/theoplayer/v4/how-to-guides/integrations/iris-tv",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/how-to-guides/05-integrations/01-iris-tv.md",tags:[],version:"v4",sidebarPosition:1,frontMatter:{},sidebar:"roku",previous:{title:"Introduction",permalink:"/documentation/pr-preview/pr-149/theoplayer/v4/how-to-guides/integrations/introduction"},next:{title:"Wowza streaming engine with secure token version 2",permalink:"/documentation/pr-preview/pr-149/theoplayer/v4/how-to-guides/integrations/wowza-streaming-engine-with-secure-token-version-2"}},d={},l=[{value:"SDKs",id:"sdks",level:2},{value:"How to integrate the player with Iris.TV",id:"how-to-integrate-the-player-with-iristv",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android Legacy (4.12.x) SDK",id:"android-legacy-412x-sdk",level:5},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:5},{value:"Include the IrisTV SDK",id:"include-the-iristv-sdk",level:3},{value:"Web SDK",id:"web-sdk-1",level:5},{value:"Legacy Android SDK (4.12.X)",id:"legacy-android-sdk-412x",level:5},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x",level:5},{value:"Include the custom integration",id:"include-the-custom-integration",level:3},{value:"Web SDK",id:"web-sdk-2",level:5},{value:"Legacy Android SDK (4.12.X)",id:"legacy-android-sdk-412x-1",level:5},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x-1",level:5},{value:"Initialize THEOplayerIrisTv",id:"initialize-theoplayeriristv",level:3},{value:"Web SDK",id:"web-sdk-3",level:5},{value:"Legacy Android SDK (4.12.X)",id:"legacy-android-sdk-412x-2",level:5},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x-2",level:5},{value:"Conclusion",id:"conclusion",level:2},{value:"Sample application",id:"sample-application",level:2},{value:"Resources",id:"resources",level:2}];function c(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"iristv",children:"IRIS.TV"})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://www.iris.tv/",children:"Iris.TV"})," is a recommendation engine. When hooking THEOplayer to the IrisTV SDK, a UI will be overlaid over the default player UI which can be used to navigate through recommendations."]}),"\n",(0,n.jsxs)(i.p,{children:["This guide describes how to do a ",(0,n.jsx)(i.a,{href:"https://iristv.atlassian.net/wiki/spaces/API/pages/38567965/Custom+Adaptive+Plug-in+Integrations",children:"custom IrisTV integration"})," in THEOplayer."]}),"\n",(0,n.jsx)(i.h2,{id:"sdks",children:"SDKs"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,n.jsx)(i.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,n.jsx)(i.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,n.jsx)(i.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,n.jsx)(i.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,n.jsx)(i.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"center"},children:"Yes"}),(0,n.jsx)(i.td,{style:{textAlign:"center"},children:"Unverified through CSS/JavaScript injection*"}),(0,n.jsx)(i.td,{style:{textAlign:"center"},children:"Unverified through CSS/JavaScript* injection"}),(0,n.jsx)(i.td,{style:{textAlign:"center"},children:"No"}),(0,n.jsx)(i.td,{style:{textAlign:"center"},children:"Unverified through CSS/JavaScript injection*"}),(0,n.jsx)(i.td,{style:{textAlign:"center"},children:"N/A"})]})})]}),"\n",(0,n.jsx)(i.p,{children:"*CSS/JavaScript injection in the project is only possible with the legacy mobile SDKs (up to 4.12.X)."}),"\n",(0,n.jsx)(i.h2,{id:"how-to-integrate-the-player-with-iristv",children:"How to integrate the player with Iris.TV"}),"\n",(0,n.jsx)(i.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(i.p,{children:"There are two prerequisites in order to continue with this guide:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["You have a THEOplayer license and library. If you don't have THEOplayer yet, you can start your free trial ",(0,n.jsx)(i.a,{href:"https://portal.theoplayer.com/",children:"here"})," or contact your THEOplayer account manager."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"You have some basic knowledge on how to use THEOplayer and have set up a working implementation with THEOplayer in it. You can read on this subject at the following pages:"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-149/theoplayer/v4/getting-started/sdks/web/getting-started",children:"Getting Started on Web"})}),"\n",(0,n.jsx)(i.h5,{id:"android-legacy-412x-sdk",children:"Android Legacy (4.12.x) SDK"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-149/theoplayer/v4/getting-started/sdks/android/getting-started",children:"Getting started on Android Legacy (4.12.x)"})}),"\n",(0,n.jsx)(i.h5,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-149/theoplayer/v4/getting-started/sdks/ios/getting-started",children:"Getting started on iOS"})}),"\n",(0,n.jsx)(i.h3,{id:"include-the-iristv-sdk",children:"Include the IrisTV SDK"}),"\n",(0,n.jsx)(i.p,{children:"You need to include the IrisTV JavaScript library in your project:"}),"\n",(0,n.jsx)(i.h5,{id:"web-sdk-1",children:"Web SDK"}),"\n",(0,n.jsx)(i.p,{children:"Include the script tag right before where you include the THEOplayer.js library:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-html",children:'<script\n  type="text/javascript"\n  src="https://ovp.iris.tv/libs/adaptive/iris.adaptive.js"\n><\/script>\n'})}),"\n",(0,n.jsx)(i.h5,{id:"legacy-android-sdk-412x",children:"Legacy Android SDK (4.12.X)"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Download the JavaScript library available at ",(0,n.jsx)(i.a,{href:"https://ovp.iris.tv/libs/adaptive/iris.adaptive.js",children:"https://ovp.iris.tv/libs/adaptive/iris.adaptive.js"})]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Follow these instructions and add it as a custom JS file in your project: ",(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-149/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add CSS or JavaScript files to an Android/iOS project"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h5,{id:"legacy-iostvos-sdk-412x",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Download the JavaScript library available at ",(0,n.jsx)(i.a,{href:"https://ovp.iris.tv/libs/adaptive/iris.adaptive.js",children:"https://ovp.iris.tv/libs/adaptive/iris.adaptive.js"})]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Follow these instructions and add it as a custom JavaScript file in your project: ",(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-149/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add CSS or JavaScript files to an Android/iOS project"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"include-the-custom-integration",children:"Include the custom integration"}),"\n",(0,n.jsx)(i.p,{children:"You need to include the JavaScript script tag referencing the file containing the custom integration code."}),"\n",(0,n.jsx)(i.h5,{id:"web-sdk-2",children:"Web SDK"}),"\n",(0,n.jsx)(i.p,{children:"Include the script tag this right after where you include the THEOplayer.js library."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-html",children:'<script\n  type="text/javascript"\n  src="https://cdn.theoplayer.com/demos/iristv/THEOplayer.iristv.js"\n><\/script>\n'})}),"\n",(0,n.jsx)(i.p,{children:"You can also add extra styling on top of the IrisTV UI:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-html",children:"<link rel='stylesheet' type='text/css'\n    href='https://cdn.theoplayer.com/demos/iristv/THEOplayer.iristv.css' />\n"})}),"\n",(0,n.jsx)(i.h5,{id:"legacy-android-sdk-412x-1",children:"Legacy Android SDK (4.12.X)"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Download the JavaScript library available at ",(0,n.jsx)(i.a,{href:"https://cdn.theoplayer.com/demos/iristv/THEOplayer.iristv.js",children:"https://cdn.theoplayer.com/demos/iristv/THEOplayer.iristv.js"})]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Follow these instructions to add custom JavaScript files in your project: ",(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-149/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add CSS or JavaScript files to an Android/iOS project"})]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["You can also add extra styling on top of the IrisTV UI downloading the following file (and integrating it too as explained in the guide linked at step 2): ",(0,n.jsx)(i.a,{href:"https://cdn.theoplayer.com/demos/iristv/THEOplayer.iristv.css",children:"https://cdn.theoplayer.com/demos/iristv/THEOplayer.iristv.css"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h5,{id:"legacy-iostvos-sdk-412x-1",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Download the JavaScript library available at ",(0,n.jsx)(i.a,{href:"https://cdn.theoplayer.com/demos/iristv/THEOplayer.iristv.js",children:"https://cdn.theoplayer.com/demos/iristv/THEOplayer.iristv.js"})]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Follow these instructions to add custom JavaScript files in your project: ",(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-149/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add CSS or JavaScript files to an Android/iOS project"})]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["You can also add extra styling on top of the IrisTV UI downloading the following file (and integrating it too as explained in the guide linked at step 2): ",(0,n.jsx)(i.a,{href:"https://cdn.theoplayer.com/demos/iristv/THEOplayer.iristv.css",children:"https://cdn.theoplayer.com/demos/iristv/THEOplayer.iristv.css"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"initialize-theoplayeriristv",children:"Initialize THEOplayerIrisTv"}),"\n",(0,n.jsx)(i.h5,{id:"web-sdk-3",children:"Web SDK"}),"\n",(0,n.jsx)(i.p,{children:"To start displaying the IrisTV UI, you have to call THEOplayerIrisTv() (from THEOplayer.iristv.js), and pass along the THEOplayer instance and your IrisTV configuration. For example:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-html",children:'<script>\n  ...\n  var irisOptions = {\n      client_token: "51afa098ah",\n      platform_id: "5798d994ef995e0d18000176"\n  };\n  THEOplayerIrisTv(player, irisOptions);\n<\/script>\n'})}),"\n",(0,n.jsx)(i.h5,{id:"legacy-android-sdk-412x-2",children:"Legacy Android SDK (4.12.X)"}),"\n",(0,n.jsxs)(i.p,{children:["The Web SDK code should be included in your Android (TV) project. The article at ",(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-149/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add CSS or JavaScript files to an Android/iOS project"})," explains how you can add CSS and JS files to your project. The sample project at ",(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-149/theoplayer/v4/how-to-guides/ui/how-to-insert-a-button",children:"How to insert a button"})," demonstrates this."]}),"\n",(0,n.jsx)(i.h5,{id:"legacy-iostvos-sdk-412x-2",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,n.jsxs)(i.p,{children:["The Web SDK code should be included in your iOS project. The article at ",(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-149/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add CSS or JavaScript files to an Android/iOS project"})," explains how you can add CSS and JavaScript files to your project. The sample project at ",(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-149/theoplayer/v4/how-to-guides/ui/how-to-insert-a-button",children:"How to insert a button"})," demonstrates this."]}),"\n",(0,n.jsx)(i.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(i.p,{children:"In summary, to integrate IrisTV in THEOplayer, is as simple as including their SDK and some custom code in your project."}),"\n",(0,n.jsx)(i.h2,{id:"sample-application",children:"Sample application"}),"\n",(0,n.jsxs)(i.p,{children:["A live demo can be viewed at ",(0,n.jsx)(i.a,{href:"https://cdn.theoplayer.com/demos/iristv/iristv.html",children:"https://cdn.theoplayer.com/demos/iristv/iristv.html"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"resources",children:"Resources"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-149/theoplayer/v4/getting-started/sdks/web/getting-started",children:"Getting Started on Web"})}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-149/theoplayer/v4/getting-started/sdks/android/getting-started",children:"Getting started on Android Legacy (4.12.x)"})}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-149/theoplayer/v4/getting-started/sdks/ios/getting-started",children:"Getting started on iOS"})}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-149/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add CSS or JavaScript files to an Android/iOS project"})}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://iristv.atlassian.net/wiki/spaces/API/pages/263258113/THEO+Adaptive+Plugin",children:"https://iristv.atlassian.net/wiki/spaces/API/pages/263258113/THEO+Adaptive+Plugin"}),": ",(0,n.jsx)(i.a,{href:"http://Iris.tv",children:"Iris.tv"})," documentation - THEO adaptive plugin"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://iristv.atlassian.net/wiki/spaces/API/pages/38567965/Custom+Adaptive+Plugin",children:"https://iristv.atlassian.net/wiki/spaces/API/pages/38567965/Custom+Adaptive+Plugin"})," : Iris.tv documentation - Custom adaptive plugin"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"http://www.iris.tv/",children:"http://www.iris.tv/"}),": Iris.tv"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>o});var n=t(96540);const r={},s=n.createContext(r);function a(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);