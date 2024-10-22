"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52105],{95935:(o,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=t(74848),s=t(28453);const i={},r="How to bypass copy() not working in Safari console",a={id:"getting-started/sdks/ios/how-to-bypass-copy-not-working-safari-console",title:"How to bypass copy() not working in Safari console",description:"When trying to use the copy() method in the Safari console, you'll notice that this does not work.",source:"@site/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/03-ios/03-how-to-bypass-copy-not-working-safari-console.md",sourceDirName:"getting-started/01-sdks/03-ios",slug:"/getting-started/sdks/ios/how-to-bypass-copy-not-working-safari-console",permalink:"/documentation/pr-preview/pr-145/theoplayer/v4/getting-started/sdks/ios/how-to-bypass-copy-not-working-safari-console",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/03-ios/03-how-to-bypass-copy-not-working-safari-console.md",tags:[],version:"v4",sidebarPosition:3,frontMatter:{},sidebar:"ios",previous:{title:"My app does not want to build for the app store",permalink:"/documentation/pr-preview/pr-145/theoplayer/v4/getting-started/sdks/ios/app-doesnt-want-to-build-app-store"},next:{title:"How to couple the native GCKUICastButton to THEOplayer",permalink:"/documentation/pr-preview/pr-145/theoplayer/v4/getting-started/sdks/ios/how-to-couple-native-gckuicastbutton"}},c={},l=[];function p(o){const e={code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",...(0,s.R)(),...o.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.header,{children:(0,n.jsx)(e.h1,{id:"how-to-bypass-copy-not-working-in-safari-console",children:"How to bypass copy() not working in Safari console"})}),"\n",(0,n.jsx)(e.p,{children:"When trying to use the copy() method in the Safari console, you'll notice that this does not work."}),"\n",(0,n.jsx)(e.p,{children:"This functionality is often used to copy the source of a player and to paste it somewhere else. You could work around this limitation by following the steps below."}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:"In the Safari console containing a THEOplayer, enter JSON.stringify(player.source)"}),"\n",(0,n.jsx)(e.li,{children:"The console will convert the object into a string and return it."}),"\n",(0,n.jsx)(e.li,{children:"Copy the string to the clipboard manually"}),"\n",(0,n.jsxs)(e.li,{children:["Say we want to set the source of a second player to the source we just copied. Now, in (another) console, enter ",(0,n.jsx)(e.code,{children:"player.source = JSON.parse(stringyoujustcopied)"})]}),"\n",(0,n.jsx)(e.li,{children:"The second player will now have the same source as the first player"}),"\n"]})]})}function d(o={}){const{wrapper:e}={...(0,s.R)(),...o.components};return e?(0,n.jsx)(e,{...o,children:(0,n.jsx)(p,{...o})}):p(o)}},28453:(o,e,t)=>{t.d(e,{R:()=>r,x:()=>a});var n=t(96540);const s={},i=n.createContext(s);function r(o){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function a(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(s):o.components||s:r(o.components),n.createElement(i.Provider,{value:e},o.children)}}}]);