"use strict";(self["webpackChunkauction"]=self["webpackChunkauction"]||[]).push([[717],{5897:function(t,s,e){e.d(s,{Z:function(){return $}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"dashboard_content",class:{has_filters:!!t.$slots.filters,active_filters:t.isSidebarFiltersActive}},[s("UploadList"),t.$slots.filters?s("div",{staticClass:"filter_icon_button",attrs:{role:"button"},on:{click:t.openSidebarFilters}},[s("BIconFunnelFill",{attrs:{scale:"1"}})],1):t._e(),t.$slots.filters?s("div",{staticClass:"dashboard_siderbar_filter"},[s("div",{staticClass:"dashboard_siderbar_filter_header"},[s("span",{staticClass:"route_parent_name"},[t._v(t._s(t._f("upperCase")(t.parentRouteName)))]),t.routeName?s("span",{staticClass:"route_separetor"},[s("BIconChevronRight")],1):t._e(),s("span",{staticClass:"route_child_name"},[t._v(t._s(t._f("upperCase")(t.routeName)))]),s("div",{staticClass:"close_icon",attrs:{role:"button"},on:{click:function(s){t.isSidebarFiltersActive=!1}}},[s("BIconXCircleFill",{attrs:{variant:"danger",scale:"1.2"}})],1)]),s("p",{staticClass:"fs-md font-weight-600"},[t._v(t._s(t._f("upperCase")("Filters")))]),s("div",{staticClass:"dashboard_siderbar_filter_body"},[t._t("filters")],2)]):t._e(),s("base-container",{staticClass:"pt-4"},[t._t("default")],2)],1)},r=[],i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"base_container"},[t._t("default")],2)},l=[],o={},n=o,u=e(1001),d=(0,u.Z)(n,i,l,!1,null,"4dea56fd",null),c=d.exports,p=e(8752),_=function(){var t=this,s=t._self._c;return t.uploads.length?s("b-dropdown",{attrs:{id:"uploads-list",size:"lg",variant:"link",right:"","toggle-class":"text-decoration-none p-0","menu-class":"shadow-lg","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[s("div",{staticClass:"icon rounded-lg bg-primary position-relative"},[t.countOfNotCompleted?s("b-badge",{staticClass:"position-absolute",attrs:{variant:"danger"}},[t._v(t._s(t.countOfNotCompleted))]):t._e(),s("BIconCloudUpload",{staticClass:"rounded bg-blue p-2",attrs:{variant:"white",icon:"cloud-upload"}})],1)]},proxy:!0}],null,!1,783605040)},t._l(t.uploads,(function(t,e){return s("b-dropdown-text",{key:e},[s("upload-item",{attrs:{upload:t}})],1)})),1):t._e()},h=[],f=function(){var t=this,s=t._self._c;return s("div",{staticClass:"d-flex align-items-center justify-content-between"},[s("div",{staticClass:"mr-3 rounded-lg"},[s("b-avatar",{staticClass:"shadow-sm",attrs:{src:t.upload.imgSrc,rounded:"lg"}})],1),s("div",{staticStyle:{width:"250px"}},[s("span",[t._v(t._s(t.title))]),s("div",{staticClass:"d-flex align-items-center"},[s("b-progress",{staticClass:"font-weight-700 w-100",attrs:{variant:t.variant}},[s("b-progress-bar",{attrs:{max:100,value:t.upload.progress,label:t.label,"show-progress":"",animated:t.inProgress,striped:t.inProgress}})],1),t.inProgress?t._e():s("span",{staticClass:"h4 mb-0 c-pointer ml-1",on:{click:t.removeUploaded}},[t._v("×")])],1)])])},v=[],b={props:["upload"],computed:{inProgress(){return"progress"==this.upload.status},isDone(){return"success"==this.upload.status},isFailed(){return"error"==this.upload.status},variant(){return this.inProgress?"blue":this.isDone?"success":"danger"},label(){return this.inProgress?`${this.upload.progress}%`:this.isDone?"Uploaded successfully":"Upload failed !"},title(){return this.upload?.title?.toString()?.slice(0,20)}},methods:{removeUploaded(){this.$store.commit("removeUpload",this.upload)}}},m=b,C=(0,u.Z)(m,f,v,!1,null,null,null),g=C.exports,F={components:{UploadItem:g,BIconCloudUpload:p.Tw7},computed:{uploads(){return this.$store.state.uploads},countOfNotCompleted(){return this.uploads.reduce(((t,s)=>(this.isCompleted(s)||(t+=1),t)),0)}},methods:{isCompleted(t){return 100==t.progress&&"success"==t.status}}},w=F,x=(0,u.Z)(w,_,h,!1,null,"c3a7ef16",null),S=x.exports,k={components:{BIconChevronRight:p.xkg,BIconXCircleFill:p.aEb,BIconFunnelFill:p.mAP,BaseContainer:c,UploadList:S},data(){return{isSidebarFiltersActive:!1}},computed:{parentRouteName(){let t=this.$route.name?.split(".");return t&&t.length?this.$t("layout."+t[1]):""},routeName(){let t=this.$route.name?.split(".");return t&&t.length&&t[2]?this.$t("layout."+t[2]):""}},methods:{openSidebarFilters(){this.isSidebarFiltersActive=!this.isSidebarFiltersActive}}},y=k,U=(0,u.Z)(y,a,r,!1,null,null,null),$=U.exports},8972:function(t,s,e){e.r(s),e.d(s,{default:function(){return d}});var a=function(){var t=this,s=t._self._c;return s("dashboard-content",{scopedSlots:t._u([{key:"filters",fn:function(){return[t._v(" Start Filteration Fields ")]},proxy:!0}])},[s("h1",[t._v("Cancelled View")])])},r=[],i=e(5897),l={name:"CancelledView",components:{DashboardContent:i.Z}},o=l,n=e(1001),u=(0,n.Z)(o,a,r,!1,null,null,null),d=u.exports}}]);