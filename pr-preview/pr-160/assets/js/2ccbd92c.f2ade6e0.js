"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["17795"],{67663:function(t,e,s){s.r(e),s.d(e,{metadata:()=>a,contentTitle:()=>b,default:()=>R,assets:()=>I,toc:()=>B,frontMatter:()=>g});var a=JSON.parse('{"id":"api/signaling/status","title":"Status","description":"Get the status of the API.","source":"@site/theoads/api/signaling/status.api.mdx","sourceDirName":"api/signaling","slug":"/api/signaling/status","permalink":"/documentation/pr-preview/pr-160/theoads/api/signaling/status","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"status","title":"Status","description":"Get the status of the API.","sidebar_label":"Status","hide_title":true,"hide_table_of_contents":true,"api":"eJyNVMFu2zAM/RWBpw1Qm25H33LIuqAYViwZsKHIgbEZW50sqRKVLjP87wPtJPXSAZsvtiXyiXzvUR34QBHZeLesoIAVI+cEGiKl4F2iBEUH729u5FVRKqMJEgwFrBtSaQhXfqe4ITW/X16DhtI7JseSgSFYUw7ws8ckaR2ksqEW5StEOZzNeMiIJV98CAQFJI7G1dBroBh9fL2jwWVrcWsJCo6Zeg05sGlpEupyu6UIGnY+tshQQOWzZPQaJDQxtuE/4/cUkxmbuCixF8KesolUQfFwauVU+Lms6ZEvcBt9gvPbRyoZNGBVGSEN7f2Eox3aRILB0jEsj2L18ugLdW6JB03+qhBjnaTOI8BGQ6IyR8MHKB42GgJGbIkppvG/JW682KMmqS4gN1DA7NxmorgfgzvI0coeBjPbv4N+gr0S4UetMZg7Osyz4JzJHBdFVRQJ4dvV/H55dbf4DhqM9NQQVhQHto3b+SH1yMX64+IzVknNg5kwWwBc8iKuPQV/WazWQolCa/1zUgefFXtVRkImha5SLTqsSbXeEZtfVKnEkbBNWj03pmwURlIVBesPLTkeaE6mdmiNq5WwYkpK12qBZfMKRJU+jlNWJTkWnfLR1Mad9rlBViZNEnMS3FP5b1a38+Xba/XBR1URo7FUKSFGjGu8U94Nou8xGp+TelF16I0bMlHlhDVpFSxhIhVpR1GKkbyamIc+GCNTpepsKhL7WFOSS8OUHaX6tFzLgMjkYymTLxoFn7hFNwk73y5/aNK93Bj/sO3oE6afPAsWjZMzB791R0+eR2+jofGJZaXrtpjoa7R9L8tPmeLR5kLMeHs8bHp9speY+AcdoIB5WVIQw+/R5tGhF9dZPx2O28Ua+v43McLUjQ==","sidebar_class_name":"get api-method","info_path":"theoads/api/signaling/theoads-api","custom_edit_url":null,"hide_send_button":true},"sidebar":"signalingApi","previous":{"title":"UpdateMonetizedStreamLayout","permalink":"/documentation/pr-preview/pr-160/theoads/api/signaling/update-monetized-stream-layout"}}'),i=s("85893"),n=s("50065"),o=s("87470"),p=s.n(o),r=s("44039"),u=s.n(r),d=s("40218"),l=s.n(d),h=s("69141"),m=s.n(h);s("61142"),s("5525");var c=s("34403");let g={id:"status",title:"Status",description:"Get the status of the API.",sidebar_label:"Status",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVMFu2zAM/RWBpw1Qm25H33LIuqAYViwZsKHIgbEZW50sqRKVLjP87wPtJPXSAZsvtiXyiXzvUR34QBHZeLesoIAVI+cEGiKl4F2iBEUH729u5FVRKqMJEgwFrBtSaQhXfqe4ITW/X16DhtI7JseSgSFYUw7ws8ckaR2ksqEW5StEOZzNeMiIJV98CAQFJI7G1dBroBh9fL2jwWVrcWsJCo6Zeg05sGlpEupyu6UIGnY+tshQQOWzZPQaJDQxtuE/4/cUkxmbuCixF8KesolUQfFwauVU+Lms6ZEvcBt9gvPbRyoZNGBVGSEN7f2Eox3aRILB0jEsj2L18ugLdW6JB03+qhBjnaTOI8BGQ6IyR8MHKB42GgJGbIkppvG/JW682KMmqS4gN1DA7NxmorgfgzvI0coeBjPbv4N+gr0S4UetMZg7Osyz4JzJHBdFVRQJ4dvV/H55dbf4DhqM9NQQVhQHto3b+SH1yMX64+IzVknNg5kwWwBc8iKuPQV/WazWQolCa/1zUgefFXtVRkImha5SLTqsSbXeEZtfVKnEkbBNWj03pmwURlIVBesPLTkeaE6mdmiNq5WwYkpK12qBZfMKRJU+jlNWJTkWnfLR1Mad9rlBViZNEnMS3FP5b1a38+Xba/XBR1URo7FUKSFGjGu8U94Nou8xGp+TelF16I0bMlHlhDVpFSxhIhVpR1GKkbyamIc+GCNTpepsKhL7WFOSS8OUHaX6tFzLgMjkYymTLxoFn7hFNwk73y5/aNK93Bj/sO3oE6afPAsWjZMzB791R0+eR2+jofGJZaXrtpjoa7R9L8tPmeLR5kLMeHs8bHp9speY+AcdoIB5WVIQw+/R5tGhF9dZPx2O28Ua+v43McLUjQ==",sidebar_class_name:"get api-method",info_path:"theoads/api/signaling/theoads-api",custom_edit_url:null,hide_send_button:!0},b=void 0,I={},B=[];function f(t){let e={p:"p",...(0,n.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.default,{as:"h1",className:"openapi__heading",children:"Status"}),"\n",(0,i.jsx)(p(),{method:"get",path:"/status",context:"endpoint"}),"\n",(0,i.jsx)(e.p,{children:"Get the status of the API."}),"\n",(0,i.jsx)(c.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsx)(u(),{parameters:[]}),"\n",(0,i.jsx)(l(),{title:"Body",body:void 0}),"\n",(0,i.jsx)(m(),{id:void 0,label:void 0,responses:{200:{description:"The status of the API.",content:{"application/json":{schema:{properties:{status:{type:"string"},error:{type:"string",nullable:!0},uptime:{type:"number",format:"double"},timestamp:{type:"number",format:"double"},version:{type:"string"}},required:["status","error","uptime","timestamp","version"],type:"object",additionalProperties:!1,title:"IStatus"}}}}}})]})}function R(t={}){let{wrapper:e}={...(0,n.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(f,{...t})}):f(t)}}}]);