"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[756],{373:function(e,r,t){t.r(r),t.d(r,{default:function(){return k}});var a=t(861),s=t(439),n=t(757),i=t.n(n),l=t(689),c=t(87),o=t(791),d=t(243),u=function(){var e=(0,a.Z)(i().mark((function e(r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.Z.get("".concat("https://api.themoviedb.org/3","/movie/").concat(r),{params:{api_key:"a4c701b3a41d7d3c7de995b9f81d852d",language:"en-US"}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),h=u,p=t(691),v="MovieDetails_container__VvxPr",x="MovieDetails_content__zbGVE",f="MovieDetails_image__oemiJ",_="MovieDetails_info__19boC",j="MovieDetails_additional__6Pykv",m="MovieDetails_button__t4okL",b="MovieDetails_link__OL61d",w=t.p+"static/media/default-poster.62abfdb9eaa9e3392113.jpg",g=t(184),k=function(){var e,r,t=(0,l.UO)().movieId,n=(0,o.useState)(null),d=(0,s.Z)(n,2),u=d[0],k=d[1],N=(0,o.useState)(!0),M=(0,s.Z)(N,2),S=M[0],C=M[1],D=(0,o.useState)(null),U=(0,s.Z)(D,2),Z=U[0],y=U[1],E=(0,l.TH)(),F=(0,o.useRef)(null!==(e=null===(r=E.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/");if((0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h(t);case 3:r=e.sent,k(r),C(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),y(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),!u)return(0,g.jsx)(p.Nx,{width:"200",color:"#4fa94d"});var G=u.release_date.slice(0,4);return(0,g.jsxs)("div",{className:v,children:[S?(0,g.jsx)("div",{className:"loader",children:(0,g.jsx)(p.Nx,{width:"200",color:"#4fa94d"})}):(0,g.jsxs)("div",{children:[(0,g.jsx)("button",{className:m,children:(0,g.jsx)(c.rU,{className:b,to:F.current,children:"Go back"})}),(0,g.jsxs)("div",{className:x,children:[(0,g.jsx)("img",{src:u.poster_path?"https://image.tmdb.org/t/p/w200/"+u.poster_path:w,alt:u.title,className:f}),(0,g.jsxs)("div",{className:_,children:[(0,g.jsxs)("h1",{children:[u.original_title,"(",G,")"]}),(0,g.jsxs)("p",{children:["User Score : ",Math.round(10*u.vote_average),"%"]}),(0,g.jsx)("h2",{children:"Overview"}),(0,g.jsx)("p",{children:u.overview}),(0,g.jsx)("h3",{children:"Genres"}),(0,g.jsx)("ul",{children:u.genres.map((function(e){var r=e.id,t=e.name;return(0,g.jsx)("li",{children:t},r)}))})]})]}),(0,g.jsxs)("div",{className:j,children:[(0,g.jsx)("p",{children:"Aditional information"}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:(0,g.jsx)(c.rU,{to:"cast",children:"Cast"})}),(0,g.jsx)("li",{children:(0,g.jsx)(c.rU,{to:"reviews",children:"Revievs"})})]})]})]}),(0,g.jsx)(o.Suspense,{fallback:(0,g.jsx)(p.ko,{height:"80",width:"80",ariaLabel:"progress-bar-loading",wrapperStyle:{},wrapperClass:"progress-bar-wrapper",borderColor:"#F4442E",barColor:"#51E5FF"}),children:(0,g.jsx)(l.j3,{})}),Z&&(0,g.jsx)("p",{children:"Something went wrong..."})]})}}}]);
//# sourceMappingURL=756.9f8a8c4e.chunk.js.map