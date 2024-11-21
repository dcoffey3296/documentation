"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["25810"],{85602:function(e,t,a){a.r(t),a.d(t,{metadata:()=>n,contentTitle:()=>o,default:()=>d,assets:()=>p,toc:()=>c,frontMatter:()=>l});var n=JSON.parse('{"id":"external/react-native-theoplayer/doc/example-app","title":"Example Application","description":"The example application on our react-native-theoplayer","source":"@site/theoplayer/external/react-native-theoplayer/doc/example-app.md","sourceDirName":"external/react-native-theoplayer/doc","slug":"/getting-started/frameworks/react-native/example-app","permalink":"/documentation/pr-preview/pr-162/theoplayer/getting-started/frameworks/react-native/example-app","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/react-native-theoplayer/blob/-/doc/example-app.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"slug":"/getting-started/frameworks/react-native/example-app"},"sidebar":"react-native","previous":{"title":"The THEOplayerView Component","permalink":"/documentation/pr-preview/pr-162/theoplayer/getting-started/frameworks/react-native/theoplayerview-component"},"next":{"title":"Adaptive Bitrate (ABR)","permalink":"/documentation/pr-preview/pr-162/theoplayer/getting-started/frameworks/react-native/abr"}}'),r=a("85893"),i=a("50065");let l={sidebar_position:3,slug:"/getting-started/frameworks/react-native/example-app"},o="Example Application",p={},c=[{value:"Building the example application",id:"building-the-example-application",level:2}];function s(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"example-application",children:"Example Application"})}),"\n",(0,r.jsxs)(t.p,{children:["The example application on our ",(0,r.jsx)(t.code,{children:"react-native-theoplayer"}),"\n",(0,r.jsx)(t.a,{href:"https://github.com/THEOplayer/react-native-theoplayer/tree/develop/example",children:"git repository"})," demonstrates how the use the\nplayer with the ",(0,r.jsx)(t.code,{children:"THEOplayerView"})," component and the UI components from ",(0,r.jsx)(t.code,{children:"@theoplayer/react-native-ui"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The example app depends on ",(0,r.jsx)(t.a,{href:"https://github.com/react-native-tvos/react-native-tvos",children:(0,r.jsx)(t.code,{children:"react-native-tvos"})}),",\na fork of the main ",(0,r.jsx)(t.code,{children:"react-native"})," repository, to properly include support for Apple TV."]}),"\n",(0,r.jsxs)(t.p,{children:["In this section we cover building and running the example app. If you would like to know more about the\n",(0,r.jsx)(t.code,{children:"DefaultTHEOplayerUi"})," and all the other UI components,\nvisit ",(0,r.jsx)(t.a,{href:"https://github.com/THEOplayer/react-native-theoplayer-ui",children:"our React Native UI project"}),"."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.img,{alt:"basic-ui",src:a(1478).Z+"",width:"874",height:"495"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.img,{alt:"basic-ui-source",src:a(45858).Z+"",width:"874",height:"495"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.img,{alt:"basic-ui-source",src:a(29495).Z+"",width:"874",height:"495"})})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["The ",(0,r.jsx)(t.code,{children:"DefaultTHEOplayerUi"})," in action."]}),(0,r.jsx)(t.td,{children:"Choosing a demo source from a custom UI component."}),(0,r.jsx)(t.td,{children:"Preview thumbnails."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"building-the-example-application",children:"Building the example application"}),"\n",(0,r.jsxs)(t.p,{children:["Clone the repository and install the dependencies for the ",(0,r.jsx)(t.code,{children:"react-native-theoplayer"})," package:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"$ git clone react-native-theoplayer\n$ cd react-native-theoplayer\n$ npm i\n"})}),"\n",(0,r.jsx)(t.p,{children:"Install dependencies for the example application:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"$ (cd example && npm i)\n"})}),"\n",(0,r.jsx)(t.p,{children:"For iOS and tvOS, also make sure to install pod dependencies"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"$ (cd example/ios && pod install)\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Make sure to configure your ",(0,r.jsx)(t.a,{href:"https://portal.theoplayer.com/",children:"THEOplayer license"})," in\nthe ",(0,r.jsx)(t.a,{href:"https://github.com/THEOplayer/react-native-theoplayer/blob/-/example/src/App.tsx",children:"app config"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Finally, after making sure the necessary development tools are installed, build & deploy the example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"$ cd example\n$ npm run android\n$ npm run ios\n$ npm run web\n"})})]})}function d(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},1478:function(e,t,a){a.d(t,{Z:function(){return n}});let n=a.p+"assets/images/example-app-player-ui-028fd4ae776c8d714aa787cd82c253ab.png"},45858:function(e,t,a){a.d(t,{Z:function(){return n}});let n=a.p+"assets/images/example-app-source-selection-979c83bc37ef94a4fcbb927019a82470.png"},29495:function(e,t,a){a.d(t,{Z:function(){return n}});let n=a.p+"assets/images/example-app-thumbnails-c6e829c4ae972be8051033369e3d3629.png"},50065:function(e,t,a){a.d(t,{Z:function(){return o},a:function(){return l}});var n=a(67294);let r={},i=n.createContext(r);function l(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);