(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(50),l=n.n(c),u=(n(59),n(1)),o=(n(60),function(e){var t=e.switchRoute;return r.a.createElement("header",null,r.a.createElement("h1",null,"clny"),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/",onClick:function(e){e.preventDefault(),t("/")}},"playground")),r.a.createElement("li",null,r.a.createElement("a",{href:"/about",onClick:function(e){e.preventDefault(),t("/about")}},"about")))))}),i=n(21),s=n.n(i),m=n(51),f=n(52),p=n.n(f),E=function(e,t){return function(){var n=Object(m.a)(s.a.mark(function n(a,r){var c,l,o,i,m;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p()(a,r,!1);case 3:c=n.sent,l=Object(u.a)(c,2),o=l[0],i=l[1],m="object"===typeof o?(s=o,JSON.stringify(s,null,2)):o,e(m),t(i),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),console.error(n.t0);case 15:case"end":return n.stop()}var s},n,null,[[0,12]])}));return function(e,t){return n.apply(this,arguments)}}()},d=(n(109),function(){var e=Object(a.useState)('# comment\n\nprint "Hello World"\n\n1 + 2 * 3\n\n'),t=Object(u.a)(e,2),n=t[0],c=t[1],l=["code","json","parse"],o=Object(a.useState)(l[0]),i=Object(u.a)(o,2),s=i[0],m=i[1],f=Object(a.useState)(!0),p=Object(u.a)(f,2),d=p[0],b=p[1],h=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),l=Object(u.a)(c,2),o=l[0],i=l[1];return[E(r,i),n,o]}(),v=Object(u.a)(h,3),g=v[0],w=v[1],j=v[2],y=function(){return g(n,s)};Object(a.useEffect)(function(){y()},[]);var O=Object(a.useRef)(null);Object(a.useEffect)(function(){var e=function(e){document.activeElement===O.current&&13===e.which&&!0===e.ctrlKey&&y()};return window.addEventListener("keypress",e,!1),function(){return window.removeEventListener("keypress",e)}},[n,s]);var k=""!==w,N=k||d;return r.a.createElement("div",{className:"playground"},r.a.createElement("textarea",{ref:O,cols:128,rows:16,value:n,onChange:function(e){return c(e.target.value)}}),r.a.createElement("div",{className:"wrap-content"},r.a.createElement("div",{className:"wrap-input"},r.a.createElement("div",{className:"wrap-radio-select"},r.a.createElement("div",{className:"wrap-radio"},l.map(function(e){return r.a.createElement("div",{key:e},r.a.createElement("input",{type:"radio",id:e,name:"mode",value:e,onChange:function(e){return m(e.target.value)},checked:e===s}),r.a.createElement("label",{htmlFor:e},e))})),r.a.createElement("div",{className:"wrap-select"},r.a.createElement("input",{type:"checkbox",id:"show-output",checked:d,onChange:function(e){return b(e.target.checked)}}),r.a.createElement("label",{htmlFor:"show-output"},"show output"))),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(e){return y()}},"play"))),r.a.createElement("div",{className:"result"},N&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"result:"),d&&j.map(function(e){return r.a.createElement("p",{className:"output",key:e},e)}),k&&r.a.createElement("code",null,w)))))}),b=(n(110),function(){return r.a.createElement("div",{className:"about"},r.a.createElement("div",{className:"wrap-content"},r.a.createElement("p",null,"Programming language implementation in JavaScript, using parser combinator library ",r.a.createElement("a",{href:"https://github.com/francisrstokes/arcsecond"},"Arcsecond")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/gilleswittenberg/clny-js"},"github.com/gilleswittenberg/clny-js")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/gilleswittenberg/clnylang.com"},"github.com/gilleswittenberg/clnylang.com")))))}),h=function(){return r.a.createElement("div",{className:"page404"},r.a.createElement("p",null,"404"))},v=document.location.pathname,g=function(e){var t={route:function(){return l},isHome:function(){return"/"===l},is404:function(){return void 0===l},isPage:function(e){return l===e}},n=e.find(function(e){return e===v}),r=Object(a.useState)(n),c=Object(u.a)(r,2),l=c[0],o=c[1];return Object(a.useEffect)(function(){window.onpopstate=function(){o(v)}},[]),[t,function(e){history.pushState(null,e,e),o(e)}]},w=(n(111),["/","/about"]),j=function(){var e=g(w),t=Object(u.a)(e,2),n=t[0],a=t[1],c=n.isHome(),l=n.isPage("/about"),i=n.is404();return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,{switchRoute:a}),r.a.createElement("main",null,c&&r.a.createElement(d,null),l&&r.a.createElement(b,null),i&&r.a.createElement(h,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},53:function(e,t,n){e.exports=n(112)},59:function(e,t,n){},60:function(e,t,n){}},[[53,1,2]]]);
//# sourceMappingURL=main.d2c1028b.chunk.js.map