window.addEventListener("message",(e=>{if(e.origin!==location.origin)return;const t=e.data;if("object"==typeof t&&null!=t)switch(t.type){case"deviceType":{const e=document.querySelector("theoplayer-default-ui, theoplayer-ui");e?.setAttribute("device-type",t.deviceType);break}case"source":{const e=document.querySelector("theoplayer-default-ui, theoplayer-ui");e&&(e.source=t.source);break}case"style":{const e=document.querySelector("style#custom-style");e&&(e.textContent=t.style);break}}}));