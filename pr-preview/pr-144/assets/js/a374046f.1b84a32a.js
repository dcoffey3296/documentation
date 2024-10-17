"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[30098],{79591:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var r=t(74848),o=t(28453);const n={},i="THEOplayer Features & Modules",s={id:"faq/theoplayer-features-modules",title:"THEOplayer Features & Modules",description:"The THEOplayer SDK consists of modular features.",source:"@site/theoplayer_versioned_docs/version-v4/faq/53-theoplayer-features-modules.md",sourceDirName:"faq",slug:"/faq/theoplayer-features-modules",permalink:"/documentation/pr-preview/pr-144/theoplayer/v4/faq/theoplayer-features-modules",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/faq/53-theoplayer-features-modules.md",tags:[],version:"v4",sidebarPosition:53,frontMatter:{},sidebar:"faq",previous:{title:"Is it a problem if the viewer pauses a live stream for longer than the DVR window",permalink:"/documentation/pr-preview/pr-144/theoplayer/v4/faq/is-it-a-problem-if-viewer-pauses-live-stream-longer-than-dvr-window"},next:{title:"Chromecast on my webplayer does not work any longer despite no change in my implementation",permalink:"/documentation/pr-preview/pr-144/theoplayer/v4/faq/chromecast-on-weblayer-does-not-longer-work"}},l={},d=[{value:"How do I enable or disable certain features?",id:"how-do-i-enable-or-disable-certain-features",level:2},{value:"My feature isn&#39;t working?",id:"my-feature-isnt-working",level:2},{value:"How do I know which features are enabled?",id:"how-do-i-know-which-features-are-enabled",level:2},{value:"How do I quantify my optimizations?",id:"how-do-i-quantify-my-optimizations",level:2}];function u(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.header,{children:(0,r.jsx)(a.h1,{id:"theoplayer-features--modules",children:"THEOplayer Features & Modules"})}),"\n",(0,r.jsx)(a.p,{children:"The THEOplayer SDK consists of modular features."}),"\n",(0,r.jsx)(a.p,{children:'When building an SDK (i.e. license), you can specify which features are enabled.\nOnly a subset of features are enabled by default, such as "HLS", "MPEG-DASH", "UI", "Chromecast", "Airplay", "Ads", and "Text Track Rendering".'}),"\n",(0,r.jsx)(a.p,{children:"This modular approach allows you to optimize the file size of your THEOplayer SDK."}),"\n",(0,r.jsx)(a.h2,{id:"how-do-i-enable-or-disable-certain-features",children:"How do I enable or disable certain features?"}),"\n",(0,r.jsxs)(a.p,{children:["You can do this through our ",(0,r.jsx)(a.a,{href:"https://portal.theoplayer.com/",children:"Portal"}),"."]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Portal: enabling features of a new SDK",src:t(52124).A+"",width:"2880",height:"1800"})}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"If you're creating a new SDK, you can enable (and disable) features."}),"\n",(0,r.jsx)(a.li,{children:"If you want to toggle certain features for an existing SDK, you need to navigate to your SDK, update it, and re-publish it."}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"my-feature-isnt-working",children:"My feature isn't working?"}),"\n",(0,r.jsx)(a.p,{children:"Many features sit behind this modular structure. For example, the VR API or Up Next API won't work unless you've enabled the feature when creating your SDK."}),"\n",(0,r.jsx)(a.h2,{id:"how-do-i-know-which-features-are-enabled",children:"How do I know which features are enabled?"}),"\n",(0,r.jsxs)(a.p,{children:["You can log in to ",(0,r.jsx)(a.a,{href:"https://portal.theoplayer.com/",children:"portal.theoplayer.com"})," and navigate to your account.\nOnce you're there, you further navigate to your desired SDK and check how you've customized your features."]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Portal: enabling features of a new SDK",src:t(92501).A+"",width:"2880",height:"1800"})}),"\n",(0,r.jsxs)(a.p,{children:["If you're a developer (and you're only interested in this answer for the THEOplayer Web SDK),\nthen you can also figure this out at runtime through JavaScript.\nYou can call ",(0,r.jsx)(a.a,{href:"pathname:///theoplayer/v4/api-reference/web/variables/features.html",children:(0,r.jsx)(a.code,{children:"THEOplayer.features"})})," to identify which features are enabled."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:'THEOplayer.features;\n// (29) ["dash", "hls", "chromecast", "ads", "airplay", "yospace", "spotx", "vr", "conviva", "cache", "visibility", "webaudio", "youbora", "mediamelon", "moat", "google-dai", "streamone", "v-nova", "freewheel", "agama", "ui", "relatedcontent", "social", "upnext", "contextmenu", "texttrackstyle-ui", "activequalitylabel", "upcomingadnotification"]\n'})}),"\n",(0,r.jsx)(a.h2,{id:"how-do-i-quantify-my-optimizations",children:"How do I quantify my optimizations?"}),"\n",(0,r.jsx)(a.p,{children:"After optimizing your SDK, by enabling and disabling certain features, you might want to quantify those actions."}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:'You could compare the file size of your THEOplayer.js files. For example, when building THEOplayer 2.78.1, with only the "HLS" and "UI" feature enabled, the library size is 315 kB.\nTHEOplayer 2.78.1, with almost all features enabled, is almost 77% larger at 558 kB.'}),"\n",(0,r.jsxs)(a.li,{children:["You could ",(0,r.jsx)(a.a,{href:"https://codesandbox.io/s/github/THEOplayer/samples-web?file=/reference-apps/utility/measure-loading-time/index.html",children:"measure the loading time of your THEOplayer library"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["Note that optimizing a video player goes way beyond reducing your file size.\nAs a developer, you could consider ",(0,r.jsx)(a.a,{href:"https://demo.theoplayer.com/async-library-loading",children:"async library loading"}),", you could change your ",(0,r.jsx)(a.a,{href:"pathname:///theoplayer/v4/api-reference/web/types/ABRStrategyType.html",children:"ABR strategy"})," (as ",(0,r.jsx)(a.a,{href:"https://demo.theoplayer.com/increase-viewer-experience-optimizing-video-abr",children:"demonstrated"}),"),\nyou want to optimize your ",(0,r.jsx)(a.a,{href:"/documentation/pr-preview/pr-144/theoplayer/v4/how-to-guides/player/how-to-measure-time-to-first-frame",children:"time-to-first-frame"}),", and much more!"]})]})}function h(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},92501:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/portal-features-existing-sdk-c4750657976aabfcf780be702fa46cbe.png"},52124:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/portal-features-new-sdk-c6a364411cedbb1fc26bdb8fd66f9631.png"},28453:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>s});var r=t(96540);const o={},n=r.createContext(o);function i(e){const a=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(n.Provider,{value:a},e.children)}}}]);