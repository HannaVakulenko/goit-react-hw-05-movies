"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[170],{1454:function(n,e,t){t.d(e,{a:function(){return o}});var r,a=t(8402),c=t(168),u=t(6444).ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n  margin-top: 24px;\n  justify-content: center;\n"]))),i=t(184),o=function(){return(0,i.jsx)(u,{children:(0,i.jsx)(a.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0,wrapperStyle:{display:"flex",justifyContent:"center"}})})}},8170:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var r,a,c=t(5861),u=t(9439),i=t(7757),o=t.n(i),s=t(2791),p=t(7689),f=t(7992),l=t(168),h=t(6444),v=h.ZP.h3(r||(r=(0,l.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  text-align: center;\n  margin-bottom: 24px;\n"])),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.medium})),d=h.ZP.div(a||(a=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 24px;\n  padding: 0 24px;\n"]))),x=t(1454),w=t(184),g=function(){var n=(0,p.UO)().movieId,e=(0,s.useState)({}),t=(0,u.Z)(e,2),r=t[0],a=t[1],i=(0,s.useState)(!0),l=(0,u.Z)(i,2),h=l[0],g=l[1],m=(0,s.useState)(!1),y=(0,u.Z)(m,2),k=y[0],Z=y[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,c.Z)(o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Z(!1),g(!0),e.next=5,(0,f.Hx)(n);case 5:t=e.sent,r=t.results,a(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),Z(!0);case 13:return e.prev=13,g(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(v,{children:"Review"}),r.length?(0,w.jsxs)("div",{children:[k?(0,w.jsx)("div",{children:"An error occurred, please try again later..."}):null,h?(0,w.jsx)(x.a,{}):null,r.map((function(n){return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(d,{children:[(0,w.jsxs)("h3",{children:["Author: ",n.author]}),(0,w.jsx)("p",{children:n.content})]},n.id)})}))]}):(0,w.jsx)("h3",{children:"We don't have any reviews for this movie yet."})]})}},7992:function(n,e,t){t.d(e,{Hx:function(){return h},Sg:function(){return f},_k:function(){return s},sY:function(){return p},uV:function(){return l}});var r=t(5861),a=t(7757),c=t.n(a),u=t(1243),i="https://api.themoviedb.org/3/",o="468e3ef92bf536e06364f01be3648edc",s=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(i,"trending/movie/day?api_key=").concat(o));case 3:return e=n.sent,t=e.data,n.abrupt("return",t);case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(i,"search/movie?api_key=").concat(o,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(i,"movie/").concat(e,"?api_key=").concat(o,"&language=en-US"));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(i,"movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(i,"movie/").concat(e,"}/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=170.faca1c45.chunk.js.map