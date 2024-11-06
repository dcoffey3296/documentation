"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26092],{88466:(e,t,n)=>{n.d(t,{Ay:()=>s,RM:()=>a});var i=n(74848),r=n(28453);const a=[];function o(e){const t={a:"a",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://dolby.io/products/real-time-streaming/",children:"Dolby Millicast"})," delivers broadcast quality live streaming\nat sub-second latency, enabling interactivity and fan engagement.\nUsing the THEOplayer Millicast integration, you can play your Millicast streams directly through THEOplayer."]})}function s(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},27873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=n(74848),r=n(28453),a=n(88466);const o={},s="Getting started with Millicast on Web",l={id:"how-to-guides/web/millicast/getting-started",title:"Getting started with Millicast on Web",description:"Usage",source:"@site/theoplayer/how-to-guides/web/millicast/getting-started.mdx",sourceDirName:"how-to-guides/web/millicast",slug:"/how-to-guides/web/millicast/getting-started",permalink:"/documentation/pr-preview/pr-152/theoplayer/how-to-guides/web/millicast/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/web/millicast/getting-started.mdx",tags:[],version:"current",frontMatter:{},sidebar:"web",previous:{title:"Introduction",permalink:"/documentation/pr-preview/pr-152/theoplayer/how-to-guides/objective-C/introduction"},next:{title:"Examples",permalink:"/documentation/pr-preview/pr-152/theoplayer/examples/"}},c={},d=[...a.RM,{value:"Usage",id:"usage",level:2},{value:"Add a Millicast source",id:"add-a-millicast-source",level:3},{value:"More information",id:"more-information",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"getting-started-with-millicast-on-web",children:"Getting started with Millicast on Web"})}),"\n","\n",(0,i.jsx)(a.Ay,{}),"\n",(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Follow ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-152/theoplayer/getting-started/sdks/web/getting-started",children:"our Getting Started guide"}),"\nto set up THEOplayer in your web app or website.\nThe Millicast integration is available in the main ",(0,i.jsx)(t.a,{href:"https://www.npmjs.com/package/theoplayer",children:"theoplayer"})," package on npm."]}),"\n",(0,i.jsx)(t.li,{children:"Add a Millicast source to your player's source."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"add-a-millicast-source",children:"Add a Millicast source"}),"\n",(0,i.jsxs)(t.p,{children:["After setting up your THEOplayer on your web page, set its source to a ",(0,i.jsx)(t.code,{children:"SourceDescription"})," containing a ",(0,i.jsx)(t.code,{children:"MillicastSource"}),".\nYou'll need a Millicast account ID and stream name to identify your Millicast stream:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"const player = new THEOplayer.Player(element, configuration);\nplayer.source = {\n  sources: {\n    type: 'millicast',\n    streamName: 'multiview',\n    streamAccountId: 'k9Mwad',\n  },\n};\n"})}),"\n",(0,i.jsx)(t.h2,{id:"more-information",children:"More information"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/MillicastSource.html",children:"API references"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.dolby.io/streaming-apis/docs/",children:"Millicast documentation"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var i=n(96540);const r={},a=i.createContext(r);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);