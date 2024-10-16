"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[81714],{6824:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(74848),a=t(28453);const i={},s="How can we track the first play(ing) event?",l={id:"how-to-guides/player/how-can-we-track-the-first-playing-event",title:"How can we track the first play(ing) event?",description:"The question above is commonly asked to assist with the use-cases where the first play event thrown by THEOplayer for a specific stream needs to be detected. Similar questions are:",source:"@site/theoplayer_versioned_docs/version-v6/how-to-guides/09-player/03-how-can-we-track-the-first-playing-event.md",sourceDirName:"how-to-guides/09-player",slug:"/how-to-guides/player/how-can-we-track-the-first-playing-event",permalink:"/documentation/pr-preview/pr-143/theoplayer/v6/how-to-guides/player/how-can-we-track-the-first-playing-event",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/09-player/03-how-can-we-track-the-first-playing-event.md",tags:[],version:"v6",sidebarPosition:3,frontMatter:{},sidebar:"roku",previous:{title:"How to measure time-to-first-frame?",permalink:"/documentation/pr-preview/pr-143/theoplayer/v6/how-to-guides/player/how-to-measure-time-to-first-frame"},next:{title:"How to track player states",permalink:"/documentation/pr-preview/pr-143/theoplayer/v6/how-to-guides/player/how-to-track-player-states"}},o={},c=[{value:"SDKs",id:"sdks",level:2},{value:"Code examples",id:"code-examples",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:5},{value:"Roku SDK",id:"roku-sdk",level:5},{value:"Resources",id:"resources",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"how-can-we-track-the-first-playing-event",children:"How can we track the first play(ing) event?"})}),"\n",(0,r.jsxs)(n.p,{children:["The question above is commonly asked to assist with the use-cases where the first ",(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/PlayerEventMap.html#play",children:(0,r.jsx)(n.code,{children:"play"})})," event thrown by THEOplayer for a specific stream needs to be detected. Similar questions are:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The developer wants to know when a new stream plays for the first time."}),"\n",(0,r.jsxs)(n.li,{children:["The developer wants to forward a ",(0,r.jsx)(n.code,{children:"firstplay"})," event to an analytics backend."]}),"\n",(0,r.jsxs)(n.li,{children:["The developer has heard of a ",(0,r.jsx)(n.code,{children:"firstplay"})," event, and is interested if THEOplayer provides it."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Although we don't explicitly expose a ",(0,r.jsx)(n.code,{children:"firstplay"})," event, you can implement it yourself, allowing you more control over its logic."]}),"\n",(0,r.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Roku SDK"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"N/A"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"code-examples",children:"Code examples"}),"\n",(0,r.jsx)(n.p,{children:"The snippets below demonstrate an example implementation of firstplaying."}),"\n",(0,r.jsxs)(n.p,{children:["If the user pauses the stream, and resumes the video player, the event isn't re-thrown. If the user switches to another video, the ",(0,r.jsx)(n.code,{children:"firstplaying"})," event will be thrown once again.\nYou can also swap out the ",(0,r.jsx)(n.code,{children:"playing"})," event for a ",(0,r.jsx)(n.code,{children:"play"})," event, or any other event for that matter."]}),"\n",(0,r.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'function firstplaying(event) {\n  player.removeEventListener("playing", firstplaying);\n  console.log("first play event!", event);\n}\nplayer.addEventListener("sourcechange", function () {\n  console.log("A new SourceDescription has been set.");\n  player.removeEventListener("playing", firstplaying);\n  player.addEventListener("playing", firstplaying);\n});\n// OR\n// player.addEventListener(\'loadedmetadata\', function() {\n//    console.log("A new stream has been detected.");\n//    player.removeEventListener(\'playing\', firstplaying);\n//    player.addEventListener(\'playing\', firstplaying);\n// });\n'})}),"\n",(0,r.jsx)(n.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'final EventListener<PlayingEvent> firstplaying = new EventListener<PlayingEvent>() {\n    @Override\n    public void handleEvent(PlayingEvent playingEvent) {\n        tpv.getPlayer().removeEventListener(PlayerEventTypes.PLAYING, this);\n        System.out.println("First playing event!");\n    }\n};\n\ntpv.getPlayer().addEventListener(PlayerEventTypes.LOADEDMETADATA, new EventListener<LoadedMetadataEvent>() {\n    @Override\n    public void handleEvent(LoadedMetadataEvent loadedMetadataEvent) {\n        System.out.println("A new stream has been detected.");\n        tpv.getPlayer().removeEventListener(PlayerEventTypes.PLAYING, firstplaying);\n        tpv.getPlayer().addEventListener(PlayerEventTypes.PLAYING, firstplaying);\n    }\n});\n'})}),"\n",(0,r.jsx)(n.h5,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,r.jsx)(n.p,{children:"//work in progress"}),"\n",(0,r.jsx)(n.h5,{id:"roku-sdk",children:"Roku SDK"}),"\n",(0,r.jsxs)(n.p,{children:["To track only the first ",(0,r.jsx)(n.code,{children:"playing"}),' event we will add a "playing" event and a callback function. We will remove this event listener to make sure that the event callback will only be executed once.']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8" ?>\n<component name="TestScene" extends="Scene">\n    <interface>\n        <function name="callbackOnEventPlayerFirstPlaying"/>\n        <function name="callbackOnEventPlayerSourcechange"/>\n    </interface>\n\n    <script type = "text/brightscript" >\n\n        <![CDATA[\n\n        function Init()\n            m.player = m.top.findNode("TestPlayer")\n            m.player.configuration = {\n              "license": "" \' put the THEOplayer license between apostrophes\n            }\n            m.player.listener = m.top\n            m.player.callFunc("addEventListener", m.player.Event.sourcechange, "callbackOnEventPlayerSourcechange")\n\n            setSource()\n            m.player.setFocus(true)\n            m.player.callFunc("play")\n        end function\n\n        function setSource()\n            sourceDescription = {\n                "sources": [\n                    {\n                        "src": "http://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8",\n                        "type": "application/x-mpegURL"\n                    }\n                ]\n            }\n            m.player.source = sourceDescription\n            m.player.source.Live = false\n            m.player.source.LiveBoundsPauseBehavior = "pause"\n        end function\n\n        function callbackOnEventPlayerSourcechange(eventData)\n            ? "Event <sourcechange>: "; eventData\n            m.player.callFunc("removeEventListener", m.player.Event.playing, "callbackOnEventPlayerFirstPlaying")\n            m.player.callFunc("addEventListener", m.player.Event.playing, "callbackOnEventPlayerFirstPlaying")\n        end function\n\n        function callbackOnEventPlayerFirstPlaying(eventData)\n            m.player.callFunc("removeEventListener", m.player.Event.playing, "callbackOnEventPlayerFirstPlaying")\n            ? "Event <firstplaying>: "; eventData\n        end function\n\n        ]]>\n\n    <\/script>\n\n    <children>\n\t    <THEOsdk:THEOplayer id="TestPlayer"/>\n    </children>\n</component>\n'})}),"\n",(0,r.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/PlayerEventMap.html#play",children:"Reference API - play event"}),":"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(96540);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);