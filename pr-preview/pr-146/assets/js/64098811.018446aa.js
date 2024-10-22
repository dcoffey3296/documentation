"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[81022],{88975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=n(74848),s=n(28453);const i={},c="Segment",r={id:"how-to-guides/analytics/segment",title:"Segment",description:"Segment is a Customer Data Platform, and offers integrations with",source:"@site/theoplayer_versioned_docs/version-v6/how-to-guides/02-analytics/11-segment.md",sourceDirName:"how-to-guides/02-analytics",slug:"/how-to-guides/analytics/segment",permalink:"/documentation/pr-preview/pr-146/theoplayer/v6/how-to-guides/analytics/segment",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/02-analytics/11-segment.md",tags:[],version:"v6",sidebarPosition:11,frontMatter:{},sidebar:"roku",previous:{title:"Tealium",permalink:"/documentation/pr-preview/pr-146/theoplayer/v6/how-to-guides/analytics/tealium"},next:{title:"Introduction",permalink:"/documentation/pr-preview/pr-146/theoplayer/v6/how-to-guides/cast/chromecast/introduction"}},a={},d=[{value:"SDKs",id:"sdks",level:2},{value:"Connecting Segment to THEOplayer",id:"connecting-segment-to-theoplayer",level:2},{value:"Web SDK",id:"web-sdk",level:3},{value:"Android SDK",id:"android-sdk",level:3},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:3},{value:"Other platforms",id:"other-platforms",level:3}];function l(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"segment",children:"Segment"})}),"\n",(0,o.jsxs)(t.p,{children:["Segment is a ",(0,o.jsx)(t.a,{href:"https://segment.com/docs/guides/",children:"Customer Data Platform"}),", and offers ",(0,o.jsx)(t.a,{href:"https://segment.com/docs/connections/destinations/catalog/index-all/",children:"integrations"})," with\n",(0,o.jsx)(t.a,{href:"https://segment.com/docs/connections/destinations/catalog/google-analytics/",children:"Google Analytics"}),",\n",(0,o.jsx)(t.a,{href:"https://segment.com/docs/connections/destinations/catalog/adobe-analytics/",children:"Adobe Analytics"}),",\n",(0,o.jsx)(t.a,{href:"https://segment.com/docs/connections/destinations/catalog/youbora/",children:"Youbora"}),",\nand others."]}),"\n",(0,o.jsxs)(t.p,{children:['Segment sets up "',(0,o.jsx)(t.a,{href:"https://segment.com/docs/connections/",children:"Connections"}),'" between "',(0,o.jsx)(t.a,{href:"https://segment.com/docs/connections/sources/",children:"Sources"}),'" and "',(0,o.jsx)(t.a,{href:"https://segment.com/docs/connections/destinations/",children:"Destinations"}),'".']}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Sources send messages into Segment (and other tools). They have JavaScript source, an Android source, and so on."}),"\n",(0,o.jsx)(t.li,{children:"Destinations (like Google Analytics, Adobe Analytics, Youbora) receive messages from Segment."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Segment can be implemented on top of THEOplayer.\nRefer to the article on ",(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-146/theoplayer/v6/how-to-guides/analytics/custom-analytics-integration",children:"building a custom analytics integrations"})," for more information on how to build an integration on top of THEOplayer."]}),"\n",(0,o.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,o.jsxs)(t.p,{children:["As a developer you'll have to ",(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-146/theoplayer/v6/how-to-guides/analytics/custom-analytics-integration",children:"build a custom analytics integration"})," to support Segment through a THEOplayer SDK."]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Roku SDK"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"Custom"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"Custom"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"Custom"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"Custom"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"Custom"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"Custom"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"Custom"})]})})]}),"\n",(0,o.jsx)(t.h2,{id:"connecting-segment-to-theoplayer",children:"Connecting Segment to THEOplayer"}),"\n",(0,o.jsx)(t.p,{children:"Segment can be integrated on top of THEOplayer."}),"\n",(0,o.jsx)(t.h3,{id:"web-sdk",children:"Web SDK"}),"\n",(0,o.jsxs)(t.p,{children:["You'll (most likely) use the \"",(0,o.jsx)(t.a,{href:"https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/",children:"Analytics.js"}),'" source to get access to the Segment API.']}),"\n",(0,o.jsxs)(t.p,{children:['Then, for each of your destinations, you want to figure out whether you can use the "Video Spec",\nor whether need to do something specific for some destinations (e.g. ',(0,o.jsx)(t.a,{href:"https://segment.com/docs/connections/destinations/catalog/youbora/",children:"Youbora"}),")."]}),"\n",(0,o.jsxs)(t.p,{children:['Segment describes a "Video Spec" at ',(0,o.jsx)(t.a,{href:"https://segment.com/docs/connections/spec/video/",children:"https://segment.com/docs/connections/spec/video/"}),', but this article\nalso mentions that "not all destinations support video tracking and you should always check with the individual destination documentation to confirm".']}),"\n",(0,o.jsx)(t.h3,{id:"android-sdk",children:"Android SDK"}),"\n",(0,o.jsxs)(t.p,{children:["You'll (most likely) use the \"",(0,o.jsx)(t.a,{href:"https://segment.com/docs/connections/sources/catalog/libraries/mobile/android/",children:"Analytics for Android SDK"}),'" source to get access to the Segment API.']}),"\n",(0,o.jsxs)(t.p,{children:['Then, for each of your destinations, you want to figure out whether you can use the "Video Spec",\nor whether need to do something specific for some destinations (e.g. ',(0,o.jsx)(t.a,{href:"https://segment.com/docs/connections/destinations/catalog/youbora/",children:"Youbora"}),")."]}),"\n",(0,o.jsxs)(t.p,{children:['Segment describes a "Video Spec" at ',(0,o.jsx)(t.a,{href:"https://segment.com/docs/connections/spec/video/",children:"https://segment.com/docs/connections/spec/video/"}),', but this article\nalso mentions that "not all destinations support video tracking and you should always check with the individual destination documentation to confirm".']}),"\n",(0,o.jsx)(t.h3,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,o.jsxs)(t.p,{children:["You'll (most likely) use the \"",(0,o.jsx)(t.a,{href:"https://segment.com/docs/connections/sources/catalog/libraries/mobile/ios/",children:"Analytics for iOS SDK"}),'" source to get access to the Segment API.']}),"\n",(0,o.jsxs)(t.p,{children:['Then, for each of your destinations, you want to figure out whether you can use the "Video Spec",\nor whether need to do something specific for some destinations (e.g. ',(0,o.jsx)(t.a,{href:"https://segment.com/docs/connections/destinations/catalog/youbora/",children:"Youbora"}),")."]}),"\n",(0,o.jsxs)(t.p,{children:['Segment describes a "Video Spec" at ',(0,o.jsx)(t.a,{href:"https://segment.com/docs/connections/spec/video/",children:"https://segment.com/docs/connections/spec/video/"}),', but this article\nalso mentions that "not all destinations support video tracking and you should always check with the individual destination documentation to confirm".']}),"\n",(0,o.jsx)(t.h3,{id:"other-platforms",children:"Other platforms"}),"\n",(0,o.jsxs)(t.p,{children:["Refer to the documentation at ",(0,o.jsx)(t.a,{href:"https://segment.com/docs/",children:"https://segment.com/docs/"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>r});var o=n(96540);const s={},i=o.createContext(s);function c(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);