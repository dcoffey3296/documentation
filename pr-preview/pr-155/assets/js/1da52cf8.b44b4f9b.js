"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["27254"],{8957:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>l,default:()=>d,assets:()=>p,toc:()=>h,frontMatter:()=>o});var a=JSON.parse('{"id":"faq/how-to-change-text-when-airplaying","title":"Change text when Airplaying","description":"You will need to add the \'metadata\' parameter to the SourceDescription with the \'title\' property filled with the title to be displayed.","source":"@site/theoplayer/faq/42-how-to-change-text-when-airplaying.md","sourceDirName":"faq","slug":"/faq/how-to-change-text-when-airplaying","permalink":"/documentation/pr-preview/pr-155/theoplayer/faq/how-to-change-text-when-airplaying","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/faq/42-how-to-change-text-when-airplaying.md","tags":[],"version":"current","sidebarPosition":42,"frontMatter":{},"sidebar":"faq","previous":{"title":"How to change text in THEOplayer","permalink":"/documentation/pr-preview/pr-155/theoplayer/faq/how-to-change-text-in-theoplayer"},"next":{"title":"ITP2.1 problems using THEOplayer","permalink":"/documentation/pr-preview/pr-155/theoplayer/faq/itp21-problems-using-theoplayer"}}'),i=n("85893"),r=n("50065");let o={},l="Change text when Airplaying",p={},h=[{value:"Code example",id:"code-example",level:2}];function c(e){let t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"change-text-when-airplaying",children:"Change text when Airplaying"})}),"\n",(0,i.jsx)(t.p,{children:"You will need to add the 'metadata' parameter to the SourceDescription with the 'title' property filled with the title to be displayed."}),"\n",(0,i.jsx)(t.p,{children:"In order for the Airplay title text to be changed, you will need to add a MetadataDescription. Within this MetadataDescription you have to provide metadataKeys (which can be set to nil to ignore) and a title. This title is the variable that changes the text shown when using Airplay."}),"\n",(0,i.jsx)(t.h2,{id:"code-example",children:"Code example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:' public static var bigBuckBunny : SourceDescription {\n    let typedSource = TypedSource(src: bigBuckBunnyURL, type: StreamType.hls)\n    return SourceDescription(source : typedSource, metadata: MetadataDescription(metadataKeys: nil, title: "A title"))\n}\n'})})]})}function d(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return o}});var a=n(67294);let i={},r=a.createContext(i);function o(e){let t=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);