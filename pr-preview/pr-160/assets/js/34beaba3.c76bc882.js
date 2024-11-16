"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["78962"],{19625:function(e,t,i){i.r(t),i.d(t,{metadata:()=>o,contentTitle:()=>l,default:()=>c,assets:()=>a,toc:()=>d,frontMatter:()=>s});var o=JSON.parse('{"id":"how-to-guides/ui/customising-vertical-volume-slider","title":"Customizing the UI: vertical volume slider","description":"This article provides information regarding the implementation of a vertical volume slider instead of the default horizontal one.","source":"@site/theoplayer_versioned_docs/version-v4/how-to-guides/11-ui/12-customising-vertical-volume-slider.md","sourceDirName":"how-to-guides/11-ui","slug":"/how-to-guides/ui/customising-vertical-volume-slider","permalink":"/documentation/pr-preview/pr-160/theoplayer/v4/how-to-guides/ui/customising-vertical-volume-slider","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/how-to-guides/11-ui/12-customising-vertical-volume-slider.md","tags":[],"version":"v4","sidebarPosition":12,"frontMatter":{},"sidebar":"roku","previous":{"title":"How to make an audio-only player","permalink":"/documentation/pr-preview/pr-160/theoplayer/v4/how-to-guides/ui/how-to-make-audio-only-player"},"next":{"title":"UI Skinning","permalink":"/documentation/pr-preview/pr-160/theoplayer/v4/how-to-guides/ui/ui-skinning"}}'),n=i("85893"),r=i("50065");let s={},l="Customizing the UI: vertical volume slider",a={},d=[];function u(e){let t={a:"a",h1:"h1",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"customizing-the-ui-vertical-volume-slider",children:"Customizing the UI: vertical volume slider"})}),"\n",(0,n.jsx)(t.p,{children:"This article provides information regarding the implementation of a vertical volume slider instead of the default horizontal one."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Please note that the following page is meant as a general example and need in all cases to be further personalised. The aim is to show you the process of implementing a vertical volume slider."})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"In other words, this is a first step in a work in progress as it does not yet account for color and aspect customization, as well as for a series of other small details."})}),"\n",(0,n.jsxs)(t.p,{children:["There is currently no ready-made option in THEOplayer for changing the orientation of the volume slider with a simple parameter. However, good results can be achieved with a ",(0,n.jsx)(t.a,{href:"http://demo.theoplayer.com/adding-buttons-text-overlay-to-theoplayer",children:"custom button"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["You can find ",(0,n.jsx)(t.a,{href:"https://cdn.theoplayer.com/demos/alberto/vertical-volume.html",children:"here"})," a working example of a page including a custom vertical volume slider."]}),"\n",(0,n.jsx)(t.p,{children:"Notes about the current example:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"it has been successfully tested on major browsers (Chrome, Firefox, Safari) but no complete investigation has been performed. In Edge the slider still does not appear correctly and needs some more CSS tinkering."}),"\n",(0,n.jsx)(t.li,{children:"it has been successfully tested in several conditions (fullscreen and inline presentation mode and on different resolutions). However, it still needs testing in your specific implementation and use case."}),"\n",(0,n.jsx)(t.li,{children:"The aspect of the current volume slider differs depending on the browser: we encourage you to replace it with your favorite one and customise it"}),"\n",(0,n.jsx)(t.li,{children:"The volume icon changes when the player is muted, but otherwise do not reflect volume increases/decreases."}),"\n",(0,n.jsx)(t.li,{children:"When the player is muted, the slider and the aria values do not go to 0 yet"}),"\n"]})]})}function c(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return l},a:function(){return s}});var o=i(67294);let n={},r=o.createContext(n);function s(e){let t=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);