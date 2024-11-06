"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[48509],{13186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var i=n(74848),s=n(28453),o=n(93705),r=n(86025),a=n(31521);const l={sidebar_position:22,sidebar_custom_props:{icon:"\ud83d\udcfa"},slug:"/web/examples/nitflex"},c="Custom UI: Nitflex theme",u={id:"external/web-ui/docs/examples/nitflex",title:"Custom UI: Nitflex theme",description:"\ud83d\udcdc View full source on GitHub",source:"@site/open-video-ui/external/web-ui/docs/examples/nitflex.mdx",sourceDirName:"external/web-ui/docs/examples",slug:"/web/examples/nitflex",permalink:"/documentation/pr-preview/pr-153/open-video-ui/web/examples/nitflex",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/web-ui/blob/-/docs/examples/nitflex.mdx",tags:[],version:"current",sidebarPosition:22,frontMatter:{sidebar_position:22,sidebar_custom_props:{icon:"\ud83d\udcfa"},slug:"/web/examples/nitflex"},sidebar:"web",previous:{title:"Custom UI: Portrait theme",permalink:"/documentation/pr-preview/pr-153/open-video-ui/web/examples/portrait"},next:{title:"Changelog",permalink:"/documentation/pr-preview/pr-153/open-video-ui/web/changelog"}},p={},d=[];function m(e){const t={a:"a",h1:"h1",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"custom-ui-nitflex-theme",children:"Custom UI: Nitflex theme"})}),"\n","\n",(0,i.jsx)(o.A,{className:a.A.player,hideDeviceType:!0,src:(0,r.Ay)("/open-video-ui/v1/examples/web/nitflex/demo.html")}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/THEOplayer/web-ui/blob/main/docs/static/open-video-ui/v1/examples/web/nitflex/demo.html",children:"\ud83d\udcdc View full source on GitHub"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},93705:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(96540);const s={bigBuckBunny:{sources:{src:"https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8"},metadata:{title:"Big Buck Bunny"},textTracks:[{default:!0,src:"https://cdn.theoplayer.com/video/big_buck_bunny/thumbnails.vtt",label:"thumbnails",kind:"metadata"}]},elephantsDream:{sources:{src:"https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8"},metadata:{title:"Elephant's Dream"},textTracks:[{default:!0,src:"https://cdn.theoplayer.com/video/elephants-dream/thumbnails.vtt",label:"thumbnails",kind:"metadata"}]},starWarsTrailer:{sources:{src:"https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8"},metadata:{title:"Star Wars Episode VII Trailer"},poster:"https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/poster.jpg"}};var o=n(74848);function r(e){let{hideSource:t,hideDeviceType:n,...r}=e;const a=(0,i.useRef)(null),[l,c]=(0,i.useState)("bigBuckBunny"),[u,p]=(0,i.useState)("");(0,i.useEffect)((()=>{a.current?.contentWindow?.postMessage({type:"source",source:s[l]})}),[a.current,l]),(0,i.useEffect)((()=>{a.current?.contentWindow?.postMessage({type:"deviceType",deviceType:u})}),[a.current,u]);const d=!t||!n;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("iframe",{ref:a,...r}),d&&(0,o.jsxs)("p",{children:[!t&&(0,o.jsx)("div",{children:(0,o.jsxs)("label",{style:{userSelect:"none"},children:["Source:"," ",(0,o.jsx)("select",{value:l,onChange:e=>c(e.target.value),children:Object.entries(s).map((e=>{let[t,n]=e;return(0,o.jsx)("option",{value:t,children:n.metadata.title},t)}))})]})}),!n&&(0,o.jsx)("div",{children:(0,o.jsxs)("label",{style:{userSelect:"none"},children:["Override device type:"," ",(0,o.jsxs)("select",{value:u,onChange:e=>p(e.target.value),children:[(0,o.jsx)("option",{value:""}),(0,o.jsx)("option",{value:"desktop",children:"Desktop"}),(0,o.jsx)("option",{value:"mobile",children:"Mobile"}),(0,o.jsx)("option",{value:"tv",children:"TV"})]})]})})]})]})}},31521:(e,t,n)=>{n.d(t,{A:()=>i});const i={player:"player_Seag",portraitPlayer:"portraitPlayer_vn7H"}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);