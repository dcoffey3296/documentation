"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[96082],{21484:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=n(74848),o=n(28453);const s={},i="Cross Origin Resource Sharing (CORS)",a={id:"knowledge-base/cors/introduction",title:"Cross Origin Resource Sharing (CORS)",description:"Cross-origin resource sharing (CORS) is a content protection mechanism that allows resources (manifests, video files or encryption keys) on server to be requested from a webpage on a different domain, subdomain or port than the one on from which the resources originated.",source:"@site/theoplayer_versioned_docs/version-v6/knowledge-base/05-cors/00-introduction.md",sourceDirName:"knowledge-base/05-cors",slug:"/knowledge-base/cors/introduction",permalink:"/documentation/pr-preview/pr-142/theoplayer/v6/knowledge-base/cors/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/knowledge-base/05-cors/00-introduction.md",tags:[],version:"v6",sidebarPosition:0,frontMatter:{},sidebar:"roku",previous:{title:"What are the recommended stream settings?",permalink:"/documentation/pr-preview/pr-142/theoplayer/v6/knowledge-base/streaming/what-are-the-recommended-stream-settings"},next:{title:"Timed Metadata",permalink:"/documentation/pr-preview/pr-142/theoplayer/v6/knowledge-base/metadata/introduction"}},d={},c=[{value:"Content Delivery Network Support",id:"content-delivery-network-support",level:2},{value:"Enabling CORS on Wowza Media Server",id:"enabling-cors-on-wowza-media-server",level:2},{value:"Enabling CORS on Adobe Flash Media Server",id:"enabling-cors-on-adobe-flash-media-server",level:2},{value:"Other Resources",id:"other-resources",level:2}];function l(e){const r={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"cross-origin-resource-sharing-cors",children:"Cross Origin Resource Sharing (CORS)"})}),"\n",(0,t.jsx)(r.p,{children:"Cross-origin resource sharing (CORS) is a content protection mechanism that allows resources (manifests, video files or encryption keys) on server to be requested from a webpage on a different domain, subdomain or port than the one on from which the resources originated."}),"\n",(0,t.jsx)(r.p,{children:'Such "cross-origin" requests would otherwise be forbidden by web browsers, per the same-origin security policy. CORS defines a way in which the browser and the server can interact and determine whether the browser is allowed to make these cross-origin request.'}),"\n",(0,t.jsx)(r.p,{children:"THEOplayer makes use of CORS for downloading manifests, video files and encryption keys from the streaming infrastructure. If CORS headers are not present on these server(s), THEOplayer assumes that it is not allowed to play the provided link. Make sure CORS headers are being served along with your resources in order to ensure smooth playback by THEOplayer."}),"\n",(0,t.jsx)(r.h2,{id:"content-delivery-network-support",children:"Content Delivery Network Support"}),"\n",(0,t.jsx)(r.p,{children:"From our experience and cooperations, the following CDNs have support for honoring or even adding CORS headers to requests they handle. If you are aware of a CDN that has support for CORS and is not on the list, make sure to contact us."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Support"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Akamai"}),(0,t.jsx)(r.td,{children:"Yes"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Anevia"}),(0,t.jsx)(r.td,{children:"Yes"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Bitgravity"}),(0,t.jsx)(r.td,{children:"Yes"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Edgio"}),(0,t.jsx)(r.td,{children:"Yes"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Highwinds"}),(0,t.jsx)(r.td,{children:"Yes"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Internap"}),(0,t.jsx)(r.td,{children:"Yes"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Level 3"}),(0,t.jsx)(r.td,{children:"Yes"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Limelight"}),(0,t.jsx)(r.td,{children:"Yes"})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"enabling-cors-on-wowza-media-server",children:"Enabling CORS on Wowza Media Server"}),"\n",(0,t.jsxs)(r.p,{children:["Open the relevant (VOD, Live, ...) Wowza Application.xml configuration files.",(0,t.jsx)(r.br,{}),"\n","Go to the ",(0,t.jsx)(r.code,{children:"HTTPStreamer / Properties"})," container.",(0,t.jsx)(r.br,{}),"\n","Add or make sure it contains:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-xml",children:"<HTTPStreamer>\n    <Properties>\n        <Property>\n            <Name>cupertinoUserHTTPHeaders</Name>\n            <Value>Access-Control-Allow-Origin: *</Value>\n        </Property>\n    </Properties>\n</HTTPStreamer>\n"})}),"\n",(0,t.jsx)(r.p,{children:"This ensures that requested HLS files have the required CORS headers for domain *. When in doubt, restart your Wowza Media Server instance to make sure the new configuration has been loaded."}),"\n",(0,t.jsx)(r.h2,{id:"enabling-cors-on-adobe-flash-media-server",children:"Enabling CORS on Adobe Flash Media Server"}),"\n",(0,t.jsx)(r.p,{children:"For Adobe Flash Media Server, CORS can be enabled by editing the .htaccess file that ships along with the installation. Add or make sure the file contains:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-xml",children:"<IfModule mod_headers.c>\n    Header set Access-Control-Allow-Origin *\n</IfModule>\n"})}),"\n",(0,t.jsx)(r.p,{children:"This ensures that requested HLS files have the required CORS header for domain *. When in doubt, restart your Adobe Flash Media Server instance to make sure the new configuration has been loaded."}),"\n",(0,t.jsx)(r.h2,{id:"other-resources",children:"Other Resources"}),"\n",(0,t.jsxs)(r.p,{children:["Enabling CORS depends on the backend technology and on the used CDN. More information about CORS and how to enable it on a range of backend server technology can be found at ",(0,t.jsx)(r.a,{href:"http://enable-cors.org/",children:"http://enable-cors.org/"})]})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>a});var t=n(96540);const o={},s=t.createContext(o);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);