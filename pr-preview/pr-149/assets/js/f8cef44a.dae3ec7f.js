"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9754],{35882:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=r(74848),a=r(28453);const s={slug:"/getting-started/frameworks/react-native/migrating-v2"},i="Migrating to react-native-theoplayer v2.x",o={id:"external/react-native-theoplayer/doc/migrating-v2",title:"Migrating to react-native-theoplayer v2.x",description:"The v2 release of react-native-theoplayer comes with a number of breaking API changes.",source:"@site/theoplayer_versioned_docs/version-v4/external/react-native-theoplayer/doc/migrating-v2.md",sourceDirName:"external/react-native-theoplayer/doc",slug:"/getting-started/frameworks/react-native/migrating-v2",permalink:"/documentation/pr-preview/pr-149/theoplayer/v4/getting-started/frameworks/react-native/migrating-v2",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/react-native-theoplayer/blob/-/doc/migrating-v2.md",tags:[],version:"v4",frontMatter:{slug:"/getting-started/frameworks/react-native/migrating-v2"},sidebar:"react-native",previous:{title:"Media Cache",permalink:"/documentation/pr-preview/pr-149/theoplayer/v4/getting-started/frameworks/react-native/media-caching"},next:{title:"Picture-in-Picture (PiP)",permalink:"/documentation/pr-preview/pr-149/theoplayer/v4/getting-started/frameworks/react-native/pip"}},l={},c=[{value:"Player Creation",id:"player-creation",level:2},{value:"Listening to Player Events",id:"listening-to-player-events",level:2},{value:"AdsAPI and CastAPI",id:"adsapi-and-castapi",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsxs)(n.h1,{id:"migrating-to-react-native-theoplayer-v2x",children:["Migrating to ",(0,t.jsx)(n.code,{children:"react-native-theoplayer"})," v2.x"]})}),"\n",(0,t.jsxs)(n.p,{children:["The v2 release of ",(0,t.jsx)(n.code,{children:"react-native-theoplayer"})," comes with a number of breaking API changes.\nThe ",(0,t.jsx)(n.code,{children:"THEOplayerView"})," component is now split into two separate objects,\n",(0,t.jsx)(n.code,{children:"THEOplayerView"})," and ",(0,t.jsx)(n.code,{children:"THEOplayer"}),".\nIn addition, events are being dispatched to subscribed listeners instead of through callback properties."]}),"\n",(0,t.jsx)(n.p,{children:"In this section we will highlight the differences between the old and new approach in order\nto allow a smooth transition."}),"\n",(0,t.jsx)(n.h2,{id:"player-creation",children:"Player Creation"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"THEOplayerView"})," component is created and mounted as before."]}),"\n",(0,t.jsxs)(n.p,{children:["Instead of passing all player properties, such as ",(0,t.jsx)(n.code,{children:"paused"}),", ",(0,t.jsx)(n.code,{children:"muted"})," and ",(0,t.jsx)(n.code,{children:"volume"}),",\nas properties to the ",(0,t.jsx)(n.code,{children:"THEOplayerView"})," component, we now pass a ",(0,t.jsx)(n.code,{children:"onPlayerReady"}),"\ncallback that gives a ",(0,t.jsx)(n.code,{children:"THEOplayer"})," object once it is created and ready. This interface\nallows directly setting properties or executing methods\nsuch as ",(0,t.jsx)(n.code,{children:"player.autoplay = true"})," and ",(0,t.jsx)(n.code,{children:"player.pause()"}),"."]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("th",{children:"v1.x"}),(0,t.jsx)("th",{children:">= v2.x"}),(0,t.jsxs)("tr",{valign:"top",children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"const App = () => {\n  return (\n    <View style={styles.container}>\n    <THEOplayerView\n      config={playerConfig}\n      source={source}\n      paused={false} />\n    </View>\n  );\n};\n"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"const onPlayerReady = (player: THEOplayer) => {\n  player.autoplay = true;\n  player.source = source;\n}\n\nconst App = () => {\n  return (\n    <View style={styles.container}>\n      <THEOplayerView\n        config={playerConfig}\n        onPlayerReady={onPlayerReady} />\n    </View>\n  );\n};\n"})})})]})]}),"\n",(0,t.jsx)(n.h2,{id:"listening-to-player-events",children:"Listening to Player Events"}),"\n",(0,t.jsxs)(n.p,{children:["As of v2.x, the event callbacks have been removed from ",(0,t.jsx)(n.code,{children:"THEOplayerView"})," and replaced\nby a subscription approach."]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("th",{children:"v1.x"}),(0,t.jsx)("th",{children:">= v2.x"}),(0,t.jsxs)("tr",{valign:"top",children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"const App = () => {\n  const [error, setError] = useState<PlayerError | undefined>();\n  const [textTracks, setTextTracks] = useState<TextTrack[]>([]);\n\n  const onErrorCallback = useCallback((event: ErrorEvent) => {\n    setError(event.error);\n  }, []);\n\n  const onLoadedMetadataCallback = useCallback((event: LoadedMetadataEvent) => {\n    console.log('DEMO', `${event.textTracks.length} textTracks available`);\n    setTextTracks(event.textTracks);\n  }, []);\n\n  return (\n    <View style={styles.container}>\n    <THEOplayerView\n      config={playerConfig}\n      source={source}\n      paused={false}\n      onError={onErrorCallback}\n      onLoadedMetadata={onLoadedMetadataCallback}/>\n    </View>\n  );\n};\n"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"const App = () => {\n  const theoPlayer = useRef<THEOplayer>();\n  const [error, setError] = useState<PlayerError | undefined>();\n  const [textTracks, setTextTracks] = useState<TextTrack[]>([]);\n\n  const onPlayerReady = useCallback((player: THEOplayer) => {\n    theoPlayer.current = player;\n    player.autoplay = true;\n    player.source = source;\n\n    player.addEventListener(PlayerEventType.ERROR, (event: ErrorEvent) => setError(event.error));\n    player.addEventListener(PlayerEventType.LOADED_METADATA, (event: LoadedMetadataEvent) => {\n      console.log('DEMO', `${event.textTracks.length} textTracks available`);\n      setTextTracks(event.textTracks);\n    });\n  }, [theoPlayer]);\n\n  return (\n    <View style={styles.container}>\n      <THEOplayerView config={playerConfig} onPlayerReady={onPlayerReady} />\n      {error && <View style={styles.errorContainer}><Text style={styles.error}>{error?.errorMessage}</Text></View>}\n    </View>\n  );\n};\n"})})})]})]}),"\n",(0,t.jsx)(n.h2,{id:"adsapi-and-castapi",children:"AdsAPI and CastAPI"}),"\n",(0,t.jsx)(n.p,{children:"The existing ads and casting API's work the same as before. Instead of requesting an API\nfrom the view's reference, it can now be requested directly from the player instance."}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("th",{children:"v1.x"}),(0,t.jsx)("th",{children:">= v2.x"}),(0,t.jsxs)("tr",{valign:"top",children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"<THEOplayerView\n  ref={(ref: THEOplayerView) => {\n    this.player = ref;\n  }}\n  config={playerConfig}\n/>\n\n// Query whether an ad is currently playing.\nconst isPlayingAd = () => {\n  return player.ads.playing();\n};\n"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"<THEOplayerView\n  config={playerConfig}\n  onPlayerReady={onPlayerReady}\n/>\n\nconst onPlayerReady = (player: THEOplayer) => {\n  player.autoplay = true;\n  player.source = source;\n\n  // Query whether an ad is currently playing.\n  const adIsPlaying = await player.ads.playing();\n}\n"})})})]})]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(96540);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);