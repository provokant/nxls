(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{4070:function(e){var t={M:1e3,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},n=Object.keys(t),r=Object.values(t);e.exports={deromanize:function(e){for(var n=e.toUpperCase(),r=0,i=n.length;i--;){var a=t[n[i]];a<t[n[i+1]]?r-=a:r+=a}return r},romanize:function(e){if(e<=0||void 0===e||"string"==typeof e)throw new Error("requires an unsigned integer");for(var t="",i=0;i<n.length;i++)for(;e>=r[i];)e-=r[i],t+=n[i];return t},allChars:n,allNumerals:r}},3379:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(2784),i=(n(4070),0),a={},s=function(e,t){void 0===t&&(t=0);var n=(0,r.useRef)((function(){}));(0,r.useEffect)((function(){n.current=e})),(0,r.useEffect)((function(){if(null!==t){var e=function(e,t){var n,r=i++;if(a[t])a[t].listeners[r]=e;else{var s=setInterval((function(){for(var e,n=a[t].listeners,r=!1,i=0,s=Object.values(n);i<s.length;i++){var u=s[i];try{u()}catch(l){r=!0,e=l}}if(r)throw e}),t);a[t]={ms:t,timer:s,listeners:(n={},n[r]=e,n)}}return{bucket:a[t],id:r}}((function(){return n.current()}),t);return function(){return function(e){var t=e.bucket,n=e.id;delete t.listeners[n];var r=!1;for(var i in t.listeners){r=!0;break}r||(clearInterval(t.timer),delete a[t.ms])}(e)}}}),[t])},u=function(e){(0,r.useEffect)(e,[])},l=n(2322),o=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1],i=(0,r.useState)("events"),a=i[0],o=i[1],c=(0,r.useState)(!1),h=c[0],f=c[1],d=["Waiting is not a crime ..."],v=(0,r.useState)(null),p=(v[0],v[1]),g=(0,r.useState)(d),x=g[0],b=g[1],j=x[0],m=x[1],k=[(0,r.useState)(0),(0,r.useState)(0),(0,r.useState)(0)],w=k[0],S=w[0],y=w[1],C=k[1],I=C[0],_=C[1],D=k[2],W=D[0],M=D[1],E=function(e){b(d);var t=parseInt(e);fetch("https://tengo.uber.space/api/"+t+"/all").then((function(e){return e.json()})).then((function(e){var r,i,s,u,l=e.AC,o=e.BC,c=l;t>(new Date).getFullYear()||t<100?(c=o,n(!0)):n(!1);var h=c[a];b([(null===(r=h.closest)||void 0===r?void 0:r.raw)||(null===(i=h.random)||void 0===i?void 0:i.raw),(null===(s=h.closest)||void 0===s?void 0:s.html)||(null===(u=h.random)||void 0===u?void 0:u.html)]),p(e)}))},L=function(e){void 0===e&&(e=5e3);var t=[(new Date).getHours().toString(),("0"+(new Date).getMinutes()).slice(-2).toString(),("0"+(new Date).getSeconds()).slice(-2).toString()],n=t[0],r=t[1],i=t[2],a=i%(.001*e),s=Math.floor(i-a);M(s),_(r),y(n),r!==I&&E(n+r)},X=function(){return L(1e3)};s((function(){X()}),1e3),s((function(){f(!h)}),500),u((function(){return X()}));var N=null==m?void 0:m.replace(/href=\"\.\//gm,'target="_blank" href="https://en.wikipedia.org/wiki/'),O=function(){var e=[["births","Who was born"],["deaths","Who died"],["events","What happend"]],t=new Map(e),n=t.get(a),r=t.keys();return{list:e,map:t,prefix:n,topics:r}}().prefix;return(0,l.jsxs)("div",{className:"index-module--page--3eaQQ",children:[(0,l.jsx)("hr",{style:{height:W/60*100+"vh"}}),(0,l.jsxs)("main",{children:[(0,l.jsxs)("article",{children:[S&&I?(0,l.jsxs)("h1",{onClick:function(){return t=((e=["births","deaths","events"]).findIndex((function(e){return a===e}))+1)%e.length,o(e[t]),void E(S+I);var e,t},role:"button",tabIndex:0,"aria-label":"Get another WikiPedia article",children:[(0,l.jsxs)("span",{children:["It is ",S,h?":":" ",I]}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("span",{children:O&&O+" "}),(0,l.jsx)("span",{children:t?"around":"in"})," the year"," ",S>0&&S,I,t&&" BC","?!"]}):(0,l.jsx)("h1",{children:(0,l.jsx)("span",{children:" "})}),m?(0,l.jsx)("p",{dangerouslySetInnerHTML:{__html:N}}):(0,l.jsx)("p",{children:j})]}),(0,l.jsx)("footer",{children:(0,l.jsxs)("center",{children:["with ","<3"," ",(0,l.jsx)("a",{className:"author",target:"_blank",href:"https://dailysh.it?sendWithLoveFromWikiDailyshIt",children:"dailysh.it"})]})})]})]})}}}]);
//# sourceMappingURL=component---src-pages-index-js-d3f3a7f0ae0fea331bdc.js.map