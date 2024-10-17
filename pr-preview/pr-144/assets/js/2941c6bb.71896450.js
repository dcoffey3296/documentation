"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[31378],{35828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(74848),r=n(28453);const o={},a="THEOplayer iOS/tvOS 5.0 Feature Integrations",s={id:"getting-started/sdks/ios/features",title:"THEOplayer iOS/tvOS 5.0 Feature Integrations",description:"Modularization",source:"@site/theoplayer_versioned_docs/version-v6/getting-started/01-sdks/03-ios/01-features.md",sourceDirName:"getting-started/01-sdks/03-ios",slug:"/getting-started/sdks/ios/features",permalink:"/documentation/pr-preview/pr-144/theoplayer/v6/getting-started/sdks/ios/features",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/getting-started/01-sdks/03-ios/01-features.md",tags:[],version:"v6",sidebarPosition:1,frontMatter:{},sidebar:"ios",previous:{title:"Getting started guide for THEOplayer iOS/tvOS SDK 5.0",permalink:"/documentation/pr-preview/pr-144/theoplayer/v6/getting-started/sdks/ios/getting-started"},next:{title:"Migration from THEOplayer iOS and tvOS SDK 4.x to THEOplayer iOS/tvOS SDK 5.0+",permalink:"/documentation/pr-preview/pr-144/theoplayer/v6/getting-started/sdks/ios/migration-from-4.x"}},d={},l=[{value:"Modularization",id:"modularization",level:2},{value:"Importing additional integration modules",id:"importing-additional-integration-modules",level:2},{value:"Adding integrations",id:"adding-integrations",level:2},{value:"Available feature integrations",id:"available-feature-integrations",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"theoplayer-iostvos-50-feature-integrations",children:"THEOplayer iOS/tvOS 5.0 Feature Integrations"})}),"\n",(0,i.jsx)(t.h2,{id:"modularization",children:"Modularization"}),"\n",(0,i.jsx)(t.p,{children:"The THEOplayer iOS 5.0 SDK uses modularized features, which means there is a base SDK that can handle basic playback and additional feature integrations are provided as separate modules that can be added as desired.\nThis approach gives more flexibility and results in a reduced application size, since non-required parts are not included in the build of the application."}),"\n",(0,i.jsx)(t.p,{children:"For example, the core SDK is provided by:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:"import THEOplayerSDK\n"})}),"\n",(0,i.jsx)(t.p,{children:"Meanwhile, additional features such as Google IMA and Google Cast are provided by:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:"import THEOplayerGoogleIMAIntegration\nimport THEOplayerGoogleCastIntegration\n"})}),"\n",(0,i.jsx)(t.h2,{id:"importing-additional-integration-modules",children:"Importing additional integration modules"}),"\n",(0,i.jsx)(t.p,{children:"As shown in the previous section, importing additional integration modules can be done by simply adding the dependency to your swift source file."}),"\n",(0,i.jsxs)(t.p,{children:["For more information on how to fetch the dependencies to your Xcode project, ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-144/theoplayer/v6/getting-started/sdks/ios/getting-started",children:"please check the getting started guide."})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Important Note:"}),"\nIt is required to keep the THEOplayer core SDK and all the required feature modules on the ",(0,i.jsx)(t.strong,{children:"same"})," version number.\nFor example one should ",(0,i.jsx)(t.strong,{children:"not"})," import ",(0,i.jsx)(t.code,{children:"THEOplayerSDK-core~>5.6.0"})," and ",(0,i.jsx)(t.code,{children:"THEOplayer-Integration-GoogleIMA~>5.5.0"})," in the same project."]}),"\n",(0,i.jsx)(t.h2,{id:"adding-integrations",children:"Adding integrations"}),"\n",(0,i.jsx)(t.p,{children:"After importing the dependencies, it's time to create the integrations and connect them to THEOplayer."}),"\n",(0,i.jsxs)(t.p,{children:["Each module provides a ",(0,i.jsx)(t.strong,{children:"Factory"})," class that allows the creation of that specific integration.\nFor example, the Google IMA module provides ",(0,i.jsx)(t.code,{children:"GoogleImaIntegrationFactory"})," and the Google Cast module provides ",(0,i.jsx)(t.code,{children:"GoogleCastIntegrationFactory"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Additionally, the ",(0,i.jsx)(t.code,{children:"THEOplayer"})," class provides the ",(0,i.jsx)(t.code,{children:"addIntegration(_ integration: Integration)"})," API which allows adding the integration to the player."]}),"\n",(0,i.jsxs)(t.p,{children:["Connecting the feature integration with the ",(0,i.jsx)(t.code,{children:"THEOplayer"})," will make them available to be used.\nOtherwise, calling an API from an integration without adding it to the ",(0,i.jsx)(t.code,{children:"THEOplayer"})," will cause an error to be thrown."]}),"\n",(0,i.jsx)(t.h2,{id:"available-feature-integrations",children:"Available feature integrations"}),"\n",(0,i.jsx)(t.p,{children:"With THEOplayer iOS 5.0 SDK we currently support the following feature integrations:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Feature"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Dependency"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Release"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Documentation"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Google IMA"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"THEOplayerGoogleIMAIntegration"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"5.0.0"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.a,{href:"https://github.com/THEOplayer/theoplayer-sdk-ios/tree/master/THEOplayer-Integration-GoogleIMA",children:"documentation"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Chromecast"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"THEOplayerGoogleCastIntegration"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"5.0.0"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.a,{href:"https://github.com/THEOplayer/theoplayer-sdk-ios/tree/master/THEOplayer-Integration-GoogleCast",children:"documentation"})})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var i=n(96540);const r={},o=i.createContext(r);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);