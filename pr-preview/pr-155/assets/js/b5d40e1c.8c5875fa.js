"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["72235"],{88287:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>r,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>o});var a=JSON.parse('{"id":"getting-started/sdks/android/how-to-do-offline-playback-with-aes-128-encryption","title":"How to do offline Playback with AES-128 Encrypted Streams on Android","description":"This how-to guide describes how to implement Offline playback of downloadable AES-128 content-protected MPEG-DASH or HLS using the THEOplayer\'s Legacy Android SDK (4.12.x).","source":"@site/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/02-android/05-how-to-do-offline-playback-with-aes-128-encryption.md","sourceDirName":"getting-started/01-sdks/02-android","slug":"/getting-started/sdks/android/how-to-do-offline-playback-with-aes-128-encryption","permalink":"/documentation/pr-preview/pr-155/theoplayer/v4/getting-started/sdks/android/how-to-do-offline-playback-with-aes-128-encryption","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/02-android/05-how-to-do-offline-playback-with-aes-128-encryption.md","tags":[],"version":"v4","sidebarPosition":5,"frontMatter":{},"sidebar":"android","previous":{"title":"How to enable experimental native rendering on Android","permalink":"/documentation/pr-preview/pr-155/theoplayer/v4/getting-started/sdks/android/how-to-enable-native-rendering"},"next":{"title":"Getting started on Android TV Legacy (4.12.x)","permalink":"/documentation/pr-preview/pr-155/theoplayer/v4/getting-started/sdks/android-tv/getting-started"}}'),i=t("85893"),s=t("50065");let o={},r="How to do offline Playback with AES-128 Encrypted Streams on Android",c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Code example",id:"code-example",level:2},{value:"Listing and restarting caching tasks",id:"listing-and-restarting-caching-tasks",level:3}];function l(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"how-to-do-offline-playback-with-aes-128-encrypted-streams-on-android",children:"How to do offline Playback with AES-128 Encrypted Streams on Android"})}),"\n",(0,i.jsx)(n.p,{children:"This how-to guide describes how to implement Offline playback of downloadable AES-128 content-protected MPEG-DASH or HLS using the THEOplayer's Legacy Android SDK (4.12.x)."}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"In order to do offline Playback on Android, your license key should be downloadable, and cacheable. The SDK will not be able to decrypt your content if your key expired."}),"\n",(0,i.jsx)(n.p,{children:"Before you start, add the following transitive theoplayer dependency to the build.gradle file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"dependencies {\n    // other dependencies..\n    implementation 'com.google.android.exoplayer:exoplayer:2.6.1'\n    //THEO Player 'aar' File where xx.x is the Version of Player\n    implementation(name: \"theoplayer-android-xxxx-2.xx.x-minapixx-release\", ext: \"aar\")\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"code-example",children:"Code example"}),"\n",(0,i.jsx)(n.p,{children:"The snippet below downloads an AES-128 MPEG-DASH/HLS asset. Once the Download button is pressed following Code Snippet help to download the stream and Starts Playback from Cache."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'private void cacheSource(String src, String amount, Date expirationDate) {\n    Cache cache = THEOplayerGlobal.getSharedInstance(this).getCache();\n    SourceDescription source = sourceDescription(typedSource(src).build()).build();\n    CachingParameters cachingParameters = new CachingParameters(amount, expirationDate);\n    final CachingTask cachingTask = cache.createTask(source, cachingParameters);\n    final TextView status = findViewById(R.id.status);\n    cachingTask.addEventListener(CachingTaskEventTypes.CACHING_TASK_STATE_CHANGE, new EventListener<CachingTaskStateChangeEvent>() {\n\n        @Override\n        public void handleEvent(CachingTaskStateChangeEvent cachingTaskStateChangeEvent) {\n            switch (cachingTask.getStatus()) {\n                case DONE:\n                    // handle success..\n                    status.setText("Finished");\n                    playSourceFromCache("http://contentserver-1.kanto.indigo:8080/videos/dash/big_buck_bunny/BigBuckBunny_10s_simple_2014_05_09.mpd");\n                    break;\n                case ERROR:\n                    // handle error..\n                    status.setText("Download Failed");\n                    break;\n                default: // do nothing\n                    break;\n            }\n        }\n    });\n   cachingTask.start();\n\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"To call the above method, here are some of the parameters which also needed to be created:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'//Getting the current Date + 2 weeks\nint noOfDays = 14; //i.e two weeks\nCalendar calendar = Calendar.getInstance();\ncalendar.add(Calendar.DAY_OF_YEAR, noOfDays);\nDate date = calendar.getTime();\n\n//Start Caching Source for Offline Playback\ncacheSource(\n        "http://contentserver-1.kanto.indigo:8080/videos/dash/big_buck_bunny/BigBuckBunny_10s_simple_2014_05_09.mpd",\n        "100%",\n        date\n);\n'})}),"\n",(0,i.jsx)(n.p,{children:"To playback cached material, create and play the stream as per usual. The cached content will be used for the known source."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"private void playSourceFromCache(String src) {\n    SourceDescription sourceDescription = sourceDescription(typedSource(src).build()).build();\n    tpv.getPlayer().setSource(sourceDescription);\n    tpv.getPlayer().play();\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"A caching task can be paused and restarted through the task object itself."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'private void startAndPauseTask(CachingTask task) {\n    // When not started, the task will be in the "IDLE" state\n    task.start();\n    // The status of the task will now be "LOADING"\n    task.pause();\n    // The task reverts back to "IDLE" after finishing its current segment download\n    task.start();\n    // The task continues where it was paused\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"After creating a caching task, it is possible to check an estimate for the total size of the caching task on disk, and the current progression in bytes (stored)."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"private void checkStorageRequirements(CachingTask unstartedTask) {\n    // We can get an estimate for the amount of space this task will consume. This will be ready once the manifest is preprocessed when the task is created. Starting is not necessary.\n    System.out.println(unstartedTask.getBytes());\n    unstartedTask.start();\n\n    // ... Additional logic here\n\n    // At any time, we can check the current amount of bytes cached by the task\n    System.out.println(unstartedTask.getBytesCached());\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"listing-and-restarting-caching-tasks",children:"Listing and restarting caching tasks"}),"\n",(0,i.jsx)(n.p,{children:"An important side note when calling previously cached tasks is that you need to initialise the cache first. Initializing happens asynchronously, so calling upon the cache immediately after initializing may result in an empty list as it is still initialising. (You could initialise the cache as soon as your app opens, such that you can access it later in other pages in the app).\nTo initialise the cache, you need to run the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"THEOplayerGlobal theoPlayerGlobal = THEOplayerGlobal.getSharedInstance(this).setApplicationInstance(getApplication());\n"})}),"\n",(0,i.jsx)(n.p,{children:'Once the cache is properly initialised, you can call upon the cache with methods such as "getTasks()" which will return a TaskList that you can iterate through to find previously cached tasks and resume caching or play the resource. Example:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"// If you're in a different activity, you can always call upon the previously initialised cache\nTHEOplayerGlobal theoPlayerGlobal = THEOplayerGlobal.getSharedInstance(this);\n\n// Loop over previously cached tasks\nIterator cachedVideos = theoPlayerGlobal.getCache().getTasks().iterator();\nwhile(cachedVideos.hasNext()) {\n    CachingTask cachedVideo = (CachingTask) cachedVideos.next();\n    // Do logic with the found cached video e.g.\n    CachingTaskStatus status = cachedVideo.getStatus();\n    SourceDescription sourceDescription = cachedVideo.getSource();\n    Double percentageCached = cachedVideo.getPercentageCached();\n\n    cachedVideo.pause(); // Pause if not already paused\n    cachedVideo.start(); // start or resume caching task}\n"})}),"\n",(0,i.jsx)(n.p,{children:"For all possible API calls, we refer you to the JavaDoc available in the License that you've received. (Next to the Android SDK there should be a source file with the complete JavaDoc that also describes all possible caching methods)."})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return o}});var a=t(67294);let i={},s=a.createContext(i);function o(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);