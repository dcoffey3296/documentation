"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[69132],{89385:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=t(74848),s=t(28453);const a={},l="How to implement Keyboard Hotkeys",o={id:"getting-started/sdks/web/how-to-implement-hotkeys",title:"How to implement Keyboard Hotkeys",description:"This how-to guide describes how you can implement keyboard shortcuts in THEOplayer.",source:"@site/theoplayer/getting-started/01-sdks/01-web/02-how-to-implement-hotkeys.md",sourceDirName:"getting-started/01-sdks/01-web",slug:"/getting-started/sdks/web/how-to-implement-hotkeys",permalink:"/documentation/pr-preview/pr-142/theoplayer/getting-started/sdks/web/how-to-implement-hotkeys",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer/getting-started/01-sdks/01-web/02-how-to-implement-hotkeys.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"web",previous:{title:"API examples",permalink:"/documentation/pr-preview/pr-142/theoplayer/getting-started/sdks/web/api-examples"},next:{title:"How to embed an iframe",permalink:"/documentation/pr-preview/pr-142/theoplayer/getting-started/sdks/web/how-can-we-embed-iframe"}},i={},d=[{value:"TLDR:",id:"tldr",level:2},{value:"List of Hotkeys",id:"list-of-hotkeys",level:2},{value:"Step-by-step Guide",id:"step-by-step-guide",level:2},{value:"1. THEOplayer-wrapper",id:"1-theoplayer-wrapper",level:3},{value:"2. JavaScript",id:"2-javascript",level:3},{value:"2.1 Disabling Default browser hotkeys",id:"21-disabling-default-browser-hotkeys",level:3},{value:"preventStandardHotKeyActions()",id:"preventstandardhotkeyactions",level:4},{value:"2.2 Pause and Play",id:"22-pause-and-play",level:3},{value:"togglePlay()",id:"toggleplay",level:4},{value:"2.3 Rewinding and Skipping",id:"23-rewinding-and-skipping",level:3},{value:"rewind()",id:"rewind",level:4},{value:"forward()",id:"forward",level:4},{value:"2.4 Volume Settings",id:"24-volume-settings",level:3},{value:"increaseVolume()",id:"increasevolume",level:4},{value:"decreaseVolume():",id:"decreasevolume",level:4},{value:"2.5 Toggle Fullscreen",id:"25-toggle-fullscreen",level:3},{value:"toggleFullScreen()",id:"togglefullscreen",level:4},{value:"2.6 Toggle Mute",id:"26-toggle-mute",level:3},{value:"toggleMute()",id:"togglemute",level:4},{value:"2.7 KeyPressed Event",id:"27-keypressed-event",level:3},{value:"getPressedKey()",id:"getpressedkey",level:4},{value:"2.8 Enable hotkeys with focus",id:"28-enable-hotkeys-with-focus",level:3},{value:"playerFocused():",id:"playerfocused",level:4},{value:"2.9 Enable Hotkeys on mouseEnter",id:"29-enable-hotkeys-on-mouseenter",level:3},{value:"mouseInPlayer()",id:"mouseinplayer",level:4},{value:"mouseOutPlayer()",id:"mouseoutplayer",level:4},{value:"3.0 Enabling the Hotkeys",id:"30-enabling-the-hotkeys",level:3},{value:"enableShortcuts()",id:"enableshortcuts",level:4},{value:"Full JavaScript Code Example",id:"full-javascript-code-example",level:2},{value:"Additional Resources",id:"additional-resources",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"how-to-implement-keyboard-hotkeys",children:"How to implement Keyboard Hotkeys"})}),"\n",(0,r.jsx)(n.p,{children:"This how-to guide describes how you can implement keyboard shortcuts in THEOplayer.\nHotkeys allow viewers to also control THEOplayer functionality by using their keyboard."}),"\n",(0,r.jsx)(n.h2,{id:"tldr",children:"TLDR:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Add an id attribute to the player element in your HTML."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Copy, Paste"})," and ",(0,r.jsx)(n.strong,{children:"Link"})," ",(0,r.jsx)(n.a,{href:"#full-javascript-code-example",children:"this script"})," in your HTML to enable the following set of hotkeys."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"list-of-hotkeys",children:"List of Hotkeys"}),"\n",(0,r.jsx)(n.p,{children:"Keyboard hotkeys are not an 'out-of-the-box' feature provided by THEOplayer.\nThis means you'll have to insert a bit of custom code to enable this functionality."}),"\n",(0,r.jsx)(n.p,{children:"The script below will implement the following shortcuts:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Spacebar : Toggles between Pause and Play."}),"\n",(0,r.jsx)(n.li,{children:"Left Arrow: Rewinds the video. (default: 5s)"}),"\n",(0,r.jsx)(n.li,{children:"Right Arrow: Forwards the video. (default: 5s)"}),"\n",(0,r.jsx)(n.li,{children:"Up Arrow: Increases the volume."}),"\n",(0,r.jsx)(n.li,{children:"Down Arrow: Lowers the volume."}),"\n",(0,r.jsx)(n.li,{children:"' F ' Key: Toggles fullscreen mode."}),"\n",(0,r.jsx)(n.li,{children:"' M ' Key: Toggles audio mute."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"step-by-step-guide",children:"Step-by-step Guide"}),"\n",(0,r.jsx)(n.h3,{id:"1-theoplayer-wrapper",children:"1. THEOplayer-wrapper"}),"\n",(0,r.jsx)(n.p,{children:"Because the hotkeys we're about to include also have default browser functionality\n(e.g. space bar skipping down the page),\nwe have two options:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Disable default browser hotkeys\nand overwrite them with our custom player hotkeys."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Enable THEOplayer hotkeys only when the viewer's mouse is inside the player area or when the player is focused."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Start by adding an id attribute to the player element in your HTML:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<div id="yourPlayerId" class="video-js theoplayer-skin"></div>\n'})}),"\n",(0,r.jsx)(n.h3,{id:"2-javascript",children:"2. JavaScript"}),"\n",(0,r.jsx)(n.p,{children:"Make a new JavaScript file and include it to your project with the rest of your scripts."}),"\n",(0,r.jsx)(n.p,{children:"First off we're going to make a variable that holds the element in which we want to check for user interaction."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'const wrapper = document.getElementById("yourPlayerId");\n'})}),"\n",(0,r.jsx)(n.p,{children:"Next up are the individual functions:"}),"\n",(0,r.jsx)(n.h3,{id:"21-disabling-default-browser-hotkeys",children:"2.1 Disabling Default browser hotkeys"}),"\n",(0,r.jsx)(n.h4,{id:"preventstandardhotkeyactions",children:"preventStandardHotKeyActions()"}),"\n",(0,r.jsxs)(n.p,{children:["With event",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault",children:".preventDefault()"})," we prevent the pressed key from performing their default browser functionality."]}),"\n",(0,r.jsx)(n.p,{children:"In our case this will disable the 'keydown' event if conditions are met."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"function preventStandardHotKeyActions(event) {\n  event.stopPropagation();\n  event.preventDefault();\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"22-pause-and-play",children:"2.2 Pause and Play"}),"\n",(0,r.jsx)(n.h4,{id:"toggleplay",children:"togglePlay()"}),"\n",(0,r.jsx)(n.p,{children:"Switches between pausing and playing the video. This function is triggered by pressing the spacebar."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"function togglePlay() {\n  if (player.paused) {\n    player.play();\n  } else {\n    player.pause();\n  }\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"23-rewinding-and-skipping",children:"2.3 Rewinding and Skipping"}),"\n",(0,r.jsx)(n.h4,{id:"rewind",children:"rewind()"}),"\n",(0,r.jsx)(n.p,{children:"Rewinds the video 5 seconds (default) back in time when triggered."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"function rewind() {\n  player.currentTime -= 5; //Subtracts 5 seconds\n}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"forward",children:"forward()"}),"\n",(0,r.jsx)(n.p,{children:"Skips the video 5 seconds (default) forward in time when triggered."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"function forward() {\n  player.currentTime += 5; //Adds 5 seconds\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"24-volume-settings",children:"2.4 Volume Settings"}),"\n",(0,r.jsx)(n.h4,{id:"increasevolume",children:"increaseVolume()"}),"\n",(0,r.jsx)(n.p,{children:"Increases the THEOplayer's volume in 5% increments (default)."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"function increaseVolume() {\n  player.volume = Math.min(player.volume + 0.05, 1); //Increases volume by 5%\n}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"decreasevolume",children:"decreaseVolume():"}),"\n",(0,r.jsx)(n.p,{children:"Lowers the THEOplayer's volume in 5% increments (default)."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"function decreaseVolume() {\n  player.volume = Math.max(player.volume - 0.05, 1); //Lowers volume by 5%\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"25-toggle-fullscreen",children:"2.5 Toggle Fullscreen"}),"\n",(0,r.jsx)(n.h4,{id:"togglefullscreen",children:"toggleFullScreen()"}),"\n",(0,r.jsx)(n.p,{children:"Checks what presentation mode THEOplayer is in and switches the presentation mode to 'fullscreen' or 'inline' accordingly."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'function toggleFullScreen() {\n  if (player.presentation.currentMode === "fullscreen") {\n    player.presentation.requestMode("inline");\n  } else {\n    player.presentation.requestMode("fullscreen");\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"26-toggle-mute",children:"2.6 Toggle Mute"}),"\n",(0,r.jsx)(n.h4,{id:"togglemute",children:"toggleMute()"}),"\n",(0,r.jsx)(n.p,{children:"Turns THEOplayer's audio on or off."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"function toggleMute() {\n  player.muted = !player.muted;\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"27-keypressed-event",children:"2.7 KeyPressed Event"}),"\n",(0,r.jsx)(n.h4,{id:"getpressedkey",children:"getPressedKey()"}),"\n",(0,r.jsxs)(n.p,{children:["This function gets the 'key' property of the event object that triggered it (In our case a 'keydown' event). ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values",children:"List of Key values"})]}),"\n",(0,r.jsx)(n.p,{children:"Start by initiating a variable for any key's that are pressed ('pressedKey') and a variable called 'action' that's going to call one of the functions we made earlier."}),"\n",(0,r.jsx)(n.p,{children:"Next we make a switch case where we check the event's 'key' property for the ones we want to catch (e.g. ArrowLeft, \" \" for space, ... etc).\nIf there's a match, we assign the corresponding function to 'action' to call after our conditions have been met."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'function getPressedKey(event) {\n  const pressedKey = event.key;\n  let action;\n  switch (pressedKey) {\n    case " ":\n      action = togglePlay(); //Pauses or Unpauses with Space\n      break;\n    case "ArrowLeft":\n      action = rewind(); //Rewinds the video with the Left Arrow Key\n      break;\n    case "ArrowRight":\n      action = forward(); //Forwards the video with the Right Arrow Key\n      break;\n    case "ArrowUp":\n      action = increaseVolume(); //Increases volume with the Up Arrow Key\n      break;\n    case "ArrowDown":\n      action = decreaseVolume(); //Lowers volume with the Down Arrow Key\n      break;\n    case "f":\n      action = toggleFullScreen(); //Toggle Fullscreen mode with the \'F\' Key\n      break;\n    case "m":\n      action = toggleMute(); //Toggle Mute with the \'M\' Key\n      break;\n  }\n  if (\n    action &&\n    pressedKey !== "Control" &&\n    pressedKey !== "Alt" &&\n    pressedKey !== "Shift"\n  ) {\n    action();\n    preventStandardHotKeyActions(event); //Stops the default key behavior like jumping the page with space.\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"28-enable-hotkeys-with-focus",children:"2.8 Enable hotkeys with focus"}),"\n",(0,r.jsx)(n.h4,{id:"playerfocused",children:"playerFocused():"}),"\n",(0,r.jsx)(n.p,{children:"Next we will allow the use of the THEOplayer hotkeys whenever the active element on the site is an element inside the player."}),"\n",(0,r.jsx)(n.p,{children:"Any element that the user interacts with is set to be the active element. (e.g.: pressing a button with the mouse or by selecting something with tab for example.)"}),"\n",(0,r.jsx)(n.p,{children:"The snippet below will catch when the active element changes. If this element is part of the THEOplayer, we will enable the use of player hotkeys."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'function playerFocused() {\n  if (wrapper.contains(document.activeElement)) {\n    document.addEventListener("keydown", getPressedKey);\n  } else {\n    document.removeEventListener("keydown", getPressedKey);\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"29-enable-hotkeys-on-mouseenter",children:"2.9 Enable Hotkeys on mouseEnter"}),"\n",(0,r.jsx)(n.p,{children:"Since browsers have default hotkey functionality (like skipping down the page by pressing space), you may only want to allow the use of the hotkeys whenever the viewer is actively watching the player."}),"\n",(0,r.jsx)(n.p,{children:"The following functions will handle that use-case."}),"\n",(0,r.jsx)(n.h4,{id:"mouseinplayer",children:"mouseInPlayer()"}),"\n",(0,r.jsx)(n.p,{children:"Gets called when a viewer enters the specified wrapper area with their cursor."}),"\n",(0,r.jsx)(n.p,{children:"Creates an eventListener for both 'keydown' events and when the viewer's mouse leaves the wrapper area we specified at the beginning."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'function mouseInPlayer() {\n  //Adds listeners for the keydown event and mouse leave event\n  document.addEventListener("keydown", getPressedKey);\n  wrapper.addEventListener("mouseleave", mouseOutPlayer);\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"mouseoutplayer",children:"mouseOutPlayer()"}),"\n",(0,r.jsx)(n.p,{children:"Gets called when a viewer exits the wrapper area."}),"\n",(0,r.jsx)(n.p,{children:"When the viewer has left the wrapper area, the unused eventListeners are removed."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'function mouseOutPlayer() {\n  //Checks if the mouse leaves the player wrapper area\n  wrapper.removeEventListener("mouseleave", mouseOutPlayer);\n  document.removeEventListener("keydown", getPressedKey);\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"30-enabling-the-hotkeys",children:"3.0 Enabling the Hotkeys"}),"\n",(0,r.jsx)(n.h4,{id:"enableshortcuts",children:"enableShortcuts()"}),"\n",(0,r.jsx)(n.p,{children:"This function lets you choose between enabling the hotkeys site-wide, or only enabling them when the viewer's mouse is inside the player or the player is focused."}),"\n",(0,r.jsx)(n.p,{children:"When calling this function you can use:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"enableShortcuts();"})," -To enable THEOplayer hotkeys site-wide."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"enableShortcuts('mouseOver');"})," -To enable THEOplayer hotkeys when the viewer's mouse is inside the specified area."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'function enableShortcuts(method) {\n  switch (method) {\n    case "mouseOver": //If the param reads \'mouseOver\' shortcuts are only enabled when the mouse is inside of the player.\n      wrapper.addEventListener("mouseenter", mouseInPlayer);\n      break;\n    case "playerFocused": //If the param reads \'playerFocused\' shortcuts are only enabled when the player is focused.\n      document.addEventListener("focus", playerFocused, true);\n      break;\n    default:\n      document.addEventListener("keydown", getPressedKey); //Else player shortcuts are always enabled.\n  }\n}\nenableShortcuts("mouseOver");\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"full-javascript-code-example",children:"Full JavaScript Code Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'const wrapper = document.getElementById("yourPlayerId");\nconst element = document.querySelector(".video-js");\n\nconst player = new THEOplayer.Player(element, {\n  ui: {\n    fluid: true\n  },\n  libraryLocation: "/YourTHEOplayerLibraryLocation/",\n  license: "your-license-here"\n});\n\nplayer.source = {\n  sources: ["https://example.mpd"],\n  metadata: {\n    images: [\n      {\n        src: "https://thumbnail.jpg"\n      }\n    ],\n    releaseDate: "2014-10-31",\n    releaseYear: 2014,\n    subtitle: "My movie subtitle",\n    title: "My movie",\n    type: "movie"\n  }\n};\n\nfunction togglePlay() {\n  if (player.paused) {\n    player.play();\n  } else {\n    player.pause();\n  }\n}\n\nfunction rewind() {\n  player.currentTime -= 5; //Subtracts 5 seconds\n}\n\nfunction forward() {\n  player.currentTime += 5; //Adds 5 seconds\n}\n\nfunction increaseVolume() {\n  player.volume = Math.min(player.volume + 0.05, 1); //Increases volume by 5%\n}\n\nfunction decreaseVolume() {\n  player.volume = Math.max(player.volume - 0.05, 1); //Lowers volume by 5%\n}\n\nfunction toggleFullScreen() {\n  if (player.presentation.currentMode === "fullscreen") {\n    player.presentation.requestMode("inline");\n  } else {\n    player.presentation.requestMode("fullscreen");\n  }\n}\n\nfunction toggleMute() {\n  player.muted = !player.muted;\n}\n\nfunction preventStandardHotKeyActions(event) {\n  event.stopPropagation();\n  event.preventDefault();\n}\n\nfunction getPressedKey(event) {\n  const pressedKey = event.key;\n  let action;\n  switch (pressedKey) {\n    case " ":\n      action = togglePlay(); //Pauses or Unpauses with Space\n      break;\n    case "ArrowLeft":\n      action = rewind(); //Rewinds the video with the Left Arrow Key\n      break;\n    case "ArrowRight":\n      action = forward(); //Forwards the video with the Right Arrow Key\n      break;\n    case "ArrowUp":\n      action = increaseVolume(); //Increases volume with the Up Arrow Key\n      break;\n    case "ArrowDown":\n      action = decreaseVolume(); //Lowers volume with the Down Arrow Key\n      break;\n    case "f":\n      action = toggleFullScreen(); //Toggle Fullscreen mode with the \'F\' Key\n      break;\n    case "m":\n      action = toggleMute(); //Toggle Mute with the \'M\' Key\n      break;\n  }\n  if (\n    action &&\n    pressedKey !== "Control" &&\n    pressedKey !== "Alt" &&\n    pressedKey !== "Shift"\n  ) {\n    action();\n    preventStandardHotKeyActions(event); //Stops the default key behavior like jumping the page with space.\n  }\n}\n\nfunction playerFocused() {\n  if (wrapper.contains(document.activeElement)) {\n    document.addEventListener("keydown", getPressedKey);\n  } else {\n    document.removeEventListener("keydown", getPressedKey);\n  }\n}\n\nfunction mouseInPlayer() {\n  //Checks if the mouse is inside the player wrapper area\n  document.addEventListener("keydown", getPressedKey);\n  wrapper.addEventListener("mouseleave", mouseOutPlayer);\n}\n\nfunction mouseOutPlayer() {\n  //Checks if the mouse leaves the player wrapper area\n  wrapper.removeEventListener("mouseleave", mouseOutPlayer);\n  document.removeEventListener("keydown", getPressedKey);\n}\n\nfunction enableShortcuts(method) {\n  switch (method) {\n    case "mouseOver": //If the param reads \'mouseOver\' shortcuts are only enabled when the mouse is inside of the player.\n      wrapper.addEventListener("mouseenter", mouseInPlayer);\n      break;\n    case "playerFocused": //If the param reads \'playerFocused\' shortcuts are only enabled when the player is focused.\n      document.addEventListener("focus", playerFocused, true);\n      break;\n    default:\n      document.addEventListener("keydown", getPressedKey); //Else player shortcuts are always enabled.\n  }\n}\n\n//enableShortcuts(\'mouseOver\');    //Enable player shortcuts only when mouse inside the player area.\nenableShortcuts(); //Always enable shortcuts.\n'})}),"\n",(0,r.jsx)(n.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault",children:"preventDefault()"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation",children:"stopPropagation()"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values",children:"List of Key values"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(96540);const s={},a=r.createContext(s);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);