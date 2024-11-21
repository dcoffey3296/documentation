"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["49294"],{78738:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>d,default:()=>p,assets:()=>c,toc:()=>u,frontMatter:()=>l});var r=JSON.parse('{"id":"getting-started/getting-started-ios","title":"Getting started with THEOads on iOS","description":"This guide will get you started with THEOads in your THEOplayer iOS SDK: configure the license, update dependencies and set the source description.","source":"@site/theoads/getting-started/00-getting-started-ios.mdx","sourceDirName":"getting-started","slug":"/getting-started/getting-started-ios","permalink":"/documentation/pr-preview/pr-162/theoads/getting-started/getting-started-ios","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoads/getting-started/00-getting-started-ios.mdx","tags":[],"version":"current","sidebarPosition":0.4,"frontMatter":{"sidebar_position":0.4,"sidebar_label":"iOS","sidebar_custom_props":{"icon":"apple"}},"sidebar":"theoads","previous":{"title":"Android","permalink":"/documentation/pr-preview/pr-162/theoads/getting-started/getting-started-android"},"next":{"title":"React Native","permalink":"/documentation/pr-preview/pr-162/theoads/getting-started/getting-started-react-native"}}'),i=n("85893"),a=n("50065"),s=n("20398"),o=n("5525");let l={sidebar_position:.4,sidebar_label:"iOS",sidebar_custom_props:{icon:"apple"}},d="Getting started with THEOads on iOS",c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Integration",id:"integration",level:2},{value:"Create integration",id:"create-integration",level:3},{value:"Set a source with ads",id:"set-a-source-with-ads",level:3},{value:"More information",id:"more-information",level:2}];function h(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"getting-started-with-theoads-on-ios",children:"Getting started with THEOads on iOS"})}),"\n",(0,i.jsx)(t.p,{children:"This guide will get you started with THEOads in your THEOplayer iOS SDK: configure the license, update dependencies and set the source description."}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n","\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["You need to have a THEOplayer license which is compatible with THEOads.\nThis can be obtained through ",(0,i.jsx)(t.a,{href:"https://portal.theoplayer.com",children:"https://portal.theoplayer.com"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["You need a working ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-162/theoads/getting-started/getting-started-signaling-service",children:"THEOads signaling service"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Add the THEOplayer iOS SDK to your project by following our ",(0,i.jsx)(t.a,{href:"/theoplayer/getting-started/sdks/ios/getting-started",children:"Getting started"})," guide.\nMake sure to ",(0,i.jsx)(t.a,{href:"/theoplayer/getting-started/sdks/ios/getting-started/#adding-the-theoplayer-license",children:"set up a THEOads-compatible license"}),"\nin your app."]}),"\n",(0,i.jsxs)(t.li,{children:["Add the THEOads integration as a dependency in to your project:","\n",(0,i.jsxs)(s.Z,{queryString:"lang",children:[(0,i.jsx)(o.default,{value:"spm",label:"Swift Package Manager",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:'.package(url: "https://github.com/theoplayer/theoplayer-sdk-spm.git", from: "8.0.0")\n.product(name: "THEOplayerTheoAdsIntegration", package: "theoplayer-sdk-spm")\n'})})}),(0,i.jsx)(o.default,{value:"cocoapods",label:"Cocoapods",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"pod 'THEOplayer-Integration-TheoAds', '~> 8.0'\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"integration",children:"Integration"}),"\n",(0,i.jsx)(t.h3,{id:"create-integration",children:"Create integration"}),"\n",(0,i.jsxs)(t.p,{children:["To make use of the THEOads integration, create a ",(0,i.jsx)(t.code,{children:"TheoAdsIntegration"})," with a ",(0,i.jsx)(t.code,{children:"THEOplayer"})," instance:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:"import THEOplayerSDK\nimport THEOplayerTheoAdsIntegration\n\nlet player = THEOplayer()\nlet theoAdsIntegration = TheoAdsIntegration(player: player)\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Make sure you keep a reference to your ",(0,i.jsx)(t.code,{children:"TheoAdsIntegration"})," instance. Whenever you derefence it Theo Ads will stop working."]})}),"\n",(0,i.jsx)(t.h3,{id:"set-a-source-with-ads",children:"Set a source with ads"}),"\n",(0,i.jsxs)(t.p,{children:["Then, configure a source containing a ",(0,i.jsx)(t.code,{children:"TheoAdDescription"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:'player.source = .init(\n    source: TypedSource(\n        src: "PATH-TO-SIGNALING-SERVER/hls/MANIFEST-URI",\n        type: "application/x-mpegurl",\n        hlsDateRange: true\n    ),\n    ads: [\n        TheoAdDescription(\n            networkCode: "NETWORK-CODE",\n            customAssetKey: "CUSTOM-ASSET-KEY",\n            backdropDoubleBox: URL(string: "PATH-TO-DOUBLE-BOX-BACKDROP-IMAGE"),\n            backdropLShape: URL(string: "PATH-TO-L-SHAPE-BACKDROP-IMAGE")\n        )\n    ]\n)\n'})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"src"})," is different as usual. For THEOads, a signaling server needs to be set up which acts as a proxy to parse the given manifest and insert the ad interstitials. More information can be found ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-162/theoads/getting-started/getting-started-signaling-service",children:"here"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"hlsDateRange"})," flag needs to be set to ",(0,i.jsx)(t.code,{children:"true"})," as the ad markers are done using ",(0,i.jsx)(t.code,{children:"EXT-X-DATERANGE"})," tags."]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"ads"})," object needs to be a ",(0,i.jsx)(t.code,{children:"TheoAdDescription"}),". Furthermore, the ",(0,i.jsx)(t.code,{children:"networkCode"})," and ",(0,i.jsx)(t.code,{children:"customAssetKey"})," needs to be set according to your configured Google account."]}),"\n"]})}),"\n",(0,i.jsx)(t.h2,{id:"more-information",children:"More information"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.theoplayer.com/product/theoads/",children:"What is THEOads?"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.theoplayer.com/solutions/server-guided-ad-insertion-sgai/",children:"The Advantages of Server-Guided Ad Insertion"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.theoplayer.com/product/theoads/pricing/",children:"Flexible, Usage-Based Pricing"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.theoplayer.com/blog/server-guided-ad-insertion-sgai-revolutionizing-streaming-monetization/",children:"Is Server-Guided Ad-Insertion (SGAI) revolutionizing streaming monetization? (blog)"})}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},5525:function(e,t,n){n.r(t),n.d(t,{default:()=>s});var r=n("85893");n("67294");var i=n("67026");let a="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(a,s),hidden:n,children:t})}},20398:function(e,t,n){n.d(t,{Z:()=>g});var r=n("85893"),i=n("67294"),a=n("67026"),s=n("69599"),o=n("33057"),l=n("7227");let d="tabList__CuJ",c="tabItem_LNqP";function u(e){let{className:t,block:n,selectedValue:i,selectValue:o,tabValues:l}=e,d=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),h=e=>{let t=e.currentTarget,n=l[d.indexOf(t)].value;n!==i&&(u(t),o(n))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{let n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1]}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map(e=>{let{value:t,label:n,attributes:s}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>d.push(e),onKeyDown:p,onClick:h,...s,className:(0,a.Z)("tabs__item",c,s?.className,{"tabs__item--active":i===t}),children:n??t},t)})})}function h(e){let{lazy:t,children:n,selectedValue:s}=e,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=o.find(e=>e.props.value===s);return e?(0,i.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:o.map((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==s}))})}function p(e){let t=(0,o.Y)(e);return(0,r.jsxs)("div",{className:(0,a.Z)("tabs-container",d),children:[(0,r.jsx)(u,{...t,...e}),(0,r.jsx)(h,{...t,...e})]})}function g(e){let t=(0,l.default)();return(0,r.jsx)(p,{...e,children:(0,o.h)(e.children)},String(t))}},33057:function(e,t,n){n.d(t,{Y:function(){return u},h:function(){return d}});var r=n(67294),i=n(16550),a=n(32e3),s=n(4520),o=n(38341),l=n(76009);function d(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function c(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}function u(e){let{defaultValue:t,queryString:n=!1,groupId:u}=e,h=function(e){let{values:t,children:n}=e;return(0,r.useMemo)(()=>{let e=t??d(n).map(e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}});return!function(e){let t=(0,o.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[p,g]=(0,r.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let r=n.find(e=>e.default)??n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:h})),[f,m]=function(e){let{queryString:t=!1,groupId:n}=e,a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n}),l=(0,s._X)(o);return[l,(0,r.useCallback)(e=>{if(!o)return;let t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})},[o,a])]}({queryString:n,groupId:u}),[x,j]=function(e){var t;let{groupId:n}=e;let i=(t=n)?`docusaurus.tab.${t}`:null,[a,s]=(0,l.Nk)(i);return[a,(0,r.useCallback)(e=>{if(!!i)s.set(e)},[i,s])]}({groupId:u}),v=(()=>{let e=f??x;return c({value:e,tabValues:h})?e:null})();return(0,a.Z)(()=>{v&&g(v)},[v]),{selectedValue:p,selectValue:(0,r.useCallback)(e=>{if(!c({value:e,tabValues:h}))throw Error(`Can't select invalid tab value=${e}`);g(e),m(e),j(e)},[m,j,h]),tabValues:h}}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return s}});var r=n(67294);let i={},a=r.createContext(i);function s(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);