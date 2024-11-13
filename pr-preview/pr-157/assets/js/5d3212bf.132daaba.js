"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["10734"],{69013:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>a,default:()=>g,assets:()=>l,toc:()=>d,frontMatter:()=>r});var i=JSON.parse('{"id":"how-to-guides/ui/how-to-change-big-play-button","title":"How to change the Big Play Button?","description":"The question above is typically asked by developers who want to increase/decrease the size, set a different image instead, or introduce on-hover behavior.","source":"@site/theoplayer_versioned_docs/version-v6/how-to-guides/11-ui/03-how-to-change-big-play-button.md","sourceDirName":"how-to-guides/11-ui","slug":"/how-to-guides/ui/how-to-change-big-play-button","permalink":"/documentation/pr-preview/pr-157/theoplayer/v6/how-to-guides/ui/how-to-change-big-play-button","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/11-ui/03-how-to-change-big-play-button.md","tags":[],"version":"v6","sidebarPosition":3,"frontMatter":{},"sidebar":"roku","previous":{"title":"How to align the timeline in the middle","permalink":"/documentation/pr-preview/pr-157/theoplayer/v6/how-to-guides/ui/how-to-align-timeline-in-the-middle"},"next":{"title":"How to make the control bar always visible?","permalink":"/documentation/pr-preview/pr-157/theoplayer/v6/how-to-guides/ui/how-to-make-control-keys-always-visible"}}'),o=n("85893"),s=n("50065");let r={},a="How to change the Big Play Button?",l={},d=[{value:"SDKs",id:"sdks",level:2},{value:"Code example",id:"code-example",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Legacy Android SDK (4.12.x)",id:"legacy-android-sdk-412x",level:5},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x",level:5}];function c(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"how-to-change-the-big-play-button",children:"How to change the Big Play Button?"})}),"\n",(0,o.jsx)(t.p,{children:"The question above is typically asked by developers who want to increase/decrease the size, set a different image instead, or introduce on-hover behavior."}),"\n",(0,o.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Roku SDK"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"Through CSS injection"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"Through CSS injection"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"})]})})]}),"\n",(0,o.jsx)(t.h2,{id:"code-example",children:"Code example"}),"\n",(0,o.jsx)(t.p,{children:"The snippet below demonstrates how you could set another image instead of the default big play button. Additionally, the button becomes bigger when you hover it."}),"\n",(0,o.jsx)(t.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-css",children:'/* Increase button size when hovering */\n.theoplayer-skin .vjs-big-play-button:hover {\n  background: none;\n  -webkit-transition-duration: 0.2s;\n  -moz-transition-duration: 0.2s;\n  transition-duration: 0.2s;\n  transform: translate(-50%, -50%) scale(1.2);\n  transition: transform 0.2s;\n}\n/* Set other image */\n.theoplayer-skin .vjs-big-play-button:before {\n  content: "";\n  background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjcycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDcyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0My4yICgzOTA2OSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+dmlkZW8gaWNvbiBjb3B5IDQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iSG9tZXBhZ2UiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJIb21lcGFnZS1fZGVza3RvcCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ3MC4wMDAwMDAsIC0zMDEyLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iZnd0diIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIwLjAwMDAwMCwgMjc4OC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJiaWctdmlkZW8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA1MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0idmlkZW8tMnB4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNTEuMDAwMDAwLCAxNzUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJ2aWRlby1jb3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNS4wMDAwMDAsIDM1LjAwMDAwMCkgcm90YXRlKC0zNjAuMDAwMDAwKSB0cmFuc2xhdGUoLTM1LjAwMDAwMCwgLTM1LjAwMDAwMCkgIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMiIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjIiIGZpbGwtb3BhY2l0eT0iMC4xNSIgZmlsbD0iIzAwMDAwMCIgY3g9IjM1IiBjeT0iMzUiIHI9IjM1Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJUcmlhbmdsZSIgZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIyNi45ODI4NTY5IDQ5Ljk1Mzc1MiAyNi45ODI4NTY5IDE5LjM0MjEwNTMgNDguNTQzNDU4OSAzMy45OTY5NDI5Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==")\n    no-repeat 0 0;\n  /* background: url(\'http://i.stack.imgur.com/LT3WE.png\') no-repeat 0 0; */ /* Use image instead */\n  background-size: 100%;\n  display: block;\n}\n/* Remove default THEOplayer image */\n.theo-big-play-button-svg-container svg {\n  display: none;\n}\n/* Remove default spotlight around button on focus */\n.theoplayer-skin:hover .vjs-big-play-button:after,\n.theoplayer-skin .vjs-big-play-button:focus:after {\n  opacity: 0;\n}\n'})}),"\n",(0,o.jsx)(t.h5,{id:"legacy-android-sdk-412x",children:"Legacy Android SDK (4.12.x)"}),"\n",(0,o.jsx)(t.p,{children:"To achieve the same result on Android SDK, the same CSS need to be passed to your app."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Step 1"})}),"\n",(0,o.jsxs)(t.p,{children:["To learn how to inject CSS into your Android project, follow the guide ",(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-157/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"Android SDK Customization - Custom CSS and JavaScript files"}),"."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Step 2"})}),"\n",(0,o.jsx)(t.p,{children:"In the CSS file you created, add the code reported above in the Web SDK section."}),"\n",(0,o.jsx)(t.h5,{id:"legacy-iostvos-sdk-412x",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,o.jsx)(t.p,{children:"To achieve the same result on iOS SDK, the same CSS need to be passed to your app."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Step 1"})}),"\n",(0,o.jsxs)(t.p,{children:["To learn how to inject CSS into your iOS project, follow the guide ",(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-157/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"iOS SDK Customization - Custom CSS and JavaScript files"}),"."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Step 2"})}),"\n",(0,o.jsx)(t.p,{children:"In the CSS file you created, add the code reported above in the Web SDK section."}),"\n",(0,o.jsx)(t.p,{children:"The snippet above also removes some default behavior, such as the shadow-effect when hovering the big play button."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Big Play Button",src:n(40304).Z+"",title:"Big Play Button",width:"1111",height:"732"})})]})}function g(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},40304:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/big-play-button-7ba8ac3c1d83a855d6fb4f1035f4c466.png"},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return r}});var i=n(67294);let o={},s=i.createContext(o);function r(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);