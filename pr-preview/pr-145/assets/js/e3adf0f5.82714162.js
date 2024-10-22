"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[27777],{96883:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(74848),s=r(28453);const o={},d="Introduction",i={id:"how-to-guides/network/introduction",title:"Introduction",description:"This article explains how to use the Network API.",source:"@site/theoplayer_versioned_docs/version-v7/how-to-guides/08-network/00-introduction.md",sourceDirName:"how-to-guides/08-network",slug:"/how-to-guides/network/introduction",permalink:"/documentation/pr-preview/pr-145/theoplayer/v7/how-to-guides/network/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/how-to-guides/08-network/00-introduction.md",tags:[],version:"v7",sidebarPosition:0,frontMatter:{},sidebar:"roku",previous:{title:"Error codes",permalink:"/documentation/pr-preview/pr-145/theoplayer/v7/how-to-guides/miscellaneous/error/error-codes"},next:{title:"Network Request/Response Interceptors",permalink:"/documentation/pr-preview/pr-145/theoplayer/v7/how-to-guides/network/request-response-interceptors"}},a={},l=[{value:"SDKs",id:"sdks",level:2},{value:"Instructions",id:"instructions",level:2},{value:"1. Add/use request interceptor",id:"1-adduse-request-interceptor",level:3},{value:"Code examples",id:"code-examples",level:4},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"Legacy Android (TV) SDK (4.12.X)",id:"legacy-android-tv-sdk-412x",level:5},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x",level:5},{value:"2. Add/use response interceptor",id:"2-adduse-response-interceptor",level:3},{value:"Code examples",id:"code-examples-1",level:4},{value:"Web SDK",id:"web-sdk-1",level:5},{value:"Android SDK",id:"android-sdk-1",level:5},{value:"Legacy Android (TV) SDK (4.12.X)",id:"legacy-android-tv-sdk-412x-1",level:5},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x-1",level:5},{value:"HTTP Errors",id:"http-errors",level:2},{value:"Adding and Removing Event Listeners",id:"adding-and-removing-event-listeners",level:2},{value:"Related articles",id:"related-articles",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,n.jsx)(t.p,{children:"This article explains how to use the Network API."}),"\n",(0,n.jsx)(t.p,{children:"On iOS browsers, the Network API can only be used to intercept and alter DRM-related requests and responses."}),"\n",(0,n.jsxs)(t.p,{children:["The technical documentation on the Network API can be found ",(0,n.jsx)(t.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/Network.html",children:"here"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Legacy iOS SDK (4.12.x)"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Through JS injection"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"instructions",children:"Instructions"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Add/use request interceptor"}),"\n",(0,n.jsx)(t.li,{children:"Add/use response interceptor"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"1-adduse-request-interceptor",children:"1. Add/use request interceptor"}),"\n",(0,n.jsxs)(t.p,{children:["The request interceptor can, as the handle suggests, be used to intercept requests. The method is available under ",(0,n.jsx)(t.code,{children:"player.network"})," and requires a request object. Within the request object, you can change headers, redirect a license request, etc. You can't change the response with this interceptor, because that's covered with the response interceptor below.\nIn the example below, the request interceptor is used to redirect certain URL to another URL."]}),"\n",(0,n.jsx)(t.h4,{id:"code-examples",children:"Code examples"}),"\n",(0,n.jsx)(t.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'// Add a request interceptor\nplayer.network.addRequestInterceptor((request) => {\n  // The interceptor intercepts ALL requests and we only want to redirect one specific url\n  if (request.url == "https://link-to-specific-url") {\n    // Redirect the request\n    request.redirect({\n      url: "https://link-to-new-url",\n      method: request.method, // Keep the methods the same\n      headers: request.headers, // Keep the headers the same\n      closed: request.closed,\n      useCredentials: request.useCredentials,\n      type: request.type,\n      subType: request.subType,\n      responseType: request.responseType,\n      body: request.body\n    });\n  }\n});\n'})}),"\n",(0,n.jsx)(t.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,n.jsxs)(t.p,{children:["Follow our ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-145/theoplayer/v7/how-to-guides/network/android-network-interceptor",children:"Android Network Interceptor"})," page."]}),"\n",(0,n.jsx)(t.h5,{id:"legacy-android-tv-sdk-412x",children:"Legacy Android (TV) SDK (4.12.X)"}),"\n",(0,n.jsxs)(t.p,{children:["Add the above JavaScript snippet to your legacy Android (TV) SDK project as demonstrated at ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-145/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add CSS or JavaScript files to an Android/iOS project"}),"."]}),"\n",(0,n.jsx)(t.h5,{id:"legacy-iostvos-sdk-412x",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,n.jsxs)(t.p,{children:["Add the above JavaScript snippet to your legacy iOS SDK project as demonstrated at ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-145/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add CSS or JavaScript files to an Android/iOS project"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"2-adduse-response-interceptor",children:"2. Add/use response interceptor"}),"\n",(0,n.jsx)(t.p,{children:"The response interceptor is used to intercept/change responses. You can overwrite any response that the player receives. It is important to respond in the proper format (with JSON, base-64 body, ...)"}),"\n",(0,n.jsx)(t.p,{children:"Like the example above, this example will overwrite a response:"}),"\n",(0,n.jsx)(t.h4,{id:"code-examples-1",children:"Code examples"}),"\n",(0,n.jsx)(t.h5,{id:"web-sdk-1",children:"Web SDK"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'player.network.addResponseInterceptor((response) => {\n  // If the response comes from a specific URL\n  if (response.url == "https://specific-url") {\n    // Requests run async, therefore make sure to execute after the request is finished\n    response.waitUntil((done) => {\n      response.respondWith({\n        closed: response.closed,\n        headers: response.headers,\n        request: response.request,\n        respondWith: response.respondWith,\n        status: 201, // Updated status code as example\n        statusText: "All cool bro", // Updated status text as example\n        url: response.url,\n        waitUntil: response.waitUntil,\n        body: "New body"\n      });\n      done();\n    });\n  }\n});\n'})}),"\n",(0,n.jsx)(t.h5,{id:"android-sdk-1",children:"Android SDK"}),"\n",(0,n.jsxs)(t.p,{children:["Follow our ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-145/theoplayer/v7/how-to-guides/network/android-network-interceptor",children:"Android Network Interceptor"})," page."]}),"\n",(0,n.jsx)(t.h5,{id:"legacy-android-tv-sdk-412x-1",children:"Legacy Android (TV) SDK (4.12.X)"}),"\n",(0,n.jsxs)(t.p,{children:["Add the above JavaScript snippet to your legacy Android (TV) SDK project as demonstrated at ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-145/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add CSS or JavaScript files to an Android/iOS project"}),"."]}),"\n",(0,n.jsx)(t.h5,{id:"legacy-iostvos-sdk-412x-1",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,n.jsxs)(t.p,{children:["Add the above JavaScript snippet to your legacy iOS SDK project as demonstrated at ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-145/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add CSS or JavaScript files to an Android/iOS project"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"http-errors",children:"HTTP Errors"}),"\n",(0,n.jsx)(t.p,{children:"If the status code is set to a code between 200-299, the player responds with a successful response, in any other cases the player will respond with an HTTP error."}),"\n",(0,n.jsx)(t.p,{children:"If the player originally responded with an HTTP error, the interceptor can change the response to a successful response and vice versa."}),"\n",(0,n.jsx)(t.h2,{id:"adding-and-removing-event-listeners",children:"Adding and Removing Event Listeners"}),"\n",(0,n.jsx)(t.p,{children:"The 'online' and 'offline' events can be added to the network as follows:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"player.network.addEventListener('online', handleOnlineEvent);"})}),"\n",(0,n.jsx)(t.p,{children:"Events can be removed similarly, as follows:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"player.network.removeEventListener('online', handleOnlineEvent);"})}),"\n",(0,n.jsx)(t.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-145/theoplayer/v7/faq/why-does-network-api-not-work-on-ios-devices",children:"Why does the Network API not work on iOS devices?"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>i});var n=r(96540);const s={},o=n.createContext(s);function d(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);