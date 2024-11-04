"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[84827],{25310:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=t(74848),a=t(28453);const r={slug:"/connectors/android/conviva/getting-started",title:"Getting started",description:"Set up your connector in just a few minutes!",sidebar_custom_props:{icon:"\ud83d\ude80 "}},i="THEOplayer Android SDK Conviva Connector",s={id:"external/android-connector/connectors/analytics/conviva/README",title:"Getting started",description:"Set up your connector in just a few minutes!",source:"@site/theoplayer_versioned_docs/version-v7/external/android-connector/connectors/analytics/conviva/README.md",sourceDirName:"external/android-connector/connectors/analytics/conviva",slug:"/connectors/android/conviva/getting-started",permalink:"/documentation/pr-preview/pr-151/theoplayer/v7/connectors/android/conviva/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/android-connector/blob/-/connectors/analytics/conviva/README.md",tags:[],version:"v7",frontMatter:{slug:"/connectors/android/conviva/getting-started",title:"Getting started",description:"Set up your connector in just a few minutes!",sidebar_custom_props:{icon:"\ud83d\ude80 "}},sidebar:"android",previous:{title:"Conviva",permalink:"/documentation/pr-preview/pr-151/theoplayer/v7/connectors/android/conviva"},next:{title:"Nielsen",permalink:"/documentation/pr-preview/pr-151/theoplayer/v7/connectors/android/nielsen"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Setting up the Conviva Connector",id:"setting-up-the-conviva-connector",level:3},{value:"Setting asset metadata",id:"setting-asset-metadata",level:3},{value:"Starting a new session on program boundaries",id:"starting-a-new-session-on-program-boundaries",level:3},{value:"Destroying / Cleaning up",id:"destroying--cleaning-up",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"theoplayer-android-sdk-conviva-connector",children:"THEOplayer Android SDK Conviva Connector"})}),"\n",(0,o.jsx)(n.p,{children:"The Conviva connector provides a Conviva integration for THEOplayer Android SDK."}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.p,{children:["The THEOplayer Android SDK Conviva Connector requires the application to import the THEOplayer Android SDK since the connector relies on its public APIs.\nFor more details, check out our ",(0,o.jsx)(n.a,{href:"https://www.theoplayer.com/docs/theoplayer/getting-started/sdks/android/getting-started/",children:"Getting started on Android"})," guide."]}),"\n",(0,o.jsxs)(n.p,{children:["For setting up a valid Conviva session, you must have access to a ",(0,o.jsx)(n.a,{href:"https://pulse.conviva.com/",children:"Conviva developer account"})," with access to a debug or production key."]}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(n.p,{children:["After setting up the THEOplayer Android SDK, in your ",(0,o.jsx)(n.strong,{children:"module"})," level ",(0,o.jsx)(n.code,{children:"build.gradle"})," file add the THEOplayer Android SDK Conviva Connector and the Conviva SDK:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"implementation 'com.theoplayer.android-connector:conviva:+'\nimplementation 'com.conviva.sdk:conviva-core-sdk:4.0.33'\n"})}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.h3,{id:"setting-up-the-conviva-connector",children:"Setting up the Conviva Connector"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'val theoplayerView: THEOplayerView\n\nprivate fun setupConviva() {\n    val customerKey = "your_conviva_customer_key"\n    val gatewayUrl = "your_conviva_debug_gateway_url"\n    \n    val metadata = hashMapOf(\n        "Conviva.applicationName" to "THEOplayer",\n        "Conviva.viewerId" to "viewerId"\n    )\n    val config = ConvivaConfiguration(\n        customerKey,\n        true, // debug\n        gatewayUrl,\n    )\n    convivaConnector = ConvivaConnector(applicationContext, theoplayerView.player, metadata, config)\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"setting-asset-metadata",children:"Setting asset metadata"}),"\n",(0,o.jsx)(n.p,{children:"Most media related properties, such as its streamURL, duration or whether it is a live or vod\nstream, are determined and passed by the connector itself when setting a new source."}),"\n",(0,o.jsxs)(n.p,{children:["Whenever a new source is set on the player, the metadata ",(0,o.jsx)(n.code,{children:"title"})," property is used to pass an asset name."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'theoplayerView.player.source = \n    SourceDescription.Builder(\n        TypedSource.Builder("https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8").build()\n    )\n    .metadata(MetadataDescription(mapOf("title" to "Big Buck Bunny")))\n    .build()\n'})}),"\n",(0,o.jsx)(n.p,{children:"Alternatively, the asset name can be passed to the connector at any time along with additional metadata\nthrough an open key-value map, for example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'theoplayerView.player.source = sourceDescription\nconvivaConnector?.setContentInfo(hashMapOf(\n    "Conviva.assetName" to "Big Buck Bunny",\n    "customTag1" to "customValue1",\n    "customTag2" to "customValue2"\n))\n'})}),"\n",(0,o.jsx)(n.h3,{id:"starting-a-new-session-on-program-boundaries",children:"Starting a new session on program boundaries"}),"\n",(0,o.jsx)(n.p,{children:"By default, new sessions are only started on play-out of a new source, or when an ad break starts.\nDuring a live stream it is possible to manually mark the start of a new session,\nfor example when a new program starts."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'convivaConnector?.stopAndStartNewSession(hashMapOf(\n    "Conviva.assetName" to "New program",\n    "customTag1" to "customValue1",\n    "customTag2" to "customValue2"\n))\n'})}),"\n",(0,o.jsx)(n.h3,{id:"destroying--cleaning-up",children:"Destroying / Cleaning up"}),"\n",(0,o.jsx)(n.p,{children:"To release listeners and resources, call destroy whenever the Conviva Connector is no longer needed."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"convivaConnector?.destroy()\n"})}),"\n",(0,o.jsx)(n.p,{children:"Note:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"After destroying a Conviva Connector instance, it can no longer be used. If needed, a new instance should be created."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var o=t(96540);const a={},r=o.createContext(a);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);