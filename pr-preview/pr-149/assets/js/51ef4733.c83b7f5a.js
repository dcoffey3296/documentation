"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[59041],{56369:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var i=t(74848),a=t(28453),r=t(11470),l=t(19365);const o={sidebar_position:0},s="Getting started on Android",d={id:"getting-started/sdks/android/getting-started",title:"Getting started on Android",description:"Add THEOplayer and Kotlin libraries to your application",source:"@site/theoplayer_versioned_docs/version-v6/getting-started/01-sdks/02-android/00-getting-started.mdx",sourceDirName:"getting-started/01-sdks/02-android",slug:"/getting-started/sdks/android/getting-started",permalink:"/documentation/pr-preview/pr-149/theoplayer/v6/getting-started/sdks/android/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/getting-started/01-sdks/02-android/00-getting-started.mdx",tags:[],version:"v6",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"android",previous:{title:"Introduction",permalink:"/documentation/pr-preview/pr-149/theoplayer/v6/android/"},next:{title:"Getting started on Android",permalink:"/documentation/pr-preview/pr-149/theoplayer/v6/getting-started/sdks/android/getting-started"}},c={},h=[{value:"Add THEOplayer and Kotlin libraries to your application",id:"add-theoplayer-and-kotlin-libraries-to-your-application",level:2},{value:"Setting up the license",id:"setting-up-the-license",level:2},{value:"Add THEOplayer view to your application",id:"add-theoplayer-view-to-your-application",level:2},{value:"Adding THEOplayerView via XML layout",id:"adding-theoplayerview-via-xml-layout",level:3},{value:"Adding THEOplayerView programmatically (Constructor API)",id:"adding-theoplayerview-programmatically-constructor-api",level:3},{value:"Use THEOplayer API in your application",id:"use-theoplayer-api-in-your-application",level:2},{value:"1. Get the THEOplayer instance",id:"1-get-the-theoplayer-instance",level:3},{value:"2. Configure source",id:"2-configure-source",level:3},{value:"3. Control THEOplayer through the API",id:"3-control-theoplayer-through-the-api",level:3},{value:"4. Listen for THEOplayer events",id:"4-listen-for-theoplayer-events",level:3},{value:"5. Play fullscreen video in landscape mode",id:"5-play-fullscreen-video-in-landscape-mode",level:3},{value:"Couple THEOplayer with the lifecycle callbacks",id:"couple-theoplayer-with-the-lifecycle-callbacks",level:2},{value:"Run your application",id:"run-your-application",level:2},{value:"Start screen",id:"start-screen",level:3},{value:"Playing screen",id:"playing-screen",level:3},{value:"Paused screen",id:"paused-screen",level:3},{value:"Rotated fullscreen",id:"rotated-fullscreen",level:3},{value:"Summary",id:"summary",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"getting-started-on-android",children:"Getting started on Android"})}),"\n",(0,i.jsx)(n.h2,{id:"add-theoplayer-and-kotlin-libraries-to-your-application",children:"Add THEOplayer and Kotlin libraries to your application"}),"\n",(0,i.jsxs)(n.p,{children:["We have to modify the ",(0,i.jsx)(n.code,{children:"build.gradle"})," files to be able to fetch the Android SDK and the Kotlin plugin."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In your ",(0,i.jsx)(n.strong,{children:"top-level"})," (project) ",(0,i.jsx)(n.code,{children:"settings.gradle.kts"})," file"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add the THEOplayer Maven repository."}),"\n",(0,i.jsxs)(r.A,{queryString:"lang",children:[(0,i.jsx)(l.A,{value:"groovy",label:"Groovy",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-groovy",children:'dependencyResolutionManagement {\n    repositories {\n        google()\n        mavenCentral()\n        maven { url "https://maven.theoplayer.com/releases" }\n    }\n}\n'})})}),(0,i.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'dependencyResolutionManagement {\n    repositories {\n        google()\n        mavenCentral()\n        maven { url = uri("https://maven.theoplayer.com/releases") }\n    }\n}\n'})})})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Next, we need to edit the ",(0,i.jsx)(n.code,{children:"build.gradle"})," on the ",(0,i.jsx)(n.strong,{children:"module-level"})," (",(0,i.jsx)(n.strong,{children:"app/build.gradle"}),")"]}),"\n",(0,i.jsxs)(r.A,{queryString:"lang",children:[(0,i.jsx)(l.A,{value:"groovy",label:"Groovy",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-groovy",children:'implementation "com.theoplayer.theoplayer-sdk-android:core:+"\nimplementation "org.jetbrains.kotlin:kotlin-stdlib:1.6.21"\nimplementation "androidx.appcompat:appcompat:1.7.0"\n'})})}),(0,i.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'implementation("com.theoplayer.theoplayer-sdk-android:core:+")\nimplementation("org.jetbrains.kotlin:kotlin-stdlib:1.6.21")\nimplementation("androidx.appcompat:appcompat:1.7.0")\n'})})})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)("u",{children:"Note"}),": It's possible to replace the ",(0,i.jsx)(n.code,{children:"+"})," with a particular version of THEOplayer that should be used, for example:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"implementation 'com.theoplayer.theoplayer-sdk-android:core:6.0.0'"})}),"\n",(0,i.jsx)(n.h2,{id:"setting-up-the-license",children:"Setting up the license"}),"\n",(0,i.jsx)(n.p,{children:"You need to configure your THEOplayer license, if you don't enter this license string, you might encounter licensing issues (e.g.: when trying to play non-whitelisted video streams)."}),"\n",(0,i.jsxs)(n.p,{children:["First, obtain a THEOplayer Android SDK license through the ",(0,i.jsx)(n.a,{href:"https://portal.theoplayer.com/login",children:"THEOplayer Developer Portal"}),".\n",(0,i.jsx)(n.img,{src:"https://cdn.theoplayer.com/images/git/theoplayer-android-sdk-license-string.png",alt:""})]}),"\n",(0,i.jsxs)(n.p,{children:["Then, identify your license string from the screenshot above and add the ",(0,i.jsx)(n.code,{children:"<meta-data ..."})," tag below at the appropriate location in your ",(0,i.jsx)(n.code,{children:"AndroidManifest.xml"}),", and swap ",(0,i.jsx)(n.code,{children:"your_license_here"})," with your\nactual license string."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<application>\n    <meta-data\n        android:name="THEOPLAYER_LICENSE"\n        android:value="your_license_here" />\n</application>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Additionally, to play online videos with THEOplayer, you first need to add ",(0,i.jsx)(n.a,{href:"https://developer.android.com/reference/android/Manifest.permission.html#INTERNET",children:"INTERNET"})," permission into the ",(0,i.jsx)(n.code,{children:"AndroidManifest.xml"})," file too."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<uses-permission android:name="android.permission.INTERNET" />\n'})}),"\n",(0,i.jsxs)(n.p,{children:["More information regarding the license can be found ",(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-149/theoplayer/v6/how-to-guides/license/introduction",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"add-theoplayer-view-to-your-application",children:"Add THEOplayer view to your application"}),"\n",(0,i.jsx)(n.p,{children:"THEOplayer can be added to an Android application either:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Through a layout (XML)"}),": By adding the ",(0,i.jsx)(n.code,{children:"THEOplayerView"})," to your layout XML file (e.g., ",(0,i.jsx)(n.code,{children:"activity_main.xml"}),"), or"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Programmatically using the Constructor API"}),": This approach also allows you to configure the license string through a programmatic configuration instead of the ",(0,i.jsx)(n.code,{children:"AndroidManifest.xml"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"adding-theoplayerview-via-xml-layout",children:"Adding THEOplayerView via XML layout"}),"\n",(0,i.jsxs)(n.p,{children:["You can add the ",(0,i.jsx)(n.code,{children:"THEOplayerView"})," to the layout of the ",(0,i.jsx)(n.code,{children:"MainActivity"})," with the snippet below."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(31254).A+"",width:"864",height:"854"})}),"\n",(0,i.jsxs)(n.p,{children:["At least the ",(0,i.jsx)(n.code,{children:"id"}),", ",(0,i.jsx)(n.code,{children:"width"})," and ",(0,i.jsx)(n.code,{children:"height"})," attributes need to be specified on the new view. The ",(0,i.jsx)(n.code,{children:"id"})," is important as it is used to identify the view object in your ",(0,i.jsx)(n.code,{children:"MainActivity"})," class."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<com.theoplayer.android.api.THEOplayerView\n    android:id="@+id/theoplayer"\n    android:layout_width="match_parent"\n    android:layout_height="300dp"\n    app:layout_constraintTop_toTopOf="parent">\n</com.theoplayer.android.api.THEOplayerView>\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(41717).A+"",width:"1868",height:"560"})}),"\n",(0,i.jsx)(n.h3,{id:"adding-theoplayerview-programmatically-constructor-api",children:"Adding THEOplayerView programmatically (Constructor API)"}),"\n",(0,i.jsxs)(n.p,{children:["In the Activity/Fragment, you can use the ",(0,i.jsx)(n.a,{href:"https://docs.theoplayer.com/api-reference/android/index.html?com/theoplayer/android/api/THEOplayerView.html",children:"constructor API"})," to create a THEOplayer instance\nby passing along a context and a ",(0,i.jsx)(n.a,{href:"https://docs.theoplayer.com/api-reference/android/index.html?com/theoplayer/android/api/THEOplayerConfig.html",children:(0,i.jsx)(n.code,{children:"THEOplayerConfig"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In this ",(0,i.jsx)(n.code,{children:"THEOplayerConfig"}),", you can configure your license string, as demonstrated in the snippet below."]}),"\n",(0,i.jsxs)(r.A,{queryString:"lang",children:[(0,i.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'val playerConfig = THEOplayerConfig.Builder()\n    .license("your_license_here")\n    .build()\n\nval theoPlayerView = THEOplayerView(this, playerConfig)\n'})})}),(0,i.jsx)(l.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'THEOplayerConfig playerConfig = new THEOplayerConfig.Builder()\n    .license("your_license_here")\n    .build();\n\nTHEOplayerView theoPlayerView = new THEOplayerView(this, playerConfig);\n'})})})]}),"\n",(0,i.jsx)(n.p,{children:"This approach is ideal when you need to adjust the configuration dynamically, such as during runtime or based on specific app conditions. It removes the need for XML-based configuration and is useful for advanced customization scenarios."}),"\n",(0,i.jsx)(n.h2,{id:"use-theoplayer-api-in-your-application",children:"Use THEOplayer API in your application"}),"\n",(0,i.jsxs)(n.p,{children:["Now in the ",(0,i.jsx)(n.code,{children:"MainActivity"})," we can retrieve the ",(0,i.jsx)(n.code,{children:"THEOplayerView"})," by the ",(0,i.jsx)(n.code,{children:"id"})," we set earlier using the ",(0,i.jsx)(n.code,{children:"findViewById"})," method."]}),"\n",(0,i.jsx)(n.h3,{id:"1-get-the-theoplayer-instance",children:"1. Get the THEOplayer instance"}),"\n",(0,i.jsxs)(r.A,{queryString:"lang",children:[(0,i.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"...\nimport com.theoplayer.android.api.THEOplayerView\n\nclass MainActivity : ComponentActivity() {\n    lateinit var theoPlayerView: THEOplayerView\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContentView(R.layout.activity_main)\n        theoPlayerView = findViewById(R.id.theoplayer)\n    }\n}\n"})})}),(0,i.jsx)(l.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nimport com.theoplayer.android.api.THEOplayerView;\n\npublic class MainActivity extends ComponentActivity {\n    private THEOplayerView theoPlayerView;\n\n    @Override\n    protected void onCreate(@Nullable Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        setContentView(R.layout.activity_main);\n        theoPlayerView = findViewById(R.id.theoplayer);\n    }\n}\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"2-configure-source",children:"2. Configure source"}),"\n",(0,i.jsxs)(n.p,{children:["To play a video in THEOplayer, we need to configure a source for the player in our ",(0,i.jsx)(n.code,{children:"MainActivity"}),":"]}),"\n",(0,i.jsxs)(r.A,{queryString:"lang",children:[(0,i.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'val typedSource = TypedSource\n    .Builder("https://cdn.theoplayer.com/video/dash/big_buck_bunny/BigBuckBunny_10s_simple_2014_05_09.mpd")\n    .type(SourceType.DASH)\n    .build()\n\nval sourceDescription = SourceDescription\n    .Builder(typedSource)\n    .build()\n\ntheoPlayerView.player.source = sourceDescription\n'})})}),(0,i.jsx)(l.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'TypedSource typedSource = new TypedSource\n        .Builder("https://cdn.theoplayer.com/video/dash/big_buck_bunny/BigBuckBunny_10s_simple_2014_05_09.mpd")\n        .type(SourceType.DASH)\n        .build();\n\nSourceDescription sourceDescription = new SourceDescription\n        .Builder(typedSource)\n        .build();\n\ntheoPlayerView.getPlayer().setSource(sourceDescription);\n'})})})]}),"\n",(0,i.jsx)(n.h3,{id:"3-control-theoplayer-through-the-api",children:"3. Control THEOplayer through the API"}),"\n",(0,i.jsx)(n.p,{children:"We will now introduce a button to start/stop the video in the player."}),"\n",(0,i.jsxs)(n.p,{children:["First add the button to our ",(0,i.jsx)(n.code,{children:"activity_main.xml"})," layout file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<Button\n        android:layout_width="wrap_content"\n        android:layout_height="wrap_content"\n        android:id="@+id/btn_playpause"\n        android:text="PLAY/PAUSE" />\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(69451).A+"",width:"1812",height:"808"})}),"\n",(0,i.jsxs)(n.p,{children:["Then set an ",(0,i.jsx)(n.code,{children:"OnClickListener()"})," on the button in our ",(0,i.jsx)(n.code,{children:"MainActivity"})," code to trigger ",(0,i.jsx)(n.code,{children:"play()"})," and ",(0,i.jsx)(n.code,{children:"pause()"})," on the player."]}),"\n",(0,i.jsxs)(r.A,{queryString:"lang",children:[(0,i.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"val btnPlayPause = findViewById<Button>(R.id.btn_playpause)\nbtnPlayPause.setOnClickListener {\n    if (theoPlayerView.player.isPaused) {\n        theoPlayerView.player.play()\n    } else {\n        theoPlayerView.player.pause()\n    }\n}\n"})})}),(0,i.jsx)(l.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"Button btnPlayPause = findViewById(R.id.btn_playpause);\nbtnPlayPause.setOnClickListener(new View.OnClickListener() {\n    @Override\n    public void onClick(View v) {\n        if (theoPlayerView.getPlayer().isPaused()) {\n            theoPlayerView.getPlayer().play();\n        } else {\n            theoPlayerView.getPlayer().pause();\n        }\n    }\n});\n"})})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(61034).A+"",width:"1806",height:"1292"})}),"\n",(0,i.jsx)(n.h3,{id:"4-listen-for-theoplayer-events",children:"4. Listen for THEOplayer events"}),"\n",(0,i.jsx)(n.p,{children:"The next step is listening for player events."}),"\n",(0,i.jsxs)(n.p,{children:["First, we need to create two more TextViews in the ",(0,i.jsx)(n.code,{children:"activity_main.xml"})," file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<TextView\n    android:layout_width="wrap_content"\n    android:layout_height="wrap_content"\n    android:id="@+id/txt_playstatus"\n    android:layout_marginStart="20dp"/>\n\n<TextView\n    android:layout_width="wrap_content"\n    android:layout_height="wrap_content"\n    android:id="@+id/txt_timeupdate"\n    android:layout_marginStart="20dp"/>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["We will now listen for ",(0,i.jsx)(n.code,{children:"PLAY"}),", ",(0,i.jsx)(n.code,{children:"PAUSE"})," and ",(0,i.jsx)(n.code,{children:"TIMEUPDATE"})," in this example."]}),"\n",(0,i.jsxs)(r.A,{queryString:"lang",children:[(0,i.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'val txtPlayStatus = findViewById<TextView>(R.id.txt_playstatus)\nval txtTimeUpdate = findViewById<TextView>(R.id.txt_timeupdate)\n\ntheoPlayerView.player.addEventListener(PlayerEventTypes.PLAY) {\n    txtPlayStatus.text = "Playing"\n}\n\ntheoPlayerView.player.addEventListener(PlayerEventTypes.PAUSE) {\n    txtPlayStatus.text = "Paused"\n}\n\ntheoPlayerView.player.addEventListener(PlayerEventTypes.TIMEUPDATE) { timeUpdateEvent ->\n    txtTimeUpdate.text = timeUpdateEvent.currentTime.toString()\n}\n'})})}),(0,i.jsx)(l.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'TextView txtPlayStatus = findViewById(R.id.txt_playstatus);\nTextView txtTimeUpdate = findViewById(R.id.txt_timeupdate);\n\ntheoPlayerView.getPlayer().addEventListener(PlayerEventTypes.PLAY, new EventListener<PlayEvent>() {\n    @Override\n    public void handleEvent(PlayEvent playEvent) {\n        txtPlayStatus.setText("Playing");\n    }\n});\n\ntheoPlayerView.getPlayer().addEventListener(PlayerEventTypes.PAUSE, new EventListener<PauseEvent>() {\n    @Override\n    public void handleEvent(PauseEvent pauseEvent) {\n        txtPlayStatus.setText("Paused");\n    }\n});\n\ntheoPlayerView.getPlayer().addEventListener(PlayerEventTypes.TIMEUPDATE, new EventListener<TimeUpdateEvent>() {\n    @Override\n    public void handleEvent(TimeUpdateEvent timeUpdateEvent) {\n        txtTimeUpdate.setText(String.valueOf(timeUpdateEvent.getCurrentTime()));\n    }\n});\n'})})})]}),"\n",(0,i.jsxs)(n.p,{children:["When the events are triggered, we will update the ",(0,i.jsx)(n.strong,{children:"MainActivity"})," UI with the corresponding state."]}),"\n",(0,i.jsx)(n.h3,{id:"5-play-fullscreen-video-in-landscape-mode",children:"5. Play fullscreen video in landscape mode"}),"\n",(0,i.jsx)(n.p,{children:"THEOplayer SDK contains a default fullscreen activity which can be started automatically when you rotate your device."}),"\n",(0,i.jsxs)(n.p,{children:["We have to configure our player instance in the ",(0,i.jsx)(n.code,{children:"MainActivity"})," to react to orientation changes and start the Fullscreen activity."]}),"\n",(0,i.jsxs)(r.A,{queryString:"lang",children:[(0,i.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"override fun onCreate(savedInstanceState: Bundle?) {\n    //...\n    theoPlayerView = findViewById(R.id.theoplayer)\n    theoPlayerView.settings.isFullScreenOrientationCoupled = true\n    //...\n}\n"})})}),(0,i.jsx)(l.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"@Override\nprotected void onCreate(Bundle savedInstanceState) {\n    // ...\n    theoPlayerView = findViewById(R.id.theoplayer);\n    theoPlayerView.getSettings().setFullScreenOrientationCoupled(true);\n    // ...\n}\n"})})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(50089).A+"",width:"1802",height:"854"})}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"AndroidManifest.xml"})," we can disable the default orientation behavior on our ",(0,i.jsx)(n.code,{children:"MainActivity"})," and lock it in portrait. Then, because we enabled fullscreen orientation coupling with the ",(0,i.jsx)(n.code,{children:"setFullScreenOrientationCoupled(true)"})," method earlier, THEOplayer will take care of the support of seamless landscape activity transition at rotation."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<activity android:name=".MainActivity"\n    android:screenOrientation="userPortrait"\n    android:configChanges="orientation|screenSize" >\n    <intent-filter>\n        <action android:name="android.intent.action.MAIN" />\n\n        <category android:name="android.intent.category.LAUNCHER" />\n    </intent-filter>\n</activity>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["If you would like to customize the Fullscreen Activity, you can take a look at our sample ",(0,i.jsx)(n.a,{href:"https://github.com/THEOplayer/samples-android-sdk/tree/master/full-screen-handling",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"couple-theoplayer-with-the-lifecycle-callbacks",children:"Couple THEOplayer with the lifecycle callbacks"}),"\n",(0,i.jsxs)(n.p,{children:["In order for THEOplayer to work properly and in sync with the ",(0,i.jsx)(n.a,{href:"https://developer.android.com/guide/components/activities/activity-lifecycle",children:"Activity lifecycle changes"})," (e.g. when we rotate the device or start a new Activity or the app goes to background).\nWe need to call the ",(0,i.jsx)(n.code,{children:"onResume"}),", ",(0,i.jsx)(n.code,{children:"onPause"})," and ",(0,i.jsx)(n.code,{children:"onDestroy"})," methods of the ",(0,i.jsx)(n.code,{children:"THEOplayerView"})," when the matching methods are called in the Activity."]}),"\n",(0,i.jsxs)(r.A,{queryString:"lang",children:[(0,i.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"class MainActivity : ComponentActivity() {\n\n    // ...\n\n    override fun onPause() {\n        super.onPause()\n        theoPlayerView.onPause()\n    }\n\n    override fun onResume() {\n        super.onResume()\n        theoPlayerView.onResume()\n    }\n\n    override fun onDestroy() {\n        super.onDestroy()\n        theoPlayerView.onDestroy()\n    }\n\n    // ...\n\n}\n"})})}),(0,i.jsx)(l.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public class MainActivity extends AppCompatActivity{\n\n    // ...\n\n    @Override\n    protected void onPause() {\n        super.onPause();\n        theoPlayerView.onPause();\n    }\n\n    @Override\n    protected void onResume() {\n        super.onResume();\n        theoPlayerView.onResume();\n    }\n\n    @Override\n    protected void onDestroy() {\n        super.onDestroy();\n        theoPlayerView.onDestroy();\n    }\n\n    // ...\n}\n"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"run-your-application",children:"Run your application"}),"\n",(0,i.jsx)(n.p,{children:"Here you have some screenshots from the running application:"}),"\n",(0,i.jsx)(n.h3,{id:"start-screen",children:"Start screen"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(59199).A+"",width:"572",height:"1118"})}),"\n",(0,i.jsx)(n.h3,{id:"playing-screen",children:"Playing screen"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(29284).A+"",width:"572",height:"1118"})}),"\n",(0,i.jsx)(n.h3,{id:"paused-screen",children:"Paused screen"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(71789).A+"",width:"572",height:"1118"})}),"\n",(0,i.jsx)(n.h3,{id:"rotated-fullscreen",children:"Rotated fullscreen"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(90226).A+"",width:"1118",height:"572"})}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(n.p,{children:"This guide focuses on creating an Android application from scratch and integrating the THEOplayer Android SDK."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You have learned how to interact with the player via the available APIs in Kotlin and Java,"}),"\n",(0,i.jsx)(n.li,{children:"you have registered player events,"}),"\n",(0,i.jsx)(n.li,{children:"and you have learned how to enable automatic orientation detection."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can find various samples for different use cases on ",(0,i.jsx)(n.a,{href:"https://github.com/THEOplayer/samples-android-sdk/tree/master",children:"GitHub"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Did you encounter any issues? Raise a ticket through ",(0,i.jsx)(n.a,{href:"https://opentelly.atlassian.net/servicedesk/customer/portal/1",children:"the ticketing system"})," and we will be happy to assist."]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var i=t(34164);const a={tabItem:"tabItem_Ymn6"};var r=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(a.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>b});var i=t(96540),a=t(34164),r=t(23104),l=t(56347),o=t(205),s=t(57485),d=t(31682),c=t(70679);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:a}}=e;return{value:n,label:t,attributes:i,default:a}}))}(t);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function y(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=u(e),[l,s]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[d,h]=y({queryString:t,groupId:a}),[g,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,c.Dv)(t);return[a,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),x=(()=>{const e=d??g;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{x&&s(x)}),[x]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),h(e),v(e)}),[h,v,r]),tabValues:r}}var v=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(74848);function j(e){let{className:n,block:t,selectedValue:i,selectValue:l,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),c=e=>{const n=e.currentTarget,t=s.indexOf(n),a=o[t].value;a!==i&&(d(n),l(a))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>s.push(e),onKeyDown:h,onClick:c,...r,className:(0,a.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function f(e){let{lazy:n,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=g(e);return(0,m.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,m.jsx)(j,{...n,...e}),(0,m.jsx)(f,{...n,...e})]})}function b(e){const n=(0,v.A)();return(0,m.jsx)(w,{...e,children:h(e.children)},String(n))}},31254:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/android-getting-started-13_2-2581c1dcb239371b38441eff6e36e67d.png"},41717:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/android-getting-started-14_2-d3679a00ce0fd4aa120793ddf8a96df3.png"},69451:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/android-getting-started-16_2-c9da3210e9ea5233dd37a28b23cf3436.png"},61034:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/android-getting-started-17_2-7c2ab5a4cca6f765e67b9c91989dab65.png"},50089:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/android-getting-started-21_2-2d0fe0d572fda2b75cd485696997f3b8.png"},59199:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/android-getting-started-screenshot-1-38ce0ff7ab21b1cffa889c91d2543b9f.png"},29284:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/android-getting-started-screenshot-2-d107e77d808409e46aceb0af2254c254.png"},71789:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/android-getting-started-screenshot-3-a2952d823ef5f5c639d5fca97458b8f6.png"},90226:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/android-getting-started-screenshot-4-cadbdc87fd1b76e026ce32081367c1d6.png"},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var i=t(96540);const a={},r=i.createContext(a);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);