"use strict";(self["webpackChunkmawed"]=self["webpackChunkmawed"]||[]).push([[830],{9690:function(t,s,a){a.r(s),a.d(s,{default:function(){return d}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"auth_page text-center"},[s("b-container",[s("b-navbar",{staticClass:"app-navbar p-0"},[s("b-navbar-brand",{attrs:{to:"/"}},[s("Logo")],1)],1),s("b-row",{attrs:{cols:"1","cols-lg":"2","align-h":"center"}},[s("b-col",{staticClass:"d-none d-lg-block mt-4"},[s("b-card",{staticClass:"border-0 mx-auto mt-5",attrs:{"no-body":""}},[s("h5",{staticClass:"text-muted mb-4"},[t._v(t._s(t.$t("modernSchedulingAndPersonalized")))]),t._l(t.features,(function(a,e){return s("div",{key:e,staticClass:"mb-2 d-flex align-items-center"},[s("b-icon",{staticClass:"text-success mr-1",attrs:{icon:"check","font-scale":"2"}}),s("span",{staticClass:"fs-md text-muted"},[t._v(t._s(a))])],1)}))],2)],1),s("b-col",[s("b-card",{staticClass:"auth_card border-0 mx-auto",attrs:{"no-body":""}},[s("h4",{staticClass:"mb-5"},[t._v(t._s(t.$t("signupForFree")))]),s("span",{staticClass:"text-muted fs-sm"},[t._v(t._s(t.$t("signupWithCalendarProvider")))]),s("div",{staticClass:"auth_btns"},t._l(t.authBtns,(function(a,e){return s("a",{key:e,staticClass:"btn_auth",attrs:{href:a.redirect}},[s("img",{staticClass:"mr-3",attrs:{src:a.image,alt:a.text,width:"28px"}}),s("h6",{staticClass:"mb-0"},[t._v(t._s(a.text))])])})),0),s("div",{staticClass:"auth_card_footer text-decoration-none fs-sm"},[s("div",{staticClass:"my-4"},[s("router-link",{staticClass:"text-decoration-none",attrs:{to:"/signup/local"}},[t._v(t._s(t.$t("orSignupWithEmail")))])],1),s("div",{staticClass:"my-4"},[s("span",{staticClass:"text-muted"},[t._v(t._s(t.$t("alreadyHaveAccount")))]),t._v("  "),s("router-link",{staticClass:"text-decoration-none",attrs:{to:"/login"}},[t._v(t._s(t.$t("login")))])],1)])])],1)],1)],1)],1)},n=[],i=a(7014),r={components:{Logo:i.Z},data(){return{features:[this.$t("unlimitedLinks"),this.$t("unlimitedSyncedCalendars")]}},async mounted(){try{await this.$store.dispatch("getGoogleRedirect");let{code:t,state:s}=this.$route.query;t&&s&&this.$store.dispatch("googleLogin",{code:t,state:s})}finally{this.endAppLoading()}},computed:{authBtns(){return this.$store.state.auth.authBtns}}},o=r,c=a(1001),l=(0,c.Z)(o,e,n,!1,null,null,null),d=l.exports}}]);