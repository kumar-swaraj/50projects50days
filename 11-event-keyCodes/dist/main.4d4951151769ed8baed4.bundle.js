!function(){"use strict";const e=document.querySelectorAll(".key");e.forEach(((t,n)=>{n!==e.length-1&&(t.style.display="none")})),document.addEventListener("keyup",(function(t){e.forEach(((n,o)=>{if(o===e.length-1)return void(n.style.display="none");const l=n.querySelector("span");0===o&&(l.textContent=" "===t.key?"space":t.key),1===o&&(l.textContent=t.keyCode),2===o&&(l.textContent=t.code),n.style.display="inline-flex"}))}))}();