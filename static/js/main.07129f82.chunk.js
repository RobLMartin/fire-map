(this["webpackJsonpfire-map"]=this["webpackJsonpfire-map"]||[]).push([[0],{39:function(e,t,n){e.exports=n(54)},44:function(e,t,n){},45:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),l=(n(44),n(45),n(11)),i=n(15),u=n(9),s=n(78),f=n(77);function d(){var e=Object(i.a)(["\n  height: 30vh;\n"]);return d=function(){return e},e}var m=function(e){var t=e.id,n=e.name,c=e.onClose,o=e.summary,i=e.url,u=e.updated,d=e.size,m=(e.state,e.type,e.contained),h=e.lat,v=e.lng,g=Object(a.useState)({}),b=Object(l.a)(g,2),j=b[0],E=b[1];return console.log(j),Object(a.useEffect)((function(){fetch("https://openweathermap.org/data/2.5/weather?lat=".concat(h,"&lon=").concat(v,"&APPID=").concat("4adecf213c8ae73af9a0cdc48ddbbd95")).then((function(e){return e.json()})).then((function(e){return E(e)})).catch((function(e){return console.error(e)}))}),[h,v]),r.a.createElement(s.a,{open:t,onClose:c,anchor:"bottom"},r.a.createElement(p,null,r.a.createElement(f.a,{variant:"h2"},n),r.a.createElement(f.a,null,u),r.a.createElement(f.a,null,d),r.a.createElement(f.a,null,m,"% contained"),r.a.createElement("div",{styled:{display:"flex",gap:"1em"}},r.a.createElement(f.a,null,o),r.a.createElement("a",{href:"https://inciweb.nwcg.gov/".concat(i),target:"_blank"},"read more"))))},p=u.a.div(d()),h=n(24);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createElement("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"}),j=function(e){var t=e.svgRef,n=e.title,a=g(e,["svgRef","title"]);return r.a.createElement("svg",v({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",className:"svg-inline--fa fa-exclamation-triangle fa-w-18",role:"img",viewBox:"0 0 576 512",ref:t},a),n?r.a.createElement("title",null,n):null,b)},E=r.a.forwardRef((function(e,t){return r.a.createElement(j,v({svgRef:t},e))}));n.p;function O(){var e=Object(i.a)(["\n  color: red;\n  height: 20px;\n  margin-right: 1em;\n"]);return O=function(){return e},e}function y(){var e=Object(i.a)(["\n  color: yellow;\n  height: 20px;\n  margin-right: 1em;\n"]);return y=function(){return e},e}function w(){var e=Object(i.a)(["\n  color: white;\n  align-items: center;\n  cursor: pointer;\n"]);return w=function(){return e},e}var k=function(e){var t=e.lat,n=e.lng,a=(e.updated,e.contained),c=(e.size,e.name),o=e.onClick;return r.a.createElement(h.a,{anchor:"bottom",coordinates:[n,t],onClick:o},r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},a<70?r.a.createElement(S,null):r.a.createElement(x,null),r.a.createElement(C,null,c)))},C=u.a.h2(w()),x=Object(u.a)(E)(y()),S=Object(u.a)(E)(O()),M=Object(h.b)({accessToken:"pk.eyJ1Ijoicm1hcnRpbjMiLCJhIjoiY2tmMzZmZ2EyMDA1YTJ0cGdiZWZjN2tlNCJ9.cvmlEYfTnzhadKAjyWyiJQ"}),z=function(e){var t=e.markers,n=e.onClickMarker,a=e.selected,c=e.last;return r.a.createElement(M,{style:"mapbox://styles/mapbox/dark-v9",containerStyle:{height:"100vh",width:"100vw"},center:[(null===a||void 0===a?void 0:a.lng)||(null===c||void 0===c?void 0:c.lng)||"-122.676483",(null===a||void 0===a?void 0:a.lat)||(null===c||void 0===c?void 0:c.lat)||"45.5051"]},t.map((function(e){return r.a.createElement(k,Object.assign({key:e.id},e,{onClick:function(){return n(e)}}))})))},I=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(null),i=Object(l.a)(o,2),u=i[0],s=i[1],f=Object(a.useState)(null),d=Object(l.a)(f,2),p=d[0],h=d[1];return Object(a.useEffect)((function(){var e=new Headers;e.append("Cookie","PHPSESSID=e914a8247dfc186d1a77f0ddd06e827e"),e.append("Accept","application/json"),e.append("Content-Type","application/json"),e.append("Access-Control-Allow-Origin","http://localhost:3000"),e.append("mode","no-cors");fetch("https://cors-anywhere.herokuapp.com/https://inciweb.nwcg.gov/feeds/json/esri/",{method:"GET",headers:e,redirect:"follow"}).then((function(e){return e.json()})).then((function(e){return c(e.markers)})).catch((function(e){return console.log("error",e)}))}),[]),r.a.createElement("div",null,r.a.createElement(z,{onClickMarker:function(e){return s(e)},markers:n,selected:u,last:p}),r.a.createElement(m,Object.assign({},u,{onClose:function(){h(u),s(null)}})))};var J=function(){return r.a.createElement("div",null,r.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.07129f82.chunk.js.map