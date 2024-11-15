"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["41662"],{82989:function(e,t,n){n.r(t),n.d(t,{metadata:()=>o,contentTitle:()=>a,default:()=>h,assets:()=>s,toc:()=>l,frontMatter:()=>r});var o=JSON.parse('{"id":"how-to-guides/miscellaneous/context-menu/how-to-change-context-menu","title":"How to change the context menu","description":"This question is typically asked by developers who want to change the logo in the context menu, change the default text or add some items.","source":"@site/theoplayer_versioned_docs/version-v6/how-to-guides/07-miscellaneous/01-context-menu/02-how-to-change-context-menu.md","sourceDirName":"how-to-guides/07-miscellaneous/01-context-menu","slug":"/how-to-guides/miscellaneous/context-menu/how-to-change-context-menu","permalink":"/documentation/pr-preview/pr-159/theoplayer/v6/how-to-guides/miscellaneous/context-menu/how-to-change-context-menu","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/07-miscellaneous/01-context-menu/02-how-to-change-context-menu.md","tags":[],"version":"v6","sidebarPosition":2,"frontMatter":{},"sidebar":"roku","previous":{"title":"How can we disable the right click?","permalink":"/documentation/pr-preview/pr-159/theoplayer/v6/how-to-guides/miscellaneous/context-menu/how-to-disable-right-click"},"next":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-159/theoplayer/v6/how-to-guides/miscellaneous/verizon-media/introduction"}}'),c=n("85893"),i=n("50065");let r={},a="How to change the context menu",s={},l=[];function u(e){let t={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.header,{children:(0,c.jsx)(t.h1,{id:"how-to-change-the-context-menu",children:"How to change the context menu"})}),"\n",(0,c.jsx)(t.p,{children:"This question is typically asked by developers who want to change the logo in the context menu, change the default text or add some items."}),"\n",(0,c.jsx)(t.p,{children:"The snippet below does exactly that."}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-js",children:'function customizeContextMenu(container) {\n  var contextMenu = container.querySelector(".theo-context-menu");\n\n  // change context menu text\n  var contextMenuFirstItem = contextMenu.querySelector(".theo-context-version");\n  contextMenuFirstItem.innerText = "Brand X";\n\n  // change mini logo\n  var contextLogo = contextMenu.querySelector(".theo-0logo");\n  contextLogo.style.backgroundImage =\n    "url(\'https://image.freepik.com/free-icon/line-logo_318-102660.jpg\')";\n  contextLogo.style.backgroundSize = "cover";\n  contextLogo.querySelector("svg").style.visibility = "hidden";\n\n  // add a line\n  var contextMenuSecondItem = document.createElement("li");\n  contextMenuSecondItem.innerText = "24/07/2018";\n  contextMenu.appendChild(contextMenuSecondItem);\n}\n\nvar element = document.querySelector(".video-container");\nvar player = new THEOplayer.Player(element, playerConfig);\ncustomizeContextMenu(element);\n'})}),"\n",(0,c.jsxs)(t.p,{children:["It's important to note that ",(0,c.jsx)(t.code,{children:"customizeContextMenu"})," is immediately called after initializing a THEOplayer instance."]}),"\n",(0,c.jsxs)(t.p,{children:["Another common question is to remove the context menu altogether. The context menu can be disabled as it is one of the feature flags you can toggle. You can manage your THEOplayer configuration via ",(0,c.jsx)(t.a,{href:"https://portal.theoplayer.com/login",children:"THEOportal"})]}),"\n",(0,c.jsx)(t.p,{children:"To verify whether this feature is enabled you can execute the query below."}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-js",children:'var contextMenuEnabled = THEOplayer.features.indexOf("contextmenu") > -1;\n'})})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return r}});var o=n(67294);let c={},i=o.createContext(c);function r(e){let t=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);