"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[94103],{23355:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=t(74848),i=t(28453),a=t(28774);const s={sidebar_position:0},l="Getting started on Web",o={id:"getting-started/sdks/web/getting-started",title:"Getting started on Web",description:"THEOplayer is the universal video player solution created by THEO Technologies.",source:"@site/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/01-web/00-getting-started.mdx",sourceDirName:"getting-started/01-sdks/01-web",slug:"/getting-started/sdks/web/getting-started",permalink:"/documentation/pr-preview/pr-149/theoplayer/v4/getting-started/sdks/web/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/01-web/00-getting-started.mdx",tags:[],version:"v4",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"web",previous:{title:"Introduction",permalink:"/documentation/pr-preview/pr-149/theoplayer/v4/web/"},next:{title:"Getting started on Web",permalink:"/documentation/pr-preview/pr-149/theoplayer/v4/getting-started/sdks/web/getting-started"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"THEOplayer SDK and license",id:"theoplayer-sdk-and-license",level:3},{value:"Basic setup",id:"basic-setup",level:2},{value:"Step 1: Set up an HTML file",id:"step-1-set-up-an-html-file",level:3},{value:"Step 2: Including the THEOplayer library",id:"step-2-including-the-theoplayer-library",level:3},{value:"THEOplayer JavaScript library",id:"theoplayer-javascript-library",level:4},{value:"THEOplayer CSS library",id:"theoplayer-css-library",level:4},{value:"Step 3: The video",id:"step-3-the-video",level:3},{value:"Create video player container",id:"create-video-player-container",level:4},{value:"Create THEOplayer instance",id:"create-theoplayer-instance",level:4},{value:"Configure video stream",id:"configure-video-stream",level:4},{value:"Step 4: The result",id:"step-4-the-result",level:3},{value:"Next steps",id:"next-steps",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"getting-started-on-web",children:"Getting started on Web"})}),"\n","\n",(0,r.jsx)(n.p,{children:"THEOplayer is the universal video player solution created by THEO Technologies.\nThe THEOplayer HTML5/Tizen/webOS SDK offers support for HLS, MPEG-DASH, advertisements, DRM and much more."}),"\n",(0,r.jsx)(n.admonition,{title:"NPM",type:"info",children:(0,r.jsxs)(n.p,{children:["THEOplayer v2.82.0 and above can be managed through NPM. Refer to ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/theoplayer",children:"https://www.npmjs.com/package/theoplayer"})," for more information."]})}),"\n",(0,r.jsx)(n.p,{children:"This article is your starting point if you are using THEOplayer for the first time.\nIt takes you through the required steps to achieve a basic manual implementation of the THEOplayer SDK on Web.\nThe outcome of this article is the template below."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <title>THEOplayer</title>\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <link rel="stylesheet" type="text/css" href="/path/to/ui.css" />\n  </head>\n  <body>\n    <div class="theoplayer-container video-js theoplayer-skin vjs-16-9"></div>\n    <script src="/path/to/THEOplayer.js"><\/script>\n    <script>\n      var element = document.querySelector(".theoplayer-container");\n      var player = new THEOplayer.Player(element, {\n        libraryLocation: "/path/to/your-theoplayer-folder/",\n        license: "your_license_string"\n      });\n      player.source = {\n        sources: [\n          {\n            src: "//cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8",\n            type: "application/x-mpegurl"\n          }\n        ]\n      };\n    <\/script>\n  </body>\n</html>\n'})}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"Before we can start using THEOplayer, you'll need a few things:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"A web server and domain name to host your code and provide access to viewers."}),"\n",(0,r.jsx)(n.li,{children:"A THEOplayer SDK and license to implement the THEOplayer library and access the THEOplayer API."}),"\n",(0,r.jsxs)(n.li,{children:["A video stream (e.g. an ",(0,r.jsx)(n.code,{children:".m3u8"})," or ",(0,r.jsx)(n.code,{children:".mpd"})," file) to show to your viewers through the THEOplayer API."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"theoplayer-sdk-and-license",children:"THEOplayer SDK and license"}),"\n",(0,r.jsx)(n.p,{children:"Acquiring a THEOplayer SDK and license takes three steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Sign up for ",(0,r.jsx)(n.a,{href:"https://portal.theoplayer.com",children:"https://portal.theoplayer.com"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Create a THEOplayer Web SDK."}),"\n",(0,r.jsxs)(n.li,{children:["Have your ",(0,r.jsx)(n.a,{href:"#sdkready",children:'"CDN URL" and "license string"'})," handy."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"basic-setup",children:"Basic setup"}),"\n",(0,r.jsx)(n.p,{children:"Now, we're ready to set up THEOplayer on your website. This guide explains how you implement THEOplayer in four steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["We'll ",(0,r.jsx)(n.a,{href:"#step-1-set-up-an-html-file",children:"start from a basic HTML file"}),", with no mention of THEOplayer."]}),"\n",(0,r.jsxs)(n.li,{children:["In the ",(0,r.jsx)(n.a,{href:"#step-2-including-the-theoplayer-library",children:"second step"}),", we'll explain what the THEOplayer library is and how you can include it.\nWe'll do the same for the default THEOplayer UI."]}),"\n",(0,r.jsxs)(n.li,{children:["In the ",(0,r.jsx)(n.a,{href:"#step-3-the-video",children:"third step"}),", we'll describe how you play a video stream through THEOplayer."]}),"\n",(0,r.jsxs)(n.li,{children:["In the ",(0,r.jsx)(n.a,{href:"#step-4-the-result",children:"fourth step"}),", we'll give a final overview."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"step-1-set-up-an-html-file",children:"Step 1: Set up an HTML file"}),"\n",(0,r.jsx)(n.p,{children:"When THEOplayer is used as a web video player, we will need a web page (i.e. HTML file) to embed THEOplayer and the code."}),"\n",(0,r.jsxs)(n.p,{children:["Note that a THEOplayer SDK license can only be used on whitelisted domains.\nYou configure these domains when you create a THEOplayer Web SDK at ",(0,r.jsx)(n.a,{href:"https://portal.theoplayer.com",children:"https://portal.theoplayer.com"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Let's start with the following HTML file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <title>THEOplayer</title>\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n  </head>\n  <body></body>\n</html>\n'})}),"\n",(0,r.jsx)(n.p,{children:"Next, we\u2019ll include the THEOplayer SDK."}),"\n",(0,r.jsx)(n.h3,{id:"step-2-including-the-theoplayer-library",children:"Step 2: Including the THEOplayer library"}),"\n",(0,r.jsx)(n.p,{children:"To access the THEOplayer API and default UI, you must first include the THEOplayer library files.\nThe JavaScript library exposes the THEOplayer API and the CSS library contains the default UI."}),"\n",(0,r.jsx)(n.h4,{id:"theoplayer-javascript-library",children:"THEOplayer JavaScript library"}),"\n",(0,r.jsx)(n.p,{children:"The following line includes the THEOplayer JavaScript library, and gives you access to the THEOplayer API."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<script src="/path/to/THEOplayer.js"><\/script>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"<script>"})," tag can include an external JavaScript library on a web page.\nIn this case we use it to include the THEOplayer library."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"src"})," attribute is the URI of the THEOplayer library that you wish to use. This could be something like: ",(0,r.jsx)(n.code,{children:"/path/to/THEOplayer.js"}),", where the URL is a link to your THEOplayer.js file."]}),"\n",(0,r.jsx)(a.A,{id:"sdkready"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"SDK ready",src:t(90741).A+"",width:"2880",height:"1338"})}),"\n",(0,r.jsxs)(n.p,{children:["You must swap ",(0,r.jsx)(n.code,{children:"/path/to/"})," with your CDN URL.\nIf your SDK was the one above, then you'd include the following instead ",(0,r.jsx)(n.code,{children:"<script>"})," tag instead."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<script src="https://cdn.myth.theoplayer.com/55d71743-4924-4d1b-8440-78f9cd103879/THEOplayer.js"><\/script>\n'})}),"\n",(0,r.jsx)(n.h4,{id:"theoplayer-css-library",children:"THEOplayer CSS library"}),"\n",(0,r.jsx)(n.p,{children:"To use the default THEOplayer UI, you need to reference the THEOplayer CSS library:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<link rel="stylesheet" type="text/css" href="/path/to/ui.css" />\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"<link>"})," tag includes a CSS file on a web page.\nSimilar to the JavaScript library, you must swap ",(0,r.jsx)(n.code,{children:"/path/to/"})," with your CDN URL."]}),"\n",(0,r.jsx)(n.p,{children:"Next, we\u2019ll create a THEOplayer instance and configure a video stream."}),"\n",(0,r.jsx)(n.h3,{id:"step-3-the-video",children:"Step 3: The video"}),"\n",(0,r.jsx)(n.p,{children:"To play a video through the THEOplayer Web SDK, you must:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Create a video player container,"}),"\n",(0,r.jsx)(n.li,{children:"fetch this container through JavaScript,"}),"\n",(0,r.jsx)(n.li,{children:"create a THEOplayer instance associated with that container,"}),"\n",(0,r.jsx)(n.li,{children:"and configure a video stream for this instance."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The snippet below implements these 4 steps."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<div class="theoplayer-container video-js theoplayer-skin vjs-16-9"></div>\n<script src="/path/to/THEOplayer.js"><\/script>\n<script>\n  var element = document.querySelector(".theoplayer-container"); // fetch THEOplayer container div\n\n  var player = new THEOplayer.Player(element, {\n    // instantiates video player\n    libraryLocation: "/path/to/your-theoplayer-folder/", // references folder containing your THEOplayer library files (theoplayer.p.js, THEOplayer.js, ...)\n    license: "your_license_string" // references your THEOplayer SDK license\n  });\n\n  // HLS\n  player.source = {\n    sources: [\n      {\n        src: "//cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8", // sets HLS source\n        type: "application/x-mpegurl" // sets type to HLS\n      }\n    ]\n  };\n\n  // DASH\n  // player.source = {\n  //     sources : [{\n  //         src : \'//amssamples.streaming.mediaservices.windows.net/634cd01c-6822-4630-8444-8dd6279f94c6/CaminandesLlamaDrama4K.ism/manifest(format=mpd-time-csf)\', // sets DASH source\n  //         type : \'application/dash+xml\' // sets type to MPEG-DASH\n  //     }]\n  // };\n<\/script>\n'})}),"\n",(0,r.jsx)(n.p,{children:"Let's break down the above snippet."}),"\n",(0,r.jsx)(n.h4,{id:"create-video-player-container",children:"Create video player container"}),"\n",(0,r.jsxs)(n.p,{children:["This ",(0,r.jsx)(n.code,{children:"<div>"})," element creates a video player container."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<div class="theoplayer-container video-js theoplayer-skin vjs-16-9"></div>\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"theoplayer-container"})," class is used to fetch the container through JavaScript, as demonstrated by the snippet below."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"video-js theoplayer-skin vjs-16-9"})," classes load the default THEOplayer UI. You may omit ",(0,r.jsx)(n.code,{children:"vjs-16-9"})," if you don't want a 16:9 container."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'var element = document.querySelector(".theoplayer-container");\n'})}),"\n",(0,r.jsx)(n.h4,{id:"create-theoplayer-instance",children:"Create THEOplayer instance"}),"\n",(0,r.jsxs)(n.p,{children:["The snippet below creates a THEOplayer instance for a container with a specific ",(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerConfiguration.html",children:"Player Configuration"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'var player = new THEOplayer.Player(element, {\n  // instantiates video player\n  libraryLocation: "/path/to/your-theoplayer-folder/", // references folder containing your THEOplayer library files (theoplayer.p.js, THEOplayer.js, ...)\n  license: "your_license_string" // references your THEOplayer SDK license\n});\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Similar to the JavaScript and CSS library, you must swap out ",(0,r.jsx)(n.code,{children:"'/path/to/your-theoplayer-folder/'"})," and ",(0,r.jsx)(n.code,{children:"'your_license_string'"}),".\nFor example, for the ",(0,r.jsx)(n.a,{href:"#sdkready",children:"previously shown screenshot"})," representing your SDK,\nyou would instead configure the snippet below:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'var player = new THEOplayer.Player(element, {\n  libraryLocation:\n    "https://cdn.myth.theoplayer.com/55d71743-4924-4d1b-8440-78f9cd103879/",\n  license:\n    "sZP7IYe6T6PeCl0iCSbrI6klIQf_FSaZ3Le-TSez0mzoIDat3DarTSIlCSb6FOPlUY3zWokgbgjNIOf9fKaZTux10LUlFDXgTSb-3QIg06k1IKhrFSBrISCo0QPeCo0i36fVfK4_bQgZCYxNWoryIQXzImf90SCZ3SfZ0u5i0u5i0Oi6Io4pIYP1UQgqWgjeCYxgflEc3l5r3u0k0Se_this_is_a_fake_license_string_1dDrLYtA1Ioh6TgV6UQ1gWtAVCYggb6rlWoz6FOPVWo31WQ1qbta6Ymi6IQj-CDgpbkjLWt4ZCoh6TgV6UQ1gWtAVCYggb6rlWoz6FOPVWo31WQ1qbta6FOfJfgzVfG3edt06TgV6dwx-Wuh6Ymi6bo4pIXjNWYAZIY3LdDjpflNzbG4gya"\n});\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You can read more about configuring the ",(0,r.jsx)(n.code,{children:"license"})," at the ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-149/theoplayer/v4/how-to-guides/license/introduction",children:"License section"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"configure-video-stream",children:"Configure video stream"}),"\n",(0,r.jsx)(n.p,{children:"The snippet below configures a HLS video stream for the THEOplayer instance."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'player.source = {\n  sources: [\n    {\n      src: "//cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8", // sets HLS source\n      type: "application/x-mpegurl" // sets type to HLS\n    }\n  ]\n};\n'})}),"\n",(0,r.jsxs)(n.p,{children:["To configure a DASH stream instead,\nyou must set ",(0,r.jsx)(n.code,{children:"type"})," to ",(0,r.jsx)(n.code,{children:"'application/dash+xml'"})," instead of ",(0,r.jsx)(n.code,{children:"'application/x-mpegurl'"}),",\nas demonstrated by commented out code in one of the earlier snippets."]}),"\n",(0,r.jsx)(n.p,{children:"In the next step we'll put everything together."}),"\n",(0,r.jsx)(n.h3,{id:"step-4-the-result",children:"Step 4: The result"}),"\n",(0,r.jsxs)(n.p,{children:["Use the snippet below on your web server,\nor experiment with it on an ",(0,r.jsx)(n.a,{href:"https://jsfiddle.net/thijsl/vxm08owd/3/",children:"online code playground"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <title>THEOplayer</title>\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <link rel="stylesheet" type="text/css" href="/path/to/ui.css" />\n  </head>\n  <body>\n    <div class="theoplayer-container video-js theoplayer-skin vjs-16-9"></div>\n    <script src="/path/to/THEOplayer.js"><\/script>\n    <script>\n      var element = document.querySelector(".theoplayer-container");\n      var player = new THEOplayer.Player(element, {\n        libraryLocation: "/path/to/your-theoplayer-folder/",\n        license: "your_license_string"\n      });\n      player.source = {\n        sources: [\n          {\n            src: "//cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8",\n            type: "application/x-mpegurl"\n          }\n        ]\n      };\n    <\/script>\n  </body>\n</html>\n'})}),"\n",(0,r.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,r.jsx)(n.p,{children:"Ready to learn more?"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Go through our ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-149/theoplayer/v4/how-to-guides/",children:"how-to guides"})," to learn about ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-149/theoplayer/v4/how-to-guides/ui/introduction",children:"UI customization"}),", ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-149/theoplayer/v4/how-to-guides/ads/introduction",children:"advertising"}),", ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-149/theoplayer/v4/how-to-guides/drm/introduction",children:"DRM"}),", ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-149/theoplayer/v4/how-to-guides/cast/chromecast/introduction",children:"casting"}),", ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-149/theoplayer/v4/how-to-guides/analytics/introduction",children:"analytics"})," and other topics."]}),"\n",(0,r.jsxs)(n.li,{children:["Check out our ",(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v4/api-reference/web/classes/ChromelessPlayer.html",children:"API reference"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Try out samples from our ",(0,r.jsx)(n.a,{href:"https://github.com/THEOplayer",children:"GitHub"}),"."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},90741:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/sdk-ready-f4092692d8f1b8231a5242d2ef9a5748.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(96540);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);