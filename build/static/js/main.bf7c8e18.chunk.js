/*! For license information please see main.bf7c8e18.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),i=n(4),s=n.n(i),r=(n(9),n(2)),a=(n(10),n(0));var l=function(e){var t=e.userName,n=e.setUser,o=e.setInput,c=e.input;return Object(a.jsxs)("div",{className:"center",children:[Object(a.jsx)("header",{children:"Quiz"}),Object(a.jsxs)("form",{className:"form",children:[Object(a.jsxs)("div",{className:"input-name",children:[Object(a.jsx)("h1",{children:"Your name please:"}),Object(a.jsx)("input",{value:c,onChange:function(e){return o(e.target.value)}})]}),Object(a.jsx)("button",{className:"submit-name",type:"submit",onClick:function(e){if(e.preventDefault(),1===t.length)return alert("Can't rename; REFRESH"),o(t),null;n([c]),console.log(t)},disabled:!c,children:"Submit"})]})]})},u=(n(12),[{question:"Html is which type of language?",answerOptions:[{option:"It is a programming language",correct:!1,id:1},{option:"It is a markup language",correct:!0,id:2},{option:"It is a functional programming language",correct:!1,id:3},{option:"None of the above",correct:!1,id:4}]},{question:'In Javascript what does this mean "="',answerOptions:[{option:"Equal operator",correct:!1,id:1},{option:"Assignment operator",correct:!0,id:2},{option:"Boolean",correct:!1,id:3},{option:"None of the above",correct:!1,id:4}]},{question:"%, is called modulus, what does it do?",answerOptions:[{option:"Finds %",correct:!1,id:1},{option:"Divides the numbers",correct:!1,id:2},{option:"Finds the remainder",correct:!0,id:3},{option:"None of the above",correct:!1,id:4}]},{question:"What is the meaning of boolean value?",answerOptions:[{option:"True",correct:!1,id:1},{option:"False",correct:!1,id:2},{option:"True/False",correct:!0,id:3},{option:"None of the above",correct:!1,id:4}]},{question:'when something is written in quotes - "Hello!", Which data type is it? ',answerOptions:[{option:"String",correct:!0,id:1},{option:"Array",correct:!1,id:2},{option:"Object",correct:!1,id:3},{option:"None of the above",correct:!1,id:4}]}]);var d=function(){var e=Object(o.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(o.useState)(""),s=Object(r.a)(i,2),d=s[0],b=s[1],j=Object(o.useState)(1),m=Object(r.a)(j,2),p=m[0],h=m[1],O=Object(o.useState)(0),g=Object(r.a)(O,2),f=g[0],v=g[1],x=Object(o.useState)(0),N=Object(r.a)(x,2),y=N[0],w=N[1],C=Object(o.useState)(0),k=Object(r.a)(C,2),I=k[0],E=k[1],S=Object(o.useState)(!1),q=Object(r.a)(S,2),B=q[0],F=q[1],T=Object(o.useState)(""),z=Object(r.a)(T,2),D=(z[0],z[1],[1,2,3,4]);return Object(a.jsxs)("div",{children:[!1===B?Object(a.jsxs)("div",{id:"home",children:[Object(a.jsx)(l,{userName:n,setUser:c,input:d,setInput:b}),1===n.length?Object(a.jsxs)("div",{className:"section",children:[Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"quesNo",children:["Q",p,".",u[y].question]})}),Object(a.jsx)("div",{className:"options",children:u[y].answerOptions.map((function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:function(){return function(e,t){E(e),document.getElementById(e).style.backgroundColor="blue";var n=D.filter((function(t){return t!==e}));n.map((function(e){return document.getElementById(e).disabled=!0})),n.map((function(e){return document.getElementById(e).style.backgroundColor="rgb(51, 51, 51)"})),!0===t&&v(f+1),document.getElementsByClassName("next")[0].style.display="block"}(e.id,e.correct)},className:"option",id:e.id,children:e.option})})}))}),Object(a.jsx)("button",{onClick:function(){var e=y+1;e<u.length?(w(y+1),h(p+1)):F(!0),document.getElementById(I).style.backgroundColor="black";var t=D.filter((function(e){return e!==I}));t.map((function(e){return document.getElementById(e).disabled=!1})),t.map((function(e){return document.getElementById(e).style.backgroundColor="black"}));document.getElementsByClassName("next")[0].style.display="none",document.getElementsByClassName("option")[0].style.hover="yellow"},className:"next",children:"Next"})]}):null]}):Object(a.jsxs)("div",{className:"endscreen quesNo score",children:[n,", You have scored ",f,"/5",Object(a.jsx)("button",{className:"reset",onClick:function(){window.location.reload()},children:"Reset"})]}),Object(a.jsx)("main",{children:Object(a.jsx)("div",{id:"glass2"})}),Object(a.jsx)("div",{className:"circle1"}),Object(a.jsx)("div",{className:"circle2"})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),o(e),c(e),i(e),s(e)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(d,{})}),document.getElementById("root")),b()}],[[13,1,2]]]);
//# sourceMappingURL=main.bf7c8e18.chunk.js.map