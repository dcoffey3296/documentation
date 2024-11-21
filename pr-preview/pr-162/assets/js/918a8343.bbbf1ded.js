"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["95346"],{6030:function(e,t,i){i.r(t),i.d(t,{metadata:()=>a,contentTitle:()=>h,default:()=>z,assets:()=>v,toc:()=>f,frontMatter:()=>u});var a=JSON.parse('{"id":"api/signaling/get-monetized-streams","title":"GetMonetizedStreams","description":"Retrieves all created and deployed monetized streams (signaling services) along with their configurations.","source":"@site/theoads/api/signaling/get-monetized-streams.api.mdx","sourceDirName":"api/signaling","slug":"/api/signaling/get-monetized-streams","permalink":"/documentation/pr-preview/pr-162/theoads/api/signaling/get-monetized-streams","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-monetized-streams","title":"GetMonetizedStreams","description":"Retrieves all created and deployed monetized streams (signaling services) along with their configurations.","sidebar_label":"GetMonetizedStreams","hide_title":true,"hide_table_of_contents":true,"api":"eJy9Vt1v2zgM/1cEPm2A0+7uMW+5LdcF7ZaiyYA7FEXByIytRZY8iU6XC/K/Hyg7H3XS4Z6uDylNid8/ktqCrykgG+8mOQzhhviLd8TmH8pnHAirCBkEirV3kSIMt/D7hw/yL6eog6lFEoZwZyIrv1TVXljFg7T2jsmxCGFdW6OTuevvUSS3EHVJFQplmKpkAq2dLmH42Lfy0bvIodGsUPGmJvViuFRckqqDxMGGongxV/RTU81q6YPi0kdSxrUSt1eQARu2BEOYVoafb8hRMHpUm4cuzAlTdeWwomfI4Kg5uZjLr2iCIUQOxhWwyyAyMskJuaaC4SPoQMLJWkJudSTlkEFT5+1pItrTnCwlXiJOeXmqAAdDazohhW2NW8FT1nPoGOADRd8ETbPk325/8egn5oNFIFxBBofSDdrSJftro+lADFIlfzJksPCeIwes02Ft/aaSEmdgvUY7eMXSgXJybNDG118n+koM+QsGGhjHFJaYrDriFx9WbUgHp1piIClv4vGb1q01tAaFnSPjQJOoky+vVxRESK9OPinsA2wZdfCaYvwvKZ3L+W4n9fjRmEC5pNPksAdDp+GoyS++k2bYZdsepmrcWI8tsDojvR48g+EC9SoPvv72MLmIR4yR+K1DH0xh3D1yefG4y/pHn9Pbum9pc/HQ4sY3fIqw2eTrzd0YMvg0/fZHIu5mn0f34+fRpyP9cfp1Pv46/1Xeeym5aw1J71EhQJumqH4R8BuNK8oml7t6TSEaf1nQ4oJsfDW1zu50DAwBN/L9aphdyjxWl1K+60OopwmmC0aZbyWpQNyEbtT5pUK1bJyWa4l1htc99M5R+nTMfG8yPvcq8Xweqvz1nXzoxlZUaK3qZqFCl6t2WFB+vjzUu2gKh9a4QnW9Gt8rtN4Vh9FvgtLeLU3RtGsspgGPRZT4Dq4OukZ6ErzoJhjewPDxKYMaA1bEFGL7XRGXXjZhQZLoOnUJXPeHYxo8FNat3BaaYOUa1uZ6/VvK3t7MTNZb27VYm1vajJpXjdcyYV99+Gswup8Mbsd/QwYCWigJcwqpdMYt/emYmH8eTzGPalQbOIErnCFkXpLaX34Yz+ZqdD+ROviXqDa+Uey7iqSCVOiwoPNyZOqlNLpUGEgdJ3zauOd1ulJj1OWZEqV9aJ8TeRSz6FTbnvtzLpGViSeCTRS9e/ffzW5Gk/dX6k8fVE6MxlKuJDGhSvVXvu2ENQbjm6iOBU6xtYhpIhaUqdoSRmmaJQVxRuQKYk5xMAZBaNGYnK7SrtXkYmrQrlRfJnPBvmwx1DL0pEa1j1yhO7l2Q6wOQFTHV1VvHByeSf9zq7QwlD18XVs0TkJKcN526H88exqkBVn6yHK43S4w0rdgdzth/2godL0lJcCFIPXxaZftgSztspL1ASMtjzRBLtqm7YXe83B32pE34znsdv8Cn2q6Mg==","sidebar_class_name":"get api-method","info_path":"theoads/api/signaling/theoads-api","custom_edit_url":null,"hide_send_button":true},"sidebar":"signalingApi","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-162/theoads/api/signaling/theoads-api"},"next":{"title":"CreateMonetizedStream","permalink":"/documentation/pr-preview/pr-162/theoads/api/signaling/create-monetized-stream"}}'),n=i("85893"),s=i("50065"),r=i("87470"),o=i.n(r),d=i("44039"),p=i.n(d),l=i("40218"),m=i.n(l),g=i("69141"),c=i.n(g);i("61142"),i("5525");var y=i("34403");let u={id:"get-monetized-streams",title:"GetMonetizedStreams",description:"Retrieves all created and deployed monetized streams (signaling services) along with their configurations.",sidebar_label:"GetMonetizedStreams",hide_title:!0,hide_table_of_contents:!0,api:"eJy9Vt1v2zgM/1cEPm2A0+7uMW+5LdcF7ZaiyYA7FEXByIytRZY8iU6XC/K/Hyg7H3XS4Z6uDylNid8/ktqCrykgG+8mOQzhhviLd8TmH8pnHAirCBkEirV3kSIMt/D7hw/yL6eog6lFEoZwZyIrv1TVXljFg7T2jsmxCGFdW6OTuevvUSS3EHVJFQplmKpkAq2dLmH42Lfy0bvIodGsUPGmJvViuFRckqqDxMGGongxV/RTU81q6YPi0kdSxrUSt1eQARu2BEOYVoafb8hRMHpUm4cuzAlTdeWwomfI4Kg5uZjLr2iCIUQOxhWwyyAyMskJuaaC4SPoQMLJWkJudSTlkEFT5+1pItrTnCwlXiJOeXmqAAdDazohhW2NW8FT1nPoGOADRd8ETbPk325/8egn5oNFIFxBBofSDdrSJftro+lADFIlfzJksPCeIwes02Ft/aaSEmdgvUY7eMXSgXJybNDG118n+koM+QsGGhjHFJaYrDriFx9WbUgHp1piIClv4vGb1q01tAaFnSPjQJOoky+vVxRESK9OPinsA2wZdfCaYvwvKZ3L+W4n9fjRmEC5pNPksAdDp+GoyS++k2bYZdsepmrcWI8tsDojvR48g+EC9SoPvv72MLmIR4yR+K1DH0xh3D1yefG4y/pHn9Pbum9pc/HQ4sY3fIqw2eTrzd0YMvg0/fZHIu5mn0f34+fRpyP9cfp1Pv46/1Xeeym5aw1J71EhQJumqH4R8BuNK8oml7t6TSEaf1nQ4oJsfDW1zu50DAwBN/L9aphdyjxWl1K+60OopwmmC0aZbyWpQNyEbtT5pUK1bJyWa4l1htc99M5R+nTMfG8yPvcq8Xweqvz1nXzoxlZUaK3qZqFCl6t2WFB+vjzUu2gKh9a4QnW9Gt8rtN4Vh9FvgtLeLU3RtGsspgGPRZT4Dq4OukZ6ErzoJhjewPDxKYMaA1bEFGL7XRGXXjZhQZLoOnUJXPeHYxo8FNat3BaaYOUa1uZ6/VvK3t7MTNZb27VYm1vajJpXjdcyYV99+Gswup8Mbsd/QwYCWigJcwqpdMYt/emYmH8eTzGPalQbOIErnCFkXpLaX34Yz+ZqdD+ROviXqDa+Uey7iqSCVOiwoPNyZOqlNLpUGEgdJ3zauOd1ulJj1OWZEqV9aJ8TeRSz6FTbnvtzLpGViSeCTRS9e/ffzW5Gk/dX6k8fVE6MxlKuJDGhSvVXvu2ENQbjm6iOBU6xtYhpIhaUqdoSRmmaJQVxRuQKYk5xMAZBaNGYnK7SrtXkYmrQrlRfJnPBvmwx1DL0pEa1j1yhO7l2Q6wOQFTHV1VvHByeSf9zq7QwlD18XVs0TkJKcN526H88exqkBVn6yHK43S4w0rdgdzth/2godL0lJcCFIPXxaZftgSztspL1ASMtjzRBLtqm7YXe83B32pE34znsdv8Cn2q6Mg==",sidebar_class_name:"get api-method",info_path:"theoads/api/signaling/theoads-api",custom_edit_url:null,hide_send_button:!0},h=void 0,v={},f=[];function S(e){let t={p:"p",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"GetMonetizedStreams"}),"\n",(0,n.jsx)(o(),{method:"get",path:"/monetized-streams",context:"endpoint"}),"\n",(0,n.jsx)(t.p,{children:"Retrieves all created and deployed monetized streams (signaling services) along with their configurations."}),"\n",(0,n.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsx)(p(),{parameters:[]}),"\n",(0,n.jsx)(m(),{title:"Body",body:void 0}),"\n",(0,n.jsx)(c(),{id:void 0,label:void 0,responses:{200:{description:"List of monetized streams",content:{"application/json":{schema:{items:{allOf:[{description:"Construct a type with the properties of T except for those in type K.",title:"Omit_GenericApiResponseItem.name_",properties:{id:{type:"string"},state:{enum:["create","creating","created","update","updating","delete","deleting","deleted","retrieve","retrieved","link"],type:"string",title:"ResourceState"},type:{enum:["ad-break","monetized-stream","device","device-context","bootstrap","deployment","local-deployment","credentials","credentials-context","hardware-interface","networking","stream","stream-status","stream-event","alias","data-center","docker-stack","docker-service","docker-process"],type:"string",title:"ResourceType"}},required:["id","state","type"],type:"object"},{properties:{payload:{title:"MonetizedStream",properties:{backdropURI:{type:"string"},assetURI:{type:"string"},originPath:{type:"string"},networkCode:{type:"string"},assetKey:{type:"string"},layout:{enum:["SINGLE","DOUBLE","LSHAPE_AD","LSHAPE_CONTENT"],type:"string",title:"MonetizedStreamLayout"},segmentOrigin:{type:"string"},origin:{type:"string"},streamId:{type:"string"},version:{type:"string"},labels:{items:{type:"string"},type:"array"},description:{type:"string"},name:{type:"string"}},type:"object",description:"Obtain the return type of a function type"}},required:["payload"],type:"object"}],title:"ApiResponseItem_MonetizedStream_"},type:"array"}}}}}})]})}function z(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(S,{...e})}):S(e)}}}]);