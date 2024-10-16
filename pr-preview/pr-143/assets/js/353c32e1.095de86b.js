"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8216],{11713:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=t(74848),o=t(28453),s=t(86025);const a={player:"player_yDU2"},i={sidebar_custom_props:{icon:"\u25b6\ufe0f"}},c="Basic player",p={id:"examples/basic",title:"Basic player",description:"Code",source:"@site/theoplayer_versioned_docs/version-v7/examples/01-basic.mdx",sourceDirName:"examples",slug:"/examples/basic",permalink:"/documentation/pr-preview/pr-143/theoplayer/v7/examples/basic",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/examples/01-basic.mdx",tags:[],version:"v7",sidebarPosition:1,frontMatter:{sidebar_custom_props:{icon:"\u25b6\ufe0f"}},sidebar:"web",previous:{title:"Examples",permalink:"/documentation/pr-preview/pr-143/theoplayer/v7/examples/"},next:{title:"Web Connectors",permalink:"/documentation/pr-preview/pr-143/theoplayer/v7/connectors/web/"}},l={},d=[];function m(e){const n={code:"code",h1:"h1",header:"header",pre:"pre",...(0,o.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"basic-player",children:"Basic player"})}),"\n","\n",(0,r.jsx)("iframe",{className:a.player,src:(0,s.Ay)("/theoplayer/v7/examples/basic/demo.html")}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Code"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",metastring:"showLineNumbers",children:"<div id=\"player\" class=\"video-js theoplayer-skin vjs-16-9\"></div>\n<script>\n  var player = new THEOplayer.Player(document.querySelector('#player'), {\n    libraryLocation: '/path/to/theoplayer',\n    license: 'your_theoplayer_license',\n  });\n  player.source = {\n    sources: [\n      {\n        src: '//cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8',\n        type: 'application/x-mpegurl',\n      },\n    ],\n  };\n<\/script>\n"})})]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(96540);const o={},s=r.createContext(o);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);