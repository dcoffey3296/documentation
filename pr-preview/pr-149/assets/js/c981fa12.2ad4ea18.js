"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18492],{42251:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var t=n(74848),o=n(28453);const s={},a="How to track network errors",i={id:"faq/how-to-track-network-errors",title:"How to track network errors",description:"THEOplayer currently doesn't throw an error event for all network request errors on all platforms. Sometimes you might want an event to listen for to track network related issues in your QoS/QoE dashboards. To enable this, you can use our Network API.",source:"@site/theoplayer_versioned_docs/version-v6/faq/55-how-to-track-network-errors.md",sourceDirName:"faq",slug:"/faq/how-to-track-network-errors",permalink:"/documentation/pr-preview/pr-149/theoplayer/v6/faq/how-to-track-network-errors",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/faq/55-how-to-track-network-errors.md",tags:[],version:"v6",sidebarPosition:55,frontMatter:{},sidebar:"faq",previous:{title:"Chromecast on my webplayer does not work any longer despite no change in my implementation",permalink:"/documentation/pr-preview/pr-149/theoplayer/v6/faq/chromecast-on-weblayer-does-not-longer-work"},next:{title:"What is the support for Wowza",permalink:"/documentation/pr-preview/pr-149/theoplayer/v6/faq/what-is-the-support-for-wowza"}},l={},c=[{value:"Web",id:"web",level:2},{value:"Android",id:"android",level:2},{value:"iOS",id:"ios",level:2}];function d(e){const r={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"how-to-track-network-errors",children:"How to track network errors"})}),"\n",(0,t.jsxs)(r.p,{children:["THEOplayer currently doesn't throw an ",(0,t.jsx)(r.code,{children:"error"})," event for all network request errors on all platforms. Sometimes you might want an event to listen for to track network related issues in your QoS/QoE dashboards. To enable this, you can use our Network API."]}),"\n",(0,t.jsx)(r.h2,{id:"web",children:"Web"}),"\n",(0,t.jsx)(r.p,{children:"You can use the Network API as follows to track network requests with status codes 4xx and 5xx"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:'function httpErrorInterceptor(response) {\n  if (response.status >= 400 && response.status <= 599) {\n    var errorDetails = {\n      status: response.status,\n      fileType: response.request.type,\n      url: response.request.url\n    };\n    var networkErrorEvent = new CustomEvent("THEOnetworkerror", {\n      detail: errorDetails\n    });\n    document.dispatchEvent(networkErrorEvent);\n  }\n}\n\nplayer.network.addResponseInterceptor(httpErrorInterceptor);\ndocument.addEventListener("THEOnetworkerror", console.log);\n'})}),"\n",(0,t.jsx)(r.h2,{id:"android",children:"Android"}),"\n",(0,t.jsx)(r.p,{children:"For Android, you'll also use the Network API as you would with our Web SDK but you need to do it through JavaScript injection and pass a message to your Java environment. You need to follow these steps:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Make an ",(0,t.jsx)(r.code,{children:"assets"})," folder, for instance under ",(0,t.jsx)(r.code,{children:"android/app/src/main/assets"})," and add a JavaScript file, say ",(0,t.jsx)(r.code,{children:"interceptor.js"})]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Add your network interceptor code but include a line to send a message with to be able to use the event's information in your Java code"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:'function createHttpErrorInterceptor() {\n  var player = THEOplayer.players[0];\n  var interceptor = function (response) {\n    if (response.status >= 400 && response.status <= 599) {\n      var errorDetails = {\n        status: response.status,\n        fileType: response.request.type,\n        url: response.request.url\n      };\n      theoplayerAndroid.sendMessage(\n        "THEOplayer.network.error",\n        JSON.stringify(errorDetails)\n      );\n    }\n  };\n  player.network.addResponseInterceptor(interceptor);\n  THEOplayer.HttpErrorInterceptor = interceptor;\n}\n\nfunction destroyHttpErrorInterceptor() {\n  if (THEOplayer.HttpErrorInterceptor) {\n    var player = THEOplayer.players[0];\n    player.network.removeResponseInterceptor(THEOplayer.Interceptor_404);\n    THEOplayer.HttpErrorInterceptor = undefined;\n  }\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Link the JavaScript file to your THEOplayer instance as follows"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-xml",children:'<com.theoplayer.android.api.THEOplayerView\n    android:id="@+id/theoPlayerView"\n    android:layout_width="match_parent"\n    android:layout_height="match_parent"\n    app:layout_behavior="@string/appbar_scrolling_view_behavior"\n    app:jsPaths="interceptor.js"/>\n'})}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"In the Java file where you configure THEOplayer add the following:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'protected void onCreate(Bundle savedInstanceState) {\n    // Code to configure the player\n    // ...\n    // ...\n\n    CreateInterceptor();\n    SetSource();\n}\n\nprotected void SetSource(){\n    // bad url to test if the network response interceptor works\n    String url =  "https://cdn.theoplayer.com/video/elephants-dream/playlist2.m3u8";\n\n    TypedSource typedSource = TypedSource.Builder\n            .typedSource()\n            .src(url)\n            .type(SourceType.HLS)\n            .build();\n\n    SourceDescription sourceDescription = SourceDescription.Builder\n            .sourceDescription(typedSource)\n            .build();\n\n    theoPlayer.setSource(sourceDescription);\n    theoPlayer.play();\n\n}\n\nprotected void HandleNetworkError(String message){\n    //Do something with the network error\n    Log.i("THEO", "Network error: " + message);\n}\n\nprotected void CreateInterceptor(){\n    viewBinding.theoPlayerView.evaluateJavaScript("createHttpErrorInterceptor();", null);\n}\n\nprotected void DestroyInterceptor(){\n    viewBinding.theoPlayerView.evaluateJavaScript("destroyHttpErrorInterceptor();", null);\n}\n\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"ios",children:"iOS"}),"\n",(0,t.jsx)(r.p,{children:"On iOS, there are platform-specific constraints that prevent us from giving you the control over network call like you can on Web. Therefore, we expose an event type for this on the network object. You can set up a listener as follows"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-swift",children:"self.player.network.addEventListener(type: NetworkEventTypes.ERROR) { (everror) in\n    // handle the event\n}\n"})})]})}function p(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>i});var t=n(96540);const o={},s=t.createContext(o);function a(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);