"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[68614],{58698:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=i(74848),n=i(28453);const o={},r="Introduction",s={id:"how-to-guides/analytics/introduction",title:"Introduction",description:"_Fast forward to Integrations with commercial analytics services if",source:"@site/theoplayer_versioned_docs/version-v6/how-to-guides/02-analytics/00-introduction.md",sourceDirName:"how-to-guides/02-analytics",slug:"/how-to-guides/analytics/introduction",permalink:"/documentation/pr-preview/pr-148/theoplayer/v6/how-to-guides/analytics/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/02-analytics/00-introduction.md",tags:[],version:"v6",sidebarPosition:0,frontMatter:{},sidebar:"roku",previous:{title:"MediaTailor",permalink:"/documentation/pr-preview/pr-148/theoplayer/v6/how-to-guides/ads/mediatailor"},next:{title:"Moat",permalink:"/documentation/pr-preview/pr-148/theoplayer/v6/how-to-guides/analytics/moat"}},l={},c=[{value:"Analytics and video players",id:"analytics-and-video-players",level:2},{value:"Integrations",id:"integrations",level:2},{value:"Integrations with commercial analytics services",id:"integrations-with-commercial-analytics-services",level:3},{value:"Creating a custom analytics integration",id:"creating-a-custom-analytics-integration",level:3},{value:"THEOplayer Analytics Dashboard",id:"theoplayer-analytics-dashboard",level:2}];function d(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.em,{children:["Fast forward to ",(0,a.jsx)(t.a,{href:"#integrations-with-commercial-analytics-services",children:"Integrations with commercial analytics services"})," if\nyou want to know more about our integrations with services like Conviva, Mux and Youbora."]})}),"\n",(0,a.jsx)(t.p,{children:"Video analytics offer all sorts of insights, ranging from the behavior of your viewers,\nto the performance of your video players."}),"\n",(0,a.jsx)(t.p,{children:"There are different approaches to collect these insights."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"You can use a commercial video analytics vendor (e.g. Conviva, Mux, Wicket Labs, Youbora, ...)."}),"\n",(0,a.jsx)(t.li,{children:"You can implement a custom analytics service that you created."}),"\n",(0,a.jsx)(t.li,{children:"You can leverage back-end and CDN logs."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Insights are deducted from metrics. Metrics are calculated from raw video data.\nFor example,"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:'INSIGHT: "the videos on my website start faster than the industry average (e.g. 4.71s)"'}),"\n",(0,a.jsx)(t.li,{children:'METRIC: "because the average video startup time was 1.7s on my website last month"'}),"\n",(0,a.jsx)(t.li,{children:'DATA: "that I calculated by measuring the video startup time of 1 million unique video sessions on my website"'}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The online video streaming industry often talks about Quality of Service (QoS) and Quality of Experience (QoE).\nWhen talking about metrics, you'll often hear terms like Startup Time, Buffer Rate,\nError Rate, Seek Time, Exit Before Video Start.\nWhen talking about raw data, you might hear terms like heartbeat (or ping) events, buffer events, play events, seek events and error events."}),"\n",(0,a.jsx)(t.h2,{id:"analytics-and-video-players",children:"Analytics and video players"}),"\n",(0,a.jsx)(t.p,{children:"As an application developer, you want your video player to expose an API that allows you to track video events and query\nvideo states. With this API, a developer can implement an integration with a commercial analytics service,\nor implement a connection with their custom analytics service."}),"\n",(0,a.jsx)(t.p,{children:"With a video player, you want to be able to access the raw video data.\nA video player typically doesn't calculate metrics or insights, because it doesn't have access to historical data."}),"\n",(0,a.jsx)(t.p,{children:"As an app developer,"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"you want to track raw video data with the assistance of your video player API,"}),"\n",(0,a.jsx)(t.li,{children:"do some (optional) processing at runtime,"}),"\n",(0,a.jsx)(t.li,{children:"and forward the (processed) data to a remote analytics service."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Then, someone on the back-end, 4. would manage & manipulate this data on this remote analytics service, 5. to convert this raw data into metrics, and the metrics into insights."}),"\n",(0,a.jsx)(t.h2,{id:"integrations",children:"Integrations"}),"\n",(0,a.jsxs)(t.p,{children:["THEOplayer ",(0,a.jsx)(t.em,{children:"should"})," be compatible with any industry-standard commercial or custom analytics service.\nThe THEOplayer API gives application developers access to a vast number of video events."]}),"\n",(0,a.jsx)(t.p,{children:"As an app developer,\nyou have the option to leverage one of our existing integrations with commercial analytics services,\nor the option to create a custom integration."}),"\n",(0,a.jsx)(t.h3,{id:"integrations-with-commercial-analytics-services",children:"Integrations with commercial analytics services"}),"\n",(0,a.jsx)(t.p,{children:"The following commercial video analytics integrations are documented.\nThese articles explain how to leverage an out-of-the-box integration,\nor how to implement a connector, or how to achieve a custom implementation with a specific vendor."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-148/theoplayer/v6/how-to-guides/analytics/moat",children:"Moat"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-148/theoplayer/v6/how-to-guides/analytics/mux",children:"Mux"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-148/theoplayer/v6/how-to-guides/analytics/youbora",children:"Youbora"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-148/theoplayer/v6/how-to-guides/analytics/agama",children:"Agama"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-148/theoplayer/v6/how-to-guides/analytics/conviva/introduction",children:"Conviva"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-148/theoplayer/v6/how-to-guides/analytics/adobe-analytics",children:"Adobe Analytics"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-148/theoplayer/v6/how-to-guides/analytics/mediamelon-smartsight",children:"MediaMelon SmartSight"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-148/theoplayer/v6/how-to-guides/analytics/wicket-labs",children:"Wicket Labs"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-148/theoplayer/v6/how-to-guides/analytics/custom-analytics-integration#integrating-google-analytics",children:"Google Analytics"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-148/theoplayer/v6/how-to-guides/analytics/tealium",children:"Tealium"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-148/theoplayer/v6/how-to-guides/analytics/segment",children:"Segment"})}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["A connector is an open-source integration that is listed on our Github at ",(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer",children:"https://github.com/THEOplayer"}),".\nThere might be connectors on our Github that are missing from the list above."]}),"\n",(0,a.jsx)(t.p,{children:"Alternatively, if you are not able to locate documentation on a specific vendor, then reach out to this vendor,\nbecause they might be the maintainer of an integration related to THEOplayer."}),"\n",(0,a.jsx)(t.h3,{id:"creating-a-custom-analytics-integration",children:"Creating a custom analytics integration"}),"\n",(0,a.jsxs)(t.p,{children:["Head over to ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-148/theoplayer/v6/how-to-guides/analytics/custom-analytics-integration",children:"Custom Analytics Integration"})," if you want to learn more about\ncreating your own analytics integration using the THEOplayer API."]}),"\n",(0,a.jsx)(t.h2,{id:"theoplayer-analytics-dashboard",children:"THEOplayer Analytics Dashboard"}),"\n",(0,a.jsxs)(t.p,{children:["If you've used the THEOplayer Developer Portal - for example to create a THEOplayer SDK -,\nthen you might have noticed that there is an analytics dashboard at ",(0,a.jsx)(t.a,{href:"https://portal.theoplayer.com",children:"https://portal.theoplayer.com"}),"."]}),"\n",(0,a.jsx)(t.p,{children:'This analytics dashboard is located in the "Usage" tab of your Portal account. The dashboard should resemble the screenshot below.'}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"THEOplayer Portal Analytics Dashboard",src:i(72799).A+"",title:"THEOplayer Portal Analytics Dashboard",width:"1768",height:"1412"})}),"\n",(0,a.jsxs)(t.p,{children:["This dashboard allows you to track your ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-148/theoplayer/v6/faq/what-is-an-impression",children:"impressions"})," across different periods of times across different SDKs."]}),"\n",(0,a.jsxs)(t.p,{children:["We don't ",(0,a.jsx)(t.em,{children:"really"}),' consider this dashboard as a "video analytics service". The primary purpose of this dashboard is for you to monitor your impressions,\nas the impressions might be related to your THEOplayer pricing model.\nThat being said, it is a useful dashboard, as it visualizes the consumption of your videos throughout time.']})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},72799:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/analytics-introduction-portal-dashboard-777c17a7b2bbf13b27a40bfdc3a4d1f9.png"},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>s});var a=i(96540);const n={},o=a.createContext(n);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);