"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3346],{76024:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var i=t(74848),s=t(28453);const r={},l="Getting started on Tizen",d={id:"getting-started/sdks/tizen/getting-started",title:"Getting started on Tizen",description:"This how-to guide describes how to set up a Tizen application using the THEOplayer SDK on Tizen.",source:"@site/theoplayer_versioned_docs/version-v6/getting-started/01-sdks/08-tizen/00-getting-started.md",sourceDirName:"getting-started/01-sdks/08-tizen",slug:"/getting-started/sdks/tizen/getting-started",permalink:"/documentation/pr-preview/pr-152/theoplayer/v6/getting-started/sdks/tizen/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/getting-started/01-sdks/08-tizen/00-getting-started.md",tags:[],version:"v6",sidebarPosition:0,frontMatter:{},sidebar:"web",previous:{title:"Getting Started on webOS",permalink:"/documentation/pr-preview/pr-152/theoplayer/v6/getting-started/sdks/webos/getting-started"},next:{title:"Getting started on Tizen",permalink:"/documentation/pr-preview/pr-152/theoplayer/v6/getting-started/sdks/tizen/getting-started"}},o={},a=[{value:"Set-up",id:"set-up",level:2},{value:"Getting started with the THEOplayer Tizen reference app",id:"getting-started-with-the-theoplayer-tizen-reference-app",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Reference app structure structure",id:"reference-app-structure-structure",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"getting-started-on-tizen",children:"Getting started on Tizen"})}),"\n",(0,i.jsx)(n.p,{children:"This how-to guide describes how to set up a Tizen application using the THEOplayer SDK on Tizen."}),"\n",(0,i.jsxs)(n.p,{children:["You may also find the ",(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-152/theoplayer/v6/getting-started/sdks/web/getting-started",children:"Getting Started on Web"})," to be useful."]}),"\n",(0,i.jsx)(n.h2,{id:"set-up",children:"Set-up"}),"\n",(0,i.jsx)(n.p,{children:"For brevity, set-up is split up over multiple pages:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-152/theoplayer/v6/getting-started/sdks/tizen/installing-tizen-studio",children:"Setting up Tizen Studio"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-152/theoplayer/v6/getting-started/sdks/tizen/generating-a-certificate",children:"Generating a certificate"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-152/theoplayer/v6/getting-started/sdks/tizen/setting-up-physical",children:"Setting up and deploying on a physical device (recommended)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-152/theoplayer/v6/getting-started/sdks/tizen/setting-up-emulator",children:"Setting up and deploying on an emulator (less recommended)"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"getting-started-with-the-theoplayer-tizen-reference-app",children:"Getting started with the THEOplayer Tizen reference app"}),"\n",(0,i.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Generate a Tizen SDK build via the ",(0,i.jsx)(n.a,{href:"https://portal.theoplayer.com/",children:"THEOplayer portal"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Download the ",(0,i.jsx)(n.a,{href:"https://github.com/THEOplayer/samples-tizen",children:"reference app project"})]}),"\n",(0,i.jsx)(n.li,{children:"Read the README to get started. There is one at the root level and one in the two examples."}),"\n",(0,i.jsx)(n.li,{children:"Import the project in Tizen Studio"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Go to File -> Open Projects from File System"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(16223).A+"",width:"345",height:"114"})}),"\n",(0,i.jsx)(n.p,{children:"Select the directory. Then press Finish."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(31888).A+"",width:"858",height:"640"})}),"\n",(0,i.jsx)(n.h3,{id:"reference-app-structure-structure",children:"Reference app structure structure"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"example-with-ui/"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Contains a Tizen project with a UI. Follow the readme for more instructions."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"css/"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"CSS styles as used in the app."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"js/"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["JavaScript files as used in the app. The compiled result of ",(0,i.jsx)(n.code,{children:"src/"})," is put in here."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"src/"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The source code of the UI application. Change or replace as desired."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"libs/"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"(Insert your THEOplayer Tizen SDK here)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"index.html"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Entry point of application."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"config.xml"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Permissions of the app."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"package.json"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Contains the commands required to build the UI."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"minimum-example/"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Contains a very minimal Tizen project example. No UI included."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"libs/"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"(Insert your THEOplayer Tizen SDK here)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"index.html"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Entry point of application."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"config.xml"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Permissions of the app."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},16223:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/import-1-8aaecab1b94a589fec742e47cd9bd394.jpg"},31888:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/import-2-abd40c64a1537775af117e7460865ac6.jpg"},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var i=t(96540);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);