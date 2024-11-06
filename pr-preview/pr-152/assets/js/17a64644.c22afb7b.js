"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4268],{46341:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var r=n(74848),a=n(28453),i=n(11470),s=n(19365);const o={sidebar_position:.5,sidebar_label:"React Native",sidebar_custom_props:{icon:"react"}},l="Getting started with THEOads on React Native",d={id:"getting-started/getting-started-react-native",title:"Getting started with THEOads on React Native",description:"This guide will get you started with THEOads in your THEOplayer React Native SDK: configure the license, update dependencies and set the source description.",source:"@site/theoads/getting-started/00-getting-started-react-native.mdx",sourceDirName:"getting-started",slug:"/getting-started/getting-started-react-native",permalink:"/documentation/pr-preview/pr-152/theoads/getting-started/getting-started-react-native",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoads/getting-started/00-getting-started-react-native.mdx",tags:[],version:"current",sidebarPosition:.5,frontMatter:{sidebar_position:.5,sidebar_label:"React Native",sidebar_custom_props:{icon:"react"}},sidebar:"theoads",previous:{title:"iOS",permalink:"/documentation/pr-preview/pr-152/theoads/getting-started/getting-started-ios"},next:{title:"How-to guides",permalink:"/documentation/pr-preview/pr-152/theoads/how-to-guides/"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Integration",id:"integration",level:2},{value:"Player configuration",id:"player-configuration",level:3},{value:"More information",id:"more-information",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"getting-started-with-theoads-on-react-native",children:"Getting started with THEOads on React Native"})}),"\n",(0,r.jsx)(t.p,{children:"This guide will get you started with THEOads in your THEOplayer React Native SDK: configure the license, update dependencies and set the source description."}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n","\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["You need to have a THEOplayer license which is compatible with THEOads.\nThis can be done through ",(0,r.jsx)(t.a,{href:"https://portal.theoplayer.com",children:"https://portal.theoplayer.com"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["You need a working ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-152/theoads/getting-started/getting-started-signaling-service",children:"THEOads signaling service"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Enable the THEOads integration based on the target platform:"}),"\n",(0,r.jsxs)(i.A,{queryString:"platform",children:[(0,r.jsxs)(s.A,{value:"android",label:"Android & Android TV",children:[(0,r.jsx)(t.p,{children:"The Android SDK is modular-based, so to enable THEOads, simply include the extension by setting this flag in your gradle.properties:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-groovy",children:"# Enable THEOplayer Extensions (default: disabled)\nTHEOplayer_extensionTHEOads = true\n"})})]}),(0,r.jsx)(s.A,{value:"ios",label:"iOS & tvOS",children:(0,r.jsx)(t.p,{children:'To enable THEOads you can add the "THEOADS" feature flag to react-native-theoplayer.json (or theoplayer-config.json)'})}),(0,r.jsxs)(s.A,{value:"web",label:"Web",children:[(0,r.jsx)(t.p,{children:"Add a dependency to a THEOads-enabled THEOplayer package:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"$ npm i theoplayer@npm:@theoplayer/theoads\n"})}),(0,r.jsx)(t.p,{children:"In addition, since THEOads integrates with Google DAI Pod Serving, it is required to load the Google DAI script on your page:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<script src="https://imasdk.googleapis.com/js/sdkloader/ima3_dai.js"><\/script>\n'})})]})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"integration",children:"Integration"}),"\n",(0,r.jsxs)(t.p,{children:["This guide assumes you know how to set up React Native with THEOplayer.\nFor more information regarding this check out the ",(0,r.jsx)(t.a,{href:"/theoplayer/getting-started/frameworks/react-native/getting-started/",children:"THEOplayer getting started"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"player-configuration",children:"Player configuration"}),"\n",(0,r.jsx)(t.p,{children:"To make use of the THEOads integration, only a specific source needs to be set:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"player.source = {\n  sources: {\n    src: 'PATH-TO-SIGNALING-SERVER/hls/MANIFEST-URI',\n    type: 'application/x-mpegurl',\n    hlsDateRange: true,\n  },\n  ads: [\n    {\n      integration: 'theoads',\n      networkCode: 'NETWORK-CODE',\n      customAssetKey: 'CUSTOM-ASSET-KEY',\n      backdropDoubleBox: 'PATH-TO-DOUBLE-BOX-BACKDROP-IMAGE', // Optional\n      backdropLShape: 'PATH-TO-L-SHAPE-BACKDROP-IMAGE', // Optional\n    },\n  ],\n};\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Notice that the ",(0,r.jsx)(t.code,{children:"src"})," is different as usual. For THEOads, a signaling server needs to be set up which acts as a proxy to parse the given manifest and insert the ad interstitials.\nMore information can be found ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-152/theoads/getting-started/getting-started-signaling-service",children:"here"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.code,{children:"hlsDateRange"})," flag needs to be set to ",(0,r.jsx)(t.code,{children:"true"})," as the ad markers are done using ",(0,r.jsx)(t.code,{children:"EXT-X-DATERANGE"})," tags."]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.code,{children:"ads"})," object needs to have its integration set to ",(0,r.jsx)(t.code,{children:"theoads"}),". Furthermore, the ",(0,r.jsx)(t.code,{children:"networkCode"})," and ",(0,r.jsx)(t.code,{children:"customAssetKey"})," needs to be set according to your configured Google account."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"more-information",children:"More information"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.theoplayer.com/product/theoads/",children:"What is THEOads?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.theoplayer.com/solutions/server-guided-ad-insertion-sgai/",children:"The Advantages of Server-Guided Ad Insertion"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.theoplayer.com/product/theoads/pricing/",children:"Flexible, Usage-Based Pricing"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.theoplayer.com/blog/server-guided-ad-insertion-sgai-revolutionizing-streaming-monetization/",children:"Is Server-Guided Ad-Insertion (SGAI) revolutionizing streaming monetization? (blog)"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var i=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>T});var r=n(96540),a=n(34164),i=n(23104),s=n(56347),o=n(205),l=n(57485),d=n(31682),c=n(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[d,u]=g({queryString:n,groupId:a}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),b=(()=>{const e=d??m;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),a=o[n].value;a!==r&&(d(t),s(a))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:c,...i,className:(0,a.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:i}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(j,{...t,...e})]})}function T(e){const t=(0,f.A)();return(0,v.jsx)(y,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);