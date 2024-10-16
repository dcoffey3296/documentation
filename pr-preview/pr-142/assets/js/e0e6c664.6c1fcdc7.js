"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[27808],{61784:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=i(74848),n=i(28453);const r={},s="Customizing the UI: vertical volume slider",l={id:"how-to-guides/ui/customising-vertical-volume-slider",title:"Customizing the UI: vertical volume slider",description:"This article provides information regarding the implementation of a vertical volume slider instead of the default horizontal one.",source:"@site/theoplayer_versioned_docs/version-v6/how-to-guides/11-ui/12-customising-vertical-volume-slider.md",sourceDirName:"how-to-guides/11-ui",slug:"/how-to-guides/ui/customising-vertical-volume-slider",permalink:"/documentation/pr-preview/pr-142/theoplayer/v6/how-to-guides/ui/customising-vertical-volume-slider",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/11-ui/12-customising-vertical-volume-slider.md",tags:[],version:"v6",sidebarPosition:12,frontMatter:{},sidebar:"roku",previous:{title:"How to make an audio-only player",permalink:"/documentation/pr-preview/pr-142/theoplayer/v6/how-to-guides/ui/how-to-make-audio-only-player"},next:{title:"UI Skinning",permalink:"/documentation/pr-preview/pr-142/theoplayer/v6/how-to-guides/ui/ui-skinning"}},a={},d=[];function c(e){const t={a:"a",h1:"h1",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"customizing-the-ui-vertical-volume-slider",children:"Customizing the UI: vertical volume slider"})}),"\n",(0,o.jsx)(t.p,{children:"This article provides information regarding the implementation of a vertical volume slider instead of the default horizontal one."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Please note that the following page is meant as a general example and need in all cases to be further personalised. The aim is to show you the process of implementing a vertical volume slider."})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"In other words, this is a first step in a work in progress as it does not yet account for color and aspect customization, as well as for a series of other small details."})}),"\n",(0,o.jsxs)(t.p,{children:["There is currently no ready-made option in THEOplayer for changing the orientation of the volume slider with a simple parameter. However, good results can be achieved with a ",(0,o.jsx)(t.a,{href:"http://demo.theoplayer.com/adding-buttons-text-overlay-to-theoplayer",children:"custom button"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["You can find ",(0,o.jsx)(t.a,{href:"https://cdn.theoplayer.com/demos/alberto/vertical-volume.html",children:"here"})," a working example of a page including a custom vertical volume slider."]}),"\n",(0,o.jsx)(t.p,{children:"Notes about the current example:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"it has been successfully tested on major browsers (Chrome, Firefox, Safari) but no complete investigation has been performed. In Edge the slider still does not appear correctly and needs some more CSS tinkering."}),"\n",(0,o.jsx)(t.li,{children:"it has been successfully tested in several conditions (fullscreen and inline presentation mode and on different resolutions). However, it still needs testing in your specific implementation and use case."}),"\n",(0,o.jsx)(t.li,{children:"The aspect of the current volume slider differs depending on the browser: we encourage you to replace it with your favorite one and customise it"}),"\n",(0,o.jsx)(t.li,{children:"The volume icon changes when the player is muted, but otherwise do not reflect volume increases/decreases."}),"\n",(0,o.jsx)(t.li,{children:"When the player is muted, the slider and the aria values do not go to 0 yet"}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>l});var o=i(96540);const n={},r=o.createContext(n);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);