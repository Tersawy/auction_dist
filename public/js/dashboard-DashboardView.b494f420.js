"use strict";(self["webpackChunkauction"]=self["webpackChunkauction"]||[]).push([[74],{2781:function(t,e,s){s.d(e,{Z:function(){return b}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard_content",class:{has_filters:!!t.$slots.filters,active_filters:t.isSidebarFiltersActive}},[t.$slots.filters?e("div",{staticClass:"filter_icon_button",attrs:{role:"button"},on:{click:t.openSidebarFilters}},[e("BIconFunnelFill",{attrs:{scale:"1"}})],1):t._e(),t.$slots.filters?e("div",{staticClass:"dashboard_siderbar_filter"},[e("div",{staticClass:"dashboard_siderbar_filter_header"},[e("span",{staticClass:"route_parent_name"},[t._v(t._s(t._f("upperCase")(t.parentRouteName)))]),t.routeName?e("span",{staticClass:"route_separetor"},[e("BIconChevronRight")],1):t._e(),e("span",{staticClass:"route_child_name"},[t._v(t._s(t._f("upperCase")(t.routeName)))]),e("div",{staticClass:"close_icon",attrs:{role:"button"},on:{click:function(e){t.isSidebarFiltersActive=!1}}},[e("BIconXCircleFill",{attrs:{variant:"danger",scale:"1.2"}})],1)]),e("p",{staticClass:"fs-md font-weight-600"},[t._v(t._s(t._f("upperCase")("Filters")))]),e("div",{staticClass:"dashboard_siderbar_filter_body"},[t._t("filters")],2)]):t._e(),e("base-container",{staticClass:"pt-4"},[t._t("default")],2)],1)},i=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"base_container"},[t._t("default")],2)},n=[],l={},o=l,c=s(1001),u=(0,c.Z)(o,r,n,!1,null,"4dea56fd",null),d=u.exports,_=s(8752),f={components:{BIconChevronRight:_.xkg,BIconXCircleFill:_.aEb,BIconFunnelFill:_.mAP,BaseContainer:d},data(){return{isSidebarFiltersActive:!1}},computed:{parentRouteName(){let t=this.$route.name?.split(".");return t&&t.length?this.$t("layout."+t[1]):""},routeName(){let t=this.$route.name?.split(".");return t&&t.length&&t[2]?this.$t("layout."+t[2]):""}},methods:{openSidebarFilters(){this.isSidebarFiltersActive=!this.isSidebarFiltersActive}}},h=f,p=(0,c.Z)(h,a,i,!1,null,null,null),b=p.exports},593:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("dashboard-content",[e("h1",[t._v("Dashboard")])])},i=[],r=s(2781),n={name:"DashboardView",components:{DashboardContent:r.Z}},l=n,o=s(1001),c=(0,o.Z)(l,a,i,!1,null,null,null),u=c.exports}}]);