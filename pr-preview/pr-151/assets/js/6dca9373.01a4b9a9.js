"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[11087],{55359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(74848),s=n(28453);const i={},l="How to play a Clear-Key-protected stream in THEOplayer?",o={id:"how-to-guides/drm/how-to-play-clear-key-protected-stream",title:"How to play a Clear-Key-protected stream in THEOplayer?",description:"This article provides a simple example of how to use Clear Key with THEOplayer.",source:"@site/theoplayer/how-to-guides/04-drm/14-how-to-play-clear-key-protected-stream.md",sourceDirName:"how-to-guides/04-drm",slug:"/how-to-guides/drm/how-to-play-clear-key-protected-stream",permalink:"/documentation/pr-preview/pr-151/theoplayer/how-to-guides/drm/how-to-play-clear-key-protected-stream",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/04-drm/14-how-to-play-clear-key-protected-stream.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{},sidebar:"roku",previous:{title:"Xstream",permalink:"/documentation/pr-preview/pr-151/theoplayer/how-to-guides/drm/xstream"},next:{title:"PallyCon",permalink:"/documentation/pr-preview/pr-151/theoplayer/how-to-guides/drm/pallycon"}},a={},c=[{value:"SDKs",id:"sdks",level:2},{value:"How to use Clear Key",id:"how-to-use-clear-key",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"Resources",id:"resources",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"how-to-play-a-clear-key-protected-stream-in-theoplayer",children:"How to play a Clear-Key-protected stream in THEOplayer?"})}),"\n",(0,r.jsx)(t.p,{children:"This article provides a simple example of how to use Clear Key with THEOplayer."}),"\n",(0,r.jsxs)(t.p,{children:["Usually, DRM systems require you to specify a ",(0,r.jsx)(t.code,{children:"licenseAcquisitionURL"}),' and additional optional data (e.g.: certificate, credentials, headers). Clear Key does not need a DRM provider. You can provide the key(s) directly to the player (hence "clear" key) through the ',(0,r.jsx)(t.code,{children:"keys"})," property in its ",(0,r.jsx)(t.code,{children:"LicenseAcquisitionDescription"})," (in fact, this property is only available for Clear Key). Alternatively, you can have the player fetch the keys from a ",(0,r.jsx)(t.code,{children:"licenseAcquisitionURL"}),", which returns a JSON object containing the same keys."]}),"\n",(0,r.jsxs)(t.p,{children:["Please check also our related ",(0,r.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/SourceDescription.html",children:"API documentation"})," on how to set these."]}),"\n",(0,r.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"how-to-use-clear-key",children:"How to use Clear Key"}),"\n",(0,r.jsx)(t.p,{children:"Below you can find examples on how the clear key source descriptions look like on Web and Android SDKs:"}),"\n",(0,r.jsx)(t.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,r.jsx)(t.p,{children:"With keys:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'player.source = {\n  sources: {\n    src: "your-manifest-URL",\n    useCredentials: false,\n    contentProtection: {\n      clearkey: {\n        keys: [\n          {\n            id: "id",\n            value: "value"\n          }\n        ]\n      }\n    }\n  }\n};\n'})}),"\n",(0,r.jsx)(t.p,{children:"With a license URL:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'player.source = {\n  sources: {\n    src: "https://storage.googleapis.com/shaka-demo-assets/angel-one-clearkey/dash.mpd",\n    useCredentials: false,\n    contentProtection: {\n      clearkey: {\n        licenseAcquisitionURL:\n          "https://cwip-shaka-proxy.appspot.com/clearkey?_u3wDe7erb7v8Lqt8A3QDQ=ABEiM0RVZneImaq7zN3u_w"\n      }\n    }\n  }\n};\n'})}),"\n",(0,r.jsx)(t.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'SourceDescription.Builder clearKey = new SourceDescription.Builder(\n        new TypedSource.Builder("https://storage.googleapis.com/shaka-demo-assets/angel-one-clearkey/dash.mpd")\n                .drm(\n                        new DRMConfiguration.Builder()\n                                .clearkey(\n                                        new ClearkeyKeySystemConfiguration.Builder("https://cwip-shaka-proxy.appspot.com/clearkey?_u3wDe7erb7v8Lqt8A3QDQ=ABEiM0RVZneImaq7zN3u_w")\n                                                .useCredentials(false)\n                                                .build()\n                                )\n                                .build()\n                )\n                .build()\n);\n\ntpv.getPlayer().setSource(clearKey.build());\n'})}),"\n",(0,r.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/ClearkeyDecryptionKey.html",children:"API Reference - ClearkeyDecryptionKey"})}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/Dash-Industry-Forum/dash.js/wiki/Generate-MPEG-DASH-content-encrypted-with-MPEG-CENC-ClearKey",children:"Generate MPEG DASH content encrypted with MPEG CENC ClearKey"}),": DASH IF on GitHub"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://w3c.github.io/encrypted-media/#clear-key-license-format",children:"Clear Key license format"}),": W3C - Encrypted Media Extensions"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var r=n(96540);const s={},i=r.createContext(s);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);