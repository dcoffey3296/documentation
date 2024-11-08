"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[96368],{1295:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=o(74848),n=o(28453);const i={},d="Migrating to THEOplayer Android SDK 8.x",a={id:"getting-started/sdks/android/migrating-to-theoplayer-8",title:"Migrating to THEOplayer Android SDK 8.x",description:"This article will guide your through updating from THEOplayer Android SDK version 8 (from version 7),",source:"@site/theoplayer/getting-started/01-sdks/02-android/03-migrating-to-theoplayer-8.md",sourceDirName:"getting-started/01-sdks/02-android",slug:"/getting-started/sdks/android/migrating-to-theoplayer-8",permalink:"/documentation/pr-preview/pr-155/theoplayer/getting-started/sdks/android/migrating-to-theoplayer-8",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer/getting-started/01-sdks/02-android/03-migrating-to-theoplayer-8.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"android",previous:{title:"Migration from THEOplayer Android/AndroidTV/FireTV SDK 4.x to THEOplayer Android SDK 5.0",permalink:"/documentation/pr-preview/pr-155/theoplayer/getting-started/sdks/android/migration-from-4.x"},next:{title:"How-to guides",permalink:"/documentation/pr-preview/pr-155/theoplayer/how-to-guides/"}},s={},l=[{value:"Add the THEOplayer Maven repository",id:"add-the-theoplayer-maven-repository",level:2},{value:"Update THEOplayer",id:"update-theoplayer",level:2}];function p(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"migrating-to-theoplayer-android-sdk-8x",children:"Migrating to THEOplayer Android SDK 8.x"})}),"\n",(0,t.jsx)(r.p,{children:"This article will guide your through updating from THEOplayer Android SDK version 8 (from version 7),\nand the changes needed in your code."}),"\n",(0,t.jsx)(r.h2,{id:"add-the-theoplayer-maven-repository",children:"Add the THEOplayer Maven repository"}),"\n",(0,t.jsxs)(r.p,{children:["Until version 7, the THEOplayer Android SDK was published both to our ",(0,t.jsx)(r.a,{href:"https://maven.theoplayer.com/",children:"THEOplayer Maven repository"}),"\nand ",(0,t.jsx)(r.a,{href:"https://jitpack.io/#THEOplayer/theoplayer-sdk-android",children:"JitPack"}),".\nAs of version 8, we publish new versions only to the THEOplayer Maven repository."]}),"\n",(0,t.jsxs)(r.p,{children:["In your ",(0,t.jsx)(r.strong,{children:"top-level"})," (project) ",(0,t.jsx)(r.code,{children:"build.gradle"})," file, remove the JitPack repository\nand add the THEOplayer Maven repository:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-diff",children:"  allprojects {\n      repositories {\n          google()\n          mavenCentral()\n-         maven { url 'https://jitpack.io' }\n+         maven { url 'https://maven.theoplayer.com/releases' }\n      }\n  }\n"})}),"\n",(0,t.jsx)(r.admonition,{type:"note",children:(0,t.jsxs)(r.p,{children:["If you're using other (non-THEOplayer) dependencies that are published to JitPack,\nyou should not remove the JitPack repository from your ",(0,t.jsx)(r.code,{children:"build.gradle"})," file.\nHowever, we recommend placing the THEOplayer Maven repository ",(0,t.jsx)(r.em,{children:"before"})," JitPack,\nso the THEOplayer Android SDK is always downloaded from our official repository."]})}),"\n",(0,t.jsx)(r.h2,{id:"update-theoplayer",children:"Update THEOplayer"}),"\n",(0,t.jsxs)(r.p,{children:["Update THEOplayer Android SDK to version 8 in your ",(0,t.jsx)(r.strong,{children:"module-level"})," ",(0,t.jsx)(r.code,{children:"build.gradle"})," file:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-groovy",children:"dependencies {\n    implementation 'com.theoplayer.theoplayer-sdk-android:core:8.+'\n}\n"})}),"\n",(0,t.jsxs)(r.p,{children:["If you're using the ",(0,t.jsx)(r.a,{href:"/open-video-ui/android/",children:"Open Video UI for Android"})," or one of ",(0,t.jsx)(r.a,{href:"/theoplayer/connectors/android/",children:"our connectors"}),",\nmake sure to update them to the latest version too to ensure proper support for THEOplayer version 8."]})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,r,o)=>{o.d(r,{R:()=>d,x:()=>a});var t=o(96540);const n={},i=t.createContext(n);function d(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);