"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["15380"],{48175:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>h,assets:()=>a,toc:()=>d,frontMatter:()=>s});var i=JSON.parse('{"id":"how-to-guides/ui/is-it-possible-to-remove-an-element","title":"Is it possible to remove an element from the UI?","description":"This question may be asked if you want to limit the options/controls that are showed in the UI.","source":"@site/theoplayer_versioned_docs/version-v4/how-to-guides/11-ui/01-is-it-possible-to-remove-an-element.md","sourceDirName":"how-to-guides/11-ui","slug":"/how-to-guides/ui/is-it-possible-to-remove-an-element","permalink":"/documentation/pr-preview/pr-162/theoplayer/v4/how-to-guides/ui/is-it-possible-to-remove-an-element","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/how-to-guides/11-ui/01-is-it-possible-to-remove-an-element.md","tags":[],"version":"v4","sidebarPosition":1,"frontMatter":{},"sidebar":"roku","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-162/theoplayer/v4/how-to-guides/ui/introduction"},"next":{"title":"How to align the timeline in the middle","permalink":"/documentation/pr-preview/pr-162/theoplayer/v4/how-to-guides/ui/how-to-align-timeline-in-the-middle"}}'),o=t("85893"),r=t("50065");let s={},l="Is it possible to remove an element from the UI?",a={},d=[{value:"SDKs",id:"sdks",level:2},{value:"Code examples",id:"code-examples",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Legacy Android SDK (4.12.x)",id:"legacy-android-sdk-412x",level:5},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x",level:5},{value:"Roku SDK",id:"roku-sdk",level:5}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"is-it-possible-to-remove-an-element-from-the-ui",children:"Is it possible to remove an element from the UI?"})}),"\n",(0,o.jsx)(n.p,{children:"This question may be asked if you want to limit the options/controls that are showed in the UI."}),"\n",(0,o.jsx)(n.p,{children:"There are three possible approaches to this:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Use the Chromeless version and build your own UI on top of it. This may be useful if you do not need to remove just one element, but want a radically different UI."}),"\n",(0,o.jsx)(n.li,{children:"Hide the element through CSS"}),"\n",(0,o.jsx)(n.li,{children:"Remove it through JavaScript"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"In the following we will briefly explore the last two possibilities."}),"\n",(0,o.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"Through CSS/JavaScript injection"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"Through CSS/JavaScript injection"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"N/A"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"N/A"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"N/A"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"code-examples",children:"Code examples"}),"\n",(0,o.jsx)(n.p,{children:"For this example we will consider the Speed menu option (control bar > Settings > Speed) as the element to remove from the page. The following methods may of course be used for other elements."}),"\n",(0,o.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Hide the element with CSS"})}),"\n",(0,o.jsx)(n.p,{children:"We identify the element and hide it. Since In this specific case there is no id or class to identify this element specifically, we make use of its aria attribute. Of course, should it change, this line of code should be adapted accordingly."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",children:'.theoplayer-skin li[aria-label="Open the video speed settings menu"] {\n  display: none !important;\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Remove the element through JavaScript"})}),"\n",(0,o.jsx)(n.p,{children:"In alternative to CSS, it is also possible to achieve the same result with JavaScript, in the following way."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'function firstplay(event) {\n  player.removeEventListener("playing", firstplay);\n  var speed = document.querySelector(\n    \'.theoplayer-skin li[aria-label="Open the video speed settings menu"]\'\n  );\n  speed.parentNode.removeChild(speed);\n}\nplayer.addEventListener("sourcechange", function () {\n  player.removeEventListener("playing", firstplay);\n  player.addEventListener("playing", firstplay);\n});\n'})}),"\n",(0,o.jsx)(n.h5,{id:"legacy-android-sdk-412x",children:"Legacy Android SDK (4.12.x)"}),"\n",(0,o.jsx)(n.p,{children:"To achieve the same result on Android SDK, the same CSS need to be passed to your app."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Step 1"})}),"\n",(0,o.jsxs)(n.p,{children:["To learn how to inject CSS into your Android project, follow the guide ",(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-162/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"Android SDK Customization - Custom CSS and JavaScript files"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Step 2"})}),"\n",(0,o.jsx)(n.p,{children:"In the CSS or JavaScript file you created, add the code reported above in the Web SDK section."}),"\n",(0,o.jsx)(n.h5,{id:"legacy-iostvos-sdk-412x",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,o.jsx)(n.p,{children:"To achieve the same result on iOS SDK, the same CSS need to be passed to your app."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Step 1"})}),"\n",(0,o.jsxs)(n.p,{children:["To learn how to inject CSS into your iOS project, follow the guide ",(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-162/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"iOS SDK Customization - Custom CSS and JavaScript files"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Step 2"})}),"\n",(0,o.jsx)(n.p,{children:"In the CSS or JavaScript file you created, add the code reported above in the Web SDK section."}),"\n",(0,o.jsx)(n.h5,{id:"roku-sdk",children:"Roku SDK"}),"\n",(0,o.jsx)(n.p,{children:"What UI elements should be visible for Chromefull THEOplayer on Roku? Currently, Chromefull THEOplayer uses Roku native player and that one has e.g. a clock UI element while paused."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8" ?>\n<component name="TestScene" extends="Scene">\n    <interface>\n    </interface>\n\n    <script type = "text/brightscript" >\n\n        <![CDATA[\n\n        function Init()\n            m.player = m.top.findNode("TestPlayer")\n            m.player.configuration = {\n              "license": "" \' put the THEOplayer license between apostrophes\n            }\n            \' remove the clock UI node\n            m.player.getChildren(-1, 0)[0].getChildren(-1, 0)[1].removeChildIndex(11)\n\n            setSource()\n            m.player.setFocus(true)\n            m.player.callFunc("play")\n        end function\n\n        function setSource()\n            sourceDescription = {\n                "sources": [\n                    {\n                        "src": "http://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8",\n                        "type": "application/x-mpegURL"\n                    }\n                ]\n            }\n            m.player.source = sourceDescription\n            m.player.source.Live = false\n            m.player.source.LiveBoundsPauseBehavior = "pause"\n        end function\n\n        ]]>\n\n    <\/script>\n\n    <children>\n	    <THEOsdk:THEOplayer id="TestPlayer"/>\n    </children>\n</component>\n'})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var i=t(67294);let o={},r=i.createContext(o);function s(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);