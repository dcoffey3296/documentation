"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[40351],{1140:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=s(74848),i=s(28453);const o={},r="How to detect the visibility of the default control bar",a={id:"how-to-guides/ui/how-to-detect-visibility-default-control-bar",title:"How to detect the visibility of the default control bar",description:"This question is typically asked by developers that want to insert a custom element that should",source:"@site/theoplayer_versioned_docs/version-v4/how-to-guides/11-ui/14-how-to-detect-visibility-default-control-bar.md",sourceDirName:"how-to-guides/11-ui",slug:"/how-to-guides/ui/how-to-detect-visibility-default-control-bar",permalink:"/documentation/pr-preview/pr-154/theoplayer/v4/how-to-guides/ui/how-to-detect-visibility-default-control-bar",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/how-to-guides/11-ui/14-how-to-detect-visibility-default-control-bar.md",tags:[],version:"v4",sidebarPosition:14,frontMatter:{},sidebar:"roku",previous:{title:"UI Skinning",permalink:"/documentation/pr-preview/pr-154/theoplayer/v4/how-to-guides/ui/ui-skinning"},next:{title:"How to disable click to pause",permalink:"/documentation/pr-preview/pr-154/theoplayer/v4/how-to-guides/ui/how-to-disable-click-to-pause"}},l={},c=[{value:"Using a Chromeless UI",id:"using-a-chromeless-ui",level:2},{value:"Using a MutationObserver",id:"using-a-mutationobserver",level:2},{value:"SDKs",id:"sdks",level:3},{value:"Web SDK",id:"web-sdk",level:4},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x",level:4},{value:"Legacy Android SDK (4.12.x)",id:"legacy-android-sdk-412x",level:5},{value:"Using CSS",id:"using-css",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"how-to-detect-the-visibility-of-the-default-control-bar",children:"How to detect the visibility of the default control bar"})}),"\n",(0,n.jsx)(t.p,{children:"This question is typically asked by developers that want to insert a custom element that should"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"disappear when the default control bar disappears,"}),"\n",(0,n.jsx)(t.li,{children:"appear when the default control bar appears."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"This article discusses three approaches that allow you to detect whether the control bar is visible."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#using-a-chromeless-ui",children:"Using a Chromeless UI"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#using-a-mutationobserver",children:"Using a MutationObserver"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#using-css",children:"Using CSS"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"using-a-chromeless-ui",children:"Using a Chromeless UI"}),"\n",(0,n.jsxs)(t.p,{children:["Instead of making the default THEOplayer UI fit your use cases,\nit might make sense to opt for a ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v4/how-to-guides/ui/how-to-build-chromeless-ui",children:"Chromeless UI"}),".\nWhen you use a Chromeless UI, you have full control over the UI and UX,\nand you are not restricted to the complexities of our default UI."]}),"\n",(0,n.jsx)(t.h2,{id:"using-a-mutationobserver",children:"Using a MutationObserver"}),"\n",(0,n.jsxs)(t.p,{children:["You can use a ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver",children:(0,n.jsx)(t.code,{children:"MutationObserver"})})," to detect the visibility of the control bar."]}),"\n",(0,n.jsxs)(t.p,{children:["Generally speaking, the default control bar is visible when the following scenario is true for your THEOplayer container's ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/classList",children:(0,n.jsx)(t.code,{children:"classList"})}),":"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"vjs-user-active"})," class is listed in the ",(0,n.jsx)(t.code,{children:"classList"}),";"]}),"\n",(0,n.jsxs)(t.li,{children:["Or if the ",(0,n.jsx)(t.code,{children:"vjs-paused"})," class is listed in the ",(0,n.jsx)(t.code,{children:"classList"}),";"]}),"\n",(0,n.jsxs)(t.li,{children:["And the ",(0,n.jsx)(t.code,{children:"vjs-has-started"})," class is listed in the ",(0,n.jsx)(t.code,{children:"classList"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The control bar is visible in the screenshot below because ",(0,n.jsx)(t.code,{children:"vjs-paused"})," and ",(0,n.jsx)(t.code,{children:"vjs-has-started"})," are classes of the THEOplayer container,\nas highlighted with the yellow rectangles."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(47634).A+"",width:"2880",height:"1800"})}),"\n",(0,n.jsx)(t.p,{children:"If we map that to JavaScript code:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'const theoplayerContainer = document.querySelector(".video-js");\nconst controlBarVisible =\n  (theoplayerContainer.classList.contains("vjs-user-active") ||\n    theoplayerContainer.classList.contains("vjs-paused")) &&\n  theoplayerContainer.classList.contains("vjs-has-started");\n'})}),"\n",(0,n.jsx)(t.p,{children:"This approach is also valid for our default UI on the iOS and Android SDK,\nbecause their default UI can be customized through the same JavaScript (and CSS) as explained at"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v4/getting-started/sdks/ios/ios-sdk-customization",children:"iOS SDK Customization"})," for the iOS SDK"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v4/getting-started/sdks/android/android-sdk-customization",children:"Android Legacy (4.12.x) SDK Customization"})," for the Android SDK"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:'It should be noted that this approach does not take the opacity of the control bar into account.\nThe default control bar UI has a "fade in" and "fade out" effect.\nIf you want to take this into account, you can capture its opacity through JavaScript when you have a reference to your control bar DOM element.\nThe snippet below illustrates how you could poll the opacity every 100ms.'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'setInterval(function () {\n  const controlBar = document.querySelectorAll(".vjs-control-bar")[1];\n  const controlBarOpacity = getComputedStyle(controlBar).opacity;\n  console.log("control bar opacity", controlBarOpacity);\n}, 100);\n'})}),"\n",(0,n.jsx)(t.p,{children:"The next sub-sections discusses this approach in more detail per SDK."}),"\n",(0,n.jsx)(t.h3,{id:"sdks",children:"SDKs"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Roku SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Verified through CSS/JavaScript injection"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Unverified through CSS/JavaScript injection"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Unverified through CSS/JavaScript injection"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"})]})})]}),"\n",(0,n.jsx)(t.h4,{id:"web-sdk",children:"Web SDK"}),"\n",(0,n.jsxs)(t.p,{children:["The snippet below demonstrates how use the previously specified ",(0,n.jsx)(t.code,{children:"controlBarVisible"})," variable in combination with a ",(0,n.jsx)(t.code,{children:"MutationObserver"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'const theoplayerContainer = document.querySelector(".video-js");\nvar controlBarObserver = new MutationObserver(function (event) {\n  for (let i = 0; i < event.length; i++) {\n    const el = event[i].target;\n    const controlBarVisible =\n      (el.classList.contains("vjs-user-active") ||\n        el.classList.contains("vjs-paused")) &&\n      el.classList.contains("vjs-has-started");\n    const message = {\n      controlBarVisible: controlBarVisible\n    };\n    console.log(message);\n  }\n});\ncontrolBarObserver.observe(theoplayerContainer, {\n  attributes: true,\n  attributeFilter: ["class"],\n  childList: false,\n  characterData: false\n});\n'})}),"\n",(0,n.jsxs)(t.p,{children:["You can try out this snippet at ",(0,n.jsx)(t.a,{href:"https://detect-visibility-default-control-bar--thijslowette.repl.co/",children:"https://detect-visibility-default-control-bar--thijslowette.repl.co/"}),",\nand verify the ",(0,n.jsx)(t.code,{children:'{"controlBarVisible": true}'})," (or ",(0,n.jsx)(t.code,{children:'{"controlBarVisible": false}'}),") logs in the developer console."]}),"\n",(0,n.jsx)(t.h4,{id:"legacy-iostvos-sdk-412x",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,n.jsx)(t.p,{children:"You can leverage the approach of the Web SDK in your iOS project."}),"\n",(0,n.jsxs)(t.p,{children:["Firstly, you'll need to set up your project to support communication between your native code and JavaScript.\nThis flow is described at ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v4/getting-started/sdks/ios/ios-sdk-customization",children:"iOS SDK Customization"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"This means that your JavaScript code could resemble the snippet below:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'const theoplayerContainer = document.querySelector(".video-js");\nvar controlBarObserver = new MutationObserver(function (event) {\n  for (let i = 0; i < event.length; i++) {\n    const el = event[i].target;\n    const controlBarVisible =\n      (el.classList.contains("vjs-user-active") ||\n        el.classList.contains("vjs-paused")) &&\n      el.classList.contains("vjs-has-started");\n    const message = {\n      controlBarVisible: controlBarVisible\n    };\n    console.log(message);\n    window.webkit.messageHandlers.myMessageName.postMessage(message);\n  }\n});\ncontrolBarObserver.observe(theoplayerContainer, {\n  attributes: true,\n  attributeFilter: ["class"],\n  childList: false,\n  characterData: false\n});\n'})}),"\n",(0,n.jsx)(t.p,{children:"Notice that we've only added the line below which posts message to your native code:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"window.webkit.messageHandlers.myMessageName.postMessage(message);\n"})}),"\n",(0,n.jsx)(t.p,{children:"Next, you need to be able to intercept this message in your native code,\nas demonstrated by the snippet below."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:'func onMessageReceived(message : [String:Any]) {\n    print(message)\n    let isControlsVisible : Int = message["isControlsVisible"] as! Int\n    if (isControlsVisible == 1) {\n        print("controls are visible")\n    } else {\n        print("controls are not visible")\n    }\n}\ntheoplayer.addJavascriptMessageListener(name: "myMessageName", listener: onMessageReceived)\n'})}),"\n",(0,n.jsxs)(t.p,{children:["You can now use this ",(0,n.jsx)(t.code,{children:"onMessageReceived"})," callback to detect the visibility in your iOS project through native code."]}),"\n",(0,n.jsx)(t.h5,{id:"legacy-android-sdk-412x",children:"Legacy Android SDK (4.12.x)"}),"\n",(0,n.jsxs)(t.p,{children:["Adopt the above iOS approach to Android.\nThe communication between native Android and JavaScript is documented at ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-154/theoplayer/v4/getting-started/sdks/android/android-sdk-customization",children:"Android Legacy (4.12.x) SDK Customization"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"using-css",children:"Using CSS"}),"\n",(0,n.jsx)(t.p,{children:"If you insert your custom elements through JavaScript,\nyou can use CSS queries to align the visibility of your custom controls with the default control bar."}),"\n",(0,n.jsxs)(t.p,{children:["The snippet at ",(0,n.jsx)(t.a,{href:"https://detect-visibility-default-control-bar--thijslowette.repl.co/",children:"https://detect-visibility-default-control-bar--thijslowette.repl.co/"}),'\nhas a text ("Hello World!") that\'s only visible when the control bar is visible.\nWe also leverage the ',(0,n.jsx)(t.code,{children:"vjs-has-started"}),", ",(0,n.jsx)(t.code,{children:"vjs-paused"})," and ",(0,n.jsx)(t.code,{children:"vjs-user-active"})," classes mentioned in the previous approach."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},47634:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ui-control-bar-visibile-8e0fc2133328b496d115b9798f356b5c.png"},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var n=s(96540);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);