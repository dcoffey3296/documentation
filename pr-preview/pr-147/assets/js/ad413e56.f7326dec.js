"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[82532],{94780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var s=n(74848),r=n(28453);const l={slug:"/connectors/web/comscore/getting-started",title:"Getting started",description:"Set up your connector in just a few minutes!",sidebar_custom_props:{icon:"\ud83d\ude80 "}},c="comscore-connector-web",i={id:"external/web-connectors/comscore/README",title:"Getting started",description:"Set up your connector in just a few minutes!",source:"@site/theoplayer/external/web-connectors/comscore/README.md",sourceDirName:"external/web-connectors/comscore",slug:"/connectors/web/comscore/getting-started",permalink:"/documentation/pr-preview/pr-147/theoplayer/connectors/web/comscore/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/web-connectors/blob/-/comscore/README.md",tags:[],version:"current",frontMatter:{slug:"/connectors/web/comscore/getting-started",title:"Getting started",description:"Set up your connector in just a few minutes!",sidebar_custom_props:{icon:"\ud83d\ude80 "}},sidebar:"web",previous:{title:"Comscore",permalink:"/documentation/pr-preview/pr-147/theoplayer/connectors/web/comscore"},next:{title:"Changelog",permalink:"/documentation/pr-preview/pr-147/theoplayer/connectors/web/comscore/changelog"}},d={},o=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Configuring the connector",id:"configuring-the-connector",level:3},{value:"Optional ComscoreConfiguration properties",id:"optional-comscoreconfiguration-properties",level:3},{value:"<code>usagePropertiesAutoUpdateMode</code>",id:"usagepropertiesautoupdatemode",level:4},{value:"<code>skeleton</code>",id:"skeleton",level:4},{value:"<code>platformApi</code>",id:"platformapi",level:4},{value:"<code>adIdProcessor</code>",id:"adidprocessor",level:4},{value:"<code>debug</code>",id:"debug",level:4},{value:"Passing metadata dynamically",id:"passing-metadata-dynamically",level:3},{value:"ComscoreMetadata fields",id:"comscoremetadata-fields",level:3},{value:"Documentation",id:"documentation",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"comscore-connector-web",children:"comscore-connector-web"})}),"\n",(0,s.jsx)(t.p,{children:"The Comscore connector provides a Comscore integration for THEOplayer."}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"npm install @theoplayer/comscore-connector-web\n"})}),"\n",(0,s.jsx)(t.p,{children:"This connector depends on the JavaScript ComScore SDK, which should be loaded and available in the global scope before the connector. Get it from your ComScore dashboard or talk to a ComScore representative. This connector was developed and tested with versions 7.2.0.200214 and 7.6.1.210506"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<script src="/path/to/comscore.js">\n'})}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.h3,{id:"configuring-the-connector",children:"Configuring the connector"}),"\n",(0,s.jsxs)(t.p,{children:["Create the connector by providing the ",(0,s.jsx)(t.code,{children:"THEOplayer"})," instance, a ComscoreConfiguration (which contains your publisher id, also referred to as the c2 value) and the ComscoreMetadata of the first source being set to the player. You can change the metadata dynamically throughout the lifecycle of the connector."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { ComscoreConnector } from '../../dist/comscore-connector.esm.js';\n\nconst comscoreConfig = {\n    publisherId: '<your publisher id>',\n    applicationName: 'Test App',\n    userConsent: '1',\n    platformApi: ns_.analytics.PlatformAPIs.WebBrowser,\n    debug: true\n};\n\nconst comscoreMetadata = {\n    mediaType: 'longFormOnDemand',\n    uniqueId: 'testuniqueId',\n    length: 634566, // in milliseconds\n    stationTitle: 'THEOTV',\n    programTitle: 'Big Buck Bunny',\n    episodeTitle: 'Intro',\n    genreName: 'Animation',\n    classifyAsAudioStream: false,\n    customLabels: {\n        testcustomlabel: 'testcustomvalue'\n    }\n};\n\nconst comscoreConnector = new ComscoreConnector(player, comscoreConfig, comscoreMetadata);\n"})}),"\n",(0,s.jsx)(t.h3,{id:"optional-comscoreconfiguration-properties",children:"Optional ComscoreConfiguration properties"}),"\n",(0,s.jsx)(t.h4,{id:"usagepropertiesautoupdatemode",children:(0,s.jsx)(t.code,{children:"usagePropertiesAutoUpdateMode"})}),"\n",(0,s.jsx)(t.p,{children:"When omitted this wil default to foregroundOnly."}),"\n",(0,s.jsx)(t.h4,{id:"skeleton",children:(0,s.jsx)(t.code,{children:"skeleton"})}),"\n",(0,s.jsx)(t.p,{children:"Pass an interface object with target platform specific implementations for the necessary Platform APIs. E.g."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"analytics.PlatformApi.setPlatformApi(analytics.PlatformApi.PlatformApis.Skeleton, {\n    onDataFetch: function (onSuccessCallback, onErrorCallback) {\n        // Execute a function with platform-specific code to retrieve up-to-date information.\n        runPlatformSpecificCodeToRetrieveValues(onSuccessCallback, onErrorCallback);\n    }\n\n    // Other overridden PlatformAPI methods, as needed.\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["For more information, please consult the ",(0,s.jsx)(t.a,{href:"https://mymetrix-support.comscore.com/hc/en-us/article_attachments/19635711827867",children:"Skeleton PlatformAPI Implementation Guide"})]}),"\n",(0,s.jsxs)(t.p,{children:["Note that if the skeleton property is defined, the connector will always use ",(0,s.jsx)(t.code,{children:"setPlatformAPI(ns_.analytics.PlatformAPIs.Skeleton)"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"platformapi",children:(0,s.jsx)(t.code,{children:"platformApi"})}),"\n",(0,s.jsxs)(t.p,{children:["Pass a valid value from ",(0,s.jsx)(t.code,{children:"ns_.analytics.PlatformAPIs"}),". When omitted, the connector will report ",(0,s.jsx)(t.code,{children:"setPlatformAPI(ns_.analytics.PlatformAPIs.html5)"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"adidprocessor",children:(0,s.jsx)(t.code,{children:"adIdProcessor"})}),"\n",(0,s.jsxs)(t.p,{children:["Pass a function with the following signature if you require custom ad id handling: ",(0,s.jsx)(t.code,{children:"(ad: Ad) => string"}),". When omitted, the connector will use ",(0,s.jsx)(t.code,{children:"(ad) => ad.id"}),". Consult THEOplayer's types for more info about the ",(0,s.jsx)(t.code,{children:"Ad"})," interface."]}),"\n",(0,s.jsx)(t.h4,{id:"debug",children:(0,s.jsx)(t.code,{children:"debug"})}),"\n",(0,s.jsx)(t.p,{children:"A flag to enable verbose logging."}),"\n",(0,s.jsx)(t.h3,{id:"passing-metadata-dynamically",children:"Passing metadata dynamically"}),"\n",(0,s.jsx)(t.p,{children:"The connector allows updating the current asset's metadata at any time. Do it when setting a new source to the player."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"comscoreConnector.updateMetadata(newMetadata);\n"})}),"\n",(0,s.jsx)(t.h3,{id:"comscoremetadata-fields",children:"ComscoreMetadata fields"}),"\n",(0,s.jsxs)(t.p,{children:["Based on the ",(0,s.jsx)(t.code,{children:"ComscoreMetadata"})," type, you can tell which fields are mandatory and which aren't. Note that this is purely for the integration to work correctly. Depending on the Comscore solution you are using, different fields are required/optional. The mandatory fields in the ",(0,s.jsx)(t.code,{children:"ComscoreMetadata"})," type are the ones that are mandatory for all three Comscore solutions:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Video Metrix (V)"}),"\n",(0,s.jsx)(t.li,{children:"Cross Platform Product Suite (X)"}),"\n",(0,s.jsx)(t.li,{children:"Cross Media Audience Measurement (C)"}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Required"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"mediaType"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"All"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"uniqueId"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"All"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"length"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"All"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"c3?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"V"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"c4?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"V"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"c6?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"V"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"stationTitle"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"All"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"stationCode?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"networkAffiliate?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"publisherName?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"X C"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"V"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"programTitle"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"All"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"programId?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"V C"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"episodeTitle"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"All"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"episodeId?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"X C"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"episodeSeasonNumber?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"X C"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"episodeNumber?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"X C"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"genreName"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"All"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"genreId?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"carryTvAdvertisementLoad?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"classifyAsCompleteEpisode?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"dateOfProduction?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"C"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"timeOfProduction?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"C"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"dateOfTvAiring?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"X C"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"timeOfTvAiring?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"X C"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"dateOfDigitalAiring?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"X C"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"timeOfDigitalAiring?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"X C"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"feedType?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"classifyAsAudioStream"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Al"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"deliveryMode?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"deliverySubscriptionType?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"deliveryComposition?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"deliveryAdvertisementCapability?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"mediaFormat?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"distributionModel?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"playlistTitle?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"C"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"totalSegments?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"V C"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"clipUrl?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"V C"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"videoDimension?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"C"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"customLabels?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"documentation",children:"Documentation"}),"\n",(0,s.jsxs)(t.p,{children:["The integration guidelines from ComScore can be found on their ",(0,s.jsx)(t.a,{href:"https://www.comscore.com/Products/Digital/Unified-Digital-Measurement-Enhanced",children:"Unified Digital Measurements page"})," in the Tagging section."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var s=n(96540);const r={},l=s.createContext(r);function c(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);