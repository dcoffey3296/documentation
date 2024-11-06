"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38174],{54019:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var o=t(74848),s=t(28453);const r={slug:"/connectors/ios/nielsen/getting-started",title:"Getting started",description:"Set up your connector in just a few minutes!",sidebar_custom_props:{icon:"\ud83d\ude80 "}},i="THEOPlayer \ud83e\udd1d Nielsen",l={id:"external/iOS-Connector/Code/Nielsen/README",title:"Getting started",description:"Set up your connector in just a few minutes!",source:"@site/theoplayer/external/iOS-Connector/Code/Nielsen/README.md",sourceDirName:"external/iOS-Connector/Code/Nielsen",slug:"/connectors/ios/nielsen/getting-started",permalink:"/documentation/pr-preview/pr-154/theoplayer/connectors/ios/nielsen/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/iOS-Connector/blob/-/Code/Nielsen/README.md",tags:[],version:"current",frontMatter:{slug:"/connectors/ios/nielsen/getting-started",title:"Getting started",description:"Set up your connector in just a few minutes!",sidebar_custom_props:{icon:"\ud83d\ude80 "}},sidebar:"ios",previous:{title:"Nielsen",permalink:"/documentation/pr-preview/pr-154/theoplayer/connectors/ios/nielsen"},next:{title:"Yospace",permalink:"/documentation/pr-preview/pr-154/theoplayer/connectors/ios/yospace"}},c={},a=[{value:"Installation",id:"installation",level:2},{value:"Swift Package Manager",id:"swift-package-manager",level:3},{value:"Cocoapods",id:"cocoapods",level:3},{value:"Usage",id:"usage",level:2},{value:"What events does this connector report to Nielsen?",id:"what-events-does-this-connector-report-to-nielsen",level:2},{value:"Basic playback events",id:"basic-playback-events",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"theoplayer--nielsen",children:"THEOPlayer \ud83e\udd1d Nielsen"})}),"\n",(0,o.jsx)(n.p,{children:"THEOplayer-Connector-Nielsen provides an integration between the THEOplayerSDK and NielsenAppSDK & NielsenTVOSAppSDK. It connects to the Nielsen backend and reports events fired from THEOplayer instances."}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(n.h3,{id:"swift-package-manager",children:(0,o.jsx)(n.a,{href:"https://swift.org/package-manager/",children:"Swift Package Manager"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["In Xcode, install the Nielsen connector by navigating to ",(0,o.jsx)(n.strong,{children:"File > Add Packages"})]}),"\n",(0,o.jsxs)(n.li,{children:["In the prompt that appears, select the iOS-Connector GitHub repository: ",(0,o.jsx)(n.code,{children:"https://github.com/THEOplayer/iOS-Connector"})]}),"\n",(0,o.jsx)(n.li,{children:"Select the version you want to use."}),"\n",(0,o.jsx)(n.li,{children:"Choose the Connector libraries you want to include in your app."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"To support custom feature builds of THEOplayerSDK perform the following steps:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Clone this repository to your computer."}),"\n",(0,o.jsxs)(n.li,{children:["Use a ",(0,o.jsx)(n.a,{href:"https://developer.apple.com/documentation/xcode/editing-a-package-dependency-as-a-local-package",children:"local override"})," of the ",(0,o.jsx)(n.code,{children:"theoplayer-sdk-ios"})," package by selecting the folder ",(0,o.jsx)(n.code,{children:"../../Helpers/TheoSPM/theoplayer-sdk-ios"})," in Finder and dragging it into the Project navigator of your Xcode project."]}),"\n",(0,o.jsxs)(n.li,{children:["Place your custom THEOplayerSDK.xcframework at ",(0,o.jsx)(n.code,{children:"../../Helpers/TheoSPM/theoplayer-sdk-ios/THEOplayerSDK.xcframework"}),". (It is also possible to place your xcframework somewhere else. In that case make sure to update the ",(0,o.jsx)(n.a,{href:"https://github.com/THEOplayer/iOS-Connector/blob/-/Helpers/TheoSPM/theoplayer-sdk-ios/Package.swift",children:"Package.swift"})," manifest inside the your local override so that it points to your custom THEOplayer build)"]}),"\n",(0,o.jsxs)(n.li,{children:["If Xcode complains about a missing xcframework","\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Choose ",(0,o.jsx)(n.code,{children:"File"})," > ",(0,o.jsx)(n.code,{children:"Packages"})," > ",(0,o.jsx)(n.code,{children:"Reset Package Caches"})," from the menu bar."]}),"\n",(0,o.jsxs)(n.li,{children:["If it is still not working, make sure to remove any ",(0,o.jsx)(n.code,{children:"THEOplayerSDK.xcframework"})," inclusions that you manually installed before installing this connector package."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"cocoapods",children:(0,o.jsx)(n.a,{href:"https://guides.cocoapods.org/using/getting-started.html#getting-started",children:"Cocoapods"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Create a Podfile if you don't already have one. From the root of your project directory, run the following command: ",(0,o.jsx)(n.code,{children:"pod init"})]}),"\n",(0,o.jsxs)(n.li,{children:["To your Podfile, add links to the registries of Cocoapods and Nielsen: ",(0,o.jsx)(n.code,{children:"source 'https://cdn.cocoapods.org/'"})," and ",(0,o.jsx)(n.code,{children:"source 'https://github.com/NielsenDigitalSDK/nielsenappsdk-ios-specs-dynamic.git'"})]}),"\n",(0,o.jsxs)(n.li,{children:["To your Podfile, add the connector pods that you want to use in your app: ",(0,o.jsx)(n.code,{children:"pod 'THEOplayer-Connector-Nielsen'"})]}),"\n",(0,o.jsxs)(n.li,{children:["Install the pods using ",(0,o.jsx)(n.code,{children:"pod install"})," , then open your ",(0,o.jsx)(n.code,{children:".xcworkspace"})," file to see the project in Xcode."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"To support custom feature builds of THEOplayerSDK perform the following steps:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Clone this repository to your computer."}),"\n",(0,o.jsxs)(n.li,{children:["Use a ",(0,o.jsx)(n.a,{href:"https://guides.cocoapods.org/using/the-podfile.html#using-the-files-from-a-folder-local-to-the-machine",children:"local override"})," of the ",(0,o.jsx)(n.code,{children:"THEOplayerSDK-basic"})," pod by adding the following line to your projects Podfile: ",(0,o.jsx)(n.code,{children:"pod 'THEOplayerSDK-basic', :path => 'iOS-Connector/Helpers/TheoPod'"})," and make sure the path points to the ",(0,o.jsx)(n.a,{href:"https://github.com/THEOplayer/iOS-Connector/blob/-/Helpers/TheoPod",children:"TheoPod folder"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:["Import the ",(0,o.jsx)(n.code,{children:"THEOplayerConnectorNielsen"})," module"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-swift",children:"import THEOplayerConnectorNielsen\n"})}),"\n",(0,o.jsx)(n.p,{children:"Create a Dictionary that contains the info on how to connect to your Nielsen endpoint:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-swift",children:'let configuration = [\n  "appid": "XXYnnnnnn-XnnX-nXXn-nXnn-XnnnnXnnnXnX",\n  "appversion": "n.n",\n  "appname": "Theo Nielsen Sample App",\n  "nol_devDebug": "DEBUG"\n]\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Create a ",(0,o.jsx)(n.code,{children:"NielsenConnector"})," that uses this ",(0,o.jsx)(n.code,{children:"configuration"})," and your ",(0,o.jsx)(n.code,{children:"THEOplayer"})," instance:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-swift",children:"let connector = NielsenConnector(\n    configuration: configuration,\n    player: yourTHEOplayer\n)\n"})}),"\n",(0,o.jsx)(n.p,{children:"Hold a reference to your connector. Once the connector is released from memory it will clean up itself and stop reporting to Nielsen."}),"\n",(0,o.jsx)(n.h2,{id:"what-events-does-this-connector-report-to-nielsen",children:"What events does this connector report to Nielsen?"}),"\n",(0,o.jsx)(n.h3,{id:"basic-playback-events",children:"Basic playback events"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"THEOplayer event"}),(0,o.jsx)(n.th,{children:"NielsenAppApi report func"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"PlayerEventTypes.LOADED_META_DATA"}),(0,o.jsx)(n.td,{children:"loadMetadata(_ metadata: Any?)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"PlayerEventTypes.PAUSE"}),(0,o.jsx)(n.td,{children:"stop()"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"PlayerEventTypes.SOURCE_CHANGE"}),(0,o.jsx)(n.td,{children:"end()"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"PlayerEventTypes.ENDED"}),(0,o.jsx)(n.td,{children:"end()"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"PlayerEventTypes.DESTROY"}),(0,o.jsx)(n.td,{children:"end()"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"TextTrackEventTypes.ENTER_CUE"}),(0,o.jsx)(n.td,{children:"sendID3(_ data: String)"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var o=t(96540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);