"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["57962"],{54341:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>i,default:()=>h,assets:()=>d,toc:()=>l,frontMatter:()=>o});var a=JSON.parse('{"id":"how-to-guides/ad-tag-parameters","title":"Ad targeting parameters","description":"With the Google DAI Pod Serving, there is the possibility to pass a limited set of ad targeting parameters on your stream request to personalize your streams.","source":"@site/theoads/how-to-guides/ad-tag-parameters.md","sourceDirName":"how-to-guides","slug":"/how-to-guides/ad-tag-parameters","permalink":"/documentation/pr-preview/pr-158/theoads/how-to-guides/ad-tag-parameters","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoads/how-to-guides/ad-tag-parameters.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"theoads","previous":{"title":"Ad impression tracking","permalink":"/documentation/pr-preview/pr-158/theoads/how-to-guides/ad-impressions"},"next":{"title":"Override ad experience layout","permalink":"/documentation/pr-preview/pr-158/theoads/how-to-guides/override-layout"}}'),r=n("85893"),s=n("50065");let o={sidebar_position:2},i="Ad targeting parameters",d={},l=[{value:"Web SDK",id:"web-sdk",level:2},{value:"React Native SDK",id:"react-native-sdk",level:2},{value:"Android SDK",id:"android-sdk",level:2},{value:"iOS SDK",id:"ios-sdk",level:2},{value:"More information",id:"more-information",level:2}];function c(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"ad-targeting-parameters",children:"Ad targeting parameters"})}),"\n",(0,r.jsxs)(t.p,{children:["With the Google DAI Pod Serving, there is the possibility to pass ",(0,r.jsx)(t.a,{href:"https://support.google.com/admanager/answer/7320899",children:"a limited set of ad targeting parameters"})," on your stream request to personalize your streams.\nIn the player you can easily pass these parameters as key-value pairs via the ",(0,r.jsx)(t.code,{children:"TheoAdDescription"}),"."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["The player will automatically add the custom parameter ",(0,r.jsx)(t.code,{children:"theoads_slot"})," in the ",(0,r.jsx)(t.code,{children:"cust_params"})," when requesting an ad.\nThe value of this parameter will be determined by the layout mode."]})}),"\n",(0,r.jsx)(t.h2,{id:"web-sdk",children:"Web SDK"}),"\n",(0,r.jsxs)(t.p,{children:["For the Web SDK, you can set your desired ad tag parameters via ",(0,r.jsx)(t.code,{children:"adTagParameters"})," in the ",(0,r.jsx)(t.code,{children:"TheoAdDescription"})," as followed:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'player.source = {\n  sources: {\n    src: \'PATH-TO-SIGNALING-SERVER/hls/MANIFEST-URI\',\n    type: \'application/x-mpegurl\',\n    hlsDateRange: true,\n  },\n  ads: [\n    {\n      integration: \'theoads\',\n      networkCode: \'NETWORK-CODE\',\n      customAssetKey: \'CUSTOM-ASSET-KEY\',\n      adTagParameters: {\n        "YOUR-AD-TAG-PARAMETER-1" : "VALUE-1", // e.g. "cust_params" : "YOUR-CUSTOM-PARAMETERS",\n        "YOUR-AD-TAG-PARAMETER-2" : "VALUE-2",\n        ...\n      }\n    },\n  ],\n};\n'})}),"\n",(0,r.jsx)(t.h2,{id:"react-native-sdk",children:"React Native SDK"}),"\n",(0,r.jsxs)(t.p,{children:["For the React Native SDK, you can set your desired ad tag parameters via ",(0,r.jsx)(t.code,{children:"adTagParameters"})," in the ",(0,r.jsx)(t.code,{children:"TheoAdDescription"})," as followed:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'player.source = {\n  sources: {\n    src: \'PATH-TO-SIGNALING-SERVER/hls/MANIFEST-URI\',\n    type: \'application/x-mpegurl\',\n    hlsDateRange: true,\n  },\n  ads: [\n    {\n      integration: \'theoads\',\n      networkCode: \'NETWORK-CODE\',\n      customAssetKey: \'CUSTOM-ASSET-KEY\',\n      adTagParameters: {\n        "YOUR-AD-TAG-PARAMETER-1" : "VALUE-1", // e.g. "cust_params" : "YOUR-CUSTOM-PARAMETERS",\n        "YOUR-AD-TAG-PARAMETER-2" : "VALUE-2",\n        ...\n      }\n    },\n  ],\n};\n'})}),"\n",(0,r.jsx)(t.h2,{id:"android-sdk",children:"Android SDK"}),"\n",(0,r.jsxs)(t.p,{children:["For the Android SDK, you can set your desired ad tag parameters via ",(0,r.jsx)(t.code,{children:"adTagParameters"})," in the ",(0,r.jsx)(t.code,{children:"TheoAdDescription"})," as followed:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'theoPlayerView.player.source = SourceDescription.Builder(\n    TypedSource.Builder("PATH-TO-SIGNALING-SERVER/hls/MANIFEST-URI")\n        .type(SourceType.HLS)\n        .hlsDateRange(true)\n        .build()\n).ads(\n    TheoAdDescription(\n        networkCode = "NETWORK-CODE",\n        customAssetKey = "CUSTOM-ASSET-KEY",\n        adTagParameters = mapOf(\n            "YOUR-AD-TAG-PARAMETER-1" to "VALUE-1",\n            "YOUR-AD-TAG-PARAMETER-2" to "VALUE-2"\n        )\n    )\n)\n.build()\n'})}),"\n",(0,r.jsx)(t.h2,{id:"ios-sdk",children:"iOS SDK"}),"\n",(0,r.jsx)(t.p,{children:"This API is currently under development and will become available soon."}),"\n",(0,r.jsx)(t.h2,{id:"more-information",children:"More information"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://support.google.com/admanager/answer/7320899",children:"Supply targeting parameters to your stream"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return o}});var a=n(67294);let r={},s=a.createContext(r);function o(e){let t=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);