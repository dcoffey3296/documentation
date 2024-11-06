"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[79390],{21356:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=n(74848),c=n(28453);const i={},r="How to change the context menu",a={id:"how-to-guides/miscellaneous/context-menu/how-to-change-context-menu",title:"How to change the context menu",description:"This question is typically asked by developers who want to change the logo in the context menu, change the default text or add some items.",source:"@site/theoplayer_versioned_docs/version-v6/how-to-guides/07-miscellaneous/01-context-menu/02-how-to-change-context-menu.md",sourceDirName:"how-to-guides/07-miscellaneous/01-context-menu",slug:"/how-to-guides/miscellaneous/context-menu/how-to-change-context-menu",permalink:"/documentation/pr-preview/pr-153/theoplayer/v6/how-to-guides/miscellaneous/context-menu/how-to-change-context-menu",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/07-miscellaneous/01-context-menu/02-how-to-change-context-menu.md",tags:[],version:"v6",sidebarPosition:2,frontMatter:{},sidebar:"roku",previous:{title:"How can we disable the right click?",permalink:"/documentation/pr-preview/pr-153/theoplayer/v6/how-to-guides/miscellaneous/context-menu/how-to-disable-right-click"},next:{title:"Introduction",permalink:"/documentation/pr-preview/pr-153/theoplayer/v6/how-to-guides/miscellaneous/verizon-media/introduction"}},s={},l=[];function u(e){const t={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"how-to-change-the-context-menu",children:"How to change the context menu"})}),"\n",(0,o.jsx)(t.p,{children:"This question is typically asked by developers who want to change the logo in the context menu, change the default text or add some items."}),"\n",(0,o.jsx)(t.p,{children:"The snippet below does exactly that."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'function customizeContextMenu(container) {\n  var contextMenu = container.querySelector(".theo-context-menu");\n\n  // change context menu text\n  var contextMenuFirstItem = contextMenu.querySelector(".theo-context-version");\n  contextMenuFirstItem.innerText = "Brand X";\n\n  // change mini logo\n  var contextLogo = contextMenu.querySelector(".theo-0logo");\n  contextLogo.style.backgroundImage =\n    "url(\'https://image.freepik.com/free-icon/line-logo_318-102660.jpg\')";\n  contextLogo.style.backgroundSize = "cover";\n  contextLogo.querySelector("svg").style.visibility = "hidden";\n\n  // add a line\n  var contextMenuSecondItem = document.createElement("li");\n  contextMenuSecondItem.innerText = "24/07/2018";\n  contextMenu.appendChild(contextMenuSecondItem);\n}\n\nvar element = document.querySelector(".video-container");\nvar player = new THEOplayer.Player(element, playerConfig);\ncustomizeContextMenu(element);\n'})}),"\n",(0,o.jsxs)(t.p,{children:["It's important to note that ",(0,o.jsx)(t.code,{children:"customizeContextMenu"})," is immediately called after initializing a THEOplayer instance."]}),"\n",(0,o.jsxs)(t.p,{children:["Another common question is to remove the context menu altogether. The context menu can be disabled as it is one of the feature flags you can toggle. You can manage your THEOplayer configuration via ",(0,o.jsx)(t.a,{href:"https://portal.theoplayer.com/login",children:"THEOportal"})]}),"\n",(0,o.jsx)(t.p,{children:"To verify whether this feature is enabled you can execute the query below."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'var contextMenuEnabled = THEOplayer.features.indexOf("contextmenu") > -1;\n'})})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(96540);const c={},i=o.createContext(c);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);