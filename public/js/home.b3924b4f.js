"use strict";(self["webpackChunkauction"]=self["webpackChunkauction"]||[]).push([[177],{9690:function(t,n,e){e.d(n,{Z:function(){return r}});var s=function(){var t=this,n=t._self._c;return n("div",{staticClass:"header_image"},[t._t("default")],2)},a=[],i=e(1001),o={},l=(0,i.Z)(o,s,a,!1,null,null,null),r=l.exports},6792:function(t,n,e){e.d(n,{Z:function(){return c}});var s=function(){var t=this,n=t._self._c;return n("b-navbar-brand",{staticClass:"user-select-none",attrs:{to:t.redirectTo}},[n("span",{staticClass:"text-danger h2 mb-0 font-weight-bold",style:t.aStyle},[t._v("A")]),n("span",{staticClass:"h3 mb-0 font-weight-bold text-white",style:t.uctionStyle},[t._v("uction")])])},a=[],i={props:{aStyle:{type:[Object,String],default:""},uctionStyle:{type:[Object,String],default:""},noRedirect:{type:Boolean,default:!1}},computed:{redirectTo(){return this.noRedirect?null:{name:"home"}}}},o=i,l=e(1001),r=(0,l.Z)(o,s,a,!1,null,null,null),c=r.exports},9031:function(t,n,e){e.d(n,{Z:function(){return b}});var s=function(){var t=this,n=t._self._c;return n(t.layout.component,{tag:"component"},[t._t("default")],2)},a=[],i=function(){var t=this,n=t._self._c;return n("div",[n("b-navbar",{staticClass:"guest_navbar px-3 px-xl-0",attrs:{toggleable:"xl",type:"dark",variant:"secondary"}},[n("b-container",{staticClass:"custom_fluid_container",attrs:{fluid:""}},[n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("logo"),n("b-dropdown",{staticClass:"d-block d-xl-none",attrs:{right:"","toggle-class":"bg-transparent border-0 box-shadow-none","menu-class":"p-0 shadow border-0"},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("b-avatar",{attrs:{src:t.activeLangOption.image,size:"2rem"}})]},proxy:!0}])},t._l(t.langsOptions,(function(e,s){return n("b-dropdown-item",{key:s,attrs:{"link-class":"p-3"}},[n("b-img",{staticClass:"pr-2",attrs:{src:e.image,size:"0.5rem"}}),n("span",{staticClass:"font-weight-500"},[t._v(t._s(e.title))])],1)})),1),n("b-collapse",{staticClass:"mx-n3 mr-xl-0",attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"bg-secondary ml-xl-auto pl-4 py-4 pl-xl-0 py-xl-0"},[t._l(t.navLinks,(function(e,s){return n("router-link",{key:s,staticClass:"btn text-white mx-1 fs-md font-weight-600 text-left text-xl-center mb-2 mb-xl-0",attrs:{to:{name:e.name},"active-class":"active_link",exact:0==s}},[t._v(" "+t._s(e.title)+" ")])})),n("div",{staticClass:"d-flex align-items-center justify-content-center pt-3 pt-xl-0"},["signup"!=t.$route.name?n("router-link",{staticClass:"btn btn-primary font-weight-600 mx-3 px-4 w-max-content",attrs:{to:{name:"signup"}}},[t._v("Sign Up")]):t._e(),"signin"!=t.$route.name?n("router-link",{staticClass:"btn btn-outline-light font-weight-600 mx-3 px-4 w-max-content",attrs:{to:{name:"signin"}}},[t._v("Sign In")]):t._e()],1)],2)],1),n("b-dropdown",{staticClass:"d-none d-xl-block",attrs:{right:"","toggle-class":"bg-transparent border-0 box-shadow-none","menu-class":"p-0 shadow border-0"},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("b-avatar",{attrs:{src:t.activeLangOption.image,size:"2rem"}})]},proxy:!0}])},t._l(t.langsOptions,(function(e,s){return n("b-dropdown-item",{key:s,attrs:{"link-class":"p-3"}},[n("b-img",{staticClass:"pr-2",attrs:{src:e.image,size:"0.5rem"}}),n("span",{staticClass:"font-weight-500"},[t._v(t._s(e.title))])],1)})),1)],1)],1),n("div",[t._t("default")],2)],1)},o=[],l=e(6792),r={components:{Logo:l.Z},computed:{langsOptions(){return this.$store.state.app.langsOptions},lang(){return this.$store.state.app.lang},activeLangOption(){return this.langsOptions.find((t=>t.key==this.lang))},navLinks(){let t=t=>this.$route.name==t;return[{title:"Home",name:"home",isActive:t("home")},{title:"Our Offerings",name:"ourOfferings",isActive:t("ourOfferings")},{title:"Auction Regions",name:"auctionRegions",isActive:t("auctionRegions")},{title:"News",name:"news",isActive:t("news")},{title:"About Us",name:"about",isActive:t("about")},{title:"Contact Us",name:"contact",isActive:t("contact")}]}}},c=r,u=e(1001),p=(0,u.Z)(c,i,o,!1,null,null,null),g=p.exports,m={props:{type:{type:String,default:"guest"}},components:{GuestLayout:g},data(){return{layouts:{guest:{component:g}}}},computed:{layout(){return this.layouts[this.type]}}},d=m,f=(0,u.Z)(d,s,a,!1,null,null,null),b=f.exports},3710:function(t,n,e){e.r(n),e.d(n,{default:function(){return p}});var s=function(){var t=this,n=t._self._c;return n("div",{staticClass:"home"},[n("main-layout",[n("header-image",[n("b-container",{staticClass:"custom_fluid_container h-100",attrs:{fluid:""}},[n("div",{staticClass:"d-flex justify-content-center flex-column h-100"},[n("h1",{staticClass:"text-white font-weight-bold",staticStyle:{"font-size":"64px"}},[t._v("The only online auction that"),n("br"),t._v("moves at the speed of your business.")]),n("p",{staticClass:"text-white my-5",staticStyle:{"font-size":"23px"}},[t._v("Explore the cars world")]),n("div",{},[n("router-link",{staticClass:"btn btn-primary btn-lg font-weight-600 mx-3 px-4 py-2",attrs:{to:{name:"signup"}}},[t._v("Sign Up")]),n("router-link",{staticClass:"btn btn-outline-light btn-lg font-weight-600 mx-3 px-4 py-2",attrs:{to:{name:"signin"}}},[t._v("Sign In")])],1)])])],1)],1)],1)},a=[],i=e(9031),o=e(9690),l={name:"HomeView",components:{MainLayout:i.Z,HeaderImage:o.Z}},r=l,c=e(1001),u=(0,c.Z)(r,s,a,!1,null,null,null),p=u.exports}}]);