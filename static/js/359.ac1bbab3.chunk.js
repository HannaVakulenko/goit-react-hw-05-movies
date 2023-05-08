"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[359],{1454:function(n,t,e){e.d(t,{a:function(){return o}});var r,a=e(8402),c=e(168),u=e(6444).ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n  margin-top: 24px;\n  justify-content: center;\n"]))),i=e(184),o=function(){return(0,i.jsx)(u,{children:(0,i.jsx)(a.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0,wrapperStyle:{display:"flex",justifyContent:"center"}})})}},4359:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,a,c,u,i=e(5861),o=e(9439),s=e(7757),p=e.n(s),l=e(2791),f=e(7689),h=e(7992),d=e(168),v=e(6444),x=v.ZP.h3(r||(r=(0,d.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  text-align: center;\n  margin-bottom: 24px;\n"])),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.medium})),m=v.ZP.ul(a||(a=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 32px;\n  text-align: center;\n"]))),g=v.ZP.li(c||(c=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),w=v.ZP.div(u||(u=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 4px;\n  max-width: 200px;\n"]))),y=e(1454),Z=e(184),k=function(){var n=(0,f.UO)().movieId,t=(0,l.useState)([]),e=(0,o.Z)(t,2),r=e[0],a=e[1],c=(0,l.useState)(!0),u=(0,o.Z)(c,2),s=u[0],d=u[1],v=(0,l.useState)(!1),k=(0,o.Z)(v,2),j=k[0],b=k[1];return(0,l.useEffect)((function(){var t=function(){var t=(0,i.Z)(p().mark((function t(){var e,r;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,b(!1),d(!0),t.next=5,(0,h.uV)(n);case 5:e=t.sent,r=e.cast,a(r),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),b(!0);case 13:return t.prev=13,d(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(x,{children:"Cast"}),r.length?(0,Z.jsxs)(m,{children:[j?(0,Z.jsx)("div",{children:"An error occurred, please try again later..."}):null,s?(0,Z.jsx)(y.a,{}):null,r.map((function(n){return(0,Z.jsxs)(g,{children:[n.profile_path?(0,Z.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(n.profile_path),alt:"".concat(n.name)}):(0,Z.jsx)("img",{src:"https://i.stack.imgur.com/q89AO.jpg",alt:"".concat(n.name," profile"),width:"200px"}),(0,Z.jsxs)(w,{children:[(0,Z.jsxs)("h4",{children:[" ",n.name]}),(0,Z.jsxs)("p",{children:["Character: ",n.character]})]})]},n.credit_id)}))," "]}):(0,Z.jsx)("h3",{children:"We don't have any information about the cast yet."})]})}},7992:function(n,t,e){e.d(t,{Hx:function(){return h},Sg:function(){return l},_k:function(){return s},sY:function(){return p},uV:function(){return f}});var r=e(5861),a=e(7757),c=e.n(a),u=e(1243),i="https://api.themoviedb.org/3/",o="468e3ef92bf536e06364f01be3648edc",s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(i,"trending/movie/day?api_key=").concat(o));case 3:return t=n.sent,e=t.data,n.abrupt("return",e);case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(i,"search/movie?api_key=").concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(i,"movie/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(i,"movie/").concat(t,"}/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=359.ac1bbab3.chunk.js.map