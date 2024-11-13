"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["50391"],{90340:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>o,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>i});var n=JSON.parse('{"id":"knowledge-base/playback/subtitles-and-closed-captions/chapter-markers","title":"Chapter markers","description":"This guide explains to you how to set up THEOplayer to display chapter markers as a way of navigating videos. For more information regarding chapter markers, see Resources at the bottom of this page.","source":"@site/theoplayer_versioned_docs/version-v7/knowledge-base/03-playback/subtitles-and-closed-captions/01-chapter-markers.md","sourceDirName":"knowledge-base/03-playback/subtitles-and-closed-captions","slug":"/knowledge-base/playback/subtitles-and-closed-captions/chapter-markers","permalink":"/documentation/pr-preview/pr-157/theoplayer/v7/knowledge-base/playback/subtitles-and-closed-captions/chapter-markers","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/knowledge-base/03-playback/subtitles-and-closed-captions/01-chapter-markers.md","tags":[],"version":"v7","sidebarPosition":1,"frontMatter":{},"sidebar":"roku","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-157/theoplayer/v7/knowledge-base/playback/subtitles-and-closed-captions/introduction"},"next":{"title":"Streaming","permalink":"/documentation/pr-preview/pr-157/theoplayer/v7/knowledge-base/streaming/introduction"}}'),s=r("85893"),a=r("50065");let i={},o="Chapter markers",c={},l=[{value:"SDKs",id:"sdks",level:2},{value:"How to use the Up Next API",id:"how-to-use-the-up-next-api",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Adding a chapter markers track",id:"adding-a-chapter-markers-track",level:3},{value:"Code samples",id:"code-samples",level:3},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:5},{value:"Sample application",id:"sample-application",level:2}];function d(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"chapter-markers",children:"Chapter markers"})}),"\n",(0,s.jsx)(t.p,{children:"This guide explains to you how to set up THEOplayer to display chapter markers as a way of navigating videos. For more information regarding chapter markers, see Resources at the bottom of this page."}),"\n",(0,s.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"how-to-use-the-up-next-api",children:"How to use the Up Next API"}),"\n",(0,s.jsx)(t.p,{children:"The Up Next API is a UI feature and shows video chapters when hovering the timeline."}),"\n",(0,s.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.p,{children:["This guide expects that you have a THEOplayer license. If you aren't using THEOplayer yet, you can start your free trial ",(0,s.jsx)(t.a,{href:"https://portal.theoplayer.com",children:"here"}),". Be sure to have THEOplayer version 2.11 or higher."]}),"\n",(0,s.jsx)(t.h3,{id:"adding-a-chapter-markers-track",children:"Adding a chapter markers track"}),"\n",(0,s.jsx)(t.p,{children:"In order to add chapter markers, you need to add a TextTrackDescription to your source that specifies a sideloaded text track of kind 'chapters'. THEOplayer supports loading of chapter markers in WebVTT, SRT and other text track formats."}),"\n",(0,s.jsxs)(t.p,{children:["To see an example of chapter markers in WebVTT formats, check out the article ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-157/theoplayer/v7/knowledge-base/playback/what-are-chapter-markers",children:"What are chapter markers?"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"code-samples",children:"Code samples"}),"\n",(0,s.jsx)(t.p,{children:"The following code samples show how you can load THEOplayer with a video and sideloaded chapters track:"}),"\n",(0,s.jsx)(t.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,s.jsxs)(t.p,{children:["This example shows how to use chapters on your video. In this example, the source contains one ",(0,s.jsx)(t.code,{children:"TextTrack"})," object, including a WebVTT file with video chapters."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"player.source = {\n    ...\n    textTracks : [{\n        kind : 'chapters',\n        src : 'https://cdn.theoplayer.com/video/sintel/chapters.vtt',\n        srclang : 'en'\n    }]\n};\n"})}),"\n",(0,s.jsx)(t.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,s.jsxs)(t.p,{children:["The following example shows how to use chapters on your video. In this example, the source contains one ",(0,s.jsx)(t.code,{children:"TextTrack"})," object, including a WebVTT file with video chapters."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'sourceDescription(\n    typedSource("https://cdn.theoplayer.com/video/sintel/nosubs.m3u8")\n        .build()\n)\n.textTracks(\n    new TextTrackDescription(\n        src: "https://cdn.theoplayer.com/video/sintel/chapters.vtt",\n        isDefault: true,\n        TextTrackKind.CHAPTERS,\n        srclang: "en",\n        label: "Chapters")\n)\n'})}),"\n",(0,s.jsx)(t.h5,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.code,{children:"TextTrackDescription"})," object has the following constructor:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-swift",children:"TextTrackDescription(src: String,\n                     srclang: String,\n                     isDefault: Bool?,\n                     kind: TextTrackKind?,\n                     label: String?,\n                     format: TextTrackFormat?)\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The following example shows how to use chapters on your video. In this example, the source contains one ",(0,s.jsx)(t.code,{children:"TextTrack"})," object, including a WebVTT file with video chapters."]}),"\n",(0,s.jsx)(t.p,{children:"Example code:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-swift",children:'var textTrackDescription = TextTrackDescription(src: "https://cdn.theoplayer.com/video/sintel/chapters.vtt",\n                                                srclang: "en",\n                                                kind: .chapters)\n}\n\nvar sourceDescription = SourceDescription(source: TypedSource(src: "https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8",\n                                                              type: "application/x-mpegurl"),\n                                          textTracks: [textTrackDescription])\n)\n'})}),"\n",(0,s.jsx)(t.h2,{id:"sample-application",children:"Sample application"}),"\n",(0,s.jsxs)(t.p,{children:["This demo illustrates the use of chapter markers in production: ",(0,s.jsx)(t.a,{href:"https://demo.theoplayer.com/chapters",children:"https://demo.theoplayer.com/chapters"}),"."]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return o},a:function(){return i}});var n=r(67294);let s={},a=n.createContext(s);function i(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);