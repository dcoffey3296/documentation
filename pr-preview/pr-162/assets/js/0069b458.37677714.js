"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["67764"],{59691:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>s,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>o});var i=JSON.parse('{"id":"getting-started/sdks/ios/features","title":"THEOplayer iOS/tvOS 5.0 Feature Integrations","description":"Modularization","source":"@site/theoplayer_versioned_docs/version-v7/getting-started/01-sdks/03-ios/01-features.md","sourceDirName":"getting-started/01-sdks/03-ios","slug":"/getting-started/sdks/ios/features","permalink":"/documentation/pr-preview/pr-162/theoplayer/v7/getting-started/sdks/ios/features","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/getting-started/01-sdks/03-ios/01-features.md","tags":[],"version":"v7","sidebarPosition":1,"frontMatter":{},"sidebar":"ios","previous":{"title":"Getting started guide for THEOplayer iOS/tvOS SDK 5.0","permalink":"/documentation/pr-preview/pr-162/theoplayer/v7/getting-started/sdks/ios/getting-started"},"next":{"title":"Migration from THEOplayer iOS and tvOS SDK 4.x to THEOplayer iOS/tvOS SDK 5.0+","permalink":"/documentation/pr-preview/pr-162/theoplayer/v7/getting-started/sdks/ios/migration-from-4.x"}}'),r=n("85893"),a=n("50065");let o={},s="THEOplayer iOS/tvOS 5.0 Feature Integrations",l={},d=[{value:"Modularization",id:"modularization",level:2},{value:"Importing additional integration modules",id:"importing-additional-integration-modules",level:2},{value:"Adding integrations",id:"adding-integrations",level:2},{value:"Available feature integrations",id:"available-feature-integrations",level:2}];function c(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"theoplayer-iostvos-50-feature-integrations",children:"THEOplayer iOS/tvOS 5.0 Feature Integrations"})}),"\n",(0,r.jsx)(t.h2,{id:"modularization",children:"Modularization"}),"\n",(0,r.jsx)(t.p,{children:"The THEOplayer iOS 5.0 SDK uses modularized features, which means there is a base SDK that can handle basic playback and additional feature integrations are provided as separate modules that can be added as desired.\nThis approach gives more flexibility and results in a reduced application size, since non-required parts are not included in the build of the application."}),"\n",(0,r.jsx)(t.p,{children:"For example, the core SDK is provided by:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"import THEOplayerSDK\n"})}),"\n",(0,r.jsx)(t.p,{children:"Meanwhile, additional features such as Google IMA and Google Cast are provided by:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"import THEOplayerGoogleIMAIntegration\nimport THEOplayerGoogleCastIntegration\n"})}),"\n",(0,r.jsx)(t.h2,{id:"importing-additional-integration-modules",children:"Importing additional integration modules"}),"\n",(0,r.jsx)(t.p,{children:"As shown in the previous section, importing additional integration modules can be done by simply adding the dependency to your swift source file."}),"\n",(0,r.jsxs)(t.p,{children:["For more information on how to fetch the dependencies to your Xcode project, ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-162/theoplayer/v7/getting-started/sdks/ios/getting-started",children:"please check the getting started guide."})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Important Note:"}),"\nIt is required to keep the THEOplayer core SDK and all the required feature modules on the ",(0,r.jsx)(t.strong,{children:"same"})," version number.\nFor example one should ",(0,r.jsx)(t.strong,{children:"not"})," import ",(0,r.jsx)(t.code,{children:"THEOplayerSDK-core~>5.6.0"})," and ",(0,r.jsx)(t.code,{children:"THEOplayer-Integration-GoogleIMA~>5.5.0"})," in the same project."]}),"\n",(0,r.jsx)(t.h2,{id:"adding-integrations",children:"Adding integrations"}),"\n",(0,r.jsx)(t.p,{children:"After importing the dependencies, it's time to create the integrations and connect them to THEOplayer."}),"\n",(0,r.jsxs)(t.p,{children:["Each module provides a ",(0,r.jsx)(t.strong,{children:"Factory"})," class that allows the creation of that specific integration.\nFor example, the Google IMA module provides ",(0,r.jsx)(t.code,{children:"GoogleImaIntegrationFactory"})," and the Google Cast module provides ",(0,r.jsx)(t.code,{children:"GoogleCastIntegrationFactory"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Additionally, the ",(0,r.jsx)(t.code,{children:"THEOplayer"})," class provides the ",(0,r.jsx)(t.code,{children:"addIntegration(_ integration: Integration)"})," API which allows adding the integration to the player."]}),"\n",(0,r.jsxs)(t.p,{children:["Connecting the feature integration with the ",(0,r.jsx)(t.code,{children:"THEOplayer"})," will make them available to be used.\nOtherwise, calling an API from an integration without adding it to the ",(0,r.jsx)(t.code,{children:"THEOplayer"})," will cause an error to be thrown."]}),"\n",(0,r.jsx)(t.h2,{id:"available-feature-integrations",children:"Available feature integrations"}),"\n",(0,r.jsx)(t.p,{children:"With THEOplayer iOS 5.0 SDK we currently support the following feature integrations:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Feature"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Dependency"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Release"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Documentation"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Google IMA"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"THEOplayerGoogleIMAIntegration"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"5.0.0"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.a,{href:"https://github.com/THEOplayer/theoplayer-sdk-ios/tree/master/THEOplayer-Integration-GoogleIMA",children:"documentation"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Chromecast"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"THEOplayerGoogleCastIntegration"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"5.0.0"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.a,{href:"https://github.com/THEOplayer/theoplayer-sdk-ios/tree/master/THEOplayer-Integration-GoogleCast",children:"documentation"})})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return o}});var i=n(67294);let r={},a=i.createContext(r);function o(e){let t=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);