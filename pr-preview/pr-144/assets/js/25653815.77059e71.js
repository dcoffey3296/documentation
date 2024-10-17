"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[88920],{297:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var r=n(74848),s=n(28453);const a={slug:"/getting-started/frameworks/react-native/texttracks"},i="Subtitles, Closed Captions and Metadata tracks",d={id:"external/react-native-theoplayer/doc/texttracks",title:"Subtitles, Closed Captions and Metadata tracks",description:"THEOplayer's TextTrack api gives developers the capability to manage and manipulate various types of text-based content.",source:"@site/theoplayer_versioned_docs/version-v7/external/react-native-theoplayer/doc/texttracks.md",sourceDirName:"external/react-native-theoplayer/doc",slug:"/getting-started/frameworks/react-native/texttracks",permalink:"/documentation/pr-preview/pr-144/theoplayer/v7/getting-started/frameworks/react-native/texttracks",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/react-native-theoplayer/blob/-/doc/texttracks.md",tags:[],version:"v7",frontMatter:{slug:"/getting-started/frameworks/react-native/texttracks"},sidebar:"react-native",previous:{title:"Picture-in-Picture (PiP)",permalink:"/documentation/pr-preview/pr-144/theoplayer/v7/getting-started/frameworks/react-native/pip"},next:{title:"How-to guides",permalink:"/documentation/pr-preview/pr-144/theoplayer/v7/how-to-guides/"}},l={},c=[{value:"Types of text tracks",id:"types-of-text-tracks",level:2},{value:"Side-loaded text tracks",id:"side-loaded-text-tracks",level:2},{value:"iOS/tvOS",id:"iostvos",level:3},{value:"Listening to text track events",id:"listening-to-text-track-events",level:2},{value:"Enabling a text track",id:"enabling-a-text-track",level:2},{value:"Preview thumbnails",id:"preview-thumbnails",level:2},{value:"Styling subtitles and closed captions",id:"styling-subtitles-and-closed-captions",level:2},{value:"Style properties",id:"style-properties",level:3},{value:"Examples",id:"examples",level:3}];function o(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"subtitles-closed-captions-and-metadata-tracks",children:"Subtitles, Closed Captions and Metadata tracks"})}),"\n",(0,r.jsxs)(t.p,{children:["THEOplayer's ",(0,r.jsx)(t.code,{children:"TextTrack"})," api gives developers the capability to manage and manipulate various types of text-based content.\nSome of its key functionalities include text track selection, styling, and listening to track and cue events."]}),"\n",(0,r.jsx)(t.h2,{id:"types-of-text-tracks",children:"Types of text tracks"}),"\n",(0,r.jsx)(t.p,{children:"In this document we will differentiate between the following kinds of text tracks:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Subtitles"}),", which are text-based translations of the dialogue or narrative of a video;"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Closed Captions (CC)"}),", which go beyond subtitles by providing additional information about sound effects, music, and other audio cues;"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Metadata tracks"}),", which are used for providing non-textual information about the video, such as thumbnail urls or program boundaries in a live stream."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"In addition, a distinction can be made between how a text track is delivered to the player:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"In-band"})," refers to text tracks that are embedded within the video or audio media stream itself."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Out-band"}),", or ",(0,r.jsx)(t.em,{children:"out-of-band"}),", is used to describe text tracks that are delivered separately from the media file. They are typically described in the playlist or manifest."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Side-loaded"})," text tracks are those that are manually added or loaded by the user through the source description."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"side-loaded-text-tracks",children:"Side-loaded text tracks"}),"\n",(0,r.jsx)(t.p,{children:"In contrast to in-band and out-band text tracks, which are delivered to the player through the media content itself,\nthe side-loaded text tracks can be configured by the user when setting a source to the player:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'player.source = {\n  "sources": [\n    {\n    "src": "https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8",\n    "type": "application/x-mpegurl"\n    }\n  ],\n  "textTracks": [\n    {\n      "default": true,\n      "src": "https://cdn.theoplayer.com/dash/theoplayer/thumbnails/big_buck_bunny_thumbnails.vtt",\n      "label": "thumbnails",\n      "kind": "metadata",\n      "format": "webvtt",\n      "srclang": "en"\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"iostvos",children:"iOS/tvOS"}),"\n",(0,r.jsxs)(t.p,{children:["On iOS and tvOS, support for side-loaded tracks is provided by a separate connector, which is enabled by adding the\nfeature to the ",(0,r.jsx)(t.code,{children:"react-native-theoplayer.json"})," (or ",(0,r.jsx)(t.code,{children:"theoplayer-config.json"}),") file in your app folder."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "ios": {\n    "features": ["SIDELOADED_TEXTTRACKS"]\n  }\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"listening-to-text-track-events",children:"Listening to text track events"}),"\n",(0,r.jsxs)(t.p,{children:["Out-band and side-loaded text tracks become accessible via the text track API once the player has loaded the media\nsource. This event is signaled by the ",(0,r.jsx)(t.code,{children:"PlayerEventType.LOADED_METADATA"})," event,\nwhich is dispatched by the ",(0,r.jsx)(t.a,{href:"https://github.com/THEOplayer/react-native-theoplayer/blob/-/src/api/player/THEOplayer.ts",children:"THEOplayer API"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"player.addEventListener(PlayerEventType.LOADED_METADATA, (event: LoadedMetadataEvent) => {\n  console.log(TAG, 'loadedmetadata', JSON.stringify(event));\n})\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Alternatively, the ",(0,r.jsx)(t.code,{children:"PlayerEventType.TEXT_TRACK_LIST"})," event can be used to dynamically listen to text tracks that are being added,\nremoved or changed. In-band text tracks, in particular, are created when their first cue is loaded, which can occur at any\npoint during playback."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"player.addEventListener(PlayerEventType.TEXT_TRACK_LIST, (event: TextTrackListEvent) => {\n  const { subType, track } = event;\n  switch (subType) {\n    case TrackListEventType.ADD_TRACK: /*A text track has been added*/ break;\n    case TrackListEventType.REMOVE_TRACK: /*A text track has been removed*/ break;\n    case TrackListEventType.CHANGE_TRACK: /*A text track has changed*/ break;\n  }\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Similarly for text track cues, the ",(0,r.jsx)(t.code,{children:"PlayerEventType.TEXT_TRACK"})," event provides knowledge on cues\nbeing added or removed."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"player.addEventListener(PlayerEventType.TEXT_TRACK, (event: TextTrackEvent) => {\n  const { subType, cue } = event;\n  switch (subType) {\n    case TextTrackEventType.ADD_CUE: /*A text track cue has been added to the text track*/ break;\n    case TextTrackEventType.ENTER_CUE: /*A text track cue has entered; it became active*/ break;\n    case TextTrackEventType.EXIT_CUE: /*A text track cue has exited; it became inactive*/ break;\n    case TextTrackEventType.REMOVE_CUE: /*A text track cue has been removed from the text track*/ break;\n  }\n})\n"})}),"\n",(0,r.jsx)(t.h2,{id:"enabling-a-text-track",children:"Enabling a text track"}),"\n",(0,r.jsxs)(t.p,{children:["A subtitle or closed caption can be enabled by setting the player's ",(0,r.jsx)(t.code,{children:"selectedTextTrack"})," property to\nthe ",(0,r.jsx)(t.code,{children:"uid"})," of the track, or ",(0,r.jsx)(t.code,{children:"undefined"})," to select none."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"const track: TextTrack;\nplayer.selectedTextTrack = track.uid;\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Note that ",(0,r.jsx)(t.a,{href:"https://github.com/THEOplayer/react-native-theoplayer-ui",children:"THEOplayer React-Native UI"})," package\nprovides a visual representation of the list of available text tracks, as well as the ability to enable/disable them."]}),"\n",(0,r.jsx)(t.h2,{id:"preview-thumbnails",children:"Preview thumbnails"}),"\n",(0,r.jsx)(t.p,{children:"Preview thumbnails is a feature that allows users to see a visual representation of different points or scenes within\na video, making it easier to navigate and locate specific content of interest."}),"\n",(0,r.jsxs)(t.p,{children:["The thumbnails are typically contained in a dedicated thumbnail track, which is a text track of kind ",(0,r.jsx)(t.code,{children:"metadata"})," with label\n",(0,r.jsx)(t.code,{children:"thumbnails"}),".\nThe track can be either be side-loaded to the stream source, or contained in a stream manifest, as the demo\nsources in the ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-144/theoplayer/v7/getting-started/frameworks/react-native/example-app",children:"example application"})," demonstrate:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "sources": [\n    {\n    "src": "https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8",\n    "type": "application/x-mpegurl"\n    }\n  ],\n  "textTracks": [\n    {\n      "default": true,\n      "src": "https://cdn.theoplayer.com/dash/theoplayer/thumbnails/big_buck_bunny_thumbnails.vtt",\n      "label": "thumbnails",\n      "kind": "metadata",\n      "format": "webvtt"\n    }\n  ]\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"https://github.com/THEOplayer/react-native-theoplayer-ui",children:(0,r.jsx)(t.code,{children:"@theoplayer/react-native-ui"})})," package provides a\nthumbnail viewer the interprets thumbnail cues and displays them above the progress bar."]}),"\n",(0,r.jsx)(t.h2,{id:"styling-subtitles-and-closed-captions",children:"Styling subtitles and closed captions"}),"\n",(0,r.jsxs)(t.p,{children:["In this section, we showcase the functionality of THEOplayer's ",(0,r.jsx)(t.code,{children:"TextTrackStyle"})," API,\nwhich enables the customization of subtitles and closed captions' appearance. We will illustrate the practical implementation of this API through some examples."]}),"\n",(0,r.jsx)(t.h3,{id:"style-properties",children:"Style properties"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Purpose"}),(0,r.jsx)(t.th,{children:"Value"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Support"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"fontFamily"})}),(0,r.jsx)(t.td,{children:"The font of the text track."}),(0,r.jsxs)(t.td,{children:["A string, e.g. ",(0,r.jsx)(t.code,{children:"'serif'"}),", ",(0,r.jsx)(t.code,{children:"'monospace'"}),", ",(0,r.jsx)(t.code,{children:"'arial'"}),"."]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"All platforms,"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"fontColor"})}),(0,r.jsx)(t.td,{children:"The font color of the text track."}),(0,r.jsxs)(t.td,{children:["A string, e.g.",(0,r.jsx)(t.code,{children:"'red'"}),", ",(0,r.jsx)(t.code,{children:"'#ff0000'"}),", ",(0,r.jsx)(t.code,{children:"'#ffc50f'"})," or ",(0,r.jsx)(t.code,{children:"'rgba(255, 0, 0, 1)"}),"."]}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["All platforms. The ",(0,r.jsx)(t.code,{children:"rgba()"})," formatting is supported on Web only."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"fontSize"})}),(0,r.jsx)(t.td,{children:"The font size of the text track."}),(0,r.jsxs)(t.td,{children:["A percentage string, e.g.",(0,r.jsx)(t.code,{children:"'50%'"}),", ",(0,r.jsx)(t.code,{children:"'100%'"})," (default), ",(0,r.jsx)(t.code,{children:"'175%'"}),"."]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"All platforms,"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"backgroundColor"})}),(0,r.jsx)(t.td,{children:"The color of the area directly behind the text."}),(0,r.jsxs)(t.td,{children:["A string, e.g.",(0,r.jsx)(t.code,{children:"'red'"}),", ",(0,r.jsx)(t.code,{children:"'#ff0000'"}),", ",(0,r.jsx)(t.code,{children:"'#ffc50f'"})," or ",(0,r.jsx)(t.code,{children:"'rgba(255, 0, 0, 1)"}),"."]}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["All platforms. The ",(0,r.jsx)(t.code,{children:"rgba()"})," formatting is supported on Web only."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"windowColor"})}),(0,r.jsx)(t.td,{children:"The color of the area covering the full width of the text track."}),(0,r.jsxs)(t.td,{children:["A string, e.g.",(0,r.jsx)(t.code,{children:"'red'"}),", ",(0,r.jsx)(t.code,{children:"'#ff0000'"}),", ",(0,r.jsx)(t.code,{children:"'#ffc50f'"})," or ",(0,r.jsx)(t.code,{children:"'rgba(255, 0, 0, 1)"}),"."]}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["Web and Android. The ",(0,r.jsx)(t.code,{children:"rgba()"})," formatting is supported on Web only."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"edgeStyle"})}),(0,r.jsx)(t.td,{children:"The edge style of the text."}),(0,r.jsxs)(t.td,{children:["An enum value, either ",(0,r.jsx)(t.code,{children:"none"})," (default), ",(0,r.jsx)(t.code,{children:"dropshadow"}),", ",(0,r.jsx)(t.code,{children:"raised"}),", ",(0,r.jsx)(t.code,{children:"depressed"}),", ",(0,r.jsx)(t.code,{children:"uniform"}),"."]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"All platforms."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"marginTop"})}),(0,r.jsx)(t.td,{children:"The top margin of the area where subtitles are being rendered."}),(0,r.jsx)(t.td,{children:"A positive numeric value specifying the number of pixels."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"All platforms."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"marginLeft"})}),(0,r.jsx)(t.td,{children:"The left margin of the area where subtitles are being rendered."}),(0,r.jsx)(t.td,{children:"A positive numeric value specifying the number of pixels."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"All platforms."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"marginBottom"})}),(0,r.jsx)(t.td,{children:"The bottom margin of the area where subtitles are being rendered."}),(0,r.jsx)(t.td,{children:"A positive numeric value specifying the number of pixels."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Web only."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"marginRight"})}),(0,r.jsx)(t.td,{children:"The right margin  of the area where subtitles are being rendered."}),(0,r.jsx)(t.td,{children:"A positive numeric value specifying the number of pixels."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Web only."})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsxs)("tr",{valign:"top",children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"background",src:n(41854).A+"",width:"1280",height:"720"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"player.textTrackStyle.backgroundColor = 'red';\nplayer.textTrackStyle.marginLeft = 45;\n"})})})]}),(0,r.jsxs)("tr",{valign:"top",children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"size",src:n(46165).A+"",width:"1280",height:"720"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"player.textTrackStyle.windowColor = 'black';\nplayer.textTrackStyle.fontColor = '#ffff00ff';\nplayer.textTrackStyle.fontSize = '250%';\n"})})})]}),(0,r.jsxs)("tr",{valign:"top",children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"size",src:n(19506).A+"",width:"2560",height:"1440"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"player.textTrackStyle.fontFamily = 'monospace';\n"})})})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},41854:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/texttrackstyle_background-c95e54ee5b2a2bc17a69cc40d280344f.png"},19506:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/texttrackstyle_family-4ec69c505c8ee26bc7fa89802503ca25.png"},46165:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/texttrackstyle_size-cba477b68686174a985054911bb4b474.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var r=n(96540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);