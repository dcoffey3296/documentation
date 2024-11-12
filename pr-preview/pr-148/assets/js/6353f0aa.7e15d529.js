"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36914],{94321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(74848),a=n(28453),i=n(11470),o=n(19365);const s={sidebar_position:.3,sidebar_label:"Android",sidebar_custom_props:{icon:"android"}},d="Getting started with THEOads on Android",l={id:"getting-started/getting-started-android",title:"Getting started with THEOads on Android",description:"This guide will get you started to integrate THEOads in your THEOplayer Android SDK: configure the license, update dependencies and set the source description.",source:"@site/theoads/getting-started/00-getting-started-android.mdx",sourceDirName:"getting-started",slug:"/getting-started/getting-started-android",permalink:"/documentation/pr-preview/pr-148/theoads/getting-started/getting-started-android",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoads/getting-started/00-getting-started-android.mdx",tags:[],version:"current",sidebarPosition:.3,frontMatter:{sidebar_position:.3,sidebar_label:"Android",sidebar_custom_props:{icon:"android"}},sidebar:"theoads",previous:{title:"Web",permalink:"/documentation/pr-preview/pr-148/theoads/getting-started/getting-started-web"},next:{title:"iOS",permalink:"/documentation/pr-preview/pr-148/theoads/getting-started/getting-started-ios"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Integration",id:"integration",level:2},{value:"Integrating with Open Video UI",id:"integrating-with-open-video-ui",level:2},{value:"More information",id:"more-information",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"getting-started-with-theoads-on-android",children:"Getting started with THEOads on Android"})}),"\n",(0,r.jsx)(t.p,{children:"This guide will get you started to integrate THEOads in your THEOplayer Android SDK: configure the license, update dependencies and set the source description."}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n","\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["You need to have a THEOplayer license which is compatible with THEOads.\nThis can be done through ",(0,r.jsx)(t.a,{href:"https://portal.theoplayer.com",children:"https://portal.theoplayer.com"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["You need a working ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-148/theoads/getting-started/getting-started-signaling-service",children:"THEOads signaling service"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Add the THEOplayer Android SDK to your project by following our ",(0,r.jsx)(t.a,{href:"/theoplayer/getting-started/sdks/android/getting-started",children:"Getting started"})," guide.\nMake sure to ",(0,r.jsx)(t.a,{href:"/theoplayer/getting-started/sdks/android/getting-started/#setting-up-the-license",children:"set up a THEOads-compatible license"}),"\nin your app."]}),"\n",(0,r.jsxs)(t.li,{children:["Add the THEOads integration as a dependency in your module-level ",(0,r.jsx)(t.code,{children:"build.gradle"})," file:","\n",(0,r.jsxs)(i.A,{queryString:"lang",children:[(0,r.jsx)(o.A,{value:"groovy",label:"Groovy",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-groovy",children:'dependencies {\n    implementation "com.theoplayer.theoplayer-sdk-android:core:8.+"\n    // highlight-next-line\n    implementation "com.theoplayer.theoplayer-sdk-android:integration-theoads:8.+"\n}\n'})})}),(0,r.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'dependencies {\n    implementation("com.theoplayer.theoplayer-sdk-android:core:8.+")\n    // highlight-next-line\n    implementation("com.theoplayer.theoplayer-sdk-android:integration-theoads:8.+")\n}\n'})})})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"integration",children:"Integration"}),"\n",(0,r.jsxs)(t.p,{children:["To make use of the THEOads integration, create and add the ",(0,r.jsx)(t.code,{children:"TheoAdsIntegration"})," to your ",(0,r.jsx)(t.code,{children:"THEOplayerView"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"import com.theoplayer.android.api.THEOplayerView\nimport com.theoplayer.android.api.ads.theoads.TheoAdsIntegration\nimport com.theoplayer.android.api.ads.theoads.TheoAdsIntegrationFactory.createTheoAdsIntegration\n\nclass MyActivity : Activity() {\n    private lateinit var theoPlayerView: THEOplayerView\n    private lateinit var theoAdsIntegration: TheoAdsIntegration\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContentView(R.layout.activity_main)\n\n        theoPlayerView = findViewById<THEOplayerView>(R.id.theoplayer)\n\n        theoAdsIntegration = createTheoAdsIntegration(theoPlayerView)\n        theoPlayerView.player.addIntegration(theoAdsIntegration)\n    }\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Then, configure a source containing a ",(0,r.jsx)(t.code,{children:"TheoAdDescription"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'import com.theoplayer.android.api.ads.theoads.TheoAdDescription\nimport com.theoplayer.android.api.source.SourceDescription\nimport com.theoplayer.android.api.source.SourceType\nimport com.theoplayer.android.api.source.TypedSource\n\ntheoPlayerView.player.source = SourceDescription.Builder(\n    TypedSource.Builder("PATH-TO-SIGNALING-SERVER/hls/MANIFEST-URI")\n        .type(SourceType.HLS)\n        .hlsDateRange(true)\n        .build()\n).ads(\n    TheoAdDescription(\n        networkCode = "NETWORK-CODE",\n        customAssetKey = "CUSTOM-ASSET-KEY",\n        backdropDoubleBox = "PATH-TO-DOUBLE-BOX-BACKDROP-IMAGE", // Optional\n        backdropLShape = "PATH-TO-L-SHAPE-BACKDROP-IMAGE", // Optional\n    )\n).build()\n'})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Notice that the ",(0,r.jsx)(t.code,{children:"src"})," is different as usual. For THEOads, a signaling server needs to be set up which acts as a proxy to parse the given manifest and insert the ad interstitials.\nMore information can be found ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-148/theoads/getting-started/getting-started-signaling-service",children:"here"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.code,{children:"hlsDateRange"})," flag needs to be set to ",(0,r.jsx)(t.code,{children:"true"})," as the ad markers are done using ",(0,r.jsx)(t.code,{children:"EXT-X-DATERANGE"})," tags."]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.code,{children:"ads"})," object needs to be a ",(0,r.jsx)(t.code,{children:"TheoAdDescription"}),". Furthermore, the ",(0,r.jsx)(t.code,{children:"networkCode"})," and ",(0,r.jsx)(t.code,{children:"customAssetKey"})," needs to be set according to your configured Google account."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"integrating-with-open-video-ui",children:"Integrating with Open Video UI"}),"\n",(0,r.jsxs)(t.p,{children:["When using the ",(0,r.jsx)(t.a,{href:"/open-video-ui/android/",children:"Open Video UI for Android"}),", you need to create and add\nthe ",(0,r.jsx)(t.code,{children:"TheoAdsIntegration"})," before creating your ",(0,r.jsx)(t.code,{children:"DefaultUI"})," or ",(0,r.jsx)(t.code,{children:"UIController"}),". You can then create a\nTHEOads-enabled source and set it as ",(0,r.jsx)(t.code,{children:"player.source"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'import androidx.activity.compose.setContent\nimport com.theoplayer.android.ui.rememberPlayer\n\nsetContent {\n    val player = rememberPlayer()\n    LaunchedEffect(player) {\n        player.theoplayerView?.let { theoPlayerView ->\n            val theoAdsIntegration = createTheoAdsIntegration(theoPlayerView)\n            theoPlayerView.player.addIntegration(theoAdsIntegration)\n        }\n\n        player.source = SourceDescription.Builder(\n            TypedSource.Builder("PATH-TO-SIGNALING-SERVER/hls/MANIFEST-URI")\n                .type(SourceType.HLS)\n                .hlsDateRange(true)\n                .build()\n        ).ads(\n            TheoAdDescription(\n                networkCode = "NETWORK-CODE",\n                customAssetKey = "CUSTOM-ASSET-KEY"\n            )\n        ).build()\n    }\n\n    DefaultUI(\n        player = player\n    )\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"more-information",children:"More information"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/ads/theoads/package-summary.html",children:"API references"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.theoplayer.com/product/theoads/",children:"What is THEOads?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.theoplayer.com/solutions/server-guided-ad-insertion-sgai/",children:"The Advantages of Server-Guided Ad Insertion"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.theoplayer.com/product/theoads/pricing/",children:"Flexible, Usage-Based Pricing"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.theoplayer.com/blog/server-guided-ad-insertion-sgai-revolutionizing-streaming-monetization/",children:"Is Server-Guided Ad-Insertion (SGAI) revolutionizing streaming monetization? (blog)"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var i=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>j});var r=n(96540),a=n(34164),i=n(23104),o=n(56347),s=n(205),d=n(57485),l=n(31682),c=n(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,l.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=h(e),[o,d]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[l,u]=g({queryString:n,groupId:a}),[m,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),f=(()=>{const e=l??m;return p({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{f&&d(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),y(e)}),[u,y,i]),tabValues:i}}var y=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),c=e=>{const t=e.currentTarget,n=d.indexOf(t),a=s[n].value;a!==r&&(l(t),o(a))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>d.push(e),onKeyDown:u,onClick:c,...i,className:(0,a.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:i}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function T(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,b.jsx)(v,{...t,...e}),(0,b.jsx)(x,{...t,...e})]})}function j(e){const t=(0,y.A)();return(0,b.jsx)(T,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var r=n(96540);const a={},i=r.createContext(a);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);