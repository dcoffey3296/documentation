"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[57481],{72874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(74848),a=n(28453);const i={slug:"/flutter/guides/creating-minimal-app"},o="Creating a minimal demo app",l={id:"external/flutter-theoplayer-sdk/doc/creating-minimal-app",title:"Creating a minimal demo app",description:"In this section we start from an empty Flutter project, include a dependency to fluttertheoplayersdk, and deploy it on an Android or iOS device.",source:"@site/theoplayer/external/flutter-theoplayer-sdk/doc/creating-minimal-app.md",sourceDirName:"external/flutter-theoplayer-sdk/doc",slug:"/flutter/guides/creating-minimal-app",permalink:"/documentation/pr-preview/pr-151/theoplayer/flutter/guides/creating-minimal-app",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/-/doc/creating-minimal-app.md",tags:[],version:"current",frontMatter:{slug:"/flutter/guides/creating-minimal-app"},sidebar:"flutter",previous:{title:"Getting started",permalink:"/documentation/pr-preview/pr-151/theoplayer/getting-started/frameworks/flutter/getting-started"},next:{title:"Custom branches",permalink:"/documentation/pr-preview/pr-151/theoplayer/flutter/guides/custom-branches"}},d={},s=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Setting up a new project",id:"setting-up-a-new-project",level:2},{value:"Getting a new project ready",id:"getting-a-new-project-ready",level:3},{value:"Adding THEOplayer Flutter SDK",id:"adding-theoplayer-flutter-sdk",level:3},{value:"Option 1: Adding THEOplayer Flutter SDK as dependency (Recommended)",id:"option-1-adding-theoplayer-flutter-sdk-as-dependency-recommended",level:4},{value:"Option 2: Adding THEOplayer Flutter SDK as submodule",id:"option-2-adding-theoplayer-flutter-sdk-as-submodule",level:4},{value:"Adding THEOplayer to your view hierarchy",id:"adding-theoplayer-to-your-view-hierarchy",level:3},{value:"Getting started on Android",id:"getting-started-on-android",level:2},{value:"Getting started on iOS",id:"getting-started-on-ios",level:2},{value:"Getting started on Web",id:"getting-started-on-web",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"creating-a-minimal-demo-app",children:"Creating a minimal demo app"})}),"\n",(0,r.jsxs)(t.p,{children:["In this section we start from an empty Flutter project, include a dependency to ",(0,r.jsx)(t.code,{children:"flutter_theoplayer_sdk"}),", and deploy it on an Android or iOS device."]}),"\n",(0,r.jsx)(t.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#setting-up-a-new-project",children:"Setting up a new project"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#getting-started-on-android",children:"Getting started on Android"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#getting-started-on-ios",children:"Getting started on iOS"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#getting-started-on-web",children:"Getting started on Web"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"setting-up-a-new-project",children:"Setting up a new project"}),"\n",(0,r.jsx)(t.h3,{id:"getting-a-new-project-ready",children:"Getting a new project ready"}),"\n",(0,r.jsxs)(t.p,{children:["After ",(0,r.jsx)(t.a,{href:"https://docs.flutter.dev/get-started/install",children:"setting up your Flutter development environment"}),"\nyou can run the following command to create a new project from Terminal. (You can use Android Studio too)"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'$ flutter create -a kotlin -i swift -t app --org com.theoplayer --description "New THEOplayer project" --project-name "flutter_theoplayer_sample_app" --platform web,ios,android flutter_theoplayer_sample_app\n'})}),"\n",(0,r.jsx)(t.p,{children:"This will generate a basic project as a starting point for Android, iOS and Web development."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'Signing iOS app for device deployment using developer identity: "Apple Development: XXXXXXXXXXX"\nCreating project flutter_theoplayer_sample_app...\nResolving dependencies in flutter_theoplayer_sample_app... \nGot dependencies in flutter_theoplayer_sample_app.\nWrote 81 files.\n\nAll done!\nYou can find general documentation for Flutter at: https://docs.flutter.dev/\nDetailed API documentation is available at: https://api.flutter.dev/\nIf you prefer video documentation, consider: https://www.youtube.com/c/flutterdev\n\nIn order to run your application, type:\n\n  $ cd flutter_theoplayer_sample_app\n  $ flutter run\n\nYour application code is in flutter_theoplayer_sample_app/lib/main.dart.\n'})}),"\n",(0,r.jsx)(t.p,{children:"Following the guidance from the script you can have your basic app running:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"$ cd flutter_theoplayer_sample_app\n$ flutter run\n"})}),"\n",(0,r.jsx)(t.h3,{id:"adding-theoplayer-flutter-sdk",children:"Adding THEOplayer Flutter SDK"}),"\n",(0,r.jsx)(t.h4,{id:"option-1-adding-theoplayer-flutter-sdk-as-dependency-recommended",children:"Option 1: Adding THEOplayer Flutter SDK as dependency (Recommended)"}),"\n",(0,r.jsxs)(t.p,{children:["To add THEOplayer Flutter SDK as a dependency, you can simply fetch it from ",(0,r.jsx)(t.a,{href:"https://pub.dev",children:"pub.dev"})," using:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"$ flutter pub add theoplayer\n"})}),"\n",(0,r.jsx)(t.h4,{id:"option-2-adding-theoplayer-flutter-sdk-as-submodule",children:"Option 2: Adding THEOplayer Flutter SDK as submodule"}),"\n",(0,r.jsxs)(t.p,{children:["As an alternative, you can add the SDK as a submodule in your git project.\nThis can be useful if you are trying to fork the project to ",(0,r.jsx)(t.a,{href:"https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/main/CONTRIBUTING.md",children:"contribute"})," with us."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"$ git submodule add https://GITHUB_USERNAME:GITHUB_PASSWORD@github.com/THEOplayer/flutter-theoplayer-sdk flutter-theoplayer-sdk\n"})}),"\n",(0,r.jsx)(t.p,{children:"Then, your project structure will look like this:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"\u279c  flutter_theoplayer_sample_app git:(master) \u2717 ls\nREADME.md                         flutter-theoplayer-sdk            pubspec.lock\nanalysis_options.yaml             flutter_theoplayer_sample_app.iml pubspec.yaml\nandroid                           ios                               test\nbuild                             lib                               web\n\n"})}),"\n",(0,r.jsxs)(t.p,{children:["After the submodule added, you can add the THEOplayer Flutter SDK as a dependency in your project's ",(0,r.jsx)(t.code,{children:"pubspec.yaml"})," file manually, or just by running this command:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'$ flutter pub add \'theoplayer:{"path":"./flutter-theoplayer-sdk/flutter_theoplayer_sdk"}\' --directory .\n'})}),"\n",(0,r.jsxs)(t.p,{children:["You should get an output like this after executing the command,\nmeaning ",(0,r.jsx)(t.code,{children:"flutter"})," found and added the SDK as a dependency, and fetched the necessary packages too."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-diff",children:"Resolving dependencies... \n  collection 1.17.2 (1.18.0 available)\n  flutter_lints 2.0.3 (3.0.1 available)\n+ theoplayer_sdk_android 1.0.0 from path ../flutter-theoplayer-sdk/flutter_theoplayer_sdk_android\n+ theoplayer_sdk_ios 1.0.0 from path ../flutter-theoplayer-sdk/flutter_theoplayer_sdk_ios\n+ theoplayer_sdk_platform_interface 1.0.0 from path ../flutter-theoplayer-sdk/flutter_theoplayer_sdk_platform_interface\n+ theoplayer_sdk_web 1.0.0 from path ../flutter-theoplayer-sdk/flutter_theoplayer_sdk_web\n+ flutter_web_plugins 0.0.0 from sdk flutter\n+ js 0.6.7\n  lints 2.1.1 (3.0.0 available)\n  material_color_utilities 0.5.0 (0.8.0 available)\n  meta 1.9.1 (1.11.0 available)\n+ plugin_platform_interface 2.1.6\n  stack_trace 1.11.0 (1.11.1 available)\n  stream_channel 2.1.1 (2.1.2 available)\n  test_api 0.6.0 (0.6.1 available)\n+ theoplayer 1.0.0 from path ../flutter-theoplayer-sdk/flutter_theoplayer_sdk\n  web 0.1.4-beta (0.4.0 available)\nChanged 8 dependencies!\n"})}),"\n",(0,r.jsxs)(t.p,{children:["To make sure the submodule references the platform-specific SDKs from within the repository run ",(0,r.jsx)(t.code,{children:"melos bootstrap"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["If your main project doesn't pick up the changes, it is possible you need to configure ",(0,r.jsx)(t.code,{children:"melos"})," to include your project too."]}),"\n",(0,r.jsx)(t.p,{children:"You can do it in 2 ways."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Create your ",(0,r.jsx)(t.code,{children:"melos.yaml"})," file in your root project and configure it according to your setup (including the ",(0,r.jsx)(t.code,{children:"theopalyer"})," submodule and its packages)."]}),"\n",(0,r.jsxs)(t.li,{children:["Or, modifiy the ",(0,r.jsx)(t.code,{children:"flutter-theoplayer-sdk/melos.yaml"})," to include your project by adding ",(0,r.jsx)(t.code,{children:"../"})," into the ",(0,r.jsx)(t.code,{children:"packages"})," section of the melos file."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Don't forget to run ",(0,r.jsx)(t.code,{children:"melos bootstrap"})," again in the directory according to your choice from above."]}),"\n",(0,r.jsx)(t.h3,{id:"adding-theoplayer-to-your-view-hierarchy",children:"Adding THEOplayer to your view hierarchy"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Initialize THEOplayer (e.g. in your StatefulWidget)"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-dart",children:'  late THEOplayer player;\n\n  @override\n  void initState() {\n    super.initState();\n\n    player = THEOplayer(\n        theoPlayerConfig: THEOplayerConfig(\n          license: "YOUR_LICENSE_STRING",\n        ),\n        onCreate: () {\n          print("THEOplayer is created and ready to use");\n        });\n  }\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Keep in mind, you need to have a valid license from ",(0,r.jsx)(t.a,{href:"https://portal.theoplayer.com",children:"THEOportal"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Without a license you can only play sources hosted on ",(0,r.jsx)(t.code,{children:"theoplayer.com"})," domain.\n(If you want to try this, just delete the ",(0,r.jsx)(t.code,{children:"license"})," String from the ",(0,r.jsx)(t.code,{children:"THEOplayerConfig"}),")"]}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsx)(t.li,{children:"Adding THEOplayer to the view hierarchy"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-dart",children:"SizedBox(\n    height: 300,\n    child: player.getView(),\n),\n"})}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsx)(t.li,{children:"Setting a source and start playback on a button press:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-dart",children:'FilledButton(\n    onPressed: () {\n        player.setSource(SourceDescription(sources: [\n            TypedSource(src: "https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8"),\n        ]));\n        player.play();\n    },\n    child: const Text("Play BBB source"),\n),\n'})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:"You are (almost) ready to play with THEOplayer \ud83d\ude09"}),"\n",(0,r.jsx)(t.p,{children:"Is there anything else to configure on the specific platforms?"}),"\n",(0,r.jsx)(t.p,{children:"Check it below \u2b07\ufe0f"}),"\n",(0,r.jsx)(t.h2,{id:"getting-started-on-android",children:"Getting started on Android"}),"\n",(0,r.jsx)(t.p,{children:"The generated sample project doesn't have Internet permission by default (only in debug/profile mode)."}),"\n",(0,r.jsxs)(t.p,{children:["By declaring the ",(0,r.jsx)(t.code,{children:"INTERNET"})," the ",(0,r.jsx)(t.code,{children:"AndroidManifest.xml"}),", your app can reach the Internet."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:'<uses-permission android:name="android.permission.INTERNET"/>\n'})}),"\n",(0,r.jsxs)(t.p,{children:["As noted in the ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-151/theoplayer/flutter/guides/limitations",children:"limitations"}),", THEOplayer on Android supports Android 5 (API level 21) and above,\nso defining this in the ",(0,r.jsx)(t.code,{children:"android/app/build.gradle"})," is necessary:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'defaultConfig {\n    // TODO: Specify your own unique Application ID (https://developer.android.com/studio/build/application-id.html).\n    applicationId "com.theoplayer.theoplayer_example"\n    // You can update the following values to match your application needs.\n    // For more information, see: https://docs.flutter.dev/deployment/android#reviewing-the-gradle-build-configuration.\n    minSdkVersion 21\n    targetSdkVersion flutter.targetSdkVersion\n    versionCode flutterVersionCode.toInteger()\n    versionName flutterVersionName\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["By using the ",(0,r.jsx)(t.code,{children:"flutter run android"})," command, you can try out your application on an Android device."]}),"\n",(0,r.jsx)(t.h2,{id:"getting-started-on-ios",children:"Getting started on iOS"}),"\n",(0,r.jsx)(t.p,{children:"No changes are required."}),"\n",(0,r.jsxs)(t.p,{children:["By using the ",(0,r.jsx)(t.code,{children:"flutter run ios"})," command, you can try out your applicaiton on an iOS device."]}),"\n",(0,r.jsx)(t.h2,{id:"getting-started-on-web",children:"Getting started on Web"}),"\n",(0,r.jsxs)(t.p,{children:["You need to acquire THEOplayer HTML5 SDK from ",(0,r.jsx)(t.a,{href:"https://portal.theoplayer.com/",children:"THEOportal"})," (or from an NPM package, e.g. from ",(0,r.jsx)(t.a,{href:"https://registry.npmjs.org/theoplayer/-/theoplayer-6.9.0.tgz",children:"6.9.0"}),")."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"The current iteration of the THEOplayer Flutter SDK is not able to automatically pull THEOplayer HTML5 SDK from NPM,\nso this is now a manual procedure."})}),"\n",(0,r.jsxs)(t.p,{children:["If you have all the files at your hand (",(0,r.jsx)(t.code,{children:"THEOplayer.chromeless.js"}),", ",(0,r.jsx)(t.code,{children:"common"})," and ",(0,r.jsx)(t.code,{children:"transmux"})," files)\ncopy them into the root of your Web project.\n(Next to the ",(0,r.jsx)(t.code,{children:"index.html"}),", which is the entry point of your Flutter Web application)"]}),"\n",(0,r.jsxs)(t.p,{children:["Load the ",(0,r.jsx)(t.code,{children:"THEOplayer.chromeless.js"})," Javascript in the ",(0,r.jsx)(t.code,{children:"<HEAD>"})," of your ",(0,r.jsx)(t.code,{children:"index.html"})," page:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'\x3c!-- This script adds the flutter initialization JS code, don\'t change it --\x3e\n<script src="flutter.js" defer><\/script>\n\n\x3c!-- Loading THEOplayer --\x3e\n<script src="THEOplayer.chromeless.js" type="application/javascript"><\/script>\n'})}),"\n",(0,r.jsx)(t.p,{children:"After these steps, you are good to go."}),"\n",(0,r.jsxs)(t.p,{children:["By using the ",(0,r.jsx)(t.code,{children:"flutter run chrome"})," command, you can try out your application in the Chrome browser."]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var r=n(96540);const a={},i=r.createContext(a);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);