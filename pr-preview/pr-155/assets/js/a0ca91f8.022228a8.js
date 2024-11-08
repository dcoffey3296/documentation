"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[66156],{62113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(74848),i=n(28453);const r={sidebar_position:2,slug:"/getting-started/frameworks/react-native/theoplayerview-component"},s="The THEOplayerView Component",o={id:"external/react-native-theoplayer/doc/theoplayerview-component",title:"The THEOplayerView Component",description:"THEOplayer React native SDK is an NPM package, which exposes the THEOplayerView component that can be added to your",source:"@site/theoplayer/external/react-native-theoplayer/doc/theoplayerview-component.md",sourceDirName:"external/react-native-theoplayer/doc",slug:"/getting-started/frameworks/react-native/theoplayerview-component",permalink:"/documentation/pr-preview/pr-155/theoplayer/getting-started/frameworks/react-native/theoplayerview-component",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/react-native-theoplayer/blob/-/doc/theoplayerview-component.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/getting-started/frameworks/react-native/theoplayerview-component"},sidebar:"react-native",previous:{title:"Creating a minimal demo app",permalink:"/documentation/pr-preview/pr-155/theoplayer/getting-started/frameworks/react-native/creating-minimal-app"},next:{title:"Example Application",permalink:"/documentation/pr-preview/pr-155/theoplayer/getting-started/frameworks/react-native/example-app"}},l={},c=[{value:"Properties",id:"properties",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Adaptive Bitrate (ABR) configuration",id:"adaptive-bitrate-abr-configuration",level:3},{value:"Chromeless vs. Chromefull",id:"chromeless-vs-chromefull",level:3},{value:"Native UI language",id:"native-ui-language",level:3},{value:"Setting a source",id:"setting-a-source",level:2},{value:"Seeking to a position in a stream",id:"seeking-to-a-position-in-a-stream",level:2},{value:"Text tracks and media tracks",id:"text-tracks-and-media-tracks",level:2},{value:"Preview thumbnails",id:"preview-thumbnails",level:2},{value:"Buffering state changes",id:"buffering-state-changes",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsxs)(t.h1,{id:"the-theoplayerview-component",children:["The ",(0,a.jsx)(t.code,{children:"THEOplayerView"})," Component"]})}),"\n",(0,a.jsx)(t.p,{children:"THEOplayer React native SDK is an NPM package, which exposes the THEOplayerView component that can be added to your\nReact Native projects."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"react-native-theoplayer",src:n(25287).A+"",width:"544",height:"257"})}),"\n",(0,a.jsxs)(t.p,{children:["This section will discuss the most important properties of ",(0,a.jsx)(t.code,{children:"THEOplayerView"}),".\nThe component's properties are also described in detail in\nits ",(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/react-native-theoplayer/blob/-/src/api/THEOplayerView.ts",children:"THEOplayerViewProps interface"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"THEOplayer React Native SDK uses HTML5/ Tizen/ webOS SDK, Android/ Fire TV SDK, and iOS/ tvOS SDK under the hood through\nbridges that map each THEO SDK API to the THEOplayerView component."}),"\n",(0,a.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"THEOplayerView"})," component supports the following list of properties."]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Property"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Platforms"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"config"})}),(0,a.jsx)(t.td,{children:"The player configuration containing the THEOplayer license and other player-setup related properties"}),(0,a.jsx)(t.td,{children:"All"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"style"})}),(0,a.jsx)(t.td,{children:"The style applied to the player view."}),(0,a.jsx)(t.td,{children:"All"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"onPlayerReady"})}),(0,a.jsxs)(t.td,{children:["A callback that provides the ",(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/react-native-theoplayer/blob/-/src/api/player/THEOplayer.ts",children:"THEOplayer API"})," when the player instance is ready."]}),(0,a.jsx)(t.td,{children:"All"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"onPlayerDestroy"})}),(0,a.jsx)(t.td,{children:"A callback is called when the internal player instance will be destroyed."}),(0,a.jsx)(t.td,{children:"All"})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"THEOplayerView"})," component accepts a ",(0,a.jsx)(t.code,{children:"config"})," property that contains basic player configuration."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"const player: PlayerConfiguration = {\n  license: undefined, //'insert THEOplayer license for react-native here'\n  chromeless: true,\n};\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"license"})," is an obfuscated string that contains the THEOplayer license needed for play-out, and which can be found\nin your THEOplayer Portal account. You can generate a license specifically for react-native, but if separate licenses per platform are needed, ",(0,a.jsx)(t.code,{children:"Platform.select()"})," could be used to\nconfigure them:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"const license = Platform.select(\n  {\n    'android': undefined, // insert Android THEOplayer license here\n    'ios': undefined,     // insert iOS THEOplayer license here\n    'web': undefined,     // insert Web THEOplayer license here\n  });\n"})}),"\n",(0,a.jsxs)(t.p,{children:["If no license is provided, only sources hosted on the ",(0,a.jsx)(t.code,{children:"theoplayer.com"})," domain can be played. On Web platforms,\nCORS rules applied on ",(0,a.jsx)(t.code,{children:"theoplayer.com"})," will also prohibit playing sources from this domain."]}),"\n",(0,a.jsx)(t.h3,{id:"adaptive-bitrate-abr-configuration",children:"Adaptive Bitrate (ABR) configuration"}),"\n",(0,a.jsxs)(t.p,{children:["On Android and Web platforms, you can control the ABR configuration using ",(0,a.jsx)(t.code,{children:"player.abr"})," on\nthe ",(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/react-native-theoplayer/blob/-/src/api/player/THEOplayer.ts",children:"THEOplayer API"}),".\nWe refer to the ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-155/theoplayer/getting-started/frameworks/react-native/abr",children:"Adaptive Bitrate (ABR)"})," page for detailed information, including examples."]}),"\n",(0,a.jsx)(t.h3,{id:"chromeless-vs-chromefull",children:"Chromeless vs. Chromefull"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"PlayerConfiguration.chromeless"})," relates to whether the underlying ",(0,a.jsx)(t.em,{children:"native"})," SDK provides the UI or not.\nIf ",(0,a.jsx)(t.code,{children:"chromeless = true"}),", the player does not include the native UI provided by the SDK and it is expected the UI is\ncreated in React Native. The accompanying example application provides a basic UI created in React Native."]}),"\n",(0,a.jsx)(t.h3,{id:"native-ui-language",children:"Native UI language"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"PlayerConfiguration.ui"})," has a configuration property 'language' that allows you to set the language for localisation when native UI elements (e.g. 'skip ad' being displayed on the skip butten in the ad UI) are presented to the user. This only applies to UI elements rendered by the native SDK's and not to other UI elements added via your react-native view stack."]}),"\n",(0,a.jsx)(t.h2,{id:"setting-a-source",children:"Setting a source"}),"\n",(0,a.jsxs)(t.p,{children:["You can set a source using the ",(0,a.jsx)(t.code,{children:"source"})," property on the ",(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/react-native-theoplayer/blob/-/src/api/player/THEOplayer.ts",children:"THEOplayer API"}),". The type\ndefinition of ",(0,a.jsx)(t.code,{children:"SourceDescription"})," maps to the type used in\nthe ",(0,a.jsx)(t.a,{href:"https://www.theoplayer.com/docs/theoplayer/v7/api-reference/web/interfaces/SourceDescription.html",children:"Web SDK's documentation"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:'player.source = {\n    "sources": {\n        "src": "https://cdn.theoplayer.com/video/elephants-dream/playlist-single-audio.m3u8",\n        "type": "application/x-mpegurl"\n    }\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"seeking-to-a-position-in-a-stream",children:"Seeking to a position in a stream"}),"\n",(0,a.jsxs)(t.p,{children:["Changing the player's current time, or seeking to a specific timestamp, is done by setting ",(0,a.jsx)(t.code,{children:"currentTime"}),"\non the ",(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/react-native-theoplayer/blob/-/src/api/player/THEOplayer.ts",children:"THEOplayer API"}),".\nTimestamps are measured in milliseconds."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"player.currentTime = 20_000; // msec\n"})}),"\n",(0,a.jsx)(t.h2,{id:"text-tracks-and-media-tracks",children:"Text tracks and media tracks"}),"\n",(0,a.jsxs)(t.p,{children:["The text tracks and media tracks available in the stream are provided by the ",(0,a.jsx)(t.code,{children:"PlayerEventType.LOADED_METADATA"})," event,\nwhich is dispatched by the ",(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/react-native-theoplayer/blob/-/src/api/player/THEOplayer.ts",children:"THEOplayer API"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:'import { PlayerEventType } from "./PlayerEventMap";\nimport { LoadedMetadataEvent } from "./PlayerEvent";\n\nconst onLoadedMetadata = (event: LoadedMetadataEvent) => {\n  console.log(TAG, \'loadedmetadata\', JSON.stringify(event));\n};\n\nplayer.addEventListener(PlayerEventType.LOADED_METADATA, onLoadedMetadata)\n'})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"PlayerEventType.TEXT_TRACK_LIST"})," event can be used to dynamically listen to text tracks that are being added,\nremoved or changed. Similarly, for text track cues, the ",(0,a.jsx)(t.code,{children:"PlayerEventType.TEXT_TRACK"})," event provides knowledge on cues\nbeing added or removed."]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"PlayerEventType.MEDIA_TRACK_LIST"})," event can be used to dynamically listen to audio and video tracks (being added,\nremoved or changed). On Android and Web, media tracks trigger the ",(0,a.jsx)(t.code,{children:"PlayerEventType.MEDIA_TRACK"})," callback with\ninformation on quality changes. This information is not available on iOS systems."]}),"\n",(0,a.jsx)(t.h2,{id:"preview-thumbnails",children:"Preview thumbnails"}),"\n",(0,a.jsxs)(t.p,{children:["Preview thumbnails are contained in a dedicated thumbnail track, which is a text track of kind ",(0,a.jsx)(t.code,{children:"metadata"})," with label\n",(0,a.jsx)(t.code,{children:"thumbnails"}),". The track can be either side-loaded to the stream source, or contained in a stream manifest, as the demo\nsources in the ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-155/theoplayer/getting-started/frameworks/react-native/example-app",children:"example application"})," demonstrate. The example also contains an implementation\nof a thumbnail viewer."]}),"\n",(0,a.jsx)(t.h2,{id:"buffering-state-changes",children:"Buffering state changes"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"PlayerEventType.WAITING"})," event is dispatched to indicate that the player has stopped playback because the next\nframe's data is currently unavailable, but is expected to come in soon.\nIt could be coupled to an activity indicator that is part of the UI.\nThe ",(0,a.jsx)(t.code,{children:"PlayerEventType.PLAYING"})," event is dispatched once playback continues."]}),"\n",(0,a.jsxs)(t.p,{children:["Alternatively, changes in ",(0,a.jsx)(t.code,{children:"readyState"})," could be observed through the ",(0,a.jsx)(t.code,{children:"PlayerEventType.READYSTATE_CHANGE"})," event.\nSince this value can sometimes switch radically, it is advised\nto add a time-out when using ",(0,a.jsx)(t.code,{children:"PlayerEventType.READYSTATE_CHANGE"})," in combination with a UI loading indicator."]}),"\n",(0,a.jsxs)(t.p,{children:["The UI of the ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-155/theoplayer/getting-started/frameworks/react-native/example-app",children:"example application"})," illustrates a possible implementation."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},25287:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/react-native-theoplayer-50e1e6e2dbf74294addbeeed5baa8e36.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var a=n(96540);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);