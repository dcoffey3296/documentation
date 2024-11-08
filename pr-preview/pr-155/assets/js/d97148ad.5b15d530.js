"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16629],{98889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(74848),i=n(28453);const a={},r="How to couple the native MediaRouteButton to THEOplayer",s={id:"getting-started/sdks/android/how-to-couple-native-mediaroutebutton",title:"How to couple the native MediaRouteButton to THEOplayer",description:"This page shows how to wire up the Android's native MediaRouteButton to THEOplayer. Your MediaRouteButton will be provided with the following behavior:",source:"@site/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/02-android/03-how-to-couple-native-mediaroutebutton.md",sourceDirName:"getting-started/01-sdks/02-android",slug:"/getting-started/sdks/android/how-to-couple-native-mediaroutebutton",permalink:"/documentation/pr-preview/pr-155/theoplayer/v4/getting-started/sdks/android/how-to-couple-native-mediaroutebutton",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/02-android/03-how-to-couple-native-mediaroutebutton.md",tags:[],version:"v4",sidebarPosition:3,frontMatter:{},sidebar:"android",previous:{title:"Legacy Android SDK (4.12.x) customization",permalink:"/documentation/pr-preview/pr-155/theoplayer/v4/getting-started/sdks/android/android-sdk-customization"},next:{title:"How to enable experimental native rendering on Android",permalink:"/documentation/pr-preview/pr-155/theoplayer/v4/getting-started/sdks/android/how-to-enable-native-rendering"}},d={},u=[{value:"Objectives",id:"objectives",level:2},{value:"Step-by-step guide",id:"step-by-step-guide",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"how-to-couple-the-native-mediaroutebutton-to-theoplayer",children:"How to couple the native MediaRouteButton to THEOplayer"})}),"\n",(0,o.jsx)(t.p,{children:"This page shows how to wire up the Android's native MediaRouteButton to THEOplayer. Your MediaRouteButton will be provided with the following behavior:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Clicking the button while disconnected will start a Chromecast session. The currently set source will start playing."}),"\n",(0,o.jsx)(t.li,{children:"Clicking the button while casting will stop the current session. The player will be paused."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"objectives",children:"Objectives"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Extend the MediaRouteButton and MediaRouteActionProvider"}),"\n",(0,o.jsx)(t.li,{children:"Wire up the button with an activity and THEOplayerView"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"step-by-step-guide",children:"Step-by-step guide"}),"\n",(0,o.jsx)(t.p,{children:"You can modify the behavior of the MediaRouteButton by creating a subclass of the MediaRouteButton and overriding the performClick or showDialog method. Below, we provide an example implementation which uses the Cast API of an attached TheoPlayerView."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"class TheoMediaRouteButton(context: Context): MediaRouteButton(context) {\n    companion object {\n        var theoPlayerView: THEOplayerView? = null\n    }\n\n    override fun showDialog(): Boolean {\n        val chromecast = theoPlayerView?.cast?.chromecast\n\n        if (chromecast == null) {\n            return super.showDialog()\n        } else if (chromecast.isCasting) {\n            chromecast.stop()\n            return false\n        } else {\n            chromecast.start()\n            return true\n        }\n    }\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"You can afterwards create a subclass of the MediaRouteActionProvider, overriding the onCreateMediaRouteButton allows us to insert our previously created MediaRouteButton."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"class TheoMediaRouteActionProvider(context: Context) : MediaRouteActionProvider(context) {\n    override fun onCreateMediaRouteButton(): MediaRouteButton {\n        return TheoMediaRouteButton(context)\n    }\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"Finally, you will add the cast button to your activity. As explained here, you should first add a menu item or a MediaRouteButton in the xml file that defines your menu, and use CastButtonFactory to wire it up with the framework. THEOplayer requires one extra step, and that is wiring up the TheoPlayerView with the TheoMediaRouteButton. Do not forget to unset the TheoPlayerView when you destroy the activity to avoid memory leaks."}),"\n",(0,o.jsx)(t.p,{children:"An example menu:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8"?>\n<menu xmlns:android="http://schemas.android.com/apk/res/android"\n    xmlns:app="http://schemas.android.com/apk/res-auto">\n    <item\n        android:id="@+id/media_route_menu_item"\n        android:title="Cast"\n        app:actionProviderClass="com.your-project.TheoMediaRouteActionProvider"\n        app:showAsAction="always" />\n</menu>\n'})}),"\n",(0,o.jsx)(t.p,{children:"The wiring code that has to be added to your activity"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"override fun onCreateOptionsMenu(menu: Menu): Boolean {\n    super.onCreateOptionsMenu(menu)\n    menuInflater.inflate(R.menu.activity_main_menu, menu)\n\n    if (isGooglePlayServicesAvailable(applicationContext)) {\n        TheoMediaRouteButton.theoPlayerView = theoPlayerView\n        CastButtonFactory.setUpMediaRouteButton(applicationContext, menu, R.id.media_route_menu_item)\n    }\n\n    return true\n}\n\noverride fun onDestroy() {\n    super.onDestroy()\n    TheoMediaRouteButton.theoPlayerView = null\n    theoPlayerView.onDestroy()\n}\n"})})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var o=n(96540);const i={},a=o.createContext(i);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);