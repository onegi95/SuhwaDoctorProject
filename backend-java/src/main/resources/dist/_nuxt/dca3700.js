(window.webpackJsonp=window.webpackJsonp||[]).push([[22,60,61,62],{355:function(t,n,e){t.exports=e.p+"img/landing-logo.d9ecd4c.png"},358:function(t,n,e){"use strict";e.r(n);var r=e(56),component=Object(r.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/messenger/messenger"}},[n("div",{staticClass:"logo-block"},[n("img",{staticClass:"img-fluid",attrs:{src:e(355),alt:"logo"}})])])}),[],!1,null,null,null);n.default=component.exports},359:function(t,n,e){"use strict";e.r(n);var r=e(56),component=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"header-right-margin"},[e("client-only",[e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[e("nuxt-link",{attrs:{to:"/messenger/messenger"}},[t._v("Messenger")])],1),t._v(" "),e("b-dropdown",{attrs:{id:"dropdown-4",text:"Bouns page"}},[e("b-dropdown-item",{staticClass:"nav-link"},[e("nuxt-link",{attrs:{to:"/bonus/about"}},[t._v("프로젝트 소개")])],1),t._v(" "),e("b-dropdown-item",{staticClass:"nav-link"},[e("nuxt-link",{attrs:{to:"/bonus/faq"}},[t._v("자주 묻는 질문")])],1),t._v(" "),e("b-dropdown-item",{staticClass:"nav-link"},[e("nuxt-link",{attrs:{to:"/bonus/elements"}},[t._v("Elements")])],1)],1),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[e("nuxt-link",{attrs:{to:"/authentication/login"}},[t._v("로그인")])],1),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[e("nuxt-link",{attrs:{to:"/authentication/signup"}},[t._v("회원가입")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports},361:function(t,n,e){"use strict";e.r(n);var r=e(358),l=e(359),o={components:{Logo:r.default,Navbar:l.default},data:function(){return{windowTop:0,fixedheader:!1}},mounted:function(){window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(t){this.windowTop=t.target.documentElement.scrollTop,this.windowTop>=60?this.fixedheader=!0:this.fixedheader=!1}}},c=e(56),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",{attrs:{id:"home"}},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"landing-header",class:t.fixedheader?"fixed":""},[e("div",{staticClass:"main-menu"},[e("div",[e("b-navbar",{staticClass:"navbar navbar-light",attrs:{toggleable:"xl"}},[e("Logo"),t._v(" "),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),e("Navbar")],1)],1)])])])])])])}),[],!1,null,null,null);n.default=component.exports},412:function(t,n,e){"use strict";e.r(n);var header=e(361),r=e(173),l={components:{Header:header.default,Breadcrumbs:r.default}},o=e(56),component=Object(o.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"inner-page"},[e("Header"),t._v(" "),e("Breadcrumbs",{attrs:{main:"Home",title:"Blog"}})],1)}),[],!1,null,null,null);n.default=component.exports}}]);