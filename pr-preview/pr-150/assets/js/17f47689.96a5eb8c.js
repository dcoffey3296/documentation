"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[20259],{11313:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>d});var o=r(74848),i=r(28453),s=r(93705),n=r(86025),a=r(31521);const c={sidebar_position:21,sidebar_custom_props:{icon:"\ud83d\udcf1"},slug:"/web/examples/portrait"},l="Custom UI: Portrait theme",p={id:"external/web-ui/docs/examples/portrait",title:"Custom UI: Portrait theme",description:"Video by cottonbro studio.",source:"@site/open-video-ui/external/web-ui/docs/examples/portrait.mdx",sourceDirName:"external/web-ui/docs/examples",slug:"/web/examples/portrait",permalink:"/documentation/pr-preview/pr-150/open-video-ui/web/examples/portrait",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/web-ui/blob/-/docs/examples/portrait.mdx",tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21,sidebar_custom_props:{icon:"\ud83d\udcf1"},slug:"/web/examples/portrait"},sidebar:"web",previous:{title:"Custom UI",permalink:"/documentation/pr-preview/pr-150/open-video-ui/web/examples/custom-ui"},next:{title:"Custom UI: Nitflex theme",permalink:"/documentation/pr-preview/pr-150/open-video-ui/web/examples/nitflex"}},u={},d=[];function m(e){const t={a:"a",h1:"h1",header:"header",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"custom-ui-portrait-theme",children:"Custom UI: Portrait theme"})}),"\n","\n",(0,o.jsx)(s.A,{className:a.A.portraitPlayer,hideDeviceType:!0,src:(0,n.Ay)("/open-video-ui/v1/examples/web/portrait/demo.html")}),"\n",(0,o.jsxs)(t.p,{children:["Video by ",(0,o.jsx)(t.a,{href:"https://www.pexels.com/video/the-art-of-skateboarding-2791956/",children:"cottonbro studio"}),"."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/THEOplayer/web-ui/blob/main/docs/static/open-video-ui/v1/examples/web/portrait/demo.html",children:"\ud83d\udcdc View full source on GitHub"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},93705:(e,t,r)=>{r.d(t,{A:()=>n});var o=r(96540);const i={bigBuckBunny:{sources:{src:"https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8"},metadata:{title:"Big Buck Bunny"},textTracks:[{default:!0,src:"https://cdn.theoplayer.com/video/big_buck_bunny/thumbnails.vtt",label:"thumbnails",kind:"metadata"}]},elephantsDream:{sources:{src:"https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8"},metadata:{title:"Elephant's Dream"},textTracks:[{default:!0,src:"https://cdn.theoplayer.com/video/elephants-dream/thumbnails.vtt",label:"thumbnails",kind:"metadata"}]},starWarsTrailer:{sources:{src:"https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8"},metadata:{title:"Star Wars Episode VII Trailer"},poster:"https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/poster.jpg"}};var s=r(74848);function n(e){let{hideSource:t,hideDeviceType:r,...n}=e;const a=(0,o.useRef)(null),[c,l]=(0,o.useState)("bigBuckBunny"),[p,u]=(0,o.useState)("");(0,o.useEffect)((()=>{a.current?.contentWindow?.postMessage({type:"source",source:i[c]})}),[a.current,c]),(0,o.useEffect)((()=>{a.current?.contentWindow?.postMessage({type:"deviceType",deviceType:p})}),[a.current,p]);const d=!t||!r;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("iframe",{ref:a,...n}),d&&(0,s.jsxs)("p",{children:[!t&&(0,s.jsx)("div",{children:(0,s.jsxs)("label",{style:{userSelect:"none"},children:["Source:"," ",(0,s.jsx)("select",{value:c,onChange:e=>l(e.target.value),children:Object.entries(i).map((e=>{let[t,r]=e;return(0,s.jsx)("option",{value:t,children:r.metadata.title},t)}))})]})}),!r&&(0,s.jsx)("div",{children:(0,s.jsxs)("label",{style:{userSelect:"none"},children:["Override device type:"," ",(0,s.jsxs)("select",{value:p,onChange:e=>u(e.target.value),children:[(0,s.jsx)("option",{value:""}),(0,s.jsx)("option",{value:"desktop",children:"Desktop"}),(0,s.jsx)("option",{value:"mobile",children:"Mobile"}),(0,s.jsx)("option",{value:"tv",children:"TV"})]})]})})]})]})}},31521:(e,t,r)=>{r.d(t,{A:()=>o});const o={player:"player_Seag",portraitPlayer:"portraitPlayer_vn7H"}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>a});var o=r(96540);const i={},s=o.createContext(i);function n(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);