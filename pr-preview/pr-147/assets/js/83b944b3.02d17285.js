"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52978],{24906:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=i(74848),o=i(28453);const r={sidebar_label:"How-to-Guides"},s="How-to-Guides - Guidelines",l={id:"guidelines/how-to-guides",title:"How-to-Guides - Guidelines",description:"How-To-Guides explain how to use/implement a certain API/feature/SDK.",source:"@site/contributing/guidelines/how-to-guides.md",sourceDirName:"guidelines",slug:"/guidelines/how-to-guides",permalink:"/documentation/pr-preview/pr-147/contributing/guidelines/how-to-guides",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/contributing/guidelines/how-to-guides.md",tags:[],version:"current",frontMatter:{sidebar_label:"How-to-Guides"},sidebar:"contributionGuidelines",previous:{title:"FAQ",permalink:"/documentation/pr-preview/pr-147/contributing/guidelines/faq"},next:{title:"Knowledge Base",permalink:"/documentation/pr-preview/pr-147/contributing/guidelines/knowledge-base"}},a={},c=[{value:"The Concept",id:"the-concept",level:2},{value:"Naming the article and directories",id:"naming-the-article-and-directories",level:2},{value:"Writing the Article",id:"writing-the-article",level:2},{value:"Title of the Article",id:"title-of-the-article",level:3},{value:"Body of the Article",id:"body-of-the-article",level:3},{value:"Template",id:"template",level:3},{value:"Remarks",id:"remarks",level:3},{value:"Checklist",id:"checklist",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"how-to-guides---guidelines",children:"How-to-Guides - Guidelines"})}),"\n",(0,t.jsx)(n.p,{children:"How-To-Guides explain how to use/implement a certain API/feature/SDK."}),"\n",(0,t.jsx)(n.h2,{id:"the-concept",children:"The Concept"}),"\n",(0,t.jsx)(n.p,{children:"A how-to-guide is an advanced (or simple) tutorial on how to use and/or implement a certain API/feature related to a THEOplayer SDK."}),"\n",(0,t.jsx)(n.p,{children:"This type of article outlines what the feature is, and what it can be used for, on which SDKs it can be used, code examples (per SDK) demonstrating the implementation, and additional resources."}),"\n",(0,t.jsx)(n.h2,{id:"naming-the-article-and-directories",children:"Naming the article and directories"}),"\n",(0,t.jsx)(n.p,{children:"To define some order, we work with numerical prefixes for naming both directories and files."}),"\n",(0,t.jsxs)(n.p,{children:["The structure will always look like this: ",(0,t.jsx)(n.code,{children:"xx-directory/yy-directory/zz-filename.md"}),", with ",(0,t.jsx)(n.code,{children:"xx"}),", ",(0,t.jsx)(n.code,{children:"yy"})," and ",(0,t.jsx)(n.code,{children:"zz"})," being numbers."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Attention:"})," If you change a file or a directory name, you'll have to change this in every document too! Doing a right ",(0,t.jsx)(n.em,{children:"find & replace all"})," will do the trick."]}),"\n",(0,t.jsx)(n.h2,{id:"writing-the-article",children:"Writing the Article"}),"\n",(0,t.jsx)(n.h3,{id:"title-of-the-article",children:"Title of the Article"}),"\n",(0,t.jsx)(n.p,{children:"The title of the article should be:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"The name of the API,"}),"\n",(0,t.jsx)(n.li,{children:"Or the name of the use-case."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/theoplayer/how-to-guides/miscellaneous/up-next",children:"Up Next"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/theoplayer/how-to-guides/mediatrack/how-to-detect-audio-tracks",children:"How to programmatically detect audio tracks"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"body-of-the-article",children:"Body of the Article"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["The first paragraph of the body describes 1) what the article is about, 2) what you\u2019ll be leveraging and 3) why it is relevant.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If the article is an application / use-case of a certain API (i.e. a child page), then refer to the parent page for more explanation on the parent API \u2013 do not repeat what you can do with the API."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Next, you list the SDK table."}),"\n",(0,t.jsxs)(n.li,{children:["Then you provide more information on what you\u2019ll be explaining. This can be a pseudo-repeat of the first paragraph.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"In this section, you also put a \u201cCode Examples\u201d sub-header, where you list the implementation per SDK. You must provide every implementation if it\u2019s already in production."}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"The reason you sort of rephrase what you\u2019re doing, is because in some tutorials, you\u2019re explaining multiple (sub) use-cases."})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Then a \u201cSample Applications\u201d section follows, if applicable.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"In this section you link to a code project / online demo page which further demonstrates the use-case."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Then a \u201cRemarks\u201d section follows, if applicable.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This section can be used to inform the reader on interesting information, limitations, etc."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Then a \u201cResources\u201d section follows, if applicable.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This section can be used to link to relevant blog posts, industry papers, etc."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"template",children:"Template"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"# Title of the Document\n\nThe first paragraph of the body describes\n\n1. what the article is about,\n2. what you\u2019ll be leveraging and\n3. why it is relevant.\n\n_Don't forget to review links!:_ For links to other documents and assets, use relative links. For API references, use the absolute link to https://docs.theoplayer.com/api-reference/web/.\n\n## SDKs\n\n| Web SDK | Android SDK | iOS SDK | Android TV SDK | tvOS SDK | Chromecast SDK |\n| ------- | ----------- | ------- | -------------- | -------- | -------------- |\n| Yes/No  | Yes/No      | Yes/No  | Yes/No         | Yes/No   | Yes/No         |\n\n## Alternative description for use-case\n\nAlternative information on the use-case.\n\n_Don't forget to update title of this section!_\n\n## Code Examples\n\nThe code example below does X...\n\n    ```js\n    // some code. Use java, swift, ... instead of js if needed.\n    ```\n\n### Web SDK\n\nSpecific code for the Web SDK.\n\n    ```js\n    // Code HTML5\n    ```\n\nNote: we use 5 # here, it will have a different style on Gatsby so it pops out\n\n### Android SDK\n\n    ```java\n    // Code Android\n    ```\n\n## Sample Applications\n\nThe sample application below demonstates how to do X.\n\n- Code: (if applicable)\n- Demo: (if applicable)\n\n## Remarks\n\nThe following remarks can help:\n\n- Limitation 1\n- Something\n\n## Resources\n\nThe following resources provide more information:\n\n- https://developers.google.com/youtube/terms/api-services-terms-of-service\n- https://developers.google.com/youtube/terms/required-minimum-functionality\n- https://developers.google.com/youtube/terms/developer-policies\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Markdown Template available ",(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-147/contributing/templates/how-to-guides",children:"here"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/theoplayer/how-to-guides/miscellaneous/up-next",children:"Up Next"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/theoplayer/how-to-guides/mediatrack/how-to-detect-audio-tracks",children:"How to programmatically detect audio tracks"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You may use images to further illustrate the topic."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"checklist",children:"Checklist"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The template is respected."}),"\n",(0,t.jsx)(n.li,{children:"The article is in the correct category on Confluence."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var t=i(96540);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);