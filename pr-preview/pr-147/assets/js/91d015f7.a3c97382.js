"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65338],{4874:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var i=t(74848),s=t(28453);const r={},o="What are the player seeking and seeked events and when are they fired",a={id:"faq/what-are-the-player-seeking-and-seeked-events",title:"What are the player seeking and seeked events and when are they fired",description:"They are events related to the playback of media files. seeking is fired when the user starts seeking/moving to a new position. seeked is fired when the user is finished seeking/moving to a new position and the player has buffered a video portion, being therefore ready to play.",source:"@site/theoplayer_versioned_docs/version-v4/faq/39-what-are-the-player-seeking-and-seeked-events.md",sourceDirName:"faq",slug:"/faq/what-are-the-player-seeking-and-seeked-events",permalink:"/documentation/pr-preview/pr-147/theoplayer/v4/faq/what-are-the-player-seeking-and-seeked-events",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/faq/39-what-are-the-player-seeking-and-seeked-events.md",tags:[],version:"v4",sidebarPosition:39,frontMatter:{},sidebar:"faq",previous:{title:"What are the benefits of preloading",permalink:"/documentation/pr-preview/pr-147/theoplayer/v4/faq/what-are-the-benefits-of-preloading"},next:{title:"Can we use HLS or DASH ads",permalink:"/documentation/pr-preview/pr-147/theoplayer/v4/faq/can-we-use-hls-or-dash-ads"}},d={},h=[{value:"Remarks",id:"remarks",level:2},{value:"Resources",id:"resources",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"what-are-the-player-seeking-and-seeked-events-and-when-are-they-fired",children:"What are the player seeking and seeked events and when are they fired"})}),"\n",(0,i.jsxs)(n.p,{children:["They are events related to the playback of media files. ",(0,i.jsx)(n.code,{children:"seeking"})," is fired when the user starts seeking/moving to a new position. ",(0,i.jsx)(n.code,{children:"seeked"})," is fired when the user is finished seeking/moving to a new position and the player has buffered a video portion, being therefore ready to play."]}),"\n",(0,i.jsxs)(n.p,{children:["The player ",(0,i.jsx)(n.code,{children:"seeking"})," and ",(0,i.jsx)(n.code,{children:"seeked"})," events are not to be confused with the homonym ",(0,i.jsx)(n.code,{children:"<video>"})," element events, although they mainly coincide in meaning and occurrence. In this regard, in THEOplayer you find both the player events and the video events."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Seeking"})," and ",(0,i.jsx)(n.em,{children:"scrubbing"})," are not considered equal in THEOplayer. ",(0,i.jsx)(n.em,{children:"Seeking"})," is the action of starting to move to a new position and it has the corresponding ",(0,i.jsx)(n.code,{children:"seeking"})," event. ",(0,i.jsx)(n.em,{children:"Scrubbing"})," is the action to keep seeking to new positions while maintaining ",(0,i.jsx)(n.code,{children:"mousedown"})," for a prolonged time. It has no corresponding event. Scrubbing can contain multiple seeking actions. While the viewer is scrubbing, the CSS class ",(0,i.jsx)(n.code,{children:"vjs-scrubbing"})," is added on the ",(0,i.jsx)(n.code,{children:".theoplayer-container"})," element."]}),"\n",(0,i.jsxs)(n.p,{children:["In other words, if the viewer does not seek directly to a new position with one click (",(0,i.jsx)(n.code,{children:"mousedown"})," and ",(0,i.jsx)(n.code,{children:"mouseup"}),") but scrubs on the timeline instead, multiple ",(0,i.jsx)(n.code,{children:"seeking"})," and ",(0,i.jsx)(n.code,{children:"seeked"})," events may be fired. This is due to the not uniform movement while scrubbing. For example, if the pointer stays briefly in the same position while scrubbing and then resumes its motion, multiple ",(0,i.jsx)(n.code,{children:"seeking"})," events may be thrown, as this is interpreted as different seeking actions. Even during scrubbing, if the pointer is temporarily staying in the same position, the player will try to buffer the corresponding video portion. If enough video is buffered and playback could start from that position, the ",(0,i.jsx)(n.code,{children:"seeked"})," event will also be thrown at that moment, although the user may still be scrubbing."]}),"\n",(0,i.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,i.jsxs)(n.p,{children:["The player events and ",(0,i.jsx)(n.code,{children:"<video>"})," element events ",(0,i.jsx)(n.code,{children:"seeking"})," and ",(0,i.jsx)(n.code,{children:"seeked"})," should behave similarly, be fired on the same occasions and the same number of times. If they don\u2019t, please report it in a ticket in our Service Desk."]}),"\n",(0,i.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsx)(n.p,{children:"The following resources provide more information:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events",children:"https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events"}),": MDN reference"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v4/api-reference/web/classes/Player.html",children:"Player API reference"})}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);