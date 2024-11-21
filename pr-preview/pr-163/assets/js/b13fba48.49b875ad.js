"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["23706"],{69574:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>s,default:()=>c,assets:()=>i,toc:()=>h,frontMatter:()=>o});var a=JSON.parse('{"id":"how-to-guides/ui/how-to-change-default-UI-language-to-other","title":"How to change the default UI language to other","description":"This article describes how to change the default UI language to other.","source":"@site/theoplayer_versioned_docs/version-v7/how-to-guides/11-ui/08-how-to-change-default-UI-language-to-other.md","sourceDirName":"how-to-guides/11-ui","slug":"/how-to-guides/ui/how-to-change-default-UI-language-to-other","permalink":"/documentation/pr-preview/pr-163/theoplayer/v7/how-to-guides/ui/how-to-change-default-UI-language-to-other","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/how-to-guides/11-ui/08-how-to-change-default-UI-language-to-other.md","tags":[],"version":"v7","sidebarPosition":8,"frontMatter":{},"sidebar":"roku","previous":{"title":"How to insert a button","permalink":"/documentation/pr-preview/pr-163/theoplayer/v7/how-to-guides/ui/how-to-insert-a-button"},"next":{"title":"Customize UI during ad playback","permalink":"/documentation/pr-preview/pr-163/theoplayer/v7/how-to-guides/ui/customize-ui-during-playback"}}'),r=t("85893"),l=t("50065");let o={},s="How to change the default UI language to other",i={},h=[{value:"SDKs",id:"sdks",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Code examples",id:"code-examples",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Legacy Android SDK (4.12.x)",id:"legacy-android-sdk-412x",level:5},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x",level:5},{value:"Reference Material",id:"reference-material",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"how-to-change-the-default-ui-language-to-other",children:"How to change the default UI language to other"})}),"\n",(0,r.jsx)(n.p,{children:"This article describes how to change the default UI language to other."}),"\n",(0,r.jsx)(n.p,{children:"The UIConfiguration Object uses a property _language _&* languages *to change the default UI language i.e. English to any other language. This is an optional property of the player whereby if defined then the language code must have a matching language dictionary in the languages configuration."}),"\n",(0,r.jsx)(n.p,{children:"When this configuration is set, the labels and tooltips in the UI will be replaced by their translated version from the language. If no translation is found for a label or tooltip, the original English version will be used instead."}),"\n",(0,r.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"}}),(0,r.jsx)(n.td,{style:{textAlign:"center"}}),(0,r.jsx)(n.td,{style:{textAlign:"center"}})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"THEOplayer valid licence SDK for respective platform (Web, iOS & Android)"}),"\n",(0,r.jsx)(n.li,{children:"Download the specific language JSONS to add into your project"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Language JSON Links"})}),"\n",(0,r.jsxs)(n.p,{children:["Arabic : ",(0,r.jsx)(n.a,{href:"http://cdn.theoplayer.com/demos/theoplayer/lang/ar.js",children:"http://cdn.theoplayer.com/demos/theoplayer/lang/ar.js"})]}),"\n",(0,r.jsxs)(n.p,{children:["Bashkir: ",(0,r.jsx)(n.a,{href:"http://cdn.theoplayer.com/demos/theoplayer/lang/ba.js",children:"http://cdn.theoplayer.com/demos/theoplayer/lang/ba.js"})]}),"\n",(0,r.jsxs)(n.p,{children:["Bulgarian: ",(0,r.jsx)(n.a,{href:"http://cdn.theoplayer.com/demos/theoplayer/lang/bg.js",children:"http://cdn.theoplayer.com/demos/theoplayer/lang/bg.js"})]}),"\n",(0,r.jsxs)(n.p,{children:["Catalan: ",(0,r.jsx)(n.a,{href:"http://cdn.theoplayer.com/demos/theoplayer/lang/ca.js",children:"http://cdn.theoplayer.com/demos/theoplayer/lang/ca.js"})]}),"\n",(0,r.jsxs)(n.p,{children:["Czech: ",(0,r.jsx)(n.a,{href:"http://cdn.theoplayer.com/demos/theoplayer/lang/cs.js",children:"http://cdn.theoplayer.com/demos/theoplayer/lang/cs.js"})]}),"\n",(0,r.jsxs)(n.p,{children:["Danish: ",(0,r.jsx)(n.a,{href:"http://cdn.theoplayer.com/demos/theoplayer/lang/da.js",children:"http://cdn.theoplayer.com/demos/theoplayer/lang/da.js"})]}),"\n",(0,r.jsxs)(n.p,{children:["German: ",(0,r.jsx)(n.a,{href:"http://cdn.theoplayer.com/demos/theoplayer/lang/de.js",children:"http://cdn.theoplayer.com/demos/theoplayer/lang/de.js"})]}),"\n",(0,r.jsxs)(n.p,{children:["Greek: ",(0,r.jsx)(n.a,{href:"http://cdn.theoplayer.com/demos/theoplayer/lang/el.js",children:"http://cdn.theoplayer.com/demos/theoplayer/lang/el.js"})]}),"\n",(0,r.jsxs)(n.p,{children:["Spanish: ",(0,r.jsx)(n.a,{href:"http://cdn.theoplayer.com/demos/theoplayer/lang/es.js",children:"http://cdn.theoplayer.com/demos/theoplayer/lang/es.js"})]}),"\n",(0,r.jsxs)(n.p,{children:["Persian: ",(0,r.jsx)(n.a,{href:"http://cdn.theoplayer.com/demos/theoplayer/lang/fa.js",children:"http://cdn.theoplayer.com/demos/theoplayer/lang/fa.js"})]}),"\n",(0,r.jsxs)(n.p,{children:["Finnish: ",(0,r.jsx)(n.a,{href:"http://cdn.theoplayer.com/demos/theoplayer/lang/fi.js",children:"http://cdn.theoplayer.com/demos/theoplayer/lang/fi.js"})]}),"\n",(0,r.jsxs)(n.p,{children:["French: ",(0,r.jsx)(n.a,{href:"http://cdn.theoplayer.com/demos/theoplayer/lang/fr.js",children:"http://cdn.theoplayer.com/demos/theoplayer/lang/fr.js"})]}),"\n",(0,r.jsxs)(n.p,{children:["Croatian: ",(0,r.jsx)(n.a,{href:"http://cdn.theoplayer.com/demos/theoplayer/lang/hr.js",children:"http://cdn.theoplayer.com/demos/theoplayer/lang/hr.js"})]}),"\n",(0,r.jsxs)(n.p,{children:["Hungarian: ",(0,r.jsx)(n.a,{href:"http://cdn.theoplayer.com/demos/theoplayer/lang/hu.js",children:"http://cdn.theoplayer.com/demos/theoplayer/lang/hu.js"})]}),"\n",(0,r.jsxs)(n.p,{children:["Italian: ",(0,r.jsx)(n.a,{href:"http://cdn.theoplayer.com/demos/theoplayer/lang/it.js",children:"http://cdn.theoplayer.com/demos/theoplayer/lang/it.js"})]}),"\n",(0,r.jsxs)(n.p,{children:["Japanese: ",(0,r.jsx)(n.a,{href:"http://cdn.theoplayer.com/demos/theoplayer/lang/ja.js",children:"http://cdn.theoplayer.com/demos/theoplayer/lang/ja.js"})]}),"\n",(0,r.jsxs)(n.p,{children:["Korean: ",(0,r.jsx)(n.a,{href:"http://cdn.theoplayer.com/demos/theoplayer/lang/ko.js",children:"http://cdn.theoplayer.com/demos/theoplayer/lang/ko.js"})]}),"\n",(0,r.jsxs)(n.p,{children:["Dutch: ",(0,r.jsx)(n.a,{href:"http://cdn.theoplayer.com/demos/theoplayer/lang/nl.js",children:"http://cdn.theoplayer.com/demos/theoplayer/lang/nl.js"})]}),"\n",(0,r.jsxs)(n.p,{children:["Polish: ",(0,r.jsx)(n.a,{href:"http://cdn.theoplayer.com/demos/theoplayer/lang/pl.js",children:"http://cdn.theoplayer.com/demos/theoplayer/lang/pl.js"})]}),"\n",(0,r.jsxs)(n.p,{children:["Portuguese: ",(0,r.jsx)(n.a,{href:"http://cdn.theoplayer.com/demos/theoplayer/lang/pt-BR.js",children:"http://cdn.theoplayer.com/demos/theoplayer/lang/pt-BR.js"})]}),"\n",(0,r.jsxs)(n.p,{children:["Russian: ",(0,r.jsx)(n.a,{href:"http://cdn.theoplayer.com/demos/theoplayer/lang/ru.js",children:"http://cdn.theoplayer.com/demos/theoplayer/lang/ru.js"})]}),"\n",(0,r.jsxs)(n.p,{children:["Serbian: ",(0,r.jsx)(n.a,{href:"http://cdn.theoplayer.com/demos/theoplayer/lang/sr.js",children:"http://cdn.theoplayer.com/demos/theoplayer/lang/sr.js"})]}),"\n",(0,r.jsxs)(n.p,{children:["Swedish: ",(0,r.jsx)(n.a,{href:"http://cdn.theoplayer.com/demos/theoplayer/lang/sv.js",children:"http://cdn.theoplayer.com/demos/theoplayer/lang/sv.js"})]}),"\n",(0,r.jsxs)(n.p,{children:["Turkish: ",(0,r.jsx)(n.a,{href:"http://cdn.theoplayer.com/demos/theoplayer/lang/tr.js",children:"http://cdn.theoplayer.com/demos/theoplayer/lang/tr.js"})]}),"\n",(0,r.jsxs)(n.p,{children:["Ukrainian: ",(0,r.jsx)(n.a,{href:"http://cdn.theoplayer.com/demos/theoplayer/lang/uk.js",children:"http://cdn.theoplayer.com/demos/theoplayer/lang/uk.js"})]}),"\n",(0,r.jsxs)(n.p,{children:["Vietnamese: ",(0,r.jsx)(n.a,{href:"http://cdn.theoplayer.com/demos/theoplayer/lang/vi.js",children:"http://cdn.theoplayer.com/demos/theoplayer/lang/vi.js"})]}),"\n",(0,r.jsxs)(n.p,{children:["Chinese: ",(0,r.jsx)(n.a,{href:"http://cdn.theoplayer.com/demos/theoplayer/lang/zh-CN.js",children:"http://cdn.theoplayer.com/demos/theoplayer/lang/zh-CN.js"})," | ",(0,r.jsx)(n.a,{href:"http://cdn.theoplayer.com/demos/theoplayer/lang/zh-TW.js",children:"http://cdn.theoplayer.com/demos/theoplayer/lang/zh-TW.js"})]}),"\n",(0,r.jsx)(n.h2,{id:"code-examples",children:"Code examples"}),"\n",(0,r.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,r.jsxs)(n.p,{children:["Each language should be described as a ",(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/UIConfiguration.html",children:"UIConfiguration"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'player = new THEOplayer.Player(playerElement, {\n  libraryLocation: "path/to/theoplayer/",\n  license: "your-license-here",\n  ui: {\n    language: "esp",\n    languages: {\n      esp: {\n        Play: "Reproducir",\n        Pause: "Pausa",\n        "Current Time": "Tiempo actual",\n        "Duration Time": "Duraci\xf3n",\n        "Remaining Time": "Tiempo restante"\n      }\n    }\n  }\n});\n'})}),"\n",(0,r.jsx)(n.h5,{id:"legacy-android-sdk-412x",children:"Legacy Android SDK (4.12.x)"}),"\n",(0,r.jsx)(n.p,{children:"In the implementation for Android SDK, the addition of language needs to be done in 2 following Steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["An Additional separate JavaScript file needs to be added to your Android project. You can follow the instructions presented in this article: ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-163/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add/customize the Android THEOplayer SDK"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"After a JavaScript file is added to your project, Please add the specific language to the JS file"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Sample Code to Add new language"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'//add this code to pre.js file\nTHEOplayer.videojs.addLanguage("nl",{\n    "Play": "Afspelen",\n    "Pause": "Pauze",\n    "Current Time": "Huidige tijd",\n    "Duration Time": "Looptijd",\n    "Remaining Time": "Resterende tijd",\n    "Stream Type": "Streamtype",\n    "LIVE": "LIVE",\n    "Loaded": "Geladen",\n    "Progress": "Status",\n    "Fullscreen": "Volledig scherm",\n    "Non-Fullscreen": "Geen volledig scherm",\n    "Mute": "Geluid uit",\n    "Unmute": "Geluid aan",\n    "Settings": "Instellingen",\n    "Quality": "Kwaliteit",\n    "Speed": "Snelheid",\n    "Normal": "Normaal",\n    "AUTOMATIC": "AUTOMATISCH",\n    "Automatic": "Automatisch",\n    "Playback Rate": "Weergavesnelheid"\n});\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Create a new player configuration with declared new UIConfiguration:"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Sample Code to create a new player config"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'//declare the variable for THEOplayerView\nTHEOplayerView theoPlayerView;\n\n//Create a new player config in onCreate(Bundle savedInstanceState):\nTHEOplayerConfig playerConfig = new THEOplayerConfig.Builder()\n                .jsPathsPre("pre.js")\n                .ui(new UIConfiguration.Builder().language("nl").build())\n                .build();\ntheoPlayerView = new THEOplayerView(this, playerConfig);\n'})}),"\n",(0,r.jsx)(n.h5,{id:"legacy-iostvos-sdk-412x",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,r.jsx)(n.p,{children:"In the implementation for iOS SDK, the addition of language needs to be done in 2 following Steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["An Additional separate JavaScript file needs to be added to your Android project. You can follow the instructions presented in this article: ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-163/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add/customize the iOS THEOplayer SDK"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"After a JavaScript file is added to your project, Please add the specific language to the JS file"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Sample code to add new language"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:'//add this code to pre.js file\nTHEOplayer.videojs.addLanguage("nl",{\n    "Play": "Afspelen",\n    "Pause": "Pauze",\n    "Current Time": "Huidige tijd",\n    "Duration Time": "Looptijd",\n    "Remaining Time": "Resterende tijd",\n    "Stream Type": "Streamtype",\n    "LIVE": "LIVE",\n    "Loaded": "Geladen",\n    "Progress": "Status",\n    "Fullscreen": "Volledig scherm",\n    "Non-Fullscreen": "Geen volledig scherm",\n    "Mute": "Geluid uit",\n    "Unmute": "Geluid aan",\n    "Settings": "Instellingen",\n    "Quality": "Kwaliteit",\n    "Speed": "Snelheid",\n    "Normal": "Normaal",\n    "AUTOMATIC": "AUTOMATISCH",\n    "Automatic": "Automatisch",\n    "Playback Rate": "Weergavesnelheid"\n});\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Create a new player configuration with declared new UIConfiguration:"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Sample Code to create a new player config"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:'//declare the variable for THEOplayerView\nvar theoplayer: THEOplayer!\n\n//Create a new player config in ViewDidLoad()\nlet jsPath = Bundle.main.path(forResource:"pre", ofType: "js")!\nlet playerConfig = THEOplayerConfiguration(defaultCSS: true, jsPathsPre: [jsPath], ui: UIConfiguration(language: "nl"))\nself.theoplayer = THEOplayer(configuration: playerConfig)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"reference-material",children:"Reference Material"}),"\n",(0,r.jsx)(n.p,{children:"A Sample project to demonstrate the above use-case:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Include THEOplayer Android SDK before compiling the entire project."}),"\n",(0,r.jsxs)(n.p,{children:["Download Here: ",(0,r.jsx)(n.a,{href:"http://cdn.theoplayer.com/demos/theoplayer/apps/lang/android-sdk-starter-project-master.zip",children:"http://cdn.theoplayer.com/demos/theoplayer/apps/lang/android-sdk-starter-project-master.zip"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Include THEOplayer iOS SDK before compiling the entire project."}),"\n",(0,r.jsxs)(n.p,{children:["Download Here: ",(0,r.jsx)(n.a,{href:"http://cdn.theoplayer.com/demos/theoplayer/apps/lang/ios-sdk-starter-project-master.zip",children:"http://cdn.theoplayer.com/demos/theoplayer/apps/lang/ios-sdk-starter-project-master.zip"})]}),"\n"]}),"\n"]})]})}function c(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return o}});var a=t(67294);let r={},l=a.createContext(r);function o(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);