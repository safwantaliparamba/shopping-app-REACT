(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1QXes",total:"Cart_total__1dqCh",actions:"Cart_actions__bcmVo","button--alt":"Cart_button--alt__2EyFC",button:"Cart_button__TcSvk"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3WKd7",summary:"CartItem_summary__3Lytr",price:"CartItem_price__1ueMf",amount:"CartItem_amount__3lydO",actions:"CartItem_actions__1SkO1"}},,,,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__3xeLe",modal:"Modal_modal__1pzp9","slide-down":"Modal_slide-down__91u4C"}},function(e,t,n){e.exports={button:"HeaderCartButton_button__1ev9D",icon:"HeaderCartButton_icon__2NKI5",badge:"HeaderCartButton_badge__i_g8V",bump:"HeaderCartButton_bump__2RG5v"}},function(e,t,n){e.exports={meal:"MealItem_meal__1_TBA",description:"MealItem_description__2Ge1E",price:"MealItem_price__1zag-"}},,function(e,t,n){e.exports={header:"Header_header___ZfVH","main-image":"Header_main-image__2RV0j"}},,,function(e,t,n){e.exports={meals:"AvailableMeals_meals__etVld","meals-appear":"AvailableMeals_meals-appear__1gul4"}},function(e,t,n){e.exports={card:"Card_card__1MF_U"}},function(e,t,n){e.exports={input:"Input_input__1V1QE"}},function(e,t,n){e.exports={form:"MealItemForm_form__zNlCP"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__2_k_Y"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(15),c=n.n(a),i=(n(28),n(8)),r=n(1),s=n.n(r),o=n(2),l=n(9),d=n.n(l),u=n(6),m=n.n(u),j=n(0),b=function(e){return Object(j.jsx)("div",{className:d.a.backdrop,onClick:function(){return e.onClick()}})},x=function(e){return Object(j.jsx)("div",{className:d.a.modal,children:Object(j.jsx)("div",{className:d.a.content,children:e.children})})},p=function(e){var t=document.getElementById("overlays");return Object(j.jsxs)(j.Fragment,{children:[m.a.createPortal(Object(j.jsx)(b,{onClick:e.onClick}),t),m.a.createPortal(Object(j.jsx)(x,{children:e.children}),t)]})},O=n(3),_=n.n(O),h=s.a.createContext(),f=n(4),v=n.n(f),C=function(e){var t="$".concat(e.price.toFixed(2));return Object(j.jsxs)("li",{className:v.a["cart-item"],children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:e.name}),Object(j.jsxs)("div",{className:v.a.summary,children:[Object(j.jsx)("span",{className:v.a.price,children:t}),Object(j.jsxs)("span",{className:v.a.amount,children:["x ",e.amount]})]})]}),Object(j.jsxs)("div",{className:v.a.actions,children:[Object(j.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(j.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},g=function(e){var t=Object(r.useContext)(h),n=function(e){t.addItem(Object(o.a)(Object(o.a)({},e),{},{amount:1}))},a=function(e){t.removeItem(e)},c=Object(j.jsx)("ul",{className:_.a["cart-items"],children:t.items.map((function(e){return Object(j.jsx)(C,{name:e.name,description:e.description,amount:e.amount,price:e.price,onAdd:n.bind(null,e),onRemove:a.bind(null,e.id)},e.id)}))}),i="$".concat(t.totalAmount.toFixed(2)),s=t.items.length>0;return Object(j.jsxs)(p,{onClick:e.onClick,children:[c,Object(j.jsxs)("div",{className:_.a.total,children:[Object(j.jsx)("span",{children:"Total Amount"}),Object(j.jsx)("span",{children:i})]}),Object(j.jsxs)("div",{className:_.a.actions,children:[Object(j.jsx)("button",{className:_.a["button--alt"],onClick:function(){return e.onClick()},children:"Close"}),s&&Object(j.jsx)("button",{className:_.a.button,children:"Order"})]})]})},N=n(13),k=n.n(N),A=n.p+"static/media/meals.2971f633.jpg",y=function(){return Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(j.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},I=n(10),H=n.n(I),M=function(e){var t=Object(r.useContext)(h).items;return Object(j.jsxs)("button",{className:H.a.button,onClick:function(){return e.onClick()},children:[Object(j.jsx)("span",{className:H.a.icon,children:Object(j.jsx)(y,{})}),Object(j.jsx)("span",{children:"Your Cart"}),Object(j.jsx)("span",{className:H.a.badge,children:t.length})]})};var w=function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("header",{className:k.a.header,children:[Object(j.jsx)("h1",{children:"ReactMeals"}),Object(j.jsx)(M,{onClick:e.showCartHandler})]}),Object(j.jsx)("div",{className:k.a["main-image"],children:Object(j.jsx)("img",{src:A,alt:""})})]})},F=n(16),B=n.n(F),R=n(17),S=n.n(R),z=function(e){return Object(j.jsx)("div",{className:S.a.card,children:e.children})},V=n(11),E=n.n(V),D=n(18),P=n.n(D),T=s.a.forwardRef((function(e,t){return Object(j.jsxs)("div",{className:P.a.input,children:[Object(j.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(j.jsx)("input",Object(o.a)({ref:t},e.input))]})})),G=n(19),Y=n.n(G),$=function(e){var t=Object(r.useRef)();return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{className:Y.a.form,onSubmit:function(n){n.preventDefault(),e.amountHandler(t.current.value)},children:[Object(j.jsx)(T,{ref:t,label:"Add",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(j.jsx)("button",{type:"submit",children:"+ Add"})]})})};var q=function(e){var t=Object(r.useContext)(h),n="$".concat(e.price.toFixed(2));return Object(j.jsxs)("li",{className:E.a.meal,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsx)("div",{className:E.a.description,children:e.description}),Object(j.jsx)("div",{className:E.a.price,children:n})]}),Object(j.jsx)("div",{children:Object(j.jsx)($,{amountHandler:function(n){t.addItem({id:e.id,name:e.name,price:e.price,amount:n,description:e.description})}})})]})},J=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],K=function(){var e=J.map((function(e){return Object(j.jsx)(q,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(j.jsx)("section",{className:B.a.meals,children:Object(j.jsx)("ul",{children:Object(j.jsx)(z,{children:e})})})},L=n(20),Q=n.n(L),U=function(){return Object(j.jsxs)("section",{className:Q.a.summary,children:[Object(j.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(j.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(j.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},W=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(U,{}),Object(j.jsx)(K,{})]})},X=n(12),Z=function(e){var t=Object(r.useState)({items:[],totalAmount:0}),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){var t,n,i=a.totalAmount+e.price*e.amount,r=a.items,s=r.findIndex((function(t){return t.id===e.id})),l=r[s];l?(t=Object(o.a)(Object(o.a)({},l),{},{amount:+l.amount+ +e.amount}),(n=Object(X.a)(r))[s]=t,c({items:n,totalAmount:i})):c({items:[].concat(Object(X.a)(r),[e]),totalAmount:i})},removeItem:function(e){var t,n,i=a.items,r=i.findIndex((function(t){return t.id===e})),s=i[r],l=a.totalAmount-s.price;if(s.amount>1)t=Object(o.a)(Object(o.a)({},s),{},{amount:+s.amount-1}),(n=Object(X.a)(i))[r]=t,c({items:n,totalAmount:+l});else{var d=i.filter((function(t){return t.id!==e}));c({items:d,totalAmount:+l})}}};return Object(j.jsx)(h.Provider,{value:s,children:e.children})};var ee=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],c=function(){a(!n)};return Object(j.jsxs)(Z,{children:[n&&Object(j.jsx)(g,{onClick:c}),Object(j.jsx)(w,{showCartHandler:c}),Object(j.jsx)("main",{children:Object(j.jsx)(W,{})})]})};c.a.createRoot(document.getElementById("root")).render(Object(j.jsx)(ee,{}))}],[[30,1,2]]]);
//# sourceMappingURL=main.72f4ea8c.chunk.js.map