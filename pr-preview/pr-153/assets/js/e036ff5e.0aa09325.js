"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[42061],{42018:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var n=t(74848),a=t(28453),o=t(88466);const r={},l="Getting started with Millicast on Android",d={id:"how-to-guides/android/millicast/getting-started",title:"Getting started with Millicast on Android",description:"Usage",source:"@site/theoplayer/how-to-guides/android/millicast/getting-started.mdx",sourceDirName:"how-to-guides/android/millicast",slug:"/how-to-guides/android/millicast/getting-started",permalink:"/documentation/pr-preview/pr-153/theoplayer/how-to-guides/android/millicast/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/android/millicast/getting-started.mdx",tags:[],version:"current",frontMatter:{},sidebar:"android",previous:{title:"Getting started with Media3 on Android",permalink:"/documentation/pr-preview/pr-153/theoplayer/how-to-guides/android/media3/getting-started"},next:{title:"Android Connectors",permalink:"/documentation/pr-preview/pr-153/theoplayer/connectors/android/"}},s={},c=[...o.RM,{value:"Usage",id:"usage",level:2},{value:"Add the <code>integration-millicast</code> dependency",id:"add-the-integration-millicast-dependency",level:3},{value:"Add the Millicast integration to the player",id:"add-the-millicast-integration-to-the-player",level:3},{value:"Add a <code>MillicastSource</code>",id:"add-a-millicastsource",level:3},{value:"Add configuration",id:"add-configuration",level:3},{value:"More information",id:"more-information",level:2}];function h(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"getting-started-with-millicast-on-android",children:"Getting started with Millicast on Android"})}),"\n","\n",(0,n.jsx)(o.Ay,{}),"\n",(0,n.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["Follow ",(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-153/theoplayer/getting-started/sdks/android/getting-started",children:"our Getting Started guide"}),"\nto set up THEOplayer in your Android app."]}),"\n",(0,n.jsxs)(i.li,{children:["Add the ",(0,n.jsx)(i.code,{children:"integration-millicast"})," dependency to your module's ",(0,n.jsx)(i.code,{children:"build.gradle"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["Add the ",(0,n.jsx)(i.code,{children:"MillicastIntegration"})," to the player."]}),"\n",(0,n.jsxs)(i.li,{children:["Add a ",(0,n.jsx)(i.code,{children:"MillicastSource"})," to your player's source."]}),"\n"]}),"\n",(0,n.jsxs)(i.h3,{id:"add-the-integration-millicast-dependency",children:["Add the ",(0,n.jsx)(i.code,{children:"integration-millicast"})," dependency"]}),"\n",(0,n.jsxs)(i.p,{children:["Add the Millicast integration along with the ",(0,n.jsx)(i.a,{href:"https://docs.dolby.io/streaming-apis/docs/android",children:"Millicast SDK"}),"\nto your module ",(0,n.jsx)(i.code,{children:"build.gradle"})," file, as demonstrated below:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-groovy",children:"dependencies {\n    // ...\n    implementation 'com.theoplayer.theoplayer-sdk-android:core:+'\n    implementation 'com.theoplayer.theoplayer-sdk-android:integration-millicast:+'\n    implementation \"com.millicast:millicast-sdk-android:2.0.0\"\n    // ...\n}\n"})}),"\n",(0,n.jsx)(i.h3,{id:"add-the-millicast-integration-to-the-player",children:"Add the Millicast integration to the player"}),"\n",(0,n.jsxs)(i.p,{children:["Create and add the ",(0,n.jsx)(i.code,{children:"MillicastIntegration"})," to your ",(0,n.jsx)(i.code,{children:"THEOplayerView"}),":"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-kotlin",children:"val millicastIntegration = MillicastIntegrationFactory.createMillicastIntegration()\ntheoplayerView.player.addIntegration(millicastIntegration)\n"})}),"\n",(0,n.jsxs)(i.h3,{id:"add-a-millicastsource",children:["Add a ",(0,n.jsx)(i.code,{children:"MillicastSource"})]}),"\n",(0,n.jsxs)(i.p,{children:["After setting up a ",(0,n.jsx)(i.code,{children:"THEOplayerView"})," in your app's activity, set its source to a ",(0,n.jsx)(i.code,{children:"SourceDescription"})," containing a ",(0,n.jsx)(i.code,{children:"MillicastSource"}),".\nYou'll need a Millicast account ID and stream name to create a ",(0,n.jsx)(i.code,{children:"Credential"})," object and identify your Millicast stream:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-kotlin",children:'import com.millicast.subscribers.Credential\nimport com.theoplayer.android.api.millicast.MillicastSource\n\ntheoplayerView.player.source = SourceDescription.Builder(\n    MillicastSource(\n        credential = Credential(\n            streamName = "multiview",\n            accountId = "k9Mwad",\n            apiUrl = "https://director.millicast.com/api/director/subscribe"\n        )\n    )\n).build()\n'})}),"\n",(0,n.jsx)(i.h3,{id:"add-configuration",children:"Add configuration"}),"\n",(0,n.jsxs)(i.p,{children:["Optionally, you can provide additional configuration to the source, specific for working with Millicast streams.\nTo configure these settings, add an ",(0,n.jsx)(i.code,{children:"Option"})," object as a second parameter to the source object and specify the options."]}),"\n",(0,n.jsxs)(i.p,{children:["In the example below, the configuration is used to disable any audio from the Millicast stream.\nFor an exhaustive list of these options, visit the ",(0,n.jsx)(i.a,{href:"https://millicast.github.io/doc/latest/android/android/com.millicast.subscribers/-option/index.html",children:"documentation"}),"."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-kotlin",children:"import com.millicast.subscribers.Credential\nimport com.millicast.subscribers.Option\nimport com.theoplayer.android.api.millicast.MillicastSource\n\n...\n    MillicastSource(\n        credential = Credential(\n            ...\n        ),\n        option = Option(\n            disableAudio = true\n        )\n    )\n...\n"})}),"\n",(0,n.jsx)(i.h2,{id:"more-information",children:"More information"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/millicast/package-summary.html",children:"API references"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://docs.dolby.io/streaming-apis/docs/",children:"Millicast documentation"})}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},88466:(e,i,t)=>{t.d(i,{Ay:()=>l,RM:()=>o});var n=t(74848),a=t(28453);const o=[];function r(e){const i={a:"a",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://dolby.io/products/real-time-streaming/",children:"Dolby Millicast"})," delivers broadcast quality live streaming\nat sub-second latency, enabling interactivity and fan engagement.\nUsing the THEOplayer Millicast integration, you can play your Millicast streams directly through THEOplayer."]})}function l(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>l});var n=t(96540);const a={},o=n.createContext(a);function r(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);