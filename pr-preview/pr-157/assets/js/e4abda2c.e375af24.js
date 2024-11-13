"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["64679"],{68024:function(e,a,t){t.r(a),t.d(a,{metadata:()=>i,contentTitle:()=>o,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>s});var i=JSON.parse('{"id":"knowledge-base/playback/frame-accurate-seeking","title":"Frame Accurate Seeking","description":"This guide will explain how you can achieve frame-accurate seeking with THEOplayer. It will explain how to calculate the current frame of your player, how to seek to a specific frame and known limitations with this approach.","source":"@site/theoplayer_versioned_docs/version-v6/knowledge-base/03-playback/03-frame-accurate-seeking.md","sourceDirName":"knowledge-base/03-playback","slug":"/knowledge-base/playback/frame-accurate-seeking","permalink":"/documentation/pr-preview/pr-157/theoplayer/v6/knowledge-base/playback/frame-accurate-seeking","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/knowledge-base/03-playback/03-frame-accurate-seeking.md","tags":[],"version":"v6","sidebarPosition":3,"frontMatter":{},"sidebar":"roku","previous":{"title":"What are the benefits of preview thumbnails?","permalink":"/documentation/pr-preview/pr-157/theoplayer/v6/knowledge-base/playback/what-are-the-benefits-of-preview-thumbnails"},"next":{"title":"Program Date Time","permalink":"/documentation/pr-preview/pr-157/theoplayer/v6/knowledge-base/playback/program-date-time"}}'),n=t("85893"),r=t("50065");let s={},o="Frame Accurate Seeking",l={},c=[{value:"Calculate current frame",id:"calculate-current-frame",level:2},{value:"Seek to specific frame",id:"seek-to-specific-frame",level:2},{value:"Example",id:"example",level:2},{value:"Known limitations",id:"known-limitations",level:2}];function h(e){let a={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"frame-accurate-seeking",children:"Frame Accurate Seeking"})}),"\n",(0,n.jsx)(a.p,{children:"This guide will explain how you can achieve frame-accurate seeking with THEOplayer. It will explain how to calculate the current frame of your player, how to seek to a specific frame and known limitations with this approach."}),"\n",(0,n.jsx)(a.h2,{id:"calculate-current-frame",children:"Calculate current frame"}),"\n",(0,n.jsx)(a.p,{children:"The current frame of the player can be calculated given the current time of the player, the time at which the first frame is located and the framerate. A possible implementation could be:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:"function getCurrentFrame(player) {\n  var activeQuality = player.videoTracks[0].activeQuality;\n  return Math.round(\n    (player.currentTime - activeQuality.firstFrame) * activeQuality.frameRate -\n      0.5\n  );\n}\n"})}),"\n",(0,n.jsxs)(a.p,{children:["NOTE: This implementation depends on the first frame and frameRate of the active video quality. This information is not available until start of playback. When an active quality is chosen, an ",(0,n.jsx)(a.code,{children:"activequalitychanged"}),"\xa0event will be dispatched. The active quality is then accessible but might not have initialized values for the framerate and firstframe properties. When these properties are updated, an\xa0",(0,n.jsx)(a.code,{children:"update"}),"\xa0event will be dispatched on the active quality. Using these two events, you can determine from when frame accurate seeking is possible."]}),"\n",(0,n.jsx)(a.h2,{id:"seek-to-specific-frame",children:"Seek to specific frame"}),"\n",(0,n.jsx)(a.p,{children:"Given a certain frame number, it is possible to seek to this frame specifically. To obtain this behavior, the time that corresponds with the frame should be calculated. A possible implementation could be:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:"function seekToFrame(player, targetFrame) {\n  var activeQuality = player.videoTracks[0].activeQuality;\n  var time =\n    (targetFrame + 0.5) / activeQuality.frameRate + activeQuality.firstFrame;\n  player.currentTime = time;\n}\n"})}),"\n",(0,n.jsx)(a.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(a.p,{children:"The previous sections can be combined to obtain a wide variety of use cases. Suppose you desire to seek to 100 frames after the current one, this can easily be obtained with the following snippet:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:"seekToFrame(player, getCurrentFrame(player) + 100);\n"})}),"\n",(0,n.jsx)(a.h2,{id:"known-limitations",children:"Known limitations"}),"\n",(0,n.jsx)(a.p,{children:"The approach mentioned above is easy and straightforward, however it does have some limitations."}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"The first frame will be 0 if you start playback in the middle of a stream. This can change later if you seek back to the start of the stream. Leading to small inaccuracies."}),"\n",(0,n.jsx)(a.li,{children:"If an HLS stream contains discontinuities, the frame rate might not be 100% accurate."}),"\n",(0,n.jsx)(a.li,{children:"Some MPEG-DASH streams manifests don't contain the frame rate. In this case frame accurate seeking is not possible."}),"\n",(0,n.jsx)(a.li,{children:"For MPEG-DASH streams, the first frame is always reported as 0. If the first frame does not start at 0, then this approach won't work."}),"\n"]})]})}function u(e={}){let{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},50065:function(e,a,t){t.d(a,{Z:function(){return o},a:function(){return s}});var i=t(67294);let n={},r=i.createContext(n);function s(e){let a=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(r.Provider,{value:a},e.children)}}}]);