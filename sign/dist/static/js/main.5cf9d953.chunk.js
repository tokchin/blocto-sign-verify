(this["webpackJsonphello-world"]=this["webpackJsonphello-world"]||[]).push([[0],{55:function(e,t){},57:function(e,t){},73:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var r,a,c,s=n(2),o=n.n(s),i=n(41),u=n.n(i),p=n(10),d=(n(73),n(13)),b=n(14),j=n(47),f=n(18),l=n(17),x=n.n(l),O=n(22),g=n(6),h=b.a.div(r||(r=Object(d.a)(["\n  margin: 10px 5px;\n  padding: 10px;\n  border: 1px solid #c0c0c0;\n  border-radius: 5px;\n"]))),v=function(e){var t=e.user.loggedIn,n=function(){var e=Object(O.a)(x.a.mark((function e(n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t?p.d():p.a();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)("button",{onClick:n,children:t?"Sign Out":"Sign In/Up"})},m=function(){var e=Object(s.useState)({}),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(s.useEffect)((function(){return p.c().subscribe((function(e){return r(Object(j.a)({},e))}))}),[]),Object(g.jsx)(h,{children:Object(g.jsx)(v,{user:n})})},w=b.a.div(a||(a=Object(d.a)(["\n  margin: 10px 5px;\n  padding: 10px;\n  border: 1px solid #c0c0c0;\n  border-radius: 5px;\n"])));b.a.pre(c||(c=Object(d.a)(["\n  background: #f0f0f0;\n  border-radius: 5px;\n  max-height: 150px;\n  overflow-y: auto;\n  padding: 5px;\n"])));var S,k=function(){var e=Object(s.useState)("--"),t=Object(f.a)(e,2),n=t[0],r=t[1],a=Object(s.useState)("--"),c=Object(f.a)(a,2),o=c[0],i=c[1],u=Object(s.useState)("--"),d=Object(f.a)(u,2),b=d[0],j=d[1],l=function(){var e=Object(O.a)(x.a.mark((function e(t){var n,a,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=String((new Date).getTime()),s=n,a=Array.from(s).map((function(e){return e.charCodeAt(0)<128?e.charCodeAt(0).toString(16):encodeURIComponent(e).replace(/\%/g,"").toLowerCase()})).join(""),e.next=5,p.c().signUserMessage(a);case 5:c=e.sent,window.parent.postMessage({message:"compSignatures",value:{signedMessage:n,compSignatures:c}},"*"),r(n),i(JSON.stringify(c)),j(c[0].addr);case 10:case"end":return e.stop()}var s}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)(w,{children:[Object(g.jsx)("button",{onClick:l,children:"Sign"}),Object(g.jsx)("br",{}),"userAddress: ",b,Object(g.jsx)("br",{}),"message: ",n,Object(g.jsx)("br",{}),"compSignatures: ",o]})},y=b.a.div(S||(S=Object(d.a)(["\n  font-size: 13px;\n  font-family: Arial, Helvetica, sans-serif;\n"])));var C=function(){return Object(g.jsxs)(y,{children:[Object(g.jsx)(m,{}),Object(g.jsx)(k,{})]})};p.b().put("accessNode.api","https://access-testnet.onflow.org").put("challenge.handshake","https://flow-wallet-testnet.blocto.app/authn"),u.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(C,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.5cf9d953.chunk.js.map