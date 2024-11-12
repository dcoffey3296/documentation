"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[13201],{76728:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var r=n(74848),s=n(28453);const l={slug:"/connectors/ios/comscore/getting-started",title:"Getting started",description:"Set up your connector in just a few minutes!",sidebar_custom_props:{icon:"\ud83d\ude80 "}},i="THEOPlayer \ud83e\udd1d Comscore",d={id:"external/iOS-Connector/Code/Comscore/README",title:"Getting started",description:"Set up your connector in just a few minutes!",source:"@site/theoplayer/external/iOS-Connector/Code/Comscore/README.md",sourceDirName:"external/iOS-Connector/Code/Comscore",slug:"/connectors/ios/comscore/getting-started",permalink:"/documentation/pr-preview/pr-148/theoplayer/connectors/ios/comscore/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/iOS-Connector/blob/-/Code/Comscore/README.md",tags:[],version:"current",frontMatter:{slug:"/connectors/ios/comscore/getting-started",title:"Getting started",description:"Set up your connector in just a few minutes!",sidebar_custom_props:{icon:"\ud83d\ude80 "}},sidebar:"ios",previous:{title:"Comscore",permalink:"/documentation/pr-preview/pr-148/theoplayer/connectors/ios/comscore"},next:{title:"Examples",permalink:"/documentation/pr-preview/pr-148/theoplayer/connectors/ios/comscore/examples"}},c={},o=[{value:"Installation",id:"installation",level:2},{value:"Cocoapods",id:"cocoapods",level:3},{value:"Usage",id:"usage",level:2},{value:"Which metadata do I need to provide?",id:"which-metadata-do-i-need-to-provide",level:2},{value:"ComscoreMetadata fields",id:"comscoremetadata-fields",level:3}];function x(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"theoplayer--comscore",children:"THEOPlayer \ud83e\udd1d Comscore"})}),"\n",(0,r.jsx)(t.p,{children:"THEOplayer-Connector-Comscore provides an integration between the THEOplayerSDK and ComScore."}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.h3,{id:"cocoapods",children:(0,r.jsx)(t.a,{href:"https://guides.cocoapods.org/using/getting-started.html#getting-started",children:"Cocoapods"})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Create a Podfile if you don't already have one. From the root of your project directory, run the following command: ",(0,r.jsx)(t.code,{children:"pod init"})]}),"\n",(0,r.jsxs)(t.li,{children:["To your Podfile, add links to the registry of Cocoapods: ",(0,r.jsx)(t.code,{children:"source 'https://cdn.cocoapods.org/'"}),". If this fails, bypass their CDN by using ",(0,r.jsx)(t.code,{children:"source 'https://github.com/CocoaPods/Specs.git'"})]}),"\n",(0,r.jsxs)(t.li,{children:["To your Podfile, add the connector pods that you want to use in your app: ",(0,r.jsx)(t.code,{children:"pod 'THEOplayer-Connector-Comscore'"})]}),"\n",(0,r.jsxs)(t.li,{children:["Install the pods using ",(0,r.jsx)(t.code,{children:"pod install"})," , then open your ",(0,r.jsx)(t.code,{children:".xcworkspace"})," file to see the project in Xcode."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"To support custom feature builds of THEOplayerSDK perform the following steps:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Clone this repository to your computer."}),"\n",(0,r.jsxs)(t.li,{children:["Use a ",(0,r.jsx)(t.a,{href:"https://guides.cocoapods.org/using/the-podfile.html#using-the-files-from-a-folder-local-to-the-machine",children:"local override"})," of the ",(0,r.jsx)(t.code,{children:"THEOplayerSDK-basic"})," pod by adding the following line to your projects Podfile: ",(0,r.jsx)(t.code,{children:"pod 'THEOplayerSDK-basic', :path => 'iOS-Connector/Helpers/TheoPod'"})," and make sure the path points to the ",(0,r.jsx)(t.a,{href:"https://github.com/THEOplayer/iOS-Connector/blob/-/Helpers/TheoPod",children:"TheoPod folder"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:["Import the ",(0,r.jsx)(t.code,{children:"THEOplayerConnectorComscore"})," module"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"import THEOplayerConnectorComscore\n"})}),"\n",(0,r.jsx)(t.p,{children:"Create a ComScoreConfiguration that contains your publisherId (also referroed to customer or c2 id), app name, an indication of whether the user has granted his/her consent for tracking, an adIdProcessor (if you want to extract and manipulate ad id's that will be reported to ComScore, by default we use THEOplayerSDK.Ad.id) and a debugging flag (for extra logging) :"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:'let configuration = ComScoreConfiguration(\n    publisherId: "<your id>",\n    applicationName: "<your application name>",\n    userConsent: .granted,\n    adIdProcessor: nil,\n    debug: true\n)\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Create a ",(0,r.jsx)(t.code,{children:"ComscoreConnector"})," that uses this ",(0,r.jsx)(t.code,{children:"configuration"}),", your ",(0,r.jsx)(t.code,{children:"THEOplayer"})," instance and a valid ",(0,r.jsx)(t.code,{children:"ComScoreMetadata"})," instance for the first content you will load to the player. You can change the metadata dynamically later on if necessary:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:'let connector = ComscoreConnector(\n    configuration: configuration,\n    player: yourTHEOplayer,\n    metadata: ComScoreMetadata(\n        mediaType: .shortFormOnDemand,\n        uniqueId: "0123ABC",\n        length: 596,\n        stationTitle: "THEO TV",\n        programTitle: "Big Buck Bunny",\n        episodeTitle: "Example Title",\n        genreName: "animation",\n        classifyAsAudioStream: false)\n)\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Note that if you are using Google IMA connector, you must make sure it's registered before you initialize the ",(0,r.jsx)(t.code,{children:"ComscoreConnector"}),". Otherwise it will fail to hook into the ad related events."]}),"\n",(0,r.jsx)(t.h2,{id:"which-metadata-do-i-need-to-provide",children:"Which metadata do I need to provide?"}),"\n",(0,r.jsx)(t.h3,{id:"comscoremetadata-fields",children:"ComscoreMetadata fields"}),"\n",(0,r.jsxs)(t.p,{children:["Based on the ",(0,r.jsx)(t.code,{children:"ComScoreMetadata"})," constructor, you can tell which fields are mandatory and which aren't. Note that this is purely for the integration to work correctly. Depending on the Comscore solution you are using, different fields are required/optional. The mandatory fields in the ",(0,r.jsx)(t.code,{children:"ComScoreMetadata"})," type are the ones that are mandatory for all three Comscore solutions:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Video Metrix (V)"}),"\n",(0,r.jsx)(t.li,{children:"Cross Platform Product Suite (X)"}),"\n",(0,r.jsx)(t.li,{children:"Cross Media Audience Measurement (C)"}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Required"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"mediaType"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"uniqueId"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"length"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"c3?"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"V"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"c4?"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"V"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"c6?"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"V"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"stationTitle"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"stationCode?"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"networkAffiliate?"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"publisherName?"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"X C"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"V"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"programTitle"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"programId?"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"V C"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"episodeTitle"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"episodeId?"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"X C"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"episodeSeasonNumber?"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"X C"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"episodeNumber?"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"X C"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"genreName"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"genreId?"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"carryTvAdvertisementLoad?"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"classifyAsCompleteEpisode?"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"dateOfProduction?"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"C"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"timeOfProduction?"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"C"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"dateOfTvAiring?"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"X C"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"timeOfTvAiring?"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"X C"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"dateOfDigitalAiring?"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"X C"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"timeOfDigitalAiring?"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"X C"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"feedType?"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"classifyAsAudioStream"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Al"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"deliveryMode?"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"deliverySubscriptionType?"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"deliveryComposition?"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"deliveryAdvertisementCapability?"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"mediaFormat?"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"distributionModel?"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"playlistTitle?"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"C"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"totalSegments?"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"V C"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"clipUrl?"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"V C"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"videoDimension?"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"C"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"customLabels?"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"All"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var r=n(96540);const s={},l=r.createContext(s);function i(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);