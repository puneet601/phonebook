(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{21:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t(1),u=t(15),a=t.n(u),o=t(6),i=t(3),s=function(e){return Object(c.jsxs)("form",{onSubmit:e.addPerson,children:[Object(c.jsxs)("div",{children:["Name: ",Object(c.jsx)("input",{value:e.newName,onChange:e.setName,required:!0})]}),Object(c.jsxs)("div",{children:["Number: ",Object(c.jsx)("input",{value:e.newNumber,type:"number",onChange:e.setNumber,required:!0})]}),Object(c.jsx)("button",{type:"submit",onClick:e.addName,children:"Add"})]})},d=function(e){return Object(c.jsxs)("form",{children:["show with",Object(c.jsx)("input",{value:e.newSearch,onChange:e.handleSearchChange}),Object(c.jsx)("br",{})]})},l=(t(21),function(e,n){return Object(c.jsxs)("li",{children:[e.name,"  ",e.number," ",Object(c.jsx)("button",{onClick:e.deletePerson,children:"Delete"})]})}),b=function(e){return Object(c.jsx)("ul",{children:e.persons.filter((function(n){return n.name.toUpperCase().includes(e.newSearch.toUpperCase())})).map((function(n){return Object(c.jsx)(l,{name:n.name,number:n.number,deletePerson:e.handleDeletePerson(n.name,n.id)},n.id)}))})},f=t(4),j=t.n(f),h="/api/persons",m=function(){return j.a.get(h).then((function(e){return e.data}))},O=function(e){return j.a.post(h,e).then((function(e){return e.data}))},p=function(e){return j.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},x=function(e,n){return j.a.put("".concat(h,"/").concat(e),n)},v=function(e){var n=e.message,t=e.status;return null===n?null:!1===t?Object(c.jsx)("div",{className:"error",children:n}):Object(c.jsx)("div",{className:"success",children:n})},g=function(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],u=n[1],a=Object(r.useState)(""),l=Object(i.a)(a,2),f=l[0],j=l[1],h=Object(r.useState)(""),g=Object(i.a)(h,2),w=g[0],N=g[1],S=Object(r.useState)(""),k=Object(i.a)(S,2),C=k[0],D=k[1],P=Object(r.useState)(null),y=Object(i.a)(P,2),I=y[0],T=y[1],q=Object(r.useState)(!1),A=Object(i.a)(q,2),E=A[0],J=A[1],M=function(e){return e.name===f},U=function(e){return e.number===w};Object(r.useEffect)((function(){console.log("effect"),m().then((function(e){u(e)}))}),[]);var B=function(e,n){return function(){window.confirm("Do you wante to Delete ".concat(e," ?"))&&p(n).then((function(){u(t.filter((function(e){return e.id!==n}))),J(!0),T("Deleted ".concat(e)),setTimeout((function(){T(null)}),5e3),j(""),N("")})).catch((function(n){J(!1),T("'".concat(e,"' cannot be Deleted.")),setTimeout((function(){T(null)}),5e3)}))}};return Object(c.jsxs)("div",{children:[Object(c.jsx)(v,{message:I,status:E}),Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(d,{newSearch:C,handleSearchChange:function(e){D(e.target.value)}}),Object(c.jsx)(s,{newName:f,setName:function(e){return j(e.target.value)},number:w,setNumber:function(e){return N(e.target.value)},addName:function(e){e.preventDefault();var n={name:f,number:w,id:Math.floor(101*Math.random())};if(-1!==t.findIndex(M)){if(t.findIndex(U)===t.findIndex(M))J(!0),T("".concat(f,"  is already added to phonebook")),setTimeout((function(){T(null)}),5e3);else if(t.findIndex(U)!==t.findIndex(M)){var c=t.find(M),r=t.find((function(e){return e.id===c.id})),a=r.id,i=Object(o.a)(Object(o.a)({},r),{},{number:w});x(a,i).then((function(e){u(t.map((function(n){return n.id!==a?n:e.data})))})).catch((function(e){J(!1),T("".concat(c.name,"  is already added to phonebook")),setTimeout((function(){T(null)}),5e3)}))}}else O(n).then((function(e){u(t.concat(e)),T("Added ".concat(n.name)),j(""),N("")})).catch((function(e){J("true"),T("".concat(e.response.data.error)),console.log(e.response.data)})),setTimeout((function(){T(null)}),3e3)},handleDeletePerson:B}),Object(c.jsx)("h2",{children:"Numbers"}),Object(c.jsx)(b,{persons:t,newSearch:C,handleDeletePerson:B})]})};a.a.render(Object(c.jsx)(g,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.8ceb3846.chunk.js.map