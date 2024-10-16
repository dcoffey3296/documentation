"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[210],{34643:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=t(74848),o=t(28453);const a={},s="Saving the progress of a caching task in iOS",r={id:"how-to-guides/miscellaneous/saving-cachingtask-progress-ios",title:"Saving the progress of a caching task in iOS",description:"This guide explains how to save the progress of an ongoing caching task and what the limitations of the iOS platform are.",source:"@site/theoplayer_versioned_docs/version-v4/how-to-guides/07-miscellaneous/10-saving-cachingtask-progress-ios.md",sourceDirName:"how-to-guides/07-miscellaneous",slug:"/how-to-guides/miscellaneous/saving-cachingtask-progress-ios",permalink:"/documentation/pr-preview/pr-142/theoplayer/v4/how-to-guides/miscellaneous/saving-cachingtask-progress-ios",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/how-to-guides/07-miscellaneous/10-saving-cachingtask-progress-ios.md",tags:[],version:"v4",sidebarPosition:10,frontMatter:{},sidebar:"roku",previous:{title:"Preloading",permalink:"/documentation/pr-preview/pr-142/theoplayer/v4/how-to-guides/miscellaneous/preloading"},next:{title:"Introduction",permalink:"/documentation/pr-preview/pr-142/theoplayer/v4/how-to-guides/miscellaneous/context-menu/introduction"}},l={},c=[{value:"Code Examples",id:"code-examples",level:2},{value:"Limitations",id:"limitations",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"saving-the-progress-of-a-caching-task-in-ios",children:"Saving the progress of a caching task in iOS"})}),"\n",(0,i.jsx)(n.p,{children:"This guide explains how to save the progress of an ongoing caching task and what the limitations of the iOS platform are."}),"\n",(0,i.jsxs)(n.p,{children:["The THEOplayer iOS SDK provides the capability to pause an ongoing task. Doing so will store the file state of the partially downloaded stream to disk, and allow the task to be resumed even after the application runtime has been terminated.\nNote: See ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v4/api-reference/ios/Protocols/CachingTask.html",children:"CachingTask"})," for the ",(0,i.jsx)(n.code,{children:"pause()"})," method."]}),"\n",(0,i.jsx)(n.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,i.jsx)(n.p,{children:"The code example below demonstrates how to save the progress of ongoing caching tasks upon app termination from the app delegate."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"import THEOplayerSDK\n\n@UIApplicationMain\nclass AppDelegate: UIResponder, UIApplicationDelegate {\n\t...\n    ...\n\n    func applicationWillTerminate(_ application: UIApplication) {\n        for task in THEOplayer.cache.tasks {\n            if task.status == .loading {\n                task.pause()\n            }\n        }\n    }\n\n    ...\n    ...\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Alternatively, Apple's ",(0,i.jsx)(n.a,{href:"https://developer.apple.com/documentation/foundation/notificationcenter",children:"NotificationCenter"})," provides an observer to receive app termination events:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"import THEOplayerSDK\n\nNotificationCenter.default.addObserver(self, selector: #selector(willTerminate), name: UIApplication.willTerminateNotification, object: nil)\n\n...\n...\n\n@objc func willTerminate() {\n    for task in THEOplayer.cache.tasks {\n        if task.status == .loading {\n            task.pause()\n        }\n    }\n}\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsxs)(n.p,{children:["The THEOplayer iOS SDK allows the caching task to continue while running in the background, however, control in the background thread is limited and the termination signal falls short as noted in this ",(0,i.jsx)(n.a,{href:"https://developer.apple.com/documentation/uikit/uiapplicationdelegate/1623111-applicationwillterminate",children:"article"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(96540);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);