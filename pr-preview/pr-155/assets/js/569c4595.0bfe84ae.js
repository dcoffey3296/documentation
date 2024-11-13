"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["69649"],{30213:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>u,default:()=>h,assets:()=>p,toc:()=>d,frontMatter:()=>c});var i=JSON.parse('{"id":"external/web-ui/docs/examples/nitflex","title":"Custom UI: Nitflex theme","description":"\uD83D\uDCDC View full source on GitHub","source":"@site/open-video-ui/external/web-ui/docs/examples/nitflex.mdx","sourceDirName":"external/web-ui/docs/examples","slug":"/web/examples/nitflex","permalink":"/documentation/pr-preview/pr-155/open-video-ui/web/examples/nitflex","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/web-ui/blob/-/docs/examples/nitflex.mdx","tags":[],"version":"current","sidebarPosition":22,"frontMatter":{"sidebar_position":22,"sidebar_custom_props":{"icon":"\uD83D\uDCFA"},"slug":"/web/examples/nitflex"},"sidebar":"web","previous":{"title":"Custom UI: Portrait theme","permalink":"/documentation/pr-preview/pr-155/open-video-ui/web/examples/portrait"},"next":{"title":"Changelog","permalink":"/documentation/pr-preview/pr-155/open-video-ui/web/changelog"}}'),r=n("85893"),s=n("50065"),o=n("40887"),a=n("4757"),l=n("92987");let c={sidebar_position:22,sidebar_custom_props:{icon:"\uD83D\uDCFA"},slug:"/web/examples/nitflex"},u="Custom UI: Nitflex theme",p={},d=[];function m(e){let t={a:"a",h1:"h1",header:"header",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"custom-ui-nitflex-theme",children:"Custom UI: Nitflex theme"})}),"\n","\n",(0,r.jsx)(o.Z,{className:l.Z.player,hideDeviceType:!0,src:(0,a.default)("/open-video-ui/v1/examples/web/nitflex/demo.html")}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/THEOplayer/web-ui/blob/main/docs/static/open-video-ui/v1/examples/web/nitflex/demo.html",children:"\uD83D\uDCDC View full source on GitHub"})})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},92987:function(e,t,n){n.d(t,{Z:function(){return i}});let i={player:"player_Seag",portraitPlayer:"portraitPlayer_vn7H"}},40887:function(e,t,n){n.d(t,{Z:()=>o});var i=n("85893"),r=n("67294");let s={bigBuckBunny:{sources:{src:"https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8"},metadata:{title:"Big Buck Bunny"},textTracks:[{default:!0,src:"https://cdn.theoplayer.com/video/big_buck_bunny/thumbnails.vtt",label:"thumbnails",kind:"metadata"}]},elephantsDream:{sources:{src:"https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8"},metadata:{title:"Elephant's Dream"},textTracks:[{default:!0,src:"https://cdn.theoplayer.com/video/elephants-dream/thumbnails.vtt",label:"thumbnails",kind:"metadata"}]},starWarsTrailer:{sources:{src:"https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8"},metadata:{title:"Star Wars Episode VII Trailer"},poster:"https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/poster.jpg"}};function o(e){let{hideSource:t,hideDeviceType:n,...o}=e,a=(0,r.useRef)(null),[l,c]=(0,r.useState)("bigBuckBunny"),[u,p]=(0,r.useState)("");return(0,r.useEffect)(()=>{a.current?.contentWindow?.postMessage({type:"source",source:s[l]})},[a.current,l]),(0,r.useEffect)(()=>{a.current?.contentWindow?.postMessage({type:"deviceType",deviceType:u})},[a.current,u]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("iframe",{ref:a,...o}),(!t||!n)&&(0,i.jsxs)("p",{children:[!t&&(0,i.jsx)("div",{children:(0,i.jsxs)("label",{style:{userSelect:"none"},children:["Source:"," ",(0,i.jsx)("select",{value:l,onChange:e=>c(e.target.value),children:Object.entries(s).map(e=>{let[t,n]=e;return(0,i.jsx)("option",{value:t,children:n.metadata.title},t)})})]})}),!n&&(0,i.jsx)("div",{children:(0,i.jsxs)("label",{style:{userSelect:"none"},children:["Override device type:"," ",(0,i.jsxs)("select",{value:u,onChange:e=>p(e.target.value),children:[(0,i.jsx)("option",{value:""}),(0,i.jsx)("option",{value:"desktop",children:"Desktop"}),(0,i.jsx)("option",{value:"mobile",children:"Mobile"}),(0,i.jsx)("option",{value:"tv",children:"TV"})]})]})})]})]})}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return o}});var i=n(67294);let r={},s=i.createContext(r);function o(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);