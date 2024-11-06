"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[95171],{32813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>f,frontMatter:()=>m,metadata:()=>b,toc:()=>x});var r=n(74848),a=n(28453),s=n(96540),i=n(93705);let o,l;n(38193).A.canUseDOM&&(o=n(84),l=n(28848),n(29937),o.windowLoaded=!0);let c=!1;function d(e){return(0,s.useEffect)((()=>{c||(o.registerTemplate("syntax-highlighted",o.templates.prism(l,[new o.plugins.Indent(!0,4)])),c=!0)}),[]),(0,r.jsx)("code-input",{template:"syntax-highlighted",...e})}function u(e){let{defaultCustomStyle:t,...n}=e;const[a,o]=(0,s.useState)(null),[l,c]=(0,s.useState)(t);return(0,s.useEffect)((()=>{a?.contentWindow?.postMessage({type:"style",style:l})}),[a,l]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{ref:o,...n}),(0,r.jsx)(d,{lang:"CSS",onInput:e=>c(e.target.value),children:t})]})}var p=n(86025),h=n(31521);const m={sidebar_position:12,sidebar_custom_props:{icon:"\ud83c\udfa8"},slug:"/web/examples/styling"},g="Styling the default UI",b={id:"external/web-ui/docs/examples/styling",title:"Styling the default UI",description:"Christmas theme",source:"@site/open-video-ui/external/web-ui/docs/examples/styling.mdx",sourceDirName:"external/web-ui/docs/examples",slug:"/web/examples/styling",permalink:"/documentation/pr-preview/pr-153/open-video-ui/web/examples/styling",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/web-ui/blob/-/docs/examples/styling.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,sidebar_custom_props:{icon:"\ud83c\udfa8"},slug:"/web/examples/styling"},sidebar:"web",previous:{title:"Advertisements",permalink:"/documentation/pr-preview/pr-153/open-video-ui/web/examples/ads"},next:{title:"Custom UI",permalink:"/documentation/pr-preview/pr-153/open-video-ui/web/examples/custom-ui"}},y={},x=[{value:"Christmas theme",id:"christmas-theme",level:2}];function v(e){const t={h1:"h1",h2:"h2",header:"header",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"styling-the-default-ui",children:"Styling the default UI"})}),"\n","\n",(0,r.jsx)(t.h2,{id:"christmas-theme",children:"Christmas theme"}),"\n",(0,r.jsx)(u,{className:h.A.player,src:(0,p.Ay)("/open-video-ui/v1/examples/web/styling/demo.html"),defaultCustomStyle:"\n/* A festive theme for the holidays. Try editing me! */\ntheoplayer-default-ui {\n    font-family: 'Comic Sans MS', sans-serif;\n    width: 100%;\n    --theoplayer-icon-color: red;\n    --theoplayer-text-color: white;\n    --theoplayer-range-bar-color: red;\n    --theoplayer-range-thumb-background: linear-gradient(to bottom right, red 0% 25%, white 25% 40%, red 40% 60%, white 60% 75%, red 75% 100%);\n    --theoplayer-range-thumb-box-shadow: 1px 1px 5px red;\n    --theoplayer-range-thumb-height: 19px;\n    --theoplayer-range-thumb-width: 19px;\n    --theoplayer-range-track-height: 6px;\n    --theoplayer-time-range-track-pointer-background: rgb(255 0 0 / 25%);\n    --theoplayer-control-background-gradient-stops: transparent 0%, rgb(0 100 0) 100%;\n    --theoplayer-menu-backdrop-background: rgb(0 100 0 / 75%);\n    --theoplayer-mobile-control-backdrop-background: rgb(0 100 0 / 75%);\n}\n".trim()})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(v,{...e})}):v(e)}},93705:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(96540);const a={bigBuckBunny:{sources:{src:"https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8"},metadata:{title:"Big Buck Bunny"},textTracks:[{default:!0,src:"https://cdn.theoplayer.com/video/big_buck_bunny/thumbnails.vtt",label:"thumbnails",kind:"metadata"}]},elephantsDream:{sources:{src:"https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8"},metadata:{title:"Elephant's Dream"},textTracks:[{default:!0,src:"https://cdn.theoplayer.com/video/elephants-dream/thumbnails.vtt",label:"thumbnails",kind:"metadata"}]},starWarsTrailer:{sources:{src:"https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8"},metadata:{title:"Star Wars Episode VII Trailer"},poster:"https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/poster.jpg"}};var s=n(74848);function i(e){let{hideSource:t,hideDeviceType:n,...i}=e;const o=(0,r.useRef)(null),[l,c]=(0,r.useState)("bigBuckBunny"),[d,u]=(0,r.useState)("");(0,r.useEffect)((()=>{o.current?.contentWindow?.postMessage({type:"source",source:a[l]})}),[o.current,l]),(0,r.useEffect)((()=>{o.current?.contentWindow?.postMessage({type:"deviceType",deviceType:d})}),[o.current,d]);const p=!t||!n;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("iframe",{ref:o,...i}),p&&(0,s.jsxs)("p",{children:[!t&&(0,s.jsx)("div",{children:(0,s.jsxs)("label",{style:{userSelect:"none"},children:["Source:"," ",(0,s.jsx)("select",{value:l,onChange:e=>c(e.target.value),children:Object.entries(a).map((e=>{let[t,n]=e;return(0,s.jsx)("option",{value:t,children:n.metadata.title},t)}))})]})}),!n&&(0,s.jsx)("div",{children:(0,s.jsxs)("label",{style:{userSelect:"none"},children:["Override device type:"," ",(0,s.jsxs)("select",{value:d,onChange:e=>u(e.target.value),children:[(0,s.jsx)("option",{value:""}),(0,s.jsx)("option",{value:"desktop",children:"Desktop"}),(0,s.jsx)("option",{value:"mobile",children:"Mobile"}),(0,s.jsx)("option",{value:"tv",children:"TV"})]})]})})]})]})}},31521:(e,t,n)=>{n.d(t,{A:()=>r});const r={player:"player_Seag",portraitPlayer:"portraitPlayer_vn7H"}}}]);