"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[20185],{31322:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var s=t(74848),r=t(28453);const n={},i="Which network calls (or requests) does THEOplayer do",l={id:"faq/which-network-calls-does-THEOplayer-do",title:"Which network calls (or requests) does THEOplayer do",description:"The question above is related to the following questions:",source:"@site/theoplayer_versioned_docs/version-v7/faq/23-which-network-calls-does-THEOplayer-do.md",sourceDirName:"faq",slug:"/faq/which-network-calls-does-THEOplayer-do",permalink:"/documentation/pr-preview/pr-155/theoplayer/v7/faq/which-network-calls-does-THEOplayer-do",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/faq/23-which-network-calls-does-THEOplayer-do.md",tags:[],version:"v7",sidebarPosition:23,frontMatter:{},sidebar:"faq",previous:{title:"How to remove CORS restrictions from a reproduction stream",permalink:"/documentation/pr-preview/pr-155/theoplayer/v7/faq/how-to-remove-cors-restrictions"},next:{title:"Why does the playback not work when using the Chrome iPhone/iPad simulator",permalink:"/documentation/pr-preview/pr-155/theoplayer/v7/faq/why-does-playback-not-work-using-chrome-iphone-simulator"}},a={},c=[];function h(e){const o={code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"which-network-calls-or-requests-does-theoplayer-do",children:"Which network calls (or requests) does THEOplayer do"})}),"\n",(0,s.jsx)(o.p,{children:"The question above is related to the following questions:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"What is the call to license.theoplayer.com?"}),"\n",(0,s.jsx)(o.li,{children:"Why is THEOplayer sending a request to licensing.theoplayer.com?"}),"\n",(0,s.jsx)(o.li,{children:"What is the call to licenseapi.theoplayer.com, and why is it failing?"}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["THEOplayer can do three different network requests to ",(0,s.jsx)(o.code,{children:"*.theoplayer.com"})," which are not related to your stream."]}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"license.theoplayer.com"}),": this request logs an impression to THEOplayer's analytics server. THEOplayer uses impressions to know how many views you've received, because it's taken into account for billing purposes. The analytics server does not track personal information on your users."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"licensing.theoplayer.com/t?"}),": this request serves as a fallback request when the call to license.theoplayer.com fails."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"licenseapi.theoplayer.com/api/v1/check"}),": this request happens when your current license is invalid, for example on a domain (or IP-address) which hasn't been whitelisted. This request will not be successful because there's no service configured for this request. (This might change in the future.)"]}),"\n"]})]})}function d(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>i,x:()=>l});var s=t(96540);const r={},n=s.createContext(r);function i(e){const o=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(n.Provider,{value:o},e.children)}}}]);