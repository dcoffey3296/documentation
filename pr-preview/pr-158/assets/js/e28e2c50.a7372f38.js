"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["46639"],{82433:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>s,default:()=>d,assets:()=>c,toc:()=>l,frontMatter:()=>a});var o=JSON.parse('{"id":"getting-started/sdks/web/migrating-to-theoplayer-8","title":"Migrating to THEOplayer Web SDK 8.x","description":"This article will guide your through updating from THEOplayer Web SDK version 8 (from version 7),","source":"@site/theoplayer/getting-started/01-sdks/01-web/13-migrating-to-theoplayer-8.md","sourceDirName":"getting-started/01-sdks/01-web","slug":"/getting-started/sdks/web/migrating-to-theoplayer-8","permalink":"/documentation/pr-preview/pr-158/theoplayer/getting-started/sdks/web/migrating-to-theoplayer-8","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/getting-started/01-sdks/01-web/13-migrating-to-theoplayer-8.md","tags":[],"version":"current","sidebarPosition":13,"frontMatter":{},"sidebar":"web","previous":{"title":"How to use MultiView","permalink":"/documentation/pr-preview/pr-158/theoplayer/getting-started/sdks/web/how-to-use-multiview"},"next":{"title":"Getting Started on webOS","permalink":"/documentation/pr-preview/pr-158/theoplayer/getting-started/sdks/webos/getting-started"}}'),i=t("85893"),r=t("50065");let a={},s="Migrating to THEOplayer Web SDK 8.x",c={},l=[{value:"Update THEOplayer",id:"update-theoplayer",level:2},{value:"Replace Conviva pre-integration with Conviva connector",id:"replace-conviva-pre-integration-with-conviva-connector",level:2},{value:"Replace Yospace pre-integration with Yospace connector",id:"replace-yospace-pre-integration-with-yospace-connector",level:2},{value:"Use <code>csai</code> for client-side ads with default integration",id:"use-csai-for-client-side-ads-with-default-integration",level:2}];function h(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"migrating-to-theoplayer-web-sdk-8x",children:"Migrating to THEOplayer Web SDK 8.x"})}),"\n",(0,i.jsx)(n.p,{children:"This article will guide your through updating from THEOplayer Web SDK version 8 (from version 7),\nand the changes needed in your code."}),"\n",(0,i.jsx)(n.h2,{id:"update-theoplayer",children:"Update THEOplayer"}),"\n",(0,i.jsx)(n.p,{children:"Run the following command to install THEOplayer Web SDK version 8:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install theoplayer@8\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you're using the ",(0,i.jsx)(n.a,{href:"/open-video-ui/web/",children:"Open Video UI for Web"})," or one of ",(0,i.jsx)(n.a,{href:"/theoplayer/connectors/web/",children:"our connectors"}),",\nmake sure to update them to the latest version too to ensure proper support for THEOplayer version 8."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm update @theoplayer/web-ui\nnpm update @theoplayer/conviva-connector-web\n"})}),"\n",(0,i.jsx)(n.h2,{id:"replace-conviva-pre-integration-with-conviva-connector",children:"Replace Conviva pre-integration with Conviva connector"}),"\n",(0,i.jsxs)(n.p,{children:["Until version 7, the Web SDK shipped with ",(0,i.jsx)(n.a,{href:"https://www.conviva.com/",children:"Conviva"})," support built into the SDK itself.\nAs of version 8, this has moved to a separate ",(0,i.jsx)(n.a,{href:"/theoplayer/connectors/web/conviva/",children:"Conviva connector"}),"."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Follow the ",(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-158/theoplayer/connectors/web/conviva/getting-started",children:"getting started guide for the Conviva connector"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Remove any usages of the old ",(0,i.jsxs)(n.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/SourceDescription.html#analytics",children:[(0,i.jsx)(n.code,{children:"source.analytics"})," API"]}),"\nwith an equivalent ",(0,i.jsx)(n.a,{href:"https://theoplayer.github.io/web-connectors/api/interfaces/Conviva_Connector.ConvivaConfiguration.html",children:(0,i.jsx)(n.code,{children:"ConvivaConfiguration"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Replace any usages of the old ",(0,i.jsxs)(n.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/Analytics.html#conviva",children:[(0,i.jsx)(n.code,{children:"player.analytics.conviva"})," API"]}),"\nwith an equivalent on the ",(0,i.jsxs)(n.a,{href:"https://theoplayer.github.io/web-connectors/api/classes/Conviva_Connector.ConvivaConnector.html",children:[(0,i.jsx)(n.code,{children:"ConvivaConnector"})," API"]}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"replace-yospace-pre-integration-with-yospace-connector",children:"Replace Yospace pre-integration with Yospace connector"}),"\n",(0,i.jsxs)(n.p,{children:["Until version 7, the Web SDK shipped with ",(0,i.jsx)(n.a,{href:"https://www.yospace.com/ssai",children:"Yospace SSAI"})," support built into the SDK itself.\nAs of version 8, this has moved to a separate ",(0,i.jsx)(n.a,{href:"/theoplayer/connectors/web/yospace/",children:"Yospace connector"}),"."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Follow the ",(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-158/theoplayer/connectors/web/yospace/getting-started",children:"getting started guide for the Yospace connector"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Remove any usages of the old ",(0,i.jsxs)(n.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/YospaceTypedSource.html#ssai",children:[(0,i.jsx)(n.code,{children:"source.ssai"})," API"]}),"\nwith an equivalent ",(0,i.jsx)(n.a,{href:"https://theoplayer.github.io/web-connectors/api/interfaces/Yospace_Connector.YospaceServerSideAdInsertionConfiguration.html",children:(0,i.jsx)(n.code,{children:"YospaceServerSideAdInsertionConfiguration"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Replace any usages of the old ",(0,i.jsxs)(n.a,{href:"pathname:///theoplayer/v7/api-reference/web/classes/Player.html#yospace",children:[(0,i.jsx)(n.code,{children:"player.yospace"})," API"]}),"\nwith an equivalent on the ",(0,i.jsxs)(n.a,{href:"https://theoplayer.github.io/web-connectors/api/classes/Yospace_Connector.YospaceConnector.html",children:[(0,i.jsx)(n.code,{children:"YospaceConnector"})," API"]}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"use-csai-for-client-side-ads-with-default-integration",children:["Use ",(0,i.jsx)(n.code,{children:"csai"})," for client-side ads with default integration"]}),"\n",(0,i.jsxs)(n.p,{children:["Until version 7, the default integration for client-side VAST and VMAP advertisements was named ",(0,i.jsx)(n.code,{children:"'theo'"}),".\nIn version 8, this integration is now called ",(0,i.jsx)(n.code,{children:"'csai'"}),". Although the old name will continue working for a while,\nwe still recommend updating your code:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:"  player.source = {\n    sources: {\n      src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8',\n    },\n    ads: [\n      {\n-       integration: 'theo',\n+       integration: 'csai',\n        sources: 'https://cdn.theoplayer.com/demos/ads/vast/dfp-preroll-no-skip.xml',\n      },\n    ],\n  };\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you're using a different ad integration such as Google IMA, no action is needed."})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return a}});var o=t(67294);let i={},r=o.createContext(i);function a(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);