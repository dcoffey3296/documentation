"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[74423],{85403:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var n=s(74848),a=s(28453),r=s(93705),o=s(86025),i=s(31521);const c={sidebar_position:11,sidebar_custom_props:{icon:"\ud83d\udcb0"},slug:"/web/examples/ads"},l="Advertisements",d={id:"external/web-ui/docs/examples/ads",title:"Advertisements",description:"The default UI has full support for advertisements.",source:"@site/open-video-ui/external/web-ui/docs/examples/ads.mdx",sourceDirName:"external/web-ui/docs/examples",slug:"/web/examples/ads",permalink:"/documentation/pr-preview/pr-154/open-video-ui/web/examples/ads",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/web-ui/blob/-/docs/examples/ads.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,sidebar_custom_props:{icon:"\ud83d\udcb0"},slug:"/web/examples/ads"},sidebar:"web",previous:{title:"Default UI",permalink:"/documentation/pr-preview/pr-154/open-video-ui/web/examples/default-ui"},next:{title:"Styling the default UI",permalink:"/documentation/pr-preview/pr-154/open-video-ui/web/examples/styling"}},u={},p=[];function m(e){const t={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"advertisements",children:"Advertisements"})}),"\n",(0,n.jsx)(t.p,{children:"The default UI has full support for advertisements."}),"\n",(0,n.jsx)(t.p,{children:"During playback, it shows yellow ad markers on the seek bar to indicate the times when the content will be interrupted by an ad."}),"\n",(0,n.jsx)(t.p,{children:"While playing an ad, the UI shows ad-specific controls such as a skip button and a countdown. These controls are also mobile-aware, for example a\ndedicated clickthrough button replaces the regular clickthrough behavior on desktop."}),"\n","\n",(0,n.jsx)(r.A,{className:i.A.player,src:(0,o.Ay)("/open-video-ui/v1/examples/web/ads/demo.html")}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Code"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:"showLineNumbers",children:"var ui = document.querySelector('theoplayer-default-ui');\nui.source = {\n    sources: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8',\n    ads: [\n        {\n            sources: {\n                src: 'https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/vmap_ad_samples&sz=640x480&cust_params=sample_ar%3Dpremidpostpod&ciu_szs=300x250&gdfp_req=1&ad_rule=1&output=vmap&unviewed_position_start=1&env=vp&impl=s&cmsid=496&vid=short_onecue&correlator=',\n                type: 'vmap'\n            }\n        }\n    ]\n};\n"})}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/THEOplayer/web-ui/blob/main/docs/static/open-video-ui/v1/examples/web/ads/demo.html",children:"\ud83d\udcdc View full source on GitHub"})})]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},93705:(e,t,s)=>{s.d(t,{A:()=>o});var n=s(96540);const a={bigBuckBunny:{sources:{src:"https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8"},metadata:{title:"Big Buck Bunny"},textTracks:[{default:!0,src:"https://cdn.theoplayer.com/video/big_buck_bunny/thumbnails.vtt",label:"thumbnails",kind:"metadata"}]},elephantsDream:{sources:{src:"https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8"},metadata:{title:"Elephant's Dream"},textTracks:[{default:!0,src:"https://cdn.theoplayer.com/video/elephants-dream/thumbnails.vtt",label:"thumbnails",kind:"metadata"}]},starWarsTrailer:{sources:{src:"https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8"},metadata:{title:"Star Wars Episode VII Trailer"},poster:"https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/poster.jpg"}};var r=s(74848);function o(e){let{hideSource:t,hideDeviceType:s,...o}=e;const i=(0,n.useRef)(null),[c,l]=(0,n.useState)("bigBuckBunny"),[d,u]=(0,n.useState)("");(0,n.useEffect)((()=>{i.current?.contentWindow?.postMessage({type:"source",source:a[c]})}),[i.current,c]),(0,n.useEffect)((()=>{i.current?.contentWindow?.postMessage({type:"deviceType",deviceType:d})}),[i.current,d]);const p=!t||!s;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("iframe",{ref:i,...o}),p&&(0,r.jsxs)("p",{children:[!t&&(0,r.jsx)("div",{children:(0,r.jsxs)("label",{style:{userSelect:"none"},children:["Source:"," ",(0,r.jsx)("select",{value:c,onChange:e=>l(e.target.value),children:Object.entries(a).map((e=>{let[t,s]=e;return(0,r.jsx)("option",{value:t,children:s.metadata.title},t)}))})]})}),!s&&(0,r.jsx)("div",{children:(0,r.jsxs)("label",{style:{userSelect:"none"},children:["Override device type:"," ",(0,r.jsxs)("select",{value:d,onChange:e=>u(e.target.value),children:[(0,r.jsx)("option",{value:""}),(0,r.jsx)("option",{value:"desktop",children:"Desktop"}),(0,r.jsx)("option",{value:"mobile",children:"Mobile"}),(0,r.jsx)("option",{value:"tv",children:"TV"})]})]})})]})]})}},31521:(e,t,s)=>{s.d(t,{A:()=>n});const n={player:"player_Seag",portraitPlayer:"portraitPlayer_vn7H"}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>i});var n=s(96540);const a={},r=n.createContext(a);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);