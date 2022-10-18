"use strict";(self["webpackChunkauction"]=self["webpackChunkauction"]||[]).push([[13],{5945:function(e,t,i){i.r(t),i.d(t,{default:function(){return p}});var a=function(){var e=this,t=e._self._c;return t("dashboard-content",{scopedSlots:e._u([{key:"filters",fn:function(){return[t("section",{staticClass:"mb-4"},[t("div",{staticClass:"text-gray mb-3"},[e._v(e._s(e._f("upperCase")("Filter Type")))]),t("base-form-radios",{attrs:{options:e.typeOptions},scopedSlots:e._u([{key:"after",fn:function(){return[t("h4",{staticClass:"mb-0 ml-auto"},[t("b-badge",{staticClass:"text-white",attrs:{variant:"gray-light"}},[e._v("5")])],1)]},proxy:!0}]),model:{value:e.filters.type,callback:function(t){e.$set(e.filters,"type",t)},expression:"filters.type"}})],1),t("section",{staticClass:"mb-4"},[t("div",{staticClass:"text-gray mb-3"},[e._v(e._s(e._f("upperCase")("Order By")))]),t("BaseFormRadios",{attrs:{options:e.orderByOptions},model:{value:e.filters.orderBy,callback:function(t){e.$set(e.filters,"orderBy",t)},expression:"filters.orderBy"}})],1),t("section",{staticClass:"mb-4"},[t("div",{staticClass:"text-gray mb-3"},[e._v(e._s(e._f("upperCase")("Auction")))]),t("BaseFormDropdownSelect",{staticClass:"mb-3",attrs:{options:e.auctionTypeOptions},model:{value:e.filters.auctionType,callback:function(t){e.$set(e.filters,"auctionType",t)},expression:"filters.auctionType"}}),t("BaseFormDropdownSelect",{staticClass:"mb-3",attrs:{options:e.auctionLocationOptions},model:{value:e.filters.auctionLocation,callback:function(t){e.$set(e.filters,"auctionLocation",t)},expression:"filters.auctionLocation"}}),t("BaseFormDropdownSelect",{staticClass:"mb-3",attrs:{options:e.auctionRegionOptions},model:{value:e.filters.auctionRegion,callback:function(t){e.$set(e.filters,"auctionRegion",t)},expression:"filters.auctionRegion"}})],1),t("section",{staticClass:"mb-4"},[t("div",{staticClass:"text-gray mb-3"},[e._v(e._s(e._f("upperCase")("Distance Away (KM)")))]),t("BaseFormRadios",{attrs:{inline:"",buttons:"",justifyBetween:"",options:e.distanceAwayOptions},model:{value:e.filters.distanceAway,callback:function(t){e.$set(e.filters,"distanceAway",t)},expression:"filters.distanceAway"}})],1),t("section",{staticClass:"mb-4"},[t("div",{staticClass:"text-gray mb-3"},[e._v(e._s(e._f("upperCase")("Mileage (KM)")))]),t("BaseSliderRange",{attrs:{min:e.mileageRange.min,max:e.mileageRange.max},model:{value:e.filters.mileage,callback:function(t){e.$set(e.filters,"mileage",t)},expression:"filters.mileage"}})],1),t("section",{staticClass:"mb-4"},[t("div",{staticClass:"text-gray mb-3"},[e._v(e._s(e._f("upperCase")("Year")))]),t("BaseSliderRange",{attrs:{min:e.yearRange.min,max:e.yearRange.max,step:1},model:{value:e.filters.year,callback:function(t){e.$set(e.filters,"year",t)},expression:"filters.year"}})],1)]},proxy:!0}])},[t("h1",[e._v("Awaiting Checkout View")])])},n=[],s=i(7082),o=i(7722),r=i(4049),c=i(3706),l={name:"AwaitingCheckoutView",components:{DashboardContent:s.Z,BaseFormDropdownSelect:o.Z,BaseFormRadios:r.Z,BaseSliderRange:c.Z},data(){return{options:[{name:"Any Auction",id:""}],filters:{type:"",orderBy:"",auctionType:"",auctionLocation:"",auctionRegion:"",distanceAway:"",mileage:[10,1e5],year:[1996,2023]}}},computed:{typeOptions(){return[{name:"All",id:""},{name:"Mine",id:"mine"},{name:"Waiting On You",id:"waiting_on_you"},{name:"Waiting On Them",id:"waiting_on_them"}]},orderByOptions(){return[{name:"Recently Updated",id:""},{name:"Ending First",id:"ending_first"}]},auctionTypeOptions(){return[{name:"Any Auction",id:""},{name:"Live Auction",id:"live_auction"},{name:"Timed Auction",id:"timed_auction"}]},auctionLocationOptions(){return[{name:"Any Auction Location",id:""},{name:"Live Auction",id:"live_auction"},{name:"Timed Auction",id:"timed_auction"}]},auctionRegionOptions(){return[{name:"Any Auction Region",id:""},{name:"Live Auction",id:"live_auction"},{name:"Timed Auction",id:"timed_auction"}]},distanceAwayOptions(){return[{name:250,id:250},{name:500,id:500},{name:750,id:750},{name:"Any",id:""}]},mileageRange(){return{min:0,max:5e4}},yearRange(){return{min:1996,max:2023}}}},u=l,m=i(1001),d=(0,m.Z)(u,a,n,!1,null,null,null),p=d.exports}}]);