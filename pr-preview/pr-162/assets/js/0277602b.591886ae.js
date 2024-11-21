"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["8152"],{13492:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>h,assets:()=>o,toc:()=>d,frontMatter:()=>l});var s=JSON.parse('{"id":"tips-and-tricks","title":"Tips and Tricks","description":"This article will provide some dos and don\'ts and some general information on how to write documentation in Markdown.","source":"@site/contributing/tips-and-tricks.md","sourceDirName":".","slug":"/tips-and-tricks","permalink":"/documentation/pr-preview/pr-162/contributing/tips-and-tricks","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/contributing/tips-and-tricks.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"toc_max_heading_level":2},"sidebar":"contributionGuidelines","previous":{"title":"Writing documentation","permalink":"/documentation/pr-preview/pr-162/contributing/writing-documentation/"},"next":{"title":"FAQ","permalink":"/documentation/pr-preview/pr-162/contributing/guidelines/faq"}}'),t=i("85893"),a=i("50065");let l={sidebar_position:2,toc_max_heading_level:2},r="Tips and Tricks",o={},d=[{value:"Markdown",id:"markdown",level:2},{value:"Naming convention directories and files",id:"naming-convention-directories-and-files",level:2},{value:"A file should ALWAYS start with the article title",id:"a-file-should-always-start-with-the-article-title",level:2},{value:"Always use backticks when using HTML tags",id:"always-use-backticks-when-using-html-tags",level:2},{value:"Using links",id:"using-links",level:2},{value:"Using anchor links",id:"using-anchor-links",level:2},{value:"Using images",id:"using-images",level:2},{value:"Rules when inserting code blocks",id:"rules-when-inserting-code-blocks",level:2},{value:"Web SDK",id:"web-sdk",level:3},{value:"Android SDK",id:"android-sdk",level:3},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:3}];function c(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"tips-and-tricks",children:"Tips and Tricks"})}),"\n",(0,t.jsx)(n.p,{children:"This article will provide some dos and don'ts and some general information on how to write documentation in Markdown."}),"\n",(0,t.jsx)(n.h2,{id:"markdown",children:"Markdown"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A cheat sheet will all the Markdown features"})," can be\nfound ",(0,t.jsx)(n.a,{href:"https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet",children:"here"}),".\nAn overview of Markdown features ",(0,t.jsx)(n.strong,{children:"specific to Docusaurus"})," can be\nfound ",(0,t.jsx)(n.a,{href:"https://docusaurus.io/docs/markdown-features",children:"here"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If you're using Visual Code to write markdown files,\ninstall this ",(0,t.jsx)(n.strong,{children:"great extension"}),":\n",(0,t.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one",children:"Markdown All in One"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"naming-convention-directories-and-files",children:"Naming convention directories and files"}),"\n",(0,t.jsx)(n.p,{children:"The order of the articles in the sidebar can be set in two ways:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.a,{href:"https://docusaurus.io/docs/sidebar/autogenerated#doc-item-metadata",children:["Using the ",(0,t.jsx)(n.code,{children:"sidebar_position"})," attribute in the front matter of your article."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"---\nsidebar_position: 2\n---\n\n# Title of the Article\n\n...\nContent\n...\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://docusaurus.io/docs/sidebar/autogenerated#using-number-prefixes",children:"Using a numeric prefix in the article's file name."})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Template: ",(0,t.jsx)(n.code,{children:"category/xx-directory/yy-directory/zz-article-title.md"}),", with:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"xx"}),", ",(0,t.jsx)(n.code,{children:"yy"}),", ",(0,t.jsx)(n.code,{children:"zz"})," being numbers, and"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"category"})," being 'knowledge-base', 'getting-started', 'how-to-guides' or 'faq'. Categories ",(0,t.jsx)(n.strong,{children:"don't"})," need a\nnumerical prefix."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Example: A file that should show up in ",(0,t.jsx)(n.em,{children:"Getting Started > SDKs > Web > Getting started on Web"}),", will have the\nfollowing path:",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"getting-started/01-sdks/01-web/00-getting-started.md"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsxs)(n.p,{children:["Using a numeric prefix is discouraged for new articles. When we need to change an article's position, we also need to\nupdate ",(0,t.jsx)(n.em,{children:"all internal links"})," to that article."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",metastring:'title="faq/some-article.md"',children:"- See this [other article](../04-other-article.md)\n+ See this [other article](../05-other-article.md)\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"a-file-should-always-start-with-the-article-title",children:"A file should ALWAYS start with the article title"}),"\n",(0,t.jsx)(n.p,{children:"The first line of each document should contain a hashtag (#), followed with the title of the article. Documents that\ndon't follow this approach will be rejected!"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"# Title of the Article\n\n...\nContent\n...\n"})}),"\n",(0,t.jsx)(n.h2,{id:"always-use-backticks-when-using-html-tags",children:"Always use backticks when using HTML tags"}),"\n",(0,t.jsxs)(n.p,{children:["When using HTML tags like ",(0,t.jsx)(n.code,{children:"<p>Some example</p>"}),", ",(0,t.jsx)(n.code,{children:"<video>"}),",... always surround them with backticks ",(0,t.jsx)(n.code,{children:"`like this`"}),".\nAlternatively, you can put a backslash before the opening ",(0,t.jsx)(n.code,{children:"<"}),", like this: ",(0,t.jsx)(n.code,{children:"\\<p>"})]}),"\n",(0,t.jsx)(n.p,{children:"If not, Docusaurus will try to interpret it like an HTML tag or React component, which probably won't render correctly."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"`<p>Some example</p>`\n\\<p>Another example\\</p>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"using-links",children:"Using links"}),"\n",(0,t.jsx)(n.p,{children:"You can define a link in Markdown as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"[this is a link](path-to-follow)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When linking to ",(0,t.jsx)(n.strong,{children:"another document"}),", use the ",(0,t.jsx)(n.strong,{children:"relative path"}),", including the file extension:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"[a relative link](../how-to-guides/01-ads/02-customizing-the-ad-overlay-text.md)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When linking to the ",(0,t.jsx)(n.strong,{children:"API reference"}),", use the ",(0,t.jsx)(n.strong,{children:"absolute path"})," along\nwith ",(0,t.jsxs)(n.a,{href:"https://docusaurus.io/docs/markdown-features/assets#static-assets",children:["the ",(0,t.jsx)(n.code,{children:"pathname://"})," protocol"]}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"[ChromelessPlayer](pathname:///theoplayer/v7/api-reference/web/classes/ChromelessPlayer.html#constructor)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When linking to an ",(0,t.jsx)(n.strong,{children:"external page"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"[link text](https://www.theoplayer.com)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"using-anchor-links",children:"Using anchor links"}),"\n",(0,t.jsxs)(n.p,{children:["When using anchor links: the link will look like ",(0,t.jsx)(n.code,{children:"#title-of-section"}),". ",(0,t.jsx)(n.strong,{children:"Anchor links should always be in lower case!"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Example:"})," we want to link to the section which has as title ",(0,t.jsx)(n.code,{children:"SDKs"}),", and one with title ",(0,t.jsx)(n.code,{children:"Code Examples"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"[Anchor link to SDKs](#sdks)\n[Anchor link to Code Examples](#code-examples)\n\n## SDKs\n\n...\n\n## Code Examples\n\n...\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can customize a header's anchor ID by adding ",(0,t.jsx)(n.code,{children:"{#anchor-name}"})," at the\nend (",(0,t.jsx)(n.a,{href:"https://docusaurus.io/docs/markdown-features/toc#heading-ids",children:"documentation"}),").\nThis can be useful if the heading is very long, or if the heading contains special characters."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"[Anchor link to connect with custom receiver application](#custom-receiver-app)\n\n## Connect with custom Chromecast Receiver application \\{#custom-receiver-app}\n\n...\n"})}),"\n",(0,t.jsx)(n.h2,{id:"using-images",children:"Using images"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"IMPORTANT:"})," the image name should NOT contain any spaces. If not following this rule, the image will not show up in\nGitHub. Example: ",(0,t.jsx)(n.code,{children:"my-image.png"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Images can be stored anywhere in the project. Conventionally, we put them in an ",(0,t.jsx)(n.code,{children:"assets"})," directory."]}),"\n",(0,t.jsxs)(n.p,{children:["To insert an image in a document, use the ",(0,t.jsx)(n.strong,{children:"relative path"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"An image will be shown below:\n\n![Alt text](../../assets/img/image-15.png)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"rules-when-inserting-code-blocks",children:"Rules when inserting code blocks"}),"\n",(0,t.jsx)(n.p,{children:"When inserting a code block, always specify the language you're using so the code gets highlighted correctly."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For Web, use ",(0,t.jsx)(n.code,{children:"```js"})]}),"\n",(0,t.jsxs)(n.li,{children:["For Android, use ",(0,t.jsx)(n.code,{children:"```java"})]}),"\n",(0,t.jsxs)(n.li,{children:["For iOS, use ",(0,t.jsx)(n.code,{children:"```swift"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"When you want to show code examples for different SDKs, make use of headings per SDK."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"Let's see some code examples for the various SDKs.\n\n### Web SDK\n\n```js\nfunction playingEventHandler(event) {\n  var adIsPlaying = player.ads.playing;\n  console.log('PLAYING', adIsPlaying ? 'Advertisement' : 'Content', event);\n}\n\nplayer.addEventListener('playing', playingEventHandler);\n```\n\n### Android SDK\n\n```java\nfinal EventListener<PlayingEvent> playingEventHandler = new EventListener<PlayingEvent>() {\n    @Override\n    public void handleEvent(PlayingEvent playingEvent) {\n        tpv.getPlayer().getAds().requestPlaying(new RequestCallback<Boolean>() {\n            @Override\n            public void handleResult(Boolean adIsPlaying) {\n                System.out.println(\"PLAYING \" + (adIsPlaying ? \"Advertisement\" : \"Content\"));\n            }\n        });\n    }\n};\ntpv.getPlayer().addEventListener(PlayerEventTypes.PLAYING, playingEventHandler);\n```\n\n### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)\n\n```swift\nself.eventListener = self.theoplayer.addEventListener(type: PlayerEventTypes.PLAYING) { [weak self] event in\n    self.theoplayer?.ads.requestPlaying() { (result, _) in\n        print(\"player.ads.playing = \", result!)\n    }\n}\n```\n"})}),"\n",(0,t.jsx)(n.p,{children:"Will result in:"}),"\n",(0,t.jsxs)(n.admonition,{title:"Result",type:"note",children:[(0,t.jsx)(n.p,{children:"Let's see some code examples for the various SDKs."}),(0,t.jsx)(n.h3,{id:"web-sdk",children:"Web SDK"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"function playingEventHandler(event) {\n  var adIsPlaying = player.ads.playing;\n  console.log('PLAYING', adIsPlaying ? 'Advertisement' : 'Content', event);\n}\n\nplayer.addEventListener('playing', playingEventHandler);\n"})}),(0,t.jsx)(n.h3,{id:"android-sdk",children:"Android SDK"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'final EventListener<PlayingEvent> playingEventHandler = new EventListener<PlayingEvent>() {\n    @Override\n    public void handleEvent(PlayingEvent playingEvent) {\n        tpv.getPlayer().getAds().requestPlaying(new RequestCallback<Boolean>() {\n            @Override\n            public void handleResult(Boolean adIsPlaying) {\n                System.out.println("PLAYING " + (adIsPlaying ? "Advertisement" : "Content"));\n            }\n        });\n    }\n};\ntpv.getPlayer().addEventListener(PlayerEventTypes.PLAYING, playingEventHandler);\n'})}),(0,t.jsx)(n.h3,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'self.eventListener = self.theoplayer.addEventListener(type: PlayerEventTypes.PLAYING) { [weak self] event in\n    self.theoplayer?.ads.requestPlaying() { (result, _) in\n        print("player.ads.playing = ", result!)\n    }\n}\n'})})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return l}});var s=i(67294);let t={},a=s.createContext(t);function l(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);