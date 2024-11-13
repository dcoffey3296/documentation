"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["77792"],{60268:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>a,default:()=>p,assets:()=>o,toc:()=>c,frontMatter:()=>l});var r=JSON.parse('{"id":"getting-started/frameworks/vuejs/getting-started","title":"Getting started with VueJS","description":"This how-to guide describes how to integrate THEOplayer with VueJS framework.","source":"@site/theoplayer_versioned_docs/version-v4/getting-started/02-frameworks/05-vuejs/00-getting-started.md","sourceDirName":"getting-started/02-frameworks/05-vuejs","slug":"/getting-started/frameworks/vuejs/getting-started","permalink":"/documentation/pr-preview/pr-157/theoplayer/v4/getting-started/frameworks/vuejs/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/getting-started/02-frameworks/05-vuejs/00-getting-started.md","tags":[],"version":"v4","sidebarPosition":0,"frontMatter":{},"sidebar":"web","previous":{"title":"Getting started with NuxtJS","permalink":"/documentation/pr-preview/pr-157/theoplayer/v4/getting-started/frameworks/nuxtjs/getting-started"},"next":{"title":"Getting started with AMP","permalink":"/documentation/pr-preview/pr-157/theoplayer/v4/getting-started/frameworks/amp/getting-started"}}'),i=t("85893"),s=t("50065");let l={},a="Getting started with VueJS",o={},c=[{value:"Customize configuration",id:"customize-configuration",level:3},{value:"A step-by-step guide:",id:"a-step-by-step-guide",level:2},{value:"Including THEOplayer library assets",id:"including-theoplayer-library-assets",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"getting-started-with-vuejs",children:"Getting started with VueJS"})}),"\n",(0,i.jsx)(n.p,{children:"This how-to guide describes how to integrate THEOplayer with VueJS framework."}),"\n",(0,i.jsx)(n.h3,{id:"customize-configuration",children:"Customize configuration"}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://cli.vuejs.org/config/",children:"Configuration Reference"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"a-step-by-step-guide",children:"A step-by-step guide:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Open your favorite IDE and then a terminal and install Vue CLI component:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"npm install vue\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"If needed, create a new workspace and initial application:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"vue create theoplayer-vuejs-sample\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Choose your preferred configuration by choosing one of the presets from the list."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Once the project is created, you should see a successful message."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Go to root project and start application using instructions:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"cd theoplayer-vuejs-sample\nnpm run serve\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["As a result you should be able to browse the default page under the following URL: ",(0,i.jsx)(n.a,{href:"http://localhost:8080/",children:"http://localhost:8080/"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Reference the THEOplayer files in index.html like following:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width,initial-scale=1.0" />\n    <link rel="icon" href="<%= BASE_URL %>favicon.ico" />\n    <title>theoplayer-vuejs-sample</title>\n    <link\n      rel="stylesheet"\n      type="text/css"\n      href="//cdn.theoplayer.com/dash/theoplayer/ui.css"\n    />\n  </head>\n\n  <body>\n    <noscript>\n      <strong\n        >We\'re sorry but theoplayer-vuejs-sample doesn\'t work properly without\n        JavaScript enabled. Please enable it to continue.</strong\n      >\n    </noscript>\n    <div id="app"></div>\n    <script\n      type="text/javascript"\n      src="//cdn.theoplayer.com/dash/theoplayer/THEOplayer.js"\n    ><\/script>\n    \x3c!-- built files will be auto injected --\x3e\n  </body>\n</html>\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"8",children:["\n",(0,i.jsx)(n.li,{children:"In the src/components/ add a new file and name it Player.vue, then add the following snippet:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<template>\n  <div\n    class="theoplayer-container video-js theoplayer-skin vjs-16-9 THEOplayer"\n    ref="theoplayer"\n  ></div>\n</template>\n\n<script>\n  export default {\n    props: ["source"],\n    mounted: function () {\n      this.playerInit();\n    },\n    methods: {\n      playerInit() {\n        const player = new window.THEOplayer.Player(this.$refs.theoplayer, {\n          fluid: true,\n          libraryLocation: "//cdn.theoplayer.com/dash/theoplayer/"\n        });\n        player.source = {\n          sources: this.source\n        };\n      }\n    }\n  };\n<\/script>\n<style>\n  .THEOplayer {\n    width: 50%;\n    margin: 0 auto;\n  }\n\n  .video-js.vjs-16-9 {\n    padding-top: 28.12%;\n    width: 50%;\n  }\n</style>\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"9",children:["\n",(0,i.jsx)(n.li,{children:"Then you can reference the Player component in different parts of the app and pass the source, for instance you can change App.vue like following:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<template>\n  <div id="app">\n    <img alt="Vue logo" src="./assets/logo.png" />\n    <Player :source="source" v-if="source" />\n  </div>\n</template>\n\n<script>\n  import Player from "./components/Player.vue";\n\n  export default {\n    name: "app",\n    components: {\n      Player\n    },\n    data: function () {\n      return {\n        source: [\n          {\n            type: "application/x-mpegurl",\n            src: "//cdn.theoplayer.com/video/elephants-dream/playlist.m3u8"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n<style>\n  #app {\n    font-family: "Avenir", Helvetica, Arial, sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-align: center;\n    color: #2c3e50;\n    margin-top: 60px;\n  }\n</style>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"including-theoplayer-library-assets",children:"Including THEOplayer library assets"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a new folder named i.e. libs under public folder and copy the THEOplayer WebSDK files there."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Change the index.html to reference local files:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width,initial-scale=1.0" />\n    <link rel="icon" href="<%= BASE_URL %>favicon.ico" />\n    <title>theoplayer-vuejs-sample</title>\n    <link rel="stylesheet" type="text/css" href="libs/THEOplayer/ui.css" />\n  </head>\n\n  <body>\n    <noscript>\n      <strong\n        >We\'re sorry but theoplayer-vuejs-sample doesn\'t work properly without\n        JavaScript enabled. Please enable it to continue.</strong\n      >\n    </noscript>\n    <div id="app"></div>\n    <script type="text/javascript" src="libs/THEOplayer/THEOplayer.js"><\/script>\n    \x3c!-- built files will be auto injected --\x3e\n  </body>\n</html>\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"In the Player.vue modify libraryLocation like following:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'const player = new window.THEOplayer.Player(this.$refs.theoplayer, {\n  fluid: true,\n  libraryLocation: "./libs/THEOplayer"\n});\n'})})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var r=t(67294);let i={},s=r.createContext(i);function l(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);