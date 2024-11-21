"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["77633"],{38404:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>d,default:()=>p,assets:()=>c,toc:()=>u,frontMatter:()=>s});var i=JSON.parse('{"id":"how-to-guides/web/theolive/getting-started","title":"Getting started with THEOlive on Web","description":"Usage","source":"@site/theoplayer/how-to-guides/web/theolive/00-getting-started.mdx","sourceDirName":"how-to-guides/web/theolive","slug":"/how-to-guides/web/theolive/getting-started","permalink":"/documentation/pr-preview/pr-163/theoplayer/how-to-guides/web/theolive/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/web/theolive/00-getting-started.mdx","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{},"sidebar":"web","previous":{"title":"Getting started with Millicast on Web","permalink":"/documentation/pr-preview/pr-163/theoplayer/how-to-guides/web/millicast/getting-started"},"next":{"title":"Chromecast","permalink":"/documentation/pr-preview/pr-163/theoplayer/how-to-guides/web/theolive/chromecast"}}'),r=n("85893"),o=n("50065");function a(e){let t={p:"p",...(0,o.a)(),...e.components};return(0,r.jsx)(t.p,{children:"THEOlive delivers broadcast quality live streaming at sub-second latency, enabling interactivity and fan engagement."})}function l(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}let s={},d="Getting started with THEOlive on Web",c={},u=[{value:"Usage",id:"usage",level:2},{value:"Add a THEOlive source",id:"add-a-theolive-source",level:3},{value:"Add configuration",id:"add-configuration",level:3},{value:"More information",id:"more-information",level:2}];function h(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"getting-started-with-theolive-on-web",children:"Getting started with THEOlive on Web"})}),"\n","\n",(0,r.jsx)(l,{}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Follow ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-163/theoplayer/getting-started/sdks/web/getting-started",children:"our Getting Started guide"}),"\nto set up THEOplayer in your web app or website."]}),"\n",(0,r.jsx)(t.li,{children:"Add a THEOlive source to your player's source."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"add-a-theolive-source",children:"Add a THEOlive source"}),"\n",(0,r.jsxs)(t.p,{children:["After setting up your THEOplayer on your web page, set its source to a ",(0,r.jsx)(t.code,{children:"SourceDescription"})," containing a ",(0,r.jsx)(t.code,{children:"THEOliveSource"}),".\nYou'll need a THEOlive channel ID:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const player = new THEOplayer.Player(element, configuration);\nplayer.source = {\n  sources: {\n    type: 'theolive',\n    src: 'your-channel-id',\n  },\n};\n"})}),"\n",(0,r.jsx)(t.h3,{id:"add-configuration",children:"Add configuration"}),"\n",(0,r.jsxs)(t.p,{children:["Optionally, you can provide additional configuration to the player, specific for THEOlive streams. To\nconfigure these settings, add a ",(0,r.jsx)(t.code,{children:"theolive"})," property to the player configuration. For an exhaustive list of these options,\nplease visit the ",(0,r.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/TheoLiveConfiguration.html",children:"documentation"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"var player = new THEOplayer.Player(element, {\n    license: 'your-license',\n    // This is needed for fallback to work properly\n    retryConfiguration: {\n        maxRetries: 6\n    },\n    theoLive: {\n        externalSessionId: 'my-external-session-id',\n        fallbackEnabled: true\n    }\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"more-information",children:"More information"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/TheoLiveSource.html",children:"API references"})}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return a}});var i=n(67294);let r={},o=i.createContext(r);function a(e){let t=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);