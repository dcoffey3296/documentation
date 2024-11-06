"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[91374],{83855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(74848),s=n(28453);const r={},a="Social Sharing",l={id:"how-to-guides/miscellaneous/social-sharing",title:"Social Sharing",description:"This article describes how to implement common use cases related to Social Sharing feature.",source:"@site/theoplayer_versioned_docs/version-v4/how-to-guides/07-miscellaneous/02-social-sharing.md",sourceDirName:"how-to-guides/07-miscellaneous",slug:"/how-to-guides/miscellaneous/social-sharing",permalink:"/documentation/pr-preview/pr-152/theoplayer/v4/how-to-guides/miscellaneous/social-sharing",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/how-to-guides/07-miscellaneous/02-social-sharing.md",tags:[],version:"v4",sidebarPosition:2,frontMatter:{},sidebar:"roku",previous:{title:"Related Content",permalink:"/documentation/pr-preview/pr-152/theoplayer/v4/how-to-guides/miscellaneous/related-content"},next:{title:"Up Next",permalink:"/documentation/pr-preview/pr-152/theoplayer/v4/how-to-guides/miscellaneous/up-next"}},o={},c=[{value:"SDKs",id:"sdks",level:2},{value:"Code examples",id:"code-examples",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android (TV) SDK",id:"android-tv-sdk",level:5},{value:"iOS (/tvOS) SDK",id:"ios-tvos-sdk",level:5},{value:"Related articles",id:"related-articles",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"social-sharing",children:"Social Sharing"})}),"\n",(0,i.jsx)(t.p,{children:"This article describes how to implement common use cases related to Social Sharing feature."}),"\n",(0,i.jsx)(t.p,{children:"The Social Sharing feature adds a component to the UI which enables the viewers to share the page across media, for example through Twitter and Facebook."}),"\n",(0,i.jsx)(t.p,{children:"The Social Sharing feature exposes the Social API. This API allows developers to configure the URLs and (social) channels."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Social Sharing",src:n(83588).A+"",title:"Social Sharing",width:"986",height:"784"})}),"\n",(0,i.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"})]})})]}),"\n",(0,i.jsxs)(t.p,{children:["The Social Sharing API is a UI feature. It's currently unavailable on all SDKs except the Web SDK because the underlying THEOplayer CSS and JavaScript modules aren't activated. This means that you also can't enable it using the guide located at ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-152/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add CSS or JavaScript files to an Android/iOS project"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"code-examples",children:"Code examples"}),"\n",(0,i.jsx)(t.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,i.jsx)(t.p,{children:"The Social Sharing API is currently only available on the Web SDK."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Reference API: ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/SocialSharing.html",children:"Social Sharing API"})]}),"\n",(0,i.jsxs)(t.li,{children:["Online demo: ",(0,i.jsx)(t.a,{href:"https://demo.theoplayer.com/social-sharing",children:"Social Sharing Demo"})]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'player.social.url = "https://demo.theoplayer.com/social-sharing";\nplayer.social.items = [\n  {\n    label: "Facebook",\n    icon: "https://facebookbrand.com/wp-content/themes/fb-branding/prj-fb-branding/assets/images/fb-art.png",\n    src: "http://www.facebook.com/sharer/sharer.php?u=<URL>"\n  },\n  {\n    label: "Twitter",\n    icon: "https://s-media-cache-ak0.pinimg.com/originals/f3/6f/51/f36f511b261596a2debe85d844bb1b87.png",\n    src: "http://twitter.com/intent/tweet?url=<URL>"\n  },\n  {\n    label: "Reddit",\n    icon: "https://vignette3.wikia.nocookie.net/hayday/images/1/10/Reddit.png/revision/latest?cb=20160713122603",\n    src: "http://www.reddit.com/submit?url=<URL>"\n  },\n  {\n    label: "Direct link",\n    src: "http://demo.theoplayer.com/social-sharing"\n  },\n  {\n    label: "Embed",\n    text: \'<iframe width="640" height="360" src="http://demo.theoplayer.com/social-sharing" frameborder="0" allowfullscreen>\\n</iframe>\'\n  }\n];\n'})}),"\n",(0,i.jsx)(t.h5,{id:"android-tv-sdk",children:"Android (TV) SDK"}),"\n",(0,i.jsx)(t.p,{children:"This API is currently not available on the Android (TV) SDK."}),"\n",(0,i.jsx)(t.h5,{id:"ios-tvos-sdk",children:"iOS (/tvOS) SDK"}),"\n",(0,i.jsx)(t.p,{children:"This API is currently not available on the iOS (/tvOS) SDK."}),"\n",(0,i.jsx)(t.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-152/theoplayer/v4/faq/why-does-network-api-not-work-on-ios-devices",children:"Why does the Network API not work on iOS devices?"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},83588:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/social-sharing-92115ada8662968068768f40ccf41832.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var i=n(96540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);