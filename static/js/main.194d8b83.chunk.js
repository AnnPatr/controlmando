(this["webpackJsonptesis-ana"]=this["webpackJsonptesis-ana"]||[]).push([[0],{32:function(e,t,a){},34:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a.n(n),s=a(12),o=a.n(s),c=(a(32),a(18)),r=a.n(c),p=a(22),l=a(25),u=(a(34),a(13)),d=(a(38),a(39),a(40),a(41),a(23)),b=a(24),j=a(27),h=a(26),f=a(16),g=a(8),m={width:"75%",height:"60%"},O=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return Object(g.jsx)(f.Map,{google:this.props.google,zoom:14,style:m,initialCenter:{lat:this.props.point.latitud,lng:this.props.point.longitud},children:Object(g.jsx)(f.Marker,{position:{lat:this.props.point.latitud,lng:this.props.point.longitud}})})}}]),a}(n.Component),x=Object(f.GoogleApiWrapper)({apiKey:"AIzaSyCzfVzY2Of_qsDgZW6fXyQNZaq2u-8yQVc"})(O);u.a.initializeApp({apiKey:"AIzaSyAxx9hZjwDQREt4touQi9gNpgUxk3yqooo",authDomain:"tegdb-a1246.firebaseapp.com",databaseURL:"https://tegdb-a1246-default-rtdb.firebaseio.com",projectId:"tegdb-a1246",storageBucket:"tegdb-a1246.appspot.com",messagingSenderId:"509166562347",appId:"1:509166562347:web:48f37a7d622d2d90170e6e",measurementId:"G-ZZ2NQ7RSV9"});u.a.auth(),u.a.firestore();var y=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){u.a.database().ref("datos_firebase/datos_realtime").once("value",function(){var e=Object(p.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.val(),i(a[Object.keys(a)[Object.keys(a).length-1]]);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),console.log(a),Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("h1",{className:"title",children:"Posicionamiento Remoto"}),Object(g.jsx)("div",{className:"map",id:"map",children:a&&Object(g.jsx)(x,{point:a,className:"map"})}),Object(g.jsx)("footer",{className:"footer",children:Object(g.jsx)("ul",{className:"names",children:Object(g.jsx)("li",{className:"name",children:"Desarrollado por Ana Ortigoza, 2021"})})})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,61)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),s(e),o(e)}))};o.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(y,{})}),document.getElementById("root")),v()}},[[60,1,2]]]);
//# sourceMappingURL=main.194d8b83.chunk.js.map