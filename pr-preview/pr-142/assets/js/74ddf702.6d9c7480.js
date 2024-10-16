"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86309],{86218:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var t=o(74848),a=o(28453);const c={slug:"/connectors/web/conviva/getting-started",title:"Getting started",description:"Set up your connector in just a few minutes!",sidebar_custom_props:{icon:"\ud83d\ude80 "}},r="conviva-connector-web",s={id:"external/web-connectors/conviva/README",title:"Getting started",description:"Set up your connector in just a few minutes!",source:"@site/theoplayer_versioned_docs/version-v7/external/web-connectors/conviva/README.md",sourceDirName:"external/web-connectors/conviva",slug:"/connectors/web/conviva/getting-started",permalink:"/documentation/pr-preview/pr-142/theoplayer/v7/connectors/web/conviva/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/web-connectors/blob/-/conviva/README.md",tags:[],version:"v7",frontMatter:{slug:"/connectors/web/conviva/getting-started",title:"Getting started",description:"Set up your connector in just a few minutes!",sidebar_custom_props:{icon:"\ud83d\ude80 "}},sidebar:"web",previous:{title:"Conviva",permalink:"/documentation/pr-preview/pr-142/theoplayer/v7/connectors/web/conviva"},next:{title:"Changelog",permalink:"/documentation/pr-preview/pr-142/theoplayer/v7/connectors/web/conviva/changelog"}},i={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Install via npm",id:"install-via-npm",level:3},{value:"Install via yarn",id:"install-via-yarn",level:3},{value:"Usage",id:"usage",level:2},{value:"Usage with Yospace connector",id:"usage-with-yospace-connector",level:2}];function v(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"conviva-connector-web",children:"conviva-connector-web"})}),"\n",(0,t.jsx)(n.p,{children:"The Conviva connector provides a Conviva integration for THEOplayer."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.p,{children:["In order to use this connector, a ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/theoplayer",children:"THEOplayer"})," build with a valid license is required. You can use your existing THEOplayer HTML5 SDK license or request yours via ",(0,t.jsx)(n.a,{href:"https://portal.theoplayer.com/",children:"THEOportal"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For setting up a valid Conviva session, you must have access to a ",(0,t.jsx)(n.a,{href:"https://pulse.conviva.com/",children:"Conviva developer account"})," with access to a debug or production key."]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.p,{children:["Install using your favorite package manager for Node (such as ",(0,t.jsx)(n.code,{children:"npm"})," or ",(0,t.jsx)(n.code,{children:"yarn"}),"):"]}),"\n",(0,t.jsx)(n.h3,{id:"install-via-npm",children:"Install via npm"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install @theoplayer/conviva-connector-web\n"})}),"\n",(0,t.jsx)(n.h3,{id:"install-via-yarn",children:"Install via yarn"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add @theoplayer/conviva-connector-web\n"})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.p,{children:"First you need to define the Conviva metadata and configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"    const convivaMetadata = {\n        ['Conviva.assetName']: 'ASSET_NAME_GOES_HERE',\n        ['Conviva.streamUrl']: 'CUSTOMER_STREAM_URL_GOES_HERE',\n        ['Conviva.streamType']: 'STREAM_TYPE_GOES_HERE', // VOD or LIVE\n        ['Conviva.applicationName']: 'APPLICATION_NAME_GOES_HERE',\n        ['Conviva.viewerId']: 'VIEWER_ID_GOES_HERE'\n    };\n\n    const convivaConfig = {\n        debug: false,\n        gatewayUrl: 'CUSTOMER_GATEWAY_GOES_HERE',\n        customerKey: 'CUSTOMER_KEY_GOES_HERE' // Can be a test or production key.\n    };\n"})}),"\n",(0,t.jsx)(n.p,{children:"Using these configs you can create the Conviva connector with THEOplayer."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Add as a regular script:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<script type="text/javascript" src="path/to/conviva-connector.umd.js"><\/script>\n<script type="text/javascript">\n    const player = new THEOplayer.Player(element, configuration);\n    const convivaIntegration = new THEOplayerConvivaConnector.ConvivaConnector(\n            player,\n            convivaMetadata,\n            convivaConfig\n    );\n<\/script>\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Add as an ES2015 module:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<script type="module">\n    import { ConvivaConnector } from "path/to/conviva-connector.esm.js";\n    const player = new THEOplayer.Player(element, configuration);\n    const convivaIntegration = new ConvivaConnector(player, convivaMetadata, convivaConfig);\n<\/script>\n'})}),"\n",(0,t.jsx)(n.p,{children:"The Conviva connector is now ready to start a session once THEOplayer starts playing a source."}),"\n",(0,t.jsx)(n.h2,{id:"usage-with-yospace-connector",children:"Usage with Yospace connector"}),"\n",(0,t.jsxs)(n.p,{children:["If you have a Yospace SSAI stream and want to also report ad related events to Conviva, you can use this connector in combination with the Yospace connector: ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@theoplayer/yospace-connector-web",children:"@theoplayer/yospace-connector-web"})]}),"\n",(0,t.jsx)(n.p,{children:"After configuring the Yospace connector, can link it to the Conviva connector:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'async function setupYospaceConnector(player) {\n        const source = {\n            sources: [\n                {\n                    src: "https://csm-e-sdk-validation.bln1.yospace.com/csm/extlive/yospace02,hlssample42.m3u8?yo.br=true&yo.av=4",\n                    ssai: {\n                        integration: "yospace"\n                    }\n                }\n            ]\n        };\n        \n        // Create the connectors.\n        const yospace = new THEOplayerYospaceConnector.YospaceConnector(player);\n        const conviva = new THEOplayerConvivaConnector.ConvivaConnector(player, convivaMetadata, convivaConfig);\n    \n        // Link ConvivaConnector with the YospaceConnector.\n        conviva.connect(yospace);\n        \n        // Set the source.\n        await yospace.setupYospaceSession(source);\n    }\n'})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(v,{...e})}):v(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>s});var t=o(96540);const a={},c=t.createContext(a);function r(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);