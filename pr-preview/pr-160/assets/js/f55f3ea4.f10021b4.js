"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["73685"],{76068:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>h,assets:()=>d,toc:()=>l,frontMatter:()=>o});var t=JSON.parse('{"id":"getting-started/getting-started-signaling-service","title":"Signaling service","description":"The Signaling Service is provided as a service and can be integrated into any existing content management workflow through its APIs, enabling seamless adoption without significant changes to your current setup.","source":"@site/theoads/getting-started/00-getting-started-signaling-service.mdx","sourceDirName":"getting-started","slug":"/getting-started/getting-started-signaling-service","permalink":"/documentation/pr-preview/pr-160/theoads/getting-started/getting-started-signaling-service","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoads/getting-started/00-getting-started-signaling-service.mdx","tags":[],"version":"current","sidebarPosition":0.1,"frontMatter":{"sidebar_position":0.1,"sidebar_label":"Signaling service","sidebar_custom_props":{"icon":"\uD83D\uDEDC"}},"sidebar":"theoads","previous":{"title":"Getting started","permalink":"/documentation/pr-preview/pr-160/theoads/getting-started/"},"next":{"title":"Web","permalink":"/documentation/pr-preview/pr-160/theoads/getting-started/getting-started-web"}}'),s=i("85893"),r=i("50065");let o={sidebar_position:.1,sidebar_label:"Signaling service",sidebar_custom_props:{icon:"\uD83D\uDEDC"}},a="Signaling service",d={},l=[{value:"Infrastructure",id:"infrastructure",level:2},{value:"Integration",id:"integration",level:3},{value:"Scheduling ad breaks",id:"scheduling-ad-breaks",level:3},{value:"Manifest",id:"manifest",level:4},{value:"REST API",id:"rest-api",level:4},{value:"Configuration",id:"configuration",level:3},{value:"Origins",id:"origins",level:4},{value:"Monetized stream",id:"monetized-stream",level:2},{value:"Creating a new monetized stream",id:"creating-a-new-monetized-stream",level:3},{value:"Updating an existing monetized stream",id:"updating-an-existing-monetized-stream",level:3},{value:"Deleting an existing monetized stream",id:"deleting-an-existing-monetized-stream",level:3},{value:"Retrieving all monetized streams",id:"retrieving-all-monetized-streams",level:3},{value:"Retrieving individual monetized stream",id:"retrieving-individual-monetized-stream",level:3}];function c(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"signaling-service",children:"Signaling service"})}),"\n",(0,s.jsx)(n.p,{children:"The Signaling Service is provided as a service and can be integrated into any existing content management workflow through its APIs, enabling seamless adoption without significant changes to your current setup."}),"\n",(0,s.jsx)(n.p,{children:"Developed and provided by THEO Technologies, this service operates on your infrastructure, integrated between your CDN and media origin. It performs manifest manipulation to insert ad breaks and additional metadata for the player. Additionally, it ensures scalability of the end-to-end system through early ad break notifications to ad decisioning servers."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"THEOads architecture",src:i(59089).Z+"",width:"962",height:"529"})}),"\n",(0,s.jsx)(n.h2,{id:"infrastructure",children:"Infrastructure"}),"\n",(0,s.jsx)(n.p,{children:"The service is deployed and operated by THEO Technologies within the customer\u2019s infrastructure. This setup ensures smooth integration into the existing video workflow with minimal disruption. During onboarding, THEO Technologies provides the infrastructure requirements. Once set up, THEO Technologies bootstraps the service, after which the customer can manage their signaling service deployments and monitor the service through the REST API."}),"\n",(0,s.jsx)(n.h3,{id:"integration",children:"Integration"}),"\n",(0,s.jsx)(n.p,{children:"In collaboration with the customer and THEO's solutions team, the integration of the service into the existing video workflow is designed. Deploying the Signaling Service between the CDN and Origin ensures that regionalization, security, and localization features remain unaffected."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"To ensure high availability, we recommend maintaining the original origin stream on a CDN as a backup, while the Signaling Service provides redundancy and failover capabilities to further enhance reliability."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For each Origin stream that needs to be enabled for THEOads, a monetized-stream can be created through the locally deployed REST API from your CMS or other existing orchestration systems. The monetized-stream represents a high-availability Signaling Service deployed on the provided infrastructure. Each active monetized-stream offers an HTTPS (or HTTP) endpoint for the CDN to fetch the augmented manifest. The endpoint path is standardized, so no CDN reconfiguration is required when stopping and recreating the monetized-stream."}),"\n",(0,s.jsxs)(n.p,{children:["Please refer to the ",(0,s.jsx)(n.a,{href:"/theoads/api/signaling/theoads-api/",children:"API reference"})," for detailed information on the REST API."]}),"\n",(0,s.jsx)(n.h3,{id:"scheduling-ad-breaks",children:"Scheduling ad breaks"}),"\n",(0,s.jsxs)(n.p,{children:["To accurately schedule breaks, the origin manifest must be valid and include date and time indications.\nFor HLS, this means the ",(0,s.jsx)(n.code,{children:"EXT-X-PROGRAM-DATE-TIME"})," tag must be present.\nBreaks can be scheduled using either the provided REST API or in the manifest itself."]}),"\n",(0,s.jsx)(n.h4,{id:"manifest",children:"Manifest"}),"\n",(0,s.jsx)(n.p,{children:"When using manifest triggers, the following tags are supported:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"#EXT-X-DATERANGE"})," tag","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"this is recommended because of its standardization and ability to provide more comprehensive data for improved integration."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"#EXT-X-OATCLS-SCTE35"})," tag"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"#EXT-X-CUE-OUT"})," and ",(0,s.jsx)(n.code,{children:"#EXT-X-CUE-OUT-CONT"})," tags"]}),"\n",(0,s.jsxs)(n.li,{children:["To use the tune-in feature, ",(0,s.jsx)(n.code,{children:"#EXT-X-CUE-OUT-CONT"})," tags must be present between ",(0,s.jsx)(n.code,{children:"#EXT-X-CUE-OUT"})," and ",(0,s.jsx)(n.code,{children:"#EXT-X-CUE-IN"})," markers."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Optionally, SCTE markers can be included with the tags for extra metadata."}),"\n",(0,s.jsx)(n.h4,{id:"rest-api",children:"REST API"}),"\n",(0,s.jsxs)(n.p,{children:["For scheduling ad breaks through the REST API, please refer to the ",(0,s.jsx)(n.a,{href:"/theoads/api/signaling/create-monetized-stream-break/",children:"API definitions"})," and the example below."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl --location \'http://theoads-host/api/v1/monetized-streams/stream-1/break\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Accept: application/json\' \\\n--data \'{\n  "id": "626cd35a-4fbf-48b8-b0cd-acc246266f88",\n  "startDate": "2024-09-03T08:00:00.000Z",\n  "duration": 60,\n  "source": "",\n  "layout": "LSHAPE_AD"\n}\'\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For more in depth information on scheduling ad breaks we refer to our ",(0,s.jsx)(n.a,{href:"/theoads/how-to-guides/scheduling-breaks/",children:"How-to guide: Scheduling breaks"})]}),"\n",(0,s.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.p,{children:"When setting up the Signaling Service, a configuration needs to be passed along. It must contain the following parameters:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"origin"}),": The origin URI to use for manifest requests."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"segmentOrigin"}),": The segment origin URI to use for segment requests."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"layout"}),": The default experience layout, see ",(0,s.jsx)(n.a,{href:"/theoads/how-to-guides/override-layout/",children:"ad experience layout"})," for possible values."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"assetKey"}),": Google DAI Asset-Key representing the stream, see ",(0,s.jsx)(n.a,{href:"https://support.google.com/admanager/topic/7062524?hl=en",children:"Google DAI"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"networkCode"}),": Google DAI Network-Code, see ",(0,s.jsx)(n.a,{href:"https://support.google.com/admanager/topic/7062524?hl=en",children:"Google DAI"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"origins",children:"Origins"}),"\n",(0,s.jsx)(n.p,{children:"When playing a THEOads source, it is expected to pass a source that looks like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"src: 'PATH-TO-SIGNALING-SERVER/hls/MANIFEST-URI'\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For the ",(0,s.jsx)(n.code,{children:"MANIFEST-URI"})," part of the ",(0,s.jsx)(n.code,{children:"src"}),", it can be an absolute URL or a relative one where the ",(0,s.jsx)(n.code,{children:"origin"})," is not part of it.\nThe relative URL should be used if the origin is a non-public hostname or ip address.\nBelow shows an example for both cases:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// Absolute URL\nsrc: 'PATH-TO-SIGNALING-SERVER/hls/https://domain.com/manifest.m3u8'\n\n// Relative URL\nsrc: 'PATH-TO-SIGNALING-SERVER/hls/manifest.m3u8'\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the case of the absolute URL the Signaling Service uses the whole URL as is. For the relative URL on the other hand,\nit does not have a valid URL to fetch the manifest yet. Here we will use the ",(0,s.jsx)(n.code,{children:"origin"})," parameter as provided in the config.\nBy combining both we do get a valid URL and can fetch the manifest."]}),"\n",(0,s.jsxs)(n.p,{children:["However, segment URLs in the media playlists should be absolute URLs.\nSegment requests don't need to pass through the Signaling Service but should be fetched directly from the CDN to the origin.\nThe ",(0,s.jsx)(n.code,{children:"segmentOrigin"})," parameter should contain this publicly available endpoint to fetch the segments directly."]}),"\n",(0,s.jsxs)(n.p,{children:["For more information on this topic we refer to our ",(0,s.jsx)(n.a,{href:"/theoads/how-to-guides/workflow-integration/",children:"workflow integration"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"monetized-stream",children:"Monetized stream"}),"\n",(0,s.jsx)(n.p,{children:"A monetized stream resource represents a high-availability Signaling Service deployed to enable THEOads for an Origin stream. Created via the locally deployed REST API, it provides a standardized HTTPS (or HTTP) endpoint for the CDN to fetch the augmented manifest. This setup ensures seamless ad insertion without needing CDN reconfiguration, even if the monetized stream is stopped and recreated."}),"\n",(0,s.jsx)(n.p,{children:"The monetized-stream holds the following information:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"}),": Self defined descriptive name for the monetized stream."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"labels"}),": Array of self defined labels (string)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"layout"}),": Default experience layout, see ",(0,s.jsx)(n.a,{href:"/theoads/how-to-guides/override-layout/",children:"ad experience layout"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"origin"}),": Your media Origin host."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"segmentOrigin"}),": Your publicly available segments origin."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"assetKey"}),": Google DAI Asset-Key representing the stream, see ",(0,s.jsx)(n.a,{href:"https://support.google.com/admanager/topic/7062524?hl=en",children:"Google DAI"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"streamId"}),": Unique identifier for the monetized stream within the environment."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"description"}),": Additional descriptive information for the monetized stream."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"networkCode"}),": Google DAI Network-Code, see ",(0,s.jsx)(n.a,{href:"https://support.google.com/admanager/topic/7062524?hl=en",children:"Google DAI"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"assetURI"}),": Optional Asset URI which is to be used during ad breaks. If not set it will request an ad through Google Pod Serving."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"backdropURI"}),": Optional URI containing the back-drop to be used during the double box or L-shape ad."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "THEOads Demo",\n  "labels": [],\n  "layout": "DOUBLE",\n  "origin": "https://domain.com",\n  "segmentOrigin": "https://segment-domain.com",\n  "assetKey": "google-sgai-demo",\n  "streamId": "theoads-demo",\n  "description": "SGAI THEOads Demo",\n  "networkCode": "89053",\n  "assetURI": "https://asset.m3u8",\n  "backdropURI": "https://backdrop.svg"\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"creating-a-new-monetized-stream",children:"Creating a new monetized stream"}),"\n",(0,s.jsx)(n.p,{children:"The following API endpoint creates a new monetized stream (signaling-service) in the environment, mandatory parameters are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"}),": Self defined descriptive name for the monetized stream."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"layout"}),": Default experience layout, see ",(0,s.jsx)(n.a,{href:"/theoads/how-to-guides/override-layout/",children:"ad experience layout"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"origin"}),": Your media Origin host."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"segmentOrigin"}),": Your publicly available segments origin."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"assetKey"}),": Google DAI Asset-Key representing the stream, see ",(0,s.jsx)(n.a,{href:"https://support.google.com/admanager/topic/7062524?hl=en",children:"Google DAI"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"streamId"}),": Unique identifier for the monetized stream within the environment."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"description"}),": Additional descriptive information for the monetized stream."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"networkCode"}),": Google DAI Network-Code, see ",(0,s.jsx)(n.a,{href:"https://support.google.com/admanager/topic/7062524?hl=en",children:"Google DAI"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-curl",children:'curl -L \'/api/v1/monetized-streams\' \\\n-H \'Content-Type: application/json\' \\\n-H \'Accept: application/json\' \\\n-d \'{\n  "name": "string",\n  "layout": "SINGLE",\n  "origin": "string",\n  "segmentOrigin": "string",\n  "assetKey": "string",\n  "streamId": "string",\n  "description": "string",\n  "networkCode": "string"\n}\'\n'})}),"\n",(0,s.jsx)(n.h3,{id:"updating-an-existing-monetized-stream",children:"Updating an existing monetized stream"}),"\n",(0,s.jsx)(n.p,{children:"The following API endpoint updates an existing monetized stream based on it's streamId, mandatory parameters are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"}),": Self defined descriptive name for the monetized stream."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"labels"}),": Array of self defined labels (string)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"layout"}),": Default experience layout, see ",(0,s.jsx)(n.a,{href:"/theoads/how-to-guides/override-layout/",children:"ad experience layout"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"origin"}),": Your media Origin host."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"segmentOrigin"}),": Your publicly available segments origin."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"assetKey"}),": Google DAI Asset-Key representing the stream, see ",(0,s.jsx)(n.a,{href:"https://support.google.com/admanager/topic/7062524?hl=en",children:"Google DAI"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"streamId"}),": Unique identifier for the monetized stream within the environment."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"description"}),": Additional descriptive information for the monetized stream."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"networkCode"}),": Google DAI Network-Code, see ",(0,s.jsx)(n.a,{href:"https://support.google.com/admanager/topic/7062524?hl=en",children:"Google DAI"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-curl",children:'curl -L -X PATCH \'/api/v1/monetized-streams/:streamId\' \\\n-H \'Content-Type: application/json\' \\\n-H \'Accept: application/json\' \\\n-d \'{\n  "name": "string",\n  "labels": [\n    "string"\n  ],\n  "origin": "string",\n  "segmentOrigin": "string",\n  "assetKey": "string",\n  "streamId": "string",\n  "description": "string",\n  "networkCode": "string"\n}\'\n'})}),"\n",(0,s.jsx)(n.h3,{id:"deleting-an-existing-monetized-stream",children:"Deleting an existing monetized stream"}),"\n",(0,s.jsx)(n.p,{children:"The following API endpoint deletes an existing monetized stream based on it's streamId."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-curl",children:"curl -L -X DELETE '/api/v1/monetized-streams/:streamId' \\\n-H 'Accept: application/json'\n"})}),"\n",(0,s.jsx)(n.h3,{id:"retrieving-all-monetized-streams",children:"Retrieving all monetized streams"}),"\n",(0,s.jsx)(n.p,{children:"The following API endpoint returns all existing monetized streams in the deployed environment."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-curl",children:"curl -X 'GET' \\\n  '/api/v1/monetized-streams' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,s.jsx)(n.p,{children:"The response is an array of the existing monetized stream resources."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "id": "theoads-demo",\n    "payload": {\n      "name": "THEOads Demo",\n      "labels": [],\n      "layout": "DOUBLE",\n      "origin": "https://domain.com",\n      "segmentOrigin": "https://segment-domain.com",\n      "assetKey": "google-sgai-demo",\n      "streamId": "theoads-demo",\n      "description": "SGAI THEOads Demo",\n      "networkCode": "89053"\n    },\n    "state": "created",\n    "type": "monetized-stream"\n  }\n]\n'})}),"\n",(0,s.jsx)(n.h3,{id:"retrieving-individual-monetized-stream",children:"Retrieving individual monetized stream"}),"\n",(0,s.jsx)(n.p,{children:"The following API endpoint returns an existing monetized stream based on its identifier (streamId)."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-curl",children:"curl -L '/api/v1/monetized-streams/:streamId' \\\n-H 'Accept: application/json'\n"})}),"\n",(0,s.jsx)(n.p,{children:"The response is the monetized stream resource."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "id": "theoads-demo",\n  "payload": {\n    "name": "THEOads Demo",\n    "labels": [],\n    "layout": "DOUBLE",\n    "origin": "https://domain.com",\n    "segmentOrigin": "https://segment-domain.com",\n    "assetKey": "google-sgai-demo",\n    "streamId": "theoads-demo",\n    "description": "SGAI THEOads Demo",\n    "networkCode": "89053"\n  },\n  "state": "created",\n  "type": "monetized-stream"\n}\n'})}),"\n",(0,s.jsx)(n.h1,{id:"more-information",children:"More information"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/theoads/api/signaling/theoads-api/",children:"API reference"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.theoplayer.com/product/theoads/",children:"What is THEOads?"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.theoplayer.com/solutions/server-guided-ad-insertion-sgai/",children:"The Advantages of Server-Guided Ad Insertion"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.theoplayer.com/product/theoads/pricing/",children:"Flexible, Usage-Based Pricing"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.theoplayer.com/blog/server-guided-ad-insertion-sgai-revolutionizing-streaming-monetization/",children:"Is Server-Guided Ad-Insertion (SGAI) revolutionizing streaming monetization? (blog)"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},59089:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/how_theoads_works-light-3d0285c578b09f00ee495d3f391c5ae0.svg"},50065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return o}});var t=i(67294);let s={},r=t.createContext(s);function o(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);