(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{553:function(t,e,r){"use strict";r.r(e);r(5),r(4),r(2),r(1),r(6),r(3),r(7);var l=r(0),c=r(61);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var o={data:function(){return{activewallpaper:6,styleObject:{"background-size":"cover","background-position":"center center",display:"block"}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({allwallpaper:function(t){return t.common.allwallpaper},chatwallpaperIndex:function(t){return t.common.chatwallpaperIndex}})),mounted:function(){this.activewallpaper=0===this.chatwallpaperIndex?6:this.chatwallpaperIndex},methods:{activeWallpaper:function(t){this.activewallpaper=t,6==t?(this.$store.state.common.chatwallpaperIndex=0,this.$store.state.common.chatwallpapergrandiant="-webkit-gradient(linear, 0% 0%, 0% 100%, from(rgb(239, 247, 254)))",this.$store.dispatch("layout/setwallpaper",0)):7==t?(this.$store.state.common.chatwallpaperIndex=0,this.$store.state.common.chatwallpapergrandiant="linear-gradient(359.3deg, rgba(28, 157, 234, 0.1) 1%, rgba(187, 187, 187, 0) 70.9%)",this.$store.dispatch("layout/setwallpaper",0)):8==t?(this.$store.state.common.chatwallpaperIndex=0,this.$store.state.common.chatwallpapergrandiant="radial-gradient(328px at 2.9% 15%, rgb(191, 224, 251) 0%, rgb(232, 233, 251) 25.8%, rgb(252, 239, 250) 50.8%, rgb(234, 251, 251) 77.6%, rgb(240, 251, 244) 100.7%)",this.$store.dispatch("layout/setwallpaper",0)):9==t?(this.$store.state.common.chatwallpaperIndex=0,this.$store.state.common.chatwallpapergrandiant="linear-gradient(109.6deg, rgb(223, 234, 247) 11.2%, rgb(244, 248, 252) 91.1%)",this.$store.dispatch("layout/setwallpaper",0)):10==t?(this.$store.state.common.chatwallpaperIndex=0,this.$store.state.common.chatwallpapergrandiant="linear-gradient(-109.6deg, rgb(204, 228, 247) 11.2%, rgb(237, 246, 250) 100.2%)",this.$store.dispatch("layout/setwallpaper",0)):11==t?(this.$store.state.common.chatwallpaperIndex=0,this.$store.state.common.chatwallpapergrandiant="radial-gradient(circle at 10% 20%, rgb(239, 246, 249) 0%, rgb(206, 239, 253) 90%)",this.$store.dispatch("layout/setwallpaper",0)):12==t?(this.$store.state.common.chatwallpaperIndex=0,this.$store.state.common.chatwallpapergrandiant="radial-gradient(circle at 10% 20%, rgb(226, 240, 254) 0%, rgb(255, 247, 228) 90%)",this.$store.dispatch("layout/setwallpaper",0)):(this.$store.state.common.chatwallpaperIndex=t,this.$store.state.common.chatwallpapergrandiant="",this.$store.dispatch("layout/setwallpaper",t))},getImgUrl:function(path){return r(370)("./"+path)}}},h=o,d=r(60),component=Object(d.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"chat-wallpaper"},[r("h5",[t._v("Chat wallpaper")]),t._v(" "),r("ul",{staticClass:"wallpaper"},[r("li",{staticClass:"bg-color bg-default",class:6==t.activewallpaper?"active":"",on:{click:function(e){return t.activeWallpaper(6)}}}),t._v(" "),t._l(t.allwallpaper,(function(e){return r("li",{key:e.id,staticClass:"bg-size",class:{active:t.activewallpaper===e.id},style:[{"background-image":"url("+t.getImgUrl(e.img)+")"},t.styleObject],on:{click:function(r){return t.activeWallpaper(e.id,e.img)}}})})),t._v(" "),r("br"),t._v(" "),r("li",{staticClass:"bg-color grediant-1",class:7==t.activewallpaper?"active":"",on:{click:function(e){return t.activeWallpaper(7)}}}),t._v(" "),r("li",{staticClass:"bg-color grediant-2",class:8==t.activewallpaper?"active":"",on:{click:function(e){return t.activeWallpaper(8)}}}),t._v(" "),r("li",{staticClass:"bg-color grediant-3",class:9==t.activewallpaper?"active":"",on:{click:function(e){return t.activeWallpaper(9)}}}),t._v(" "),r("li",{staticClass:"bg-color grediant-4",class:10==t.activewallpaper?"active":"",on:{click:function(e){return t.activeWallpaper(10)}}}),t._v(" "),r("li",{staticClass:"bg-color grediant-5",class:11==t.activewallpaper?"active":"",on:{click:function(e){return t.activeWallpaper(11)}}}),t._v(" "),r("li",{staticClass:"bg-color grediant-6",class:12==t.activewallpaper?"active":"",on:{click:function(e){return t.activeWallpaper(12)}}})],2)])}),[],!1,null,null,null);e.default=component.exports}}]);