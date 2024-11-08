"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86857],{74902:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=t(74848),a=t(28453);const l={},i="Getting started with Angular",s={id:"getting-started/frameworks/angular/getting-started",title:"Getting started with Angular",description:"A brief guide on how to build a THEOplayer in an Angular environment.",source:"@site/theoplayer/getting-started/02-frameworks/01-angular/00-getting-started.md",sourceDirName:"getting-started/02-frameworks/01-angular",slug:"/getting-started/frameworks/angular/getting-started",permalink:"/documentation/pr-preview/pr-155/theoplayer/getting-started/frameworks/angular/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer/getting-started/02-frameworks/01-angular/00-getting-started.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"web",previous:{title:"Deploying a test app on a Tizen emulator",permalink:"/documentation/pr-preview/pr-155/theoplayer/getting-started/sdks/tizen/setting-up-emulator"},next:{title:"Getting started with React",permalink:"/documentation/pr-preview/pr-155/theoplayer/getting-started/frameworks/react/getting-started"}},o={},c=[{value:"Step-by-step guide:",id:"step-by-step-guide",level:2},{value:"Related articles",id:"related-articles",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"getting-started-with-angular",children:"Getting started with Angular"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"A brief guide on how to build a THEOplayer in an Angular environment."})}),"\n",(0,r.jsx)(n.p,{children:"Note that this information is for a basic player in a local testing environment. Additional information may be needed for specific cases."}),"\n",(0,r.jsx)(n.h2,{id:"step-by-step-guide",children:"Step-by-step guide:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Make sure you have the Angular CLI installed"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm install -g @angular/cli\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If needed, create a new workspace and initial application\nng new appname"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"In the root project, create a new component for the player (in this case appname)"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"cd appname\nng generate component theoplayer\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"add the THEOplayer.js files to the root project"}),"\n",(0,r.jsx)(n.li,{children:"In index.html add the /THEOplayer.js as a script tag and /ui.css as a stylesheet"}),"\n",(0,r.jsx)(n.li,{children:"In theoplayer.component.html add"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<div class="theoplayer-container video-js theoplayer-skin"></div>\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"7",children:["\n",(0,r.jsx)(n.li,{children:"In theoplayer.component.ts add"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'import { Component, OnInit } from "@angular/core";\nimport * as THEOplayer from "../../../THEOplayer.js";\n\n@Component({\n  selector: "app-theoplayer",\n  templateUrl: "./theoplayer.component.html",\n  styleUrls: ["./theoplayer.component.css"]\n})\nexport class TheoplayerComponent implements OnInit {\n  constructor() {}\n\n  ngOnInit() {\n    this.createPlayer();\n  }\n\n  createPlayer() {\n    const element = document.querySelector(".theoplayer-container");\n\n    const player = new THEOplayer.Player(element, {\n      libraryLocation: ""\n    });\n\n    player.source = {\n      sources: [\n        {\n          src: "//cdn.theoplayer.com/video/elephants-dream/playlist.m3u8",\n          type: "application/x-mpegurl" // sets type to MPEG-DASH\n        }\n      ]\n    };\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Then"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'import * as THEOplayer from "../../../THEOplayer.js";\n'})}),"\n",(0,r.jsx)(n.p,{children:"will make sure to get everything needed from our sdk."}),"\n",(0,r.jsxs)(n.ol,{start:"9",children:["\n",(0,r.jsx)(n.li,{children:"In app.component.html add the following code to display the player in the app component."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<app-theoplayer></app-theoplayer>\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"10",children:["\n",(0,r.jsx)(n.li,{children:"Profit."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://angular.io/guide/quickstart",children:"https://angular.io/guide/quickstart"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var r=t(96540);const a={},l=r.createContext(a);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);