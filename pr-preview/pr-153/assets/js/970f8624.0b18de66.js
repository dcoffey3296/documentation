"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[13989],{34489:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=a(74848),t=a(28453);const i={},s="Preplay",o={id:"how-to-guides/miscellaneous/verizon-media/preplay",title:"Preplay",description:"This article explains how to leverage the Verizon Media Preplay API through THEOplayer. This API allows developers to pre-integrate with Verizon's Preplay service.",source:"@site/theoplayer_versioned_docs/version-v6/how-to-guides/07-miscellaneous/02-verizon-media/01-preplay.md",sourceDirName:"how-to-guides/07-miscellaneous/02-verizon-media",slug:"/how-to-guides/miscellaneous/verizon-media/preplay",permalink:"/documentation/pr-preview/pr-153/theoplayer/v6/how-to-guides/miscellaneous/verizon-media/preplay",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/07-miscellaneous/02-verizon-media/01-preplay.md",tags:[],version:"v6",sidebarPosition:1,frontMatter:{},sidebar:"roku",previous:{title:"Introduction",permalink:"/documentation/pr-preview/pr-153/theoplayer/v6/how-to-guides/miscellaneous/verizon-media/introduction"},next:{title:"Verizon Media Ads",permalink:"/documentation/pr-preview/pr-153/theoplayer/v6/how-to-guides/miscellaneous/verizon-media/ads"}},d={},l=[{value:"SDKs",id:"sdks",level:2},{value:"Stream Configuration (without ads)",id:"stream-configuration-without-ads",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Legacy Android SDK (4.12.x)",id:"legacy-android-sdk-412x",level:5},{value:"iOS (/tvOS) SDK",id:"ios-tvos-sdk",level:5},{value:"Roku SDK",id:"roku-sdk",level:5},{value:"Stream Configuration (with ads)",id:"stream-configuration-with-ads",level:2},{value:"Web SDK",id:"web-sdk-1",level:5},{value:"Android (TV) SDK",id:"android-tv-sdk",level:5},{value:"iOS (/tvOS) SDK",id:"ios-tvos-sdk-1",level:5},{value:"Roku SDK",id:"roku-sdk-1",level:5},{value:"Preplay Response",id:"preplay-response",level:2},{value:"Web SDK",id:"web-sdk-2",level:5},{value:"Android (TV) SDK",id:"android-tv-sdk-1",level:5},{value:"iOS (/tvOS) SDK",id:"ios-tvos-sdk-2",level:5},{value:"Using Tokens",id:"using-tokens",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"preplay",children:"Preplay"})}),"\n",(0,r.jsx)(n.p,{children:"This article explains how to leverage the Verizon Media Preplay API through THEOplayer. This API allows developers to pre-integrate with Verizon's Preplay service."}),"\n",(0,r.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Roku SDK"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes (2.63.0)"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes (2.66.0)"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes (2.65.0)"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes (2.66.0)"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"})]})})]}),"\n",(0,r.jsx)(n.p,{children:"Verizon Media users can use an API (i.e. Preplay) to generate a streaming playlist given 1 or more assets or advertisements. The back-end of Verizon Media stitches the content together and allows for server-side ad-insertion (SSAI) when applicable. This document describes how THEOplayer users should configure their source to leverage this Preplay service."}),"\n",(0,r.jsx)(n.p,{children:"Assumptions:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"THEOplayer assumes the availability of the Preplay API and Verizon content servers to be 100%, since these identify and provide the necessary streams for playback with this feature."}),"\n",(0,r.jsxs)(n.li,{children:["THEOplayer assumes that developers who are interested in this feature have a basic understanding of the Preplay API. Verizon Media documents this service at ",(0,r.jsx)(n.a,{href:"https://docs.vdms.com/video/Content/Develop/Preplayv2.htm",children:"https://docs.vdms.com/video/Content/Develop/Preplayv2.htm"})]}),"\n",(0,r.jsx)(n.li,{children:"THEOplayer assumes that developers provide correct asset identifiers, as well as the proper content protection level."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"stream-configuration-without-ads",children:"Stream Configuration (without ads)"}),"\n",(0,r.jsx)(n.p,{children:"The examples below demonstrate how to configure a stream through the Verizon Media pre-integration."}),"\n",(0,r.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'player.source = {\n  sources: [\n    {\n      integration: "verizon-media",\n      id: "verizon-media_content_id",\n      preplayParameters: {}, // Optional, defaults to an empty object. These will be added as query parameters to the Preplay API call.\n      assetType: "asset", // Optional, defaults to \'asset\'. Can also be \'channel\' or \'event\', following the Verizon Media semantics, where \'asset\' is On-demand content.\n      contentProtected: false // Optional, defaults to false.\n    }\n  ]\n};\n\n// Source example for an external id (with optional properties omitted)\nplayer.source = {\n  sources: [\n    {\n      integration: "verizon-media",\n      id: {\n        userId: "verizon-media_user_id",\n        externalId: "verizon-media_external_content_id"\n      }\n    }\n  ]\n};\n\n// Source example for a regular asset id with e.g. \'delay\' parameter and \'sig\' token parameter.\nplayer.source = {\n  sources: [\n    {\n      integration: "verizon-media",\n      id: "verizon-media_content_id",\n      preplayParameters: {\n        delay: "7200",\n        rays: "dcba",\n        sig: "2ff94739b021912712adafeccd6fa291f11eef0648c3b18b30224b84e0590b4f"\n      }, // Optional, defaults to an empty object. These will be added as query parameters to the Preplay API call.\n      assetType: "asset", // Optional, defaults to \'asset\'. Can also be \'channel\' or \'event\', following the Verizon Media semantics, where \'asset\' is On-demand content.\n      contentProtected: false // Optional, defaults to false.\n    }\n  ]\n};\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The snippet above gives a quick overview of the structure of a Verizon Media-specific source, also known as a ",(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/VerizonMediaSource.html",children:"VerizonMediaSource"}),". More information on certain properties:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"id"}),": The ID field identifies the asset. Instead of a single string, developers can also specify an array of asset IDs as strings, which will be stitched into a continuous stream. The same goes for the ",(0,r.jsx)(n.code,{children:"externalId"})," property in case an external ID is used in the source."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"preplayParameters"}),": The ",(0,r.jsx)(n.code,{children:"preplayParameters"})," object should have string-key-string-value combinations, which will be used as query parameters for the Preplay API call. Nested objects are not supported."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"contentProtected"}),": Boolean value which will internally set any necessary content-protection information. No content-protection details have to be specified by the customer."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"A Preplay request must include all parameters defined within the playback request, hence these parameters must be included in the THEOplayer source"}),". This request must also include a digital signature if the 'Require a token for playback' option is enabled in the back-end on the corresponding live channel. (See also : ",(0,r.jsx)(n.a,{href:"https://docs.vdms.com/video/index.html#Tutorials/Signed-Playback-URL-Tutorial.htm%3FTocPath%3DBasic%2520Setup%7CPlayback%2520URLs%7C_____2",children:"Basic Setup > Playback URL's > Signing a Playback URL Tutorial"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Verizon Media specific documentation on the available playback URL query parameters can be found on the Verizon Media documentation site under ",(0,r.jsx)(n.a,{href:"https://docs.vdms.com/video/index.html#Setup/Customizing-Playback.htm%3FTocPath%3DBasic%2520Setup%7CPlayback%2520URLs%7C_____1",children:"Basic Setup > Playback URL's > Customizing Playback via Parameters"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Some parameters can be excluded from the digital signature calculation. These parameters may enable certain use cases (e.g. DVR) and would for this reason be excluded from the digital signature."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h5,{id:"legacy-android-sdk-412x",children:"Legacy Android SDK (4.12.x)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'// Java examples\n\n// Single asset\nLinkedHashMap<String, String> orderedPreplayParameters = new LinkedHashMap<>();\nVerizonMediaSource verizonMediaSource = new VerizonMediaSource.Builder("assetID")\n                .orderedParameters(orderedPreplayParameters)\n                .assetType(VerizonMediaAssetType.ASSET)\n                .contentProtected(false)\n                .build();\n\n// Multiple assets\nVerizonMediaSource verizonMediaSource = new VerizonMediaSource.Builder(new String[]{"firstAsset", "secondAsset", "thirdAsset"}).build();\n\n// External id single asset\nVerizonMediaExternalId externalId = new VerizonMediaExternalId("userID", "externalAssetID");\n\n// External id multiple assets\nVerizonMediaExternalId externalId = new VerizonMediaExternalId("userID", new String[]{"firstExternalAsset", "secondExternalAsset", "thirdExternalAsset"});\n\n// Source example for a regular asset id with e.g. \'delay\' parameter and \'sig\' token parameter.\nLinkedHashMap<String, String> orderedPreplayParameters = new LinkedHashMap<>();\norderedPreplayParameters.put("delay", "7200");\norderedPreplayParameters.put("rays", "dcba");\norderedPreplayParameters.put("sig", "2ff94739b021912712adafeccd6fa291f11eef0648c3b18b30224b84e0590b4f");\n\nVerizonMediaSource verizonMediaSource = new VerizonMediaSource.Builder("assetID")\n        .orderedParameters(orderedPreplayParameters)\n        .assetType(VerizonMediaAssetType.ASSET)\n        .contentProtected(false)\n        .build();\n\nSourceDescription mySourceDescription = SourceDescription.Builder.sourceDescription(verizonMediaSource).build();\nthis.tpv.getPlayer().setSource(mySourceDescription);\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The snippet above gives a quick overview of the structure of a Verizon Media-specific source, also known as a ",(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/android/com/theoplayer/android/api/source/verizonmedia/VerizonMediaSource.html",children:"VerizonMediaSource"}),"."]}),"\n",(0,r.jsx)(n.h5,{id:"ios-tvos-sdk",children:"iOS (/tvOS) SDK"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:'// Swift examples\n\nlet verizonMediaSource = VerizonMediaSource(\n    assetId: "verizonMedia_content_id",\n    orderedParameters: [:], // Optional, defaults to an empty object. These will be added as query parameters to the Preplay API call.\n    assetType: .ASSET, // Optional, defaults to ".ASSET". Can also be ".CHANNEL" or ".EVENT", following the Verizon Media semantics, where \'asset\' is On-demand content.\n    contentProtected: false // Optional, defaults to false.\n)\n\n// Source example for an external id (with optional properties omitted)\nlet externalId = VerizonMediaExternalId(\n    userId: "verizonMedia_user_id",\n    externalId: "verizonMedia_external_content_id"\n)\nlet VerizonMediaSource = VerizonMediaSource(externalId: externalId)\n\n// Source example for a regular asset id with e.g. \'delay\' parameter and \'sig\' token parameter.\nlet VerizonMediaSource = VerizonMediaSource(\n    assetId: "verizonMedia_content_id",\n    preplayParameters: [\n        ("delay","7200"),\n        ("rays","dcba"),\n        ("sig","2ff94739b021912712adafeccd6fa291f11eef0648c3b18b30224b84e0590b4f")\n    ], // Optional, defaults to an empty object. These will be added as query parameters to the Preplay API call.\n    assetType: .ASSET, // Optional, defaults to ".ASSET". Can also be ".CHANNEL" or ".EVENT", following the Verizon Mediasemantics, where \'asset\' is On-demand content.\n    contentProtected: false // Optional, defaults to false.\n)\n\nlet sourceDescription = SourceDescription(VerizonMediaSource: verizonMediaSource)\nself.theoplayer.source = sourceDescription\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The snippets above gives a quick overview of the structure of the Verizon Media-specific source, also known as a ",(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/ios/Classes/VerizonMediaSource.html",children:"VerizonMediaSource"}),".\nMore information on certain properties:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"id"}),": The ID field can instead of an asset id as a single string also specify an array of asset ids as strings, which will be stitched into a continuous stream. The same goes for the",(0,r.jsx)(n.code,{children:"externalId"}),"property in case an external ID is used in the source."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"orderedParameters"}),": The ",(0,r.jsx)(n.code,{children:"orderedParameters"})," object should have string-key-string-value combinations, which will be used as query parameters for the Preplay API call. Nested objects are not supported."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"contentProtected"}),": Boolean value which will internally set any necessary content-protection information. No content-protection details have to be specified by the customer."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"A Preplay request must include all parameters defined within the playback request, hence these parameters must be included in the THEOplayer source"}),". This request must also include a digital signature if the 'Require a token for playback' option is enabled in the back-end on the corresponding live channel. (See also : ",(0,r.jsx)(n.a,{href:"https://docs.vdms.com/video/index.html#Tutorials/Signed-Playback-URL-Tutorial.htm%3FTocPath%3DBasic%2520Setup%7CPlayback%2520URLs%7C_____2",children:"Basic Setup > Playback URL's > Signing a Playback URL Tutorial"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Verizon-Media-specific documentation on the available playback URL query parameters can be found on the Verizon-Media-documentation site under ",(0,r.jsx)(n.a,{href:"https://docs.vdms.com/video/index.html#Setup/Customizing-Playback.htm%3FTocPath%3DBasic%2520Setup%7CPlayback%2520URLs%7C_____1",children:"Basic Setup > Playback URL's > Customizing Playback via Parameters"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Some parameters can be excluded from the digital signature calculation. These parameters may enable certain use cases (e.g. DVR) and would, for this reason, be excluded from the digital signature."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h5,{id:"roku-sdk",children:"Roku SDK"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-brightscript",children:'m.player.source = {\n  "sources": [\n    {\n      "assetType": "asset",\n      "contentProtected": false,\n      "id": "verizon-media_content_id",\n      "integration": "verizon-media",\n      "preplayParameters": []\n    }\n  ]\n}\n\nm.player.source = {\n  "sources": [\n    {\n      "assetType": "asset",\n      "contentProtected": false,\n      "id": "verizon-media_content_id",\n      "integration": "verizon-media",\n      "preplayParameters": [\n        { "delay": "7200" },\n        { "rays": "dcba" },\n        { "sig": "2ff94739b021912712adafeccd6fa291f11eef0648c3b18b30224b84e0590b4f"}\n      ]\n  ]\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"preplayParameters"}),": The ",(0,r.jsx)(n.code,{children:"preplayParameters"})," are used as query parameters for the Preplay API call and can be set in one of the following ways :","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"an object with string-key-string-value combinations"}),"\n",(0,r.jsx)(n.li,{children:"an array with objects containing string-key-string-value combination to maintain the order of the parameters as shown in the example above"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"stream-configuration-with-ads",children:"Stream Configuration (with ads)"}),"\n",(0,r.jsxs)(n.p,{children:["The examples below demonstrate how to configure a stream with server-side ads through a ",(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/VerizonMediaSource.html",children:"VerizonMediaSource"}),"."]}),"\n",(0,r.jsx)(n.h5,{id:"web-sdk-1",children:"Web SDK"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"player.source = {\n    sources: [{\n        integration: 'verizon-media',\n        id: ['verizonMedia_content_first', 'verizonMedia_ad_break_1', 'verizonMedia_content_middle', 'verizonMedia_ad_break_2', 'verizonMedia_content_last'],\n        preplayParameters: {\n            // Parameters here should specify the necessary ad parameters for the Preplay API\n            ad.param1: 'param_val1',\n            ad.param2: 'param_val2'\n        },\n    }]\n}\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"preplayParameters"}),": The ",(0,r.jsx)(n.code,{children:"preplayParameters"})," object should have string-key-string-value combinations, which will be used as query parameters for the Preplay API call. Nested objects are not supported."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"A Preplay request must include all parameters defined within the playback request, hence these parameters must be included in the THEOplayer source"}),". This request must also include a digital signature if the 'Require a token for playback' option is enabled in the back-end on the corresponding live channel. (See also : ",(0,r.jsx)(n.a,{href:"https://docs.vdms.com/video/index.html#Tutorials/Signed-Playback-URL-Tutorial.htm%3FTocPath%3DBasic%2520Setup%7CPlayback%2520URLs%7C_____2",children:"Basic Setup > Playback URL's > Signing a Playback URL Tutorial"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Verizon Media specific documentation on the available playback URL query parameters can be found on the Verizon Media documentation site under ",(0,r.jsx)(n.a,{href:"https://docs.vdms.com/video/index.html#Setup/Customizing-Playback.htm%3FTocPath%3DBasic%2520Setup%7CPlayback%2520URLs%7C_____1",children:"Basic Setup > Playback URL's > Customizing Playback via Parameters"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Some parameters can be excluded from the digital signature calculation. These parameters may enable certain use cases (e.g. DVR) and would for this reason be excluded from the digital signature."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h5,{id:"android-tv-sdk",children:"Android (TV) SDK"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'LinkedHashMap<String, String> orderedPreplayParameters = new LinkedHashMap<>();\norderedPreplayParameters.put("ad", "exampleadserver");\n\nVerizonMediaSource verizonMediaSource = new VerizonMediaSource.Builder(new String[]{"verizonMedia_content_first", "verizonMedia_ad_break_1", "verizonMedia_content_middle", "verizonMedia_ad_break_2", "verizonMedia_content_last"})\n    .orderedParameters(orderedPreplayParameters)\n    .build();\n'})}),"\n",(0,r.jsx)(n.h5,{id:"ios-tvos-sdk-1",children:"iOS (/tvOS) SDK"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:'let verizonMediaSource = VerizonMediaSource(\n    assetIds: [\n        "verizonMedia_content_first", "verizonMedia_ad_break_1", "verizonMedia_content_middle",\n        "verizonMedia_ad_break_2", "verizonMedia_content_last"\n    ],\n    orderedParameters: [("ad","exampleadserver")]\n)\n'})}),"\n",(0,r.jsx)(n.h5,{id:"roku-sdk-1",children:"Roku SDK"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-brightscript",children:'m.player.source = {\n  "sources": [\n    {\n      "assetType": "asset",\n      "contentProtected": false,\n      "id": "verizon-media_content_id",\n      "integration": "verizon-media",\n      "preplayParameters": [\n        // Parameters here should specify the necessary ad parameters for the Preplay API\n        {"ad.param1": "param_val1"},\n        {"ad.param2": "param_val2"}\n      ]\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"preplay-response",children:"Preplay Response"}),"\n",(0,r.jsxs)(n.p,{children:["THEOplayer automatically interprets the response returned by the Preplay service. However, if a developer wants to perform their own logic with the Preplay API response, then they can intercept the ",(0,r.jsx)(n.code,{children:"preplayresponse"})," event."]}),"\n",(0,r.jsx)(n.h5,{id:"web-sdk-2",children:"Web SDK"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const listener = (event) => {\n  console.log(\n    "Do something with the raw response of the Preplay API call",\n    event.response\n  );\n};\n\nplayer.verizonMedia.addEventListener("preplayresponse", listener);\n'})}),"\n",(0,r.jsx)(n.h5,{id:"android-tv-sdk-1",children:"Android (TV) SDK"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"EventListener<VerizonMediaPreplayResponseEvent> myListener = (VerizonMediaPreplayResponseEvent event) -> {\n    // Do something with the preplay response\n    event.getResponse();\n};\n\nthis.tpv.getPlayer().getVerizonMedia().addEventListener(VerizonMediaEventTypes.PREPLAYRESPONSE, myListener);\n"})}),"\n",(0,r.jsx)(n.h5,{id:"ios-tvos-sdk-2",children:"iOS (/tvOS) SDK"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:"let eventListener = self.theoplayer.verizonMedia.addEventListener(type: VerizonMediaEventTypes.VerizonMedia_PREPLAY_RESPONSE) { event in\n    // do something with the preplay response\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"using-tokens",children:"Using Tokens"}),"\n",(0,r.jsxs)(n.p,{children:["Verizon Media users often leverage URL signatures (i.e. tokens) to further secure their content -- on top of AES-128 encryption or studio DRM.\nA token is (typically) generated on back-end using an API key and a set of parameters.\n(The documentation at ",(0,r.jsx)(n.a,{href:"https://docs.vdms.com/video/index.html#Tutorials/Signed-Playback-URL-Tutorial.htm%3FTocPath%3DBasic%2520Setup%7CPlayback%2520URLs%7C_____2",children:"Basic Setup > Playback URL's > Signing a Playback URL Tutorial"})," describes this process.) This set of parameters should also be passed along to the ",(0,r.jsx)(n.code,{children:"preplayParameters"})," in a ",(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/VerizonMediaSource.html",children:"VerizonMediaSource"}),".\nIf you do not configure the ",(0,r.jsx)(n.code,{children:"preplayParameters"})," (or ",(0,r.jsx)(n.code,{children:"orderedParameters"}),") correctly in relation to your signature parameters, then the Preplay request made by THEOplayer will most likely return an invalid Preplay response, preventing THEOplayer from setting up your stream."]}),"\n",(0,r.jsxs)(n.p,{children:["Let's consider a set-up where a Verizon Media customer uses both URL signatures and multi-DRM.\n",(0,r.jsxs)(n.a,{href:"https://docs.vdms.com/video/index.html#Develop/Preplayv2.htm?Highlight=rmt",children:["When you do DRM, you must specify the ",(0,r.jsx)(n.code,{children:"rmt"})," and ",(0,r.jsx)(n.code,{children:"manifest"})," parameter"]}),",\n",(0,r.jsx)(n.strong,{children:"or"})," you can set ",(0,r.jsx)(n.code,{children:"allowrmt"})," to ",(0,r.jsx)(n.code,{children:"1"})," instead. We recommend using the latter, as demonstrated in our Node.js reference project at ",(0,r.jsx)(n.a,{href:"https://github.com/THEOplayer/theoplayer-verizon-media-node-js",children:"https://github.com/THEOplayer/theoplayer-verizon-media-node-js"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["So, let's say you want to generate a signature on your back-end that is compatible with HLS + FairPlay, MPEG-DASH + Widevine and MPEG-DASH + PlayReady,\nthen it could look like the snippet below using ",(0,r.jsx)(n.code,{children:"allowrmt"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'let params = {\n  v: "2",\n  tc: "1",\n  exp: 36000,\n  rn: 12345,\n  ct: "a",\n  cid: "<CENSORED>",\n  allowrmt: 1\n};\nlet query = Object.keys(params)\n  .map((key) => key + "=" + params[key])\n  .join("&");\nlet sig = CryptoJS.HmacSHA256(query, "<API_SECRET>").toString();\nparams["sig"] = sig;\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Now you want to communicate this entire ",(0,r.jsx)(n.code,{children:"params"})," object to your client-side, and set it as the value for ",(0,r.jsx)(n.code,{children:"preplayParameters"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'player.source = {\n  sources: {\n    integration: "verizon-media",\n    id: "<CENSORED>",\n    preplayParameters: params,\n    assetType: "asset",\n    contentProtected: true\n  }\n};\n'})}),"\n",(0,r.jsxs)(n.p,{children:["When there's a mismatch between signature parameters and Preplay parameters, the Preplay response usually returns ",(0,r.jsx)(n.code,{children:"Invalid token signature"})," and playback is not possible."]}),"\n",(0,r.jsxs)(n.p,{children:["Having difficulties figuring out tokens, DRM and THEOplayer? Check out the Node.js reference project at ",(0,r.jsx)(n.a,{href:"https://github.com/THEOplayer/theoplayer-verizon-media-node-js",children:"https://github.com/THEOplayer/theoplayer-verizon-media-node-js"}),"."]}),"\n",(0,r.jsx)(n.h1,{id:"related-articles",children:"Related articles"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-153/theoplayer/v6/how-to-guides/miscellaneous/verizon-media/ads",children:"Verizon Media - Ads"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-153/theoplayer/v6/how-to-guides/miscellaneous/verizon-media/ping",children:"Verizon Media - Ping"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>o});var r=a(96540);const t={},i=r.createContext(t);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);