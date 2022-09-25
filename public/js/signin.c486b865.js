"use strict";(self["webpackChunkauction"]=self["webpackChunkauction"]||[]).push([[577],{1433:function(t,s,i){i.r(s),i.d(s,{default:function(){return w}});var a=function(){var t=this,s=t._self._c;return s("main-layout",[s("header-image",[s("b-container",{staticClass:"custom_fluid_container h-100",attrs:{fluid:""}},[s("b-row",{staticClass:"text-white text-center h-100",attrs:{"align-h":"center","align-v":"center"}},[s("b-col",{staticClass:"p-0",attrs:{cols:"12",sm:"9",lg:"6",xl:"5"}},[s("b-card",{staticClass:"bg-secondary p-3 p-sm-5 mobile_full_height",attrs:{"no-body":""}},[s("logo",{attrs:{noRedirect:"",aStyle:"font-size:84px;",uctionStyle:"font-size:64px;"}}),s("h3",{staticClass:"my-4"},[t._v("Sign In")]),s("b-alert",{attrs:{variant:"danger",show:!!t.errorMsg}},[t._v(t._s(t.errorMsg))]),s("b-form",[s("base-input",{attrs:{noActiveColor:"",placeholder:"Username - Email - Mobile no",errorMsg:t.$signinErrorMsg("email")},model:{value:t.signin.email,callback:function(s){t.$set(t.signin,"email",s)},expression:"signin.email"}},[s("div",{staticClass:"pointer-events-none",attrs:{slot:"absolute-right-icon"},slot:"absolute-right-icon"},[s("BIconPersonCircle")],1)]),s("base-input",{attrs:{noActiveColor:"",type:t.passwordType,placeholder:"Password",errorMsg:t.$signinErrorMsg("password")},model:{value:t.signin.password,callback:function(s){t.$set(t.signin,"password",s)},expression:"signin.password"}},[s("div",{attrs:{slot:"absolute-right-icon"},slot:"absolute-right-icon"},[t.isPasswordShow?s("div",{attrs:{role:"button"},on:{click:t.togglePasswordType}},[s("BIconEyeSlash",{attrs:{scale:"1.2"}})],1):s("div",{attrs:{role:"button"},on:{click:t.togglePasswordType}},[s("BIconEye",{attrs:{scale:"1.2"}})],1)])]),s("b-overlay",{attrs:{show:t.isLoading,rounded:"",opacity:"0.4",variant:"dark","spinner-small":"","spinner-variant":"light"}},[s("b-btn",{staticClass:"mt-5",attrs:{block:"",variant:"primary",size:"lg",disabled:t.isLoading},on:{click:t.signIn}},[t._v("Sign In")])],1),s("div",{staticClass:"mt-4 text-left"},[s("span",[t._v("Don't have an account?")]),t._v("  "),s("router-link",{staticClass:"text-danger font-weight-bold text-decoration-none",attrs:{to:{name:"signup"}}},[t._v("Sign up")])],1)],1)],1)],1)],1)],1)],1)],1)},n=[],e=i(2786),o=i(9690),r=i(6792),l=i(4874),c=i(8752),g=i(403),d=i(3339),u=i(4659),h=i(5795),p={name:"SignInView",components:{MainLayout:e.Z,HeaderImage:o.Z,Logo:r.Z,BaseInput:l.Z,BIconPersonCircle:c.pbm,BIconEye:c.unT,BIconEyeSlash:c.qa2},mixins:[(0,g.Z)(),u.oE,(0,d.Z)("signin")],data(){return{signin:{email:"",password:""},isLoading:!1,errorMsg:""}},validations:{signin:{email:{required:h.C1},password:{required:h.C1}}},mounted(){this.$route.params.isRegistered&&this.$bvToast.toast(this.$t("auth.registerEmailActivationMessage"),{noCloseButton:!0,toaster:"b-toaster-top-full",toastClass:"mx-auto fs-lg bg-success text-white text-center"})},methods:{async signIn(){if(this.$resetSigninErrors(),this.errorMsg="",this.$v.$touch(),!this.$v.$invalid){this.isLoading=!0;try{await this.$store.dispatch("signin",this.signin)}catch(t){this.errorMsg=this.$t("auth.invalidEmailOrPassword")}finally{this.isLoading=!1}}}}},m=p,b=i(1001),v=(0,b.Z)(m,a,n,!1,null,null,null),w=v.exports}}]);