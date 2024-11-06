"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[31209],{40257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=n(74848),a=n(28453);const r={slug:"/getting-started/frameworks/react-native/background"},o="Background Playback and Notifications",s={id:"external/react-native-theoplayer/doc/background",title:"Background Playback and Notifications",description:"Overview",source:"@site/theoplayer_versioned_docs/version-v6/external/react-native-theoplayer/doc/background.md",sourceDirName:"external/react-native-theoplayer/doc",slug:"/getting-started/frameworks/react-native/background",permalink:"/documentation/pr-preview/pr-152/theoplayer/v6/getting-started/frameworks/react-native/background",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/react-native-theoplayer/blob/-/doc/background.md",tags:[],version:"v6",frontMatter:{slug:"/getting-started/frameworks/react-native/background"},sidebar:"react-native",previous:{title:"Audio Control Management on Android",permalink:"/documentation/pr-preview/pr-152/theoplayer/v6/getting-started/frameworks/react-native/audio-control"},next:{title:"Casting with Chromecast and Airplay",permalink:"/documentation/pr-preview/pr-152/theoplayer/v6/getting-started/frameworks/react-native/cast"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Android",id:"android",level:3},{value:"Notifications, Metadata and Lockscreen Controls",id:"notifications-metadata-and-lockscreen-controls",level:2},{value:"Configuration",id:"configuration-1",level:3}];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"background-playback-and-notifications",children:"Background Playback and Notifications"})}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(t.p,{children:["One of the key features of ",(0,i.jsx)(t.code,{children:"react-native-theoplayer"})," is its support for background playback,\nnotifications, and lock-screen controls. This feature allows your users to continue listening\nto audio when the app is not in the foreground, and control playback using notifications and lock-screen controls."]}),"\n",(0,i.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"backgroundAudioConfiguration"})," player configuration affects the play-out behaviour when the app is moved to\nthe background: in case the ",(0,i.jsx)(t.code,{children:"enabled"})," property is set to ",(0,i.jsx)(t.code,{children:"true"}),", the current media asset will continue\nplaying when the app is moved to the background, otherwise play-out will pause."]}),"\n",(0,i.jsx)(t.p,{children:"The configuration can be modified at run-time, allowing the player to pause depending on the current media asset's\nproperties, or whether an ad is playing or not."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"player.backgroundAudioConfiguration = { enabled: true };\n"})}),"\n",(0,i.jsx)(t.h3,{id:"android",children:"Android"}),"\n",(0,i.jsxs)(t.p,{children:["On Android, a ",(0,i.jsx)(t.a,{href:"https://developer.android.com/guide/components/services",children:"service"})," is used to\ncontinue playback in the background while the user is not interacting with the app."]}),"\n",(0,i.jsxs)(t.p,{children:["It is possible to disable the service at build time by setting the build config field ",(0,i.jsx)(t.code,{children:"'THEOplayer_usePlaybackService = false'"}),".\nIn that case the background playback feature is always disabled, no notifications are displayed, and the\nplayer will always pause when the hosting app goes to the background."]}),"\n",(0,i.jsx)(t.h2,{id:"notifications-metadata-and-lockscreen-controls",children:"Notifications, Metadata and Lockscreen Controls"}),"\n",(0,i.jsx)(t.p,{children:"During play-out of a media asset, a notification is displayed that provides some metadata and\nenables basic control. The source description passed to the player should provide the necessary metadata\nproperties:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"{\n\tsources: [{\n    \tsrc: manifestUrl,\n        type: type,\n        contentProtection: {\n        \tintegration: '...',\n        \tfairplay: {\n        \t\tcertificate: '...',\n\t\t\t\tlicenseAcquisitionURL: licenseUrl\n\t\t\t}\n\t\t}\n\t}],\n\tposter: 'https://static.clubs.nfl.com/image/private/t_landscape_tablet/seahawks/nvbiygyqt9ccucmys0hr.jpg',\n\tmetadata: {\n\t\ttitle: 'My stream title',\n\t\tsubtitle: 'A subtitle or artist',\n\t\tnowPlayingServiceIdentifier: 'serviceId',\n\t\tnowPlayingContentIdentifier: 'contentId'\n\t}\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"The following fields from the sourceDescription are used to display information in the lockscreen:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"lockscreen title"})," field: ",(0,i.jsx)(t.strong,{children:"source.metadata.title"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"lockscreen artist"})," field: ",(0,i.jsx)(t.strong,{children:"source.metadata.artist"}),", with a fallback to ",(0,i.jsx)(t.strong,{children:"source.metadata.subtitle"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"lockscreen image"}),": ",(0,i.jsx)(t.strong,{children:"source.metadata.displayIconUri"}),", with a fallback to ",(0,i.jsx)(t.strong,{children:"source.poster"}),"\nThe following fields can be setup to do additional configuration for the lockscreen behaviour on iOS:"]}),"\n",(0,i.jsxs)(t.li,{children:["Info property service identifier: ",(0,i.jsx)(t.strong,{children:"source.metadata.nowPlayingServiceIdentifier"})]}),"\n",(0,i.jsxs)(t.li,{children:["Info property content identifier: ",(0,i.jsx)(t.strong,{children:"source.metadata.nowPlayingContentIdentifier"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"As a result, the following setup will result in the same lockscreen info being displayed:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"\t...\n\tmetadata: {\n\t\ttitle: 'My stream title',\n\t\tartist: 'A subtitle or artist',\n\t\tnowPlayingServiceIdentifier: 'serviceId',\n\t\tnowPlayingContentIdentifier: 'contentId',\n\t\tdisplayIconUri: 'https://static.clubs.nfl.com/image/private/t_landscape_tablet/seahawks/nvbiygyqt9ccucmys0hr.jpg',\n\t}\n"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.img,{alt:"notification_android",src:n(57900).A+"",width:"800",height:"403"})}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:(0,i.jsx)(t.img,{alt:"notification_ios",src:n(82790).A+"",width:"797",height:"340"})}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:(0,i.jsx)(t.img,{alt:"notification_web",src:n(91291).A+"",width:"791",height:"364"})})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Android"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"iOS"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Web"})]})})]}),"\n",(0,i.jsx)(t.h3,{id:"configuration-1",children:"Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"mediaControl"})," property of ",(0,i.jsx)(t.code,{children:"PlayerConfiguration"})," hosts properties that affect the notifications, media sessions and\ncontrols on each platform. Currently, it only contains a property ",(0,i.jsx)(t.code,{children:"mediaSessionEnabled"}),"\nthat toggles the Media Session API on web. If it is disabled, no media session properties or actions will be set."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},57900:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/notification_android-d782297b7b92dc30e196b0000efdd7a7.png"},82790:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/notification_ios-3ac8d1563482c7b4728aa098f9034dbc.png"},91291:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/notification_web-9e1124ac683eb295ff71adea39052c50.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var i=n(96540);const a={},r=i.createContext(a);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);