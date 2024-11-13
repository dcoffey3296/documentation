"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["28403"],{71864:function(e,t,o){o.r(t),o.d(t,{metadata:()=>n,contentTitle:()=>s,default:()=>p,assets:()=>l,toc:()=>c,frontMatter:()=>i});var n=JSON.parse('{"id":"faq/whats-aspects-to-take-into-account-when-developing-csp","title":"What aspects of THEOplayer do we need to take into account to deploy a proper Content Security Policy (CSP)","description":"The script-src \'self\' and \'inline\' should be allowed. The player also requires doing calls to \\\\*.theoplayer.com and to wherever the JavaScript files and workers are located. Additionally, depending on your active features, you may need to add some other source (e.g.//www.gstatic.com/, as its library is hosted there).","source":"@site/theoplayer_versioned_docs/version-v4/faq/45-whats-aspects-to-take-into-account-when-developing-csp.md","sourceDirName":"faq","slug":"/faq/whats-aspects-to-take-into-account-when-developing-csp","permalink":"/documentation/pr-preview/pr-155/theoplayer/v4/faq/whats-aspects-to-take-into-account-when-developing-csp","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/faq/45-whats-aspects-to-take-into-account-when-developing-csp.md","tags":[],"version":"v4","sidebarPosition":45,"frontMatter":{},"sidebar":"faq","previous":{"title":"Removing context menu/\'Powered by THEOplayer v2...\'","permalink":"/documentation/pr-preview/pr-155/theoplayer/v4/faq/removing-context-menu-powered-by"},"next":{"title":"How can we avoid that the player keeps looking for chunks/segments if they are not found","permalink":"/documentation/pr-preview/pr-155/theoplayer/v4/faq/how-to-avoid-loading-chuncks-when-not-found"}}'),a=o("85893"),r=o("50065");let i={},s="What aspects of THEOplayer do we need to take into account to deploy a proper Content Security Policy (CSP)",l={},c=[{value:"Resources",id:"resources",level:2}];function d(e){let t={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"what-aspects-of-theoplayer-do-we-need-to-take-into-account-to-deploy-a-proper-content-security-policy-csp",children:"What aspects of THEOplayer do we need to take into account to deploy a proper Content Security Policy (CSP)"})}),"\n",(0,a.jsxs)(t.p,{children:["The script-src 'self' and 'inline' should be allowed. The player also requires doing calls to *.theoplayer.com and to wherever the JavaScript files and workers are located. Additionally, depending on your active features, you may need to add some other source (e.g.: if you are using Chromecast, you will need to allow ",(0,a.jsx)(t.a,{href:"https://www.gstatic.com/",children:"https://www.gstatic.com/"}),", as its library is hosted there)."]}),"\n",(0,a.jsxs)(t.p,{children:["Designed to be fully compatible with browser versions that don\u2019t support it, Content Security Policy (CSP) is an additional layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. Configuring Content Security Policy involves adding the Content-Security-Policy HTTP header to a web page and giving it values to control resources the user agent is allowed to load for that page. (source: ",(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",children:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"}),")"]}),"\n",(0,a.jsx)(t.p,{children:"When configuring CSP on your pages including THEOplayer, you will need to allow:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"*.theoplayer.com, as the license needs to contact this domain"}),"\n",(0,a.jsx)(t.li,{children:"the domain(s) where your JavaScript and worker files are hosted"}),"\n",(0,a.jsx)(t.li,{children:"script-src: 'self' and 'inline'"}),"\n",(0,a.jsx)(t.li,{children:"any domains hosting the libraries related to the features of THEOplayer that you are using. For example, Google IMA, Chromecast, FreeWheel, Youbora, Conviva, etc."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,a.jsx)(t.p,{children:"The following resources provide more information:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP/",children:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP/"})}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,t,o){o.d(t,{Z:function(){return s},a:function(){return i}});var n=o(67294);let a={},r=n.createContext(a);function i(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);