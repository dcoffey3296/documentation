"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6278],{48795:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=s(74848),r=s(28453);const i={},l="How to insert subtitles?",o={id:"how-to-guides/texttrack/how-to-insert-subtitles",title:"How to insert subtitles?",description:"You may be asking this question if you need captions or subtitles on your video. The sourceDescription property textTracks can be used to add an array of side-loaded text tracks to the player. All valid tracks will be available for playback as long as the player\u2019s source is not set again. In the following guide, you will find several related topics and some code samples for different SDKs.",source:"@site/theoplayer/how-to-guides/10-texttrack/04-how-to-insert-subtitles.md",sourceDirName:"how-to-guides/10-texttrack",slug:"/how-to-guides/texttrack/how-to-insert-subtitles",permalink:"/documentation/pr-preview/pr-154/theoplayer/how-to-guides/texttrack/how-to-insert-subtitles",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/10-texttrack/04-how-to-insert-subtitles.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"roku",previous:{title:"How to programmatically enable or disable text tracks",permalink:"/documentation/pr-preview/pr-154/theoplayer/how-to-guides/texttrack/how-to-programmatically-disable-text-tracks"},next:{title:"How to implement preview thumbnails in THEOplayer",permalink:"/documentation/pr-preview/pr-154/theoplayer/how-to-guides/texttrack/how-to-implement-preview-thumbnails"}},a={},c=[{value:"SDKs",id:"sdks",level:2},{value:"Related questions",id:"related-questions",level:2},{value:"Code examples",id:"code-examples",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:5},{value:"Subtitle styling",id:"subtitle-styling",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"how-to-insert-subtitles",children:"How to insert subtitles?"})}),"\n",(0,n.jsxs)(t.p,{children:["You may be asking this question if you need captions or subtitles on your video. The sourceDescription property ",(0,n.jsx)(t.em,{children:"textTracks"})," can be used to add an array of side-loaded text tracks to the player. All valid tracks will be available for playback as long as the player\u2019s source is not set again. In the following guide, you will find several related topics and some code samples for different SDKs."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.em,{children:"textTracks"})," property and objects can also be used for other purposes, e.g.: for including preview thumbnails and chapters. Please see linked documentation and article to find out more."]}),"\n",(0,n.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"related-questions",children:"Related questions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Can I activate captions in THEOplayer? How?"}),"\n",(0,n.jsx)(t.li,{children:"Can I load subtitles in several languages, for the user to choose?"}),"\n",(0,n.jsx)(t.li,{children:"Can I add styles to my subtitles"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"code-examples",children:"Code examples"}),"\n",(0,n.jsx)(t.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,n.jsxs)(t.p,{children:["Each text track should be described as a ",(0,n.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/TextTrackDescription.html",children:"TextTrackDescription"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'player.source = {\n  sources: [\n    {\n      src: "//path/to/your-manifest.m3u8", // sets source\n      type: "application/x-mpegurl" // sets type - find other values at https://support.theoplayer.com/hc/en-us/articles/214350425-SourceDescription-API#TypedSource\n    }\n  ],\n  textTracks: [\n    {\n      default: true, //optional\n      kind: "subtitles", //optional - find other values at https://support.theoplayer.com/hc/en-us/articles/214350425#TextTrackDescription\n      label: "English subs", //optional - this will appear in your UI\n      src: "path/to/your-subs-track1.vtt",\n      srclang: "en"\n    }\n  ]\n};\n'})}),"\n",(0,n.jsx)(t.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'public static final SourceDescription SOURCE_WITH_SUBS =\n        new SourceDescription.Builder("//path/to/your-manifest.m3u8")\n            .textTracks(\n                new TextTrackDescription.Builder("path/to/your-subs-track1.vtt")\n                    .isDefault(true)\n                    .kind(TextTrackKind.SUBTITLES)\n                    .srclang("en")\n                    .label("en")\n                    .build()\n            ).build()\n'})}),"\n",(0,n.jsx)(t.h5,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:'var sampleSource: SourceDescription {\n        let src = "https://your.m3u8"\n        let stream = "application/x-mpegurl"\n        let textTrack1 = TextTrackDescription(src: "https://your.webvtt", srclang: "English", isDefault: true, kind: .subtitles, label:"English", format: .WebVTT)\n        let textTrack2 = TextTrackDescription(src: "https://your.webvtt", srclang: "Arabic", isDefault: false, kind: .subtitles, label:"Arabic", format: .WebVTT)\n\n        return SourceDescription(\n            source: TypedSource(\n                src: src,\n                type: stream\n            ),\n            textTracks: [textTrack1,textTrack2]\n        )\n    }\n\nThen set the source to the player by:\n\nself.theoplayer.source = sampleSource\n'})}),"\n",(0,n.jsx)(t.h2,{id:"subtitle-styling",children:"Subtitle styling"}),"\n",(0,n.jsxs)(t.p,{children:["To style your subtitles look into the player source property ",(0,n.jsx)(t.code,{children:"textTrackStyle"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>o});var n=s(96540);const r={},i=n.createContext(r);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);