(this["webpackJsonpbreaking-bad"]=this["webpackJsonpbreaking-bad"]||[]).push([[0],{41:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(14),s=c.n(r),i=c(5),j=c.n(i),o=c(15),l=c(3),b=c(16),u=c.n(b),d=c.p+"static/media/logo.e6ecab44.png",O=c(0),h=function(){return Object(O.jsx)("header",{className:"center",children:Object(O.jsx)("img",{src:d,alt:"logo for breaking bad cast"})})},x=function(){return Object(O.jsx)("footer",{children:Object(O.jsx)("p",{children:"copyright \xa9 2021"})})},m=function(e){var t=e.getQuery,c=Object(n.useState)(""),a=Object(l.a)(c,2),r=a[0],s=a[1];return Object(O.jsx)("section",{className:"search",children:Object(O.jsx)("form",{action:"",children:Object(O.jsx)("input",{type:"text",className:"form-control",placeholder:"Search characters",value:r,onChange:function(e){return c=e.target.value,s(c),void t(c);var c},autoFocus:!0})})})},p=function(e){for(var t=e.postsPerPage,c=e.totalPosts,n=e.paginate,a=[],r=1;r<=Math.ceil(c/t);r++)a.push(r);return Object(O.jsx)("nav",{children:Object(O.jsx)("ul",{className:"pagination center",children:a.map((function(e,t){return Object(O.jsx)("li",{className:"page-item",children:Object(O.jsx)("a",{href:"!#",onClick:function(){return n(e)},className:"page-link",children:e})},t)}))})})},g=function(e){var t=e.item;return Object(O.jsx)("div",{className:"card",children:Object(O.jsxs)("div",{className:"card-inner",children:[Object(O.jsx)("div",{className:"card-front",children:Object(O.jsx)("img",{src:t.img,alt:""})}),Object(O.jsxs)("div",{className:"card-back",children:[Object(O.jsx)("h1",{children:t.name}),Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:[Object(O.jsx)("strong",{children:"Actor Name:"})," ",t.portrayed]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("strong",{children:"Nickname:"})," ",t.nickname]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("strong",{children:"Birthday:"})," ",t.birthday]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("strong",{children:"Status:"})," ",t.status]})]})]})]})})},f=c.p+"static/media/spinner.11d9cde8.gif",v=function(){return Object(O.jsx)("img",{src:f,style:{width:"200px",margin:"auto",display:"block"},alt:"loading..."})},N=function(e){var t=e.items;return e.isLoading?Object(O.jsx)(v,{}):Object(O.jsx)("section",{className:"cards",children:t.map((function(e){return[Object(O.jsx)(g,{item:e},e.char_id)]}))})},k=(c(41),function(){var e=Object(n.useState)(1),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(12),s=Object(l.a)(r,1)[0],i=Object(n.useState)([]),b=Object(l.a)(i,2),d=b[0],g=b[1],f=Object(n.useState)(!0),v=Object(l.a)(f,2),k=v[0],y=v[1],S=Object(n.useState)(""),w=Object(l.a)(S,2),P=w[0],B=w[1];Object(n.useEffect)((function(){(function(){var e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u()("https://www.breakingbadapi.com/api/characters?name=".concat(P));case 2:t=e.sent,g(t.data),y(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[P]);var C=c*s,E=C-s,J=d.slice(E,C);return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(h,{}),Object(O.jsx)(m,{getQuery:function(e){return B(e)}}),Object(O.jsx)(N,{isLoading:k,items:J}),Object(O.jsx)(p,{postsPerPage:s,totalPosts:d.length,paginate:function(e){return a(e)}}),Object(O.jsx)(x,{})]})});c(42);s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.2f04892b.chunk.js.map