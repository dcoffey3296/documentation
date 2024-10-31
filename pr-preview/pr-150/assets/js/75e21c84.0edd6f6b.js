"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[46198],{49445:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>a,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var l=n(74848),r=n(28453);const i={slug:"/connectors/android/comscore/getting-started",title:"Getting started",description:"Set up your connector in just a few minutes!",sidebar_custom_props:{icon:"\ud83d\ude80 "}},s="THEOplayer Android Comscore Connector",d={id:"external/android-connector/connectors/analytics/comscore/README",title:"Getting started",description:"Set up your connector in just a few minutes!",source:"@site/theoplayer_versioned_docs/version-v7/external/android-connector/connectors/analytics/comscore/README.md",sourceDirName:"external/android-connector/connectors/analytics/comscore",slug:"/connectors/android/comscore/getting-started",permalink:"/documentation/pr-preview/pr-150/theoplayer/v7/connectors/android/comscore/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/android-connector/blob/-/connectors/analytics/comscore/README.md",tags:[],version:"v7",frontMatter:{slug:"/connectors/android/comscore/getting-started",title:"Getting started",description:"Set up your connector in just a few minutes!",sidebar_custom_props:{icon:"\ud83d\ude80 "}},sidebar:"android",previous:{title:"Comscore",permalink:"/documentation/pr-preview/pr-150/theoplayer/v7/connectors/android/comscore"},next:{title:"Conviva",permalink:"/documentation/pr-preview/pr-150/theoplayer/v7/connectors/android/conviva"}},c={},o=[{value:"Usage",id:"usage",level:2},{value:"Configuring the Connector",id:"configuring-the-connector",level:3},{value:"Passing Metadata Dynamically",id:"passing-metadata-dynamically",level:3},{value:"ComscoreMetadata Fields",id:"comscoremetadata-fields",level:3}];function x(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"theoplayer-android-comscore-connector",children:"THEOplayer Android Comscore Connector"})}),"\n",(0,l.jsx)(t.p,{children:"A Comscore analytics connector for use with THEOplayer in Android applications."}),"\n",(0,l.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(t.h3,{id:"configuring-the-connector",children:"Configuring the Connector"}),"\n",(0,l.jsxs)(t.p,{children:["Create the connector by providing the ",(0,l.jsx)(t.code,{children:"THEOplayer"})," instance, a ",(0,l.jsx)(t.code,{children:"ComscoreConfiguration"})," (which contains your publisher id), and the ",(0,l.jsx)(t.code,{children:"ComscoreMetadata"})," of the first source you will set to the player (you can change it dynamically throughout the entire lifecycle of the connector):"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-kotlin",children:'val comscoreConfiguration = ComscoreConfiguration(\n    publisherId = "<your publisher ID here>", // Can be a test or production key.\n    applicationName = "THEOplayer Demo",\n    userConsent = "1",\n    childDirected = false,\n    secureTransmission = true,\n    usagePropertiesAutoUpdateMode = 1,\n    debug = true\n)\nval metadata = ComscoreMetaData(\n    mediaType = ComscoreMediaType.LONG_FORM_ON_DEMAND,\n    uniqueId = "testuniqueId",\n    length = 634,\n    stationTitle = "THEOTV",\n    programTitle = "Big Buck Bunny",\n    episodeTitle = "Intro",\n    genreName = "Animation",\n    classifyAsAudioStream = false,\n    c3 = "c3value",\n    c4 = "c4value",\n    c6 = "c6value",\n    stationCode = null,\n    networkAffiliate = null,\n    publisherName = null,\n    programId = null,\n    episodeId = null,\n    episodeSeasonNumber = null,\n    episodeNumber = null,\n    genreId = null,\n    carryTvAdvertisementLoad = null,\n    classifyAsCompleteEpisode = null,\n    dateOfProduction = null,\n    timeOfProduction = null,\n    dateOfTvAiring = null,\n    timeOfTvAiring = null,\n    dateOfDigitalAiring = null,\n    timeOfDigitalAiring = null,\n    feedType = null,\n    deliveryMode = null,\n    deliverySubscriptionType = null,\n    deliveryComposition = null,\n    deliveryAdvertisementCapability = null,\n    mediaFormat = null,\n    distributionModel = null,\n    playlistTitle = null,\n    totalSegments = null,\n    clipUrl = null,\n    videoDimension = null,\n    customLabels = emptyMap(),\n)\n\nval comscore = ComscoreConnector(this, theoplayerView.player, comscoreConfiguration, metadata)\n\nval playerConfig = THEOplayerConfig.Builder()\n    .analytics(comscore)\n    .build()\n\nval theoplayerView = THEOplayerView(this)\ntheoplayerView.config = playerConfig\n\nval theoplayer = theoplayerView.theoplayer\ntheoplayer.source = SourceDescription.Builder()\n    .sources("YOUR_SOURCE_URL_HERE")\n    .build()\n\ntheoplayerView.onCreatePlayer { player ->\n    // Initialize Comscore connector\n    comscore.init(player)\n}\n'})}),"\n",(0,l.jsx)(t.h3,{id:"passing-metadata-dynamically",children:"Passing Metadata Dynamically"}),"\n",(0,l.jsx)(t.p,{children:"The connector allows passing or updating the current asset's metadata at any time:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-kotlin",children:"comscoreConnector.update(ComscoreMetaData())\n"})}),"\n",(0,l.jsx)(t.h3,{id:"comscoremetadata-fields",children:"ComscoreMetadata Fields"}),"\n",(0,l.jsxs)(t.p,{children:["Based on the ",(0,l.jsx)(t.code,{children:"ComscoreMetaData"})," type, you can tell which fields are mandatory and which aren't. Note that this is purely for the integration to work correctly. Depending on the Comscore solution you are using, different fields are required/optional. The mandatory fields in the ",(0,l.jsx)(t.code,{children:"ComscoreMetadata"})," type are the ones that are mandatory for all three Comscore solutions:"]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Video Metrix (V)"}),"\n",(0,l.jsx)(t.li,{children:"Cross Platform Product Suite (X)"}),"\n",(0,l.jsx)(t.li,{children:"Cross Media Audience Measurement (C)"}),"\n"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Property"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Required"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Optional"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"mediaType"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"All"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"uniqueId"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"All"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"length"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"All"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"c3"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"V"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"c4"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"V"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"c6"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"V"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"stationTitle"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"All"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"stationCode"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"networkAffiliate"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"publisherName"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"X C"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"V"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"programTitle"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"All"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"programId"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"V C"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"episodeTitle"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"All"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"episodeId"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"X C"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"episodeSeasonNumber"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"X C"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"episodeNumber"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"X C"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"genreName"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"All"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"genreId"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"carryTvAdvertisementLoad"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"classifyAsCompleteEpisode"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"dateOfProduction"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"C"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"timeOfProduction"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"C"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"dateOfTvAiring"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"X C"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"timeOfTvAiring"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"X C"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"dateOfDigitalAiring"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"X C"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"timeOfDigitalAiring"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"X C"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"feedType"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"classifyAsAudioStream"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"All"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"deliveryMode"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"deliverySubscriptionType"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"deliveryComposition"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"deliveryAdvertisementCapability"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"mediaFormat"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"distributionModel"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"playlistTitle"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"C"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"totalSegments"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"V C"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"clipUrl"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"V C"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"videoDimension"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"C"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"customLabels"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>d});var l=n(96540);const r={},i=l.createContext(r);function s(e){const t=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);