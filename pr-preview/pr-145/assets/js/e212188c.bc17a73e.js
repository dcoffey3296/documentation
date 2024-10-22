"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76823],{17366:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=t(74848),o=t(28453),a=t(11470),i=t(19365);const l={description:"Start building your UI in just a few minutes!",sidebar_position:1,sidebar_custom_props:{icon:"\ud83d\ude80"}},s="Getting started",u={id:"android/getting-started",title:"Getting started",description:"Start building your UI in just a few minutes!",source:"@site/open-video-ui/android/getting-started.mdx",sourceDirName:"android",slug:"/android/getting-started",permalink:"/documentation/pr-preview/pr-145/open-video-ui/android/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/open-video-ui/android/getting-started.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Start building your UI in just a few minutes!",sidebar_position:1,sidebar_custom_props:{icon:"\ud83d\ude80"}},sidebar:"android",previous:{title:"Introduction",permalink:"/documentation/pr-preview/pr-145/open-video-ui/android/"},next:{title:"How-to guides",permalink:"/documentation/pr-preview/pr-145/open-video-ui/android/guides"}},d={},c=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Default UI",id:"default-ui",level:3},{value:"Custom UI",id:"custom-ui",level:3}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"getting-started",children:"Getting started"})}),"\n","\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Create a new Jetpack Compose app or set up Compose in your existing Android app by following ",(0,r.jsx)(n.a,{href:"https://developer.android.com/jetpack/compose/setup",children:"the Compose quick start guide"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Add the native THEOplayer Android SDK to your project by following ",(0,r.jsx)(n.a,{href:"https://github.com/THEOplayer/theoplayer-sdk-android#installation",children:"these installation instructions"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Add the THEOplayer Maven repository to your project-level ",(0,r.jsx)(n.code,{children:"settings.gradle"})," file:","\n",(0,r.jsxs)(a.A,{queryString:"lang",children:[(0,r.jsx)(i.A,{value:"groovy",label:"Groovy",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-groovy",children:'dependencyResolutionManagement {\n    repositories {\n        google()\n        mavenCentral()\n        maven { url "https://maven.theoplayer.com/releases" }\n    }\n}\n'})})}),(0,r.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'dependencyResolutionManagement {\n    repositories {\n        google()\n        mavenCentral()\n        maven { url = uri("https://maven.theoplayer.com/releases") }\n    }\n}\n'})})})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Add Open Video UI as a dependency in your module-level ",(0,r.jsx)(n.code,{children:"build.gradle"})," file:","\n",(0,r.jsxs)(a.A,{queryString:"lang",children:[(0,r.jsx)(i.A,{value:"groovy",label:"Groovy",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-groovy",children:'dependencies {\n    implementation "com.theoplayer.theoplayer-sdk-android:core:5.+"\n    implementation "com.theoplayer.android-ui:android-ui:1.+"\n}\n'})})}),(0,r.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'dependencies {\n    implementation("com.theoplayer.theoplayer-sdk-android:core:5.+")\n    implementation("com.theoplayer.android-ui:android-ui:1.+")\n}\n'})})})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.h3,{id:"default-ui",children:"Default UI"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"DefaultUI"})," provides a fully-featured video player experience with minimal setup."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'import android.os.Bundle\nimport androidx.activity.ComponentActivity\nimport androidx.activity.compose.setContent\nimport com.theoplayer.android.api.THEOplayerConfig\nimport com.theoplayer.android.api.source.SourceDescription\nimport com.theoplayer.android.ui.DefaultUI\nimport com.theoplayer.android.ui.theme.THEOplayerTheme\n\nclass MainActivity : ComponentActivity() {\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n\n        setContent {\n            THEOplayerTheme(useDarkTheme = true) {\n                DefaultUI(\n                    config = THEOplayerConfig.Builder().build(),\n                    source = SourceDescription.Builder("https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8")\n                        .build(),\n                    title = "Big Buck Bunny"\n                )\n            }\n        }\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/THEOplayer/android-ui/blob/main/app/src/main/java/com/theoplayer/android/ui/demo/MainActivity.kt",children:"the demo app"})," for a complete and working example."]}),"\n",(0,r.jsx)(n.h3,{id:"custom-ui",children:"Custom UI"}),"\n",(0,r.jsxs)(n.p,{children:["If you want to fully customize your video player layout, you can use a ",(0,r.jsx)(n.code,{children:"UIController"})," instead."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'setContent {\n    UIController(\n        config = THEOplayerConfig.Builder().build(),\n        source = SourceDescription.Builder("https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8")\n            .build(),\n        // Choose your own layout using the provided components (or your own!)\n        bottomChrome = {\n            SeekBar()\n            Row {\n                PlayButton()\n                MuteButton()\n                Spacer(modifier = Modifier.weight(1f))\n                FullscreenButton()\n            }\n        }\n    )\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(34164);const o={tabItem:"tabItem_Ymn6"};var a=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(96540),o=t(34164),a=t(23104),i=t(56347),l=t(205),s=t(57485),u=t(31682),d=t(70679);function c(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const o=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(o.location.search);n.set(a,e),o.replace({...o.location,search:n.toString()})}),[a,o])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,a=p(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[u,c]=m({queryString:t,groupId:o}),[g,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,a]=(0,d.Dv)(t);return[o,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:o}),f=(()=>{const e=u??g;return h({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),b(e)}),[c,b,a]),tabValues:a}}var b=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function y(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),d=e=>{const n=e.currentTarget,t=s.indexOf(n),o=l[t].value;o!==r&&(u(n),i(o))},c=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>s.push(e),onKeyDown:c,onClick:d,...a,className:(0,o.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,o.A)("tabs-container",f.tabList),children:[(0,v.jsx)(y,{...n,...e}),(0,v.jsx)(x,{...n,...e})]})}function k(e){const n=(0,b.A)();return(0,v.jsx)(j,{...e,children:c(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(96540);const o={},a=r.createContext(o);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);