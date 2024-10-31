"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[15164],{96785:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(74848),s=n(28453);const i={},o="Why did my subtitles stop working",a={id:"faq/why-did-subtitles-stop-working",title:"Why did my subtitles stop working",description:"This question is occasionally asked by developers who've configured the latest release of THEOplayer.",source:"@site/theoplayer_versioned_docs/version-v7/faq/16-why-did-subtitles-stop-working.md",sourceDirName:"faq",slug:"/faq/why-did-subtitles-stop-working",permalink:"/documentation/pr-preview/pr-150/theoplayer/v7/faq/why-did-subtitles-stop-working",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/faq/16-why-did-subtitles-stop-working.md",tags:[],version:"v7",sidebarPosition:16,frontMatter:{},sidebar:"faq",previous:{title:"Which error related events does the player expose",permalink:"/documentation/pr-preview/pr-150/theoplayer/v7/faq/which-error-related-events-does-player-expose"},next:{title:"How does Media Engagement Index (MEI) affect Autoplay on Chrome",permalink:"/documentation/pr-preview/pr-150/theoplayer/v7/faq/how-does-mei-affect-autoplay-on-chrome"}},l={},d=[{value:"Before version 2.80",id:"before-version-280",level:3},{value:"After version 2.80",id:"after-version-280",level:3},{value:"Other frequent reasons:",id:"other-frequent-reasons",level:3}];function c(e){const t={code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"why-did-my-subtitles-stop-working",children:"Why did my subtitles stop working"})}),"\n",(0,r.jsx)(t.p,{children:"This question is occasionally asked by developers who've configured the latest release of THEOplayer."}),"\n",(0,r.jsx)(t.h3,{id:"before-version-280",children:"Before version 2.80"}),"\n",(0,r.jsxs)(t.p,{children:["The most common reason on an older build why closed captions are no longer working is because the ",(0,r.jsxs)(t.strong,{children:[(0,r.jsx)(t.code,{children:"texttrackrendering"})," feature isn't enabled"]}),". To verify whether this feature is enabled you can execute the query below."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'var subsEnabled = THEOplayer.features.indexOf("texttrackrendering") > -1;\n'})}),"\n",(0,r.jsx)(t.h3,{id:"after-version-280",children:"After version 2.80"}),"\n",(0,r.jsxs)(t.p,{children:["Starting in THEOplayer version 2.80 the ",(0,r.jsx)(t.code,{children:"texttrackrendering"})," feature is no longer an optional feature. It is instead part of the default build, and is always enabled."]}),"\n",(0,r.jsx)(t.h3,{id:"other-frequent-reasons",children:"Other frequent reasons:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"A new stream is configured which does not list any subtitles in its manifest."}),"\n",(0,r.jsx)(t.li,{children:"The subtitle file can't be retrieved. (e.g. 404)"}),"\n",(0,r.jsx)(t.li,{children:"There are CORS issues with the subtitle file."}),"\n",(0,r.jsx)(t.li,{children:"The subtitle file is encoded in a non-compatible format."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(96540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);