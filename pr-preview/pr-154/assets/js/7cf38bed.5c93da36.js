"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[23397],{15550:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(74848),s=n(28453),r=n(93705),i=n(86025),o=n(31521);const l={sidebar_position:10,sidebar_custom_props:{icon:"\u25b6\ufe0f"},slug:"/web/examples/default-ui"},c="Default UI",u={id:"external/web-ui/docs/examples/default-ui",title:"Default UI",description:"Code",source:"@site/open-video-ui/external/web-ui/docs/examples/default-ui.mdx",sourceDirName:"external/web-ui/docs/examples",slug:"/web/examples/default-ui",permalink:"/documentation/pr-preview/pr-154/open-video-ui/web/examples/default-ui",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/web-ui/blob/-/docs/examples/default-ui.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_custom_props:{icon:"\u25b6\ufe0f"},slug:"/web/examples/default-ui"},sidebar:"web",previous:{title:"Examples",permalink:"/documentation/pr-preview/pr-154/open-video-ui/web/examples"},next:{title:"Advertisements",permalink:"/documentation/pr-preview/pr-154/open-video-ui/web/examples/ads"}},d={},p=[];function m(e){const t={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"default-ui",children:"Default UI"})}),"\n","\n",(0,a.jsx)(r.A,{className:o.A.player,src:(0,i.Ay)("/open-video-ui/v1/examples/web/default-ui/demo.html")}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"Code"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",metastring:"showLineNumbers",children:'<theoplayer-default-ui\n    configuration=\'{"libraryLocation":"/path/to/theoplayer/","license":"your_theoplayer_license"}\'\n    source=\'{"sources":{"src":"https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8"},"textTracks":[{"default":true,"src":"https://cdn.theoplayer.com/video/big_buck_bunny/thumbnails.vtt","label":"thumbnails","kind":"metadata"}]}\'\n    fluid\n></theoplayer-default-ui>\n'})}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/web-ui/blob/main/docs/static/open-video-ui/v1/examples/web/default-ui/demo.html",children:"\ud83d\udcdc View full source on GitHub"})})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},93705:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(96540);const s={bigBuckBunny:{sources:{src:"https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8"},metadata:{title:"Big Buck Bunny"},textTracks:[{default:!0,src:"https://cdn.theoplayer.com/video/big_buck_bunny/thumbnails.vtt",label:"thumbnails",kind:"metadata"}]},elephantsDream:{sources:{src:"https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8"},metadata:{title:"Elephant's Dream"},textTracks:[{default:!0,src:"https://cdn.theoplayer.com/video/elephants-dream/thumbnails.vtt",label:"thumbnails",kind:"metadata"}]},starWarsTrailer:{sources:{src:"https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8"},metadata:{title:"Star Wars Episode VII Trailer"},poster:"https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/poster.jpg"}};var r=n(74848);function i(e){let{hideSource:t,hideDeviceType:n,...i}=e;const o=(0,a.useRef)(null),[l,c]=(0,a.useState)("bigBuckBunny"),[u,d]=(0,a.useState)("");(0,a.useEffect)((()=>{o.current?.contentWindow?.postMessage({type:"source",source:s[l]})}),[o.current,l]),(0,a.useEffect)((()=>{o.current?.contentWindow?.postMessage({type:"deviceType",deviceType:u})}),[o.current,u]);const p=!t||!n;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("iframe",{ref:o,...i}),p&&(0,r.jsxs)("p",{children:[!t&&(0,r.jsx)("div",{children:(0,r.jsxs)("label",{style:{userSelect:"none"},children:["Source:"," ",(0,r.jsx)("select",{value:l,onChange:e=>c(e.target.value),children:Object.entries(s).map((e=>{let[t,n]=e;return(0,r.jsx)("option",{value:t,children:n.metadata.title},t)}))})]})}),!n&&(0,r.jsx)("div",{children:(0,r.jsxs)("label",{style:{userSelect:"none"},children:["Override device type:"," ",(0,r.jsxs)("select",{value:u,onChange:e=>d(e.target.value),children:[(0,r.jsx)("option",{value:""}),(0,r.jsx)("option",{value:"desktop",children:"Desktop"}),(0,r.jsx)("option",{value:"mobile",children:"Mobile"}),(0,r.jsx)("option",{value:"tv",children:"TV"})]})]})})]})]})}},31521:(e,t,n)=>{n.d(t,{A:()=>a});const a={player:"player_Seag",portraitPlayer:"portraitPlayer_vn7H"}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var a=n(96540);const s={},r=a.createContext(s);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);