(this.webpackJsonpkiwi=this.webpackJsonpkiwi||[]).push([[0],{33:function(e,t,c){},40:function(e,t,c){},42:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var n=c(8),a=c.n(n),s=c(35),i=c.n(s),r=(c(40),c.p,c(33),c(29)),j=c(12),l=c(1),o=c.n(l),u=c(3),d=(c(42),c(31)),b=(c(43),c(50),c(49),d.a.initializeApp({apiKey:"AIzaSyDH_xQF-kBsVMEDwLNDJubGrzOp0Qnr_iU",authDomain:"kiwi-d5dd3.firebaseapp.com",projectId:"kiwi-d5dd3",storageBucket:"kiwi-d5dd3.appspot.com",messagingSenderId:"335393250887",appId:"1:335393250887:web:231c18d1aa6d4356891b62",measurementId:"G-7FJX546NWQ"}),d.a,d.a.firestore()),m=c(6);var O=function(){Object(n.useEffect)((function(){}),[]);var e=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(b),e.next=3,b.collection("clickDatas").add({name:"\uae40\ud638\uc9c4",created:Date.now()});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"main-page-container",children:[Object(m.jsxs)("div",{className:"main-page-section",children:[Object(m.jsx)("div",{className:"main-section-left",children:"This is Section1 Left"}),Object(m.jsx)("div",{className:"main-section-right",children:"This is Section1 Right"})]}),Object(m.jsxs)("div",{className:"main-page-section",children:[Object(m.jsx)("div",{className:"main-section-left",children:"This is Section2 Left"}),Object(m.jsx)("div",{className:"main-section-right",children:"This is Section2 Right"})]}),Object(m.jsx)("div",{className:"main-page-section",children:Object(m.jsx)("div",{children:Object(m.jsx)(r.b,{to:"makePage",onClick:e,children:"\uc774\ub3d9\ud558\uae30"})})})]})},h=c(14),p=(c(46),function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(h.a)(s,2),r=i[0],j=i[1],l=Object(n.useState)(""),d=Object(h.a)(l,2),b=d[0],O=d[1],p=Object(n.useState)(""),x=Object(h.a)(p,2),g=x[0],f=x[1],v=Object(n.useState)(""),N=Object(h.a)(v,2),k=(N[0],N[1],Object(n.useState)("")),y=Object(h.a)(k,2),w=y[0],C=y[1],S=Object(n.useState)("yellow"),T=Object(h.a)(S,2),F=T[0],D=T[1],I=Object(n.useState)(0),L=Object(h.a)(I,2),R=L[0],z=L[1],B=Object(n.useState)(1),P=Object(h.a)(B,2),A=P[0],J=P[1],E=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(e,t){console.log("e",t);var c=e.target.files[0],n=new FileReader;n.onloadend=function(e){var c=e.currentTarget.result;switch(t){case 1:f(c);break;case 2:C(c);break;case 3:f(c)}},n.readAsDataURL(c)};return Object(m.jsxs)("div",{className:"make-page-container",children:[Object(m.jsxs)("div",{className:"make-page-example",children:[Object(m.jsx)("div",{className:"main-page-section",style:{backgroundColor:"".concat(F)},children:"Top"}),Object(m.jsxs)("div",{className:"main-page-section",children:[Object(m.jsx)("div",{className:"main-section-left",children:c}),Object(m.jsx)("div",{className:"main-section-right",children:g&&Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:g,className:"section-image",style:{marginTop:"".concat(R,"px")}})})})]}),Object(m.jsxs)("div",{className:"main-page-section",children:[Object(m.jsx)("div",{className:"main-section-left",children:w&&Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:w,className:"section-image",style:{marginTop:"".concat(R,"px")}})})}),Object(m.jsx)("div",{className:"main-section-right",children:r})]}),Object(m.jsx)("div",{className:"main-page-section",children:"\uc2e0\uccad\ubc1b\ub294 \uacf3"}),"\uc608\uc2dc"]}),Object(m.jsxs)("div",{className:"make-page-make-space",children:[Object(m.jsxs)("div",{className:"section-selector-container",children:[Object(m.jsx)("span",{className:"make-page-section-selector",onClick:function(e){return J(1)},children:"1\ubc88"}),Object(m.jsx)("span",{className:"make-page-section-selector",onClick:function(e){return J(2)},children:"2\ubc88"}),Object(m.jsx)("span",{className:"make-page-section-selector",onClick:function(e){return J(3)},children:"3\ubc88"})]}),function(){switch(A){case 1:return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{children:["1\ubc88",Object(m.jsx)("input",{value:c,type:"text",onChange:function(e){return a(e.currentTarget.value)}}),Object(m.jsx)("input",{type:"file",accept:"image/*",className:"file-input",onChange:function(e){return Q(e,1)}}),"\uc67c\ucabd",Object(m.jsx)("input",{value:R,type:"number",onChange:function(e){return z(e.currentTarget.value)}})]})});case 2:return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{children:["2\ubc88",Object(m.jsx)("input",{value:r,type:"text",onChange:function(e){return j(e.currentTarget.value)}}),Object(m.jsx)("input",{type:"file",accept:"image/*",className:"file-input",onChange:function(e){return Q(e,2)}}),"\uc67c\ucabd"]})});case 3:return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{children:["3\ubc88",Object(m.jsx)("input",{value:b,type:"text",onChange:function(e){return O(e.currentTarget.value)}}),Object(m.jsx)("input",{type:"file",accept:"image/*",className:"file-input",onChange:Q}),"\uc67c\ucabd"]})})}}(),Object(m.jsx)("input",{value:F,type:"color",onChange:function(e){return D(e.currentTarget.value)}}),Object(m.jsx)("button",{onClick:E,children:"\ub4f1\ub85d"}),"\uc791\uc131"]})]})});c(47);var x=function(){return Object(m.jsx)("div",{className:"nav-bar-container",children:"NavBar"})};var g=function(){return Object(m.jsx)("div",{children:"ResponsePage"})},f=c(16),v=Object(f.b)(),N=function(){return Object(m.jsx)(r.a,{history:v,children:Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"Container",style:{minHeight:"calc(100vh - 80px)",zIndex:-1},children:Object(m.jsxs)(j.c,{children:[Object(m.jsx)(j.a,{exact:!0,path:"/",element:Object(m.jsx)(O,{})}),Object(m.jsx)(j.a,{path:"/makePage",element:Object(m.jsx)(p,{})}),Object(m.jsx)(j.a,{path:"/seeResponse",element:Object(m.jsx)(g,{})})]})})})})};var k=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(x,{}),Object(m.jsx)(N,{}),Object(m.jsxs)("footer",{className:"footer",children:[Object(m.jsxs)("div",{className:"footer-item",children:[Object(m.jsx)("a",{href:"https://google.com",className:"insta",children:"\ud83d\udcc6 Instagram"}),Object(m.jsx)("a",{href:"https://naver.com",className:"insta",style:{marginLeft:"3%"},children:"\ubb38\uc758\ud558\uae30"})]}),Object(m.jsxs)("div",{className:"footer-item",children:["&copyright by soozip ",(new Date).getFullYear()]})]})]})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root")),y()}},[[48,1,2]]]);
//# sourceMappingURL=main.c9dbcb3c.chunk.js.map