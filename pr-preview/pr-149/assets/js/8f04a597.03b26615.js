"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[859],{86217:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var r=n(74848),t=n(28453);const s={},i="Self-hosting and versioning of THEOplayer",a={id:"faq/self-hosting-theoplayer",title:"Self-hosting and versioning of THEOplayer",description:"Your licensed THEOplayer can also be hosted on your own servers or CDN.",source:"@site/theoplayer_versioned_docs/version-v7/faq/34-self-hosting-theoplayer.md",sourceDirName:"faq",slug:"/faq/self-hosting-theoplayer",permalink:"/documentation/pr-preview/pr-149/theoplayer/v7/faq/self-hosting-theoplayer",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/faq/34-self-hosting-theoplayer.md",tags:[],version:"v7",sidebarPosition:34,frontMatter:{},sidebar:"faq",previous:{title:"How to use ProGuard with THEOplayer Android SDK",permalink:"/documentation/pr-preview/pr-149/theoplayer/v7/faq/how-to-use-proguard-with-android-sdk"},next:{title:"Does THEOplayer support EXT-X-DATERANGE",permalink:"/documentation/pr-preview/pr-149/theoplayer/v7/faq/does-theoplayer-support-ext-x-daterange"}},l={},h=[{value:"Configuring self-hosting",id:"configuring-self-hosting",level:2},{value:"Common mistakes",id:"common-mistakes",level:2}];function c(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.header,{children:(0,r.jsx)(o.h1,{id:"self-hosting-and-versioning-of-theoplayer",children:"Self-hosting and versioning of THEOplayer"})}),"\n",(0,r.jsx)(o.p,{children:"Your licensed THEOplayer can also be hosted on your own servers or CDN.\nThis can be useful when you do not want to have a dependency on a third-party hosting infrastructure, for using THEOplayer on internal/local (and even offline) networks or for using THEOplayer inside mobile apps."}),"\n",(0,r.jsx)(o.p,{children:"There are two approaches to download the THEOplayer SDK for self-hosting purposes:"}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:["Use ",(0,r.jsx)(o.a,{href:"https://www.npmjs.com/package/theoplayer",children:"NPM"}),"."]}),"\n",(0,r.jsxs)(o.li,{children:["Download the SDK through ",(0,r.jsx)(o.a,{href:"https://portal.theoplayer.com",children:"https://portal.theoplayer.com"}),"."]}),"\n"]}),"\n",(0,r.jsx)(o.admonition,{type:"important",children:(0,r.jsx)(o.p,{children:"When self-hosting THEOplayer, it is important you regularly update your self-hosted THEOplayer files in order to benefit from the latest improvements."})}),"\n",(0,r.jsxs)(o.p,{children:["In order to download the THEOplayer package and host it on your server, you will first have to determine which version of the player you want to use.\nRead up about version changes in the ",(0,r.jsx)(o.a,{href:"/documentation/pr-preview/pr-149/theoplayer/v7/changelog",children:"changelog"}),"."]}),"\n",(0,r.jsx)(o.h2,{id:"configuring-self-hosting",children:"Configuring self-hosting"}),"\n",(0,r.jsx)(o.p,{children:"Once you extracted the ZIP package to your server, you must configure THEOplayer and provide the information where the resources can be found.\nFor this, you should configure 1 parameter correctly:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"libraryLocation"}),": This parameter should point to the location of the library. It is the location where the ZIP package has been extracted and the resources are available on the server."]}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Of course, also keep in mind to correctly link to the correct JavaScript library and CSS file."}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-html",children:'<script type="text/javascript" src="/path/to/THEOplayer.js"><\/script>\n<link rel="stylesheet" type="text/css" href="/path/to/ui.css" />\n'})}),"\n",(0,r.jsx)(o.h2,{id:"common-mistakes",children:"Common mistakes"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["Configuring the libraryLocation incorrectly. The referred location/folder should contain ",(0,r.jsx)(o.code,{children:"theoplayer.d.js"}),", ",(0,r.jsx)(o.code,{children:"theoplayer.e.js"}),", ",(0,r.jsx)(o.code,{children:"theoplayer.p.js"}),", ",(0,r.jsx)(o.code,{children:"THEOplayer.js"}),", and so on, and they need to all have the same version."]}),"\n",(0,r.jsxs)(o.li,{children:["Using the THEOplayer library on a web page which resides on a non-whitelisted domain (e.g. ",(0,r.jsx)(o.a,{href:"http://localhost/index.html",children:"http://localhost/index.html"}),"). Although you can host your library assets anywhere, you can only use the actual video player on white-listed domains."]}),"\n",(0,r.jsx)(o.li,{children:"Linking to an unreachable JavaScript or CSS library."}),"\n"]})]})}function d(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>a});var r=n(96540);const t={},s=r.createContext(t);function i(e){const o=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);