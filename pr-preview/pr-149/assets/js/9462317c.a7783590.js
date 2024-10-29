"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[44990],{37956:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>a,frontMatter:()=>s,metadata:()=>h,toc:()=>d});var l=i(74848),r=i(28453);const s={description:"Find out what's new in Open Video UI for Web.",sidebar_custom_props:{icon:"\ud83d\udcf0"},slug:"/web/changelog",title:"Changelog",toc_min_heading_level:2,toc_max_heading_level:2},t="Changelog",h={id:"external/web-ui/CHANGELOG",title:"Changelog",description:"Find out what's new in Open Video UI for Web.",source:"@site/open-video-ui/external/web-ui/CHANGELOG.md",sourceDirName:"external/web-ui",slug:"/web/changelog",permalink:"/documentation/pr-preview/pr-149/open-video-ui/web/changelog",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/web-ui/blob/-/CHANGELOG.md",tags:[],version:"current",frontMatter:{description:"Find out what's new in Open Video UI for Web.",sidebar_custom_props:{icon:"\ud83d\udcf0"},slug:"/web/changelog",title:"Changelog",toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"web",previous:{title:"Custom UI: Nitflex theme",permalink:"/documentation/pr-preview/pr-149/open-video-ui/web/examples/nitflex"}},o={},d=[{value:"v1.9.1 (2024-09-27)",id:"v191-2024-09-27",level:2},{value:"v1.9.0 (2024-09-06)",id:"v190-2024-09-06",level:2},{value:"v1.8.2 (2024-08-29)",id:"v182-2024-08-29",level:2},{value:"v1.8.1 (2024-04-18)",id:"v181-2024-04-18",level:2},{value:"v1.8.0 (2024-04-12)",id:"v180-2024-04-12",level:2},{value:"v1.7.2 (2024-03-18)",id:"v172-2024-03-18",level:2},{value:"v1.7.1 (2024-02-15)",id:"v171-2024-02-15",level:2},{value:"v1.7.0 (2024-02-15)",id:"v170-2024-02-15",level:2},{value:"v1.6.0 (2024-02-08)",id:"v160-2024-02-08",level:2},{value:"v1.5.0 (2023-11-27)",id:"v150-2023-11-27",level:2},{value:"v1.4.0 (2023-10-04)",id:"v140-2023-10-04",level:2},{value:"v1.3.0 (2023-05-16)",id:"v130-2023-05-16",level:2},{value:"v1.2.0 (2023-04-26)",id:"v120-2023-04-26",level:2},{value:"v1.1.0 (2023-04-12)",id:"v110-2023-04-12",level:2},{value:"v1.0.0 (2023-04-05)",id:"v100-2023-04-05",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"changelog",children:"Changelog"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Tags:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\ud83d\udca5 Breaking Change"}),"\n",(0,l.jsx)(n.li,{children:"\ud83d\ude80 New Feature"}),"\n",(0,l.jsx)(n.li,{children:"\ud83d\udc1b Bug Fix"}),"\n",(0,l.jsx)(n.li,{children:"\ud83d\udc4e Deprecation"}),"\n",(0,l.jsx)(n.li,{children:"\ud83d\udcdd Documentation"}),"\n",(0,l.jsx)(n.li,{children:"\ud83c\udfe0 Internal"}),"\n",(0,l.jsx)(n.li,{children:"\ud83d\udc85 Polish"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v191-2024-09-27",children:"v1.9.1 (2024-09-27)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\ud83d\udc1b Fixed ",(0,l.jsx)("kbd",{children:"Enter"})," and ",(0,l.jsx)("kbd",{children:"Space"})," keys not working to activate buttons in the UI."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v190-2024-09-06",children:"v1.9.0 (2024-09-06)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\ud83d\ude80 Added support for THEOplayer 8.0."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v182-2024-08-29",children:"v1.8.2 (2024-08-29)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\ud83d\udc1b Fixed blank space below UI when using ",(0,l.jsx)(n.code,{children:"<theoplayer-default-ui>"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["\ud83d\udc85 Optimized performance of ",(0,l.jsx)(n.code,{children:"<theoplayer-time-range>"}),". (",(0,l.jsx)(n.a,{href:"https://github.com/THEOplayer/web-ui/issues/70",children:"#70"}),")","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Optimized the ",(0,l.jsx)(n.code,{children:"requestAnimationFrame"})," callback used to update the seekbar's progress\nto avoid synchronous re-layouts as much as possible."]}),"\n",(0,l.jsxs)(n.li,{children:["When playing a long video, the seek bar no longer uses ",(0,l.jsx)(n.code,{children:"requestAnimationFrame"})," at all to update its progress.\nInstead, it updates using only less frequent ",(0,l.jsx)(n.code,{children:"timeupdate"})," events."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v181-2024-04-18",children:"v1.8.1 (2024-04-18)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\ud83d\udc1b Fixed ",(0,l.jsx)(n.code,{children:"ui.player.destroy()"})," not working. (",(0,l.jsx)(n.a,{href:"https://github.com/THEOplayer/web-ui/issues/59",children:"#59"}),", ",(0,l.jsx)(n.a,{href:"https://github.com/THEOplayer/web-ui/pull/62",children:"#62"}),")"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v180-2024-04-12",children:"v1.8.0 (2024-04-12)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\ud83d\udca5 ",(0,l.jsx)(n.strong,{children:"Breaking Change"}),": This project now requires THEOplayer version 7.0.0 or higher. (",(0,l.jsx)(n.a,{href:"https://github.com/THEOplayer/web-ui/pull/60",children:"#60"}),")"]}),"\n",(0,l.jsxs)(n.li,{children:["\ud83d\ude80 Added ",(0,l.jsx)(n.code,{children:"<theolive-default-ui>"})," that provides a default UI for THEOlive streams. (",(0,l.jsx)(n.a,{href:"https://github.com/THEOplayer/web-ui/pull/58",children:"#58"}),")"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v172-2024-03-18",children:"v1.7.2 (2024-03-18)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\ud83d\ude80 Added ",(0,l.jsx)(n.code,{children:"<theoplayer-slot-container>"}),". (",(0,l.jsx)(n.a,{href:"https://github.com/THEOplayer/web-ui/pull/55",children:"#55"}),")"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v171-2024-02-15",children:"v1.7.1 (2024-02-15)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\ud83d\udc85 Export ",(0,l.jsx)(n.code,{children:"version"})," in public API. (",(0,l.jsx)(n.a,{href:"https://github.com/THEOplayer/web-ui/pull/53",children:"#53"}),")"]}),"\n",(0,l.jsxs)(n.li,{children:["\ud83d\udc85 Allow importing ",(0,l.jsx)(n.code,{children:"@theoplayer/web-ui/package.json"}),". (",(0,l.jsx)(n.a,{href:"https://github.com/THEOplayer/web-ui/pull/53",children:"#53"}),")"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v170-2024-02-15",children:"v1.7.0 (2024-02-15)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\ud83d\ude80 Added support for loading in Node for static site generation (SSG) or server-side rendering (SSR). (",(0,l.jsx)(n.a,{href:"https://github.com/THEOplayer/web-ui/pull/50",children:"#50"}),")","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u26a0\ufe0f Although the Node entry point exports all custom element classes as usual, attempting to actually construct those classes will result in errors. Most dependencies are either replaced with stubs (using ",(0,l.jsx)(n.a,{href:"https://lit.dev/docs/ssr/dom-emulation/",children:(0,l.jsx)(n.code,{children:"@lit-labs/ssr-dom-shim"})}),") or removed altogether (such as THEOplayer itself)."]}),"\n",(0,l.jsxs)(n.li,{children:["This should always be used together with an SSG or SSR solution. For example, you can use ",(0,l.jsx)(n.a,{href:"https://www.npmjs.com/package/@theoplayer/react-ui",children:"Open Video UI for React"})," together with ",(0,l.jsx)(n.a,{href:"https://react.dev/reference/react-dom/server",children:"React server rendering"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\ud83d\udc1b Fixed an issue where ",(0,l.jsx)(n.code,{children:"<theoplayer-ui>"})," could throw an error when the player changes sources before all custom elements are properly registered. (",(0,l.jsx)(n.a,{href:"https://github.com/THEOplayer/web-ui/pull/49",children:"#49"}),")"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v160-2024-02-08",children:"v1.6.0 (2024-02-08)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\ud83d\ude80 Introducing ",(0,l.jsx)(n.a,{href:"https://www.npmjs.com/package/@theoplayer/react-ui",children:"Open Video UI for React"}),". (",(0,l.jsx)(n.a,{href:"https://github.com/THEOplayer/web-ui/pull/48",children:"#48"}),")","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Idiomatic React components make the Open Video UI feel right at home in your existing React web app."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\ud83d\ude80 Added support for advertisements while casting to Chromecast. This requires THEOplayer version 6.8.0 or higher. (",(0,l.jsx)(n.a,{href:"https://github.com/THEOplayer/web-ui/pull/47",children:"#47"}),")"]}),"\n",(0,l.jsxs)(n.li,{children:["\ud83d\ude80 Added ",(0,l.jsx)(n.code,{children:"theoplayerready"})," event to ",(0,l.jsx)(n.code,{children:"<theoplayer-default-ui>"})," and ",(0,l.jsx)(n.code,{children:"<theoplayer-ui>"}),", which is fired once the backing THEOplayer instance is created. (",(0,l.jsx)(n.a,{href:"https://github.com/THEOplayer/web-ui/pull/48",children:"#48"}),")."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v150-2023-11-27",children:"v1.5.0 (2023-11-27)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\ud83d\ude80 Added support for smart TVs. (",(0,l.jsx)(n.a,{href:"https://github.com/THEOplayer/web-ui/pull/40",children:"#40"}),")","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Updated ",(0,l.jsx)(n.code,{children:"<theoplayer-default-ui>"})," to automatically switch to an optimized layout when running on a smart TV.\nFor custom UIs using ",(0,l.jsx)(n.code,{children:"<theoplayer-ui>"}),", you can use the ",(0,l.jsx)(n.code,{children:"tv-only"})," and ",(0,l.jsx)(n.code,{children:"tv-hidden"})," attributes to show or hide specific UI elements on smart TVs."]}),"\n",(0,l.jsx)(n.li,{children:"Added support for navigating the UI using a TV remote control."}),"\n",(0,l.jsxs)(n.li,{children:["Added a ",(0,l.jsx)(n.code,{children:"tv-focus"})," attribute to specify which UI element should receive the initial focus when showing the controls on a TV.\nIn the default UI, initial focus is on the seek bar."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\ud83d\ude80 Allow overriding more CSS properties of ",(0,l.jsx)(n.code,{children:"<theoplayer-default-ui>"}),". (",(0,l.jsx)(n.a,{href:"https://github.com/THEOplayer/web-ui/pull/42",children:"#42"}),")"]}),"\n",(0,l.jsxs)(n.li,{children:['\ud83d\udc85 Renamed project to "THEOplayer Open Video UI for Web". (',(0,l.jsx)(n.a,{href:"https://github.com/THEOplayer/web-ui/pull/43",children:"#43"}),")"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v140-2023-10-04",children:"v1.4.0 (2023-10-04)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\ud83d\udca5 ",(0,l.jsx)(n.strong,{children:"Breaking Change"}),": This project now requires THEOplayer version 6.0.0 or higher."]}),"\n",(0,l.jsxs)(n.li,{children:["\ud83d\ude80 Open Video UI now imports THEOplayer as a JavaScript module using ",(0,l.jsx)(n.code,{children:"import from 'theoplayer/chromeless'"}),".\nSee the ",(0,l.jsx)(n.a,{href:"https://github.com/THEOplayer/web-ui/blob/v1.4.0/README.md#installation",children:"README"})," for updated installation instructions."]}),"\n",(0,l.jsxs)(n.li,{children:["\ud83d\udc1b When the player's source is empty, the UI will no longer attempt to play when clicked. (",(0,l.jsx)(n.a,{href:"https://github.com/THEOplayer/web-ui/pull/37",children:"#37"}),")"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v130-2023-05-16",children:"v1.3.0 (2023-05-16)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\ud83d\udca5 ",(0,l.jsx)(n.strong,{children:"Breaking Change"}),": This project now requires THEOplayer version 5.1.0 or higher."]}),"\n",(0,l.jsxs)(n.li,{children:["\ud83c\udfe0 This project now depends on the chromeless version of THEOplayer, rather than the full version which includes the old video.js-based UI. (",(0,l.jsx)(n.a,{href:"https://github.com/THEOplayer/web-ui/pull/31",children:"#31"}),")"]}),"\n",(0,l.jsxs)(n.li,{children:["\ud83d\udc1b Fix ",(0,l.jsx)(n.code,{children:"has-error"})," attribute not cleared on source change (",(0,l.jsx)(n.a,{href:"https://github.com/THEOplayer/web-ui/pull/29",children:"#29"}),")"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v120-2023-04-26",children:"v1.2.0 (2023-04-26)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\ud83d\ude80 Improved support for advertisements (",(0,l.jsx)(n.a,{href:"https://github.com/THEOplayer/web-ui/pull/28",children:"#28"}),")","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Reworked the ad control bar in ",(0,l.jsx)(n.code,{children:"<theoplayer-default-ui>"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["Added a ",(0,l.jsx)(n.code,{children:"show-ad-markers"})," attribute to ",(0,l.jsx)(n.code,{children:"<theoplayer-time-range>"}),", to show markers on the progress bar indicating when the content will be interrupted by an advertisement."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"<theoplayer-ad-skip-button>"})," and ",(0,l.jsx)(n.code,{children:"<theoplayer-ad-clickthrough-button>"})," are automatically hidden while playing a Google IMA ad. (This is unfortunately necessary, because Google IMA doesn't provide a way to modify or replace its own buttons.)"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"\ud83d\udc1b When the player changes sources, any open menu is now automatically closed"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v110-2023-04-12",children:"v1.1.0 (2023-04-12)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\ud83d\udca5 ",(0,l.jsx)(n.strong,{children:"Breaking Change"}),": This project now targets modern browsers, so ",(0,l.jsx)(n.code,{children:"dist/THEOplayerUI.js"})," and ",(0,l.jsx)(n.code,{children:"dist/THEOplayerUI.mjs"})," now use ES2017 syntax (such as ",(0,l.jsx)(n.code,{children:"class"})," and ",(0,l.jsx)(n.code,{children:"async"}),"/",(0,l.jsx)(n.code,{children:"await"}),'). See "Legacy browser support" in the ',(0,l.jsx)(n.a,{href:"https://github.com/THEOplayer/web-ui/blob/v1.1.0/README.md",children:"README"})," for more information about targeting older browsers. (",(0,l.jsx)(n.a,{href:"https://github.com/THEOplayer/web-ui/issues/26",children:"#26"}),", ",(0,l.jsx)(n.a,{href:"https://github.com/THEOplayer/web-ui/pull/27",children:"#27"}),")"]}),"\n",(0,l.jsx)(n.li,{children:"\ud83d\ude80 Added support for THEOplayer 5.0"}),"\n",(0,l.jsxs)(n.li,{children:["\ud83d\udc85 Improved accessibility (",(0,l.jsx)(n.a,{href:"https://github.com/THEOplayer/web-ui/pull/21",children:"#21"}),")"]}),"\n",(0,l.jsxs)(n.li,{children:["\ud83d\udc85 Make menus fill entire player when player is small (",(0,l.jsx)(n.a,{href:"https://github.com/THEOplayer/web-ui/pull/22",children:"#22"}),")"]}),"\n",(0,l.jsxs)(n.li,{children:["\ud83d\udc1b Ensure ",(0,l.jsx)(n.code,{children:"player"})," property is initialized immediately when calling ",(0,l.jsx)(n.code,{children:"new UIContainer(configuration)"})," with a valid player configuration (",(0,l.jsx)(n.a,{href:"https://github.com/THEOplayer/web-ui/pull/24",children:"#24"}),")"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v100-2023-04-05",children:"v1.0.0 (2023-04-05)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\ud83d\ude80 Initial release"}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>h});var l=i(96540);const r={},s=l.createContext(r);function t(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);