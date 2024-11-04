"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[44297],{83766:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var r=n(74848),a=n(28453),o=n(93705),s=n(86025),i=n(91633);const c={sidebar_position:1,sidebar_custom_props:{icon:"\u25b6\ufe0f"},slug:"/react/examples/default-ui"},l="Default UI",u={id:"external/web-ui/docs/react/examples/default-ui",title:"Default UI",description:"Code",source:"@site/open-video-ui/external/web-ui/docs/react/examples/default-ui.mdx",sourceDirName:"external/web-ui/docs/react/examples",slug:"/react/examples/default-ui",permalink:"/documentation/pr-preview/pr-151/open-video-ui/react/examples/default-ui",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/web-ui/blob/-/docs/react/examples/default-ui.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_custom_props:{icon:"\u25b6\ufe0f"},slug:"/react/examples/default-ui"},sidebar:"react",previous:{title:"Examples",permalink:"/documentation/pr-preview/pr-151/open-video-ui/react/examples"},next:{title:"Custom UI",permalink:"/documentation/pr-preview/pr-151/open-video-ui/react/examples/custom-ui"}},d={},p=[];function m(e){const t={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"default-ui",children:"Default UI"})}),"\n","\n",(0,r.jsx)(o.A,{className:i.A.player,src:(0,s.Ay)("/open-video-ui/v1/examples/react/default-ui/demo.html")}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Code"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:'import {DefaultUI} from \'@theoplayer/react-ui\'\n\nconst configuration = {\n    libraryLocation: "/path/to/theoplayer/",\n    license: "your_theoplayer_license"\n};\n\nconst source = {\n    sources: {src: \'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8\'},\n    metadata: {\n        title: "Big Buck Bunny"\n    }\n};\n\nconst App = () => {\n    return <DefaultUI configuration={configuration} source={source}/>;\n};\n'})}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/THEOplayer/web-ui/blob/main/docs/static/open-video-ui/v1/examples/react/default-ui/demo.html",children:"\ud83d\udcdc View full source on GitHub"})})]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},93705:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(96540);const a={bigBuckBunny:{sources:{src:"https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8"},metadata:{title:"Big Buck Bunny"},textTracks:[{default:!0,src:"https://cdn.theoplayer.com/video/big_buck_bunny/thumbnails.vtt",label:"thumbnails",kind:"metadata"}]},elephantsDream:{sources:{src:"https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8"},metadata:{title:"Elephant's Dream"},textTracks:[{default:!0,src:"https://cdn.theoplayer.com/video/elephants-dream/thumbnails.vtt",label:"thumbnails",kind:"metadata"}]},starWarsTrailer:{sources:{src:"https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8"},metadata:{title:"Star Wars Episode VII Trailer"},poster:"https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/poster.jpg"}};var o=n(74848);function s(e){let{hideSource:t,hideDeviceType:n,...s}=e;const i=(0,r.useRef)(null),[c,l]=(0,r.useState)("bigBuckBunny"),[u,d]=(0,r.useState)("");(0,r.useEffect)((()=>{i.current?.contentWindow?.postMessage({type:"source",source:a[c]})}),[i.current,c]),(0,r.useEffect)((()=>{i.current?.contentWindow?.postMessage({type:"deviceType",deviceType:u})}),[i.current,u]);const p=!t||!n;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("iframe",{ref:i,...s}),p&&(0,o.jsxs)("p",{children:[!t&&(0,o.jsx)("div",{children:(0,o.jsxs)("label",{style:{userSelect:"none"},children:["Source:"," ",(0,o.jsx)("select",{value:c,onChange:e=>l(e.target.value),children:Object.entries(a).map((e=>{let[t,n]=e;return(0,o.jsx)("option",{value:t,children:n.metadata.title},t)}))})]})}),!n&&(0,o.jsx)("div",{children:(0,o.jsxs)("label",{style:{userSelect:"none"},children:["Override device type:"," ",(0,o.jsxs)("select",{value:u,onChange:e=>d(e.target.value),children:[(0,o.jsx)("option",{value:""}),(0,o.jsx)("option",{value:"desktop",children:"Desktop"}),(0,o.jsx)("option",{value:"mobile",children:"Mobile"}),(0,o.jsx)("option",{value:"tv",children:"TV"})]})]})})]})]})}},91633:(e,t,n)=>{n.d(t,{A:()=>r});const r={player:"player_anNH"}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(96540);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);