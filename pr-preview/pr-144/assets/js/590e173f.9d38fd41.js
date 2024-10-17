"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12775],{26544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=n(74848),o=n(28453);const s={},a="Server Side Ad Insertion",r={id:"knowledge-base/advertisement/server-side-ad-insertion",title:"Server Side Ad Insertion",description:"If you are a content distributor, you know how difficult it is to properly monetize content. While content acquisition can be expensive, more and more users are looking for ways to access premium content for free.",source:"@site/theoplayer_versioned_docs/version-v7/knowledge-base/01-advertisement/02-server-side-ad-insertion.md",sourceDirName:"knowledge-base/01-advertisement",slug:"/knowledge-base/advertisement/server-side-ad-insertion",permalink:"/documentation/pr-preview/pr-144/theoplayer/v7/knowledge-base/advertisement/server-side-ad-insertion",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/knowledge-base/01-advertisement/02-server-side-ad-insertion.md",tags:[],version:"v7",sidebarPosition:2,frontMatter:{},sidebar:"roku",previous:{title:"Advertising User Guide",permalink:"/documentation/pr-preview/pr-144/theoplayer/v7/knowledge-base/advertisement/user-guide"},next:{title:"Support matrix",permalink:"/documentation/pr-preview/pr-144/theoplayer/v7/knowledge-base/advertisement/support-matrix"}},d={},l=[{value:"Server-Side Ad Insertion",id:"server-side-ad-insertion-1",level:2},{value:"Dynamic Ad Insertion",id:"dynamic-ad-insertion",level:3},{value:"Live vs Video on demand",id:"live-vs-video-on-demand",level:3},{value:"THEOplayer and SSAI",id:"theoplayer-and-ssai",level:3}];function c(e){const t={h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"server-side-ad-insertion",children:"Server Side Ad Insertion"})}),"\n",(0,i.jsx)(t.p,{children:"If you are a content distributor, you know how difficult it is to properly monetize content. While content acquisition can be expensive, more and more users are looking for ways to access premium content for free."}),"\n",(0,i.jsx)(t.p,{children:"When content creators and providers offer easy access to content with advertisements, users will often go one step further and install an ad-blocker which cancels out any client-side advertising. As a result the monetization of the content is offset and providers will no longer be able to cover costs."}),"\n",(0,i.jsx)(t.p,{children:"Luckily, the design of adaptive streaming protocols allows for a solution."}),"\n",(0,i.jsx)(t.h2,{id:"server-side-ad-insertion-1",children:"Server-Side Ad Insertion"}),"\n",(0,i.jsx)(t.p,{children:"An HLS or MPEG-DASH stream consists of a long chain of separate segments. Server-Side Ad Insertion (SSAI) is a simple concept wherein advertising content is injected into this stream of segments. This creates an experience much like traditional broadcasting, with the additional benefit that the injected advertising content can be personalized down to a single-user level. As a client can no longer make the distinction between content and advertisement download call, these calls cannot be blocked by ad blockers."}),"\n",(0,i.jsx)(t.p,{children:"A fully-fledged SSAI system will also contain obfuscation and transcoding services that together will make your content more secure and more stable in playback. As a result, SSAI creates a solution very much like a traditional broadcasting experience. Additionally, a number of modern information and advertisement technologies is leveraged to further increase its efficiency in monetizing content."}),"\n",(0,i.jsx)(t.h3,{id:"dynamic-ad-insertion",children:"Dynamic Ad Insertion"}),"\n",(0,i.jsx)(t.p,{children:"While often used as an interchangeable term for Server-Side Ad Injection, Dynamic Ad Insertion (DAI) actually refers to the ability to dynamically customize the advertising content that is stitched into the stream. While people around the world could be watching the same sports event, it makes very little sense to show each viewer the same advertisement. Targeted ads are much more powerful and Dynamic Ad Insertion allows you to do exactly that."}),"\n",(0,i.jsx)(t.p,{children:"On top of that, Dynamic Ad Insertion allows you to update advertisements. If someone's looking at a live show from four years ago, advertising a four-year-old promotion on cat food at your favorite supermarket chain would not be very effective."}),"\n",(0,i.jsx)(t.h3,{id:"live-vs-video-on-demand",children:"Live vs Video on demand"}),"\n",(0,i.jsx)(t.p,{children:"When we look at live and video on demand, leveraging the full power of SSAI requires us to look at the differences between the use cases."}),"\n",(0,i.jsx)(t.p,{children:"Starting from a video on demand stream without advertisements, SSAI can easily stitch in relevant advertisements for the user that requested the video stream. Since it is a video on demand, the length of the manifest can change to accommodate any ad that is injected."}),"\n",(0,i.jsx)(t.p,{children:"Using SSAI in live streams poses a slightly more difficult use case, in the sense that simply injecting an ad in between segments in a live stream would lengthen the manifest. As a result, for a live stream to be used with SSAI, ad breaks will need to be defined, so that the server knows where it is supposed to stitch in the ads. On top of that the length of ads and ad breaks will need to be matched, whereas for a VOD this is not necessary."}),"\n",(0,i.jsx)(t.p,{children:"The final use case to look at is a recorded live stream that is made available as a video on demand. At first glance it might look like the ad injection process would be the same as the previous use case. However, matching the ad and ad break length is not a hard requirement, as the length of the manifest is not as strict in the VOD use case."}),"\n",(0,i.jsx)(t.h3,{id:"theoplayer-and-ssai",children:"THEOplayer and SSAI"}),"\n",(0,i.jsx)(t.p,{children:"There are a number of solutions in the market that provide SSAI and DAI services. As a market leader in video playback, THEOplayer has chosen to integrate with a number of different partners in the market of SSAI and DAI. These integrations provide a world-class solution with modern advertisement mechanics that allow you to monetize your content successfully."})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(96540);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);