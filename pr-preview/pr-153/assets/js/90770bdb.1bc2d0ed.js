"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[42762],{33796:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=t(74848),r=t(28453);const s={description:"Start building your UI in just a few minutes!",sidebar_position:1,sidebar_custom_props:{icon:"\ud83d\ude80"},slug:"/react/getting-started"},a="Getting started",i={id:"external/web-ui/docs/react/getting-started",title:"Getting started",description:"Start building your UI in just a few minutes!",source:"@site/open-video-ui/external/web-ui/docs/react/getting-started.mdx",sourceDirName:"external/web-ui/docs/react",slug:"/react/getting-started",permalink:"/documentation/pr-preview/pr-153/open-video-ui/react/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/web-ui/blob/-/docs/react/getting-started.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Start building your UI in just a few minutes!",sidebar_position:1,sidebar_custom_props:{icon:"\ud83d\ude80"},slug:"/react/getting-started"},sidebar:"react",previous:{title:"Introduction",permalink:"/documentation/pr-preview/pr-153/open-video-ui/react/"},next:{title:"Examples",permalink:"/documentation/pr-preview/pr-153/open-video-ui/react/examples"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Default UI",id:"default-ui",level:3},{value:"Custom UI",id:"custom-ui",level:3},{value:"Legacy browser support",id:"legacy-browser-support",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"getting-started",children:"Getting started"})}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["This project requires the THEOplayer Web SDK to be installed.","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"npm install theoplayer\n"})}),"\n","You can also install a different variant of the THEOplayer npm package if you don't need all features, as long as it's aliased as ",(0,o.jsx)(n.code,{children:"theoplayer"}),".","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"npm install theoplayer@npm:@theoplayer/basic-hls\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Install the Open Video UI for React.","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"npm install @theoplayer/react-ui\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Add ",(0,o.jsx)(n.code,{children:"@theoplayer/react-ui"})," to your app:","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"import { DefaultUI } from '@theoplayer/react-ui';\n"})}),"\n","Open Video UI will import THEOplayer from ",(0,o.jsx)(n.code,{children:"theoplayer/chromeless"}),".\nIf you're using a bundler such as Webpack or Rollup, this dependency should automatically get bundled with your web app."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.h3,{id:"default-ui",children:"Default UI"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"<DefaultUI>"})," provides a fully-featured video player experience with minimal setup, and allows for small customizations such as changing colors or fonts."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { DefaultUI } from '@theoplayer/react-ui';\nimport type { ChromelessPlayer } from 'theoplayer/chromeless';\n\nconst App = () => {\n    // Configure THEOplayer\n    const configuration = {\n        libraryLocation: '/path/to/node_modules/theoplayer/',\n        license: 'your_theoplayer_license_goes_here'\n    };\n    // Configure a source for the player to play\n    const source = {\n        sources: {\n            src: 'https://example.com/stream.m3u8'\n        }\n    };\n    // Optionally, access the underlying THEOplayer player instance\n    const onReady = (player: ChromelessPlayer) => {\n        player.addEventListener('playing', () => console.log('THEOplayer is now playing'));\n    };\n\n    return <DefaultUI configuration={configuration} source={source} onReady={onReady} />;\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-153/open-video-ui/react/examples/default-ui",children:"this page"})," for a complete example."]}),"\n",(0,o.jsx)(n.h3,{id:"custom-ui",children:"Custom UI"}),"\n",(0,o.jsxs)(n.p,{children:["If you want to fully customize your video player layout, you can use a ",(0,o.jsx)(n.code,{children:"<UIContainer>"})," instead."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { ControlBar, MuteButton, PlayButton, TimeRange, VolumeRange } from '@theoplayer/react-ui';\n\nconst App = () => {\n    const configuration = {\n        libraryLocation: '/path/to/node_modules/theoplayer/',\n        license: 'your_theoplayer_license_goes_here'\n    };\n    const source = {\n        sources: {\n            src: 'https://example.com/stream.m3u8'\n        }\n    };\n\n    return (\n        <UIContainer\n            configuration={configuration}\n            source={source}\n            bottomChrome={\n                <>\n                    {/* Choose your own layout using the provided components (or your own!) */}\n                    <ControlBar>\n                        <TimeRange />\n                    </ControlBar>\n                    <ControlBar>\n                        <PlayButton />\n                        <MuteButton />\n                        <VolumeRange />\n                    </ControlBar>\n                </>\n            }\n        />\n    );\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-153/open-video-ui/react/examples/custom-ui",children:"this page"})," for a complete example."]}),"\n",(0,o.jsx)(n.h3,{id:"legacy-browser-support",children:"Legacy browser support"}),"\n",(0,o.jsxs)(n.p,{children:["By default, Open Video UI for React targets modern browsers that support modern JavaScript syntax (such as ",(0,o.jsx)(n.a,{href:"https://caniuse.com/async-functions",children:"async/await"}),") and native ",(0,o.jsx)(n.a,{href:"https://caniuse.com/custom-elementsv1",children:"Custom Elements"}),". This keeps the download size small, so your viewers can spend less time waiting for your page to load and start watching their video faster."]}),"\n",(0,o.jsxs)(n.p,{children:["On older browsers (such as Internet Explorer 11 and older smart TVs), you need to load a different version of the Open Video UI that uses older JavaScript syntax. You also need to load additional polyfills for missing features such as Promises or Custom Elements. We recommend ",(0,o.jsx)(n.a,{href:"https://cdnjs.cloudflare.com/polyfill/",children:"the Cloudflare mirror of Polyfill.io"})," and ",(0,o.jsx)(n.a,{href:"https://github.com/webcomponents/polyfills",children:"Web Components Polyfills"})," for these."]}),"\n",(0,o.jsx)(n.p,{children:"The simplest way to do this is to load the legacy build instead:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';\nimport '@webcomponents/webcomponentsjs/webcomponents-bundle.js';\nimport { DefaultUI } from '@theoplayer/react-ui/es5'; // note the \"/es5\" suffix\n"})}),"\n",(0,o.jsx)(n.p,{children:"However, this will load unnecessary polyfills in modern browsers, which is suboptimal. Instead, we recommend configuring your bundler to produce a modern and legacy build of your entire web app, and to import the appropriate version of Open Video UI for each build flavor."})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var o=t(96540);const r={},s=o.createContext(r);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);