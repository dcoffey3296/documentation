"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["92521"],{37415:function(e,i,n){n.r(i),n.d(i,{metadata:()=>t,contentTitle:()=>o,default:()=>h,assets:()=>d,toc:()=>l,frontMatter:()=>s});var t=JSON.parse('{"id":"knowledge-base/advertisement/user-guide","title":"Advertising User Guide","description":"THEOplayer allows you to configure different aspects of its advertising environment. By following this guide you will learn about:","source":"@site/theoplayer/knowledge-base/01-advertisement/01-user-guide.md","sourceDirName":"knowledge-base/01-advertisement","slug":"/knowledge-base/advertisement/user-guide","permalink":"/documentation/pr-preview/pr-163/theoplayer/knowledge-base/advertisement/user-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/knowledge-base/01-advertisement/01-user-guide.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"roku","previous":{"title":"Advertisements","permalink":"/documentation/pr-preview/pr-163/theoplayer/knowledge-base/advertisement/introduction"},"next":{"title":"Server Side Ad Insertion","permalink":"/documentation/pr-preview/pr-163/theoplayer/knowledge-base/advertisement/server-side-ad-insertion"}}'),a=n("85893"),r=n("50065");let s={},o="Advertising User Guide",d={},l=[{value:"Feature Overview",id:"feature-overview",level:2},{value:"An overview of THEOplayer&#39;s Advertisement tools",id:"overview-advertisement-tools",level:3},{value:"Digital Video Ad Serving Template (VAST)",id:"digital-video-ad-serving-template-vast",level:4},{value:"Digital Video Multiple Ad Playlist (VMAP)",id:"digital-video-multiple-ad-playlist-vmap",level:4},{value:"Digital Video Player-Ad Interface Definition (VPAID)",id:"digital-video-player-ad-interface-definition-vpaid",level:4},{value:"Adblock detection",id:"adblock-detection",level:4},{value:"An overview of THEOplayer&#39;s different ad types",id:"an-overview-of-theoplayers-different-ad-types",level:3},{value:"Linear Ads",id:"linear-ads",level:4},{value:"Non-linear Ads (overlays)",id:"non-linear-ads-overlays",level:4},{value:"Companion Ads",id:"companion-ads",level:4},{value:"Ad Integrations",id:"ad-integrations",level:2},{value:"Client-Side Ad Insertion (CSAI)",id:"client-side-ad-insertion-csai",level:3},{value:"THEOplayer",id:"theoplayer",level:4},{value:"Google IMA",id:"google-ima",level:4},{value:"SpotX",id:"spotx",level:4},{value:"FreeWheel",id:"freewheel",level:4},{value:"Server Side Ad Insertion (SSAI)",id:"server-side-ad-insertion-ssai",level:3},{value:"Google Dynamic Ad Insertion (DAI)",id:"google-dynamic-ad-insertion-dai",level:4},{value:"Yospace",id:"yospace",level:4},{value:"Verizon Media",id:"verizon-media",level:4},{value:"MediaTailor",id:"mediatailor",level:4},{value:"Ad Configuration",id:"ad-configuration",level:2},{value:"Basic Ad Configuration",id:"basic-ad-config",level:3},{value:"Adding and configuring VAST ads",id:"adding-configuring-vast-ads",level:4},{value:"Control the ads shown alongside your content with VMAP",id:"control-the-ads-shown-alongside-your-content-with-vmap",level:4},{value:"Adding and configuring interactive VPAID ads",id:"adding-and-configuring-interactive-vpaid-ads",level:4},{value:"Advanced Ad Configuration",id:"advanced-ad-configuration",level:3},{value:"Dynamic Ad Scheduling",id:"dynamic-ad-scheduling",level:4},{value:"Ad Block Detection",id:"ad-block-detection",level:2},{value:"Demos and sample applications",id:"demos-and-sample-applications",level:2}];function c(e){let i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.header,{children:(0,a.jsx)(i.h1,{id:"advertising-user-guide",children:"Advertising User Guide"})}),"\n",(0,a.jsx)(i.p,{children:"THEOplayer allows you to configure different aspects of its advertising environment. By following this guide you will learn about:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"The advertisement feature in THEOplayer, with a focus on a few key concepts"}),"\n",(0,a.jsx)(i.li,{children:"The ad integrations in THEOplayer"}),"\n",(0,a.jsx)(i.li,{children:"Ad configuration and ad block detection"}),"\n",(0,a.jsxs)(i.li,{children:["Related resources, including","\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"How-to guides related to specific integrations"}),"\n",(0,a.jsx)(i.li,{children:"The reference API"}),"\n",(0,a.jsx)(i.li,{children:"Other ad-related how-to guides, information pages, blog articles, etc."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"How to configure ads, code snippets and specific support and use for the various integrations are found on the guides dedicated to the specific integrations."}),"\n",(0,a.jsx)(i.h2,{id:"feature-overview",children:"Feature Overview"}),"\n",(0,a.jsx)(i.h3,{id:"overview-advertisement-tools",children:"An overview of THEOplayer's Advertisement tools"}),"\n",(0,a.jsx)(i.p,{children:"THEOplayer offers an array of features that allow you to take total control over your online video content advertisement environment."}),"\n",(0,a.jsxs)(i.p,{children:["To facilitate integration between content providers and ad servers, we implement the IAB Video Suite, a set of technical specifications that are widely used by many participants in the online video advertisement industry. More specifically, we implement the following IAB specifications: ",(0,a.jsx)(i.em,{children:"Digital Video Ad Serving Template"})," (",(0,a.jsx)(i.strong,{children:"VAST"}),"), ",(0,a.jsx)(i.em,{children:"Digital Video Multiple Ad Playlist"})," (",(0,a.jsx)(i.strong,{children:"VMAP"}),") and ",(0,a.jsx)(i.em,{children:"Digital Video Player-Ad Interface Definition"})," (",(0,a.jsx)(i.strong,{children:"VPAID"}),"). You will have to get acquainted with these specifications if you want to optimize your advertisement revenue."]}),"\n",(0,a.jsxs)(i.p,{children:["On top of the IAB suite, THEOplayer comes with additional tools to improve advertisement efficiency, like ",(0,a.jsx)(i.strong,{children:"Adblock Detection"}),"."]}),"\n",(0,a.jsx)(i.h4,{id:"digital-video-ad-serving-template-vast",children:"Digital Video Ad Serving Template (VAST)"}),"\n",(0,a.jsx)(i.p,{children:"The Digital Video Ad Serving Template (VAST) specification is a description for video ads that standardizes communication requirements between video players and ad server. It gives instructions to the video player on how ads should be handled and displayed. It can define how and how long the ad should be displayed, if and when it can be skipped and how to give tracking information to the ad servers. VAST also specifies ad pods. These are groups of advertisements which should be played back-to-back."}),"\n",(0,a.jsx)(i.p,{children:"THEOplayer offers support for the delivery of video ads with VAST 4.0. Support is available for linear ads (pre-rolls, mid-rolls, pos-trolls and ad breaks), non-linear ads (overlay banners) and companion banners, all of which are discussed in the next section."}),"\n",(0,a.jsx)(i.h4,{id:"digital-video-multiple-ad-playlist-vmap",children:"Digital Video Multiple Ad Playlist (VMAP)"}),"\n",(0,a.jsx)(i.p,{children:"With Digital Video Multiple Ad Playlist (VMAP), video content owners can exercise control over the ad inventory displayed with their content when they cannot control the video player, to capitalize on advertising while maintaining the integrity of their program content. VMAP enables the content owner to define the ad breaks within their content, including the timing for each break, how many breaks are available, what type of ads and how many are allowed in each break. It is important to note however that VMAP was mainly designed with Video on demand (VOD) in mind."}),"\n",(0,a.jsx)(i.h4,{id:"digital-video-player-ad-interface-definition-vpaid",children:"Digital Video Player-Ad Interface Definition (VPAID)"}),"\n",(0,a.jsx)(i.p,{children:"VPAID establishes a common communication protocol between video players and ad units that allows a single \u201Cexecutable ad\u201D (one that requires software logic to be executed as part of ad playback) to be displayed in-stream with the publisher\u2019s video content. It allows the ad and the player to expect and rely upon a common set of functionalities. The significance is that advertisers using VPAID ads can provide rich ad experiences for viewers and collect ad playback and interaction details that are just as rich as the ad experience. With the adoption of VPAID, advertisers have more control over the display experience in their video campaigns. VPAID ads can easily be integrated on top of VAST manifests."}),"\n",(0,a.jsx)(i.h4,{id:"adblock-detection",children:"Adblock detection"}),"\n",(0,a.jsx)(i.p,{children:"Ad blockers or filters (such as the AdBlock plugin for browsers) remove or alter ads on webpages such that they become less obtrusive for the user. They can be a big threat to websites that get their revenue from video advertisements as they prevent an ad from being played. THEOplayer has built-in features that can detect ad blockers and act accordingly."}),"\n",(0,a.jsx)(i.h3,{id:"an-overview-of-theoplayers-different-ad-types",children:"An overview of THEOplayer's different ad types"}),"\n",(0,a.jsxs)(i.p,{children:["THEOplayer has support for ",(0,a.jsx)(i.strong,{children:"Linear"}),", ",(0,a.jsx)(i.strong,{children:"Non-linear"})," and ",(0,a.jsx)(i.strong,{children:"Companion"})," VAST and VPAID ads, as well as for VMAP ads."]}),"\n",(0,a.jsx)(i.p,{children:"THEOplayer currently supports several ad playback implementations:"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.strong,{children:"Client-side ad insertion (CSAI)"})}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsx)(i.li,{children:"THEOplayer (default)"}),"\n",(0,a.jsx)(i.li,{children:"Google IMA"}),"\n",(0,a.jsx)(i.li,{children:"SpotX"}),"\n",(0,a.jsx)(i.li,{children:"FreeWheel"}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.strong,{children:"Server-side ad insertion (SSAI)"})}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsx)(i.li,{children:"Google DAI"}),"\n",(0,a.jsx)(i.li,{children:"Yospace"}),"\n",(0,a.jsx)(i.li,{children:"Verizon Media"}),"\n",(0,a.jsx)(i.li,{children:"MediaTailor"}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"Below you can find the support matrix for different types of ads:"}),"\n",(0,a.jsxs)(i.table,{children:[(0,a.jsx)(i.thead,{children:(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.th,{style:{textAlign:"center"}}),(0,a.jsx)(i.th,{style:{textAlign:"center"},children:"VAST"}),(0,a.jsx)(i.th,{style:{textAlign:"center"},children:"VMAP"}),(0,a.jsx)(i.th,{style:{textAlign:"center"},children:"VPAID"})]})}),(0,a.jsxs)(i.tbody,{children:[(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{style:{textAlign:"center"},children:"THEOplayer"}),(0,a.jsx)(i.td,{style:{textAlign:"center"},children:"Yes"}),(0,a.jsx)(i.td,{style:{textAlign:"center"},children:"Yes"}),(0,a.jsx)(i.td,{style:{textAlign:"center"},children:"No"})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{style:{textAlign:"center"},children:"Google IMA"}),(0,a.jsx)(i.td,{style:{textAlign:"center"},children:"Yes"}),(0,a.jsx)(i.td,{style:{textAlign:"center"},children:"Yes"}),(0,a.jsx)(i.td,{style:{textAlign:"center"},children:"Yes"})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{style:{textAlign:"center"},children:"SpotX"}),(0,a.jsx)(i.td,{style:{textAlign:"center"},children:"Yes"}),(0,a.jsx)(i.td,{style:{textAlign:"center"},children:"Yes"}),(0,a.jsx)(i.td,{style:{textAlign:"center"},children:"Yes"})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{style:{textAlign:"center"},children:"FreeWheel"}),(0,a.jsx)(i.td,{style:{textAlign:"center"},children:"Yes"}),(0,a.jsx)(i.td,{style:{textAlign:"center"},children:"No"}),(0,a.jsx)(i.td,{style:{textAlign:"center"},children:"Yes"})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{style:{textAlign:"center"},children:"Google DAI"}),(0,a.jsx)(i.td,{style:{textAlign:"center"},children:"No"}),(0,a.jsx)(i.td,{style:{textAlign:"center"},children:"No"}),(0,a.jsx)(i.td,{style:{textAlign:"center"},children:"No"})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{style:{textAlign:"center"},children:"Yospace"}),(0,a.jsx)(i.td,{style:{textAlign:"center"},children:"Yes"}),(0,a.jsx)(i.td,{style:{textAlign:"center"},children:"Yes"}),(0,a.jsx)(i.td,{style:{textAlign:"center"},children:"No"})]})]})]}),"\n",(0,a.jsx)(i.h4,{id:"linear-ads",children:"Linear Ads"}),"\n",(0,a.jsx)(i.p,{children:"Linear ads are video ads that play before, during or after the content video. THEOplayer allows you to specify an optional offset to make a linear ad play at a given time during or after the video. Linear ads can be further configured by specifying how long the ad must be watched before the user can skip it. Linear ads can be interactive (VPAID) or can simply have a click-through that directs users to a webpage on a different screen."}),"\n",(0,a.jsx)(i.h4,{id:"non-linear-ads-overlays",children:"Non-linear Ads (overlays)"}),"\n",(0,a.jsx)(i.p,{children:"Non-linear ads are shown on top of the video as an overlay during playback. The user can interact with these ads by clicking them, which will, for example, redirect them to a page with more information about the product being advertised. Non-linear ads can also be closed by users."}),"\n",(0,a.jsx)(i.h4,{id:"companion-ads",children:"Companion Ads"}),"\n",(0,a.jsx)(i.p,{children:"Companion banners are ads surrounding the video player that, in comparison with linear and non-linear ads, do not directly interfere with a user\u2019s viewing experience. THEOplayer allows you to choose where the companion ads should be displayed on your website so it better integrates with the layout of the page."}),"\n",(0,a.jsx)(i.h2,{id:"ad-integrations",children:"Ad Integrations"}),"\n",(0,a.jsx)(i.p,{children:"Advertisements are described through the AdDescription object in the API. Beside defining a source, you can also define the integration property."}),"\n",(0,a.jsx)(i.h3,{id:"client-side-ad-insertion-csai",children:"Client-Side Ad Insertion (CSAI)"}),"\n",(0,a.jsx)(i.p,{children:"Client-Side Ad Insertion (CSAI) is the traditional method of inserting advertisements into an online video. Through this method, advertisements and video are served separately and integrated into the video player on the client side: this approach pauses your content, loads a video advertisement, and then resumes your video when the ad is finished. The benefit of CSAI is that it is easy to implement and integrate. As it has direct contact with the ad server, it also allows advertisers to better track metrics. On the client side, the video player is responsible for loading all necessary files (e.g. VAST, videos, banners), managing the timing of when the advertisements should be played, interrupting playback when needed and ensuring that switching content and error handling works smoothly."}),"\n",(0,a.jsx)(i.p,{children:"THEOplayer provides several integrations to achieve CSAI, including its own integration:"}),"\n",(0,a.jsx)(i.h4,{id:"theoplayer",children:"THEOplayer"}),"\n",(0,a.jsx)(i.p,{children:"The THEOplayer ad system is selected with the value 'theo'. As this ad system is the default one, you do not have to indicate this preference, and you can omit the integration property altogether. More information can be found at:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/Ad.html",children:"Ads Reference API"})}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.a,{href:"/documentation/pr-preview/pr-163/theoplayer/how-to-guides/ads/how-to-set-up-vast-and-vmap",children:"How to set up VAST and VMAP ads"}),": this how-to guide contains information regarding this integration, including how to use this integration, requirements (if any) and code samples."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(i.h4,{id:"google-ima",children:"Google IMA"}),"\n",(0,a.jsxs)(i.p,{children:["Set the ",(0,a.jsx)(i.code,{children:"integration"})," property to ",(0,a.jsx)(i.code,{children:"'google-ima'"})," to use the Google IMA integration. More information can be found at:"]}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/IMAAdDescription.html",children:"Reference API"})}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"/documentation/pr-preview/pr-163/theoplayer/how-to-guides/ads/google-ima",children:"Google IMA"}),": this how-to guide contains information regarding this integration, including how to use this integration, requirements (if any) and code samples."]}),"\n"]}),"\n",(0,a.jsx)(i.h4,{id:"spotx",children:"SpotX"}),"\n",(0,a.jsxs)(i.p,{children:["Set the ",(0,a.jsx)(i.code,{children:"integration property"})," to ",(0,a.jsx)(i.code,{children:"'spotx'"})," to configure SpotX ads. More information can be found at:"]}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/SpotXAdDescription.html",children:"Reference API"})}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"/documentation/pr-preview/pr-163/theoplayer/how-to-guides/ads/spotx",children:"SpotX"}),": this how-to guide contains more information regarding this integration, including how to use this integration, requirements (if any) and code samples."]}),"\n"]}),"\n",(0,a.jsx)(i.h4,{id:"freewheel",children:"FreeWheel"}),"\n",(0,a.jsxs)(i.p,{children:["Set the ",(0,a.jsx)(i.code,{children:"integration"})," property to ",(0,a.jsx)(i.code,{children:"'freewheel'"})," to configure FreeWheel ads. Please note that, in this case, the adSource properties are different from those for other ad integrations (e.g.: theo integration). More information can be found at:"]}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/FreeWheelAdDescription.html",children:"Reference API"})}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"/documentation/pr-preview/pr-163/theoplayer/how-to-guides/ads/freewheel",children:"FreeWheel"}),": this how-to guide contains more information regarding this integration, including how to use this integration, requirements (if any) and code samples."]}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"server-side-ad-insertion-ssai",children:"Server Side Ad Insertion (SSAI)"}),"\n",(0,a.jsx)(i.p,{children:"With Server-Side Ad Insertion (SSAI), advertising content is injected into a video stream: the broadcaster indicates when advertisements may be inserted by providing cues (hints) in the stream. The content is then forwarded to an ad insertion server, which replaces the dummy content with actual advertisements. That way, the advertisements are part of the stream. This creates an experience much like traditional broadcasting. SSAI opens the door to many possibilities. For example, inserted advertisement content can be personalized down to a single-user level, for improved advertisement efficiency. As a client can no longer make the distinction between content and advertisement video chunks, their download calls cannot be blocked by ad blockers. This increases advertisement revenue compared to traditional client-side ads."}),"\n",(0,a.jsx)(i.p,{children:"THEOplayer pre-integrates with first-class Server-Side Ad Insertion(SSAI) providers, including Google DAI and Yospace."}),"\n",(0,a.jsx)(i.h4,{id:"google-dynamic-ad-insertion-dai",children:"Google Dynamic Ad Insertion (DAI)"}),"\n",(0,a.jsxs)(i.p,{children:["To use the Google DAI integration you have to set the ",(0,a.jsx)(i.code,{children:"integration"})," key to ",(0,a.jsx)(i.code,{children:"'google-dai'"}),"."]}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/GoogleDAIConfiguration.html",children:"Reference API"})}),"\n"]}),"\n",(0,a.jsx)(i.h4,{id:"yospace",children:"Yospace"}),"\n",(0,a.jsxs)(i.p,{children:["To use the Yospace integration you have to set the ",(0,a.jsx)(i.code,{children:"integration"})," key to ",(0,a.jsx)(i.code,{children:"'yospace'"}),"."]}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/Yospace.html",children:"Reference API"})}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"/documentation/pr-preview/pr-163/theoplayer/how-to-guides/ads/yospace",children:"Yospace"}),": this how-to guide contains more information regarding this integration, including how to use this integration, requirements (if any) and code samples."]}),"\n"]}),"\n",(0,a.jsx)(i.h4,{id:"verizon-media",children:"Verizon Media"}),"\n",(0,a.jsxs)(i.p,{children:["To use the Verizon Media integration you have to set the ",(0,a.jsx)(i.code,{children:"integration"})," key to ",(0,a.jsx)(i.code,{children:"'verizon-media'"}),"."]}),"\n",(0,a.jsxs)(i.p,{children:["You can refer to ",(0,a.jsx)(i.a,{href:"/documentation/pr-preview/pr-163/theoplayer/how-to-guides/miscellaneous/verizon-media/ads",children:"our section on Verizon Media"})," to learn more about SSAI with Verizon Media."]}),"\n",(0,a.jsx)(i.h4,{id:"mediatailor",children:"MediaTailor"}),"\n",(0,a.jsxs)(i.p,{children:["To use the MediaTailor integration you have to set the ",(0,a.jsx)(i.code,{children:"integration"})," key to ",(0,a.jsx)(i.code,{children:"'mediatailor'"}),"."]}),"\n",(0,a.jsxs)(i.p,{children:["You can refer to ",(0,a.jsx)(i.a,{href:"/documentation/pr-preview/pr-163/theoplayer/how-to-guides/ads/mediatailor",children:"our MediaTailor guide"})," to learn more about SSAI with MediaTailor."]}),"\n",(0,a.jsx)(i.h2,{id:"ad-configuration",children:"Ad Configuration"}),"\n",(0,a.jsx)(i.h3,{id:"basic-ad-config",children:"Basic Ad Configuration"}),"\n",(0,a.jsxs)(i.p,{children:["As we discussed in ",(0,a.jsx)(i.a,{href:"#overview-advertisement-tools",children:"An overview of THEOplayer's Advertisement tools"}),", VAST gives instructions to the video player on how ads should be handled and displayed. This guide does not go into the details of how to create a VAST file. We only refer to the VAST specification, a good starting point if you want to learn the skill."]}),"\n",(0,a.jsx)(i.p,{children:"Here, we will discuss how you can add existing VAST ads to THEOplayer - examples for all the features explained in this section can be found in the how-to guides linked below."}),"\n",(0,a.jsx)(i.h4,{id:"adding-configuring-vast-ads",children:"Adding and configuring VAST ads"}),"\n",(0,a.jsx)(i.p,{children:"The player supports VAST by specifying a URL parameter to the VAST description in the player configuration. The player will automatically load this advertisement description and act accordingly."}),"\n",(0,a.jsxs)(i.table,{children:[(0,a.jsx)(i.thead,{children:(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.th,{style:{textAlign:"center"},children:"Attribute"}),(0,a.jsx)(i.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,a.jsx)(i.tbody,{children:(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{style:{textAlign:"center"},children:(0,a.jsx)(i.code,{children:"sources"})}),(0,a.jsx)(i.td,{style:{textAlign:"center"},children:"This mandatory parameter allows you to specify the location of the VAST advertisement XML file."})]})})]}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.strong,{children:"Specifying an offset for your ad"})}),"\n",(0,a.jsx)(i.p,{children:"You can specify an optional offset parameter that indicates at what time the ad should be displayed before, during or after the video. This parameter works for linear as well as non-linear and companion ads and has the following specification:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"timeOffset"}),": This optional parameter allows you to determine the placement of the specified ad. Five different formats are allowed:","\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"seconds"}),": a numeric value representing the number of seconds into the video the ad should play."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"time"}),": in the format ",(0,a.jsx)(i.code,{children:"hh:mm:ss.mmm"})," (",(0,a.jsx)(i.code,{children:".mmm"})," is optional), for example ",(0,a.jsx)(i.code,{children:"'00:35:30.000'"}),"."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"percentage"}),": in the format ",(0,a.jsx)(i.code,{children:"n%"}),", where n is a value from 0-100, for example ",(0,a.jsx)(i.code,{children:"50%"}),"."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"start/end"}),": The value ",(0,a.jsx)(i.code,{children:"'start'"})," signifies that the video is a pre-roll and should be played before the actual video can be watched. The value ",(0,a.jsx)(i.code,{children:"'end'"})," signifies that the video is a post-roll and should be played after the original video."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"If you are using a VMAP ad, this property should not be used, as the VMAP format specifies its own time offset for breaks. Using this property with VMAP may cause no ad breaks or incorrect placement of ad breaks."}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.strong,{children:"Configuring your ad to be skippable"})}),"\n",(0,a.jsx)(i.p,{children:"You can allow an ad to be skipped by adding a skip parameter in the configuration. The skip parameter describes how long - in seconds - the ad must be watched before the user can skip it. The parameter is optional: if you do not define one, THEOplayer will use the information specified by the VAST file itself."}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.em,{children:"NOTE: ad-skipping is currently not supported on some iOS devices for google IMA."})}),"\n",(0,a.jsxs)(i.table,{children:[(0,a.jsx)(i.thead,{children:(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.th,{style:{textAlign:"center"},children:"Attribute"}),(0,a.jsx)(i.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,a.jsx)(i.tbody,{children:(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{style:{textAlign:"center"},children:(0,a.jsx)(i.code,{children:"skipOffset"})}),(0,a.jsx)(i.td,{style:{textAlign:"center"},children:"This optional parameter allows you to override the amount of seconds a viewer must watch the advertisement before it can be skipped. A negative value of -1 disables ad-skipping (even if the VAST file specifies a skip delay)."})]})})]}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.strong,{children:"Choosing where to place companion ads"})}),"\n",(0,a.jsx)(i.p,{children:"THEOplayer allows you to render companion ads where you want. This way, you can optimally integrate ads with the layout of your page. When a companion ad is in the VAST/VMAP/VPAID, you can detect them through an event listener. These elements can be added to the page where they fit best."}),"\n",(0,a.jsx)(i.h4,{id:"control-the-ads-shown-alongside-your-content-with-vmap",children:"Control the ads shown alongside your content with VMAP"}),"\n",(0,a.jsxs)(i.p,{children:["The VMAP protocol enriches the VAST data with the timing of the advertisements. Again, we will not explain how you should create VMAP files, you can read more on that in the ",(0,a.jsx)(i.a,{href:"https://www.iab.com/guidelines/digital-video-multiple-ad-playlist-vmap-1-0-1/",children:"VMAP specification"}),". Configuration of the skipOffset delay can be done similarly as in the VAST configuration, discussed in ",(0,a.jsx)(i.a,{href:"#adding-configuring-vast-ads",children:"Adding and configuring VAST ads"}),". The following table summarizes the possibilities and effects of each option."]}),"\n",(0,a.jsxs)(i.table,{children:[(0,a.jsx)(i.thead,{children:(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.th,{style:{textAlign:"center"},children:"Attribute"}),(0,a.jsx)(i.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,a.jsxs)(i.tbody,{children:[(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{style:{textAlign:"center"},children:(0,a.jsx)(i.code,{children:"sources"})}),(0,a.jsx)(i.td,{style:{textAlign:"center"},children:"This parameter specifies the location of the VMAP advertisement XML file."})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{style:{textAlign:"center"},children:(0,a.jsx)(i.code,{children:"skipOffset"})}),(0,a.jsx)(i.td,{style:{textAlign:"center"},children:"This optional parameter allows overriding the number of seconds a viewer must watch a pre-roll ad before it can be skipped. A negative value of -1 disables ad-skipping. This will affect all linear ads specified in the VMAP file."})]})]})]}),"\n",(0,a.jsx)(i.h4,{id:"adding-and-configuring-interactive-vpaid-ads",children:"Adding and configuring interactive VPAID ads"}),"\n",(0,a.jsxs)(i.p,{children:["Our player provides VPAID 2.0 support via our Google IMA integration. This version of the specification is designed to further facilitate VPAID integration with VAST. This means that you can embed rich VPAID ads in your VAST manifests and add those manifests to our player, as we have shown in ",(0,a.jsx)(i.a,{href:"#adding-configuring-vast-ads",children:"Adding and configuring VAST ads"}),"."]}),"\n",(0,a.jsx)(i.h3,{id:"advanced-ad-configuration",children:"Advanced Ad Configuration"}),"\n",(0,a.jsx)(i.h4,{id:"dynamic-ad-scheduling",children:"Dynamic Ad Scheduling"}),"\n",(0,a.jsxs)(i.p,{children:["In ",(0,a.jsx)(i.a,{href:"#basic-ad-config",children:"Basic Ad Configuration"}),", we learned how to statically add ads to THEOplayer on startup by specifying them in the configuration object. However, several interesting use cases exist that require on the fly ad injection, for example when VAST files should be added by a script provided by an external ad server."]}),"\n",(0,a.jsxs)(i.p,{children:["To dynamically add advertisements, you should use the ",(0,a.jsx)(i.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/Ads.html#schedule",children:(0,a.jsx)(i.code,{children:"player.ads.schedule(AdDescription)"})})," function which will add the given ad file as if it were specified in the initial configuration. The AdDescription - which you will pass as a parameter to the function - is the same object as previously discussed in ",(0,a.jsx)(i.a,{href:"#basic-ad-config",children:"Basic Ad Configuration"}),"."]}),"\n",(0,a.jsx)(i.p,{children:"NOTE: Please note that when adding a pre-roll when the original video is already playing (for example because of autoplay), the pre-roll cannot start playing. An advertisement with an offset of '0%' will always be able to play."}),"\n",(0,a.jsx)(i.h2,{id:"ad-block-detection",children:"Ad Block Detection"}),"\n",(0,a.jsxs)(i.p,{children:["THEOplayer offers the option to block the player when an adblocker is detected. This can be achieved by setting blockOnAdBlock in the configuration.ads object to true. The player will display a message saying it has detected an ad blocker and that the user will need to turn it off in order to watch the video. A more in-depth code-example can be found at ",(0,a.jsx)(i.a,{href:"https://demo.theoplayer.com/adblock-detection",children:"https://demo.theoplayer.com/adblock-detection"}),"."]}),"\n",(0,a.jsx)(i.p,{children:"The default message that is shown when ad-block is detected is depicted below."}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"Adblock detection",src:n(22173).Z+"",width:"1534",height:"864"})}),"\n",(0,a.jsx)(i.h2,{id:"demos-and-sample-applications",children:"Demos and sample applications"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://www.theoplayer.com/theoplayer-demo-google-dai",children:"Google DAI Demo Page"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://demo.theoplayer.com/ssai",children:"SSAI Demo Page"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://www.theoplayer.com/theoplayer-demo-advertisement-tester-vpaid-vast-vmap",children:"THEOplayer: Advertisements Tester (VAST, VPAID, VMAP)"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://demo.theoplayer.com/adblock-detection",children:"Adblock detection"})}),"\n"]})]})}function h(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},22173:function(e,i,n){n.d(i,{Z:function(){return t}});let t=n.p+"assets/images/adblock-detected-8348d073be3013c7944848c140c8a7ef.png"},50065:function(e,i,n){n.d(i,{Z:function(){return o},a:function(){return s}});var t=n(67294);let a={},r=t.createContext(a);function s(e){let i=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);