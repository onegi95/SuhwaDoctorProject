(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{446:function(t,e,n){"use strict";n.r(e);n(5),n(4),n(2),n(1),n(6),n(3),n(7);var c=n(0),r=n(57);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={data:function(){return{openSearch:!1,styleObject:{"background-size":"cover","background-position":"center",display:"block"}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)({activesidebar:function(t){return t.common.activesidebar},notifications:function(t){return t.sidebar.notification}})),methods:{getImgUrl:function(path){return n(353)("./"+path)},activemenu:function(t){this.$store.state.common.activesidebar=t}}},v=l,f=n(56),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notification-tab dynemic-sidebar custom-scroll",class:5==t.activesidebar?"active":"",attrs:{id:"notification"}},[n("div",{staticClass:"theme-title"},[n("div",{staticClass:"media"},[t._m(0),t._v(" "),n("div",{staticClass:"media-body text-right"},[n("a",{staticClass:"icon-btn btn-outline-light btn-sm close-panel",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.activemenu(0)}}},[n("feather",{attrs:{type:"x",size:"15",height:"15"}})],1)])])]),t._v(" "),n("ul",{staticClass:"chat-main"},t._l(t.notifications,(function(e,c){return n("li",{key:e.id},[n("div",{staticClass:"chat-box notification"},[n("div",{staticClass:"profile",class:e.profile,style:e.img?[{"background-image":"url("+t.getImgUrl(e.img)+")"},t.styleObject]:""},[e.profile_tag?n("span",[t._v(t._s(e.profile_tag))]):t._e()]),t._v(" "),n("div",{staticClass:"details"},[n("span",[t._v(t._s(e.name))]),t._v(" "),n("h5",[t._v(t._s(e.status))]),t._v(" "),n("p",[t._v(t._s(e.desc))])]),t._v(" "),n("div",{staticClass:"date-status"},[n("h6",[t._v(t._s(e.time))])])])])})),0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Notification")]),t._v(" "),n("h4",[t._v("List of notification")])])}],!1,null,null,null);e.default=component.exports}}]);