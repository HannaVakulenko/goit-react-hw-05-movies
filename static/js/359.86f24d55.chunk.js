"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[359],{1454:function(n,e,t){t.d(e,{a:function(){return o}});var r,a=t(8402),c=t(168),u=t(6444).ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n  margin-top: 24px;\n  justify-content: center;\n"]))),i=t(184),o=function(){return(0,i.jsx)(u,{children:(0,i.jsx)(a.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0,wrapperStyle:{display:"flex",justifyContent:"center"}})})}},4359:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,c,u=t(5861),i=t(9439),o=t(7757),s=t.n(o),p=t(2791),l=t(7689),f=t(7992),d=t(168),h=t(6444),v=h.ZP.ul(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 32px;\n  text-align: center;\n"]))),x=h.ZP.li(a||(a=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),m=h.ZP.div(c||(c=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 4px;\n  max-width: 200px;\n"]))),w=t(1454),g=t(184),y=function(){var n,e=(0,l.UO)().movieId,t=(0,p.useState)({}),r=(0,i.Z)(t,2),a=r[0],c=r[1],o=(0,p.useState)(!0),d=(0,i.Z)(o,2),h=d[0],y=d[1],k=(0,p.useState)(!1),Z=(0,i.Z)(k,2),j=Z[0],_=Z[1];return(0,p.useEffect)((function(){var n=function(){var n=(0,u.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,_(!1),y(!0),n.next=5,(0,f.uV)(e);case 5:t=n.sent,c(t),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),_(!0);case 12:return n.prev=12,y(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),(0,g.jsxs)(v,{children:[j?(0,g.jsx)("div",{children:"An error occurred, please try again later..."}):null,h?(0,g.jsx)(w.a,{}):null,null===(n=a.cast)||void 0===n?void 0:n.map((function(n){return(0,g.jsxs)(x,{children:[n.profile_path?(0,g.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(n.profile_path),alt:"".concat(n.name)}):(0,g.jsx)("img",{src:"https://i.stack.imgur.com/q89AO.jpg",alt:"".concat(n.name," profile"),width:"200px"}),(0,g.jsxs)(m,{children:[(0,g.jsxs)("h4",{children:[" ",n.name]}),(0,g.jsxs)("p",{children:["Character: ",n.character]})]})]},n.credit_id)}))]})}},7992:function(n,e,t){t.d(e,{Hx:function(){return d},Sg:function(){return l},_k:function(){return s},sY:function(){return p},uV:function(){return f}});var r=t(5861),a=t(7757),c=t.n(a),u=t(1243),i="https://api.themoviedb.org/3/",o="468e3ef92bf536e06364f01be3648edc",s=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(i,"trending/movie/day?api_key=").concat(o));case 3:return e=n.sent,t=e.data,n.abrupt("return",t);case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(i,"search/movie?api_key=").concat(o,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(i,"movie/").concat(e,"?api_key=").concat(o,"&language=en-US"));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(i,"movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(i,"movie/").concat(e,"}/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=359.86f24d55.chunk.js.map