!function(e){const t=e.ko=e.ko||{};t.dictionary=Object.assign(t.dictionary||{},{"%0 of %1":"%0 / %1",Aquamarine:"\uc5f0\ud55c \uccad\ub85d\uc0c9",Big:"\ud070",Black:"\uac80\uc740\uc0c9",Blue:"\ud30c\ub791\uc0c9",Bold:"\uad75\uac8c","Bulleted List":"\ubd88\ub9bf \ubaa9\ub85d",Cancel:"\ucde8\uc18c",Default:"\uae30\ubcf8","Dim grey":"\uc9c4\ud55c \ud68c\uc0c9","Document colors":"\ubb38\uc11c \uc0c9\uae54\ub4e4",Downloadable:"\ub2e4\uc6b4\ub85c\ub4dc \uac00\ub2a5","Dropdown toolbar":"\ub4dc\ub86d\ub2e4\uc6b4 \ud234\ubc14","Edit block":"\ud3b8\uc9d1 \uc601\uc5ed","Edit link":"\ub9c1\ud06c \ud3b8\uc9d1","Editor toolbar":"\uc5d0\ub514\ud130 \ud234\ubc14","Font Background Color":"\uae00\uc790 \ubc30\uacbd \uc0c9\uae54","Font Color":"\uae00\uc790 \uc0c9\uae54","Font Family":"\uae00\uaf34 \uc9d1\ud569","Font Size":"\uae00\uc790 \ud06c\uae30",Green:"\ucd08\ub85d\uc0c9",Grey:"\ud68c\uc0c9",Huge:"\ub9e4\uc6b0 \ud070","Insert paragraph after block":"","Insert paragraph before block":"",Italic:"\uae30\uc6b8\uc784\uaf34","Light blue":"\uc5f0\ud55c \ud30c\ub791\uc0c9","Light green":"\ubc1d\uc740 \ucd08\ub85d\uc0c9","Light grey":"\ubc1d\uc740 \ud68c\uc0c9",Link:"\ub9c1\ud06c","Link URL":"\ub9c1\ud06c \uc8fc\uc18c",Next:"\ub2e4\uc74c","Numbered List":"\ubc88\ud638 \ubaa9\ub85d","Open in a new tab":"\uc0c8 \ud0ed\uc5d0\uc11c \uc5f4\uae30","Open link in new tab":"\uc0c8 \ud0ed\uc5d0\uc11c \ub9c1\ud06c \uc5f4\uae30",Orange:"\uc8fc\ud669\uc0c9",Previous:"\uc774\uc804",Purple:"\ubcf4\ub77c\uc0c9",Red:"\ube68\uac04\uc0c9",Redo:"\ub2e4\uc2dc \uc2e4\ud589","Remove color":"\uc0c9\uae54 \uc81c\uac70","Rich Text Editor":"\ub9ac\uce58 \ud14d\uc2a4\ud2b8 \ud3b8\uc9d1\uae30","Rich Text Editor, %0":"\ub9ac\uce58 \ud14d\uc2a4\ud2b8 \ud3b8\uc9d1\uae30, %0",Save:"\uc800\uc7a5","Select all":"\uc804\uccb4 \uc120\ud0dd","Show more items":"\ub354\ubcf4\uae30",Small:"\uc791\uc740",Strikethrough:"\ucde8\uc18c\uc120","This link has no URL":"\uc774 \ub9c1\ud06c\uc5d0\ub294 URL\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",Tiny:"\ub9e4\uc6b0 \uc791\uc740",Turquoise:"\uccad\ub85d\uc0c9",Underline:"\ubc11\uc904",Undo:"\uc2e4\ud589 \ucde8\uc18c",Unlink:"\ub9c1\ud06c \uc0ad\uc81c",White:"\ud770\uc0c9","Widget toolbar":"\uc704\uc82f \ud234\ubc14",Yellow:"\ub178\ub791\uc0c9"}),t.getPluralForm=function(e){return 0}}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),(this.webpackJsonpkiwi=this.webpackJsonpkiwi||[]).push([[3],{858:function(e,t,n){"use strict";n.r(t),n.d(t,"getCLS",(function(){return m})),n.d(t,"getFCP",(function(){return S})),n.d(t,"getFID",(function(){return k})),n.d(t,"getLCP",(function(){return F})),n.d(t,"getTTFB",(function(){return R}));var i,r,a,o,u=function(e,t){return{name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v1-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},c=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},s=function(e,t){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},f=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t)}),!0)},d="function"==typeof WeakSet?new WeakSet:new Set,l=function(e,t,n){var i;return function(){t.value>=0&&(n||d.has(t)||"hidden"===document.visibilityState)&&(t.delta=t.value-(i||0),(t.delta||void 0===i)&&(i=t.value,e(t)))}},m=function(e,t){var n,i=u("CLS",0),r=function(e){e.hadRecentInput||(i.value+=e.value,i.entries.push(e),n())},a=c("layout-shift",r);a&&(n=l(e,i,t),s((function(){a.takeRecords().map(r),n()})),f((function(){i=u("CLS",0),n=l(e,i,t)})))},p=-1,v=function(){return"hidden"===document.visibilityState?0:1/0},h=function(){s((function(e){var t=e.timeStamp;p=t}),!0)},g=function(){return p<0&&(p=v(),h(),f((function(){setTimeout((function(){p=v(),h()}),0)}))),{get timeStamp(){return p}}},S=function(e,t){var n,i=g(),r=u("FCP"),a=function(e){"first-contentful-paint"===e.name&&(s&&s.disconnect(),e.startTime<i.timeStamp&&(r.value=e.startTime,r.entries.push(e),d.add(r),n()))},o=performance.getEntriesByName("first-contentful-paint")[0],s=o?null:c("paint",a);(o||s)&&(n=l(e,r,t),o&&a(o),f((function(i){r=u("FCP"),n=l(e,r,t),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,d.add(r),n()}))}))})))},y={passive:!0,capture:!0},w=new Date,L=function(e,t){i||(i=t,r=e,a=new Date,b(removeEventListener),T())},T=function(){if(r>=0&&r<a-w){var e={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+r};o.forEach((function(t){t(e)})),o=[]}},E=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){L(e,t),r()},i=function(){r()},r=function(){removeEventListener("pointerup",n,y),removeEventListener("pointercancel",i,y)};addEventListener("pointerup",n,y),addEventListener("pointercancel",i,y)}(t,e):L(t,e)}},b=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,E,y)}))},k=function(e,t){var n,a=g(),m=u("FID"),p=function(e){e.startTime<a.timeStamp&&(m.value=e.processingStart-e.startTime,m.entries.push(e),d.add(m),n())},v=c("first-input",p);n=l(e,m,t),v&&s((function(){v.takeRecords().map(p),v.disconnect()}),!0),v&&f((function(){var a;m=u("FID"),n=l(e,m,t),o=[],r=-1,i=null,b(addEventListener),a=p,o.push(a),T()}))},F=function(e,t){var n,i=g(),r=u("LCP"),a=function(e){var t=e.startTime;t<i.timeStamp&&(r.value=t,r.entries.push(e)),n()},o=c("largest-contentful-paint",a);if(o){n=l(e,r,t);var m=function(){d.has(r)||(o.takeRecords().map(a),o.disconnect(),d.add(r),n())};["keydown","click"].forEach((function(e){addEventListener(e,m,{once:!0,capture:!0})})),s(m,!0),f((function(i){r=u("LCP"),n=l(e,r,t),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,d.add(r),n()}))}))}))}},R=function(e){var t,n=u("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();if(n.value=n.delta=t.responseStart,n.value<0)return;n.entries=[t],e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)}}}]);
//# sourceMappingURL=3.eb970d0d.chunk.js.map