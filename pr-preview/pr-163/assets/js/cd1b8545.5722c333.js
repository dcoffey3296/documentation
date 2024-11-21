"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["63147"],{25589:function(e,t,a){a.r(t),a.d(t,{metadata:()=>i,contentTitle:()=>k,default:()=>v,assets:()=>h,toc:()=>y,frontMatter:()=>b});var i=JSON.parse('{"id":"api/signaling/create-monetized-stream-break","title":"CreateMonetizedStreamBreak","description":"Creates an ad break on an existing monetized stream (signaling service).","source":"@site/theoads/api/signaling/create-monetized-stream-break.api.mdx","sourceDirName":"api/signaling","slug":"/api/signaling/create-monetized-stream-break","permalink":"/documentation/pr-preview/pr-163/theoads/api/signaling/create-monetized-stream-break","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"create-monetized-stream-break","title":"CreateMonetizedStreamBreak","description":"Creates an ad break on an existing monetized stream (signaling service).","sidebar_label":"CreateMonetizedStreamBreak","hide_title":true,"hide_table_of_contents":true,"api":"eJytVV1v2koQ/SureUokJ7T30W8koS1qEqJApXuF0NXgHext7V13P5JwEf/9anYxJoCqPpQX7PXZ+TxzZgOmJYteGT2WkMOtJfT0YDR59R/JqbeEzY0l/AEZWHKt0Y4c5Bv468NH/pPkCqtaNrC/LiGDwmhP2jME27ZWRfQx+O4YtwFXVNQg5Jst/7KzZpxALVCKJbsXRvMrvSnnlS5F04UoXIxRXDhVaqz5myP7ogq6vIYMPJYO8jnsU7pKOcEiA0dFsMqvIZ8vMmjRYkOeLOOPE5tVJB6OXSpJ2quVIsueFONa9BVkoLEhyKF5X8exjEX8GZQlCbm3gbK+EuDXLV9y3ipdwna7SGBy/sbINSOO7/5ukcErX7Ptoex62VpuvFepmc4EW9CZIDKQIdHj4KMOzZIsZLAytkEPOUgTljUx3Hm0/g79eWM1rk2I8ZIODfdlOn78fD+CDO4m327iw/30y/Bp9O/wrn++nTzORo8z7tl7k9k+syPK3idH0eWS6pik8tS4s2HtDtBaXMMxG8/glTx7nLp+2si9A7P8ToWHY7pPlh6VFr4iYckHqwXjhVkJFKugC4bFI0jD0pCvDE9raxxbi6TLYbCn21UiqBtsThi4HSx3DOAp6cgebM0GsFWDl4+wPZiNKXMokQRb9ZXWw8DO9kmmw57yf18Nn8ZXX0f/dBNREUqysQrMy+ee0aM3bNqaDvnX97Wn3Yd3pOoRHZd6CnWtnnegxXGl95e5g/3bLvaDBuuVOZyb2ZfRBKUTw1ZBBly2ZO+klawTHfh5NJ2J4dNYYF2bVyfWJghvRBHFTaCWokGNJZ1omcvEa6WKSqAlIamtzboh7R0z4kTl3LUYYVGdCmJhbBJs6dgtamGsKpXuvvsKvVDu4GJwbLcL/2L6eTi+vBafjBWSPKqapODC8MwzI02i7AtaZYITvX7G3HxFyorgsKRMtDWhY3avyHIwfK8kH5U8NpekKIOSxEJaq4K0i7zYNeZhPOOusNxh4ePWyCL5G9QHsLQ2DnQ6kV50mnc01nv1/KP7Jo2Fpzc/aGtUmgOP47XZzekcTuYUMsjP7Yo0qosMKh70fA6bzRIdfbP1dsvHPwPZ3fbiLiBrcNxdyvGzhHyFtaNfZH7xvFspl+I3VtzZ5Doh0KwCL1gHSoPxg9ZnV+B2sc06VeBgE+42hXQ1Y2u9nZO1ts26G8OioNb/Ers40MqnyXTGJd2t0sZIvmPxlXcyvqaYTSxRVLt4toEadRmwZGyyyb//AUH0L7Q=","sidebar_class_name":"post api-method","info_path":"theoads/api/signaling/theoads-api","custom_edit_url":null,"hide_send_button":true},"sidebar":"signalingApi","previous":{"title":"DeleteMonetizedStream","permalink":"/documentation/pr-preview/pr-163/theoads/api/signaling/delete-monetized-stream"},"next":{"title":"UpdateMonetizedStreamLayout","permalink":"/documentation/pr-preview/pr-163/theoads/api/signaling/update-monetized-stream-layout"}}'),n=a("85893"),s=a("50065"),r=a("87470"),o=a.n(r),d=a("44039"),p=a.n(d),m=a("40218"),l=a.n(m),c=a("69141"),g=a.n(c);a("61142"),a("5525");var u=a("34403");let b={id:"create-monetized-stream-break",title:"CreateMonetizedStreamBreak",description:"Creates an ad break on an existing monetized stream (signaling service).",sidebar_label:"CreateMonetizedStreamBreak",hide_title:!0,hide_table_of_contents:!0,api:"eJytVV1v2koQ/SureUokJ7T30W8koS1qEqJApXuF0NXgHext7V13P5JwEf/9anYxJoCqPpQX7PXZ+TxzZgOmJYteGT2WkMOtJfT0YDR59R/JqbeEzY0l/AEZWHKt0Y4c5Bv468NH/pPkCqtaNrC/LiGDwmhP2jME27ZWRfQx+O4YtwFXVNQg5Jst/7KzZpxALVCKJbsXRvMrvSnnlS5F04UoXIxRXDhVaqz5myP7ogq6vIYMPJYO8jnsU7pKOcEiA0dFsMqvIZ8vMmjRYkOeLOOPE5tVJB6OXSpJ2quVIsueFONa9BVkoLEhyKF5X8exjEX8GZQlCbm3gbK+EuDXLV9y3ipdwna7SGBy/sbINSOO7/5ukcErX7Ptoex62VpuvFepmc4EW9CZIDKQIdHj4KMOzZIsZLAytkEPOUgTljUx3Hm0/g79eWM1rk2I8ZIODfdlOn78fD+CDO4m327iw/30y/Bp9O/wrn++nTzORo8z7tl7k9k+syPK3idH0eWS6pik8tS4s2HtDtBaXMMxG8/glTx7nLp+2si9A7P8ToWHY7pPlh6VFr4iYckHqwXjhVkJFKugC4bFI0jD0pCvDE9raxxbi6TLYbCn21UiqBtsThi4HSx3DOAp6cgebM0GsFWDl4+wPZiNKXMokQRb9ZXWw8DO9kmmw57yf18Nn8ZXX0f/dBNREUqysQrMy+ee0aM3bNqaDvnX97Wn3Yd3pOoRHZd6CnWtnnegxXGl95e5g/3bLvaDBuuVOZyb2ZfRBKUTw1ZBBly2ZO+klawTHfh5NJ2J4dNYYF2bVyfWJghvRBHFTaCWokGNJZ1omcvEa6WKSqAlIamtzboh7R0z4kTl3LUYYVGdCmJhbBJs6dgtamGsKpXuvvsKvVDu4GJwbLcL/2L6eTi+vBafjBWSPKqapODC8MwzI02i7AtaZYITvX7G3HxFyorgsKRMtDWhY3avyHIwfK8kH5U8NpekKIOSxEJaq4K0i7zYNeZhPOOusNxh4ePWyCL5G9QHsLQ2DnQ6kV50mnc01nv1/KP7Jo2Fpzc/aGtUmgOP47XZzekcTuYUMsjP7Yo0qosMKh70fA6bzRIdfbP1dsvHPwPZ3fbiLiBrcNxdyvGzhHyFtaNfZH7xvFspl+I3VtzZ5Doh0KwCL1gHSoPxg9ZnV+B2sc06VeBgE+42hXQ1Y2u9nZO1ts26G8OioNb/Ers40MqnyXTGJd2t0sZIvmPxlXcyvqaYTSxRVLt4toEadRmwZGyyyb//AUH0L7Q=",sidebar_class_name:"post api-method",info_path:"theoads/api/signaling/theoads-api",custom_edit_url:null,hide_send_button:!0},k=void 0,h={},y=[];function O(e){let t={p:"p",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.default,{as:"h1",className:"openapi__heading",children:"CreateMonetizedStreamBreak"}),"\n",(0,n.jsx)(o(),{method:"post",path:"/monetized-streams/{monetizedStreamId}/break",context:"endpoint"}),"\n",(0,n.jsx)(t.p,{children:"Creates an ad break on an existing monetized stream (signaling service)."}),"\n",(0,n.jsx)(u.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsx)(p(),{parameters:[{description:"The Monetized stream identifier.",in:"path",name:"monetizedStreamId",required:!0,schema:{type:"string"}}]}),"\n",(0,n.jsx)(l(),{title:"Body",body:{required:!0,content:{"application/json":{schema:{title:"AdBreak",properties:{source:{type:"string"},duration:{type:"number",format:"double"},startDate:{type:"string"},layout:{enum:["SINGLE","DOUBLE","LSHAPE_AD","LSHAPE_CONTENT"],type:"string",title:"MonetizedStreamLayout"},labels:{items:{type:"string"},type:"array"},description:{type:"string"},id:{type:"string"},name:{type:"string"}},type:"object",description:"Obtain the return type of a function type"}}}}}),"\n",(0,n.jsx)(g(),{id:void 0,label:void 0,responses:{201:{description:"Created",content:{"application/json":{schema:{}}}}}})]})}function v(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(O,{...e})}):O(e)}}}]);