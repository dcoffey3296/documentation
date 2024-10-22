"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6043],{96732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(74848),r=n(28453);const o={slug:"/getting-started/frameworks/react-native/drm"},a="Digital Rights Management (DRM)",s={id:"external/react-native-theoplayer/doc/drm",title:"Digital Rights Management (DRM)",description:"Overview",source:"@site/theoplayer_versioned_docs/version-v6/external/react-native-theoplayer/doc/drm.md",sourceDirName:"external/react-native-theoplayer/doc",slug:"/getting-started/frameworks/react-native/drm",permalink:"/documentation/pr-preview/pr-146/theoplayer/v6/getting-started/frameworks/react-native/drm",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/react-native-theoplayer/blob/-/doc/drm.md",tags:[],version:"v6",frontMatter:{slug:"/getting-started/frameworks/react-native/drm"},sidebar:"react-native",previous:{title:"Casting with Chromecast and Airplay",permalink:"/documentation/pr-preview/pr-146/theoplayer/v6/getting-started/frameworks/react-native/cast"},next:{title:"A Fullscreen Video Player Component",permalink:"/documentation/pr-preview/pr-146/theoplayer/v6/getting-started/frameworks/react-native/fullscreen"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Content Protection Integrations",id:"content-protection-integrations",level:2},{value:"Pre-integrations",id:"pre-integrations",level:3},{value:"Creating a custom protection integration",id:"creating-a-custom-protection-integration",level:3},{value:"Registering a custom protection integration",id:"registering-a-custom-protection-integration",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"digital-rights-management-drm",children:"Digital Rights Management (DRM)"})}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(t.p,{children:["This section outlines how play-out of DRM protected content can be achieved with ",(0,i.jsx)(t.code,{children:"react-native-theoplayer"}),".\nA detailed explanation on how DRM (Digital Rights Management) works can be found in\n",(0,i.jsx)(t.a,{href:"https://www.theoplayer.com/docs/theoplayer/knowledge-base/content-protection/introduction/",children:"THEOplayer's knowledge base"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["THEOplayer supports Fairplay, PlayReady and Widevine by default. Configuring a DRM\nprotected stream source with ",(0,i.jsx)(t.code,{children:"react-native-theoplayer"})," is very similar to how it is\ndone for the Web SDK, by providing a ",(0,i.jsx)(t.code,{children:"contentProtection"})," object in the source description."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'const source = {\n  src: "<manifest>",\n  type: "application/dash+xml",\n  contentProtection: {\n    widevine: {\n      licenseAcquisitionURL: "https://widevine-dash.ezdrm.com/proxy?pX=..."\n    },\n    playready: {\n      licenseAcquisitionURL: "https://playready.ezdrm.com/cency/preauth.aspx?pX=..."\n    },\n    fairplay: {\n      certificateURL: \'https://fps.ezdrm.com/demo/video/eleisure.cer\',\n      licenseAcquisitionURL: \'https://fps.ezdrm.com/api/licenses/...\'\n    }\n  }\n}\nconst onReady = (player: THEOplayer) => {\n  player.source = source;\n}\n\n<THEOplayerView onPlayerReady={onReady}/>\n'})}),"\n",(0,i.jsx)(t.h2,{id:"content-protection-integrations",children:"Content Protection Integrations"}),"\n",(0,i.jsx)(t.h3,{id:"pre-integrations",children:"Pre-integrations"}),"\n",(0,i.jsxs)(t.p,{children:["THEOplayer is ",(0,i.jsx)(t.a,{href:"https://www.theoplayer.com/docs/theoplayer/how-to-guides/drm/introduction/#pre-integrations",children:"pre-integrated"}),"\nwith a number of commercial multi-DRM vendors, which means support for these vendors is already included\nand enabled in the SDK."]}),"\n",(0,i.jsxs)(t.p,{children:["In addition to these pre-integrations, the ",(0,i.jsx)(t.code,{children:"react-native-theoplayer"})," SDK as well as all native THEOplayer\nSDKs, come with the ability to create and register a custom DRM integration."]}),"\n",(0,i.jsx)(t.h3,{id:"creating-a-custom-protection-integration",children:"Creating a custom protection integration"}),"\n",(0,i.jsxs)(t.p,{children:["The implementation of a custom DRM integration for ",(0,i.jsx)(t.code,{children:"react-native-theoplayer"})," is almost identical\nto the implementation for the Web SDK, and is explained in detail on our\n",(0,i.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-drm-integration",children:"THEOplayer DRM integrations"}),"\nrepository.\nThis repository also contains a number of examples for well-known multi-DRM vendors."]}),"\n",(0,i.jsx)(t.h3,{id:"registering-a-custom-protection-integration",children:"Registering a custom protection integration"}),"\n",(0,i.jsx)(t.p,{children:"Once the custom DRM integrations is created, it needs to be registered up-front as follows:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"import { ContentProtectionRegistry } from 'react-native-theoplayer';\nimport { MyCustomFairplayContentProtectionIntegrationFactory } from './drm/MyCustomFairplayContentProtectionIntegrationFactory';\n\nContentProtectionRegistry.registerContentProtectionIntegration(\n  'myCustomDRM',\n  'fairplay',\n  new MyCustomFairplayContentProtectionIntegrationFactory()\n);\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Finally, the ",(0,i.jsx)(t.code,{children:"integrationId"})," used on registration (in this case ",(0,i.jsx)(t.code,{children:'"myCustomDRM"'}),")\nshould be added to the sourceDescription so that THEOplayer knows which integration to\nuse for this source. Any additional ",(0,i.jsx)(t.code,{children:"integrationParameters"})," needed by the custom integration\ncan be passed here as well."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'const source = {\n  src: "<manifest>",\n  type: "application/dash+xml",\n  contentProtection: {\n    fairplay: {\n      certificateURL: \'https://example.domain.com/Certificate.cer\',\n      licenseAcquisitionURL: \'https://example.domain.com/FairPlay\'\n    },\n    integration: "myCustomDRM",\n    integrationParameters: {\n      authToken: "<token>",\n    }\n  }\n}\n'})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var i=n(96540);const r={},o=i.createContext(r);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);