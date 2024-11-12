"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["53226"],{4511:function(e,t,n){n.r(t),n.d(t,{metadata:()=>o,contentTitle:()=>i,default:()=>h,assets:()=>s,toc:()=>d,frontMatter:()=>l});var o=JSON.parse('{"id":"how-to-guides/miscellaneous/related-content","title":"Related Content","description":"The article in this section describes how to implement common use-cases related to the Related Content feature. This feature adds a component to the UI which enables viewers to navigate to related content. Developers can configure the related content using the exposed Related API.","source":"@site/theoplayer_versioned_docs/version-v6/how-to-guides/07-miscellaneous/01-related-content.md","sourceDirName":"how-to-guides/07-miscellaneous","slug":"/how-to-guides/miscellaneous/related-content","permalink":"/documentation/pr-preview/pr-156/theoplayer/v6/how-to-guides/miscellaneous/related-content","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/07-miscellaneous/01-related-content.md","tags":[],"version":"v6","sidebarPosition":1,"frontMatter":{},"sidebar":"roku","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-156/theoplayer/v6/how-to-guides/miscellaneous/introduction"},"next":{"title":"Social Sharing","permalink":"/documentation/pr-preview/pr-156/theoplayer/v6/how-to-guides/miscellaneous/social-sharing"}}'),r=n("85893"),a=n("50065");let l={},i="Related Content",s={},d=[{value:"SDKs",id:"sdks",level:2},{value:"Code examples",id:"code-examples",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android (TV) SDK",id:"android-tv-sdk",level:5},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:5},{value:"Important Note",id:"important-note",level:2},{value:"Related articles",id:"related-articles",level:2}];function c(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"related-content",children:"Related Content"})}),"\n",(0,r.jsx)(t.p,{children:"The article in this section describes how to implement common use-cases related to the Related Content feature. This feature adds a component to the UI which enables viewers to navigate to related content. Developers can configure the related content using the exposed Related API."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Related Content",src:n(90582).Z+"",title:"Related Content",width:"1297",height:"930"})}),"\n",(0,r.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"})]})})]}),"\n",(0,r.jsxs)(t.p,{children:["The Related Content API is a UI feature. It's currently unavailable on the Android (TV) SDK because the underlying THEOplayer CSS and JavaScript modules aren't activated. This means that you also can't enable it on the Android (TV) SDK by following the guide located at ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-156/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add CSS or JavaScript files to an Android/iOS project"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"code-examples",children:"Code examples"}),"\n",(0,r.jsx)(t.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,r.jsx)(t.p,{children:"The Related Content API was first released on THEOplayer's Web SDK."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Reference API: ",(0,r.jsx)(t.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/RelatedContent.html",children:"Related-Content API"})]}),"\n",(0,r.jsxs)(t.li,{children:["Online demo: ",(0,r.jsx)(t.a,{href:"https://demo.theoplayer.com/related-content",children:"https://demo.theoplayer.com/related-content"})]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'player.related.sources = [\n  {\n    image: "//cdn.theoplayer.com/video/vr/poster.jpg",\n    title: "Experience true 360/VR in THEOplayer",\n    duration: "2:14",\n    link: "//demo.theoplayer.com/vr-and-360"\n  },\n  {\n    image:\n      "//cdn2.hubspot.net/hubfs/2163521/Demo_zone/CaminandesLlamaDramaPoster.jpg",\n    title: "4K Streaming with THEOplayer",\n    duration: "1:30",\n    link: "//demo.theoplayer.com/4k"\n  },\n  {\n    image: "//cdn.theoplayer.com/video/sintel/poster.jpg",\n    title: "Optimally present your content with chapter markers",\n    duration: "1:30",\n    link: "//demo.theoplayer.com/chapters"\n  },\n  {\n    image: "//localhost/server/azure.jpg",\n    title: "Keep THEOplayer visible with picture-in-picture",\n    duration: "1:30",\n    link: "//demo.theoplayer.com/chapters"\n  },\n  {\n    image: "//cdn.theoplayer.com/video/big_buck_bunny/poster.jpg",\n    title: "THEOplayer: Advertisements Tester (VAST, VPAID, VMAP)",\n    duration: "9:57",\n    link: "//demo.theoplayer.com/chapters"\n  },\n  {\n    image:\n      "//cdn2.hubspot.net/hubfs/2163521/Demo_zone/tears_of_steel_poster.jpg",\n    title: "CEA Closed Captions and Subtitles With THEOplayer",\n    duration: "12:14",\n    link: "//demo.theoplayer.com/closed-captions-subtitles"\n  },\n  {\n    title: "Go Big Screen With THEOplayer and Chromecast",\n    link: "//demo.theoplayer.com/chromecast",\n    duration: "9:57",\n    image: "//cdn.theoplayer.com/video/big_buck_bunny/poster-alt1.jpg"\n  },\n  {\n    title: "Effortless casting with THEOplayer and AirPlay",\n    link: "//demo.theoplayer.com/airplay",\n    duration: "9:57",\n    image: "//cdn.theoplayer.com/video/big_buck_bunny/poster-alt2.jpg"\n  },\n  {\n    title: "DRM and AES-128 content protection with THEOplayer",\n    link: "//demo.theoplayer.com/drm-aes-128-encryption",\n    duration: "LIVE",\n    image: "//cdn.theoplayer.com/video/big_buck_bunny/poster-alt3.jpg"\n  }\n];\n\nplayer.addEventListener("ended", function () {\n  if (!player.related.showing) {\n    setTimeout(function () {\n      player.related.show();\n    }, 1000);\n  }\n});\n'})}),"\n",(0,r.jsx)(t.h5,{id:"android-tv-sdk",children:"Android (TV) SDK"}),"\n",(0,r.jsx)(t.p,{children:"This API is currently not available on the Android (TV) SDK."}),"\n",(0,r.jsx)(t.h5,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,r.jsx)(t.p,{children:"The Related Content API is available on the iOS SDK, but not on the tvOS SDK. This feature can be used as below:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:'//Prerequisite: You would need THEOplayer iOS SDK enabled with Related Content feature.\n\n//create a variable to decalare related content sources to the player.\nvar relatedContent = self.theoplayer?.related\n\n//Create an array variable with your related content sources.\nvar relatedSources = [RelatedContentSource]()\n                relatedSources.append(RelatedContentSource(image: "https://cdn.theoplayer.com/video/vr/poster.jpg", source: sampleSource1, title: "xxx"))\n\n                relatedSources.append(RelatedContentSource(image: "https://cdn.theoplayer.com/video/sintel/poster.jpg", source: sampleSource2, title: "xxx"))\n\n                relatedSources.append(RelatedContentSource(image: "https://cdn.theoplayer.com/video/big_buck_bunny/poster.jpg", source: sampleSource3, title: "xxx"))\n\n                relatedSources.append(RelatedContentSource(image: "https://cdn2.hubspot.net/hubfs/2163521/Demo_zone/tears_of_steel_poster.jpg", source: sampleSource4, title: "xxx"))\n\n                relatedSources.append(RelatedContentSource(image: "https://cdn.theoplayer.com/video/vr/poster.jpg", source: sampleSource5, title: "xxx"))\n\n                relatedSources.append(RelatedContentSource(image: "https://cdn.theoplayer.com/video/vr/poster.jpg", source: sampleSource6, title: "xxx"))\n\n//Add the relatedSources array to the created relatedContent variable.\nrelatedContent?.sources = relatedSources\n\n// Example of Source to the player defined in above relatedSources\nvar sampleSource1: SourceDescription {\n  let src = "https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8"\n  let stream = "application/x-mpegurl"\n    return SourceDescription(\n            source: TypedSource(\n                src: src,\n                type: stream\n\n            ))\n    }\n'})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Reference DEMO APP: ",(0,r.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-ios-sdk/tree/master/Related-Content",children:"iOS Related Content Demo APP"})]}),"\n",(0,r.jsxs)(t.li,{children:["Reference API: ",(0,r.jsx)(t.a,{href:"pathname:///theoplayer/v6/api-reference/ios/Protocols/RelatedContent.html",children:"iOS Related Content API"})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"important-note",children:"Important Note"}),"\n",(0,r.jsxs)(t.p,{children:["The Related Content API is limited to show a maximum of 15 tiles only. By default, it is set to show only 6 even if more than 6 are added to the player source. To show case more than 6 sources, below CSS code needs to be added to make the ",(0,r.jsx)(t.code,{children:"<div>"})," scrollable. To add external CSS files to your iOS Project, refer to the related articles."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-css",children:".theo-related-grid {\n  height: 100% !important;\n  overflow-y: scroll !important;\n}\n\n.theo-related-grid-tile {\n  display: block !important;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-156/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add CSS or JavaScript files to an Android/iOS project"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},90582:function(e,t,n){n.d(t,{Z:function(){return o}});let o=n.p+"assets/images/related-content-3e4e890814aa918323d0bf9fee9fb216.png"},50065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return l}});var o=n(67294);let r={},a=o.createContext(r);function l(e){let t=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);