"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[89440],{63336:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(74848),i=n(28453);const r={},t="Page and Source domains",s={id:"faq/page-and-source-domains",title:"Page and Source domains",description:"Page and Source domains prevent unauthorized users from embedding your SDK on their website.",source:"@site/theoplayer_versioned_docs/version-v6/faq/64-page-and-source-domains.md",sourceDirName:"faq",slug:"/faq/page-and-source-domains",permalink:"/documentation/pr-preview/pr-143/theoplayer/v6/faq/page-and-source-domains",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/faq/64-page-and-source-domains.md",tags:[],version:"v6",sidebarPosition:64,frontMatter:{},sidebar:"faq",previous:{title:"The provided video source is incompatible with the license for this player",permalink:"/documentation/pr-preview/pr-143/theoplayer/v6/faq/the-provided-video-source-is-incompatible-with-the-license-for-this-player"},next:{title:"What does the error message \u201cSomething went wrong determining the initial period of the provided MPEG-DASH stream\u201d mean",permalink:"/documentation/pr-preview/pr-143/theoplayer/v6/faq/error-message-initial-period-provided-MPEG-DASH"}},d={},l=[{value:"Page domains (web only)",id:"page-domains-web-only",level:2},{value:"Source domains",id:"source-domains",level:2},{value:"How to configure Page and Source domains",id:"how-to-configure-page-and-source-domains",level:2},{value:"Remarks",id:"remarks",level:2}];function c(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.header,{children:(0,a.jsx)(o.h1,{id:"page-and-source-domains",children:"Page and Source domains"})}),"\n",(0,a.jsx)(o.p,{children:"Page and Source domains prevent unauthorized users from embedding your SDK on their website."}),"\n",(0,a.jsx)(o.h2,{id:"page-domains-web-only",children:"Page domains (web only)"}),"\n",(0,a.jsxs)(o.p,{children:["Page domains specify on which domains the player can be loaded. Imagine your website has the following domain: ",(0,a.jsx)(o.code,{children:"example.com"}),", you have configured your Page domains and the THEOplayer SDK is installed on your website. When a malicious user copies your SDK and installs it on their domain: ",(0,a.jsx)(o.code,{children:"other.com"}),", the player will throw an error that the license is invalid."]}),"\n",(0,a.jsx)(o.h2,{id:"source-domains",children:"Source domains"}),"\n",(0,a.jsxs)(o.p,{children:["Source domains specify from which domains the player is allowed to play streams. When the Source domains are configured to ",(0,a.jsx)(o.code,{children:"example.com"})," the player will only play streams from this domain. If the player plays a stream from ",(0,a.jsx)(o.code,{children:"other.com"}),", it will throw an error that the license is invalid."]}),"\n",(0,a.jsx)(o.h2,{id:"how-to-configure-page-and-source-domains",children:"How to configure Page and Source domains"}),"\n",(0,a.jsxs)(o.p,{children:["Page and Source domains can be configured in the ",(0,a.jsx)(o.a,{href:"https://portal.theoplayer.com",children:"Developer Portal"})," when creating an SDK under the \u201cConfigure the SDK\u201d section. When the SDK already exists you can find the Page and Source domains under the \u201cConfigure\u201d section of the SDK overview page. The \u201cAllow all\u201d option can be selected when you are not certain on which domains the player will be loaded or from which domains the player will play streams. This option is separately configurable for both Page and Source domains."]}),"\n",(0,a.jsx)(o.h2,{id:"remarks",children:"Remarks"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"This feature is supported as of version 2.78.0."}),"\n",(0,a.jsx)(o.li,{children:"Page domains are only available for our HTML5 SDK."}),"\n"]})]})}function h(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>t,x:()=>s});var a=n(96540);const i={},r=a.createContext(i);function t(e){const o=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(r.Provider,{value:o},e.children)}}}]);