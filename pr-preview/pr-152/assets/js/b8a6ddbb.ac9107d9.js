"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56336],{78049:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=t(74848),o=t(28453);const i={},r="Enable Chromecast on the Sender",a={id:"how-to-guides/cast/chromecast/enable-chromecast-on-the-sender",title:"Enable Chromecast on the Sender",description:"This article explains how to enable the Chromecast Sender capabilities on the Web SDK, iOS SDK and Android SDK.",source:"@site/theoplayer/how-to-guides/03-cast/01-chromecast/06-enable-chromecast-on-the-sender.md",sourceDirName:"how-to-guides/03-cast/01-chromecast",slug:"/how-to-guides/cast/chromecast/enable-chromecast-on-the-sender",permalink:"/documentation/pr-preview/pr-152/theoplayer/how-to-guides/cast/chromecast/enable-chromecast-on-the-sender",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/03-cast/01-chromecast/06-enable-chromecast-on-the-sender.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"roku",previous:{title:"Pass subtitle selection on to Chromecast",permalink:"/documentation/pr-preview/pr-152/theoplayer/how-to-guides/cast/chromecast/pass-subtitle-section-on-to-chromecast"},next:{title:"Introduction",permalink:"/documentation/pr-preview/pr-152/theoplayer/how-to-guides/cast/airplay/introduction"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Import Chromecast Sender SDK",id:"import-chromecast-sender-sdk",level:2},{value:"Web SDK",id:"web-sdk",level:3},{value:"Android SDK",id:"android-sdk",level:3},{value:"Android SDK",id:"android-sdk-1",level:4},{value:"Legacy Android SDK (4.12.x)",id:"legacy-android-sdk-412x",level:4},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:3},{value:"Connect with custom Chromecast Receiver application",id:"custom-receiver-app",level:2},{value:"Web SDK",id:"web-sdk-1",level:3},{value:"Android SDK",id:"android-sdk-2",level:3},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"enable-chromecast-on-the-sender",children:"Enable Chromecast on the Sender"})}),"\n",(0,s.jsx)(n.p,{children:"This article explains how to enable the Chromecast Sender capabilities on the Web SDK, iOS SDK and Android SDK.\nThis article also documents how you can connect with a customer Chromecast Receiver application."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"The Chromecast feature needs to be enabled for your THEOplayer SDK.\n(THEOplayer is built in a modular fashion, and this feature might be disabled for your SDK.)"}),"\n",(0,s.jsx)(n.li,{children:"You need to import the Chromecast Sender SDK"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"import-chromecast-sender-sdk",children:"Import Chromecast Sender SDK"}),"\n",(0,s.jsx)(n.h3,{id:"web-sdk",children:"Web SDK"}),"\n",(0,s.jsxs)(n.p,{children:["To allow Chromecast playback you need to include Google's Chromecast Sender SDK, which is a JavaScript file.\nThe JavaScript snippet below illustrates how you include this Sender SDK. You can read more about it at ",(0,s.jsx)(n.a,{href:"https://developers.google.com/cast/docs/web_sender",children:"https://developers.google.com/cast/docs/web_sender"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'<script\n  type="text/javascript"\n  src="//www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"\n><\/script>\n'})}),"\n",(0,s.jsx)(n.p,{children:"Once this SDK is imported, THEOplayer will automatically add the Chromecast casting capability to your player (if you've enabled the Chromecast feature for your THEOplayer SDK)."}),"\n",(0,s.jsx)(n.h3,{id:"android-sdk",children:"Android SDK"}),"\n",(0,s.jsx)(n.p,{children:"Importing the Chromecast feature differs between the Android SDK and Legacy Android SDK (4.12.x) but the usage is similar.\nTherefore, the points 1 & 2 below are SDK specific meanwhile from point 3 and on they are similar."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Please note that Chromecast support is not available for the Android TV and Fire TV SDKs."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"android-sdk-1",children:"Android SDK"}),"\n",(0,s.jsx)(n.p,{children:"In order to enable Chromecast on the THEOplayer Android SDK:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Use a version of THEOplayer\u2019s Android SDK \u2265 3.4.0"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Add the feature integration dependency in your ",(0,s.jsx)(n.code,{children:"build.gradle"})," file."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"implementation 'com.theoplayer.theoplayer-sdk-android:core:+'\nimplementation 'com.theoplayer.theoplayer-sdk-android:integration-cast:+' // add cast dependency\n"})}),"\n",(0,s.jsx)(n.h4,{id:"legacy-android-sdk-412x",children:"Legacy Android SDK (4.12.x)"}),"\n",(0,s.jsx)(n.p,{children:"In order to enable Chromecast on the THEOplayer Android SDK:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Use a version of THEOplayer\u2019s Android SDK \u2265 1.0.9"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Include the Cast Framework and Media Router libraries"}),"\n",(0,s.jsxs)(n.p,{children:["To add Chromecast support you need to include the Cast Framework and Media Router libraries under the dependencies node in your ",(0,s.jsx)(n.code,{children:"build.gradle"})," file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"implementation 'androidx.mediarouter:mediarouter:1.1.0'\nimplementation 'com.google.android.gms:play-services-cast-framework:19.0.0'\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note: you may need to adjust the above snippet to match your Android setup."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Set ",(0,s.jsx)(n.code,{children:"CastOptionsProvider"}),":"]}),"\n",(0,s.jsxs)(n.p,{children:["To enable Chromecast on Android a ",(0,s.jsx)(n.code,{children:"CastOptionsProvider"})," should be specified.\nThis class contains the configuration for Chromecast on Android.\nA ",(0,s.jsx)(n.code,{children:"DefaultCastOptionsProvider"})," is provided as part of the THEOplayer Android SDK.\nThis ",(0,s.jsx)(n.code,{children:"DefaultCastOptionsProvider"})," associates the default THEOplayer Chromecast receiver application with your Sender application.\nYou will need to register this class in your ",(0,s.jsx)(n.code,{children:"AndroidManifest.xml"})," file within a meta-data tag under your application node,\nas demonstrated at ",(0,s.jsx)(n.a,{href:"https://github.com/THEOplayer/samples-android-sdk/blob/master/Google-Cast/app/src/main/AndroidManifest.xml#L17-L19",children:"https://github.com/THEOplayer/samples-android-sdk/blob/master/Google-Cast/app/src/main/AndroidManifest.xml#L17-L19"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'<meta-data\n    android:name="com.google.android.gms.cast.framework.OPTIONS_PROVIDER_CLASS_NAME"\n    android:value="com.theoplayer.android.api.cast.chromecast.DefaultCastOptionsProvider"/>\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Optional: Add routing button to your app"})}),"\n",(0,s.jsx)(n.p,{children:"In order to get this button to appear in your application's Toolbar,\nthe easiest way is to include it in the menu XML file for your Activity."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In your ",(0,s.jsx)(n.code,{children:"res"})," folder add a menu folder"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Add an ",(0,s.jsx)(n.code,{children:"activity_main_menu.xml"})," file"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add the following contents to this file:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8"?>\n<menu xmlns:android="http://schemas.android.com/apk/res/android"\n    xmlns:app="http://schemas.android.com/apk/res-auto">\n    <item\n    android:id="@+id/media_route_menu_item"\n    android:title="Cast"\n    app:actionProviderClass="android.support.v7.app.MediaRouteActionProvider"\n    app:showAsAction="always" />\n</menu>\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["Initialize this new ",(0,s.jsx)(n.code,{children:"MenuItem"})," in the ",(0,s.jsx)(n.code,{children:"onCreateOptionsMenu"})," method of your Activity.\n(Make sure you have an ",(0,s.jsx)(n.code,{children:"AppCompatActivity"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"@Override\npublic boolean onCreateOptionsMenu(Menu menu) {\n    super.onCreateOptionsMenu(menu);\n    getMenuInflater().inflate(R.menu.activity_main_menu, menu);\n    CastButtonFactory.setUpMediaRouteButton(getApplicationContext(), menu, R.id.media_route_menu_item);\n    return true;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Optional: Add MiniController to your app"})}),"\n",(0,s.jsx)(n.p,{children:"In your main activity xml add the following fragment:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'<fragment\n    android:id="@+id/castMiniController"\n    android:layout_width="match_parent"\n    android:layout_height="wrap_content"\n    android:layout_alignParentBottom="true"\n    android:visibility="gone"\n    class="com.google.android.gms.cast.framework.media.widget.MiniControllerFragment" />\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Optional: Set a ",(0,s.jsx)(n.code,{children:"CastStrategy"})," to your THEOplayerConfig"]})}),"\n",(0,s.jsx)(n.p,{children:"THEOplayer Android SDK support Chromecast CastStrategy to define the joining behavior."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"new THEOplayerConfig.Builder()\n    .castStrategy(CastStrategy.AUTO)\n    .build();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,s.jsx)(n.p,{children:"In order to enable Chromecast on the iOS SDK:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Use a version of THEOplayer\u2019s iOS SDK \u2265 1.0.3"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Set up the Cast Framework:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"iOS 14 Warning:"})," Changes to iOS 14 local network access permissions have impacted the Google Cast iOS SDK in a number of ways. Please see the ",(0,s.jsx)(n.a,{href:"https://developers.google.com/cast/docs/ios_sender/permissions_and_discovery#ios_14",children:"iOS 14 Changes"})," document to see how your app is affected."]}),"\n",(0,s.jsx)(n.p,{children:"THEOplayer iOS SDK version 2.85.0 upgrades Google Cast SDK to 4.6.0 which contains the iOS 14 specific changes from Google."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"iOS 13 Warning:"})," Apple permissions changes to iOS 13 and Xcode 11 have impacted the Google Cast iOS SDK in a number of ways. Please see the ",(0,s.jsx)(n.a,{href:"https://developers.google.com/cast/docs/ios_sender/ios13_changes",children:"iOS 13 Changes"})," document to see how your app will be impacted."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"iOS 12 Warning:"}),' If developing using Xcode 10 and targeting iOS devices running iOS 12 or higher, the "Access Wi-Fi Information" capability is required in order to discover and connect to Cast devices.']}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://developers.google.com/cast/docs/ios_sender_setup",children:"https://developers.google.com/cast/docs/ios_sender_setup"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Static vs Dynamic Framework:"})," Because the THEOplayer iOS SDK is a Dynamic Framework, it should not include any dependency frameworks on which it relies (e.g. the Chromecast SDK). Instead, developers should include the dependencies on which THEOplayer relies.\nTherefore, using a Dynamic Framework ensures that there are no symbol clashes.\nMore info can be found in this article: ",(0,s.jsx)(n.a,{href:"https://medium.com/onfido-tech/reusing-code-and-resources-with-swift-static-libraries-and-resource-bundles-d070e82d3b3d",children:"https://medium.com/onfido-tech/reusing-code-and-resources-with-swift-static-libraries-and-resource-bundles-d070e82d3b3d"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Cocoapods setup"})}),"\n",(0,s.jsx)(n.p,{children:"Supported until version '4.3.0', pending further investigation for versions above '4.3.0'."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:"# Comment the next line if you are not using Swift and do not want to use dynamic frameworks\nuse_frameworks!\n\n# Uncomment the next line to define a global platform for your project\n# platform :ios, '9.0'\n\ndef target_pods\n  pod 'google-cast-sdk'\nend\n\ntarget'YourProjectTarget' do\n    # Select one of the chromecast versions\n    pod 'google-cast-sdk', '4.3.0'\nend\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Manual setup"})}),"\n",(0,s.jsxs)(n.p,{children:["Download the Dynamic Cast Framework from the ",(0,s.jsx)(n.a,{href:"https://developers.google.com/cast/docs/ios_sender/",children:"google developer website"}),". Libraries without ",(0,s.jsx)(n.a,{href:"https://developers.google.com/cast/docs/guest_mode",children:"guest mode"})," have been provided for situations where your app does not require the feature or you do not wish to require Bluetooth\xae permissions, which have been introduced in iOS 13. Please see the ",(0,s.jsx)(n.a,{href:"https://developers.google.com/cast/docs/ios_sender/ios13_changes",children:"iOS 13 Changes"})," document for more information."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Set GCKCastContext"}),"\n",(0,s.jsxs)(n.p,{children:["To enable Chromecast on iOS the ",(0,s.jsx)(n.code,{children:"GCKCastContext"})," shared instance should be set with a ",(0,s.jsx)(n.code,{children:"GCKCastOptions"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:'let options = GCKCastOptions(receiverApplicationID: "A1B2C3D4")\nGCKCastContext.setSharedInstanceWith(options)\n'})}),"\n",(0,s.jsx)(n.p,{children:"or use the default THEOplayer cast options."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:"THEOplayerCastHelper.setGCKCastContextSharedInstanceWithDefaultCastOptions()\n"})}),"\n",(0,s.jsxs)(n.p,{children:["That's it. When Chromecast-enabled devices are discovered, the player will display a Chromecast button. The player also works nicely together with the Chromecast controls that are part of the Chromecast Framework, (e.g. ",(0,s.jsx)(n.a,{href:"https://developers.google.com/cast/docs/ios_sender_integrate#add_a_cast_button",children:"GCKUICastButton"})," or ",(0,s.jsx)(n.a,{href:"https://developers.google.com/cast/docs/ios_sender_integrate#add_mini_controllers",children:"the mini controller"}),")."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"custom-receiver-app",children:"Connect with custom Chromecast Receiver application"}),"\n",(0,s.jsx)(n.p,{children:"The THEOplayer SDK on your Sender application connects with THEO Chromecast Receiver application by default,\nbut you can connect it to a custom Chromecast Receiver application instead."}),"\n",(0,s.jsx)(n.h3,{id:"web-sdk-1",children:"Web SDK"}),"\n",(0,s.jsxs)(n.p,{children:["If you have your own Receiver app, then you adjust the ",(0,s.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/CastConfiguration.html",children:"PlayerConfiguration"})," to connect with a specific ",(0,s.jsx)(n.code,{children:"appID"})," as demonstrated below."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'let customChromecastReceiverAppID = "8E80B9CE";\nlet player = new THEOplayer.Player(element, {\n  libraryLocation: "...",\n  license: "...",\n  cast: {\n    chromecast: {\n      appID: customChromecastReceiverAppID\n    }\n  }\n});\n'})}),"\n",(0,s.jsx)(n.h3,{id:"android-sdk-2",children:"Android SDK"}),"\n",(0,s.jsxs)(n.p,{children:["To connect with a custom Chromecast Receiver application, you can create your own ",(0,s.jsx)(n.code,{children:"CastOptionsProvider"})," by subclassing ",(0,s.jsx)(n.code,{children:"com.google.android.gms.cast.framework.OptionsProvider"})," and implementing the ",(0,s.jsx)(n.code,{children:"getCastOptions"})," method.\nThis approach is further demonstrated at ",(0,s.jsx)(n.a,{href:"https://github.com/THEOplayer/samples-android-sdk/tree/master/Google-Cast/guides/howto-google-cast-integration#initializing-cast-context",children:"https://github.com/THEOplayer/samples-android-sdk/tree/master/Google-Cast/guides/howto-google-cast-integration#initializing-cast-context"}),",\nand in the snippet below."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"@Override\npublic CastOptions getCastOptions(Context context) {\n    return new CastOptions.Builder()\n        .setReceiverApplicationId(DEFAULT_APP_ID)\n        .build();\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"legacy-iostvos-sdk-412x",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,s.jsxs)(n.p,{children:["By default, THEOplayer\u2019s Receiver app will be set when you set ",(0,s.jsx)(n.code,{children:"THEOplayerCastHelper.setGCKCastContextSharedInstanceWithDefaultCastOptions()"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You can connect with a custom Receiver app by configuring its ID through ",(0,s.jsx)(n.code,{children:'GCKCastContext.setSharedInstanceWith(GCKCastOptions(receiverApplicationID: "A1B2C3D4"))'}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["This approach is further demonstrated at ",(0,s.jsx)(n.a,{href:"https://github.com/THEOplayer/samples-ios-sdk/tree/master/Google-Cast/Guides/howto-google-cast-integration#gckcastcontext",children:"https://github.com/THEOplayer/samples-ios-sdk/tree/master/Google-Cast/Guides/howto-google-cast-integration#gckcastcontext"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(96540);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);