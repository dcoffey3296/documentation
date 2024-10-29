"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36995],{86091:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var t=a(74848),o=a(28453);const n={},r="How to add CSS or JavaScript files to an Android/iOS project (legacy mobile SDKs)",s={id:"faq/how-to-add-css-or-javascript-files-to-android-ios",title:"How to add CSS or JavaScript files to an Android/iOS project (legacy mobile SDKs)",description:"This guide describes how to add CSS or JavaScript files to an Android or iOS project, and manipulate the player using CSS and/or JavaScript.",source:"@site/theoplayer_versioned_docs/version-v4/faq/01-how-to-add-css-or-javascript-files-to-android-ios.md",sourceDirName:"faq",slug:"/faq/how-to-add-css-or-javascript-files-to-android-ios",permalink:"/documentation/pr-preview/pr-149/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/faq/01-how-to-add-css-or-javascript-files-to-android-ios.md",tags:[],version:"v4",sidebarPosition:1,frontMatter:{},sidebar:"faq",previous:{title:"FAQ",permalink:"/documentation/pr-preview/pr-149/theoplayer/v4/faq/"},next:{title:"How to combat autoplay policies",permalink:"/documentation/pr-preview/pr-149/theoplayer/v4/faq/how-to-combat-autoplay-policies"}},d={},l=[{value:"Pre-requirements",id:"pre-requirements",level:2},{value:"Android",id:"android",level:3},{value:"Add the JavaScript and/or CSS file",id:"add-the-javascript-andor-css-file",level:2},{value:"Legacy Android SDK (4.12.x)",id:"legacy-android-sdk-412x",level:3},{value:"iOS",id:"ios",level:3},{value:"Link the JavaScript and/or CSS file to the player",id:"link-the-javascript-andor-css-file-to-the-player",level:2},{value:"Legacy Android SDK (4.12.x)",id:"legacy-android-sdk-412x-1",level:3},{value:"iOS",id:"ios-1",level:3}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"how-to-add-css-or-javascript-files-to-an-androidios-project-legacy-mobile-sdks",children:"How to add CSS or JavaScript files to an Android/iOS project (legacy mobile SDKs)"})}),"\n",(0,t.jsx)(i.p,{children:"This guide describes how to add CSS or JavaScript files to an Android or iOS project, and manipulate the player using CSS and/or JavaScript."}),"\n",(0,t.jsx)(i.admonition,{type:"important",children:(0,t.jsx)(i.p,{children:"This is only an option with legacy mobile SDKs (up to v4.12.X). In the newer SDKs, no longer based on a webView, this is not possible."})}),"\n",(0,t.jsx)(i.p,{children:"Including these files allows you to create a hybrid application to increase code re-usability:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"You can build a UI for Web, and re-use it in your Android or iOS application."}),"\n",(0,t.jsx)(i.li,{children:"You can add JavaScript logic, and re-use it in your Android or iOS application."}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["Through JavaScript, you have access to some THEOplayer features which aren't exposed in the iOS or Android SDK, such as the ",(0,t.jsx)(i.a,{href:"/documentation/pr-preview/pr-149/theoplayer/v4/how-to-guides/network/introduction",children:"Network API"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"How to communicate with messages between your Android/iOS application, and your JavaScript logic, will be discussed in a follow-up article."}),"\n",(0,t.jsx)(i.h2,{id:"pre-requirements",children:"Pre-requirements"}),"\n",(0,t.jsx)(i.h3,{id:"android",children:"Android"}),"\n",(0,t.jsx)(i.p,{children:"Add or confirm you have an assets folder in your project. In Android Studio, if you do not have an assets directory, you can simply add it by right-clicking > new > folder > assets folder."}),"\n",(0,t.jsx)(i.h2,{id:"add-the-javascript-andor-css-file",children:"Add the JavaScript and/or CSS file"}),"\n",(0,t.jsx)(i.h3,{id:"legacy-android-sdk-412x",children:"Legacy Android SDK (4.12.x)"}),"\n",(0,t.jsx)(i.p,{children:"You can drag and drop files into the assets directory, or right-click and create a new file."}),"\n",(0,t.jsx)(i.p,{children:"The JavaScript file can directly refer to the player variable on which you can perform many actions, for example:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:'player.source = {\n  sources: {\n    src: "//cdn.theoplayer.com/video/elephants-dream/playlist.m3u8",\n    useCredentials: false\n  }\n};\n'})}),"\n",(0,t.jsxs)(i.p,{children:["Please note that it is not possible to inject JavaScript/CSS to ",(0,t.jsx)(i.a,{href:"/documentation/pr-preview/pr-149/theoplayer/getting-started/sdks/android/getting-started",children:"Android SDK 5.0+"})," with this method."]}),"\n",(0,t.jsx)(i.h3,{id:"ios",children:"iOS"}),"\n",(0,t.jsxs)(i.p,{children:["You can ",(0,t.jsx)(i.code,{children:"Add Files to <YOUR_PROJECT>"})," by right-clicking on your project to include new JavaScript or CSS files."]}),"\n",(0,t.jsxs)(i.p,{children:["Please note that currently it is not possible to inject JavaScript/CSS when THEOplayer iOS SDK is ",(0,t.jsx)(i.code,{children:"chromeless"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"link-the-javascript-andor-css-file-to-the-player",children:"Link the JavaScript and/or CSS file to the player"}),"\n",(0,t.jsx)(i.h3,{id:"legacy-android-sdk-412x-1",children:"Legacy Android SDK (4.12.x)"}),"\n",(0,t.jsx)(i.p,{children:"This can be done through XML:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:'<com.theoplayer.android.api.THEOplayerView\n        android:id="@+id/theo_player_view"\n        android:layout_width="match_parent"\n        android:layout_height="match_parent"\n        app:defaultCss="true"\n        app:cssPaths="path/to/style1.css"\n        app:jsPaths="path/to/script1.js" />\n'})}),"\n",(0,t.jsx)(i.p,{children:"Or directly in the player config in Java:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:'THEOplayerConfig playerConfig = new THEOplayerConfig.Builder()\n            .chromeless(false)\n            .defaultCss(true)\n            .cssPaths("path/to/style1.css","path/to/style2.css") // Path is relative to the location of the assets directory\n            .jsPaths("path/to/script1.js","path/to/script2.js")\n            .build();\nTHEOplayerView tpv = new THEOplayerView(this, playerConfig);\n'})}),"\n",(0,t.jsx)(i.h3,{id:"ios-1",children:"iOS"}),"\n",(0,t.jsx)(i.p,{children:"You can do this programmatically through Swift when initializing your THEOplayer instance."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-swift",children:'let stylePath = Bundle.main.path(forResource:"style1", ofType: "css")! // style1.css\nlet scriptPath = Bundle.main.path(forResource:"script1", ofType: "js")! // script1.css\nlet playerConfig = THEOplayerConfiguration(license: "your_license_here", defaultCSS: true, cssPaths:[stylePath], jsPaths: [scriptPath])\nself.theoplayer = THEOplayer(configuration: playerConfig)\n'})})]})}function p(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,i,a)=>{a.d(i,{R:()=>r,x:()=>s});var t=a(96540);const o={},n=t.createContext(o);function r(e){const i=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(n.Provider,{value:i},e.children)}}}]);