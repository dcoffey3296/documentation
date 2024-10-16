"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[87219],{40231:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var t=n(74848),r=n(28453);const a={},i="How to use ProGuard with THEOplayer Android SDK",d={id:"faq/how-to-use-proguard-with-android-sdk",title:"How to use ProGuard with THEOplayer Android SDK",description:"ProGuard is a popular tool to obfuscate and optimize Java code in Android projects. Depending on the settings, this tool can clash with the THEOplayer Android SDK.",source:"@site/theoplayer_versioned_docs/version-v4/faq/33-how-to-use-proguard-with-android-sdk.md",sourceDirName:"faq",slug:"/faq/how-to-use-proguard-with-android-sdk",permalink:"/documentation/pr-preview/pr-142/theoplayer/v4/faq/how-to-use-proguard-with-android-sdk",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/faq/33-how-to-use-proguard-with-android-sdk.md",tags:[],version:"v4",sidebarPosition:33,frontMatter:{},sidebar:"faq",previous:{title:"MediaTek limitations",permalink:"/documentation/pr-preview/pr-142/theoplayer/v4/faq/mediatek-limitations"},next:{title:"Self-hosting and versioning of THEOplayer",permalink:"/documentation/pr-preview/pr-142/theoplayer/v4/faq/self-hosting-theoplayer"}},s={},c=[];function p(e){const o={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.header,{children:(0,t.jsx)(o.h1,{id:"how-to-use-proguard-with-theoplayer-android-sdk",children:"How to use ProGuard with THEOplayer Android SDK"})}),"\n",(0,t.jsx)(o.p,{children:"ProGuard is a popular tool to obfuscate and optimize Java code in Android projects. Depending on the settings, this tool can clash with the THEOplayer Android SDK."}),"\n",(0,t.jsx)(o.p,{children:"Below, you can find a list of rules tested against THEOplayer Android SDK on 28 Nov 2018."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"-keep class com.theoplayer.android.** {*;}\n-dontwarn com.theoplayer.android.**\n-keep public class com.google.android.gms.* { public *; }\n-dontwarn com.google.android.gms.**\n-keep class android.support.v7.app.MediaRouteActionProvider {*;}\n-dontwarn android.support.v7.app.MediaRouteActionProvider\n\n# In case of using yospace integration\n-keep class com.yospace.util.** {*;}\n-dontwarn com.yospace.util.**\n\n# For native Google IMA integration\n-keep class com.google.obf.** { *; }\n-keep interface com.google.obf.** { *; }\n-keep class com.google.ads.interactivemedia.** { *; }\n-keep interface com.google.ads.interactivemedia.** { *; }\n\n# And in case of using a CastOptionsProvider and/or custom MediaRouteActionProvider for chromecast, you have to keep those classes too.\n# eg:\n# -keep class com.yourcomp.yourchromecastpackage.** {*;}\n# -dontwarn com.yourcomp.yourchromecastpackage.**\n"})})]})}function l(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>d});var t=n(96540);const r={},a=t.createContext(r);function i(e){const o=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:o},e.children)}}}]);