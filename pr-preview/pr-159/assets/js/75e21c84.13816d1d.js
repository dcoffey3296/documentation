"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["73017"],{9476:function(e,t,n){n.r(t),n.d(t,{metadata:()=>l,contentTitle:()=>d,default:()=>a,assets:()=>c,toc:()=>o,frontMatter:()=>s});var l=JSON.parse('{"id":"external/android-connector/connectors/analytics/comscore/README","title":"Getting started","description":"Set up your connector in just a few minutes!","source":"@site/theoplayer_versioned_docs/version-v7/external/android-connector/connectors/analytics/comscore/README.md","sourceDirName":"external/android-connector/connectors/analytics/comscore","slug":"/connectors/android/comscore/getting-started","permalink":"/documentation/pr-preview/pr-159/theoplayer/v7/connectors/android/comscore/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/android-connector/blob/-/connectors/analytics/comscore/README.md","tags":[],"version":"v7","frontMatter":{"slug":"/connectors/android/comscore/getting-started","title":"Getting started","description":"Set up your connector in just a few minutes!","sidebar_custom_props":{"icon":"\uD83D\uDE80 "}},"sidebar":"android","previous":{"title":"Comscore","permalink":"/documentation/pr-preview/pr-159/theoplayer/v7/connectors/android/comscore"},"next":{"title":"Conviva","permalink":"/documentation/pr-preview/pr-159/theoplayer/v7/connectors/android/conviva"}}'),r=n("85893"),i=n("50065");let s={slug:"/connectors/android/comscore/getting-started",title:"Getting started",description:"Set up your connector in just a few minutes!",sidebar_custom_props:{icon:"\uD83D\uDE80 "}},d="THEOplayer Android Comscore Connector",c={},o=[{value:"Usage",id:"usage",level:2},{value:"Configuring the Connector",id:"configuring-the-connector",level:3},{value:"Passing Metadata Dynamically",id:"passing-metadata-dynamically",level:3},{value:"ComscoreMetadata Fields",id:"comscoremetadata-fields",level:3}];function x(e){let t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"theoplayer-android-comscore-connector",children:"THEOplayer Android Comscore Connector"})}),"\n",(0,r.jsx)(t.p,{children:"A Comscore analytics connector for use with THEOplayer in Android applications."}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.h3,{id:"configuring-the-connector",children:"Configuring the Connector"}),"\n",(0,r.jsxs)(t.p,{children:["Create the connector by providing the ",(0,r.jsx)(t.code,{children:"THEOplayer"})," instance, a ",(0,r.jsx)(t.code,{children:"ComscoreConfiguration"})," (which contains your publisher id), and the ",(0,r.jsx)(t.code,{children:"ComscoreMetadata"})," of the first source you will set to the player (you can change it dynamically throughout the entire lifecycle of the connector):"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'val comscoreConfiguration = ComscoreConfiguration(\n    publisherId = "<your publisher ID here>", // Can be a test or production key.\n    applicationName = "THEOplayer Demo",\n    userConsent = "1",\n    childDirected = false,\n    secureTransmission = true,\n    usagePropertiesAutoUpdateMode = 1,\n    debug = true\n)\nval metadata = ComscoreMetaData(\n    mediaType = ComscoreMediaType.LONG_FORM_ON_DEMAND,\n    uniqueId = "testuniqueId",\n    length = 634,\n    stationTitle = "THEOTV",\n    programTitle = "Big Buck Bunny",\n    episodeTitle = "Intro",\n    genreName = "Animation",\n    classifyAsAudioStream = false,\n    c3 = "c3value",\n    c4 = "c4value",\n    c6 = "c6value",\n    stationCode = null,\n    networkAffiliate = null,\n    publisherName = null,\n    programId = null,\n    episodeId = null,\n    episodeSeasonNumber = null,\n    episodeNumber = null,\n    genreId = null,\n    carryTvAdvertisementLoad = null,\n    classifyAsCompleteEpisode = null,\n    dateOfProduction = null,\n    timeOfProduction = null,\n    dateOfTvAiring = null,\n    timeOfTvAiring = null,\n    dateOfDigitalAiring = null,\n    timeOfDigitalAiring = null,\n    feedType = null,\n    deliveryMode = null,\n    deliverySubscriptionType = null,\n    deliveryComposition = null,\n    deliveryAdvertisementCapability = null,\n    mediaFormat = null,\n    distributionModel = null,\n    playlistTitle = null,\n    totalSegments = null,\n    clipUrl = null,\n    videoDimension = null,\n    customLabels = emptyMap(),\n)\n\nval comscore = ComscoreConnector(this, theoplayerView.player, comscoreConfiguration, metadata)\n\nval playerConfig = THEOplayerConfig.Builder()\n    .analytics(comscore)\n    .build()\n\nval theoplayerView = THEOplayerView(this)\ntheoplayerView.config = playerConfig\n\nval theoplayer = theoplayerView.theoplayer\ntheoplayer.source = SourceDescription.Builder()\n    .sources("YOUR_SOURCE_URL_HERE")\n    .build()\n\ntheoplayerView.onCreatePlayer { player ->\n    // Initialize Comscore connector\n    comscore.init(player)\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"passing-metadata-dynamically",children:"Passing Metadata Dynamically"}),"\n",(0,r.jsx)(t.p,{children:"The connector allows passing or updating the current asset's metadata at any time:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"comscoreConnector.update(ComscoreMetaData())\n"})}),"\n",(0,r.jsx)(t.h3,{id:"comscoremetadata-fields",children:"ComscoreMetadata Fields"}),"\n",(0,r.jsxs)(t.p,{children:["Based on the ",(0,r.jsx)(t.code,{children:"ComscoreMetaData"})," type, you can tell which fields are mandatory and which aren't. Note that this is purely for the integration to work correctly. Depending on the Comscore solution you are using, different fields are required/optional. The mandatory fields in the ",(0,r.jsx)(t.code,{children:"ComscoreMetadata"})," type are the ones that are mandatory for all three Comscore solutions:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Video Metrix (V)"}),"\n",(0,r.jsx)(t.li,{children:"Cross Platform Product Suite (X)"}),"\n",(0,r.jsx)(t.li,{children:"Cross Media Audience Measurement (C)"}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Required"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"mediaType"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"uniqueId"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"length"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"c3"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"V"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"c4"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"V"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"c6"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"V"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"stationTitle"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"stationCode"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"networkAffiliate"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"publisherName"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"X C"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"V"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"programTitle"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"programId"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"V C"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"episodeTitle"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"episodeId"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"X C"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"episodeSeasonNumber"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"X C"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"episodeNumber"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"X C"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"genreName"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"genreId"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"carryTvAdvertisementLoad"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"classifyAsCompleteEpisode"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"dateOfProduction"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"C"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"timeOfProduction"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"C"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"dateOfTvAiring"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"X C"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"timeOfTvAiring"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"X C"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"dateOfDigitalAiring"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"X C"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"timeOfDigitalAiring"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"X C"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"feedType"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"classifyAsAudioStream"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"deliveryMode"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"deliverySubscriptionType"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"deliveryComposition"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"deliveryAdvertisementCapability"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"mediaFormat"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"distributionModel"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"playlistTitle"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"C"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"totalSegments"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"V C"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"clipUrl"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"V C"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"videoDimension"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"C"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"customLabels"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]})]})]})]})}function a(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return s}});var l=n(67294);let r={},i=l.createContext(r);function s(e){let t=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);