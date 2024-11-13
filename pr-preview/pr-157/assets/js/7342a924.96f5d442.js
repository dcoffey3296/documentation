"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["41922"],{53430:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>s,default:()=>p,assets:()=>c,toc:()=>u,frontMatter:()=>d});var i=JSON.parse('{"id":"how-to-guides/android/media3/getting-started","title":"Getting started with Media3 on Android","description":"The THEOplayer Android Media3 pipeline is a new integration for the THEOplayer Android SDK that serves as a new and rebuilt base layer for playback of video and audio files.","source":"@site/theoplayer/how-to-guides/android/media3/getting-started.mdx","sourceDirName":"how-to-guides/android/media3","slug":"/how-to-guides/android/media3/getting-started","permalink":"/documentation/pr-preview/pr-157/theoplayer/how-to-guides/android/media3/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/android/media3/getting-started.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"android","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-157/theoplayer/how-to-guides/objective-C/introduction"},"next":{"title":"Getting started with Millicast on Android","permalink":"/documentation/pr-preview/pr-157/theoplayer/how-to-guides/android/millicast/getting-started"}}'),r=t("85893"),a=t("50065"),o=t("20398"),l=t("5525");let d={},s="Getting started with Media3 on Android",c={},u=[{value:"Usage",id:"usage",level:2},{value:"Add the Media3 integration dependency",id:"add-the-media3-integration-dependency",level:3},{value:"Add the Media3 integration to the player",id:"add-the-media3-integration-to-the-player",level:3},{value:"Known limitations",id:"known-limitations",level:2},{value:"FAQ",id:"faq",level:2},{value:"When should I use the Media3 integration?",id:"when-should-i-use-the-media3-integration",level:3},{value:"How does this integration affect the THEOplayer Android SDK?",id:"how-does-this-integration-affect-the-theoplayer-android-sdk",level:3},{value:"Does this integration use ExoPlayer?",id:"does-this-integration-use-exoplayer",level:3},{value:"Will this integration replace the current THEOplayer Android playback pipeline?",id:"will-this-integration-replace-the-current-theoplayer-android-playback-pipeline",level:3},{value:"More information",id:"more-information",level:2}];function h(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"getting-started-with-media3-on-android",children:"Getting started with Media3 on Android"})}),"\n",(0,r.jsxs)(n.p,{children:["The THEOplayer Android Media3 pipeline is a new integration for the THEOplayer Android SDK that serves as a new and rebuilt base layer for playback of video and audio files.\nIt is based on ",(0,r.jsx)(n.a,{href:"https://developer.android.com/media/media3",children:"Jetpack Media3"})," components, and it provides more stable playback covering a broader range of use cases, all while being lighter in size and more performant.\nNote that the integration is still under active development, see ",(0,r.jsx)(n.a,{href:"#known-limitations",children:"the Known limitations section"})," for more information."]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Follow ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-157/theoplayer/getting-started/sdks/android/getting-started",children:"our Getting Started guide"}),"\nto set up THEOplayer in your Android app."]}),"\n",(0,r.jsxs)(n.li,{children:["Add the Media3 integration as a dependency in your module-level ",(0,r.jsx)(n.code,{children:"build.gradle"})," file."]}),"\n",(0,r.jsx)(n.li,{children:"Add the Media3 integration to the player."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"add-the-media3-integration-dependency",children:"Add the Media3 integration dependency"}),"\n",(0,r.jsxs)(n.p,{children:["Given that the Media3 integration is under active development, it is currently still published to our ",(0,r.jsx)(n.code,{children:"snapshots"})," repository, so add the THEOplayer ",(0,r.jsx)(n.code,{children:"snapshots"})," Maven repository in your ",(0,r.jsx)(n.strong,{children:"top-level"})," (project) ",(0,r.jsx)(n.code,{children:"settings.gradle.kts"})," file."]}),"\n",(0,r.jsxs)(o.Z,{queryString:"lang",children:[(0,r.jsx)(l.default,{value:"groovy",label:"Groovy",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-groovy",children:'dependencyResolutionManagement {\n    repositories {\n        google()\n        mavenCentral()\n        maven { url "https://maven.theoplayer.com/releases" }\n        // highlight-next-line\n        maven { url "https://maven.theoplayer.com/snapshots" }\n    }\n}\n'})})}),(0,r.jsx)(l.default,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'dependencyResolutionManagement {\n    repositories {\n        google()\n        mavenCentral()\n        maven { url = uri("https://maven.theoplayer.com/releases") }\n        // highlight-next-line\n        maven { url = uri("https://maven.theoplayer.com/snapshots") }\n    }\n}\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Add the Media3 integration as a dependency in your module-level ",(0,r.jsx)(n.code,{children:"build.gradle"})," file:"]}),"\n",(0,r.jsxs)(o.Z,{queryString:"lang",children:[(0,r.jsx)(l.default,{value:"groovy",label:"Groovy",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-groovy",children:'dependencies {\n  implementation "com.theoplayer.theoplayer-sdk-android:core:8.+"\n  // highlight-next-line\n  implementation "com.theoplayer.theoplayer-sdk-android:integration-media3:8.+"\n}\n'})})}),(0,r.jsx)(l.default,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'dependencies {\n  implementation("com.theoplayer.theoplayer-sdk-android:core:8.+")\n  // highlight-next-line\n  implementation("com.theoplayer.theoplayer-sdk-android:integration-media3:8.+")\n}\n'})})})]}),"\n",(0,r.jsx)(n.h3,{id:"add-the-media3-integration-to-the-player",children:"Add the Media3 integration to the player"}),"\n",(0,r.jsxs)(n.p,{children:["To make use of the Media3 integration, create and add the ",(0,r.jsx)(n.code,{children:"Media3PlayerIntegration"})," to your ",(0,r.jsx)(n.code,{children:"THEOplayerView"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"val media3PlayerIntegration = Media3PlayerIntegrationFactory.createMedia3PlayerIntegration()\ntheoplayerView.player.addIntegration(media3PlayerIntegration)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Once the Media3PlayerIntegration is added to the player, all subsequent sources set on the player will use the Media3 pipeline."}),"\n",(0,r.jsxs)(o.Z,{queryString:"lang",children:[(0,r.jsx)(l.default,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'val typedSource = TypedSource\n.Builder("https://cdn.theoplayer.com/video/dash/big_buck_bunny/BigBuckBunny_10s_simple_2014_05_09.mpd")\n.type(SourceType.DASH)\n.build()\n\nval sourceDescription = SourceDescription\n.Builder(typedSource)\n.build()\n\ntheoPlayerView.player.source = sourceDescription\n'})})}),(0,r.jsx)(l.default,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'TypedSource typedSource = new TypedSource\n.Builder("https://cdn.theoplayer.com/video/dash/big_buck_bunny/BigBuckBunny_10s_simple_2014_05_09.mpd")\n.type(SourceType.DASH)\n.build();\n\nSourceDescription sourceDescription = new SourceDescription\n.Builder(typedSource)\n.build();\n\ntheoPlayerView.getPlayer().setSource(sourceDescription);\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["By default, the ",(0,r.jsx)(n.code,{children:"Media3PlayerIntegration"})," will play all types of sources except HESP and Millicast.\nTo modify the default behaviour, you can pass a custom ",(0,r.jsx)(n.code,{children:"Media3PlayerIntegration.SourceSelectCallback"})," implementation\nwhen constructing the integration."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"val media3PlayerIntegration = createMedia3PlayerIntegration(Media3PlayerIntegration.SourceSelectCallback { selectedSource, source ->\n    // selectedSource -> represents the TypedSource the player picked to play.\n    // source -> represents the SourceDescription passed to the player.\n    // return true -> the Media3 integration pipeline will be used to play the selected source.\n    // return false -> the default pipeline will be used to play the selected source.\n})\ntheoplayerView.player.addIntegration(media3PlayerIntegration)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"known-limitations",children:"Known limitations"}),"\n",(0,r.jsx)(n.p,{children:"As this integration is still under development, there are currently some known limitations and features that are still under development and not yet supported:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The preload, ABR, network, metrics, latency and caching (offline playback) APIs are not yet implemented and return dummy values."}),"\n",(0,r.jsx)(n.li,{children:"HESP/THEOlive and Millicast playback are not yet supported, and will fall back to our existing playback pipeline."}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"TextTrack.cues"}),", ",(0,r.jsx)(n.code,{children:"TextTrack.activeCues"})," and cue-related events are not yet supported. Although subtitles do render correctly to the screen, the content of these subtitles is not yet exposed through our API."]}),"\n",(0,r.jsx)(n.li,{children:"Certain player and source configuration parameters are not yet handled."}),"\n",(0,r.jsx)(n.li,{children:"Certain player events may not yet be dispatched correctly."}),"\n",(0,r.jsx)(n.li,{children:"There are some known issues with video track and quality switching."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,r.jsx)(n.h3,{id:"when-should-i-use-the-media3-integration",children:"When should I use the Media3 integration?"}),"\n",(0,r.jsx)(n.p,{children:"The Media3 integration is being built to improve stability and performance. If you're targeting performance restricted devices and/or aiming to broaden your device coverage, and you have encountered playback issues on particular device segments, we recommend trying out the Media3 integration."}),"\n",(0,r.jsx)(n.h3,{id:"how-does-this-integration-affect-the-theoplayer-android-sdk",children:"How does this integration affect the THEOplayer Android SDK?"}),"\n",(0,r.jsxs)(n.p,{children:["This integration replaces the media playback base layer of the THEOplayer Android SDK, offering improvements in performance and stability for playback over our current implementation. As only core media playback is affected, all player APIs remain identical and other features and integrations (such as ads, analytics or Chromecast) are not affected and will function the same. See ",(0,r.jsx)(n.a,{href:"#known-limitations",children:"the Known limitations section"})," for more info on what features might currently be affected."]}),"\n",(0,r.jsx)(n.h3,{id:"does-this-integration-use-exoplayer",children:"Does this integration use ExoPlayer?"}),"\n",(0,r.jsx)(n.p,{children:"While we make use of ExoPlayer components, this is not a plain ExoPlayer implementation. In addition to the integrations, features and support already offered by the THEOplayer Android SDK, we've reused what makes sense to implement our own playback pipeline that offers improvements, bugfixes and additional functionality over ExoPlayer."}),"\n",(0,r.jsx)(n.h3,{id:"will-this-integration-replace-the-current-theoplayer-android-playback-pipeline",children:"Will this integration replace the current THEOplayer Android playback pipeline?"}),"\n",(0,r.jsx)(n.p,{children:"We are developing this integration to offer significant improvements over our current playback implementation on Android. While currently this is still under development, the goal is for this pipeline to become the default playback pipeline for the THEOplayer Android SDK in the future."}),"\n",(0,r.jsx)(n.h2,{id:"more-information",children:"More information"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/media3/package-summary.html",children:"API references"})}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5525:function(e,n,t){t.r(n),t.d(n,{default:()=>o});var i=t("85893");t("67294");var r=t("67026");let a="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a,o),hidden:t,children:n})}},20398:function(e,n,t){t.d(n,{Z:()=>m});var i=t("85893"),r=t("67294"),a=t("67026"),o=t("69599"),l=t("33057"),d=t("7227");let s="tabList__CuJ",c="tabItem_LNqP";function u(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:d}=e,s=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),h=e=>{let n=e.currentTarget,t=d[s.indexOf(n)].value;t!==r&&(u(n),l(t))},p=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{let t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1]}}n?.focus()};return(0,i.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:d.map(e=>{let{value:n,label:t,attributes:o}=e;return(0,i.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>s.push(e),onKeyDown:p,onClick:h,...o,className:(0,a.Z)("tabs__item",c,o?.className,{"tabs__item--active":r===n}),children:t??n},n)})})}function h(e){let{lazy:n,children:t,selectedValue:o}=e,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===o);return e?(0,r.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,i.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o}))})}function p(e){let n=(0,l.Y)(e);return(0,i.jsxs)("div",{className:(0,a.Z)("tabs-container",s),children:[(0,i.jsx)(u,{...n,...e}),(0,i.jsx)(h,{...n,...e})]})}function m(e){let n=(0,d.default)();return(0,i.jsx)(p,{...e,children:(0,l.h)(e.children)},String(n))}},33057:function(e,n,t){t.d(n,{Y:function(){return u},h:function(){return s}});var i=t(67294),r=t(16550),a=t(32e3),o=t(4520),l=t(38341),d=t(76009);function s(e){return i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||i.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function c(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}function u(e){let{defaultValue:n,queryString:t=!1,groupId:u}=e,h=function(e){let{values:n,children:t}=e;return(0,i.useMemo)(()=>{let e=n??s(t).map(e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}});return!function(e){let n=(0,l.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[p,m]=(0,i.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!c({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let i=t.find(e=>e.default)??t[0];if(!i)throw Error("Unexpected error: 0 tabValues");return i.value})({defaultValue:n,tabValues:h})),[y,g]=function(e){let{queryString:n=!1,groupId:t}=e,a=(0,r.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t}),d=(0,o._X)(l);return[d,(0,i.useCallback)(e=>{if(!l)return;let n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})},[l,a])]}({queryString:t,groupId:u}),[f,v]=function(e){var n;let{groupId:t}=e;let r=(n=t)?`docusaurus.tab.${n}`:null,[a,o]=(0,d.Nk)(r);return[a,(0,i.useCallback)(e=>{if(!!r)o.set(e)},[r,o])]}({groupId:u}),x=(()=>{let e=y??f;return c({value:e,tabValues:h})?e:null})();return(0,a.Z)(()=>{x&&m(x)},[x]),{selectedValue:p,selectValue:(0,i.useCallback)(e=>{if(!c({value:e,tabValues:h}))throw Error(`Can't select invalid tab value=${e}`);m(e),g(e),v(e)},[g,v,h]),tabValues:h}}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var i=t(67294);let r={},a=i.createContext(r);function o(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);