"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16855],{86426:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=t(74848),r=t(28453);const i={},o="Introduction",s={id:"how-to-guides/cast/airplay/introduction",title:"Introduction",description:"AirPlay is a casting technology developed by Apple.",source:"@site/theoplayer/how-to-guides/03-cast/02-airplay/00-introduction.md",sourceDirName:"how-to-guides/03-cast/02-airplay",slug:"/how-to-guides/cast/airplay/introduction",permalink:"/documentation/pr-preview/pr-155/theoplayer/how-to-guides/cast/airplay/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/03-cast/02-airplay/00-introduction.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"roku",previous:{title:"Enable Chromecast on the Sender",permalink:"/documentation/pr-preview/pr-155/theoplayer/how-to-guides/cast/chromecast/enable-chromecast-on-the-sender"},next:{title:"Introduction",permalink:"/documentation/pr-preview/pr-155/theoplayer/how-to-guides/drm/introduction"}},l={},c=[{value:"How to enable AirPlay",id:"how-to-enable-airplay",level:2},{value:"API",id:"api",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"https://www.apple.com/airplay/",children:"AirPlay"})," is a casting technology developed by Apple.\nAirPlay allows viewers to mirror their videos between AirPlay-enabled sender and receiver devices."]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"iPhones, iPads and MacBooks are possible AirPlay-enabled sender devices."}),"\n",(0,n.jsx)(a.li,{children:"Apple TVs or AirPlay\u2013enabled smart TVs are possible AirPlay-enabled receiver devices."}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"THEOplayer offers support for AirPlay on AirPlay-enabled devices through its Web SDK and iOS SDK."}),"\n",(0,n.jsx)(a.h2,{id:"how-to-enable-airplay",children:"How to enable AirPlay"}),"\n",(0,n.jsxs)(a.p,{children:["AirPlay is a THEOplayer feature.\nEnsure that the ",(0,n.jsx)(a.code,{children:"airplay"})," feature is enabled when you build a THEOplayer SDK through the ",(0,n.jsx)(a.a,{href:"https://portal.theoplayer.com/",children:"THEOplayer Developer Platform"}),",\nas demonstrated by the screenshot below.\nAlternative, when someone shares the THEOplayer SDK with you, confirm that they enabled the ",(0,n.jsx)(a.code,{children:"airplay"})," feature."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Enable Airplay",src:t(81065).A+"",width:"2166",height:"1172"})}),"\n",(0,n.jsxs)(a.p,{children:["If the ",(0,n.jsx)(a.code,{children:"airplay"})," feature is enabled, the default THEOplayer UI should render the AirPlay icon in the control bar,\nas demonstrated by the screenshot below.\nViewers can click this AirPlay icon and select an AirPlay receiver device to initiate (and stop) the AirPlay session."]}),"\n",(0,n.jsx)(a.p,{children:"Ensure that an AirPlay-enabled receiver device is connected to your network, because you might not see an AirPlay icon otherwise.\nAdditionally, note that AirPlay is only supported by Apple on a limited set of devices and browsers.\nFor example, you cannot do AirPlay on a Chrome browser on a macOS device, even though it's an Apple device."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"AirPlay demo",src:t(69696).A+"",width:"2880",height:"1800"})}),"\n",(0,n.jsxs)(a.p,{children:["If you have a custom (",(0,n.jsx)(a.a,{href:"/documentation/pr-preview/pr-155/theoplayer/how-to-guides/ui/how-to-build-chromeless-ui",children:"Chromeless"}),") THEOplayer UI,\nyou need to build your own AirPlay UI and UX. You can use the THEOplayer AirPlay API to help achieve this, as discussed in the next section."]}),"\n",(0,n.jsx)(a.h2,{id:"api",children:"API"}),"\n",(0,n.jsx)(a.p,{children:"As a developer, you might need to use the THEOplayer AirPlay API to build a custom AirPlay UI and UX,\nor to dispatch an event to an analytics service, or for workflow purposes."}),"\n",(0,n.jsx)(a.p,{children:"The AirPlay interface is a sub-interface of the Cast interface on both the THEOplayer Web and iOS SDK."}),"\n",(0,n.jsx)(a.p,{children:"The API reference is available through the following links:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Web SDK: ",(0,n.jsx)(a.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/AirPlay.html",children:"AirPlay"}),", which inherits from ",(0,n.jsx)(a.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/VendorCast.html",children:"VendorCast"})]}),"\n",(0,n.jsxs)(a.li,{children:["iOS SDK: ",(0,n.jsx)(a.a,{href:"pathname:///theoplayer/v8/api-reference/ios/Protocols/AirPlay.html",children:"AirPlay"})]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["For the ",(0,n.jsx)(a.strong,{children:"THEOplayer Web SDK"}),", you could use the API as demonstrated below:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:'// const player = new THEOplayer.Player(...)\nconst airPlayState = player.cast.airplay.state;\nconst isCasting = player.cast.airlay.casting; // true or false\n// ...\n// if (want to start AirPlay)\nplayer.cast.airplay.start();\n// ...\n// if (want to stop AirPlay)\nplayer.cast.airplay.stop();\n// ...\nif (airPlayState == "available") {\n  // airplay is possible\n  player.cast.airplay.addEventListener("statechange", function (event) {\n    switch (event.state) {\n      case "available":\n        // show AirPlay available icon\n        break;\n      case "connected":\n        // show AirPlay connected icon\n        break;\n    }\n  });\n}\n'})}),"\n",(0,n.jsxs)(a.p,{children:["Note that the ",(0,n.jsx)(a.code,{children:"connected"})," and ",(0,n.jsx)(a.code,{children:"available"})," state are the only two states offered for AirPlay, because\nSafari only exposes limited information."]}),"\n",(0,n.jsxs)(a.p,{children:["For the ",(0,n.jsx)(a.strong,{children:"THEOplayer iOS SDK"}),", you could use the API as demonstrated below:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-swift",children:"private func setupTheoplayer() {\n    // player = THEOplayer(...)\n    let airPlayState = theoplayer.cast?.airPlay?.state\n    let isCasting = theoplayer.cast?.airPlay?.casting\n    // ...\n    // if (want to start AirPlay)\n        theoplayer.cast?.airPlay?.start()\n    // if (want to stop AirPlay)\n        theoplayer.cast?.airPlay?.stop()\n    // ...\n    theoplayer.cast?.airPlay?.addEventListener(type: AirPlayEventTypes.STATE_CHANGE, listener: onStateChange)\n}\n\nprivate func onStateChange(event: AirPlayStateChangeEvent) {\n    if (event.state == PlayerCastState.available) {\n        // show AirPlay available icon\n    } else if (event.state == PlayerCastState.connected) {\n        // show AirPlay connected icon\n    }\n    print(event.state)\n    print(self.player.cast?.airPlay?.casting)\n}\n"})}),"\n",(0,n.jsx)(a.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"/documentation/pr-preview/pr-155/theoplayer/how-to-guides/cast/chromecast/introduction",children:"Chromecast"})," and AirPlay are comparable technologies."]}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},69696:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/airplay-demo-theoplayer-b38aaa6ad2b2495f333a4316151d5ac4.png"},81065:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/portal-airplay-enabled-1f34336e6078b5eff14cdbfcd3695480.png"},28453:(e,a,t)=>{t.d(a,{R:()=>o,x:()=>s});var n=t(96540);const r={},i=n.createContext(r);function o(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);