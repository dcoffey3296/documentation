"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["62118"],{1891:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>s,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>a});var i=JSON.parse('{"id":"faq/how-to-know-when-livestream-is-playing","title":"How to know whether a live stream is playing","description":"You can check if a stream being played is live or VOD by checking its duration. If the duration returns Infinity, the stream would be live. Examples:","source":"@site/theoplayer_versioned_docs/version-v4/faq/14-how-to-know-when-livestream-is-playing.md","sourceDirName":"faq","slug":"/faq/how-to-know-when-livestream-is-playing","permalink":"/documentation/pr-preview/pr-158/theoplayer/v4/faq/how-to-know-when-livestream-is-playing","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/faq/14-how-to-know-when-livestream-is-playing.md","tags":[],"version":"v4","sidebarPosition":14,"frontMatter":{},"sidebar":"faq","previous":{"title":"What is an impression","permalink":"/documentation/pr-preview/pr-158/theoplayer/v4/faq/what-is-an-impression"},"next":{"title":"Which error related events does the player expose","permalink":"/documentation/pr-preview/pr-158/theoplayer/v4/faq/which-error-related-events-does-player-expose"}}'),r=t("85893"),o=t("50065");let a={},s="How to know whether a live stream is playing",l={},d=[{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5}];function c(e){let n={code:"code",h1:"h1",h5:"h5",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"how-to-know-whether-a-live-stream-is-playing",children:"How to know whether a live stream is playing"})}),"\n",(0,r.jsxs)(n.p,{children:["You can check if a stream being played is live or VOD by checking its duration. If the duration returns ",(0,r.jsx)(n.code,{children:"Infinity"}),", the stream would be live. Examples:"]}),"\n",(0,r.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"var isLive = player.duration === Infinity; // true or false\n"})}),"\n",(0,r.jsx)(n.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"boolean isLive = Double.isNaN(tpv.getPlayer().getDuration()); // true or false\n"})})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return a}});var i=t(67294);let r={},o=i.createContext(r);function a(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);