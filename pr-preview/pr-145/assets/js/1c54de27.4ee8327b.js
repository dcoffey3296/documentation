"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60160],{50585:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=n(74848),i=n(28453);const s={},r="My app does not want to build for the app store",a={id:"getting-started/sdks/ios/app-doesnt-want-to-build-app-store",title:"My app does not want to build for the app store",description:"Depending on the configuration of your iOS application, it might be possible that Apple complains when bundling the code into an application with the intent to submit it to the App Store. This could be due to the THEOplayer iOS SDK containing simulator architectures, for example to integrate with Chromecast.",source:"@site/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/03-ios/02-app-doesnt-want-to-build-app-store.md",sourceDirName:"getting-started/01-sdks/03-ios",slug:"/getting-started/sdks/ios/app-doesnt-want-to-build-app-store",permalink:"/documentation/pr-preview/pr-145/theoplayer/v4/getting-started/sdks/ios/app-doesnt-want-to-build-app-store",draft:!1,unlisted:!1,editUrl:"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/03-ios/02-app-doesnt-want-to-build-app-store.md",tags:[],version:"v4",sidebarPosition:2,frontMatter:{},sidebar:"ios",previous:{title:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x) Customization",permalink:"/documentation/pr-preview/pr-145/theoplayer/v4/getting-started/sdks/ios/ios-sdk-customization"},next:{title:"How to bypass copy() not working in Safari console",permalink:"/documentation/pr-preview/pr-145/theoplayer/v4/getting-started/sdks/ios/how-to-bypass-copy-not-working-safari-console"}},p={},d=[];function c(e){const t={code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"my-app-does-not-want-to-build-for-the-app-store",children:"My app does not want to build for the app store"})}),"\n",(0,o.jsx)(t.p,{children:"Depending on the configuration of your iOS application, it might be possible that Apple complains when bundling the code into an application with the intent to submit it to the App Store. This could be due to the THEOplayer iOS SDK containing simulator architectures, for example to integrate with Chromecast."}),"\n",(0,o.jsx)(t.p,{children:"This issue can typically be resolved by omitting unnecessary architectures. This can be done through the following script:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'APP_PATH="${TARGET_BUILD_DIR}/${WRAPPER_NAME}"\n# This script loops through the frameworks embedded in the application and\n# removes unused architectures.\nfind "$APP_PATH" -name \'*.framework\' -type d | while read -r FRAMEWORK\ndo\nFRAMEWORK_EXECUTABLE_NAME=$(defaults read "$FRAMEWORK/Info.plist" CFBundleExecutable)\nFRAMEWORK_EXECUTABLE_PATH="$FRAMEWORK/$FRAMEWORK_EXECUTABLE_NAME"\necho "Executable is $FRAMEWORK_EXECUTABLE_PATH"\n\nEXTRACTED_ARCHS=()\n\nfor ARCH in $ARCHS\ndo\necho "Extracting $ARCH from $FRAMEWORK_EXECUTABLE_NAME"\nlipo -extract "$ARCH" "$FRAMEWORK_EXECUTABLE_PATH" -o "$FRAMEWORK_EXECUTABLE_PATH-$ARCH"\nEXTRACTED_ARCHS+=("$FRAMEWORK_EXECUTABLE_PATH-$ARCH")\ndone\n\necho "Merging extracted architectures: ${ARCHS}"\nlipo -o "$FRAMEWORK_EXECUTABLE_PATH-merged" -create "${EXTRACTED_ARCHS[@]}"\nrm "${EXTRACTED_ARCHS[@]}"\n\necho "Replacing original executable with thinned version"\nrm "$FRAMEWORK_EXECUTABLE_PATH"\nmv "$FRAMEWORK_EXECUTABLE_PATH-merged" "$FRAMEWORK_EXECUTABLE_PATH"\ndone\n'})}),"\n",(0,o.jsx)(t.p,{children:"A potential symptom of the above issue is shown in the screenshot below."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"iOS build app error",src:n(94935).A+"",title:"iOS build app error",width:"805",height:"486"})})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},94935:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/ios-build-app-error-5d9d18af89855e9f6479cd09cfcee516.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(96540);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);