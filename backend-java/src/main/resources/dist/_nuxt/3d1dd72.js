(window.webpackJsonp=window.webpackJsonp||[]).push([[101,102,103,105,106],{557:function(t,e,r){"use strict";r.r(e);r(5),r(4),r(2),r(1),r(6),r(3),r(7);var c=r(0),l=r(86),o=r(58);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={data:function(){return{activecolor:l.config.color}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({togglerightside:function(t){return t.common.togglerightside}})),methods:{activeColor:function(t){this.activecolor=t,(document.getElementsByTagName("html")[0].classList.contains("style")||document.getElementsByTagName("html")[0].classList.contains("style1")||document.getElementsByTagName("html")[0].classList.contains("style2")||document.getElementsByTagName("html")[0].classList.contains("style3")||document.getElementsByTagName("html")[0].classList.contains("style4")||document.getElementsByTagName("html")[0].classList.contains("style5")||document.getElementsByTagName("html")[0].classList.contains("style6"))&&document.getElementsByTagName("html")[0].classList.remove("style","style1","style2","style3","style4","style5","style6"),"style"==t?document.getElementsByTagName("html")[0].classList.add("style"):"style1"==t?document.getElementsByTagName("html")[0].classList.add("style1"):"style2"==t?document.getElementsByTagName("html")[0].classList.add("style2"):"style3"==t?document.getElementsByTagName("html")[0].classList.add("style3"):"style4"==t?document.getElementsByTagName("html")[0].classList.add("style4"):"style5"==t?document.getElementsByTagName("html")[0].classList.add("style5"):"style6"==t&&document.getElementsByTagName("html")[0].classList.add("style6"),this.$store.dispatch("layout/setcolor",t),document.querySelector(".app-sidebar").classList.add("active"),document.body.classList.remove("menu-active"),document.body.classList.add("sidebar-active"),this.$store.state.common.togglerightside=!0}}},m=d,v=r(57),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"color-picker"},[r("h5",[t._v("Choose color")]),t._v(" "),r("ul",{staticClass:"colors"},[r("li",{staticClass:"color",class:"style"==t.activecolor?"active":"",attrs:{"data-attr":"style"},on:{click:function(e){return t.activeColor("style")}}}),t._v(" "),r("li",{staticClass:"color1",class:"style1"==t.activecolor?"active":"",attrs:{"data-attr":"style1"},on:{click:function(e){return t.activeColor("style1")}}}),t._v(" "),r("li",{staticClass:"color2",class:"style2"==t.activecolor?"active":"",attrs:{"data-attr":"style2"},on:{click:function(e){return t.activeColor("style2")}}}),t._v(" "),r("li",{staticClass:"color3",class:"style3"==t.activecolor?"active":"",attrs:{"data-attr":"style3"},on:{click:function(e){return t.activeColor("style3")}}}),t._v(" "),r("li",{staticClass:"color4",class:"style4"==t.activecolor?"active":"",attrs:{"data-attr":"style4"},on:{click:function(e){return t.activeColor("style4")}}}),t._v(" "),r("li",{staticClass:"color5",class:"style5"==t.activecolor?"active":"",attrs:{"data-attr":"style5"},on:{click:function(e){return t.activeColor("style5")}}}),t._v(" "),r("li",{staticClass:"color6",class:"style6"==t.activecolor?"active":"",attrs:{"data-attr":"style6"},on:{click:function(e){return t.activeColor("style6")}}})])])}),[],!1,null,null,null);e.default=component.exports},558:function(t,e,r){"use strict";r.r(e);r(5),r(4),r(2),r(1),r(6),r(3),r(7);var c=r(0),l=r(86),o=r(58);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={data:function(){return{activelayout:l.config.sidebar_layout}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({activerightsidebarmenu:function(t){return t.common.activerightsidebarmenu},togglerightside:function(t){return t.common.togglerightside}})),methods:{activeLayout:function(t){this.activelayout=t,(document.getElementById("body").classList.contains("dark-sidebar")||document.getElementById("body").classList.contains("dark")||document.getElementById("body").classList.contains("colorfull")||document.getElementById("body").classList.contains("undefined"))&&document.getElementById("body").classList.remove("dark-sidebar","dark","colorfull","undefined"),""==t?document.getElementById("body").classList.add("undefined"):"dark-sidebar"==t?document.getElementById("body").classList.add("dark-sidebar"):"dark"==t?document.getElementById("body").classList.add("dark"):"colorfull"==t&&document.getElementById("body").classList.add("colorfull"),this.$store.dispatch("layout/setsidebar_layout",t),document.querySelector(".app-sidebar").classList.add("active"),document.body.classList.remove("menu-active"),document.body.classList.add("sidebar-active"),this.$store.state.common.togglerightside=!0}}},m=d,v=r(57),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"theme-layout"},[r("h5",[t._v("Layout")]),t._v(" "),r("ul",[r("li",{class:""==t.activelayout?"active":"",attrs:{"data-attr":""},on:{click:function(e){return t.activeLayout("")}}},[r("div",{staticClass:"sidebar"}),t._v(" "),r("div",{staticClass:"sidebar-content"})]),t._v(" "),r("li",{class:"dark-sidebar"==t.activelayout?"active":"",attrs:{"data-attr":"dark-sidebar"},on:{click:function(e){return t.activeLayout("dark-sidebar")}}},[r("div",{staticClass:"sidebar"}),t._v(" "),r("div",{staticClass:"sidebar-content"})]),t._v(" "),r("li",{class:"dark"==t.activelayout?"active":"",attrs:{"data-attr":"dark"},on:{click:function(e){return t.activeLayout("dark")}}},[r("div",{staticClass:"sidebar"}),t._v(" "),r("div",{staticClass:"sidebar-content"})]),t._v(" "),r("li",{class:"colorfull"==t.activelayout?"active":"",attrs:{"data-attr":"colorfull"},on:{click:function(e){return t.activeLayout("colorfull")}}},[r("div",{staticClass:"sidebar"}),t._v(" "),r("div",{staticClass:"sidebar-content"})])])])}),[],!1,null,null,null);e.default=component.exports},559:function(t,e,r){"use strict";r.r(e);r(5),r(4),r(2),r(1),r(6),r(3),r(7);var c=r(0),l=r(58);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var n={data:function(){return{activewallpaper:6,styleObject:{"background-size":"cover","background-position":"center center",display:"block"}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)({allwallpaper:function(t){return t.common.allwallpaper},chatwallpaperIndex:function(t){return t.common.chatwallpaperIndex}})),mounted:function(){this.activewallpaper=0===this.chatwallpaperIndex?6:this.chatwallpaperIndex},methods:{activeWallpaper:function(t){this.activewallpaper=t,6==t?(this.$store.state.common.chatwallpaperIndex=0,this.$store.state.common.chatwallpapergrandiant="-webkit-gradient(linear, 0% 0%, 0% 100%, from(rgb(239, 247, 254)))",this.$store.dispatch("layout/setwallpaper",0)):7==t?(this.$store.state.common.chatwallpaperIndex=0,this.$store.state.common.chatwallpapergrandiant="linear-gradient(359.3deg, rgba(28, 157, 234, 0.1) 1%, rgba(187, 187, 187, 0) 70.9%)",this.$store.dispatch("layout/setwallpaper",0)):8==t?(this.$store.state.common.chatwallpaperIndex=0,this.$store.state.common.chatwallpapergrandiant="radial-gradient(328px at 2.9% 15%, rgb(191, 224, 251) 0%, rgb(232, 233, 251) 25.8%, rgb(252, 239, 250) 50.8%, rgb(234, 251, 251) 77.6%, rgb(240, 251, 244) 100.7%)",this.$store.dispatch("layout/setwallpaper",0)):9==t?(this.$store.state.common.chatwallpaperIndex=0,this.$store.state.common.chatwallpapergrandiant="linear-gradient(109.6deg, rgb(223, 234, 247) 11.2%, rgb(244, 248, 252) 91.1%)",this.$store.dispatch("layout/setwallpaper",0)):10==t?(this.$store.state.common.chatwallpaperIndex=0,this.$store.state.common.chatwallpapergrandiant="linear-gradient(-109.6deg, rgb(204, 228, 247) 11.2%, rgb(237, 246, 250) 100.2%)",this.$store.dispatch("layout/setwallpaper",0)):11==t?(this.$store.state.common.chatwallpaperIndex=0,this.$store.state.common.chatwallpapergrandiant="radial-gradient(circle at 10% 20%, rgb(239, 246, 249) 0%, rgb(206, 239, 253) 90%)",this.$store.dispatch("layout/setwallpaper",0)):12==t?(this.$store.state.common.chatwallpaperIndex=0,this.$store.state.common.chatwallpapergrandiant="radial-gradient(circle at 10% 20%, rgb(226, 240, 254) 0%, rgb(255, 247, 228) 90%)",this.$store.dispatch("layout/setwallpaper",0)):(this.$store.state.common.chatwallpaperIndex=t,this.$store.state.common.chatwallpapergrandiant="",this.$store.dispatch("layout/setwallpaper",t))},getImgUrl:function(path){return r(337)("./"+path)}}},d=n,m=r(57),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"chat-wallpaper"},[r("h5",[t._v("Chat wallpaper")]),t._v(" "),r("ul",{staticClass:"wallpaper"},[r("li",{staticClass:"bg-color bg-default",class:6==t.activewallpaper?"active":"",on:{click:function(e){return t.activeWallpaper(6)}}}),t._v(" "),t._l(t.allwallpaper,(function(e){return r("li",{key:e.id,staticClass:"bg-size",class:{active:t.activewallpaper===e.id},style:[{"background-image":"url("+t.getImgUrl(e.img)+")"},t.styleObject],on:{click:function(r){return t.activeWallpaper(e.id,e.img)}}})})),t._v(" "),r("br"),t._v(" "),r("li",{staticClass:"bg-color grediant-1",class:7==t.activewallpaper?"active":"",on:{click:function(e){return t.activeWallpaper(7)}}}),t._v(" "),r("li",{staticClass:"bg-color grediant-2",class:8==t.activewallpaper?"active":"",on:{click:function(e){return t.activeWallpaper(8)}}}),t._v(" "),r("li",{staticClass:"bg-color grediant-3",class:9==t.activewallpaper?"active":"",on:{click:function(e){return t.activeWallpaper(9)}}}),t._v(" "),r("li",{staticClass:"bg-color grediant-4",class:10==t.activewallpaper?"active":"",on:{click:function(e){return t.activeWallpaper(10)}}}),t._v(" "),r("li",{staticClass:"bg-color grediant-5",class:11==t.activewallpaper?"active":"",on:{click:function(e){return t.activeWallpaper(11)}}}),t._v(" "),r("li",{staticClass:"bg-color grediant-6",class:12==t.activewallpaper?"active":"",on:{click:function(e){return t.activeWallpaper(12)}}})],2)])}),[],!1,null,null,null);e.default=component.exports},560:function(t,e,r){"use strict";r.r(e);var c=r(86),l={data:function(){return{activesidebar:c.config.sidebar_setting}},methods:{activeSidebar:function(t){this.activesidebar=t,this.$store.state.common.toggleleftside="on"==t?"on":"",this.$store.dispatch("layout/setsidebar_setting",t)}}},o=r(57),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sidebar-setting"},[r("h5",[t._v("Sidebar")]),t._v(" "),r("ul",[r("li",{staticClass:"three-column",class:"on"==t.activesidebar?"active":"",on:{click:function(e){return t.activeSidebar("on")}}},[r("div",{staticClass:"sm-sidebar"}),t._v(" "),r("div",{staticClass:"sidebar"}),t._v(" "),r("div",{staticClass:"sidebar-content"})]),t._v(" "),r("li",{staticClass:"two-column",class:""==t.activesidebar?"active":"",on:{click:function(e){return t.activeSidebar("")}}},[r("div",{staticClass:"sidebar"}),t._v(" "),r("div",{staticClass:"sidebar-content"})])])])}),[],!1,null,null,null);e.default=component.exports},768:function(t,e,r){"use strict";r.r(e);r(5),r(4),r(2),r(1),r(6),r(3),r(7);var c=r(0),l=r(58),o=r(557),n=r(558),d=r(559),m=r(560);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var y={components:{Choosecolor:o.default,Layout:n.default,ChatWallpaper:d.default,Sidebar:m.default},data:function(){return{styleObject:{position:"fixed",left:"0",top:"0",opacity:"0"}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)({opencustomizer:function(t){return t.common.opencustomizer},data:function(t){return JSON.stringify(t.layout.layout)},layout:function(t){return t.layout.layout}})),methods:{closecustomizer:function(){this.$store.state.common.opencustomizer=!1},hide:function(){this.$refs.modalcustomizer.hide()},copyText:function(){this.$refs.layout.select(),document.execCommand("copy"),this.$toasted.show("Code Copied to clipboard",{theme:"outline",position:"top-right",type:"default",duration:2e3})}}},h=y,f=r(57),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"setting-sidebar",style:t.opencustomizer?"right: 0px;":"right: -400px;"},[r("div",{staticClass:"theme-title"},[r("div",{staticClass:"media"},[r("div",[r("h2",[t._v("Customizer")]),t._v(" "),r("h4",[t._v("Real Time Customize")]),t._v(" "),r("button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-customizer",modifiers:{"modal-customizer":!0}}],staticClass:"btn btn-primary plus-popup btn-sm mt-2"},[t._v("\n            Configuration\n          ")]),t._v(" "),r("b-modal",{ref:"modalcustomizer",staticClass:"theme-modal",attrs:{id:"modal-customizer","content-class":"configuration-modal add-popup","hide-footer":"",centered:"","hide-header":"","hide-header-close":""}},[r("div",{staticClass:"modal-header"},[r("h2",{staticClass:"modal-title"},[t._v("Customizer configuration")]),t._v(" "),r("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.hide()}}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),r("div",{staticClass:"modal-body"},[r("div",{staticClass:"config-popup"},[r("p",[t._v("\n                  To replace our design with your desired theme. Please do\n                  configuration as mention\n                ")]),t._v(" "),r("p",[r("b",[t._v("Path : src > data > layout.json")])]),t._v(" "),r("div",[r("pre",[t._v("\t\t\t\t\t\t\t\t\t\t"),r("code",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"),r("b-form-textarea",{ref:"layout",style:t.styleObject,attrs:{value:t.data,rows:"1"}}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.layout)+"\n\t\t\t\t\t\t\t\t\t\t")],1),t._v("\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),r("button",{staticClass:"btn btn-primary mt-2",on:{click:function(e){return t.copyText()}}},[t._v("\n                  Copy Json\n                ")])])])])],1),t._v(" "),r("div",{staticClass:"media-body"},[r("a",{staticClass:"icon-btn btn-outline-light button-effect pull-right cog-close",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.closecustomizer()}}},[r("i",{staticClass:"fa fa-close"})])])])]),t._v(" "),r("Choosecolor"),t._v(" "),r("Layout"),t._v(" "),r("ChatWallpaper"),t._v(" "),r("Sidebar")],1)}),[],!1,null,null,null);e.default=component.exports}}]);