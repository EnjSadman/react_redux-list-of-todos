(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c,r=n(10),a=n.n(r),s=n(5),o=n(17),u=n(14),i=n(3),l=n(16);!function(e){e.SET_TODOS="SET_TODOS",e.ADD_TODO="ADD_TODO",e.SET_USER="SET_USER",e.SET_STATUS="SET_STATUS",e.SET_FILTER="SET_FILTER"}(c||(c={}));var d,j=function(e){return{type:c.SET_TODOS,payload:e}},b=function(e){return{type:c.SET_USER,payload:e}},p=function(e){return{type:c.SET_STATUS,payload:e}};!function(e){e.all="0",e.completed="1",e.inProgress="2"}(d||(d={}));var O={todos:[],user:null,status:d.all,filter:""},f=Object(l.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.SET_TODOS:return Object(i.a)(Object(i.a)({},e),{},{todos:Object(u.a)(t.payload)});case c.ADD_TODO:return Object(i.a)(Object(i.a)({},e),{},{todos:[].concat(Object(u.a)(e.todos),[t.payload])});case c.SET_USER:return Object(i.a)(Object(i.a)({},e),{},{user:t.payload});case c.SET_STATUS:return Object(i.a)(Object(i.a)({},e),{},{status:t.payload});case c.SET_FILTER:return Object(i.a)(Object(i.a)({},e),{},{filter:t.payload});default:return e}})),h=(n(25),n(0)),x=(n(26),function(e){return e.todos}),T=function(e){return e.user},_=function(e){return e.status},m=function(e){return e.filter},v=n(1),S=function(){var e=Object(s.c)(T),t=Object(s.b)();return e?Object(v.jsxs)("div",{className:"CurrentUser",children:[Object(v.jsx)("h2",{className:"CurrentUser__title",children:Object(v.jsx)("span",{children:"Selected user: ".concat(e.id)})}),Object(v.jsx)("h3",{className:"CurrentUser__name",children:e.name}),Object(v.jsx)("p",{className:"CurrentUser__email",children:e.email}),Object(v.jsx)("p",{className:"CurrentUser__phone",children:e.phone}),Object(v.jsx)("button",{type:"button",onClick:function(){return t(b(null))},children:"clear"})]}):Object(v.jsx)("p",{children:"No selected user"})},E=n(7),y=n(6),k=n(4),N=n.n(k),w=n(13),D=n.n(w),U="https://mate.academy/students-api",L=function(){var e=Object(E.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(U,"/todos"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(E.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(U,"/users/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();n(29);var g=function(){var e=Object(s.b)(),t=Object(s.c)(_),n=Object(s.c)(x),r=Object(s.c)(T),a=Object(s.c)(m),o=Object(h.useState)(!1),u=Object(y.a)(o,2),i=u[0],l=u[1];Object(h.useEffect)((function(){var n=function(){var n=Object(E.a)(N.a.mark((function n(){var c;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,L();case 2:c=(c=n.sent).filter((function(e){return e.title.includes(a)})),n.t0=t,n.next=n.t0===d.completed?7:n.t0===d.inProgress?9:11;break;case 7:return e(j(c.filter((function(e){return!0===e.completed})))),n.abrupt("break",13);case 9:return e(j(c.filter((function(e){return!1===e.completed})))),n.abrupt("break",13);case 11:return e(j(c)),n.abrupt("break",13);case 13:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[t,a,i]);var O=function(){var t=Object(E.a)(N.a.mark((function t(n){var c;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(n);case 2:c=t.sent,e(b(c));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"TodoList",children:[Object(v.jsx)("h2",{children:"Todos:"}),Object(v.jsx)("input",{type:"text",onChange:function(t){setTimeout((function(){var n;e((n=t.target.value,{type:c.SET_FILTER,payload:n}))}),1e3)}}),Object(v.jsxs)("select",{onChange:function(t){switch(t.target.value){case"1":e(p(d.completed));break;case"2":e(p(d.inProgress));break;default:e(p(d.all))}},children:[Object(v.jsx)("option",{value:"0",children:"All Todos"}),Object(v.jsx)("option",{value:"1",children:"Completed Todos"}),Object(v.jsx)("option",{value:"2",children:"In progress Todos"})]}),Object(v.jsx)("div",{className:"TodoList__list-container",children:Object(v.jsx)("ul",{className:"TodoList__list",children:n.map((function(e){return Object(v.jsxs)("li",{className:D()("TodoList__item",{"TodoList__item--checked":e.completed},{"TodoList__item--unchecked":!e.completed}),children:[Object(v.jsxs)("label",{children:[e.completed&&Object(v.jsx)("input",{type:"checkbox",readOnly:!0,checked:!0}),!e.completed&&Object(v.jsx)("input",{type:"checkbox",readOnly:!0}),Object(v.jsx)("p",{children:e.title})]}),Object(v.jsx)("button",{className:D()("TodoList__user-button",{"TodoList__user-button--selected":null!==r&&r.id===e.userId},"button"),type:"button",onClick:function(){O(e.userId)},children:"User #".concat(e.userId)}),Object(v.jsx)("button",{type:"button",onClick:Object(E.a)(N.a.mark((function t(){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n="/todos/".concat(e.id),fetch("".concat(U,"/").concat(n),{method:"DELETE"});case 2:l(!i);case 3:case"end":return t.stop()}var n}),t)}))),children:"X"})]},e.id)}))})})]})},C=function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("div",{className:"App__sidebar",children:Object(v.jsx)(g,{})}),Object(v.jsx)("div",{className:"App__content",children:Object(v.jsx)("div",{className:"App__content-container",children:Object(v.jsx)(S,{})})})]})},I=function(){return Object(v.jsx)(s.a,{store:f,children:Object(v.jsx)(o.a,{children:Object(v.jsx)(C,{})})})};a.a.render(Object(v.jsx)(I,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.56926634.chunk.js.map