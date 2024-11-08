"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7294],{18738:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var n=i(74848),s=i(28453);const a={},r="How to detect if the user changes the video quality",o={id:"faq/how-to-detect-if-user-changes-video-quality",title:"How to detect if the user changes the video quality",description:"It is possible to distinguish between when the quality is changed by ABR or by the user and, in the latter case, which quality has been selected.",source:"@site/theoplayer/faq/80-how-to-detect-if-user-changes-video-quality.md",sourceDirName:"faq",slug:"/faq/how-to-detect-if-user-changes-video-quality",permalink:"/documentation/pr-preview/pr-155/theoplayer/faq/how-to-detect-if-user-changes-video-quality",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer/faq/80-how-to-detect-if-user-changes-video-quality.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{},sidebar:"faq",previous:{title:"Why are the FairPlay license and certificate being requested again on iOS after ads?",permalink:"/documentation/pr-preview/pr-155/theoplayer/faq/why-is-DRM-license-retrieved-again-after-ads-on-iOS"}},c={},h=[];function d(e){const t={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"how-to-detect-if-the-user-changes-the-video-quality",children:"How to detect if the user changes the video quality"})}),"\n",(0,n.jsx)(t.p,{children:"It is possible to distinguish between when the quality is changed by ABR or by the user and, in the latter case, which quality has been selected."}),"\n",(0,n.jsxs)(t.p,{children:["This can be easily achieved listening to the ",(0,n.jsx)(t.code,{children:"targetqualitychanged"})," event (",(0,n.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/TargetQualityChangedEvent.html",children:"documentation"}),") such as in the snippet below:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"player.videoTracks[0].addEventListener('targetqualitychanged', (e)=>{  \n let selectedTrack = e.qualities[0];\n});\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"The possible cases"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)("u",{children:"ABR changes the quality being played"}),": this event is not fired"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)("u",{children:"the user selects a specific quality"}),": an Object describing the quality is returned: the ",(0,n.jsx)(t.code,{children:"height"})," and ",(0,n.jsx)(t.code,{children:"bandwidth"})," properties may be checked to distinguish it from the other qualities"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)("u",{children:"the user restores ABR"}),": ",(0,n.jsx)(t.code,{children:"undefined"})," is returned"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Notes"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The event returns an Array because the implementer may also use the targetQuality feature to select a subset of the available qualities to limit ABR to those qualities. If this is part of your use case, the snippet above might need to be tweaked to account for that case (e.g.: filter it out)."}),"\n",(0,n.jsx)(t.li,{children:"when resetting the player.source, the videoTracks object is also reset, so the event will need to be appended again"}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var n=i(96540);const s={},a=n.createContext(s);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);