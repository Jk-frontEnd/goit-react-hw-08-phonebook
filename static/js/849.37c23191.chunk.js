"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[849],{4849:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var r,a=n(2791),c=n(9439),s="ContactList_contBox__Rujx6",l="ContactList_none__oz1+k",i="ContactList_heading__MzdAh",o="ContactList_list__csErn",u=n(4420),m=n(9467),d="ContactElem_item__0rLkk",h="ContactElem_bin__sg-9L",f="ContactElem_btn__GPa9d",v=["title","titleId"];function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function _(e,t){var n=e.title,c=e.titleId,s=p(e,v);return a.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":c},s),void 0===n?a.createElement("title",{id:c},"bin"):n?a.createElement("title",{id:c},n):null,r||(r=a.createElement("path",{d:"M6 32h20l2-22h-24zM20 4v-4h-8v4h-10v6l2-2h24l2 2v-6h-10zM18 4h-4v-2h4v2z"})))}var x=a.forwardRef(_),j=(n.p,n(2993)),g=n(184),y=function(e){var t=e.contact,n=(0,u.I0)(),r=(0,a.useCallback)((function(){n((0,m.GK)(t.id))}),[t.id,n]);return(0,a.useEffect)((function(){n((0,j.ts)())}),[n]),(0,g.jsxs)("li",{className:d,children:["\u2022  ",t.name,": ",t.number,(0,g.jsx)("button",{className:f,onClick:r,children:(0,g.jsx)(x,{className:h})})]},t.id)},w=function(e){return e.filter},C=function(){var e=(0,u.I0)(),t=(0,u.v9)(m.oy),n=(0,u.v9)(w),r=(0,a.useState)([]),d=(0,c.Z)(r,2),h=d[0],f=d[1];return(0,a.useEffect)((function(){e((0,m.yF)())}),[e]),(0,a.useEffect)((function(){var e=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));f(e)}),[t,n]),(0,g.jsx)("div",{className:s,children:h.length>0?(0,g.jsxs)("div",{children:[(0,g.jsx)("h2",{className:i,children:"Your contacts"}),(0,g.jsx)("ul",{className:o,children:h.map((function(e){var t=e.id,n=e.name,r=e.number;return(0,g.jsx)(y,{contact:{id:t,name:n,number:r}},t)}))})]}):(0,g.jsx)("p",{className:l,children:"You have no contacts saved yet. Add some to view contact list."})})},N=n(5861),k=n(4687),E=n.n(k),O={btn:"Form_btn__0ebGo",label1:"Form_label1__TrQDt",input:"Form_input__FTtTw"},L=function(){var e=(0,u.I0)(),t=(0,u.v9)((function(e){return e.contacts.items})),n=(0,a.useState)(""),r=(0,c.Z)(n,2),s=r[0],l=r[1],i=(0,a.useState)(""),o=(0,c.Z)(i,2),d=o[0],h=o[1],f=(0,a.useState)(null),v=(0,c.Z)(f,2),b=v[0],p=v[1],_=function(){var n=(0,N.Z)(E().mark((function n(r){return E().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),""!==s.trim()&&""!==d.trim()){n.next=3;break}return n.abrupt("return");case 3:if(!t.some((function(e){return e.number===d||e.name===s}))){n.next=6;break}return alert("Contact already exists!"),n.abrupt("return");case 6:return n.prev=6,n.next=9,e((0,m.uK)({name:s,number:d}));case 9:l(""),h(""),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(6),n.t0.message.includes("Error code 14")?p("An error occurred while adding the contact. Please try again later."):p(n.t0.message);case 16:case"end":return n.stop()}}),n,null,[[6,13]])})));return function(e){return n.apply(this,arguments)}}();return(0,g.jsxs)("form",{className:O.formBox,onSubmit:_,children:[(0,g.jsx)("label",{className:O.label1,children:(0,g.jsx)("input",{className:O.input,placeholder:"Name",type:"text",name:"name",value:s,onChange:function(e){l(e.target.value)},required:!0})}),(0,g.jsx)("label",{className:O.label2,children:(0,g.jsx)("input",{className:O.input,placeholder:"Phone number",type:"tel",name:"number",value:d,onChange:function(e){h(e.target.value)},required:!0})}),b&&(0,g.jsx)("div",{style:{color:"ed"},children:b}),(0,g.jsx)("button",{className:O.btn,type:"submit",children:"Add Contact"})]})},P="Search_searchBox__5A5Uo",S=n(6895),F=function(){var e=(0,u.I0)(),t=(0,u.v9)(w);return(0,g.jsx)("div",{className:P,children:(0,g.jsxs)("label",{children:["Find contact by name:",(0,g.jsx)("input",{type:"text",value:t,onChange:function(t){e((0,S.p)(t.target.value))}})]})})},I="ContactPage_box__5RFsW",z="ContactPage_h1__10Ldu",A=function(){return(0,g.jsxs)("div",{children:[(0,g.jsx)("h1",{className:z,children:"Contacts"}),(0,g.jsxs)("div",{className:I,children:[(0,g.jsx)(L,{}),(0,g.jsx)(F,{})]}),(0,g.jsx)(C,{})]})}}}]);
//# sourceMappingURL=849.37c23191.chunk.js.map