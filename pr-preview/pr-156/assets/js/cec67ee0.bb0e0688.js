"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["69517"],{19068:function(e,n,a){a.r(n),a.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>c,assets:()=>d,toc:()=>l,frontMatter:()=>o});var t=JSON.parse('{"id":"faq/how-to-use-media-session-api","title":"How to use the Media Session API","description":"Developers who implement the Media Session API give viewers the option to control and monitor media playback outside their web page.","source":"@site/theoplayer/faq/73-how-to-use-media-session-api.md","sourceDirName":"faq","slug":"/faq/how-to-use-media-session-api","permalink":"/documentation/pr-preview/pr-156/theoplayer/faq/how-to-use-media-session-api","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/faq/73-how-to-use-media-session-api.md","tags":[],"version":"current","sidebarPosition":73,"frontMatter":{},"sidebar":"faq","previous":{"title":"What are the Edgio challenges","permalink":"/documentation/pr-preview/pr-156/theoplayer/faq/what-are-the-edgio-challenges"},"next":{"title":"How to use THEOplayer iOS SDK on an M1 mac","permalink":"/documentation/pr-preview/pr-156/theoplayer/faq/how-to-use-theoplayer-ios-sdk-on-m1"}}'),s=a("85893"),i=a("50065");let o={},r="How to use the Media Session API",d={},l=[];function p(e){let n={a:"a",code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"how-to-use-the-media-session-api",children:"How to use the Media Session API"})}),"\n",(0,s.jsx)(n.p,{children:"Developers who implement the Media Session API give viewers the option to control and monitor media playback outside their web page.\nThe first screenshot below demonstrates how a viewer can play/resume/seek a video through their iOS home screen,\nand the second screenshot below demonstrates the same level of control on a macOS."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Media Session API iOS",src:a(50894).Z+"",width:"750",height:"1334"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Media Session API macOS",src:a(817).Z+"",width:"2880",height:"1800"})}),"\n",(0,s.jsxs)(n.p,{children:["The Media Session API is available on most modern desktop and mobile browsers as documented at ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Media_Session_API",children:"https://developer.mozilla.org/en-US/docs/Web/API/Media_Session_API"}),".\nThe W3C working draft of the Media Session standard is available at ",(0,s.jsx)(n.a,{href:"https://www.w3.org/TR/mediasession/",children:"https://www.w3.org/TR/mediasession/"}),"."]}),"\n",(0,s.jsx)(n.h1,{id:"how-to-implement-the-media-session-api-in-theoplayer",children:"How to implement the Media Session API in THEOplayer"}),"\n",(0,s.jsx)(n.p,{children:"We recommend developers to implement the Media Session API on top of the THEOplayer API in order to ensure the deepest level of control.\nA simple example is available below:"}),"\n",(0,s.jsxs)(n.p,{children:["First, define the metadata for your MediaSession: ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaSession/metadata",children:"see documentation here"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'const mediaSessionMetadata = {\n  title: "Sintel",\n  artist: "Blender",\n  album: "Movie",\n  artwork: [\n    {\n      src: "https://storage.googleapis.com/media-session/sintel/artwork-96.png",\n      sizes: "96x96",\n      type: "image/png"\n    },\n    {\n      src: "https://storage.googleapis.com/media-session/sintel/artwork-128.png",\n      sizes: "128x128",\n      type: "image/png"\n    },\n    {\n      src: "https://storage.googleapis.com/media-session/sintel/artwork-192.png",\n      sizes: "192x192",\n      type: "image/png"\n    },\n    {\n      src: "https://storage.googleapis.com/media-session/sintel/artwork-256.png",\n      sizes: "256x256",\n      type: "image/png"\n    },\n    {\n      src: "https://storage.googleapis.com/media-session/sintel/artwork-384.png",\n      sizes: "384x384",\n      type: "image/png"\n    },\n    {\n      src: "https://storage.googleapis.com/media-session/sintel/artwork-512.png",\n      sizes: "512x512",\n      type: "image/png"\n    }\n  ]\n};\n'})}),"\n",(0,s.jsx)(n.p,{children:"Then define a helper function that sets the metadata and attaches all EventListeners to the player.\nThe action handlers inside this function can be customized depending on your needs."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'function addMediaSessionEventListeners(player) {\n  const mediaSession = navigator.mediaSession;\n  if (mediaSession === undefined) {\n    return;\n  }\n  mediaSession.setActionHandler("play", () => player.play());\n  mediaSession.setActionHandler("pause", () => player.pause());\n  mediaSession.setActionHandler("seekto", (details) => {\n    if (isNaN(player.duration)) {\n      return;\n    }\n    player.currentTime = details.seekTime;\n  });\n  mediaSession.setActionHandler("seekbackward", function (details) {\n    if (isNaN(player.duration)) {\n      return;\n    }\n    player.currentTime = Math.max(\n      player.currentTime - (details.seekOffset ?? 10),\n      0\n    );\n  });\n  mediaSession.setActionHandler("seekforward", function (details) {\n    if (isNaN(player.duration)) {\n      return;\n    }\n    player.currentTime = Math.min(\n      player.currentTime + (details.seekOffset ?? 10),\n      player.duration\n    );\n  });\n  var updateMediaSession = function () {\n    if (isNaN(player.duration)) {\n      return;\n    }\n    mediaSession.playbackState = player.paused ? "paused" : "playing";\n    const seekableLength = player.seekable.length;\n    if (seekableLength === 0) {\n      return;\n    }\n    mediaSession.setPositionState({\n      duration: Math.max(\n        player.seekable.end(seekableLength - 1),\n        player.currentTime\n      ),\n      playbackRate: player.playbackRate,\n      position: player.currentTime\n    });\n  };\n  var onFirstPlaying = function () {\n    player.removeEventListener(["play", "playing"], onFirstPlaying);\n    // Set MediaSession metadata\n    if (mediaSessionMetadata !== undefined) {\n      mediaSession.metadata = new MediaMetadata(mediaSessionMetadata);\n    }\n    // Start monitoring player to update MediaSession\n    player.addEventListener(\n      ["play", "pause", "durationchange", "timeupdate", "ratechange"],\n      updateMediaSession\n    );\n  };\n  var onSourceChange = function () {\n    // Remove event listeners\n    player.removeEventListener(["play", "playing"], onFirstPlaying);\n    player.removeEventListener(\n      ["play", "pause", "durationchange", "timeupdate", "ratechange"],\n      updateMediaSession\n    );\n    // Reset MediaSession\n    mediaSession.metadata = undefined;\n    mediaSession.playbackState = "none";\n    // Wait for next source playback\n    player.addEventListener(["play", "playing"], onFirstPlaying);\n  };\n  player.addEventListener("sourcechange", onSourceChange);\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Finally, call the helper and set the source on your player that corresponds with the metadata:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'addMediaSessionEventListeners(player);\n\nplayer.source = {\n  sources: [\n    {\n      src: "https://cdn.theoplayer.com/video/sintel/nosubs.m3u8"\n    }\n  ]\n};\n'})}),"\n",(0,s.jsx)(n.h1,{id:"shareplay",children:"SharePlay"}),"\n",(0,s.jsxs)(n.p,{children:["Implementing the Media Session API is part of implementing ",(0,s.jsx)(n.a,{href:"https://developer.apple.com/shareplay/",children:"Apple's SharePlay feature"})," on Safari.\n",(0,s.jsx)(n.a,{href:"https://www.theoplayer.com/contact",children:"Contact us"})," if you're interested in building SharePlay experiences."]})]})}function c(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},50894:function(e,n,a){a.d(n,{Z:function(){return t}});let t=a.p+"assets/images/media-session-api-ios-e60ae898100d1ece8714233b635a35e3.png"},817:function(e,n,a){a.d(n,{Z:function(){return t}});let t=a.p+"assets/images/media-session-api-macos-b7572ea6aaf490644bcc1e8dfa1c97ef.png"},50065:function(e,n,a){a.d(n,{Z:function(){return r},a:function(){return o}});var t=a(67294);let s={},i=t.createContext(s);function o(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);