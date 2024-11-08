"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[34513],{98140:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=n(74848),t=n(28453);const i={},s="How to prevent screen recording",a={id:"faq/how-to-prevent-screen-recording",title:"How to prevent screen recording",description:"This article explains what screen recording is, and how to counter it.",source:"@site/theoplayer/faq/62-how-to-prevent-screen-recording.md",sourceDirName:"faq",slug:"/faq/how-to-prevent-screen-recording",permalink:"/documentation/pr-preview/pr-155/theoplayer/faq/how-to-prevent-screen-recording",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer/faq/62-how-to-prevent-screen-recording.md",tags:[],version:"current",sidebarPosition:62,frontMatter:{},sidebar:"faq",previous:{title:"Is Portrait mode supported",permalink:"/documentation/pr-preview/pr-155/theoplayer/faq/is-portrait-mode-supported"},next:{title:"The provided video source is incompatible with the license for this player",permalink:"/documentation/pr-preview/pr-155/theoplayer/faq/the-provided-video-source-is-incompatible-with-the-license-for-this-player"}},c={},l=[{value:"What is screen recording",id:"what-is-screen-recording",level:2},{value:"How to counter screen recording",id:"how-to-counter-screen-recording",level:2},{value:"Strategies to prevent screen recording",id:"strategies-to-prevent-screen-recording",level:3},{value:"DRM",id:"drm",level:4},{value:"Restrict allowed platforms",id:"restrict-allowed-platforms",level:4},{value:"Conclusion on the prevention of screen recording",id:"conclusion-on-the-prevention-of-screen-recording",level:4},{value:"Strategies to cope with screen recording",id:"strategies-to-cope-with-screen-recording",level:3},{value:"Watermarking",id:"watermarking",level:4},{value:"Restrict qualities",id:"restrict-qualities",level:4},{value:"Conclusion on coping with screen recordings",id:"conclusion-on-coping-with-screen-recordings",level:4},{value:"Video players and screen recording",id:"video-players-and-screen-recording",level:2},{value:"THEOplayer and screen recording",id:"theoplayer-and-screen-recording",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components},{Details:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"how-to-prevent-screen-recording",children:"How to prevent screen recording"})}),"\n",(0,o.jsx)(r.p,{children:"This article explains what screen recording is, and how to counter it."}),"\n",(0,o.jsx)(r.h2,{id:"what-is-screen-recording",children:"What is screen recording"}),"\n",(0,o.jsx)(r.p,{children:'We define "screen recording" (also known as "screen capturing") as the malpractice of illegally recording video streams on a website or application of a content provider.'}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"These screen recordings may be redistributed on platforms which are not owned by the content provider."}),"\n",(0,o.jsx)(r.li,{children:"This unconsented redistribution may impact the business of the content provider."}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"Screen recordings - and redistribution of screen recordings - is considered a major, (arguably) unsolved issue in the video industry.\nAll content providers - including Netflix, Disney+ and Hulu - struggle to counter screen recordings.\nMost popular providers employ strategies to counter screen recordings, or to reduce the impact of screen recordings."}),"\n",(0,o.jsx)(r.p,{children:"Creating a screen recording doesn't have to be difficult."}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"The camera of a smartphone can be aimed at a screen. Your screen wouldn't know that a smartphone is recording it."}),"\n",(0,o.jsx)(r.li,{children:"The record function of Apple's Quicktime Player (or Window's Xbox Game Bar) can be used to record video content playing on Chrome on Windows, macOS and Linux.\nChrome on Windows, macOS and Linux doesn't offer a native mechanism to prevent screen recording, even when DRM protects the content."}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"The quality (and bitrate) of a video stream degrades through a screen recording, which is a useful property when the recording leaks."}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)("summary",{children:"Screen recording versus downloading"}),'\nWe do not define "screen recording" as the malpractice of illegally downloading and/or decrypting the original video streams on the website or application of a content provider.']}),(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:'For example, if a pirate (i.e. a user with the intention to steal and/or illegally redistribute content) downloads the source files of an HLS stream (and perhaps removes the encryption),\nthen they are not doing "screen recording".'}),"\n",(0,o.jsx)(r.li,{children:'On the other hand, if a "pirate"  uses Quicktime Player to record their screen (which is playing a video in Chrome),\nthen they are doing "screen recording".'}),"\n"]})]}),"\n",(0,o.jsx)(r.h2,{id:"how-to-counter-screen-recording",children:"How to counter screen recording"}),"\n",(0,o.jsx)(r.p,{children:"There are strategies to prevent screen recordings, and strategies to cope with screen recordings."}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"A preventive strategy involves making it more challenging to create screen recordings. (e.g. DRM, plug-ins)"}),"\n",(0,o.jsx)(r.li,{children:"A coping strategy involves responding to unprevented screen recordings. (e.g. watermarking, limited quality)"}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"You want to consider both strategies as a content provider."}),"\n",(0,o.jsx)(r.h3,{id:"strategies-to-prevent-screen-recording",children:"Strategies to prevent screen recording"}),"\n",(0,o.jsxs)(r.p,{children:["Strategies such as ",(0,o.jsx)(r.a,{href:"#drm",children:"using DRM"})," and ",(0,o.jsx)(r.a,{href:"#restrict-allowed-platforms",children:"restricting the allowed platforms"})," make it more challenging to create a screen recording."]}),"\n",(0,o.jsx)(r.p,{children:'However, never assume that you can make screen recording impossible, as "content pirates" will keep identifying and using workarounds.\nFor example, a common workaround is "Digital-to-Analog", where a smartphone camera could record a screen.\nAlternatively, dedicated hardware may also be able to screen recording, such as an HDMI recorder which does follow HDCP, but uses leaked certificates to record the output regardless.'}),"\n",(0,o.jsx)(r.h4,{id:"drm",children:"DRM"}),"\n",(0,o.jsx)(r.p,{children:"Using an appropriate multi-DRM set-up prevents screen recording.\nMany devices and platforms allow you to configure FairPlay, PlayReady and Widevine in such a way that the device and platform\nautomatically prevents screen recording tools. These configurations rely on the availability on support for hardware DRM."}),"\n",(0,o.jsx)(r.p,{children:"Reach out to your multi-DRM provider to understand which options they offer to prevent screen recordings,\nand how these options affect your targeted platforms."}),"\n",(0,o.jsx)(r.p,{children:"The following statements are generally true for multi-DRM:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["You can prevent screen recordings on platforms which support hardware DRM.\nThe list below represents a set of popular platforms which support hardware DRM:","\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Windows Edge"}),"\n",(0,o.jsx)(r.li,{children:"macOS Safari"}),"\n",(0,o.jsx)(r.li,{children:"iOS and iPadOS, both for apps and browsers"}),"\n",(0,o.jsx)(r.li,{children:"Android, but only for apps"}),"\n",(0,o.jsx)(r.li,{children:"Chromecast"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["You cannot prevent screen recordings on platforms which do not support hardware DRM.\nThe list below represents a set of popular platforms which do not support hardware DRM:","\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Chrome browsers (neither Windows nor Apple), because this platform only supports Widevine L3 (and not Widevine L1)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.h4,{id:"restrict-allowed-platforms",children:"Restrict allowed platforms"}),"\n",(0,o.jsx)(r.p,{children:"The previous section establishes that you can prevent screen recordings on many platforms, but not all platforms.\nAs a content provider, you could decide to only distribute your content on the set of platforms which allow for the prevention of\nscreen recording through multi-DRM."}),"\n",(0,o.jsx)(r.p,{children:"In this strategy, you could be forcing users to use another platform than their preferred choice.\nFor example, disallowing your viewers to use Chrome, means that about 50% of your browser viewers need to switch to another browser."}),"\n",(0,o.jsx)(r.h4,{id:"conclusion-on-the-prevention-of-screen-recording",children:"Conclusion on the prevention of screen recording"}),"\n",(0,o.jsx)(r.p,{children:"There are other strategies beyond only allowing your users to watch content on platforms where DRM prevents screen recording."}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["For Desktop users, you could try to force your viewers to install a desktop app which prevents screen recording.\nFor example, you could offer a HTML5 Electron app which utilizes the ",(0,o.jsx)(r.a,{href:"https://www.electronjs.org/docs/api/browser-window#winsetcontentprotectionenable-macos-windows",children:(0,o.jsx)(r.code,{children:"setContentProtection"})})," method to prevent\nscreen recording."]}),"\n",(0,o.jsxs)(r.li,{children:["You could try to use technology which prevents screen recording through third-party plugins.","\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"This approach (usually) requires the viewer to install an additional piece of software."}),"\n",(0,o.jsx)(r.li,{children:"For example, the viewer may have to install a Chrome extension which monitors computer services, and prevent video playback."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.li,{children:"You could try to use technology which renders the video in such a way that screen recording programs cannot properly capture the video."}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"The arguably primary industry problem w.r.t. screen recording is the prevention of screen recording on Chrome for Windows and Apple machines,\ndue to the sheer popularity of this platform.\nShould Windows and Apple add support for Widevine L1, then screen recording becomes more challenging on Chrome.\nThis change would grant a large coverage of protection on the browser market through multi-DRM."}),"\n",(0,o.jsx)(r.p,{children:"That being said, platform developers are engaging in efforts to make hardware DRM available on an increasing amount of platforms."}),"\n",(0,o.jsx)(r.h3,{id:"strategies-to-cope-with-screen-recording",children:"Strategies to cope with screen recording"}),"\n",(0,o.jsxs)(r.p,{children:["When you are not able to prevent screen recording, you can employ strategies to cope with it.\nFor example, you can use ",(0,o.jsx)(r.a,{href:"#watermarking",children:"watermarking"}),", or only ",(0,o.jsx)(r.a,{href:"#restrict-qualities",children:"allow a limited stream quality"})," on platforms which cannot prevent screen recording."]}),"\n",(0,o.jsx)(r.h4,{id:"watermarking",children:"Watermarking"}),"\n",(0,o.jsx)(r.p,{children:"A forensic or digital watermark allows you to embed an identifier in a video stream.\nYou can trace the identifier of a leaked screen recording. This tracking allows you to take punitive actions towards users who\ncreated the screen recording."}),"\n",(0,o.jsx)(r.p,{children:"A forensic watermark should be imperceptible and robust."}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"It should not be possible to visually recognize the watermark."}),"\n",(0,o.jsx)(r.li,{children:"It should not be possible to remove the watermark."}),"\n"]}),"\n",(0,o.jsx)(r.h4,{id:"restrict-qualities",children:"Restrict qualities"}),"\n",(0,o.jsxs)(r.p,{children:["You can restrict the available video stream quality to users.\nFor example, if your viewer is accessing the video stream on a platform which doesn't prevent screen recording through DRM,\nyou don't allow them to access any quality above 720p.\n(",(0,o.jsx)(r.em,{children:"This is a popular strategy among top content providers, including Netflix and Disney+."}),")"]}),"\n",(0,o.jsx)(r.p,{children:"A low-quality, leaked recording (which is even further degraded through the recording process) may reduce its appeal."}),"\n",(0,o.jsx)(r.h4,{id:"conclusion-on-coping-with-screen-recordings",children:"Conclusion on coping with screen recordings"}),"\n",(0,o.jsx)(r.p,{children:"Watermarking and restricting the quality allow you to react to leaks, and to further reduce its impact."}),"\n",(0,o.jsx)(r.p,{children:"You may also consider different strategies to reduce the impact of screen recordings.\nFor example, an AVOD business model would arguably suffer less from this, because viewers can access your content for free,\nbut you would monetize it through advertisements."}),"\n",(0,o.jsx)(r.h2,{id:"video-players-and-screen-recording",children:"Video players and screen recording"}),"\n",(0,o.jsx)(r.p,{children:'The influence of a video player on the prevention of screen recording is mainly through its support for DRM.\nMeaning, a video player can "indirectly" support the prevention of screen recording,\nif the video player is running on a website or app where screen recording is not allowed by the platform due to the employed\nDRM strategy.'}),"\n",(0,o.jsx)(r.p,{children:"For example,"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"a video player prevents the screen recording of HLS streams protected with FairPlay on macOS,\nbecause the macOS platform prevents this for FairPlay on Safari."}),"\n",(0,o.jsx)(r.li,{children:"a video player does not prevent the screen recording of MPEG-DASH streams protected with Widevine on macOS,\nbecause the macOS platform doesn't prevent this for Chrome."}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"The technological limitations of a platform are also the technological limitations of a video player.\nThe strategies discussed in this article are used in combination with a video player,\nbut they are not the responsibility of a video player.\nFor these strategies to work, the implementation and configuration of additional components (e.g. multi-DRM, watermarking, third-party plugin) is mandatory.\nThese components are not offered by a single video player SDK out-of-the-box.\nThis means that you have to combine a video player which external components."}),"\n",(0,o.jsx)(r.h3,{id:"theoplayer-and-screen-recording",children:"THEOplayer and screen recording"}),"\n",(0,o.jsx)(r.p,{children:"The previous section explains that video players indirectly prevent screen recordings when using the appropriate multi-DRM set-up.\nThis statement is also true for THEOplayer."}),"\n",(0,o.jsxs)(r.p,{children:["Additionally, THEOplayer is partnered with vendors which offer multi-DRM and watermarking.\nThese partners are listed at ",(0,o.jsx)(r.a,{href:"https://www.theoplayer.com/partners",children:"https://www.theoplayer.com/partners"}),"."]}),"\n",(0,o.jsx)(r.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(r.p,{children:"You should tailor your strategy to your needs. Four valid strategies are listed below."}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Do prevention through DRM, and coping through watermarking and restricting the qualities.\nOn platforms which do not prevent screen recording through DRM, you limit your video quality (e.g. 720p).\nIf a screen recording leaks, you have reduced the impact. Additionally, through the watermark, you can identify the source of the leak.\nThis strategy might frustrate viewers, because they might not be able to view the best quality on their preferred platform.\n(",(0,o.jsx)(r.em,{children:"This approach is used by popular streaming services, including Netflix."}),")"]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"Do prevention through DRM and restricting the allowed platforms, and coping through watermarking.\nYou don't allow viewers to watch your content on platforms which do not prevent the screen recording of DRM-protected streams.\nYou identify the source of leaks through watermarks.\nThis strategy might frustrate viewers, because they might not be able to view the stream on their preferred platform."}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"Do prevention through DRM and plugins, and coping through watermarking.\nYou force viewers to install a plugin to view the stream on a platform which don't prevent the screen recording of DRM-protected streams.\nYou identify the source of leaks through watermarks.\nThis strategy might frustrate viewers, because they need to install a plugin to view the stream on their preferred platform."}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"Do coping through watermarking.\nThis strategy doesn't prevent screen recording, but doesn't frustrate viewers. You identify the source of leaks through watermarks."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>a});var o=n(96540);const t={},i=o.createContext(t);function s(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);