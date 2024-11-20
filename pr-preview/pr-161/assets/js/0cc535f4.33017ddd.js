"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["42334"],{43705:function(e,t,o){o.r(t),o.d(t,{metadata:()=>a,contentTitle:()=>l,default:()=>u,assets:()=>s,toc:()=>c,frontMatter:()=>r});var a=JSON.parse('{"id":"faq/how-to-combat-autoplay-policies","title":"How to combat autoplay policies","description":"This short article explains what autoplay is, where autoplay is restricted, and what THEOplayer does to facilitate working with autoplay.","source":"@site/theoplayer_versioned_docs/version-v6/faq/02-how-to-combat-autoplay-policies.md","sourceDirName":"faq","slug":"/faq/how-to-combat-autoplay-policies","permalink":"/documentation/pr-preview/pr-161/theoplayer/v6/faq/how-to-combat-autoplay-policies","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/faq/02-how-to-combat-autoplay-policies.md","tags":[],"version":"v6","sidebarPosition":2,"frontMatter":{},"sidebar":"faq","previous":{"title":"FAQ","permalink":"/documentation/pr-preview/pr-161/theoplayer/v6/faq/"},"next":{"title":"Why does fullscreen not behave as expected on iOS","permalink":"/documentation/pr-preview/pr-161/theoplayer/v6/faq/why-does-fullscreen-not-behave-as-expected-on-ios"}}'),i=o("85893"),n=o("50065");let r={},l="How to combat autoplay policies",s={},c=[{value:"Restrictions",id:"restrictions",level:2},{value:"API",id:"api",level:2},{value:"Web SDK",id:"web-sdk",level:5}];function p(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"how-to-combat-autoplay-policies",children:"How to combat autoplay policies"})}),"\n",(0,i.jsx)(t.p,{children:"This short article explains what autoplay is, where autoplay is restricted, and what THEOplayer does to facilitate working with autoplay."}),"\n",(0,i.jsxs)(t.p,{children:["When you enable ",(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#autoplay",children:"autoplay"})," for a HTML5 video, you instruct the viewer's browser to automatically play the content as soon as possible without action from the viewer."]}),"\n",(0,i.jsx)(t.h2,{id:"restrictions",children:"Restrictions"}),"\n",(0,i.jsx)(t.p,{children:"Browsers are restricting their autoplay capabilities. These policies are the result of the continuous misuse of autoplay which causes bad user experiences."}),"\n",(0,i.jsx)(t.p,{children:"There are two types of autoplay:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Unmuted Autoplay: autoplay with audio enabled."}),"\n",(0,i.jsx)(t.li,{children:"Muted Autoplay: autoplay with audio disabled."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The first type is considered more abrupt, while the second type is considered more user-friendly. Some browsers which normally disallow unmuted autoplay allow it when the viewer explicitly indicates so*."}),"\n",(0,i.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,i.jsx)(t.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,i.jsx)(t.p,{children:"An HTML5 video player can't circumvent these technical limitations, but it can offer an API which enables you in a smart way to switch between muted and unmuted autoplay."}),"\n",(0,i.jsxs)(t.p,{children:["THEOplayer has the ",(0,i.jsx)(t.code,{children:"mutedAutoplay"})," property in the ",(0,i.jsx)(t.code,{children:"PlayerConfiguration"}),". When you set this property to all, THEOplayer will run in unmuted autoplay on browsers where this is allowed, and in muted autoplay where autoplay with sound is not allowed. You can find a valid example below:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'// ...\nvar player = new THEOplayer.Player(element, {\n  // ...\n  mutedAutoplay: "all"\n  // ...\n});\n// ...\nplayer.autoplay = true;\n// ...\n'})}),"\n",(0,i.jsx)(t.p,{children:"There's a possibility that new restrictions will be introduced in the future, so it's advised to keep autoplay restrictions in mind when developing your product."})]})}function u(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},50065:function(e,t,o){o.d(t,{Z:function(){return l},a:function(){return r}});var a=o(67294);let i={},n=a.createContext(i);function r(e){let t=a.useContext(n);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);