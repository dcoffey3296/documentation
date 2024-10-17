"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[45481],{53871:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>t,metadata:()=>s,toc:()=>d});var a=i(74848),r=i(28453);const t={},o="How to embed an iframe",s={id:"getting-started/sdks/web/how-can-we-embed-iframe",title:"How to embed an iframe",description:"Embedding a video player through an `` can be interesting for a number of reasons:",source:"@site/theoplayer_versioned_docs/version-v6/getting-started/01-sdks/01-web/03-how-can-we-embed-iframe.mdx",sourceDirName:"getting-started/01-sdks/01-web",slug:"/getting-started/sdks/web/how-can-we-embed-iframe",permalink:"/documentation/pr-preview/pr-144/theoplayer/v6/getting-started/sdks/web/how-can-we-embed-iframe",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/getting-started/01-sdks/01-web/03-how-can-we-embed-iframe.mdx",tags:[],version:"v6",sidebarPosition:3,frontMatter:{},sidebar:"web",previous:{title:"How to implement Keyboard Hotkeys",permalink:"/documentation/pr-preview/pr-144/theoplayer/v6/getting-started/sdks/web/how-to-implement-hotkeys"},next:{title:"How to implement a seamless transition between videos?",permalink:"/documentation/pr-preview/pr-144/theoplayer/v6/getting-started/sdks/web/how-to-implement-seamless-transition"}},l={},d=[{value:"&lt;iframe&gt;",id:"iframe",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Allowing embedding",id:"allowing-embedding",level:3},{value:"Enabling fullscreen and other features",id:"enabling-fullscreen-and-other-features",level:3},{value:"Deciding approaches",id:"deciding-approaches",level:3},{value:"Considering limitations",id:"considering-limitations",level:3},{value:"Adjusting UI and UX",id:"adjusting-ui-and-ux",level:3},{value:"Styling &lt;iframe&gt;",id:"styling-iframe",level:4},{value:"Styling embedded page",id:"styling-embedded-page",level:4},{value:"Communication between parent page and embedded page",id:"communication-between-parent-page-and-embedded-page",level:4},{value:"Demo",id:"demo",level:2},{value:"Resources",id:"resources",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"how-to-embed-an-iframe",children:"How to embed an iframe"})}),"\n",(0,a.jsxs)(n.p,{children:["Embedding a video player through an ",(0,a.jsx)(n.code,{children:"<iframe>"})," can be interesting for a number of reasons:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"You might want to easily embed your videos across different domains and brands."}),"\n",(0,a.jsx)(n.li,{children:"You want to facilitate social sharing on third-party websites through your viewers."}),"\n",(0,a.jsxs)(n.li,{children:["You are using a service or framework which doesn't allow you to include custom JavaScript, but it does allow you to embed an ",(0,a.jsx)(n.code,{children:"<iframe>"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Regardless of your use-case: you can embed THEOplayer through an iframe on first-party and third-party domains."}),"\n",(0,a.jsxs)(n.p,{children:["The goal of this guide is to help you embed THEOplayer through an ",(0,a.jsx)(n.code,{children:"<iframe>"})," by going through the following topics:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#iframe",children:"<iframe>"}),": what is an iframe?"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#implementation",children:"Implementation"}),": which THEOplayer APIs are relevant and how can I achieve my use-case?","\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#allowing-embedding",children:"Allowing embedding"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#enabling-fullscreen-and-other-features",children:"Enabling fullscreen and other features"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#deciding-approaches",children:"Deciding approaches"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#considering-limitations",children:"Considering limitations"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#adjusting-ui-and-ux",children:"Adjusting UI and UX"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#demo",children:"Demo"}),": resulting implementation and live demo"]}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#resources",children:"Resources"})}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Just want to copy-paste code and view a live example? ",(0,a.jsx)(n.a,{href:"#demo",children:"Skip to the demo"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"iframe",children:"<iframe>"}),"\n",(0,a.jsxs)(n.p,{children:["An iframe is an HTML tag, the ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe",children:(0,a.jsx)(n.code,{children:"<iframe>"})}),' tag, which allows you to embed an HTML page (i.e. "a website") on your HTML page (i.e. "your website").\nYou come across iframes all the time when using the web.\n(',(0,a.jsx)(n.em,{children:"That YouTube video on that news website you just visited? That's an iframe. That Facebook or Twitter post which was embedded on that blog? That could also be an iframe. They are all HTML website pages which are embedded on another HTML website page."}),")"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<iframe width="560" height="315" src="https://www.youtube.com/embed/GrOJkhIXifc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The code snippet above represent an actual ",(0,a.jsx)(n.code,{children:"<iframe>"})," tag. Adding this code snippet to the HTML of your website would embed ",(0,a.jsx)(n.a,{href:"https://www.youtube.com/embed/GrOJkhIXifc",children:"https://www.youtube.com/embed/GrOJkhIXifc"}),", which is a YouTube video.\nIf you opened this link, you would see that it is a YouTube video which fits the entire size of your browser window."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"iframe YouTube example",src:i(37615).A+"",title:"iframe YouTube example",width:"960",height:"720"})}),"\n",(0,a.jsxs)(n.p,{children:["As you can see, ",(0,a.jsx)(n.a,{href:"https://www.youtube.com/embed/GrOJkhIXifc",children:"the embedded page"}),' is quite different from the "',(0,a.jsx)(n.a,{href:"https://www.youtube.com/watch?v=GrOJkhIXifc",children:"real"}),'" YouTube page.\nWhen you design and develop a page which should be embedded through an ',(0,a.jsx)(n.code,{children:"<iframe>"}),", you optimize for this embedding use-case. Typically, your component (e.g. a video player) fills the entire browser window,\nand thus has a width and height of 100%. (You set the width and height of the ",(0,a.jsx)(n.code,{children:"<iframe>"})," on your page, as can be seen from the above code snippet.)"]}),"\n",(0,a.jsxs)(n.p,{children:["We won't go into the pros and cons of using an ",(0,a.jsx)(n.code,{children:"<iframe>"})," in this article. We do argue that you should try to avoid using iframes, because iframes can be ",(0,a.jsx)(n.a,{href:"https://www.blackburnlabs.com/iframe-evil/",children:"evil"})," and can cause ",(0,a.jsx)(n.a,{href:"https://www.ostraining.com/blog/webdesign/against-using-iframes",children:"usability issues"}),".\nFrom our experience, most services and companies are trying to phase out iframes, and are instead embedding JavaScript code to render the same result."]}),"\n",(0,a.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsxs)(n.p,{children:["When embedding THEOplayer through an ",(0,a.jsx)(n.code,{children:"<iframe>"})," tag, you need to do a couple of things:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#allowing-embedding",children:"Allow embedding"}),": you need to use the THEOplayer API to allow for embedding."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#enabling-fullscreen-and-other-features",children:"Enable fullscreen (and other features)"}),": you might want to use the HTML API to allow certain features like fullscreen and autoplay."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#deciding-approaches",children:"Decide approach"}),": you need to decide on a strategy on how to dynamically load content."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#considering-limitations",children:"Consider limitations"}),": you need to be aware of the constraints and how to address them."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#adjusting-ui-and-ux",children:"Adjust UI and UX"}),": you need to style your iframe tag."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"allowing-embedding",children:"Allowing embedding"}),"\n",(0,a.jsxs)(n.p,{children:["You can easily allow embedding by setting the ",(0,a.jsx)(n.code,{children:"isEmbeddable"}),"-flag in the THEOplayer's ",(0,a.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/PlayerConfiguration.html",children:(0,a.jsx)(n.code,{children:"PlayerConfiguration"})})," to ",(0,a.jsx)(n.code,{children:"true"}),", as demonstrated by the code snippet below."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'let playerConfiguration = {\n  // ...\n  libraryLocation: "</path-to-library>/",\n  license: "your-license-here",\n  isEmbeddable: true\n  // ...\n};\nlet player = new THEOplayer.Player(element, playerConfiguration);\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Embedding THEOplayer through an ",(0,a.jsx)(n.code,{children:"<iframe>"})," tag is disabled by default. Why?"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Your THEOplayer license (i.e. your THEOplayer Web SDK) has a set of whitelisted domains. Typically, you only whitelist domains where you deploy THEOplayer. Deploying your THEOplayer SDK on a non-whitelisted domain would result in a license error.\nThus, you need to specify that a page which contains your THEOplayer Web SDK, may be embedded. You do not need to whitelist every domain which embeds your ",(0,a.jsx)(n.code,{children:"<iframe>"})," tag."]}),"\n",(0,a.jsxs)(n.li,{children:["When embedding is allowed, and if third-party websites are embedding your THEOplayer video player,\nthen those parties generate additional video views and impressions for your license. (Remember: THEOplayer charges you by the number of impressions.)\nAdditionally, if your ",(0,a.jsx)(n.a,{href:"#deciding-approaches",children:"iframe approach"})," allows people to specify the video URL through the ",(0,a.jsx)(n.code,{children:"<iframe>"})," tag, then third-parties could\npotentially piggyback for free on your (commercial) license if they reverse-engineer your approach."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"enabling-fullscreen-and-other-features",children:"Enabling fullscreen and other features"}),"\n",(0,a.jsxs)(n.p,{children:["If you want to allow your viewers to open your iframe in fullscreen, then you must explicitly enable the ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-allowfullscreen",children:(0,a.jsx)(n.code,{children:"allowfullscreen"})}),"-attribute."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<iframe\n  src="player.html"\n  frameborder="0"\n  scrolling="no"\n  width="100%"\n  height="100%"\n  allowfullscreen=""\n>\n</iframe>\n'})}),"\n",(0,a.jsxs)(n.p,{children:["On top of this, you want to configure the ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-allow",children:(0,a.jsx)(n.code,{children:"allow"})}),"-attribute and track its evolution."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<iframe\n  src="player.html"\n  frameborder="0"\n  scrolling="no"\n  width="100%"\n  height="100%"\n  allow="accelerometer; autoplay; encrypted-media; fullscreen; gyroscope; picture-in-picture"\n  allowfullscreen=""\n>\n</iframe>\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Through this attribute, you can allow your iframe to access a set of ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy#Directives",children:"features"}),",\nlike autoplay, Picture-in-Picture, DRM, and more."]}),"\n",(0,a.jsx)(n.h3,{id:"deciding-approaches",children:"Deciding approaches"}),"\n",(0,a.jsxs)(n.p,{children:["The previous section explains how you can make THEOplayer compatible with an ",(0,a.jsx)(n.code,{children:"<iframe>"}),", but it doesn't explain the possible approaches for loading content and configurations.\nWhat do we mean with this? When you are embedding THEOplayer, you still need a mechanism to configure a stream URL and toggle settings like autoplay and mute.\nYou don't want to create one HTML page per stream and combination of settings. Instead, you want to be able to embed one HTML page which is capable of dynamically configuring your stream and settings."]}),"\n",(0,a.jsx)(n.p,{children:"There are at least three approaches to pass along your stream URL and settings:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Direct"}),": you pass along your stream URL and settings directly through the iframe URL and/or query parameters of the iframe URL.\nFor example, your iframe URL could be similar to ",(0,a.jsx)(n.code,{children:"https://cdn.theoplayer.com/demos/iframe/theoplayer.html?autoplay=false&muted=false&preload=none&src=//cdn.theoplayer.com/video/elephants-dream/playlist.m3u8"}),".\nOn your iframe page, you (",(0,a.jsx)(n.em,{children:"i.e. either your front-end or back-end"}),") would read out these four query parameters (or GET parameters), and then use those values to set up your THEOplayer instance and configure your stream URL and settings."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Indirect"}),": you pass along an identifier through the iframe URL and/or query parameters of the iframe URL. For example, your iframe URL could be similar to ",(0,a.jsx)(n.code,{children:"https://cdn.theoplayer.com/demos/iframe/video-123"}),".\nOn your iframe page, you would read out this identifier (e.g. ",(0,a.jsx)(n.code,{children:"video-123"}),"), and do a call to a content management system (CMS) requesting data matching your identifier. This CMS would then return the actual stream URL and settings. You use this response to set up your THEOplayer instance and configure your stream URL and settings."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Hybrid"}),": you pass along your stream URL indirectly or directly, and your settings directly or indirectly.\nFor example, your iframe URL could be similar to ",(0,a.jsx)(n.code,{children:"https://cdn.theoplayer.com/demos/iframe/video-123?autoplay=false&muted=false&preload=none"}),".\nOn your iframe page, you would read out this identifier and the query parameters, and use the identifier to fetch the stream URL through a CMS, but configure your settings through the values of your query parameters."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Every approach has its trade-offs. Using a CMS is useful to avoid third-parties from loading their own streams through your iframe setup, but it does require you to spend resources on a CMS."}),"\n",(0,a.jsx)(n.h3,{id:"considering-limitations",children:"Considering limitations"}),"\n",(0,a.jsxs)(n.p,{children:["As hinted in the ",(0,a.jsx)(n.a,{href:"#iframe",children:"<iframe>"}),"-section, using iframes can incur some limitations. Some of those limitations can be addressed,\nand some of those cannot due to technological platform constraints."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/documentation/pr-preview/pr-144/theoplayer/v6/faq/why-does-fullscreen-not-behave-as-expected-on-ios",children:"Fullscreen might not work on iOS"}),": you can fix this."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/documentation/pr-preview/pr-144/theoplayer/v6/faq/why-is-video-not-playing-automatically",children:"Autoplay might not work"}),": you can fix this."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/documentation/pr-preview/pr-144/theoplayer/v6/faq/why-does-chromecast-not-work-on-ios-chrome",children:"Chromecast does not work on iOS"}),": you cannot address this."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/documentation/pr-preview/pr-144/theoplayer/v6/faq/why-visibilty-api-doesnt-work-in-iframe-on-safari-and-ie11",children:"The Visibility API does not work on IE11 and Safari"}),": you cannot address this on IE11."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/documentation/pr-preview/pr-144/theoplayer/v6/how-to-guides/miscellaneous/picture-in-picture#code-examples",children:"Picture-in-Picture does not work as expected"}),": you can address this by using native Picture-in-Picture instead, or by building a similar feature which creates a floating iframe component."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"adjusting-ui-and-ux",children:"Adjusting UI and UX"}),"\n",(0,a.jsxs)(n.p,{children:["Styling the ",(0,a.jsx)(n.code,{children:"<iframe>"})," element on your page, and the actual page behind the ",(0,a.jsx)(n.code,{children:"<iframe>"}),", can be a challenge.\nAdditionally, you may want to alter your user experience by implementing messaging between your page and the embed page."]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#styling-iframe",children:"Styling <iframe>"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#styling-embedded-page",children:"Styling embedded page"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#communication-between-parent-page-and-embedded-page",children:"Communication between parent page and embedded page"})}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"styling-iframe",children:"Styling <iframe>"}),"\n",(0,a.jsxs)(n.p,{children:["Styling your ",(0,a.jsx)(n.code,{children:"<iframe>"})," element is a breeze if you're using a fixed width and height: you can directly configure those through the ",(0,a.jsx)(n.code,{children:"width"})," and ",(0,a.jsx)(n.code,{children:"height"})," attributes as demonstrated below."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<iframe\n  src="player.html"\n  frameborder="0"\n  scrolling="no"\n  width="800px"\n  height="450px"\n  allowfullscreen=""\n>\n</iframe>\n'})}),"\n",(0,a.jsxs)(n.p,{children:["However, more common is to rely on responsive styling, and not knowing your specific width and height. On top of wanting a responsive iframe, you usually want to respect the aspect ratio of your video.\nBasically, you want your ",(0,a.jsx)(n.code,{children:"<iframe>"})," container to automatically -and appropriately- scale when the size of your browser window changes."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<iframe\n  src="player.html"\n  frameborder="0"\n  scrolling="no"\n  width="100%"\n  style="width:100%;aspect-ratio:16/9"\n>\n</iframe>\n'})}),"\n",(0,a.jsx)(n.p,{children:"The above snippet demonstrates how you can achieve this."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["You want to set an ",(0,a.jsx)(n.code,{children:"aspect-ratio"})," in the ",(0,a.jsx)(n.code,{children:"style"})," of your ",(0,a.jsx)(n.code,{children:"<iframe>"})," element. We've used ",(0,a.jsx)(n.code,{children:"16/9"})," for a 16:9 aspect ratio, but you can change this to e.g. ",(0,a.jsx)(n.code,{children:"4/3"})," for a 4:3 video."]}),"\n",(0,a.jsxs)(n.li,{children:["You want to disable the border around your iframe by specifying ",(0,a.jsx)(n.code,{children:'frameborder="0"'})," and disable scrolling by specifying ",(0,a.jsx)(n.code,{children:'scrolling="no"'}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["You want to maximize the width of your iframe by specifying ",(0,a.jsx)(n.code,{children:'width="100%"'}),". The height will be computed automatically based on the ",(0,a.jsx)(n.code,{children:"aspect-ratio"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Of course, rather than using inline styling through the ",(0,a.jsx)(n.code,{children:"style"})," attribute, you could also achieve the same through CSS.\nAnd, of course: this is not the only way to style your iframe element, but just one of the many ways."]}),"\n",(0,a.jsx)(n.h4,{id:"styling-embedded-page",children:"Styling embedded page"}),"\n",(0,a.jsx)(n.p,{children:"You usually want your video player to fit the full width and height of your browser window, because it should fill the entire iframe container element."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<html>\n  <head>\n    <meta\n      name="viewport"\n      content="width=device-width, initial-scale=1, shrink-to-fit=no"\n    />\n    <meta http-equiv="x-ua-compatible" content="ie=edge" />\n    <style>\n      html,\n      body {\n        margin: 0;\n        padding: 0;\n        width: 100%;\n        height: 100%;\n      }\n\n      .theoplayer-container {\n        width: 100%;\n        height: 100%;\n      }\n    </style>\n  </head>\n  <body>\n    <div class="theoplayer-container video-js theoplayer-skin"></div>\n  </body>\n</html>\n'})}),"\n",(0,a.jsx)(n.p,{children:"The above snippet demonstrates a way to achieve this."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["You want to remove all padding and margin, and give your document a ",(0,a.jsx)(n.code,{children:"width"})," and ",(0,a.jsx)(n.code,{children:"height"})," of 100%."]}),"\n",(0,a.jsxs)(n.li,{children:["You want your video player container, the ",(0,a.jsx)(n.code,{children:"<div>"})," in the above snippet, to fill the entire document by setting its ",(0,a.jsx)(n.code,{children:"width"})," and ",(0,a.jsx)(n.code,{children:"height"})," to 100%."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"communication-between-parent-page-and-embedded-page",children:"Communication between parent page and embedded page"}),"\n",(0,a.jsx)(n.p,{children:"You may have a need for messaging between your parent page and your embedded page."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"If your video or ad break ends, you want to hide (or destroy) the iframe container on your parent page."}),"\n",(0,a.jsx)(n.li,{children:"If someone clicks a control button in your video player, you may want to know about this action in your parent page."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["You can achieve this with cross-document messaging and the ",(0,a.jsx)(n.code,{children:"postMessage"})," API. Please refer to the resources below to learn more on this:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://stackoverflow.com/questions/9153445/how-to-communicate-between-iframe-and-the-parent-site",children:"Stackoverflow.com: how to communicate between iframe and the parent side"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage",children:"MDN: postMessage"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://javascript.info/cross-window-communication",children:"JavaScript.info: cross-window communication"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"demo",children:"Demo"}),"\n",(0,a.jsxs)(n.p,{children:["The video player below this paragraph is embedded through an ",(0,a.jsx)(n.code,{children:"<iframe>"})," tag."]}),"\n",(0,a.jsx)("iframe",{src:"https://cdn.theoplayer.com/demos/iframe/theoplayer.html?autoplay=false&muted=false&preload=none&src=//cdn.theoplayer.com/video/elephants-dream/playlist.m3u8",title:"Embedded THEOplayer",frameBorder:"0",scrolling:"no",width:"100%",style:{width:"100%",aspectRatio:"16/9"},allow:"accelerometer; autoplay; encrypted-media; fullscreen; gyroscope; picture-in-picture",allowFullScreen:!0}),"\n",(0,a.jsx)(n.p,{children:'We selected the "direct approach" by leveraging query parameters, as demonstrated by the code snippet below.'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<iframe\n  src="https://cdn.theoplayer.com/demos/iframe/theoplayer.html?autoplay=false&muted=false&preload=none&src=//cdn.theoplayer.com/video/elephants-dream/playlist.m3u8"\n  title="Embedded THEOplayer"\n  frameborder="0"\n  scrolling="no"\n  width="100%"\n  style="width:100%;aspect-ratio:16/9"\n  allow="accelerometer; autoplay; encrypted-media; fullscreen; gyroscope; picture-in-picture"\n  allowfullscreen=""\n>\n</iframe>\n'})}),"\n",(0,a.jsxs)(n.p,{children:["If we had configured a different ",(0,a.jsx)(n.code,{children:"src"}),"-value, like ",(0,a.jsx)(n.code,{children:"https://cdn.theoplayer.com/demos/iframe/theoplayer.html?autoplay=false&muted=false&preload=none&src=//cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8"}),", then it would have loaded a different video.\nNote that unmuted autoplay may not be possible, and that you may have to ",(0,a.jsx)(n.a,{href:"/documentation/pr-preview/pr-144/theoplayer/v6/faq/how-to-combat-autoplay-policies",children:"combat autoplay policies"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["You can see the code of the iframe HTML page at ",(0,a.jsx)(n.a,{href:"https://cdn.theoplayer.com/demos/iframe/theoplayer.html",children:"https://cdn.theoplayer.com/demos/iframe/theoplayer.html"}),", or in the code snippet below."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<html>\n  <head>\n    <meta\n      name="viewport"\n      content="width=device-width, initial-scale=1, shrink-to-fit=no"\n    />\n    <meta http-equiv="x-ua-compatible" content="ie=edge" />\n    <link\n      rel="stylesheet"\n      type="text/css"\n      href="/path/to/libraryLocation/ui.css"\n    />\n    <script src="/path/to/libraryLocation/THEOplayer.js"><\/script>\n    <style>\n      html,\n      body {\n        margin: 0;\n        padding: 0;\n        width: 100%;\n        height: 100%;\n      }\n\n      .theoplayer-container {\n        width: 100%;\n        height: 100%;\n      }\n    </style>\n  </head>\n  <body>\n    <div class="theoplayer-container video-js theoplayer-skin"></div>\n    <script>\n      // https://stackoverflow.com/a/901144/588833\n      // function to get URL query parameters by name\n      function getParameterByName(name, url) {\n        if (!url) url = window.location.href;\n        name = name.replace(/[\\[\\]]/g, "\\\\$&");\n        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),\n          results = regex.exec(url);\n        if (!results) return null;\n        if (!results[2]) return "";\n        return decodeURIComponent(results[2].replace(/\\+/g, " "));\n      }\n\n      // initialize THEOplayer instance\n      var element = document.querySelector(".theoplayer-container");\n      var player = new THEOplayer.Player(element, {\n        libraryLocation: "/path/to/libraryLocation/",\n        license: "your-license-here",\n        ui: {\n          width: "100%",\n          height: "100%"\n        },\n        isEmbeddable: true\n      });\n\n      // get query parameter values\n      var autoplay =\n        getParameterByName("autoplay") &&\n        getParameterByName("autoplay") == "true";\n      var muted =\n        getParameterByName("muted") && getParameterByName("muted") == "true";\n      var preload = getParameterByName("preload");\n      var src = getParameterByName("src");\n\n      // set settings and stream URL\n      player.autoplay = autoplay;\n      player.muted = muted;\n      player.preload = preload;\n      player.src = src;\n    <\/script>\n  </body>\n</html>\n'})}),"\n",(0,a.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/PlayerConfiguration.html",children:"Player API - PlayerConfiguration"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://cdn.theoplayer.com/demos/iframe/theoplayer.html?autoplay=false&muted=false&preload=none&src=//cdn.theoplayer.com/video/elephants-dream/playlist.m3u8",children:"iframe demo code"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/documentation/pr-preview/pr-144/theoplayer/v6/getting-started/frameworks/amp/getting-started",children:"AMP"})," (consider translating your learning to the AMP framework)"]}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe",children:"MDN: iframe"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://ottball.com/lazy-loading-video/#embedded-players",children:"ottball.com: lazy loading"})," (consider lazy loading for your iframes)"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},37615:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/iframe-youtube-example-6ca52c8e328a867b3160d2e231adcd7a.png"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>s});var a=i(96540);const r={},t=a.createContext(r);function o(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);