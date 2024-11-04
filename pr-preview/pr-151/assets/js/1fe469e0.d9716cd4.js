"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97521],{90367:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=t(74848),r=t(28453);const o={},i="Getting started with NuxtJS",a={id:"getting-started/frameworks/nuxtjs/getting-started",title:"Getting started with NuxtJS",description:"This how-to guide describes how to integrate THEOplayer with NuxtJS framework.",source:"@site/theoplayer_versioned_docs/version-v4/getting-started/02-frameworks/04-nuxtjs/00-getting-started.md",sourceDirName:"getting-started/02-frameworks/04-nuxtjs",slug:"/getting-started/frameworks/nuxtjs/getting-started",permalink:"/documentation/pr-preview/pr-151/theoplayer/v4/getting-started/frameworks/nuxtjs/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/getting-started/02-frameworks/04-nuxtjs/00-getting-started.md",tags:[],version:"v4",sidebarPosition:0,frontMatter:{},sidebar:"web",previous:{title:"Getting started with React",permalink:"/documentation/pr-preview/pr-151/theoplayer/v4/getting-started/frameworks/react/getting-started"},next:{title:"Getting started with VueJS",permalink:"/documentation/pr-preview/pr-151/theoplayer/v4/getting-started/frameworks/vuejs/getting-started"}},l={},c=[{value:"Instructions",id:"instructions",level:2},{value:"Build Setup",id:"build-setup",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"getting-started-with-nuxtjs",children:"Getting started with NuxtJS"})}),"\n",(0,s.jsx)(e.p,{children:"This how-to guide describes how to integrate THEOplayer with NuxtJS framework."}),"\n",(0,s.jsx)(e.h2,{id:"instructions",children:"Instructions"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"Open your favorite IDE and then a terminal and install Vue CLI component:"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"npx create-nuxt-app theoplayer-nuxtjs-sample\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"2",children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Follow the installation process (please note these instructions assume you\u2019ve chosen npm as a module packager)"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Once the app is created, execute the following commands:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"cd theoplayer-nuxtjs-sample\nnpm install\nnpm run dev\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"4",children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["The default application should be served under: ",(0,s.jsx)(e.a,{href:"http://localhost:3000/",children:"http://localhost:3000/"})]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Reference the THEOplayer Web SDK by editing file ",(0,s.jsx)(e.code,{children:"nuxt.config.js"})," like the following:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'export default {\n  mode: "spa",\n  /*\n   ** Headers of the page\n   */\n  head: {\n    title: process.env.npm_package_name || "",\n    meta: [\n      { charset: "utf-8" },\n      { name: "viewport", content: "width=device-width, initial-scale=1" },\n      {\n        hid: "description",\n        name: "description",\n        content: process.env.npm_package_description || ""\n      }\n    ],\n    link: [\n      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },\n      {\n        rel: "stylesheet",\n        type: "text/css",\n        href: "//cdn.theoplayer.com/dash/theoplayer/ui.css"\n      }\n    ],\n    script: [\n      {\n        type: "text/javascript",\n        src: "//cdn.theoplayer.com/dash/theoplayer/THEOplayer.js"\n      }\n    ]\n  },\n  /*\n   ** Customize the progress-bar color\n   */\n  loading: { color: "#fff" },\n  /*\n   ** Global CSS\n   */\n  css: [],\n  /*\n   ** Plugins to load before mounting the App\n   */\n  plugins: [],\n  /*\n   ** Nuxt.js dev-modules\n   */\n  buildModules: [\n    // Doc: https://github.com/nuxt-community/eslint-module\n    "@nuxtjs/eslint-module"\n  ],\n  /*\n   ** Nuxt.js modules\n   */\n  modules: [],\n  /*\n   ** Build configuration\n   */\n  build: {\n    /*\n     ** You can extend webpack config here\n     */\n    extend(config, ctx) {}\n  }\n};\n'})}),"\n",(0,s.jsxs)(e.ol,{start:"6",children:["\n",(0,s.jsx)(e.li,{children:"Add the new component named Player.vue under this path: components/Player.vue"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:'<template>\n  <div\n    ref="theoplayer"\n    class="theoplayer-container video-js theoplayer-skin vjs-16-9 THEOplayer"\n  ></div>\n</template>\n\n<script>\n  import { mapState } from "vuex";\n  export default {\n    computed: mapState({\n      source: (state) => state.source\n    }),\n    mounted() {\n      this.playerInit();\n    },\n    methods: {\n      playerInit() {\n        const player = new window.THEOplayer.Player(this.$refs.theoplayer, {\n          fluid: true,\n          libraryLocation: "//cdn.theoplayer.com/dash/theoplayer/"\n        });\n        player.source = {\n          sources: this.source\n        };\n      }\n    }\n  };\n<\/script>\n<style>\n  .THEOplayer {\n    width: 50%;\n    margin: 0 auto;\n  }\n\n  .video-js.vjs-16-9 {\n    padding-top: 28.12%;\n    width: 50%;\n  }\n</style>\n'})}),"\n",(0,s.jsxs)(e.ol,{start:"7",children:["\n",(0,s.jsx)(e.li,{children:"Please note that vuex is used to pass the player source, for this purpose add index.js file under this path: store/index.js with following content:"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"export const state = () => ({\n  source: null\n});\n\nexport const mutations = {\n  setSource(state, source) {\n    state.source = source;\n  }\n};\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"8",children:["\n",(0,s.jsx)(e.li,{children:"Now, we are ready to reference the player component in the index.vue like following:"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:'<template>\n  <div class="container">\n    <div>\n      <logo />\n      <player />\n      <h1 class="title">theoplayer-nuxtjs-sample</h1>\n      <h2 class="subtitle">THEOplayer nuxtjs sample app</h2>\n      <div class="links">\n        <a href="https://nuxtjs.org/" target="_blank" class="button--green">\n          Documentation\n        </a>\n        <a\n          href="https://github.com/nuxt/nuxt.js"\n          target="_blank"\n          class="button--grey"\n        >\n          GitHub\n        </a>\n      </div>\n    </div>\n  </div>\n</template>\n<script>\n  import Logo from "~/components/Logo.vue";\n  import Player from "~/components/Player.vue";\n\n  export default {\n    components: {\n      Logo,\n      Player\n    },\n    created() {\n      this.$store.commit("setSource", [\n        {\n          type: "application/x-mpegurl",\n          src: "//cdn.theoplayer.com/video/elephants-dream/playlist.m3u8"\n        }\n      ]);\n    }\n  };\n<\/script>\n\n<style>\n  .container {\n    margin: 0 auto;\n    min-height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n  }\n\n  .title {\n    font-family:\n      "Quicksand",\n      "Source Sans Pro",\n      -apple-system,\n      BlinkMacSystemFont,\n      "Segoe UI",\n      Roboto,\n      "Helvetica Neue",\n      Arial,\n      sans-serif;\n    display: block;\n    font-weight: 300;\n    font-size: 100px;\n    color: #35495e;\n    letter-spacing: 1px;\n  }\n\n  .subtitle {\n    font-weight: 300;\n    font-size: 42px;\n    color: #526488;\n    word-spacing: 5px;\n    padding-bottom: 15px;\n  }\n\n  .links {\n    padding-top: 15px;\n  }\n</style>\n'})}),"\n",(0,s.jsxs)(e.ol,{start:"9",children:["\n",(0,s.jsx)(e.li,{children:"This should result in a page which includes the THEOplayer component."}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"build-setup",children:"Build Setup"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# install dependencies\n$ npm run install\n\n# serve with hot reload at localhost:3000\n$ npm run dev\n\n# build for production and launch server\n$ npm run build\n$ npm run start\n\n# generate static project\n$ npm run generate\n"})}),"\n",(0,s.jsxs)(e.p,{children:["For detailed explanation on how things work, check out ",(0,s.jsx)(e.a,{href:"https://nuxtjs.org",children:"Nuxt.js docs"}),"."]})]})}function p(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>a});var s=t(96540);const r={},o=s.createContext(r);function i(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);