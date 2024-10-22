"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[85620],{86798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(74848),r=n(28453),o=n(93705),s=n(86025),c=n(91633);const i={sidebar_position:2,sidebar_custom_props:{icon:"\u25b6\ufe0f"},slug:"/react/examples/custom-ui"},l="Custom UI",u={id:"external/web-ui/docs/react/examples/custom-ui",title:"Custom UI",description:"Code",source:"@site/open-video-ui/external/web-ui/docs/react/examples/custom-ui.mdx",sourceDirName:"external/web-ui/docs/react/examples",slug:"/react/examples/custom-ui",permalink:"/documentation/pr-preview/pr-146/open-video-ui/react/examples/custom-ui",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/web-ui/blob/-/docs/react/examples/custom-ui.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_custom_props:{icon:"\u25b6\ufe0f"},slug:"/react/examples/custom-ui"},sidebar:"react",previous:{title:"Default UI",permalink:"/documentation/pr-preview/pr-146/open-video-ui/react/examples/default-ui"},next:{title:"Changelog",permalink:"/documentation/pr-preview/pr-146/open-video-ui/react/changelog"}},p={},d=[];function m(e){const t={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"custom-ui",children:"Custom UI"})}),"\n","\n",(0,a.jsx)(o.A,{className:c.A.player,src:(0,s.Ay)("/open-video-ui/v1/examples/react/custom-ui/demo.html"),hideDeviceType:!0}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"Code"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:'import * as THEOplayerReactUI from \'@theoplayer/react-ui\';\n\nconst configuration = {\n    libraryLocation: \'/path/to/theoplayer/\',\n    license: \'your_theoplayer_license\'\n};\n\nconst source = {\n    sources: { src: \'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8\' },\n    metadata: {\n        title: "Big Buck Bunny"\n    }\n};\n\nconst Spacer = () => {\n    return <span style={{ flexGrow: 1 }} />;\n};\n\nconst App = () => {\n    return (\n        <THEOplayerReactUI.UIContainer\n            configuration={configuration}\n            source={source}\n            topChrome={\n                <THEOplayerReactUI.ControlBar>\n                    <span className="my-title">{title}</span>\n                </THEOplayerReactUI.ControlBar>\n            }\n            centeredChrome={<THEOplayerReactUI.PlayButton />}\n            centeredLoading={<THEOplayerReactUI.LoadingIndicator />}\n            bottomChrome={\n                <>\n                    <THEOplayerReactUI.ControlBar>\n                        <THEOplayerReactUI.TimeRange />\n                    </THEOplayerReactUI.ControlBar>\n                    <THEOplayerReactUI.ControlBar>\n                        <THEOplayerReactUI.PlayButton />\n                        <THEOplayerReactUI.MuteButton />\n                        <THEOplayerReactUI.VolumeRange />\n                        <THEOplayerReactUI.TimeDisplay />\n                        <Spacer />\n                        <THEOplayerReactUI.LanguageMenuButton menu="language-menu" />\n                        <THEOplayerReactUI.SettingsMenuButton menu="settings-menu" />\n                        <THEOplayerReactUI.FullscreenButton />\n                    </THEOplayerReactUI.ControlBar>\n                </>\n            }\n            menu={\n                <>\n                    <THEOplayerReactUI.LanguageMenu id="language-menu" />\n                    <THEOplayerReactUI.SettingsMenu id="settings-menu" />\n                </>\n            }\n            error={<THEOplayerReactUI.ErrorDisplay />}\n        />\n    );\n};\n'})}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/web-ui/blob/main/docs/static/open-video-ui/v1/examples/react/custom-ui/demo.html",children:"\ud83d\udcdc View full source on GitHub"})})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},93705:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(96540);const r={bigBuckBunny:{sources:{src:"https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8"},metadata:{title:"Big Buck Bunny"},textTracks:[{default:!0,src:"https://cdn.theoplayer.com/video/big_buck_bunny/thumbnails.vtt",label:"thumbnails",kind:"metadata"}]},elephantsDream:{sources:{src:"https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8"},metadata:{title:"Elephant's Dream"},textTracks:[{default:!0,src:"https://cdn.theoplayer.com/video/elephants-dream/thumbnails.vtt",label:"thumbnails",kind:"metadata"}]},starWarsTrailer:{sources:{src:"https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8"},metadata:{title:"Star Wars Episode VII Trailer"},poster:"https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/poster.jpg"}};var o=n(74848);function s(e){let{hideSource:t,hideDeviceType:n,...s}=e;const c=(0,a.useRef)(null),[i,l]=(0,a.useState)("bigBuckBunny"),[u,p]=(0,a.useState)("");(0,a.useEffect)((()=>{c.current?.contentWindow?.postMessage({type:"source",source:r[i]})}),[c.current,i]),(0,a.useEffect)((()=>{c.current?.contentWindow?.postMessage({type:"deviceType",deviceType:u})}),[c.current,u]);const d=!t||!n;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("iframe",{ref:c,...s}),d&&(0,o.jsxs)("p",{children:[!t&&(0,o.jsx)("div",{children:(0,o.jsxs)("label",{style:{userSelect:"none"},children:["Source:"," ",(0,o.jsx)("select",{value:i,onChange:e=>l(e.target.value),children:Object.entries(r).map((e=>{let[t,n]=e;return(0,o.jsx)("option",{value:t,children:n.metadata.title},t)}))})]})}),!n&&(0,o.jsx)("div",{children:(0,o.jsxs)("label",{style:{userSelect:"none"},children:["Override device type:"," ",(0,o.jsxs)("select",{value:u,onChange:e=>p(e.target.value),children:[(0,o.jsx)("option",{value:""}),(0,o.jsx)("option",{value:"desktop",children:"Desktop"}),(0,o.jsx)("option",{value:"mobile",children:"Mobile"}),(0,o.jsx)("option",{value:"tv",children:"TV"})]})]})})]})]})}},91633:(e,t,n)=>{n.d(t,{A:()=>a});const a={player:"player_anNH"}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var a=n(96540);const r={},o=a.createContext(r);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);