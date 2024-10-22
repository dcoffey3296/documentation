"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19019],{80618:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>h,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=t(74848),r=t(28453);const o={},s="Why the Visibility API does not work through an iframe on Safari and IE11",a={id:"faq/why-visibilty-api-doesnt-work-in-iframe-on-safari-and-ie11",title:"Why the Visibility API does not work through an iframe on Safari and IE11",description:"This question may be asked when you observe a different behavior of the Visibility API on different browsers.",source:"@site/theoplayer_versioned_docs/version-v6/faq/11-why-visibilty-api-doesnt-work-in-iframe-on-safari-and-ie11.md",sourceDirName:"faq",slug:"/faq/why-visibilty-api-doesnt-work-in-iframe-on-safari-and-ie11",permalink:"/documentation/pr-preview/pr-145/theoplayer/v6/faq/why-visibilty-api-doesnt-work-in-iframe-on-safari-and-ie11",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/faq/11-why-visibilty-api-doesnt-work-in-iframe-on-safari-and-ie11.md",tags:[],version:"v6",sidebarPosition:11,frontMatter:{},sidebar:"faq",previous:{title:"Is it possible to see 360 degrees photo with THEOplayer",permalink:"/documentation/pr-preview/pr-145/theoplayer/v6/faq/is-it-possible-to-see-360-picture"},next:{title:"What is an impression",permalink:"/documentation/pr-preview/pr-145/theoplayer/v6/faq/what-is-an-impression"}},h={},d=[];function l(e){const i={a:"a",h1:"h1",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"why-the-visibility-api-does-not-work-through-an-iframe-on-safari-and-ie11",children:"Why the Visibility API does not work through an iframe on Safari and IE11"})}),"\n",(0,n.jsx)(i.p,{children:"This question may be asked when you observe a different behavior of the Visibility API on different browsers."}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/Visibility.html",children:"Visibility API"})," provides developers a way to observe how much of the player is visible."]}),"\n",(0,n.jsxs)(i.p,{children:["When the player is embedded in an iframe, this API does not work on Safari and IE11. This depends on the fact that the player uses the ",(0,n.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Browser_compatibility",children:"Intersection Observer API"})," if it's available in the browser. Unfortunately, IE and Safari do not have support for this, so the player necessarily falls back to scroll events for these environments."]}),"\n",(0,n.jsx)(i.p,{children:"This is the reason why on those browsers the Visibility API works correctly when the player is on the page but it is not functional through an iframe."}),"\n",(0,n.jsxs)(i.p,{children:["February 2019: A piece of good news: the Intersection Observer API is now in beta in Safari: ",(0,n.jsx)(i.a,{href:"https://webkit.org/blog/8582/intersectionobserver-in-webkit/",children:"https://webkit.org/blog/8582/intersectionobserver-in-webkit/"})]})]})}function p(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>a});var n=t(96540);const r={},o=n.createContext(r);function s(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);