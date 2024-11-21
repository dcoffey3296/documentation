"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["28148"],{67553:function(e,t,i){i.r(t),i.d(t,{metadata:()=>n,contentTitle:()=>o,default:()=>u,assets:()=>s,toc:()=>c,frontMatter:()=>d});var n=JSON.parse('{"id":"how-to-guides/android/millicast/getting-started","title":"Getting started with Millicast on Android","description":"Usage","source":"@site/theoplayer/how-to-guides/android/millicast/getting-started.mdx","sourceDirName":"how-to-guides/android/millicast","slug":"/how-to-guides/android/millicast/getting-started","permalink":"/documentation/pr-preview/pr-162/theoplayer/how-to-guides/android/millicast/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/android/millicast/getting-started.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"android","previous":{"title":"Getting started with Media3 on Android","permalink":"/documentation/pr-preview/pr-162/theoplayer/how-to-guides/android/media3/getting-started"},"next":{"title":"Android Connectors","permalink":"/documentation/pr-preview/pr-162/theoplayer/connectors/android/"}}'),r=i("85893"),a=i("50065"),l=i("62495");let d={},o="Getting started with Millicast on Android",s={},c=[...l.d$,{value:"Usage",id:"usage",level:2},{value:"Add the <code>integration-millicast</code> dependency",id:"add-the-integration-millicast-dependency",level:3},{value:"Add the Millicast integration to the player",id:"add-the-millicast-integration-to-the-player",level:3},{value:"Add a <code>MillicastSource</code>",id:"add-a-millicastsource",level:3},{value:"More information",id:"more-information",level:2}];function h(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"getting-started-with-millicast-on-android",children:"Getting started with Millicast on Android"})}),"\n","\n",(0,r.jsx)(l.ZP,{}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Follow ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-162/theoplayer/getting-started/sdks/android/getting-started",children:"our Getting Started guide"}),"\nto set up THEOplayer in your Android app."]}),"\n",(0,r.jsxs)(t.li,{children:["Add the ",(0,r.jsx)(t.code,{children:"integration-millicast"})," dependency to your module's ",(0,r.jsx)(t.code,{children:"build.gradle"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Add the ",(0,r.jsx)(t.code,{children:"MillicastIntegration"})," to the player."]}),"\n",(0,r.jsxs)(t.li,{children:["Add a ",(0,r.jsx)(t.code,{children:"MillicastSource"})," to your player's source."]}),"\n"]}),"\n",(0,r.jsxs)(t.h3,{id:"add-the-integration-millicast-dependency",children:["Add the ",(0,r.jsx)(t.code,{children:"integration-millicast"})," dependency"]}),"\n",(0,r.jsxs)(t.p,{children:["Add the Millicast integration along with the ",(0,r.jsx)(t.a,{href:"https://docs.dolby.io/streaming-apis/docs/android",children:"Millicast SDK"}),"\nto your module ",(0,r.jsx)(t.code,{children:"build.gradle"})," file, as demonstrated below:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-groovy",children:"dependencies {\n    // ...\n    implementation 'com.theoplayer.theoplayer-sdk-android:core:+'\n    implementation 'com.theoplayer.theoplayer-sdk-android:integration-millicast:+'\n    implementation \"com.millicast:millicast-sdk-android:2.0.0\"\n    // ...\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"add-the-millicast-integration-to-the-player",children:"Add the Millicast integration to the player"}),"\n",(0,r.jsxs)(t.p,{children:["Create and add the ",(0,r.jsx)(t.code,{children:"MillicastIntegration"})," to your ",(0,r.jsx)(t.code,{children:"THEOplayerView"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"val millicastIntegration = MillicastIntegrationFactory.createMillicastIntegration()\ntheoplayerView.player.addIntegration(millicastIntegration)\n"})}),"\n",(0,r.jsxs)(t.h3,{id:"add-a-millicastsource",children:["Add a ",(0,r.jsx)(t.code,{children:"MillicastSource"})]}),"\n",(0,r.jsxs)(t.p,{children:["After setting up a ",(0,r.jsx)(t.code,{children:"THEOplayerView"})," in your app's activity, set its source to a ",(0,r.jsx)(t.code,{children:"SourceDescription"})," containing a ",(0,r.jsx)(t.code,{children:"MillicastSource"}),".\nYou'll need a Millicast account ID and stream name to create a ",(0,r.jsx)(t.code,{children:"Credential"})," object and identify your Millicast stream:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'import com.millicast.subscribers.Credential\nimport com.theoplayer.android.api.millicast.MillicastSource\n\ntheoplayerView.player.source = SourceDescription.Builder(\n    MillicastSource(\n        credential = Credential(\n            streamName = "multiview",\n            accountId = "k9Mwad",\n            apiUrl = "https://director.millicast.com/api/director/subscribe"\n        )\n    )\n).build()\n'})}),"\n",(0,r.jsx)(t.h2,{id:"more-information",children:"More information"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/millicast/package-summary.html",children:"API references"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://docs.dolby.io/streaming-apis/docs/",children:"Millicast documentation"})}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},62495:function(e,t,i){i.d(t,{ZP:function(){return d},d$:function(){return a}});var n=i(85893),r=i(50065);let a=[];function l(e){let t={a:"a",p:"p",...(0,r.a)(),...e.components};return(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://dolby.io/products/real-time-streaming/",children:"Dolby Millicast"})," delivers broadcast quality live streaming\nat sub-second latency, enabling interactivity and fan engagement.\nUsing the THEOplayer Millicast integration, you can play your Millicast streams directly through THEOplayer."]})}function d(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return d},a:function(){return l}});var n=i(67294);let r={},a=n.createContext(r);function l(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);