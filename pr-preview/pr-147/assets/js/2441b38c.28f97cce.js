"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[39434],{21837:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var t=n(74848),a=n(28453);const i={},o="What does the error message 'Something went wrong with Native playback' mean",s={id:"faq/what-does-error-something-went-wrong-during-playback-mean",title:"What does the error message 'Something went wrong with Native playback' mean",description:'This error, "Something went wrong with Native playback", occurs whenever the player struggles on the native rendering pipeline of the browser in use. The error code itself can be different, and it reflects the HTML5 MediaError interface.',source:"@site/theoplayer_versioned_docs/version-v4/faq/19-what-does-error-something-went-wrong-during-playback-mean.md",sourceDirName:"faq",slug:"/faq/what-does-error-something-went-wrong-during-playback-mean",permalink:"/documentation/pr-preview/pr-147/theoplayer/v4/faq/what-does-error-something-went-wrong-during-playback-mean",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/faq/19-what-does-error-something-went-wrong-during-playback-mean.md",tags:[],version:"v4",sidebarPosition:19,frontMatter:{},sidebar:"faq",previous:{title:"What does the error message 'Unknown CDM error' mean",permalink:"/documentation/pr-preview/pr-147/theoplayer/v4/faq/what-does-error-unknown-cdm-mean"},next:{title:"Why are not all response headers exposed",permalink:"/documentation/pr-preview/pr-147/theoplayer/v4/faq/why-are-not-all-response-headers-exposed"}},l={},d=[{value:"Native Rendering",id:"native-rendering",level:2},{value:"Related articles",id:"related-articles",level:2}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"what-does-the-error-message-something-went-wrong-with-native-playback-mean",children:"What does the error message 'Something went wrong with Native playback' mean"})}),"\n",(0,t.jsx)(r.p,{children:'This error, "Something went wrong with Native playback", occurs whenever the player struggles on the native rendering pipeline of the browser in use. The error code itself can be different, and it reflects the HTML5 MediaError interface.'}),"\n",(0,t.jsx)(r.p,{children:'"Something went wrong with Native playback" is a possible error message which can be exposed by THEOplayer. Although it sounds generic, it is related to native rendering, as explained above.'}),"\n",(0,t.jsx)(r.h2,{id:"native-rendering",children:"Native Rendering"}),"\n",(0,t.jsx)(r.p,{children:"Native rendering is used when THEOplayer leverages the native media playback pipeline. Usually, THEOplayer leverages this when this pipeline is the only possible pipeline, for example when you can't use MSE."}),"\n",(0,t.jsx)(r.p,{children:"Examples:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"When doing playback on iOS Safari, THEOplayer will do native playback, because native rendering is the only option on iOS Safari."}),"\n",(0,t.jsx)(r.li,{children:"When a plain MP4 asset is configured, instead of an HLS or MPEG-DASH stream, THEOplayer will do native rendering."}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Native rendering can log an error due to multiple causes, but they relate to MediaError code. There are several MediaError codes, but for this case the ones relevant are:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"MEDIA_ERR_DECODE: 3"})," \u2013 This is shown when a media resource was deemed as usable, but when trying to decode the media resource in question it appears to have some problems in it (can be segments missing,...)."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"MEDIA_ERR_SRC_NOT_SUPPORTED: 4"})," \u2013 The source added to the player is not suitable for this playback. A good example would be trying to play a DRM protected DASH stream on Safari (Safari only supports HLS-FairPlay)"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["The THEOplayer API can be used to access the MediaError code: ",(0,t.jsx)(r.code,{children:"player.error.code"})]}),"\n",(0,t.jsx)(r.p,{children:"This line will return the MediaError together with the specific code. This makes it easier to find out what the error exactly means, and allows developers to plan for further actions."}),"\n",(0,t.jsx)(r.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaError",children:"https://developer.mozilla.org/en-US/docs/Web/API/MediaError"})}),"\n"]})]})}function c(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>s});var t=n(96540);const a={},i=t.createContext(a);function o(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);