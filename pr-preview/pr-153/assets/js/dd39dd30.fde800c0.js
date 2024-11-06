"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[91670],{25009:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var t=i(74848),o=i(28453);const r={sidebar_position:3},a="Override ad experience layout",s={id:"how-to-guides/override-layout",title:"Override ad experience layout",description:"THEOads is able to insert ad breaks into your content via the signaling server. The layout that is used while playing is",source:"@site/theoads/how-to-guides/override-layout.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/override-layout",permalink:"/documentation/pr-preview/pr-153/theoads/how-to-guides/override-layout",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoads/how-to-guides/override-layout.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"theoads",previous:{title:"Ad targeting parameters",permalink:"/documentation/pr-preview/pr-153/theoads/how-to-guides/ad-tag-parameters"},next:{title:"Scheduling breaks",permalink:"/documentation/pr-preview/pr-153/theoads/how-to-guides/scheduling-breaks"}},l={},d=[{value:"Override layout through the signaling service",id:"override-layout-through-the-signaling-service",level:2},{value:"Setting a new default layout",id:"setting-a-new-default-layout",level:3},{value:"Signaling an ad break through the API",id:"signaling-an-ad-break-through-the-api",level:3},{value:"Override the layout through the player",id:"override-the-layout-through-the-player",level:2},{value:"Web SDK",id:"web-sdk",level:3},{value:"React Native SDK",id:"react-native-sdk",level:3},{value:"Android SDK",id:"android-sdk",level:3},{value:"iOS SDK",id:"ios-sdk",level:3},{value:"More information",id:"more-information",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"override-ad-experience-layout",children:"Override ad experience layout"})}),"\n",(0,t.jsx)(n.p,{children:"THEOads is able to insert ad breaks into your content via the signaling server. The layout that is used while playing is\nusually determined by the signaling server. Currently, you can have the following layout modes :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"SINGLE"}),": Replaces the content with an advertisement."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"DOUBLE"}),": Allows content to continue playing side-by-side with an advertisement and its companion background."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"LSHAPE_AD"}),": Displays advertisements in a scaled window alongside a companion background."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["When your signaling service is created, the default layout should be defined. Look at our ",(0,t.jsx)(n.a,{href:"/theoads/api/signaling/create-monetized-stream/",children:"API references"})," for more information."]}),"\n",(0,t.jsxs)(n.p,{children:["The rest of this page will go over how to override this initial chosen layout in the ",(0,t.jsx)(n.a,{href:"#override-layout-through-the-signaling-service",children:"signaling service"})," itself,\nor override it on the ",(0,t.jsx)(n.a,{href:"#override-the-layout-through-the-player",children:"player side"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"override-layout-through-the-signaling-service",children:"Override layout through the signaling service"}),"\n",(0,t.jsx)(n.p,{children:"There are two ways to update the layout in the signaling service."}),"\n",(0,t.jsx)(n.h3,{id:"setting-a-new-default-layout",children:"Setting a new default layout"}),"\n",(0,t.jsxs)(n.p,{children:["It is possible to update the default layout value on the signaling service. This can be done by making an ",(0,t.jsx)(n.a,{href:"/theoads/api/signaling/update-monetized-stream-layout/",children:"UpdateMonetizedStreamLayout"}),"\nAPI request to the signaling service with the new layout.\nThe updated layout value will be the new default for all ad breaks."]}),"\n",(0,t.jsx)(n.h3,{id:"signaling-an-ad-break-through-the-api",children:"Signaling an ad break through the API"}),"\n",(0,t.jsxs)(n.p,{children:["When scheduling ad breaks through the signaling service API it is possible to choose the layout of the ad break.\nThe passed layout will be used, unless it is left ",(0,t.jsx)(n.code,{children:"undefined"}),". In this case the default layout is still used."]}),"\n",(0,t.jsxs)(n.p,{children:["For more information on the scheduling API refer to the following section: ",(0,t.jsx)(n.a,{href:"/theoads/how-to-guides/scheduling-breaks/#using-the-signaling-service-rest-api",children:"Scheduling breaks through the signaling service"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"override-the-layout-through-the-player",children:"Override the layout through the player"}),"\n",(0,t.jsxs)(n.p,{children:["You might not always want to show the default layout mode as provided by the signaling server. For example, if you are watching\ncontent on a mobile device, the ",(0,t.jsx)(n.code,{children:"DOUBLE"})," layout mode might not be the ideal user experience."]}),"\n",(0,t.jsxs)(n.p,{children:["Via the player, you can pass the following values to ",(0,t.jsx)(n.code,{children:"TheoAdDescription.overrideLayout"})," to override the layout:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"'single'"}),': This will override the default layout and plays all the ad breaks using the "single" layout mode.']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"'l-shape'"}),': This will override the default layout mode and plays all the ad breaks using the "l-shape" layout mode.']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"'double'"}),': This will override the default layout mode and plays all the ad breaks using the "double" layout mode.']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"'single-if-mobile'"}),': This will override the default layout mode to play all ad breaks using the "single" layout mode only when on mobile.']}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"web-sdk",children:"Web SDK"}),"\n",(0,t.jsxs)(n.p,{children:["For the Web SDK, you can override the default layout by setting ",(0,t.jsx)(n.code,{children:"overrideLayout"})," in the ",(0,t.jsx)(n.code,{children:"TheoAdDescription"})," object as followed:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"player.source = {\n  sources: {\n    src: 'PATH-TO-SIGNALING-SERVER/hls/MANIFEST-URI',\n    type: 'application/x-mpegurl',\n    hlsDateRange: true,\n  },\n  ads: [\n    {\n      integration: 'theoads',\n      networkCode: 'NETWORK-CODE',\n      customAssetKey: 'CUSTOM-ASSET-KEY',\n      overrideLayout: 'YOUR-DESIRED-LAYOUT',\n    },\n  ],\n};\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["There is a limitation that double box (",(0,t.jsx)(n.code,{children:"DOUBLE"}),") is not supported on older smartTV's. If you want to play THEOads on these devices, please override to another layout."]})}),"\n",(0,t.jsx)(n.h3,{id:"react-native-sdk",children:"React Native SDK"}),"\n",(0,t.jsxs)(n.p,{children:["For the React Native SDK, you can override the default layout by setting ",(0,t.jsx)(n.code,{children:"overrideLayout"})," in the ",(0,t.jsx)(n.code,{children:"TheoAdDescription"})," object as followed:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"player.source = {\n  sources: {\n    src: 'PATH-TO-SIGNALING-SERVER/hls/MANIFEST-URI',\n    type: 'application/x-mpegurl',\n    hlsDateRange: true,\n  },\n  ads: [\n    {\n      integration: 'theoads',\n      networkCode: 'NETWORK-CODE',\n      customAssetKey: 'CUSTOM-ASSET-KEY',\n      overrideLayout: 'YOUR-DESIRED-LAYOUT',\n    },\n  ],\n};\n"})}),"\n",(0,t.jsx)(n.h3,{id:"android-sdk",children:"Android SDK"}),"\n",(0,t.jsxs)(n.p,{children:["For the Android SDK, you can override the default layout by setting ",(0,t.jsx)(n.code,{children:"overrideLayout"})," in the ",(0,t.jsx)(n.code,{children:"TheoAdDescription"})," object as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'import com.theoplayer.android.api.ads.theoads.TheoAdsDescription\nimport com.theoplayer.android.api.source.SourceDescription\nimport com.theoplayer.android.api.source.SourceType\nimport com.theoplayer.android.api.source.TypedSource\n\ntheoPlayerView.player.source = SourceDescription.Builder(\n    TypedSource.Builder("PATH-TO-SIGNALING-SERVER/hls/MANIFEST-URI")\n        .type(SourceType.HLS)\n        .hlsDateRange(true)\n        .build()\n).ads(\n    TheoAdsDescription(\n        networkCode = "NETWORK-CODE",\n        customAssetKey = "CUSTOM-ASSET-KEY",\n        overrideLayout = "YOUR-DESIRED-LAYOUT"\n    )\n).build()\n'})}),"\n",(0,t.jsx)(n.h3,{id:"ios-sdk",children:"iOS SDK"}),"\n",(0,t.jsx)(n.p,{children:"This API is currently under development and will become available soon."}),"\n",(0,t.jsx)(n.h2,{id:"more-information",children:"More information"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.theoplayer.com/product/theoads/",children:"Enable Novel Ad Experiences"})}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>s});var t=i(96540);const o={},r=t.createContext(o);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);