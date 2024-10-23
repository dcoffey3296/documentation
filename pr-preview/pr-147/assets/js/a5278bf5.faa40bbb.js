"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[88225],{75387:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=o(74848),n=o(28453);const s={},i="How can I distribute 4K content?",d={id:"faq/how-can-i-distribute-4k-content",title:"How can I distribute 4K content?",description:"The ability to play 4k mostly depends on hardware.",source:"@site/theoplayer/faq/59-how-can-i-distribute-4k-content.md",sourceDirName:"faq",slug:"/faq/how-can-i-distribute-4k-content",permalink:"/documentation/pr-preview/pr-147/theoplayer/faq/how-can-i-distribute-4k-content",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer/faq/59-how-can-i-distribute-4k-content.md",tags:[],version:"current",sidebarPosition:59,frontMatter:{},sidebar:"faq",previous:{title:"How to apply accurate buffering strategy",permalink:"/documentation/pr-preview/pr-147/theoplayer/faq/how-to-apply-accurate-buffering-strategy"},next:{title:"What is the collaboration between Azure Media Services and THEOplayer",permalink:"/documentation/pr-preview/pr-147/theoplayer/faq/what-is-the-collaboration-between-azure-media-services-and-THEOplayer"}},a={},c=[{value:"Common issues when playing 4K content",id:"common-issues-when-playing-4k-content",level:2},{value:"4K supported platforms",id:"4k-supported-platforms",level:2},{value:"Video players and decoding",id:"video-players-and-decoding",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"how-can-i-distribute-4k-content",children:"How can I distribute 4K content?"})}),"\n",(0,r.jsx)(t.p,{children:"The ability to play 4k mostly depends on hardware.\nWhile the video player is responsible for passing on the data to the decoders, limitations to 4K playback often stem from the device, hardware, operating system or platform (e.g. Chrome, iOS app, Android TV app, ...).\nWhen either of these is unable to handle 4K content, you might be out of luck. It's important to ensure all of these boxes are checked."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"Why?"})," Streams above 1080p, like 4K (i.e. 2160p) and 8K, are usually packaged through codecs like HEVC (H.265), VP9 and AV1. Your device, hardware, operating system or platform might not be able to decode the selected codec. For example, Chrome lacks support for decoding HEVC. It's also possible that your platform doesn't support a specific codec profile or feature (e.g. HDR through Dolby Vision at 60fps) of a selected codec.\nWhile technically you can also do 4K streaming with AVC (H.264), it is often too inefficient from a bandwidth perspective.\nWe will leave this out of scope for the remainder of the document."]}),"\n",(0,r.jsx)(t.h2,{id:"common-issues-when-playing-4k-content",children:"Common issues when playing 4K content"}),"\n",(0,r.jsx)(t.p,{children:"Let's zoom in on our previous statement:"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Limitations to playback of 4K often stem from the device, hardware, operating system or platform."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"One of these individual components could be disrupting support for 4K streaming."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Device \u2500 Your device might not have the capabilities to render the codec which represents your stream, or you might be using a model which doesn't support the selected codec. For example, Chromecast devices from Generation 1, 2, 3 and 4 only support H.264 and VP8 up until 1080p, and don't offer any support for 4K. However, the ",(0,r.jsx)(t.a,{href:"https://developers.google.com/cast/docs/media#video_codecs",children:"Chromecast Ultra"})," does offer 4K streaming through HEVC and VP9 including HDR at 60fps."]}),"\n",(0,r.jsx)(t.li,{children:"Hardware \u2500 You might be connecting a device to a monitor incapable of rendering 4K, or you might be using a cable which cannot transfer your stream at the required rate. The leveraged hardware will usually downscale your video or even provide no feed at all."}),"\n",(0,r.jsx)(t.li,{children:"Operating System & Environment \u2500 Your operating system might not offer decoding support for a specific codec. For example, Apple didn't add support for 4K to iPhones until iOS 11 through HEVC. Chrome still doesn't support HEVC across any platform (except for on the iOS platform), and you have to use VP9 or AV1 to decode a 4K stream when using the browser."}),"\n",(0,r.jsx)(t.li,{children:"Platform \u2500 Your platform might not offer decoding support for a specific codec. For example, Android offers decoding support for 4K through HEVC through Android applications, but not through Android browsers like Chrome."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"4k-supported-platforms",children:"4K supported platforms"}),"\n",(0,r.jsx)(t.p,{children:"It's tough to provide a global view on platforms which support 4K streaming. In theory, you would have to maintain an overview of all supported codecs (and codec profiles and features) per version per model per platform.\nYou could then consult this overview to check if your selected codec (and profiles/features) are supported on your targeted platforms.\nThis overview would be challenging to maintain, because updates to platforms change the support for certain codecs, and new models of a specific platform could offer different support for a specific codec. For example, while the Chromecast Generation 4 offers no support for 4K through HEVC, Chromecast Ultra does."}),"\n",(0,r.jsx)(t.p,{children:"Please consider the table below as a generic snapshot in time. The platforms below can handle 4K streaming, but only if the appropriate codecs, platform versions and device (models) are used.\nIt's perfectly possible that you're not able to get your 4K stream to run on one of the platforms listed below, for example because you're using an unsupported codec."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Platform"}),(0,r.jsx)(t.th,{children:"Notes"}),(0,r.jsx)(t.th,{children:"THEOplayer SDK"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Browser"}),(0,r.jsx)(t.td,{children:"Depends on the device, browser and codec"}),(0,r.jsx)(t.td,{children:"Web SDK"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.apple.com/iphone/",children:"iOS"})}),(0,r.jsxs)(t.td,{children:["Depends on the device and codec, but could support:",(0,r.jsx)("br",{}),"HDR10, Dolby Vision, HEVC"]}),(0,r.jsx)(t.td,{children:"iOS/tvOS SDK"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.apple.com/ipad-pro/specs/",children:"iPadOS"})}),(0,r.jsxs)(t.td,{children:["Depends on the device and codec, but could support:",(0,r.jsx)("br",{}),"HDR10, Dolby Vision, HEVC"]}),(0,r.jsx)(t.td,{children:"iOS/tvOS SDK"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.apple.com/lae/apple-tv-4k/specs/",children:"Apple TV"})}),(0,r.jsxs)(t.td,{children:["Depends on the device and codec, but could support:",(0,r.jsx)("br",{}),"HDR10, Dolby Vision, HEVC SDR with 60fps, HEVC"]}),(0,r.jsx)(t.td,{children:"iOS/tvOS SDK"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://developer.android.com/guide/topics/media/media-formats",children:"Android"})}),(0,r.jsx)(t.td,{children:"Depends on the device and codec"}),(0,r.jsx)(t.td,{children:"Android/Fire TV SDK"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://developer.android.com/guide/topics/media/media-formats",children:"Android TV"})}),(0,r.jsx)(t.td,{children:"Depends on the device and codec"}),(0,r.jsx)(t.td,{children:"Android/Fire TV SDK"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.apple.com/airplay/",children:"AirPlay"})}),(0,r.jsx)(t.td,{children:"Depends on the device and codec"}),(0,r.jsx)(t.td,{children:"Web SDK, iOS SDK"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.apple.com/lae/ios/home/accessories/#section-tv",children:"AirPlay 2"})}),(0,r.jsx)(t.td,{children:"Depends on the device and codec"}),(0,r.jsx)(t.td,{children:"Web SDK, iOS SDK"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://developers.google.com/cast/docs/media",children:"Chromecast Receiver"})}),(0,r.jsxs)(t.td,{children:["Depends on the device and codec, but could support:",(0,r.jsx)("br",{}),"HDR10, Dolby Vision, HEVC, VP9, 60fps"]}),(0,r.jsx)(t.td,{children:"Web SDK, Chromecast SDK"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.google.com/chromecast/built-in/tv/",children:"Chromecast TV"})}),(0,r.jsx)(t.td,{children:"Depends on the device and codec."}),(0,r.jsx)(t.td,{children:"Web SDK, Chromecast SDK"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://developer.amazon.com/docs/fire-tv/device-specifications.html",children:"Fire TV"})}),(0,r.jsxs)(t.td,{children:["Depends on the device and codec, but could support:",(0,r.jsx)("br",{}),"HDR10, Dolby Vision, HEVC, VP9, AV1, 60fps"]}),(0,r.jsx)(t.td,{children:"Android/Fire TV SDK"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://developer.roku.com/en-gb/docs/specs/streaming.md",children:"Roku"})}),(0,r.jsxs)(t.td,{children:["Depends on the device and codec, but could support:",(0,r.jsx)("br",{}),"HDR10, Dolby Vision, HEVC, VP9, 60fps"]}),(0,r.jsx)(t.td,{children:"Roku SDK"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://developer.samsung.com/smarttv/develop/specifications/media-specifications.html",children:"Tizen"})}),(0,r.jsxs)(t.td,{children:["Depends on the device and codec, but could support:",(0,r.jsx)("br",{}),"HEVC, VP9, AV1, 60fps, 8K"]}),(0,r.jsx)(t.td,{children:"Web SDK"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://webostv.developer.lge.com/develop/specifications/video-audio-230",children:"webOS"})}),(0,r.jsxs)(t.td,{children:["Depends on the device and codec, but could support:",(0,r.jsx)("br",{}),"HEVC, AV1, 60fps, 8K"]}),(0,r.jsx)(t.td,{children:"Web SDK"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.xbox.com/en-US/consoles/xbox-one-x",children:"Xbox"})}),(0,r.jsx)(t.td,{children:"Depends on the device and codec"}),(0,r.jsx)(t.td,{children:"Web SDK"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.playstation.com/en-us/ps5/ps5-entertainment",children:"PlayStation"})}),(0,r.jsx)(t.td,{children:"Depends on the device and codec"}),(0,r.jsx)(t.td,{children:"Web SDK"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:'As this table is in flux, when you decide to implement 4K we encourage you to investigate if anything has changed for the platforms you are targeting (tip: searching for keywords like "Chromecast Media Capabilities 4K" often provides good results) or to reach out to the THEO support team with specific questions.'}),"\n",(0,r.jsx)(t.h2,{id:"video-players-and-decoding",children:"Video players and decoding"}),"\n",(0,r.jsxs)(t.p,{children:["Video players usually don't do software decoding and instead rely on the native decoding capabilities offered by the selected platform through a native API as player-based decoding would be highly inefficient for power consumption and often requires a lot of computational performance.\nFor example, on Desktop Chrome, video players leverage the ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API",children:"Media Source Extensions API"})," to decode the actual H.264 (or VP9 or AV1 or ...) codec representing your stream."]}),"\n",(0,r.jsx)(t.p,{children:"That being said, a video player might still be the one to blame when your viewers aren't seeing the beautiful 4K representation of your stream. Your video player should be able to correctly parse, extract and leverage the 4K stream from your HLS or MPEG-DASH manifest when your 4K representation can be applied. This functionality might not be implemented in your video player."}),"\n",(0,r.jsx)(t.p,{children:"THEOplayer supports 4K streaming out of the box. For specific devices, specific configuration recommendations can apply in order to achieve 4K streaming efficiently."})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>d});var r=o(96540);const n={},s=r.createContext(n);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);