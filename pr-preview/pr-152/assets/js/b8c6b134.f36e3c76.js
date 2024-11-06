"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[27664],{35976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=n(74848),o=n(28453),a=n(86025);const s={player:"player_Q10V"},i={sidebar_custom_props:{icon:"\u25b6\ufe0f"}},c="Basic player",p={id:"examples/basic",title:"Basic player",description:"Code",source:"@site/theoplayer/examples/01-basic.mdx",sourceDirName:"examples",slug:"/examples/basic",permalink:"/documentation/pr-preview/pr-152/theoplayer/examples/basic",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer/examples/01-basic.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_custom_props:{icon:"\u25b6\ufe0f"}},sidebar:"web",previous:{title:"Examples",permalink:"/documentation/pr-preview/pr-152/theoplayer/examples/"},next:{title:"Web Connectors",permalink:"/documentation/pr-preview/pr-152/theoplayer/connectors/web/"}},l={},d=[];function m(e){const t={code:"code",h1:"h1",header:"header",pre:"pre",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"basic-player",children:"Basic player"})}),"\n","\n",(0,r.jsx)("iframe",{className:s.player,src:(0,a.Ay)("/theoplayer/v8/examples/basic/demo.html")}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Code"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",metastring:"showLineNumbers",children:"<div id=\"player\" class=\"video-js theoplayer-skin vjs-16-9\"></div>\n<script>\n  var player = new THEOplayer.Player(document.querySelector('#player'), {\n    libraryLocation: '/path/to/theoplayer',\n    license: 'your_theoplayer_license',\n  });\n  player.source = {\n    sources: [\n      {\n        src: '//cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8',\n        type: 'application/x-mpegurl',\n      },\n    ],\n  };\n<\/script>\n"})})]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(96540);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);