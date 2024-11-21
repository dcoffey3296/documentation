"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["50293"],{81335:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>c,assets:()=>r,toc:()=>d,frontMatter:()=>s});var i=JSON.parse('{"id":"how-to-guides/ads/customizing-the-ad-overlay-text","title":"Customizing the ad overlay text","description":"This guide explains how to customize the overlay text shown during an ad break. You may ask this question if you want to change the customize the styling or override the texts shown during an ad break.","source":"@site/theoplayer_versioned_docs/version-v7/how-to-guides/01-ads/02-customizing-the-ad-overlay-text.md","sourceDirName":"how-to-guides/01-ads","slug":"/how-to-guides/ads/customizing-the-ad-overlay-text","permalink":"/documentation/pr-preview/pr-163/theoplayer/v7/how-to-guides/ads/customizing-the-ad-overlay-text","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/how-to-guides/01-ads/02-customizing-the-ad-overlay-text.md","tags":[],"version":"v7","sidebarPosition":2,"frontMatter":{},"sidebar":"roku","previous":{"title":"Adblock detection","permalink":"/documentation/pr-preview/pr-163/theoplayer/v7/how-to-guides/ads/block-detection"},"next":{"title":"How to set up VAST and VMAP ads?","permalink":"/documentation/pr-preview/pr-163/theoplayer/v7/how-to-guides/ads/how-to-set-up-vast-and-vmap"}}'),o=t("85893"),a=t("50065");let s={},l="Customizing the ad overlay text",r={},d=[{value:"CSAI integration",id:"csai-integration",level:2},{value:"Changing or localizing the text",id:"changing-or-localizing-the-text",level:3},{value:"Changing the styling",id:"changing-the-styling",level:3},{value:"Google IMA/DAI",id:"google-imadai",level:2},{value:"Changing or localizing the text",id:"changing-or-localizing-the-text-1",level:3},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"iOS SDK",id:"ios-sdk",level:5},{value:"Changing the styling",id:"changing-the-styling-1",level:3},{value:"Web SDK",id:"web-sdk-1",level:5},{value:"Android SDK",id:"android-sdk-1",level:5},{value:"iOS SDK",id:"ios-sdk-1",level:5},{value:"Remarks",id:"remarks",level:2},{value:"Resources",id:"resources",level:2}];function h(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"customizing-the-ad-overlay-text",children:"Customizing the ad overlay text"})}),"\n",(0,o.jsx)(n.p,{children:"This guide explains how to customize the overlay text shown during an ad break. You may ask this question if you want to change the customize the styling or override the texts shown during an ad break."}),"\n",(0,o.jsx)(n.p,{children:"Depending on the ad integration kind you use, the steps to take differ."}),"\n",(0,o.jsx)(n.h2,{id:"csai-integration",children:"CSAI integration"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"csai"})," ",(0,o.jsx)(n.a,{href:"pathname:///theoplayer/v7/api-reference/web/types/AdIntegrationKind.html",children:"ad integration kind"})," is only available on Web SDK and allows customization."]}),"\n",(0,o.jsxs)(n.p,{children:["To customize the text here we will be leveraging the language localization mechanism. You can find the API we will be using ",(0,o.jsx)(n.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/UIConfiguration.html#language",children:"here"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"The second step is to customize the styling of texts. This can be done via CSS."}),"\n",(0,o.jsx)(n.h3,{id:"changing-or-localizing-the-text",children:"Changing or localizing the text"}),"\n",(0,o.jsx)(n.p,{children:'In this section, we will explain how to modify the text. We will take the countdown to the content text as an example (another ad overlay text is the "Skip ad" text, if any). When considering a new text to replace the original one, it is important to take into consideration its length (which should be determined accordingly to the available space) and how it is composed.'}),"\n",(0,o.jsx)(n.p,{children:'The current example is composed of 3 parts: one text ("The content will play in"), a dynamic countdown and another text ("seconds"). For this reason, when changing the text, both text parts need addressing.'}),"\n",(0,o.jsx)(n.p,{children:"An example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'var element = document.querySelector(\'.video-js\');\nconst player = new THEOplayer.Player(element, {\n    license: "your_license_here",\n    ui: {\n        // your other UI configuration\n        language: \'en\',\n        languages: { \'en\':\n            {\n                    "The content will play in": "Here your customized text",\n                    "seconds": "Here your customized text"\n                    // any other translation or text change\n          }\n        }\n    },\n    libraryLocation: \'https://example.com/\',\n    });\n'})}),"\n",(0,o.jsx)(n.h3,{id:"changing-the-styling",children:"Changing the styling"}),"\n",(0,o.jsx)(n.p,{children:"If you are interested in changing the aspect of the overlay or its content, you may do so applying the desired CSS properties to the concerned elements."}),"\n",(0,o.jsxs)(n.p,{children:["As mentioned, the following example is only valid for the ",(0,o.jsx)(n.code,{children:"csai"})," ad integration:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",children:"/* This modifies the countdown div */\n.theo-ad-remaining-container {\n  /* your styles here */\n}\n\n/* This modifies the skip ads div */\n.theoplayer-ad-skip {\n  /* your styles here */\n}\n\n/* this can also be further differentiated in 2 cases:*/\n\n/* the countdown */\n.theoplayer-ad-skip.theoplayer-ad-skip-countdown {\n  /* your styles here */\n}\n\n/* the button */\n.theoplayer-ad-skip.theoplayer-ad-skip-button {\n  /* your styles here */\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"google-imadai",children:"Google IMA/DAI"}),"\n",(0,o.jsx)(n.p,{children:"With Google IMA/DAI, it is not possible to directly edit the default UI. You can pass a locale to IMA to completely localize the ad UI. On the following sections we will explain the possibilities."}),"\n",(0,o.jsx)(n.h3,{id:"changing-or-localizing-the-text-1",children:"Changing or localizing the text"}),"\n",(0,o.jsx)(n.p,{children:"It is not possible to edit the texts on the default UI on Google IMA/DAI SDKs. However, you can pass a locale to IMA to completely localize its ad UI like the following:"}),"\n",(0,o.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"var element = document.querySelector('.video-js');\nconst player = new THEOplayer.Player(element, {\n    license: \"your_license_here\",\n    libraryLocation: 'https://example.com',\n    ads: {\n        googleIma: {\n            language: \"nl\"\n        }\n    }\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can find a list of locales supported by IMA SDK on web ",(0,o.jsx)(n.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/localization#locale-codes",children:"here"}),"."]}),"\n",(0,o.jsx)(n.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,o.jsxs)(n.p,{children:["You can pass ",(0,o.jsx)(n.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/android/client-side/api/reference/com/google/ads/interactivemedia/v3/api/ImaSdkSettings.html#setLanguage(java.lang.String)",children:"your preferred language"})," while adding the Google IMA integration to the player:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'private fun addGoogleImaIntegration() {\n    val settings = ImaSdkFactory.getInstance().createImaSdkSettings()\n    settings.language = "nl"\n\n    val imaIntegration = createGoogleImaIntegration(tpv!!, settings)\n\n    tpv?.player?.addIntegration(imaIntegration)\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["You can find a list of locales supported by IMA SDK on Android ",(0,o.jsx)(n.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/android/client-side/localization#locale-codes",children:"here"}),"."]}),"\n",(0,o.jsx)(n.h5,{id:"ios-sdk",children:"iOS SDK"}),"\n",(0,o.jsxs)(n.p,{children:["You can pass ",(0,o.jsx)(n.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/ios/client-side/reference/Classes/IMASettings#language",children:"your preferred language"})," while adding the Google IMA integration to the player:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-swift",children:'private func setupImaIntegration() {\n    let imaSettings = IMASettings()\n    imaSettings.language = "nl"\n        \n    let imaIntegration: GoogleImaIntegration = GoogleIMAIntegrationFactory.createIntegration(on: self.theoplayer!, with: imaSettings)\n\n    theoplayer.addIntegration(imaIntegration)\n    }\n'})}),"\n",(0,o.jsxs)(n.p,{children:["You can find a list of locales supported by IMA SDK on Android ",(0,o.jsx)(n.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/ios/client-side/localization#locale-codes",children:"here"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"changing-the-styling-1",children:"Changing the styling"}),"\n",(0,o.jsx)(n.h5,{id:"web-sdk-1",children:"Web SDK"}),"\n",(0,o.jsxs)(n.p,{children:["Currently it is not possible to customize the default UI on Google IMA/DAI SDKs on Web with the exception of toggling certain ",(0,o.jsx)(n.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima#.UiElements",children:"UiElements"}),". This can be done like the following:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"var element = document.querySelector('.video-js');\nconst player = new THEOplayer.Player(element, {\n    license: \"your_license_here\",\n    libraryLocation: 'https://example.com',\n    ads: {\n        googleIma: {\n              uiElements: [google.ima.UiElements.AD_ATTRIBUTION, google.ima.UiElements.COUNTDOWN]\n        }\n    }\n});\n"})}),"\n",(0,o.jsx)(n.h5,{id:"android-sdk-1",children:"Android SDK"}),"\n",(0,o.jsxs)(n.p,{children:["Please refer to the relevant ",(0,o.jsx)(n.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/android/client-side/custom-ui",children:"Google IMA guide"})," on how to disable the default UI and implement your own ad UI."]}),"\n",(0,o.jsx)(n.h5,{id:"ios-sdk-1",children:"iOS SDK"}),"\n",(0,o.jsxs)(n.p,{children:["Please refer to the relevant ",(0,o.jsx)(n.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/ios/client-side/custom-ui",children:"Google IMA guide"})," on how to disable the default UI and implement your own ad UI."]}),"\n",(0,o.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If you are using ",(0,o.jsx)(n.a,{href:"https://www.theoplayer.com/product/open-video-ui",children:"THEOplayer Open Video UI"}),", there could be alternative ways to edit certain elements depending on the platform and the ad integration kind used. For reference, you can find a demo for the ",(0,o.jsx)(n.code,{children:"csai"})," ad integration on Web SDK ",(0,o.jsx)(n.a,{href:"https://www.theoplayer.com/docs/open-video-ui/web/examples/ads/",children:"here"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"Why this ad?"})," text or the ",(0,o.jsx)(n.code,{children:"?"})," (question mark) icon that may appear while using the Google IMA/DAI integration is inserted by the IMA SDK itself and is required to be displayed with any ad that was not manually selected. The  icon is rendered as a VAST icon and is automatically generated by Ad Manager where required."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-163/theoplayer/v7/how-to-guides/ui/how-to-change-default-UI-language-to-other",children:"How to change the default UI language to other"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.theoplayer.com/theoplayer-demo-language-localization",children:"Language localization"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.theoplayer.com/theoplayer-demo-advertisement-tester-vpaid-vast-vmap",children:"THEOplayer advertisement tester"})}),"\n"]})]})}function c(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var i=t(67294);let o={},a=i.createContext(o);function s(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);