(this["webpackJsonptravel-app"]=this["webpackJsonptravel-app"]||[]).push([[0],{23:function(e,t,s){},24:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){"use strict";s.r(t);var i=s(1),c=s(17),n=s.n(c),a=(s(9),s(2)),r=s(3),l=s(15),o=(s(23),s(24),s(0)),j=["btn--primary","btn--outline"],b=["btn--medium","btn--large"],d=function(e){var t=e.children,s=e.type,i=e.onClick,c=e.buttonStyle,n=e.buttonSize,r=j.includes(c)?c:j[0],l=b.includes(n)?n:b[0];return Object(o.jsx)(a.b,{to:"/sign-up",className:"btn-mobile",children:Object(o.jsx)("button",{className:"btn ".concat(r," ").concat(l),onClick:i,type:s,children:t})})};var h=function(){var e=Object(i.useState)(!1),t=Object(l.a)(e,2),s=t[0],c=t[1],n=Object(i.useState)(!0),r=Object(l.a)(n,2),j=r[0],b=r[1],h=function(){return c(!1)},p=function(){window.innerWidth<=960?b(!1):b(!0)};return Object(i.useEffect)((function(){p()}),[]),window.addEventListener("resize",p),Object(o.jsx)("nav",{className:"navbar",children:Object(o.jsxs)("div",{className:"navbar-container",children:[Object(o.jsxs)(a.b,{to:"/home",className:"navbar-logo",onClick:h,children:["Levart ",Object(o.jsx)("i",{class:"fas fa-plane-departure"})]}),Object(o.jsx)("div",{className:"navbar-menu-icon",onClick:function(){return c(!s)},children:Object(o.jsx)("i",{className:s?"fas fa-times":"fas fa-bars"})}),Object(o.jsxs)("ul",{className:s?"navbar-menu active":"navbar-menu",children:[Object(o.jsx)("li",{className:"navbar-item",children:Object(o.jsx)(a.b,{to:"/home",className:"navbar-links",onClick:h,children:"Home"})}),Object(o.jsx)("li",{className:"navbar-item",children:Object(o.jsx)(a.b,{to:"/services",className:"navbar-links",onClick:h,children:"Services"})}),Object(o.jsx)("li",{className:"navbar-item",children:Object(o.jsx)(a.b,{to:"/products",className:"navbar-links",onClick:h,children:"Products"})}),Object(o.jsx)("li",{className:"navbar-item",children:Object(o.jsx)(a.b,{to:"/sign-up",className:"navbar-links-mobile",onClick:h,children:"Sign Up"})})]}),j&&Object(o.jsx)(d,{buttonStyle:"btn--outline",children:"Sign Up"})]})})};s(31);var p=function(){return Object(o.jsxs)("div",{className:"intro",children:[Object(o.jsx)("video",{src:"/travel-app/home/videos/video.mp4",autoPlay:!0,loop:!0,muted:!0}),Object(o.jsx)("h1",{children:"Adventure Awaits"}),Object(o.jsx)("p",{children:"What are you waiting for?"}),Object(o.jsxs)("div",{className:"intro-btns",children:[Object(o.jsx)(d,{className:"btn",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"Get Started"}),Object(o.jsxs)(d,{className:"btn",buttonStyle:"btn--primary",buttonSize:"btn--large",children:["Watch Trailer",Object(o.jsx)("i",{className:"far fa-play-circle"})]})]})]})};var m=function(e){return Object(o.jsx)("li",{className:"tile__item",children:Object(o.jsxs)(a.b,{className:"tile__item__link",to:e.path,children:[Object(o.jsx)("figure",{className:"tile__item__pic-wrap","data-category":e.label,children:Object(o.jsx)("img",{src:e.src,alt:e.alt,className:"tile__item__img"})}),Object(o.jsx)("div",{className:"tile__item__info",children:Object(o.jsx)("h5",{className:"tile__item__text",children:e.text})})]})})};s(32);var u=function(){return Object(o.jsxs)("div",{className:"tile",children:[Object(o.jsx)("h1",{children:"Check out these EPIC Destinations!"}),Object(o.jsx)("div",{className:"tile__container",children:Object(o.jsxs)("div",{className:"tile__wrapper",children:[Object(o.jsxs)("ul",{className:"tile__items",children:[Object(o.jsx)(m,{src:"/travel-app/home/images/tokyo.png",text:"Tokyo, Japan\u2019s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples.",label:"Tokyo",path:"/services",alt:"Tokyo City Skyline"}),Object(o.jsx)(m,{src:"/travel-app/home/images/new-york.png",text:"New York City (NYC), often simply called New York, is the most populous city in the United States.",label:"New York",path:"/services",alt:"Empire State Building located in New York City"})]}),Object(o.jsxs)("ul",{className:"tile__items",children:[Object(o.jsx)(m,{src:"/travel-app/home/images/paris.png",text:"Paris, France capital, is a major European city and a global center for art, fashion, gastronomy and culture.",label:"Paris",path:"/services",alt:"Eiffel Tower located in Paris City"}),Object(o.jsx)(m,{src:"/travel-app/home/images/london.png",text:"London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times.",label:"London",path:"/services",alt:"London Bridge"}),Object(o.jsx)(m,{src:"/travel-app/home/images/rome.png",text:"Rome is the capital city and a special comune of Italy, as well as the capital of the Lazio region.",label:"Rome",path:"/services",alt:"Colosseum in Rome City"})]}),Object(o.jsxs)("ul",{className:"tile__items",children:[Object(o.jsx)(m,{src:"/travel-app/home/images/berlin.png",text:"Berlin is the capital and largest city of Germany by both area and population.",label:"Berlin",path:"/services",alt:"Brandenburg Gate located in Berlin City"}),Object(o.jsx)(m,{src:"/travel-app/home/images/toronto.png",text:"Toronto, the capital of the province of Ontario, is a major Canadian city along Lake Ontario\u2019s northwestern shore.",label:"Toronto",path:"/services",alt:"Toronto City Skyline"}),Object(o.jsx)(m,{src:"/travel-app/home/images/madrid.png",text:"Madrid, Spain central capital, is a city of elegant boulevards and expansive, manicured parks such as the Buen Retiro",label:"Madrid",path:"/services",alt:"Metropolis Building in Madrid City"})]})]})})]})};s(33);var x=function(){return Object(o.jsxs)("div",{className:"footer",children:[Object(o.jsxs)("section",{className:"footer-subscription",children:[Object(o.jsx)("p",{className:"footer-subscription-heading",children:"Join the Adventure newsletter to receive our best vacation deals"}),Object(o.jsx)("p",{className:"footer-subscription-text",children:"You can unsubscribe at any time."}),Object(o.jsx)("div",{className:"input-areas",children:Object(o.jsxs)("form",{children:[Object(o.jsx)("input",{type:"email",name:"email",placeholder:"Your Email",className:"footer-input"}),Object(o.jsx)(d,{buttonStyle:"btn-outline",children:"Subscribe"})]})})]}),Object(o.jsxs)("div",{class:"footer-links",children:[Object(o.jsxs)("div",{className:"footer-link-wrapper",children:[Object(o.jsxs)("div",{class:"footer-link-items",children:[Object(o.jsx)("h2",{children:"About Us"}),Object(o.jsx)(a.b,{to:"/sign-up",children:"How it works"}),Object(o.jsx)(a.b,{to:"/sign-up",children:"Testimonials"}),Object(o.jsx)(a.b,{to:"/sign-up",children:"Careers"}),Object(o.jsx)(a.b,{to:"/sign-up",children:"Terms of Service"})]}),Object(o.jsxs)("div",{class:"footer-link-items",children:[Object(o.jsx)("h2",{children:"Contact Us"}),Object(o.jsx)(a.b,{to:"/sign-up",children:"Contact"}),Object(o.jsx)(a.b,{to:"/sign-up",children:"Destinations"}),Object(o.jsx)(a.b,{to:"/sign-up",children:"Sponsorships"}),Object(o.jsx)(a.b,{to:"/sign-up",children:"Support"})]})]}),Object(o.jsxs)("div",{className:"footer-link-wrapper",children:[Object(o.jsxs)("div",{class:"footer-link-items",children:[Object(o.jsx)("h2",{children:"Social Media"}),Object(o.jsx)(a.b,{to:"/sign-up",children:"Instagram"}),Object(o.jsx)(a.b,{to:"/sign-up",children:"Facebook"}),Object(o.jsx)(a.b,{to:"/sign-up",children:"Youtube"}),Object(o.jsx)(a.b,{to:"/sign-up",children:"Twitter"})]}),Object(o.jsxs)("div",{class:"footer-link-items",children:[Object(o.jsx)("h2",{children:"Policy"}),Object(o.jsx)(a.b,{to:"/sign-up",children:"Anti-spam Policy"}),Object(o.jsx)(a.b,{to:"/sign-up",children:"Booking Conditions"}),Object(o.jsx)(a.b,{to:"/sign-up",children:"Green Policy"}),Object(o.jsx)(a.b,{to:"/sign-up",children:"Privacy Notice"})]})]})]})]})};var O=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(p,{}),Object(o.jsx)(u,{}),Object(o.jsx)(x,{})]})};var v=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{className:"products",children:"Products"})})};var g=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{className:"services",children:"Services"})})};var f=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{className:"sign-up",children:"Sign-Up"})})};var y=function(){return Object(o.jsxs)(a.a,{children:[Object(o.jsx)(h,{}),Object(o.jsxs)(r.c,{children:[Object(o.jsx)(r.a,{path:"/home",exact:!0,component:O}),Object(o.jsx)(r.a,{path:"/services",component:g}),Object(o.jsx)(r.a,{path:"/products",component:v}),Object(o.jsx)(r.a,{path:"/sign-up",component:f})]})]})};n.a.render(Object(o.jsx)(y,{}),document.getElementById("root"))},9:function(e,t,s){}},[[34,1,2]]]);
//# sourceMappingURL=main.692e7c5c.chunk.js.map