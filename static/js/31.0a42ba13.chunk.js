"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[31],{299:function(e,r,t){t.r(r),t.d(r,{default:function(){return j}});var a=t(861),n=t(439),s=t(757),i=t.n(s),c=t(689),o=t(87),l=t(791),d=t(243),u=function(){var e=(0,a.Z)(i().mark((function e(r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.Z.get("".concat("https://api.themoviedb.org/3","/movie/").concat(r),{params:{api_key:"a4c701b3a41d7d3c7de995b9f81d852d",language:"en-US"}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),h=u,p=t(691),v={container:"MovieDetails_container__yKjnD",content:"MovieDetails_content__ab+Jm",image:"MovieDetails_image__E07wX",info:"MovieDetails_info__QdAR5",additional:"MovieDetails_additional__3Hczv"},x=t.p+"static/media/default-poster.62abfdb9eaa9e3392113.jpg",f=t(184),j=function(){var e,r,t=(0,c.UO)().movieId,s=(0,l.useState)(null),d=(0,n.Z)(s,2),u=d[0],j=d[1],m=(0,l.useState)(!0),_=(0,n.Z)(m,2),g=_[0],w=_[1],b=(0,l.useState)(null),k=(0,n.Z)(b,2),N=k[0],S=k[1],C=(0,c.TH)(),D=(0,l.useRef)(null!==(e=null===(r=C.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/");if((0,l.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h(t);case 3:r=e.sent,j(r),w(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),S(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),!u)return(0,f.jsx)(p.Nx,{width:"200",color:"#4fa94d"});var M=u.release_date.slice(0,4);return(0,f.jsxs)("div",{className:v.container,children:[g?(0,f.jsx)("div",{className:"loader",children:(0,f.jsx)(p.Nx,{width:"200",color:"#4fa94d"})}):(0,f.jsxs)("div",{children:[(0,f.jsx)("button",{className:v.button,children:(0,f.jsx)(o.rU,{to:D.current,children:"Go back"})}),(0,f.jsxs)("div",{className:v.content,children:[(0,f.jsx)("img",{src:u.poster_path?"https://image.tmdb.org/t/p/w200/"+u.poster_path:x,alt:u.title,className:v.image}),(0,f.jsxs)("div",{className:v.info,children:[(0,f.jsxs)("h1",{children:[u.original_title,"(",M,")"]}),(0,f.jsxs)("p",{children:["User Score : ",Math.round(10*u.vote_average),"%"]}),(0,f.jsx)("h2",{children:"Overview"}),(0,f.jsx)("p",{children:u.overview}),(0,f.jsx)("h3",{children:"Genres"}),(0,f.jsx)("ul",{children:u.genres.map((function(e){var r=e.id,t=e.name;return(0,f.jsx)("li",{children:t},r)}))})]})]}),(0,f.jsxs)("div",{className:v.additional,children:[(0,f.jsx)("p",{children:"Aditional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"reviews",children:"Revievs"})})]})]})]}),(0,f.jsx)(l.Suspense,{fallback:(0,f.jsx)(p.ko,{height:"80",width:"80",ariaLabel:"progress-bar-loading",wrapperStyle:{},wrapperClass:"progress-bar-wrapper",borderColor:"#F4442E",barColor:"#51E5FF"}),children:(0,f.jsx)(c.j3,{})}),N&&(0,f.jsx)("p",{children:"Something went wrong..."})]})}}}]);
//# sourceMappingURL=31.0a42ba13.chunk.js.map