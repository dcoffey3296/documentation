"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[61328],{82837:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var t=n(74848),i=n(28453);const r={slug:"/connectors/ios/conviva-verizonmedia/getting-started",title:"Getting started",description:"Set up your connector in just a few minutes!",sidebar_custom_props:{icon:"\ud83d\ude80 "}},a="THEOPlayer \ud83e\udd1d Conviva",s={id:"external/iOS-Connector/Code/Conviva-VerizonMedia/README",title:"Getting started",description:"Set up your connector in just a few minutes!",source:"@site/theoplayer/external/iOS-Connector/Code/Conviva-VerizonMedia/README.md",sourceDirName:"external/iOS-Connector/Code/Conviva-VerizonMedia",slug:"/connectors/ios/conviva-verizonmedia/getting-started",permalink:"/documentation/pr-preview/pr-144/theoplayer/connectors/ios/conviva-verizonmedia/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/iOS-Connector/blob/-/Code/Conviva-VerizonMedia/README.md",tags:[],version:"current",frontMatter:{slug:"/connectors/ios/conviva-verizonmedia/getting-started",title:"Getting started",description:"Set up your connector in just a few minutes!",sidebar_custom_props:{icon:"\ud83d\ude80 "}},sidebar:"ios",previous:{title:"Conviva with Verizon Media",permalink:"/documentation/pr-preview/pr-144/theoplayer/connectors/ios/conviva-verizonmedia"},next:{title:"Examples",permalink:"/documentation/pr-preview/pr-144/theoplayer/connectors/ios/conviva-verizonmedia/examples"}},c={},l=[{value:"Installation",id:"installation",level:2},{value:"Swift Package Manager",id:"swift-package-manager",level:3},{value:"Cocoapods",id:"cocoapods",level:3},{value:"Usage",id:"usage",level:2}];function d(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.header,{children:(0,t.jsx)(o.h1,{id:"theoplayer--conviva",children:"THEOPlayer \ud83e\udd1d Conviva"})}),"\n",(0,t.jsx)(o.p,{children:"The THEOplayer-Connector-Conviva-VerizonMedia for iOS provides an integration between the THEOplayerSDK and ConvivaSDK. It connects to the Conviva backend and reports events fired from THEOplayer instances (including VerizonMedia ad events)."}),"\n",(0,t.jsxs)(o.p,{children:["For example xcode projects with this connector see ",(0,t.jsx)(o.a,{href:"/documentation/pr-preview/pr-144/theoplayer/connectors/ios/conviva-verizonmedia/examples",children:"Conviva-VerizonMedia-Examples"}),"."]}),"\n",(0,t.jsx)(o.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(o.h3,{id:"swift-package-manager",children:(0,t.jsx)(o.a,{href:"https://swift.org/package-manager/",children:"Swift Package Manager"})}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["In Xcode, install the Conviva libraries by navigating to ",(0,t.jsx)(o.strong,{children:"File > Add Packages"})]}),"\n",(0,t.jsxs)(o.li,{children:["In the prompt that appears, select the iOS-Connector GitHub repository: ",(0,t.jsx)(o.code,{children:"https://github.com/THEOplayer/iOS-Connector"})]}),"\n",(0,t.jsx)(o.li,{children:"Select the version you want to use."}),"\n",(0,t.jsx)(o.li,{children:"Choose the Connector libraries you want to include in your app."}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:"Because the VerizonMedia feature requires a custom build of the THEOplayerSDK perform the following steps:"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsx)(o.li,{children:"Clone this repository to your computer."}),"\n",(0,t.jsxs)(o.li,{children:["Use a ",(0,t.jsx)(o.a,{href:"https://developer.apple.com/documentation/xcode/editing-a-package-dependency-as-a-local-package",children:"local override"})," of the ",(0,t.jsx)(o.code,{children:"theoplayer-sdk-ios"})," package by selecting the folder ",(0,t.jsx)(o.code,{children:"../../Helpers/TheoSPM/theoplayer-sdk-ios"})," in Finder and dragging it into the Project navigator of your Xcode project."]}),"\n",(0,t.jsxs)(o.li,{children:["Place your custom THEOplayerSDK.xcframework at ",(0,t.jsx)(o.code,{children:"../../Helpers/TheoSPM/theoplayer-sdk-ios/THEOplayerSDK.xcframework"}),". (It is also possible to place your xcframework somewhere else. In that case make sure to update the ",(0,t.jsx)(o.a,{href:"https://github.com/THEOplayer/iOS-Connector/blob/-/Helpers/TheoSPM/theoplayer-sdk-ios/Package.swift",children:"Package.swift"})," manifest inside the your local override so that it points to your custom THEOplayer build)"]}),"\n",(0,t.jsxs)(o.li,{children:["If Xcode complains about a missing xcframework","\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["Choose ",(0,t.jsx)(o.code,{children:"File"})," > ",(0,t.jsx)(o.code,{children:"Packages"})," > ",(0,t.jsx)(o.code,{children:"Reset Package Caches"})," from the menu bar."]}),"\n",(0,t.jsxs)(o.li,{children:["If it is still not working, make sure to remove any ",(0,t.jsx)(o.code,{children:"THEOplayerSDK.xcframework"})," inclusions that you manually installed before installing this THEOplayer-Connector-Conviva package."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"cocoapods",children:(0,t.jsx)(o.a,{href:"https://guides.cocoapods.org/using/getting-started.html#getting-started",children:"Cocoapods"})}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["Create a Podfile if you don't already have one. From the root of your project directory, run the following command: ",(0,t.jsx)(o.code,{children:"pod init"})]}),"\n",(0,t.jsxs)(o.li,{children:["To your Podfile, add the Conviva connector pods that you want to use in your app: ",(0,t.jsx)(o.code,{children:"pod 'THEOplayer-Connector-Conviva'"})]}),"\n",(0,t.jsxs)(o.li,{children:["Install the pods using ",(0,t.jsx)(o.code,{children:"pod install"})," , then open your ",(0,t.jsx)(o.code,{children:".xcworkspace"})," file to see the project in Xcode."]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:"Because the VerizonMedia feature requires a custom build of the THEOplayerSDK perform the following steps:"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsx)(o.li,{children:"Clone this repository to your computer."}),"\n",(0,t.jsxs)(o.li,{children:["Use a ",(0,t.jsx)(o.a,{href:"https://guides.cocoapods.org/using/the-podfile.html#using-the-files-from-a-folder-local-to-the-machine",children:"local override"})," of the ",(0,t.jsx)(o.code,{children:"THEOplayerSDK-basic"})," pod by adding the following line to your projects Podfile: ",(0,t.jsx)(o.code,{children:"pod 'THEOplayerSDK-basic', :path => 'iOS-Connector/Helpers/TheoPod'"})," and make sure the path points to the ",(0,t.jsx)(o.a,{href:"https://github.com/THEOplayer/iOS-Connector/blob/Helpers/TheoPod",children:"TheoPod folder"}),"."]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(o.p,{children:["Import the ",(0,t.jsx)(o.code,{children:"THEOplayerConnectorConviva"})," module"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-swift",children:"import THEOplayerConnectorConviva\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Create a ",(0,t.jsx)(o.code,{children:"ConvivaConfiguration"})," that contains the info on how to connect to your conviva endpoint:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-swift",children:'let configuration = ConvivaConfiguration(\n    customerKey: "put your customer key here",\n    gatewayURL: " put your  gateway URL here ",\n    logLevel: .LOGLEVEL_FUNC\n)\n'})}),"\n",(0,t.jsxs)(o.p,{children:["Create a ",(0,t.jsx)(o.code,{children:"ConvivaConnectorVerizonMedia"})," that uses this ",(0,t.jsx)(o.code,{children:"configuration"})," and your ",(0,t.jsx)(o.code,{children:"THEOplayer"})," instance:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-swift",children:"import THEOplayerConnectorConvivaVerizonMedia\nlet connector = ConvivaConnectorVerizonMedia(\n    configuration: configuration,\n    player: yourTHEOplayer\n)\n"})}),"\n",(0,t.jsx)(o.p,{children:"Set report the viewer's ID:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-swift",children:'connector.report(viewerID: "John Doe")\n'})}),"\n",(0,t.jsx)(o.p,{children:"For each asset that you play, set it's name using:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-swift",children:'connector.report(assetName: "Star Wars episode II")\n'})}),"\n",(0,t.jsx)(o.p,{children:"Hold a reference to your connector. Once the connector is released from memory it will clean up itself and stop reporting to Conviva."})]})}function h(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>a,x:()=>s});var t=n(96540);const i={},r=t.createContext(i);function a(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);