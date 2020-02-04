(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{66:function(e,a,t){e.exports={PlaceList:"PlaceList_PlaceList__27oFJ"}},67:function(e,a,t){e.exports={PlaceItem:"PlaceItem_PlaceItem__3k_Fb",PlaceItem__content:"PlaceItem_PlaceItem__content__2XdKn",PlaceItem__info:"PlaceItem_PlaceItem__info__lbTWb",PlaceItem__image:"PlaceItem_PlaceItem__image__vdAAU",PlaceItem__actions:"PlaceItem_PlaceItem__actions__1BUh0",PlaceItem__modalContent:"PlaceItem_PlaceItem__modalContent__21EXy",PlaceItem__modalActions:"PlaceItem_PlaceItem__modalActions__18u8A",MapContainer:"PlaceItem_MapContainer__oZh9r"}},68:function(e,a,t){e.exports={Map:"Map_Map__3_aPL"}},73:function(e,a,t){"use strict";t.r(a);var n=t(12),c=t.n(n),r=t(17),l=t(7),o=t(0),s=t.n(o),i=t(10),m=t(66),u=t.n(m),_=t(19),d=t(67),p=t.n(d),E=t(26),f=t(31),P=t(68),I=t.n(P),h=function(e){var a=Object(o.useRef)(),t=e.center,n=e.zoom,c=[t.lat,t.lng];return Object(o.useEffect)((function(){new window.ol.Map({target:a.current.id,layers:[new window.ol.layer.Tile({source:new window.ol.source.OSM})],view:new window.ol.View({center:window.ol.proj.fromLonLat([c[1],c[0]]),zoom:n})})}),[c,n]),s.a.createElement("div",{ref:a,className:"".concat(I.a.Map," ").concat(e.className),style:e.style,id:"map"})},w=t(20),v=t(28),b=t(27),C=t(18),g=function(e){var a=Object(v.a)(),t=a.isLoading,n=a.error,i=a.sendRequest,m=a.clearError,u=Object(o.useContext)(w.a),d=Object(o.useState)(!1),P=Object(l.a)(d,2),I=P[0],g=P[1],O=Object(o.useState)(!1),k=Object(l.a)(O,2),j=k[0],y=k[1],L=function(){return g(!1)},N=function(){y(!1)},x=function(){var a=Object(r.a)(c.a.mark((function a(){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return y(!1),a.prev=1,a.next=4,i("https://share-places-mern.herokuapp.com/api"+"/places/".concat(e.id),"DELETE",null,{Authorization:"Bearer "+u.token});case 4:e.onDelete(e.id),a.next=9;break;case 7:a.prev=7,a.t0=a.catch(1);case 9:case"end":return a.stop()}}),a,null,[[1,7]])})));return function(){return a.apply(this,arguments)}}(),A={lat:e.coordinates.lat,lng:e.coordinates.lng};return s.a.createElement(s.a.Fragment,null,s.a.createElement(b.a,{error:n,onClear:m}),s.a.createElement(f.a,{show:I,onCancel:L,header:e.address,contentClass:p.a.PlaceItem__modalContent,footerClass:p.a.PlaceItem__modalActions,footer:s.a.createElement(E.a,{onClick:L},"CLOSE")},s.a.createElement("div",{className:p.a.MapContainer},s.a.createElement(h,{center:A,zoom:18}))),s.a.createElement(f.a,{show:j,onCancel:N,header:"Are you sure?",footerClass:p.a.PlaceItem__modalActions,footer:s.a.createElement(s.a.Fragment,null,s.a.createElement(E.a,{inverse:!0,onClick:N},"CANCEL"),s.a.createElement(E.a,{danger:!0,onClick:x},"DELETE"))},s.a.createElement("p",null,"Do you want to delete this place? Cannot be undone.")),s.a.createElement("li",{className:p.a.PlaceItem},s.a.createElement(_.a,{className:p.a.PlaceItem__content},t&&s.a.createElement(C.a,{asOverlay:!0}),s.a.createElement("div",{className:p.a.PlaceItem__image},s.a.createElement("img",{src:"https://share-places-mern.herokuapp.com"+"/".concat(e.image),alt:e.title})),s.a.createElement("div",{className:p.a.PlaceItem__info},s.a.createElement("h2",null,e.title),s.a.createElement("h3",null,e.address),s.a.createElement("p",null,e.description)),s.a.createElement("div",{className:p.a.PlaceItem__actions},s.a.createElement(E.a,{inverse:!0,onClick:function(){return g(!0)}},"View on a map"),u.userId===e.creatorId&&s.a.createElement(E.a,{to:"/places/".concat(e.id)},"EDIT"),u.userId===e.creatorId&&s.a.createElement(E.a,{danger:!0,onClick:function(){y(!0)}},"DELETE")))))},O=function(e){return 0===e.items.length?s.a.createElement("div",{className:"".concat(u.a.PlaceList," center")},s.a.createElement(_.a,{style:{padding:"1rem"}},s.a.createElement("h2",null,"No places found. Maybe create one?"),s.a.createElement(E.a,{to:"/places/new"},"Share Place"))):s.a.createElement("ul",{className:u.a.PlaceList},e.items.map((function(a){return s.a.createElement(g,{key:a.id,id:a.id,image:a.image,title:a.title,description:a.description,address:a.address,creatorId:a.creator,coordinates:a.location,onDelete:e.onDeletePlace})})))};a.default=function(e){var a=Object(o.useState)(),t=Object(l.a)(a,2),n=t[0],m=t[1],u=Object(v.a)(),_=u.isLoading,d=u.error,p=u.sendRequest,E=u.clearError,f=Object(i.h)().userId;Object(o.useEffect)((function(){(function(){var e=Object(r.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p("".concat("https://share-places-mern.herokuapp.com/api","/places/user/").concat(f));case 3:a=e.sent,m(a.places),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[p,f]);return s.a.createElement(s.a.Fragment,null,s.a.createElement(b.a,{error:d,onClear:E}),_&&s.a.createElement("div",{className:"center"},s.a.createElement(C.a,null)),!_&&n&&s.a.createElement(O,{onDeletePlace:function(e){m((function(a){return a.filter((function(a){return a.id!==e}))}))},items:n}))}}}]);
//# sourceMappingURL=6.1cc11343.chunk.js.map