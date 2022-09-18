"use strict";(self["webpackChunkmawed"]=self["webpackChunkmawed"]||[]).push([[309],{9868:function(e,t,a){a.d(t,{Z:function(){return u}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"input_form_wrapper",class:{active:e.isFoucsed,required:e.required,icon_left:e.$slots.icon_left,is_invalid:e.is_invalid||!!e.errorMsg}},[t("div",{staticClass:"icon_left"},[e._t("icon_left",null,null,{active:e.isFoucsed})],2),t("div",{staticClass:"input_control"},[e.label?t("label",{attrs:{for:e.id}},[e._v(e._s(e.label))]):e._e(),t("div",{staticClass:"input_wrapper"},["checkbox"===e.type?t("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],staticClass:"form_input",attrs:{id:e.id,placeholder:e.placeholder,required:e.required,type:"checkbox"},domProps:{checked:Array.isArray(e.val)?e._i(e.val,null)>-1:e.val},on:{focus:e.focus,blur:e.blur,change:function(t){var a=e.val,s=t.target,r=!!s.checked;if(Array.isArray(a)){var i=null,l=e._i(a,i);s.checked?l<0&&(e.val=a.concat([i])):l>-1&&(e.val=a.slice(0,l).concat(a.slice(l+1)))}else e.val=r}}},"input",e.inputProps,!1)):"radio"===e.type?t("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],staticClass:"form_input",attrs:{id:e.id,placeholder:e.placeholder,required:e.required,type:"radio"},domProps:{checked:e._q(e.val,null)},on:{focus:e.focus,blur:e.blur,change:function(t){e.val=null}}},"input",e.inputProps,!1)):t("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],staticClass:"form_input",attrs:{id:e.id,placeholder:e.placeholder,required:e.required,type:e.type},domProps:{value:e.val},on:{focus:e.focus,blur:e.blur,input:function(t){t.target.composing||(e.val=t.target.value)}}},"input",e.inputProps,!1)),e._t("end_of_input")],2),e.errorMsg?t("span",{staticClass:"error_msg"},[e._v(e._s(e.errorMsg))]):e._e()])])},r=[],i={props:{inputProps:{type:Object},id:{type:String},label:{type:String},value:{type:[String,Number]},type:{type:String,default:"text"},placeholder:{type:String,default:""},required:{type:Boolean,default:!1},is_invalid:{type:Boolean,default:!1},errorMsg:{type:String,default:""}},data(){return{isFoucsed:!1}},computed:{val:{get(){return this.value},set(e){this.$emit("input",e)}}},methods:{onChange(e){this.value=e.target.value},focus(e){this.isFoucsed=!0,this.$emit("focus",e)},blur(e){this.isFoucsed=!1,this.$emit("blur",e)}}},l=i,n=a(1001),o=(0,n.Z)(l,s,r,!1,null,"f90c3a30",null),u=o.exports},9300:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var s=function(){var e=this,t=e._self._c;return t("b-container",{staticClass:"mt-3 mt-md-5 pt-0 pt-md-5 px-0 px-md-3"},[t("b-row",{staticClass:"mx-0 mx-md-3",attrs:{"align-h":"center"}},[t("b-col",{staticClass:"px-0 px-md-3",attrs:{cols:"12",md:"10",lg:"8"}},[t("b-card",{staticClass:"card_username"},[t("div",{staticClass:"header"},[t("span",{staticClass:"fs-lg"},[e._v(e._s(e.$t("setUsername")))])]),t("div",{staticClass:"text-muted my-4"},[e._v(e._s(e.$t("setUsernameDesc")))]),t("b-form",{on:{submit:function(t){return t.preventDefault(),e.next.apply(null,arguments)}}},[t("div",{staticClass:"body mb-5"},[t("form-input",{directives:[{name:"vuelidate",rawName:"v-vuelidate.noDirty",value:e.username,expression:"username",modifiers:{noDirty:!0}}],attrs:{required:"",label:e.$t("username"),placeholder:e.$t("usernamePlaceholder"),errorMsg:e.errorMsg},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),t("div",{staticClass:"footer d-flex align-items-center justify-content-end"},[t("b-btn",{attrs:{type:"submit",variant:"primary",disabled:e.$v.$invalid||e.isLoading},on:{click:e.next}},[e._v(e._s(e.$t("next")))])],1)])],1)],1)],1)],1)},r=[],i=a(9868),l=a(4659),n=a(2003),o={components:{FormInput:i.Z},mixins:[l.oE],data(){return{username:"",errorMsg:"",isLoading:!1}},validations:{username:{required:e=>!!e,valid:e=>/(^[a-zA-Z0-9]+$)|(^[a-zA-Z0-9]+_[a-zA-Z0-9]+$)/.test(e)}},async beforeRouteEnter(e,t,a){if(n.Z.state.auth.isLoggedIn||await n.Z.dispatch("getMe"),!n.Z.state.auth.me?.username)return a();a({name:"profileForm"})},watch:{username(){this.errorMsg=""}},methods:{async next(){if(this.$v.$touch(),!this.$v.$invalid){this.isLoading=!0;try{await this.$store.dispatch("updateProfile",{username:this.username}),this.$router.push({name:"profileForm"})}catch(e){this.errorMsg=this.$t("usernameIsTaken")}finally{this.isLoading=!1}}},reset(){this.$bvModal.hide("UsernameModal")}}},u=o,c=a(1001),d=(0,c.Z)(u,s,r,!1,null,null,null),p=d.exports}}]);