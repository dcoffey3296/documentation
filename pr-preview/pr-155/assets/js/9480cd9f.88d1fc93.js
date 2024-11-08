"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52596],{35483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(74848),i=n(28453);const o={},r="Change text when Airplaying",l={id:"faq/how-to-change-text-when-airplaying",title:"Change text when Airplaying",description:"You will need to add the 'metadata' parameter to the SourceDescription with the 'title' property filled with the title to be displayed.",source:"@site/theoplayer_versioned_docs/version-v6/faq/42-how-to-change-text-when-airplaying.md",sourceDirName:"faq",slug:"/faq/how-to-change-text-when-airplaying",permalink:"/documentation/pr-preview/pr-155/theoplayer/v6/faq/how-to-change-text-when-airplaying",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/faq/42-how-to-change-text-when-airplaying.md",tags:[],version:"v6",sidebarPosition:42,frontMatter:{},sidebar:"faq",previous:{title:"How to change text in THEOplayer",permalink:"/documentation/pr-preview/pr-155/theoplayer/v6/faq/how-to-change-text-in-theoplayer"},next:{title:"ITP2.1 problems using THEOplayer",permalink:"/documentation/pr-preview/pr-155/theoplayer/v6/faq/itp21-problems-using-theoplayer"}},c={},p=[{value:"Code example",id:"code-example",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"change-text-when-airplaying",children:"Change text when Airplaying"})}),"\n",(0,a.jsx)(t.p,{children:"You will need to add the 'metadata' parameter to the SourceDescription with the 'title' property filled with the title to be displayed."}),"\n",(0,a.jsx)(t.p,{children:"In order for the Airplay title text to be changed, you will need to add a MetadataDescription. Within this MetadataDescription you have to provide metadataKeys (which can be set to nil to ignore) and a title. This title is the variable that changes the text shown when using Airplay."}),"\n",(0,a.jsx)(t.h2,{id:"code-example",children:"Code example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:' public static var bigBuckBunny : SourceDescription {\n    let typedSource = TypedSource(src: bigBuckBunnyURL, type: StreamType.hls)\n    return SourceDescription(source : typedSource, metadata: MetadataDescription(metadataKeys: nil, title: "A title"))\n}\n'})})]})}function s(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var a=n(96540);const i={},o=a.createContext(i);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);