(this.webpackJsonppokereactjs=this.webpackJsonppokereactjs||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(6),s=c.n(a),i=c(2),o=c.n(i),l=c(3),j=c(4),u=(c(12),c(0)),d=function(){return Object(u.jsx)("nav",{children:Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png",alt:"pokeapi-logo",className:"navbar-image",onClick:function(){window.location="/"}})})})},b=r.a.useState,p=function(e){var t=e.onSearch,c=b(""),n=Object(j.a)(c,2),r=n[0],a=n[1],s=function(){var e=Object(l.a)(o.a.mark((function e(c){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(r);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"searchbar-container",children:[Object(u.jsx)("div",{className:"searchbar",children:Object(u.jsx)("input",{placeholder:"Buscar pokemon...",onChange:function(e){a(e.target.value.toLowerCase()),0===e.target.value.length&&t(null)}})}),Object(u.jsx)("div",{className:"searchbar-btn",children:Object(u.jsx)("button",{onClick:s,children:"Buscar"})})]})},h={bug:"#729f3f",dragon:"#53a4cf",fairy:"#fdb9e9",fire:"#fd7d24",ghost:"#7b62a3",ground:"#f7de3f",normal:"#a4acaf",psychic:"#f366b9",steel:"#9eb7b",dark:"#707070",electric:"#eed535",fighting:"#d56723",flying:"#3dc7ef",grass:"#9bcc50",ice:"#51c4e7",poison:"#b97fc9",rock:"#a38c21",water:"#4592c4"},x=function(e){var t=e.pokemon;return Object(u.jsxs)("div",{className:"pokemon-card",children:[Object(u.jsx)("div",{className:"pokemon-img-container",children:Object(u.jsx)("img",{src:t.sprites.front_default,alt:t.name,className:"pokemon-img"})}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("div",{className:"card-tittle",children:Object(u.jsxs)("h3",{children:["#",t.id," ",t.name]})}),Object(u.jsx)("div",{className:"card-botton",children:Object(u.jsx)("div",{className:"pokemon-type",children:Object(u.jsx)("div",{children:t.types.map((function(e,t){return Object(u.jsx)("div",{className:"pokemon-type-text",style:{backgroundColor:h[e.type.name]},children:e.type.name},t)}))})})})]})]})},f=function(){return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 21 21",width:"28",height:"28",children:Object(u.jsx)("path",{d:"M11.5 14.5l-4-4 4-4",fill:"none",stroke:"#FFF","stroke-linecap":"round","stroke-linejoin":"round"})})},v=function(){return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 21 21",width:"28",height:"28",children:Object(u.jsx)("path",{d:"M9.5 14.5l4-4-4-4",fill:"none",stroke:"#FFF","stroke-linecap":"round","stroke-linejoin":"round"})})},O=function(e){var t=e.onLeft,c=e.onRight,n=e.pagina,r=e.totalPagina;return Object(u.jsxs)("div",{className:"paginacion",children:[Object(u.jsx)("button",{className:"pagination-btn",onClick:t,children:Object(u.jsx)("div",{className:"icon",children:Object(u.jsx)(f,{})})}),Object(u.jsxs)("div",{children:[" ",n," de ",r]}),Object(u.jsx)("button",{className:"pagination-btn",onClick:c,children:Object(u.jsx)("div",{className:"icon",children:Object(u.jsx)(v,{})})})]})},m=(c(14),function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"sk-circle",children:[Object(u.jsx)("div",{className:"sk-circle1 sk-child"}),Object(u.jsx)("div",{className:"sk-circle2 sk-child"}),Object(u.jsx)("div",{className:"sk-circle3 sk-child"}),Object(u.jsx)("div",{className:"sk-circle4 sk-child"}),Object(u.jsx)("div",{className:"sk-circle5 sk-child"}),Object(u.jsx)("div",{className:"sk-circle6 sk-child"}),Object(u.jsx)("div",{className:"sk-circle7 sk-child"}),Object(u.jsx)("div",{className:"sk-circle8 sk-child"}),Object(u.jsx)("div",{className:"sk-circle9 sk-child"}),Object(u.jsx)("div",{className:"sk-circle10 sk-child"}),Object(u.jsx)("div",{className:"sk-circle11 sk-child"}),Object(u.jsx)("div",{className:"sk-circle12 sk-child"})]})})}),k=function(e){var t=e.pokemons,c=e.pagina,n=e.setPagina,r=e.total,a=e.loading;return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"paginacion",children:[Object(u.jsx)("h1",{children:"Pokedex"}),Object(u.jsx)(O,{pagina:c+1,totalPagina:r,onLeft:function(){var e=Math.max(c-1,0);n(e)},onRight:function(){var e=Math.min(c+1,r-1);n(e)}})]}),a?Object(u.jsx)(m,{}):Object(u.jsx)("div",{className:"pokedex-grid",children:t.map((function(e,t){return Object(u.jsx)(x,{pokemon:e},e.name)}))})]})},g=function(){var e=Object(l.a)(o.a.mark((function e(t){var c,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c="https://pokeapi.co/api/v2/pokemon/".concat(t),e.next=4,fetch(c);case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c,n,r,a,s=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:24,c=s.length>1&&void 0!==s[1]?s[1]:0,e.prev=2,n="https://pokeapi.co/api/v2/pokemon?limit=".concat(t,"&offset=").concat(c),e.next=6,fetch(n);case 6:return r=e.sent,e.next=9,r.json();case 9:return a=e.sent,e.abrupt("return",a);case 13:e.prev=13,e.t0=e.catch(2);case 15:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(o.a.mark((function e(t){var c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return c=e.sent,e.next=6,c.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){return Object(u.jsx)("footer",{children:Object(u.jsx)("div",{children:Object(u.jsxs)("h3",{children:["Creado por ",Object(u.jsx)("a",{href:"https://github.com/Mart994/",children:"MartinGimenez"})," "]})})})};var S=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(0),s=Object(j.a)(a,2),i=s[0],b=s[1],h=Object(n.useState)(0),x=Object(j.a)(h,2),f=x[0],v=x[1],O=Object(n.useState)(!0),m=Object(j.a)(O,2),S=m[0],P=m[1],C=Object(n.useState)(!1),F=Object(j.a)(C,2),M=F[0],B=F[1],L=Object(n.useState)(!1),A=Object(j.a)(L,2),E=A[0],I=A[1],J=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,P(!0),e.next=4,N(25,25*i);case 4:return t=e.sent,c=t.results.map(function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t.url);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=8,Promise.all(c);case 8:n=e.sent,r(n),P(!1),v(Math.ceil(t.count/25)),B(!1),e.next=17;break;case 15:e.prev=15,e.t0=e.catch(0);case 17:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){E||J()}),[i]);var R=function(){var e=Object(l.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",J());case 2:return P(!0),B(!1),I(!0),e.next=7,g(t);case 7:if(c=e.sent){e.next=14;break}return B(!0),P(!1),e.abrupt("return");case 14:r([c]),b(0),v(1);case 17:P(!1),I(!1);case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{children:[Object(u.jsx)(d,{}),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(p,{onSearch:R}),M?Object(u.jsx)("div",{className:"not-found-text",children:"No se encontro el Pokemon que buscabas \ud83d\ude2d"}):Object(u.jsx)(k,{loading:S,pokemons:c,pagina:i,setPagina:b,total:f})]}),Object(u.jsx)("br",{}),Object(u.jsx)(y,{})]})})};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ca1b17e4.chunk.js.map