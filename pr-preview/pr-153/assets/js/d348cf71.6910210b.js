"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[30043],{62890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var r=n(74848),i=n(28453);const s={},l="FreeWheel",o={id:"how-to-guides/ads/freewheel",title:"FreeWheel",description:"This guide explains how to set up THEOplayer in combination with FreeWheel, an advertisement vendor.",source:"@site/theoplayer_versioned_docs/version-v6/how-to-guides/01-ads/06-freewheel.md",sourceDirName:"how-to-guides/01-ads",slug:"/how-to-guides/ads/freewheel",permalink:"/documentation/pr-preview/pr-153/theoplayer/v6/how-to-guides/ads/freewheel",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/01-ads/06-freewheel.md",tags:[],version:"v6",sidebarPosition:6,frontMatter:{},sidebar:"roku",previous:{title:"How to display visual cues on the timeline to mark mid-rolls?",permalink:"/documentation/pr-preview/pr-153/theoplayer/v6/how-to-guides/ads/how-to-display-visual-cues"},next:{title:"SpotX",permalink:"/documentation/pr-preview/pr-153/theoplayer/v6/how-to-guides/ads/spotx"}},d={},h=[{value:"SDKs",id:"sdks",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"How to integrate FreeWheel",id:"how-to-integrate-freewheel",level:2},{value:"Code Examples",id:"code-examples",level:3},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:5},{value:"Resources",id:"resources",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"freewheel",children:"FreeWheel"})}),"\n",(0,r.jsx)(t.p,{children:"This guide explains how to set up THEOplayer in combination with FreeWheel, an advertisement vendor."}),"\n",(0,r.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(t.p,{children:"There are prerequisites when using FreeWheel through THEOplayer."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["You must enable the ",(0,r.jsx)(t.code,{children:"freewheel"})," module when building your THEOplayer SDK through the ",(0,r.jsx)(t.a,{href:"https://portal.theoplayer.com",children:"THEOplayer Development Portal"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["This guide expects that you are a FreeWheel client and that you have ad campaigns ready for use. Information on FreeWheel can be found at ",(0,r.jsx)(t.a,{href:"https://freewheel.com",children:"https://freewheel.com"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["You must have access to the ",(0,r.jsx)(t.code,{children:"FreeWheel SDK"}),", as explained further in this guide."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"how-to-integrate-freewheel",children:"How to integrate FreeWheel"}),"\n",(0,r.jsx)(t.h3,{id:"code-examples",children:"Code Examples"}),"\n",(0,r.jsx)(t.p,{children:"This example explains how you do a basic implementation of FreeWheel in THEOplayer."}),"\n",(0,r.jsx)(t.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,r.jsx)(t.p,{children:"The FreeWheel integration is currently only available on the Web SDK."}),"\n",(0,r.jsx)(t.p,{children:"After setting up your basic page containing THEOplayer, you need to add the FreeWheel MRM client SDK to the page:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"<script type='text/javascript' src='https://mssl.fwmrm.net/libs/adm/6.xx.x/AdManager.js'><\/script>"})}),"\n",(0,r.jsxs)(t.p,{children:["Next, you add a ",(0,r.jsx)(t.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/FreeWheelAdDescription.html",children:(0,r.jsx)(t.code,{children:"FreeWheelAdDescription"})})," to your source that specifies the FreeWheel tokens. An example sourceDescription could look like this:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"...\n\x3c!-- make sure to link to a valid version number --\x3e\n<script\n  type=\"text/javascript\"\n  src=\"https://mssl.fwmrm.net/libs/adm/6.xx.x/AdManager.js\"\n><\/script>\n... player.source = { sources : [{ src : 'your.m3u8', type :\n'application/x-mpegurl' }], ads: [{ integration: 'freewheel', networkId: 96749,\nassetId: 'DemoVideoGroup.01', profile: 'global-js', assetDuration: 22,\nadServerUrl: 'https://demo.v.fwmrm.net/ad/g/1', siteSectionId:\n'DemoSiteGroup.01', cuePoints: [{ adUnit: 'preroll' }] }] };\n"})}),"\n",(0,r.jsx)(t.p,{children:"We configure cuePoints in this example. This is needed for some set-ups or completely optional for others. THEOplayer will create a FreeWheel temporalSlot behind the screens, which is a request to schedule an advertisement at said point. It is up to FreeWheel (and the campaign settings) to decide whether it will insert an advertisement at this requested time. Not all campaigns need it and for some campaigns the requested cuePoints might even be ignored by FreeWheel."}),"\n",(0,r.jsx)(t.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,r.jsx)(t.p,{children:"This API is currently not available on the Android (TV) SDK."}),"\n",(0,r.jsx)(t.h5,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,r.jsx)(t.p,{children:"This API is currently not available on the iOS (/tvOS) SDK."}),"\n",(0,r.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,r.jsx)(t.p,{children:"The following resources provide more information:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-153/theoplayer/v6/getting-started/sdks/web/getting-started",children:"THEOplayer Getting Started Guide"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/FreeWheelAdDescription.html",children:"FreeWheelAdDescription"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://freewheel.com",children:"FreeWheel website"})}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var r=n(96540);const i={},s=r.createContext(i);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);