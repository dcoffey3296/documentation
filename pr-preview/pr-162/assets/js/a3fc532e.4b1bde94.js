"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["18298"],{83641:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>o,default:()=>h,assets:()=>s,toc:()=>l,frontMatter:()=>a});var i=JSON.parse('{"id":"getting-started/sdks/android/features","title":"Android Feature Integrations","description":"Modularization","source":"@site/theoplayer_versioned_docs/version-v7/getting-started/01-sdks/02-android/01-features.md","sourceDirName":"getting-started/01-sdks/02-android","slug":"/getting-started/sdks/android/features","permalink":"/documentation/pr-preview/pr-162/theoplayer/v7/getting-started/sdks/android/features","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/getting-started/01-sdks/02-android/01-features.md","tags":[],"version":"v7","sidebarPosition":1,"frontMatter":{},"sidebar":"android","previous":{"title":"Getting started with the Android UI","permalink":"/documentation/pr-preview/pr-162/theoplayer/v7/getting-started/sdks/android/getting-started-with-the-open-source-android-ui"},"next":{"title":"Migration from THEOplayer Android/AndroidTV/FireTV SDK 4.x to THEOplayer Android SDK 5.0","permalink":"/documentation/pr-preview/pr-162/theoplayer/v7/getting-started/sdks/android/migration-from-4.x"}}'),r=n("85893"),d=n("50065");let a={},o="Android Feature Integrations",s={},l=[{value:"Modularization",id:"modularization",level:2},{value:"Importing additional integration modules",id:"importing-additional-integration-modules",level:2},{value:"Adding integrations",id:"adding-integrations",level:2},{value:"Available feature integrations",id:"available-feature-integrations",level:2}];function c(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"android-feature-integrations",children:"Android Feature Integrations"})}),"\n",(0,r.jsx)(t.h2,{id:"modularization",children:"Modularization"}),"\n",(0,r.jsx)(t.p,{children:"The Android THEOplayer SDK uses modularized features, which means there is a base SDK that can handle basic playback and additional feature integrations are provided as separate modules that can be added as desired.\nThis approach gives more flexibility and results in a reduced application size, since non-required parts are not included in the build of the application."}),"\n",(0,r.jsx)(t.p,{children:"For example, the base SDK is provided by:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-groovy",children:"implementation 'com.theoplayer.theoplayer-sdk-android:core:+'\n"})}),"\n",(0,r.jsx)(t.p,{children:"Meanwhile, additional features such as Google IMA and Google Cast are provided by:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-groovy",children:"implementation 'com.theoplayer.theoplayer-sdk-android:integration-ads-ima:+'\nimplementation 'com.theoplayer.theoplayer-sdk-android:integration-cast:+'\n"})}),"\n",(0,r.jsx)(t.h2,{id:"importing-additional-integration-modules",children:"Importing additional integration modules"}),"\n",(0,r.jsxs)(t.p,{children:["As shown in the previous section, importing additional integration modules can be done by simply adding the dependency in the ",(0,r.jsx)(t.code,{children:"build.gradle"})," file of the module using THEOplayer."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Important Note:"}),"\nIt is required to keep the Android base SDK and all the required feature modules on the ",(0,r.jsx)(t.strong,{children:"same"})," version number.\nFor example one should ",(0,r.jsx)(t.strong,{children:"not"})," import ",(0,r.jsx)(t.code,{children:"core:3.6.0"})," and ",(0,r.jsx)(t.code,{children:"integration-cast:3.5.0"})," in the same project."]}),"\n",(0,r.jsx)(t.h2,{id:"adding-integrations",children:"Adding integrations"}),"\n",(0,r.jsx)(t.p,{children:"After importing the dependencies, it's time to create the integrations and connect them to THEOplayer."}),"\n",(0,r.jsxs)(t.p,{children:["Each module provides a ",(0,r.jsx)(t.strong,{children:"Factory"})," class that allows the creation of that specific integration.\nFor example, the Google IMA module provides ",(0,r.jsx)(t.code,{children:"GoogleImaIntegrationFactory"})," and the Google Cast module provides ",(0,r.jsx)(t.code,{children:"CastIntegrationFactory"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Additionally, the ",(0,r.jsx)(t.code,{children:"Player"})," class provides the ",(0,r.jsx)(t.code,{children:"addIntegration(Integration integration)"})," API which allows adding the integration to the player."]}),"\n",(0,r.jsxs)(t.p,{children:["Connecting the feature integration with the ",(0,r.jsx)(t.code,{children:"Player"})," will make them available to be used.\nOtherwise, calling an API from an integration without adding it to the ",(0,r.jsx)(t.code,{children:"Player"})," will cause an error to be thrown."]}),"\n",(0,r.jsx)(t.h2,{id:"available-feature-integrations",children:"Available feature integrations"}),"\n",(0,r.jsx)(t.p,{children:"With Android THEOplayer SDK we currently support the following feature integrations:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Feature"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Dependency"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Release"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Documentation"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Google IMA"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"integration-ads-ima:+"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"3.1.0+"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-162/theoplayer/v7/how-to-guides/ads/google-ima#android-sdk",children:"Google IMA Documentation"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Chromecast"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"integration-cast:+"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"3.4.0+"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-162/theoplayer/v7/how-to-guides/cast/chromecast/introduction#android-sdk",children:"Chromecast Documentation"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"AWS MediaTailor"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"integration-ads-mediatailor:+"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"4.0.0+"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-162/theoplayer/v7/how-to-guides/ads/mediatailor#android-sdk",children:"AWS MediaTailor Documentation"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Google DAI"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"integration-ads-dai:+"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"4.3.0+"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-162/theoplayer/v7/how-to-guides/ads/google-dai#android-sdk",children:"Google DAI Documentation"})})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return a}});var i=n(67294);let r={},d=i.createContext(r);function a(e){let t=i.useContext(d);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);