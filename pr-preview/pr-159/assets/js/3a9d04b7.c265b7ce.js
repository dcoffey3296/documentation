"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["13832"],{27083:function(e,t,o){o.r(t),o.d(t,{metadata:()=>n,contentTitle:()=>s,default:()=>h,assets:()=>r,toc:()=>c,frontMatter:()=>i});var n=JSON.parse('{"id":"external/web-ui/docs/guides/custom-ui","title":"Making a custom UI","description":"Build a custom player from scratch, starting from a basic player and gradually adding more features.","source":"@site/open-video-ui/external/web-ui/docs/guides/custom-ui.md","sourceDirName":"external/web-ui/docs/guides","slug":"/web/guides/custom-ui","permalink":"/documentation/pr-preview/pr-159/open-video-ui/web/guides/custom-ui","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/web-ui/blob/-/docs/guides/custom-ui.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"layout":"page","title":"Making a custom UI","permalink":"/guides/custom-ui","description":"Build a custom player from scratch, starting from a basic player and gradually adding more features.","sidebar_position":1,"slug":"/web/guides/custom-ui"},"sidebar":"web","previous":{"title":"How-to guides","permalink":"/documentation/pr-preview/pr-159/open-video-ui/web/guides"},"next":{"title":"Making a custom component","permalink":"/documentation/pr-preview/pr-159/open-video-ui/web/guides/custom-component"}}'),a=o("85893"),l=o("50065");let i={layout:"page",title:"Making a custom UI",permalink:"/guides/custom-ui",description:"Build a custom player from scratch, starting from a basic player and gradually adding more features.",sidebar_position:1,slug:"/web/guides/custom-ui"},s=void 0,r={},c=[{value:"A basic player",id:"a-basic-player",level:2},{value:"A mobile-ready player",id:"a-mobile-ready-player",level:2},{value:"More examples",id:"more-examples",level:2},{value:"Default UI",id:"default-ui",level:3},{value:"Nitflex theme",id:"nitflex-theme",level:3}];function d(e){let t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Although the default UI was designed to support a variety of usage scenarios, you may still run into a case that it doesn't handle very well. Perhaps you want to move some buttons around, or add like and dislike buttons to the control bar, or perhaps integrate a text chat component inside your player. In these situations, you may want to build a custom player UI to create a truly unique experience for your viewers."}),"\n",(0,a.jsx)(t.p,{children:"In this guide, you will build a custom player from scratch, starting from a basic player and gradually adding more features. Finally, we will look at some more complete examples of custom players, which you can use as reference for your own UI."}),"\n",(0,a.jsx)(t.h2,{id:"a-basic-player",children:"A basic player"}),"\n",(0,a.jsx)(t.p,{children:"We'll start by making the most basic player possible: one with just a play button."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<theoplayer-ui\n    configuration=\'{"libraryLocation":"/path/to/node_modules/theoplayer/","license":"your_theoplayer_license_goes_here"}\'\n    source=\'{"sources":{"src":"https://example.com/stream.m3u8"}}\'\n>\n    <theoplayer-play-button slot="centered-chrome"></theoplayer-play-button>\n</theoplayer-ui>\n'})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"<theoplayer-ui>"})," element is the main container of our custom UI. It handles creating and managing the underlying THEOplayer instance, using the ",(0,a.jsx)(t.code,{children:"configuration"})," and ",(0,a.jsx)(t.code,{children:"source"})," attributes set on the element."]}),"\n",(0,a.jsxs)(t.p,{children:["It also provides a skeleton layout for plugging in our playback controls, using ",(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots#adding_flexibility_with_slots",children:"slots"})," such as ",(0,a.jsx)(t.code,{children:'"top-chrome"'})," or ",(0,a.jsx)(t.code,{children:'"centered-chrome"'}),". We place a ",(0,a.jsx)(t.code,{children:"<theoplayer-play-button>"})," in the ",(0,a.jsx)(t.code,{children:'"centered-chrome"'})," slot, so it will appear in the center of our player."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Screenshot",src:o(47707).Z+"",width:"382",height:"214"})}),"\n",(0,a.jsxs)(t.p,{children:["Note that by default, the UI hides its controls when the user becomes inactive (i.e. does not interact with the player). If we want the play button to always remain visible, we can add a ",(0,a.jsx)(t.code,{children:"no-auto-hide"})," attribute to it:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<theoplayer-play-button slot="centered-chrome" no-auto-hide></theoplayer-play-button>\n'})}),"\n",(0,a.jsx)(t.p,{children:"We can add more components so the user can mute or seek the player, or go fullscreen."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<theoplayer-ui configuration="..." source="...">\n    <theoplayer-play-button slot="centered-chrome"></theoplayer-play-button>\n    <theoplayer-loading-indicator slot="centered-loading" no-auto-hide></theoplayer-loading-indicator>\n    <theoplayer-control-bar>\n        <theoplayer-time-range></theoplayer-time-range>\n    </theoplayer-control-bar>\n    <theoplayer-control-bar>\n        <theoplayer-mute-button></theoplayer-mute-button>\n        <theoplayer-time-display show-duration></theoplayer-time-display>\n        <span style="flex-grow: 1"></span>\n        <theoplayer-fullscreen-button></theoplayer-fullscreen-button>\n    </theoplayer-control-bar>\n</theoplayer-ui>\n'})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"<theoplayer-loading-indicator>"})," is a circular loading spinner that is automatically shown when the player is waiting for more data. It is placed in the ",(0,a.jsx)(t.code,{children:'"centered-loading"'})," slot, which appears in the center of the player but behind the ",(0,a.jsx)(t.code,{children:'"centered-chrome"'})," elements. The ",(0,a.jsx)(t.code,{children:"no-auto-hide"})," attribute ensures that it is visible even when all other controls are hidden."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"<theoplayer-control-bar>"})," is a horizontal container for playback controls. It's not required that all controls are inside a ",(0,a.jsx)(t.code,{children:"<theoplayer-control-bar>"}),", you can use any element such as a ",(0,a.jsx)(t.code,{children:"<div>"})," or a ",(0,a.jsx)(t.code,{children:"<section>"}),". This element does not have a ",(0,a.jsx)(t.code,{children:"slot"}),' attribute, so it is placed in the "default slot", at the bottom of the player.']}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"<theoplayer-time-range>"})," is a seek bar, showing the player's current position in the video, and allowing the user to seek to a different time."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"<theoplayer-mute-button>"})," is a button to mute or unmute the player's audio."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"<theoplayer-time-display>"})," is a text showing the player's current position in hours, minutes and seconds. By adding the ",(0,a.jsx)(t.code,{children:"show-duration"})," attribute, the text will also show the player's total video duration."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"<theoplayer-fullscreen-button>"})," is a button to make the player take up the entire screen."]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"<span>"})," with ",(0,a.jsx)(t.code,{children:"flex-grow: 1"}),' acts as a "spacer": it will stretch to fill the remaining space left by the other controls inside the ',(0,a.jsx)(t.code,{children:"<theoplayer-control-bar>"}),". This works because ",(0,a.jsx)(t.code,{children:"<theoplayer-control-bar>"})," is a flexbox container, i.e. it has ",(0,a.jsx)(t.code,{children:"display: inline-flex"}),". The result is that the ",(0,a.jsx)(t.code,{children:"<theoplayer-fullscreen-button>"})," will be aligned to the right side of the player."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Screenshot",src:o(71334).Z+"",width:"382",height:"214"})}),"\n",(0,a.jsx)(t.h2,{id:"a-mobile-ready-player",children:"A mobile-ready player"}),"\n",(0,a.jsx)(t.p,{children:"All components are designed to work great on all device types. However, sometimes you may want to make certain buttons a little bigger on mobile, or move them around a bit to make them easier to reach with the touch of a finger instead of the click of a mouse cursor."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"<theoplayer-ui>"})," adds a ",(0,a.jsx)(t.code,{children:"mobile"})," attribute to itself when it detects that the user is on a mobile device. You can use this attribute in your own CSS to change the size of all controls:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-css",children:"/* Make controls bigger */\ntheoplayer-ui[mobile] {\n    --theoplayer-control-height: 32px;\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"You can also use it to control the visibility of certain controls. To avoid having a CSS rule for each individual component, you can use a custom class or an attribute on those components instead:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-css",children:"/* Hide mobile-hidden elements on mobile, and mobile-only elements on desktop */\ntheoplayer-ui[mobile] [mobile-hidden],\ntheoplayer-ui:not([mobile]) [mobile-only] {\n    display: none !important;\n}\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<theoplayer-ui configuration="..." source="...">\n    \x3c!-- This centered play button will only be shown on mobile --\x3e\n    <theoplayer-play-button slot="centered-chrome" mobile-only></theoplayer-play-button>\n    <theoplayer-loading-indicator slot="centered-loading" no-auto-hide></theoplayer-loading-indicator>\n    <theoplayer-control-bar>\n        <theoplayer-time-range></theoplayer-time-range>\n    </theoplayer-control-bar>\n    <theoplayer-control-bar>\n        \x3c!-- This bottom play button will only be shown on desktop --\x3e\n        <theoplayer-play-button mobile-hidden></theoplayer-play-button>\n        <theoplayer-mute-button></theoplayer-mute-button>\n        <theoplayer-time-display show-duration></theoplayer-time-display>\n        <span style="flex-grow: 1"></span>\n        <theoplayer-fullscreen-button></theoplayer-fullscreen-button>\n    </theoplayer-control-bar>\n</theoplayer-ui>\n'})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.strong,{children:["Why do I need to add the styles for ",(0,a.jsx)(t.code,{children:"[mobile-hidden]"})," and ",(0,a.jsx)(t.code,{children:"[mobile-only]"})," to my own CSS?"]})}),"\n",(0,a.jsxs)(t.p,{children:["Due to limitations of the ",(0,a.jsx)(t.code,{children:"::slotted()"})," CSS selector, ",(0,a.jsx)(t.code,{children:"<theoplayer-ui>"}),"'s own CSS rules can only affect ",(0,a.jsx)(t.em,{children:"directly"})," slotted elements. Descendant elements of a slotted element, such as a ",(0,a.jsx)(t.code,{children:"<theoplayer-play-button mobile-hidden>"})," inside of a slotted ",(0,a.jsx)(t.code,{children:"<theoplayer-control-bar>"})," cannot be targeted by such selectors."]}),"\n"]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"center"},children:(0,a.jsx)(t.img,{alt:"Screenshot on desktop",src:o(58684).Z+"",width:"444",height:"249"})}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:(0,a.jsx)(t.img,{alt:"Screenshot on mobile",src:o(55762).Z+"",width:"444",height:"249"})})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Desktop"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Mobile"})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"more-examples",children:"More examples"}),"\n",(0,a.jsx)(t.h3,{id:"default-ui",children:"Default UI"}),"\n",(0,a.jsxs)(t.p,{children:["It may sound odd to mention the default UI when we're talking about custom UIs. But in fact, the default UI is built in ",(0,a.jsx)(t.em,{children:"exactly the same way"})," as a custom one!"]}),"\n",(0,a.jsx)(t.p,{children:"The default UI comes with all the bells and whistles that you'd expect from a fully-featured player: buttons to play or mute the video, a seek bar to seek through the video, menus to change the audio language and subtitles, and support for casting to Chromecast and AirPlay. It also has an adaptive layout that changes when used on desktop or on mobile, to provide the best experience for that device type."}),"\n",(0,a.jsxs)(t.p,{children:["Have a look at ",(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/web-ui/blob/main/src/DefaultUI.html",children:(0,a.jsx)(t.code,{children:"DefaultUI.html"})})," and ",(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/web-ui/blob/main/src/DefaultUI.css",children:(0,a.jsx)(t.code,{children:"DefaultUI.css"})})," to learn how the default layout is implemented, and perhaps copy some ideas for your own UI."]}),"\n",(0,a.jsx)(t.h3,{id:"nitflex-theme",children:"Nitflex theme"}),"\n",(0,a.jsx)(t.p,{children:'The "Nitflex" theme shows an example of a fully customized player UI, inspired by a popular streaming platform. It has a custom layout for its playback controls, custom colors to match the brand\'s style, and even custom icons for its buttons.'}),"\n",(0,a.jsxs)(t.p,{children:["Have a look at its ",(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/web-ui/blob/main/docs/static/open-video-ui/v1/examples/web/nitflex/demo.html",children:"HTML"})," and ",(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/web-ui/blob/main/docs/static/open-video-ui/v1/examples/web/nitflex/nitflex.css",children:"CSS"})," to see how it's done."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Screenshot",src:o(38494).Z+"",width:"1050",height:"590"})})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},47707:function(e,t,o){o.d(t,{Z:function(){return n}});let n=o.p+"assets/images/custom-ui-basic-3ae76115ff4424c1b7a6f79007843701.png"},58684:function(e,t,o){o.d(t,{Z:function(){return n}});let n=o.p+"assets/images/custom-ui-desktop-81909d06ea425103824bb1035e0b80df.png"},55762:function(e,t,o){o.d(t,{Z:function(){return n}});let n=o.p+"assets/images/custom-ui-mobile-c33fba60bea7b749b93527d3fd408ae0.png"},71334:function(e,t,o){o.d(t,{Z:function(){return n}});let n=o.p+"assets/images/custom-ui-seekbar-6b279b099c28754aa634a6a181b8c949.png"},38494:function(e,t,o){o.d(t,{Z:function(){return n}});let n=o.p+"assets/images/nitflex-theme-939d70606ef41c085fca43b882ecf806.png"},50065:function(e,t,o){o.d(t,{Z:function(){return s},a:function(){return i}});var n=o(67294);let a={},l=n.createContext(a);function i(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);