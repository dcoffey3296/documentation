"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[30598],{12051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=n(74848),i=n(28453);const r={},l="SpotX",d={id:"how-to-guides/ads/spotx",title:"SpotX",description:"SpotX is a global video ad serving platform providing digital media owners with a solution that allows them to monetize their content with video advertising across desktop, mobile and connected devices.",source:"@site/theoplayer_versioned_docs/version-v7/how-to-guides/01-ads/07-spotx.md",sourceDirName:"how-to-guides/01-ads",slug:"/how-to-guides/ads/spotx",permalink:"/documentation/pr-preview/pr-143/theoplayer/v7/how-to-guides/ads/spotx",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/how-to-guides/01-ads/07-spotx.md",tags:[],version:"v7",sidebarPosition:7,frontMatter:{},sidebar:"roku",previous:{title:"FreeWheel",permalink:"/documentation/pr-preview/pr-143/theoplayer/v7/how-to-guides/ads/freewheel"},next:{title:"Google Dynamic Ad Insertion (DAI)",permalink:"/documentation/pr-preview/pr-143/theoplayer/v7/how-to-guides/ads/google-dai"}},o={},c=[{value:"SDKs",id:"sdks",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Integrating SpotX",id:"integrating-spotx",level:2},{value:"Web SDK",id:"web-sdk",level:3},{value:"iOS/tvOS SDK",id:"iostvos-sdk",level:3},{value:"Android (TV) SDK",id:"android-tv-sdk",level:3}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"spotx",children:"SpotX"})}),"\n",(0,s.jsx)(t.p,{children:"SpotX is a global video ad serving platform providing digital media owners with a solution that allows them to monetize their content with video advertising across desktop, mobile and connected devices."}),"\n",(0,s.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"No"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.p,{children:["Your THEOplayer SDK must have the ",(0,s.jsx)(t.code,{children:"SpotX"})," module enabled. You can enable this module when building your THEOplayer SDK through the ",(0,s.jsx)(t.a,{href:"https://portal.theoplayer.com",children:"THEOplayer Development Portal"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"integrating-spotx",children:"Integrating SpotX"}),"\n",(0,s.jsx)(t.h3,{id:"web-sdk",children:"Web SDK"}),"\n",(0,s.jsx)(t.p,{children:"Add the SpotX ad integration when configuring the player"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"player.source = {\n    sources: ...,\n    ads: [{\n        integration: 'spotx',\n        ...\n    }]\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["the ",(0,s.jsx)(t.code,{children:"{{SpotXAdDescription}}"})," object provides the following properties:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Method"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Optional"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"integration"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["Use the value 'spotx' to use the SpotX ad integration. The SpotX integration uses Google IMA. To use Google IMA, it is required to load the SDK first. You can find the getting started of Google IMA sdk at: ",(0,s.jsx)(t.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/html5/quickstart",children:"https://developers.google.com/interactive-media-ads/docs/sdks/html5/quickstart"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"id"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"number or string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Your SpotX id"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"cacheBuster"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"boolean"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Add the cb parameter with a random number to the SpotX tag."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"maximumAdDuration"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"number or string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"custom"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"SpotXData"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"SpotX custom data"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"app"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"SpotXData"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"SpotX app data"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"device"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"SpotXData"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"SpotX device data"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"user"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"SpotXData"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"SpotX user data"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"sources"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"SpotX ad tag (to directly set the SpotX source link)"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"player.source = {\n    sources: ...,\n    ads: [{\n        integration: 'spotx',\n        id: 123456,\n        cacheBuster: true,\n        app: {\n            bundle: 'com.exampleapps.example',\n            name: 'My CTV App'\n        },\n        device: {\n            ifa: '38400000-8cf0-11bd-b23e-10b96e40000d',\n            ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1',\n            geo: {\n                lat: -24.378528,\n                lon: -128.325119\n            },\n            dnt: 1,\n            lmt: 1,\n        },\n        custom: {\n            category: ['category1', 'category2'],\n            somekey: 'somevalue'\n        },\n        user: {\n            yob: 1984,\n            gender: 'm'\n        }\n    }\n]};\n"})}),"\n",(0,s.jsx)(t.h3,{id:"iostvos-sdk",children:"iOS/tvOS SDK"}),"\n",(0,s.jsx)(t.p,{children:"This API is currently not available on the iOS/tvOS SDK."}),"\n",(0,s.jsx)(t.h3,{id:"android-tv-sdk",children:"Android (TV) SDK"}),"\n",(0,s.jsx)(t.p,{children:"This API is currently not available on the Android (TV) SDK."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>d});var s=n(96540);const i={},r=s.createContext(i);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);