"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["3050"],{79160:function(e,t,r){r.r(t),r.d(t,{metadata:()=>s,contentTitle:()=>a,default:()=>p,assets:()=>l,toc:()=>d,frontMatter:()=>n});var s=JSON.parse('{"id":"getting-started/frameworks/wordpress/getting-started","title":"Getting started with WordPress","description":"WordPress is a popular CMS. Wikipedia writes that it was originally aimed at blogs,","source":"@site/theoplayer_versioned_docs/version-v6/getting-started/02-frameworks/07-wordpress/00-getting-started.md","sourceDirName":"getting-started/02-frameworks/07-wordpress","slug":"/getting-started/frameworks/wordpress/getting-started","permalink":"/documentation/pr-preview/pr-157/theoplayer/v6/getting-started/frameworks/wordpress/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/getting-started/02-frameworks/07-wordpress/00-getting-started.md","tags":[],"version":"v6","sidebarPosition":0,"frontMatter":{},"sidebar":"web","previous":{"title":"Getting started with AMP","permalink":"/documentation/pr-preview/pr-157/theoplayer/v6/getting-started/frameworks/amp/getting-started"},"next":{"title":"Getting started with Flutter","permalink":"/documentation/pr-preview/pr-157/theoplayer/v6/getting-started/frameworks/flutter/getting-started"}}'),o=r("85893"),i=r("50065");let n={},a="Getting started with WordPress",l={},d=[{value:"Selected approach",id:"selected-approach",level:2},{value:"Alternatives",id:"alternatives",level:3},{value:"Code Embed plugin",id:"code-embed-plugin",level:4},{value:"&lt;iframe&gt;",id:"iframe",level:4},{value:"Step-by-step guide",id:"step-by-step-guide",level:2},{value:"1. WordPress.org deployment",id:"1-wordpressorg-deployment",level:3},{value:"2. THEOplayer SDK",id:"2-theoplayer-sdk",level:3},{value:"3. Locate post or page",id:"3-locate-post-or-page",level:3},{value:"4. Include THEOplayer SDK",id:"4-include-theoplayer-sdk",level:3},{value:"5. Create container",id:"5-create-container",level:3},{value:"6. Configure video",id:"6-configure-video",level:3},{value:"Note",id:"note",level:2}];function c(e){let t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"getting-started-with-wordpress",children:"Getting started with WordPress"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://wordpress.org/",children:"WordPress"})," is a popular CMS. ",(0,o.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/WordPress",children:"Wikipedia"})," writes that it was originally aimed at blogs,\nbut nowadays it's leveraged for all sorts of use-cases. It's not uncommon to want to embed a video player on a WordPress website."]}),"\n",(0,o.jsxs)(t.p,{children:["This guide describes one approach to integrate the THEOplayer Web SDK in an open-source WordPress.org deployment by using ",(0,o.jsx)(t.em,{children:"Custom Code Blocks"})," and the ",(0,o.jsx)(t.em,{children:"Code Editor"}),".\nAs a developer, you can also opt for different approaches, as explained by ",(0,o.jsx)(t.a,{href:"https://webdesign.tutsplus.com/tutorials/how-to-add-custom-javascript-to-your-wordpress-site--cms-34368",children:"https://webdesign.tutsplus.com/tutorials/how-to-add-custom-javascript-to-your-wordpress-site--cms-34368"})," and ",(0,o.jsx)(t.a,{href:"https://www.wpbeginner.com/wp-tutorials/how-to-easily-add-javascript-in-wordpress-pages-or-posts/",children:"https://www.wpbeginner.com/wp-tutorials/how-to-easily-add-javascript-in-wordpress-pages-or-posts/"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Interested in our WordPress 5+ plugin? ",(0,o.jsx)(t.a,{href:"https://www.theoplayer.com/contact",children:"Reach out to us"})," if you want to evaluate this."]}),"\n",(0,o.jsx)(t.h2,{id:"selected-approach",children:"Selected approach"}),"\n",(0,o.jsxs)(t.p,{children:['We use "',(0,o.jsx)(t.a,{href:"https://wordpress.com/support/wordpress-editor/blocks/custom-html-block/",children:"Custom HTML blocks"}),'" and the "',(0,o.jsx)(t.a,{href:"https://wordpress.com/support/editors/",children:"Code Editor"}),'" as our approach. Both features are accessible by default in a fresh WordPress.org 5.5 installation.\nThis approach allows us to embed JavaScript and CSS libraries, as well as write unique JavaScript and HTML code for a specific page. Why is that relevant?\nWhen using the THEOplayer Web SDK, you use JavaScript to specify which video stream you want to configure, and typically you want to configure one (or more) unique streams per page.']}),"\n",(0,o.jsx)(t.h3,{id:"alternatives",children:"Alternatives"}),"\n",(0,o.jsx)(t.h4,{id:"code-embed-plugin",children:"Code Embed plugin"}),"\n",(0,o.jsxs)(t.p,{children:["You could use the ",(0,o.jsx)(t.a,{href:"https://wordpress.org/plugins/simple-embed-code/#description",children:"Code Embed plugin"})," because it allows you to embed unique JavaScript code per page (or post)."]}),"\n",(0,o.jsxs)(t.p,{children:["Other popular plugins, like ",(0,o.jsx)(t.a,{href:"https://wordpress.org/plugins/insert-headers-and-footers/",children:"Insert Headers and Footers"}),', allow you to insert code which\nis shared across all posts and pages. This is useful for tracker scripts or pixels (like Google Analytics), but less so for video players which should\nonly be integrated on some pages and with a unique video stream configured per page.\nYou could consider using a plugin like "Insert Headers and Footers" to load the THEOplayer JavaScript and CSS files (i.e. the SDK files) on every page,\nbut you typically still want to embed some unique JavaScript code per page to configure the unique video stream.']}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"We have no affiliation with these plugins or their creators. They were just the first applicable plugins which popped up when looking."})}),"\n",(0,o.jsx)(t.h4,{id:"iframe",children:"<iframe>"}),"\n",(0,o.jsxs)(t.p,{children:["You can embed THEOplayer through an ",(0,o.jsx)(t.code,{children:"<iframe>"}),' instead of through JavaScript.\nPlease refer to "',(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-157/theoplayer/v6/getting-started/sdks/web/how-can-we-embed-iframe",children:"How to embed an iframe"}),'" for more information on setting up an iframe.']}),"\n",(0,o.jsx)(t.h2,{id:"step-by-step-guide",children:"Step-by-step guide"}),"\n",(0,o.jsx)(t.h3,{id:"1-wordpressorg-deployment",children:"1. WordPress.org deployment"}),"\n",(0,o.jsxs)(t.p,{children:["You must have a valid WordPress.org deployment. We used WordPress version 5.5 in a ",(0,o.jsx)(t.a,{href:"https://skillcrush.com/blog/install-wordpress-mac/",children:"local MAMP set-up"})," when writing this article."]}),"\n",(0,o.jsx)(t.h3,{id:"2-theoplayer-sdk",children:"2. THEOplayer SDK"}),"\n",(0,o.jsxs)(t.p,{children:["You must have the THEOplayer Web SDK library files (",(0,o.jsx)(t.code,{children:"THEOplayer.js"}),", ",(0,o.jsx)(t.code,{children:"ui.css"}),", ...),\nor you must know how to refer to them and the ",(0,o.jsx)(t.code,{children:"libraryLocation"}),". You've read through our ",(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-157/theoplayer/v6/getting-started/sdks/web/getting-started",children:"Web SDK Getting Started Guide"}),",\nand you understand all of its content."]}),"\n",(0,o.jsx)(t.h3,{id:"3-locate-post-or-page",children:"3. Locate post or page"}),"\n",(0,o.jsx)(t.p,{children:"Navigate to the page where you want to integrate the THEOplayer Web SDK."}),"\n",(0,o.jsx)(t.h3,{id:"4-include-theoplayer-sdk",children:"4. Include THEOplayer SDK"}),"\n",(0,o.jsx)(t.p,{children:"First off, you want to include the THEOplayer CSS file and THEOplayer JavaScript file by adding the code below through a Custom HTML block."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:'<link rel="stylesheet" type="text/css" href="/path/to/libraryLocation/ui.css" />\n<script\n  type="text/javascript"\n  src="/path/to/libraryLocation/THEOplayer.js"\n><\/script>\n'})}),"\n",(0,o.jsxs)(t.p,{children:['The screenshot below shows you how to access such a "Custom HTML block".\n',(0,o.jsx)(t.img,{alt:"WordPress Custom HTML",src:r(24973).Z+"",title:"WordPres Custom HTML",width:"2880",height:"1638"})]}),"\n",(0,o.jsx)(t.h3,{id:"5-create-container",children:"5. Create container"}),"\n",(0,o.jsxs)(t.p,{children:["Create the HTML ",(0,o.jsx)(t.code,{children:"<div>"})," container which should load your video player instance."]}),"\n",(0,o.jsx)(t.p,{children:"Your Custom HTML block should now be similar to the code below."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:'<link rel="stylesheet" type="text/css" href="/path/to/libraryLocation/ui.css" />\n<script\n  type="text/javascript"\n  src="/path/to/libraryLocation/THEOplayer.js"\n><\/script>\n<div class="video-js vjs-16-9 theoplayer-container theoplayer-skin"></div>\n'})}),"\n",(0,o.jsxs)(t.p,{children:["You can set the CSS of this container directly in the ",(0,o.jsx)(t.code,{children:"<div>"})," tags by using ",(0,o.jsx)(t.code,{children:'<div style="height: ...">'}),", or you could\nadd additional CSS to your page."]}),"\n",(0,o.jsxs)(t.p,{children:["We added ",(0,o.jsx)(t.code,{children:"vjs-16-9"})," to the ",(0,o.jsx)(t.code,{children:'<div class="...'})," because we want THEOplayer to render in a 16:9 aspect ratio.\nSometimes, the CSS and styles of your WordPress theme might clash with THEOplayer's styling. It is your responsibility to\nidentify styling issues caused by your theme. For example, the CSS of our WordPress skin tried to meddle with the width\nof our container, so we manually unset it as demonstrated below."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:'<div\n  class="video-js vjs-16-9 theoplayer-container theoplayer-skin"\n  style="max-width: unset;"\n></div>\n'})}),"\n",(0,o.jsx)(t.h3,{id:"6-configure-video",children:"6. Configure video"}),"\n",(0,o.jsx)(t.p,{children:"Finally, you want to create your video player instance and configure a video stream for this player instance."}),"\n",(0,o.jsx)(t.p,{children:"You can achieve this by expanding your Custom HTML block to resemble the snippet below:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:'<link rel="stylesheet" type="text/css" href="/path/to/libraryLocation/ui.css" />\n<script\n  type="text/javascript"\n  src="/path/to/libraryLocation/THEOplayer.js"\n><\/script>\n<div\n  class="video-js vjs-16-9 theoplayer-container theoplayer-skin"\n  style="max-width: unset;"\n></div>\n<script>\n  var element = document.querySelector(".theoplayer-container");\n  var player = new THEOplayer.Player(element, {\n    libraryLocation: "/path/to/libraryLocation/",\n    license: "your-license-here"\n  });\n\n  player.source = {\n    sources: [\n      {\n        src: "//cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8",\n        type: "application/x-mpegurl"\n      }\n    ]\n  };\n<\/script>\n'})}),"\n",(0,o.jsxs)(t.p,{children:["All of this should result in a demo similar to the screenshot below.\n",(0,o.jsx)(t.img,{alt:"WordPress Demo Screenshot",src:r(71404).Z+"",title:"WordPres Demo Screenshot",width:"2880",height:"1800"})]}),"\n",(0,o.jsx)(t.h2,{id:"note",children:"Note"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Steps 4-6 are similar to our ",(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-157/theoplayer/v6/getting-started/sdks/web/getting-started",children:"Getting Started guide for Web SDK"})," so you might want to consider checking out that article as well."]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},24973:function(e,t,r){r.d(t,{Z:function(){return s}});let s=r.p+"assets/images/wordpress-custom-html-e361f80bf642a46a6cd838a1861b40c7.png"},71404:function(e,t,r){r.d(t,{Z:function(){return s}});let s=r.p+"assets/images/wordpress-demo-screenshot-66c62d8dd0af8248b95aa77aecfca088.png"},50065:function(e,t,r){r.d(t,{Z:function(){return a},a:function(){return n}});var s=r(67294);let o={},i=s.createContext(o);function n(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);