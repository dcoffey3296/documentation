"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[22904],{58014:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=t(74848),s=t(28453);const i={},r="How to do offline playback with DRMToday on iOS",c={id:"how-to-guides/drm/castlabs-drmtoday/offline-playback-with-offline-drm",title:"How to do offline playback with DRMToday on iOS",description:"This how-to guide describes how to implement playback of downloadable content-protected HLS streams using the THEOplayer iOS SDK. Currently, FairPlay is supported together with the Irdeto and DRMToday integrations.",source:"@site/theoplayer_versioned_docs/version-v4/how-to-guides/04-drm/02-castlabs-drmtoday/01-offline-playback-with-offline-drm.md",sourceDirName:"how-to-guides/04-drm/02-castlabs-drmtoday",slug:"/how-to-guides/drm/castlabs-drmtoday/offline-playback-with-offline-drm",permalink:"/documentation/pr-preview/pr-154/theoplayer/v4/how-to-guides/drm/castlabs-drmtoday/offline-playback-with-offline-drm",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/how-to-guides/04-drm/02-castlabs-drmtoday/01-offline-playback-with-offline-drm.md",tags:[],version:"v4",sidebarPosition:1,frontMatter:{},sidebar:"roku",previous:{title:"Introduction",permalink:"/documentation/pr-preview/pr-154/theoplayer/v4/how-to-guides/drm/castlabs-drmtoday/introduction"},next:{title:"Introduction",permalink:"/documentation/pr-preview/pr-154/theoplayer/v4/how-to-guides/drm/how-to-do-offline-drm/introduction"}},o={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Code example",id:"code-example",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"how-to-do-offline-playback-with-drmtoday-on-ios",children:"How to do offline playback with DRMToday on iOS"})}),"\n",(0,a.jsx)(n.p,{children:"This how-to guide describes how to implement playback of downloadable content-protected HLS streams using the THEOplayer iOS SDK. Currently, FairPlay is supported together with the Irdeto and DRMToday integrations."}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(n.p,{children:"In order to do offline DRM on iOS, your license key should be downloadable and cacheable. The SDK will not be able to decrypt your content if your key expired."}),"\n",(0,a.jsx)(n.p,{children:"This feature only works on iOS 10.0 and above."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Known limitations"})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["If your ",(0,a.jsx)(n.strong,{children:"manifest gets redirected"})," when you are caching and playing back a resource, you ",(0,a.jsx)(n.strong,{children:"need to save your redirected manifest URL"})," (what is being cached) and ",(0,a.jsx)(n.strong,{children:"provide that (redirected) URL to the player"})," when you would like to play back from the cache."]}),"\n",(0,a.jsxs)(n.li,{children:["Only ",(0,a.jsx)(n.strong,{children:"completely cached videos can be played offline"}),". (When the CachingTask status is DONE, then the video is playable without any internet connection)"]}),"\n",(0,a.jsxs)(n.li,{children:["HLS manifests can have a tag ",(0,a.jsxs)(n.strong,{children:["#EXT-X-PLAYLIST-TYPE",":VOD"]})," (",(0,a.jsx)(n.a,{href:"https://developer.apple.com/documentation/http_live_streaming/example_playlists_for_http_live_streaming/video_on_demand_playlist_construction",children:"https://developer.apple.com/documentation/http_live_streaming/example_playlists_for_http_live_streaming/video_on_demand_playlist_construction"}),")\nIf this tag is not present in the manifest of the cached quality, THEOplayer will make extra request for the manifest event if the video is completely cached. To avoid from these extra request, you need to provide ",(0,a.jsxs)(n.strong,{children:["EXT-X-PLAYLIST-TYPE",":VOD"]})," in your manifests."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"code-example",children:"Code example"}),"\n",(0,a.jsx)(n.p,{children:"Download a FairPlay HLS asset."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-swift",children:'//example source\npublic static var sourceToBeCached: SourceDescription {\n    let src = "https://source.m3u8"\n    let merchant = "merchant"\n    let userId = "userId"\n    let sessionId = "sessionId"\n    let streamType = "application/x-mpegurl"\n    let drmConfig = DRMTodayDRMConfiguration(\n                        licenseAcquisitionURL: "https://lic.staging.drmtoday.com/license-server-fairplay/",\n                        certificateURL: "https://lic.staging.drmtoday.com/license-server-fairplay/cert/",\n                        userId: userId,\n                        sessionId: sessionId,\n                        merchant: merchant\n                    )\n    return SourceDescription(source: TypedSource(src: src, type: streamType, drm: drmConfig))\n}\n\n//example cache call\nvar cachingTask: CachingTask?\n\nfunc cacheSource(SourceDescription source, Date expirationDate) {\n            cachingTask = THEOplayer.cache.createTask(source: source, parameters: CachingParameters(expirationDate: expirationDate))\n            if cachingTask != nil {\n                _ = cachingTask!.addEventListener(type: CachingTaskEventTypes.STATE_CHANGE) { event in\n                    print("Received state change on caching task \\(self.cachingTask!.source.sources[0].src) Status: \\(self.cachingTask!.status)")\n                }\n                _ = cachingTask!.addEventListener(type: CachingTaskEventTypes.PROGRESS) { event in\n                    print("Received progress on caching task \\(self.cachingTask!.source.sources[0].src) Cached: ")\n                    for timeRange in self.cachingTask!.cached {\n                        print(timeRange.start, timeRange.end)\n                    }\n                }\n                cachingTask.start()\n            }\n}\n\nfunc playSourceFromCache(SourceDescription source) {\n    theoplayer.source = source\n    theoplayer.play();\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Delete all cached assets."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-swift",children:'func cleanCache() {\n    for cachingTask in THEOplayer.cache.tasks {\n        print("Will remove caching task \\(cachingTask.source.sources[0].src)")\n        cachingTask.remove()\n    }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Renew a DRM license with specific DRM configuration."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-swift",children:'func renewLicense() {\n    let newDrmConfig = DRMTodayDRMConfiguration(\n                            licenseAcquisitionURL: "https://lic.staging.drmtoday.com/license-server-fairplay/",\n                            certificateURL: "https://lic.staging.drmtoday.com/license-server-fairplay/cert/",\n                            userId: userId,\n                            sessionId: sessionId,\n                            merchant: merchant\n                        )\n\n    cachingTask.license.renew(newDrmConfig) // or we can renew it with the old drmConfig too: cachingTask.license.renew()\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Handle redirected manifest."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-swift",children:'// cache source\n\nlet url = URL(string: "MASTER_MANIFEST_URL_THAT_GETS_REDIRECTED")\n\nlet task = URLSession.shared.dataTask(with: url!) { (data, response, error) in\n\n    Streams.SAVED_REDIRECTED_URL = (response?.url)!\n    cachingTaskSource.sources[0].src = Streams.SAVED_REDIRECTED_URL!\n    self.cachingTask = THEOplayer.cache.createTask(source: cachingTaskSource, parameters: CachingParameters(expirationDate: Date.distantFuture, bandwidth: cachingTaskBandwidth))\n    if self.cachingTask != nil {\n        _ = self.cachingTask!.addEventListener(type: CachingTaskEventTypes.STATE_CHANGE) { event in\n            if let cachingTask = self.cachingTask {\n                print("Received state change on caching task \\(cachingTask.source.sources[0].src) Status: \\(cachingTask.status)")\n            }\n        }\n        _ = self.cachingTask!.addEventListener(type: CachingTaskEventTypes.PROGRESS) { event in\n            print("Received progress on caching task \\(self.cachingTask!.source.sources[0].src) Cached: ")\n            for timeRange in self.cachingTask!.cached {\n                print(timeRange.start, timeRange.end)\n            }\n        }\n        print("Did create caching task \\(self.cachingTask!.source.sources[0].src)")\n    }\n\n}\n\ntask.resume()\n\n\n// playback of cached source\n\nvar source = cachingTaskSource\nsource.sources[0].src = Streams.SAVED_REDIRECTED_URL!\ntheoplayer.source = source\ntheoplayer.play()\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var a=t(96540);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);