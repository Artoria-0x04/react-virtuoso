(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{152:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(160),u=n(161),c=n(163),s=n(157),l=n(164),i=function(){var e=Object(r.useMemo)(function(){return Object(s.a)(500)},[]),t=e.users,n=e.groups,o=e.groupCounts,u=Object(r.useState)([]),i=u[0],m=u[1],p=Object(r.useRef)(0),d=Object(r.useState)(!1),f=d[0],h=d[1],b=Object(r.useCallback)(function(){h(!0),setTimeout(function(){p.current+=50,h(!1),m(function(e,t){var n=[],r=0;do{var a=e[r];n.push(Math.min(a,t)),t-=a,r++}while(t>0&&r<=e.length);return n}(o,p.current))},500)},[]);return Object(r.useEffect)(b,[]),a.a.createElement(c.a,{style:{height:"350px",width:"400px"},groupCounts:i,group:function(e){return a.a.createElement(l.b,null,"Group ",n[e])},item:function(e){return a.a.createElement(l.f,{user:t[e],index:e})},footer:function(){return a.a.createElement("div",{style:{padding:"2rem",display:"flex",justifyContent:"center"}},a.a.createElement("button",{disabled:f,onClick:b},f?"Loading...":"Press to load more"))}})};t.default=function(){return a.a.createElement(o.a,{sidebar:function(){return a.a.createElement(u.a,{path:"GroupWithLoadOnDemand"})}},a.a.createElement("h2",null,"Grouped by First Letter (Load on Demand)"),a.a.createElement("p",null,"The ",a.a.createElement("code",null,"GroupedVirtuoso")," component accepts a"," ",a.a.createElement("code",null,"footer")," render prop, which can be used to host a load more button that appends more items to the existing ones."),a.a.createElement("p",null,"To add additional items to the groups, you should re-calculate the ",a.a.createElement("code",null,"groupCounts")," property value with the group values of the newly loaded items. Check the source code of this example for a possible implementation."),a.a.createElement(i,null))}},157:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"a",function(){return s});n(162),n(74),n(55),n(34),n(165),n(166),n(158);var r=n(167),a=n.n(r),o=n(168),u=[],c=function(e){if(!u[e]){var t=a.a.name.firstName(),n=a.a.name.lastName();u[e]={name:t+" "+n,initials:""+t.substr(0,1)+n.substr(0,1),description:a.a.company.catchPhrase(),bgColor:a.a.commerce.color(),fgColor:a.a.commerce.color(),longText:a.a.lorem.paragraphs(4),avatar:a.a.internet.avatar()}}return u[e]},s=function(e){for(var t=[],n=0;n<e;n++)t.push(c(n));t.sort(function(e,t){return e.name<t.name?-1:e.name>t.name?1:0});var r=Object(o.groupBy)(t,function(e){return e.name[0]});return{users:t,groupCounts:Object.values(r).map(function(e){return e.length}),groups:Object.keys(r)}}}}]);
//# sourceMappingURL=component---src-pages-grouped-with-load-on-demand-js-568c2f194bb9612b5087.js.map