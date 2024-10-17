"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[59902],{37324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>w,frontMatter:()=>y,metadata:()=>b,toc:()=>x});var a=n(74848),i=n(28453),o=n(93705),s=n(21432),l=n(28774),r=n(86025);const c={player:"player_QxyO"},h="import { Button, buttonTemplate } from '@theoplayer/web-ui';\n\n// This <template> contains the content of our custom button.\n// Its contents will be cloned into every <my-play-button>.\nconst template = document.createElement('template');\ntemplate.innerHTML = buttonTemplate('Play');\n\n// Define a new class for our custom element.\n// We extend the `Button` class from Open Video UI for Web,\n// so we can inherit some logic and styles.\nexport class MyPlayButton extends Button {\n    constructor() {\n        // Pass our custom template to the super constructor.\n        super({ template });\n    }\n\n    // This method is called whenever the button gets clicked.\n    handleClick() {\n        alert('My play button was clicked!');\n    }\n}\n\n// Define our class as the constructor for our custom element.\n// This allows us to use <my-play-button> anywhere in our HTML.\ncustomElements.define('my-play-button', MyPlayButton);\n",u="import { Button, buttonTemplate, StateReceiverMixin } from '@theoplayer/web-ui';\n\nconst template = document.createElement('template');\n// Wrap the \"Play\" text in a <span>, so we can query and modify it later.\ntemplate.innerHTML = buttonTemplate('<span>Play</span>');\n\nexport class MyPlayButton extends StateReceiverMixin(Button, ['player']) {\n    constructor() {\n        super({ template });\n        this._buttonSpan = this.shadowRoot.querySelector('span');\n    }\n\n    get player() {\n        return this._player;\n    }\n    set player(player) {\n        this._player = player;\n        console.log('My play button received a player!');\n    }\n\n    // highlight-start\n    handleClick() {\n        if (!this._player) {\n            // Not (yet) attached to a player.\n            return;\n        }\n        // Toggle the player's playing state,\n        // and update the text inside the <span>.\n        if (this._player.paused) {\n            this._player.play();\n            this._buttonSpan.textContent = 'Pause';\n        } else {\n            this._player.pause();\n            this._buttonSpan.textContent = 'Play';\n        }\n    }\n    // highlight-end\n}\n\ncustomElements.define('my-play-button', MyPlayButton);\n",p="// This <template> contains the content of our custom label.\n// Its contents will be cloned into every <my-quality-label>.\nconst template = document.createElement('template');\ntemplate.innerHTML = `\n<style>\n/* This rule targets the element itself, i.e. <my-quality-label> */\n:host {\n    /* Use the same text and background color as the rest of the UI controls */\n    color: var(--theoplayer-text-color, #fff);\n    background: var(--theoplayer-control-background, transparent);\n    \n    /* Add some padding */\n    padding: var(--theoplayer-control-padding, 10px);\n}\n</style>\n<span></span>\n`;\n\n// Define a new class for our custom element.\nexport class MyQualityLabel extends HTMLElement {\n    constructor() {\n        super();\n\n        // Create a shadow root, and clone our template into it\n        const shadowRoot = this.attachShadow({ mode: 'open' });\n        shadowRoot.appendChild(template.content.cloneNode(true));\n\n        // Show something (for testing)\n        this._labelSpan = shadowRoot.querySelector('span');\n        this._labelSpan.textContent = '1080p';\n    }\n}\n\n// Define our class as the constructor for our custom element.\n// This allows us to use <my-quality-label> anywhere in our HTML.\ncustomElements.define('my-quality-label', MyQualityLabel);\n",d="import { StateReceiverMixin } from '@theoplayer/web-ui';\n\nconst template = document.createElement('template');\ntemplate.innerHTML = `\n<style>\n:host {\n    color: var(--theoplayer-text-color, #fff);\n    background: var(--theoplayer-control-background, transparent);\n    padding: var(--theoplayer-control-padding, 10px);\n}\n</style>\n<span></span>\n`;\n\nexport class MyQualityLabel extends StateReceiverMixin(HTMLElement, ['player']) {\n    constructor() {\n        super();\n        const shadowRoot = this.attachShadow({ mode: 'open' });\n        shadowRoot.appendChild(template.content.cloneNode(true));\n        this._labelSpan = shadowRoot.querySelector('span');\n        this._labelSpan.textContent = '';\n    }\n\n    get player() {\n        return this._player;\n    }\n    set player(player) {\n        if (this._player) {\n            // Clean up\n            this._player.videoTracks.removeEventListener('addtrack', this.handleAddTrack);\n            this.updateActiveTrack(undefined);\n        }\n        this._player = player;\n        if (this._player) {\n            // highlight-start\n            // Listen for the 'addtrack' event\n            this._player.videoTracks.addEventListener('addtrack', this.handleAddTrack);\n            // If the player already has an active video track,\n            // start using it right away!\n            if (this._player.videoTracks.length > 0) {\n                this.updateActiveTrack(this._player.videoTracks[0]);\n            }\n            // highlight-end\n        }\n    }\n\n    handleAddTrack = (event) => {\n        this.updateActiveTrack(event.track);\n    };\n    updateActiveTrack(track) {\n        if (this._activeVideoTrack) {\n            // Clean up\n            this._activeVideoTrack.removeEventListener('activequalitychanged', this.handleActiveQualityChanged);\n        }\n        this._activeVideoTrack = track;\n        if (this._activeVideoTrack) {\n            // highlight-start\n            // Listen for the 'activequalitychanged' event\n            this._activeVideoTrack.addEventListener('activequalitychanged', this.handleActiveQualityChanged);\n            // If the track already has an active quality,\n            // start using it right away!\n            if (this._activeVideoTrack.activeQuality) {\n                this.updateActiveTrack(this._activeVideoTrack.activeQuality);\n            }\n            // highlight-end\n        }\n    }\n\n    handleActiveQualityChanged = (event) => {\n        this.updateActiveQuality(event.quality);\n    };\n    updateActiveQuality(quality) {\n        // highlight-start\n        if (quality) {\n            // Show the quality's height in our <span>\n            this._labelSpan.textContent = `${quality.height}p`;\n        } else {\n            // No active quality yet...\n            this._labelSpan.textContent = '';\n        }\n        // highlight-end\n    }\n}\n\ncustomElements.define('my-quality-label', MyQualityLabel);\n",y={description:"Build a custom button component that integrates with the player, and which you can use in your own custom UI.",sidebar_position:2,slug:"/web/guides/custom-component"},m="Making a custom component",b={id:"external/web-ui/docs/guides/custom-component",title:"Making a custom component",description:"Build a custom button component that integrates with the player, and which you can use in your own custom UI.",source:"@site/open-video-ui/external/web-ui/docs/guides/custom-component.mdx",sourceDirName:"external/web-ui/docs/guides",slug:"/web/guides/custom-component",permalink:"/documentation/pr-preview/pr-144/open-video-ui/web/guides/custom-component",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/web-ui/blob/-/docs/guides/custom-component.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Build a custom button component that integrates with the player, and which you can use in your own custom UI.",sidebar_position:2,slug:"/web/guides/custom-component"},sidebar:"web",previous:{title:"Making a custom UI",permalink:"/documentation/pr-preview/pr-144/open-video-ui/web/guides/custom-ui"},next:{title:"Examples",permalink:"/documentation/pr-preview/pr-144/open-video-ui/web/examples"}},g={},x=[{value:"A custom play button",id:"a-custom-play-button",level:2},{value:"Step 1: Create a custom button",id:"step-1-create-a-custom-button",level:3},{value:"Step 2: Integrate with the backing player",id:"step-2-integrate-with-the-backing-player",level:3},{value:"A custom quality label",id:"a-custom-quality-label",level:2},{value:"Step 1: Create a custom component",id:"step-1-create-a-custom-component",level:3},{value:"Step 2: Listen to quality changes",id:"step-2-listen-to-quality-changes",level:3}];function v(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"making-a-custom-component",children:"Making a custom component"})}),"\n","\n",(0,a.jsx)(t.h2,{id:"a-custom-play-button",children:"A custom play button"}),"\n",(0,a.jsx)(t.p,{children:"First, we'll build a simple button that plays or pauses the player when clicked."}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["The built-in ",(0,a.jsx)(t.a,{href:"https://theoplayer.github.io/web-ui/api/classes/PlayButton.html",children:(0,a.jsx)(t.code,{children:"<theoplayer-play-button>"})})," also provides this functionality."]})}),"\n",(0,a.jsx)(t.h3,{id:"step-1-create-a-custom-button",children:"Step 1: Create a custom button"}),"\n",(0,a.jsxs)(t.p,{children:["Create a new JavaScript file called ",(0,a.jsx)(t.code,{children:"my-play-button.js"})," with the following code:"]}),"\n",(0,a.jsx)(s.A,{language:"js",showLineNumbers:!0,title:(0,a.jsx)(l.A,{href:"https://github.com/THEOplayer/web-ui/blob/main/docs/static/open-video-ui/v1/guides/web/custom-component/my-play-button-step1.js",children:"my-play-button.js (step 1)"}),children:h}),"\n",(0,a.jsxs)(t.p,{children:["Now add your new button to your custom UI. In our example, we'll place it in the ",(0,a.jsx)(t.code,{children:"centered-chrome"})," slot, so it'll appear in the center of the player:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<script type="module" src="./my-play-button.js"><\/script>\n<theoplayer-ui\n    configuration=\'{"libraryLocation":"/path/to/node_modules/theoplayer/","license":"your_theoplayer_license_goes_here"}\'\n    source=\'{"sources":{"src":"https://example.com/stream.m3u8"}}\'\n>\n    \x3c!-- highlight-start --\x3e\n    <my-play-button slot="centered-chrome"></my-play-button>\n    \x3c!-- highlight-end --\x3e\n</theoplayer-ui>\n'})}),"\n",(0,a.jsx)(t.p,{children:"It should look something like this:"}),"\n",(0,a.jsx)(o.A,{className:c.player,src:(0,r.Ay)("/open-video-ui/v1/guides/web/custom-component/my-play-button-step1.html"),hideDeviceType:!0}),"\n",(0,a.jsxs)(t.p,{children:['Try clicking the "Play" button in the middle of the screen.\nYou should see an alert window popping up saying ',(0,a.jsx)(t.code,{children:"My play button was clicked!"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"step-2-integrate-with-the-backing-player",children:"Step 2: Integrate with the backing player"}),"\n",(0,a.jsx)(t.p,{children:"Of course, we want the player to start playing instead of showing an alert!\nFor this, we need to get access to the backing THEOplayer instance."}),"\n",(0,a.jsxs)(t.p,{children:["Open Video UI for Web provides a built-in mechanism to automatically inject dependencies into UI components,\nsuch as the player instance, or other fullscreen state of the UI. When a UI component is added as a child (or descendant)\nof a ",(0,a.jsx)(t.code,{children:"<theoplayer-default-ui>"})," or ",(0,a.jsx)(t.code,{children:"<theoplayer-ui>"}),", the parent UI will automatically inject those dependencies."]}),"\n",(0,a.jsxs)(t.p,{children:["First, the UI component needs to opt into this mechanism by ",(0,a.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/mixins.html",children:"mixing in"}),"\n",(0,a.jsx)(t.code,{children:"StateReceiverMixin"})," into its superclass (see ",(0,a.jsx)(t.a,{href:"https://theoplayer.github.io/web-ui/api/functions/StateReceiverMixin.html",children:"API documentation"}),").\nThis mixin takes the original superclass, and an array of dependencies which need to be injected:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"import { Button, buttonTemplate, StateReceiverMixin } from '@theoplayer/web-ui';\n\nexport class MyPlayButton extends StateReceiverMixin(Button, ['player']) {\n    // ...\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Once this button is added to a ",(0,a.jsx)(t.code,{children:"<theoplayer-ui>"}),", it'll automatically receive the backing THEOplayer instance in its ",(0,a.jsx)(t.code,{children:"player"})," property.\nIf you want to do some custom logic when this happens, you can implement a setter for this property:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"export class MyPlayButton extends StateReceiverMixin(Button, ['player']) {\n    set player(player) {\n        this._player = player;\n        console.log('My play button received a player!');\n    }\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Change your ",(0,a.jsx)(t.code,{children:"handleClick()"})," method to call ",(0,a.jsx)(t.code,{children:"play()"})," or ",(0,a.jsx)(t.code,{children:"pause()"})," on the player.\nYou can also update the text content of your button to reflect the new state:"]}),"\n",(0,a.jsx)(s.A,{language:"js",showLineNumbers:!0,title:(0,a.jsx)(l.A,{href:"https://github.com/THEOplayer/web-ui/blob/main/docs/static/open-video-ui/v1/guides/web/custom-component/my-play-button-step2.js",children:"my-play-button.js (step 2)"}),children:u}),"\n",(0,a.jsx)(t.p,{children:"It should look something like this:"}),"\n",(0,a.jsx)(o.A,{className:c.player,src:(0,r.Ay)("/open-video-ui/v1/guides/web/custom-component/my-play-button-step2.html"),hideDeviceType:!0}),"\n",(0,a.jsxs)(t.p,{children:['Try clicking the "Play" button in the middle of the screen. The player starts playing!',(0,a.jsx)("br",{}),"\nClicking it again should pause the player."]}),"\n",(0,a.jsx)(t.p,{children:"Congratulations, you've built your very own play button! \ud83c\udf89"}),"\n",(0,a.jsx)(t.h2,{id:"a-custom-quality-label",children:"A custom quality label"}),"\n",(0,a.jsx)(t.p,{children:"Next, let's create a label that displays the resolution of the player's current video quality."}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["The built-in ",(0,a.jsx)(t.a,{href:"https://theoplayer.github.io/web-ui/api/classes/ActiveQualityDisplay.html",children:(0,a.jsx)(t.code,{children:"<theoplayer-active-quality-display>"})})," also provides this functionality."]})}),"\n",(0,a.jsx)(t.h3,{id:"step-1-create-a-custom-component",children:"Step 1: Create a custom component"}),"\n",(0,a.jsxs)(t.p,{children:["Create a new JavaScript file called ",(0,a.jsx)(t.code,{children:"my-quality-label.js"})," with the following code:"]}),"\n",(0,a.jsx)(s.A,{language:"js",showLineNumbers:!0,title:(0,a.jsx)(l.A,{href:"https://github.com/THEOplayer/web-ui/blob/main/docs/static/open-video-ui/v1/guides/web/custom-component/my-quality-label-step1.js",children:"my-quality-label.js (step 1)"}),children:p}),"\n",(0,a.jsxs)(t.p,{children:["Now add your new label to your custom UI. In our example, we'll place it inside a ",(0,a.jsx)(t.code,{children:"<theoplayer-control-bar>"})," in the default slot, so it'll appear at the bottom of the player:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<script type="module" src="./my-quality-label.js"><\/script>\n<theoplayer-ui\n    configuration=\'{"libraryLocation":"/path/to/node_modules/theoplayer/","license":"your_theoplayer_license_goes_here"}\'\n    source=\'{"sources":{"src":"https://example.com/stream.m3u8"}}\'\n>\n    <theoplayer-control-bar>\n        \x3c!-- A seek bar --\x3e\n        <theoplayer-time-range></theoplayer-time-range>\n    </theoplayer-control-bar>\n    <theoplayer-control-bar>\n        \x3c!-- A few commonly used built-in controls --\x3e\n        <theoplayer-play-button></theoplayer-play-button>\n        <theoplayer-mute-button></theoplayer-mute-button>\n        \x3c!-- A spacer, to fill up the remaining space in the middle --\x3e\n        <span style="flex-grow: 1"></span>\n        \x3c!-- highlight-start --\x3e\n        \x3c!-- Your brand new quality label! --\x3e\n        <my-quality-label></my-quality-label>\n        \x3c!-- highlight-end --\x3e\n        \x3c!-- Some other controls --\x3e\n        <theoplayer-settings-menu-button menu="settings-menu"></theoplayer-settings-menu-button>\n        <theoplayer-fullscreen-button></theoplayer-fullscreen-button>\n    </theoplayer-control-bar>\n    \x3c!-- A settings menu, so you can manually change the active quality --\x3e\n    <theoplayer-settings-menu slot="menu" id="settings-menu"></theoplayer-settings-menu>\n</theoplayer-ui>\n'})}),"\n",(0,a.jsx)(t.p,{children:"It should look something like this:"}),"\n",(0,a.jsx)(o.A,{className:c.player,src:(0,r.Ay)("/open-video-ui/v1/guides/web/custom-component/my-quality-label-step1.html"),hideDeviceType:!0}),"\n",(0,a.jsx)(t.h3,{id:"step-2-listen-to-quality-changes",children:"Step 2: Listen to quality changes"}),"\n",(0,a.jsx)(t.p,{children:"Right now, the quality label is static, it doesn't actually update when the player's quality changes. Let's fix that!"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Once again, we use the ",(0,a.jsx)(t.code,{children:"StateReceiverMixin"})," to gain access to the backing THEOplayer instance."]}),"\n",(0,a.jsxs)(t.li,{children:["When we receive the player, we add an event listener for the ",(0,a.jsx)(t.code,{children:"addtrack"})," event of ",(0,a.jsx)(t.code,{children:"player.videoTracks"}),",\nso we'll be notified when the video track becomes available."]}),"\n",(0,a.jsxs)(t.li,{children:["We register an ",(0,a.jsx)(t.code,{children:"activequalitychanged"})," event listener on that video track,\nso we can respond when the active video quality changes."]}),"\n",(0,a.jsxs)(t.li,{children:["When our ",(0,a.jsx)(t.code,{children:"activequalitychanged"})," listener fires, we update the contents of our ",(0,a.jsx)(t.code,{children:"<span>"})," with the quality's height."]}),"\n"]}),"\n",(0,a.jsx)(s.A,{language:"js",showLineNumbers:!0,title:(0,a.jsx)(l.A,{href:"https://github.com/THEOplayer/web-ui/blob/main/docs/static/open-video-ui/v1/guides/web/custom-component/my-quality-label-step2.js",children:"my-quality-label.js (step 2)"}),children:d}),"\n",(0,a.jsx)(t.p,{children:"It should look something like this:"}),"\n",(0,a.jsx)(o.A,{className:c.player,src:(0,r.Ay)("/open-video-ui/v1/guides/web/custom-component/my-quality-label-step2.html"),hideDeviceType:!0}),"\n",(0,a.jsx)(t.p,{children:'Try changing the active quality by clicking the \u2699\ufe0f (Settings) button, and changing "Automatic" to a specific quality.\nYou should see your custom label update to show the height of the new quality.'}),"\n",(0,a.jsx)(t.p,{children:"That's it! You now have your very own active quality label! \ud83e\udd73"})]})}function w(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(v,{...e})}):v(e)}},93705:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(96540);const i={bigBuckBunny:{sources:{src:"https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8"},metadata:{title:"Big Buck Bunny"},textTracks:[{default:!0,src:"https://cdn.theoplayer.com/video/big_buck_bunny/thumbnails.vtt",label:"thumbnails",kind:"metadata"}]},elephantsDream:{sources:{src:"https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8"},metadata:{title:"Elephant's Dream"},textTracks:[{default:!0,src:"https://cdn.theoplayer.com/video/elephants-dream/thumbnails.vtt",label:"thumbnails",kind:"metadata"}]},starWarsTrailer:{sources:{src:"https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8"},metadata:{title:"Star Wars Episode VII Trailer"},poster:"https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/poster.jpg"}};var o=n(74848);function s(e){let{hideSource:t,hideDeviceType:n,...s}=e;const l=(0,a.useRef)(null),[r,c]=(0,a.useState)("bigBuckBunny"),[h,u]=(0,a.useState)("");(0,a.useEffect)((()=>{l.current?.contentWindow?.postMessage({type:"source",source:i[r]})}),[l.current,r]),(0,a.useEffect)((()=>{l.current?.contentWindow?.postMessage({type:"deviceType",deviceType:h})}),[l.current,h]);const p=!t||!n;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("iframe",{ref:l,...s}),p&&(0,o.jsxs)("p",{children:[!t&&(0,o.jsx)("div",{children:(0,o.jsxs)("label",{style:{userSelect:"none"},children:["Source:"," ",(0,o.jsx)("select",{value:r,onChange:e=>c(e.target.value),children:Object.entries(i).map((e=>{let[t,n]=e;return(0,o.jsx)("option",{value:t,children:n.metadata.title},t)}))})]})}),!n&&(0,o.jsx)("div",{children:(0,o.jsxs)("label",{style:{userSelect:"none"},children:["Override device type:"," ",(0,o.jsxs)("select",{value:h,onChange:e=>u(e.target.value),children:[(0,o.jsx)("option",{value:""}),(0,o.jsx)("option",{value:"desktop",children:"Desktop"}),(0,o.jsx)("option",{value:"mobile",children:"Mobile"}),(0,o.jsx)("option",{value:"tv",children:"TV"})]})]})})]})]})}}}]);