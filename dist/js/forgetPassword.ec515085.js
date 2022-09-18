"use strict";(self["webpackChunkmawed"]=self["webpackChunkmawed"]||[]).push([[340],{4178:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"auth_page"},[t("b-container",[t("b-navbar",{staticClass:"app-navbar p-0"},[t("b-navbar-brand",{attrs:{to:"/"}},[t("Logo")],1)],1),t("b-card",{staticClass:"auth_card border-0 mx-auto",attrs:{"no-body":""}},[t("h4",{staticClass:"mb-5 text-center"},[e._v(e._s(e.$t("forgetPassword")))]),t("span",[e._v(e._s(e.$t("resetPasswordDesc")))]),t("b-form",{staticClass:"mt-4",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("b-form-group",{attrs:{label:"Email","label-for":"email"}},[t("b-form-input",{attrs:{id:"email",type:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),t("b-btn",{attrs:{type:"submit",variant:"primary",block:""}},[e._v(e._s(e.$t("sendResetEmail")))])],1),t("div",{staticClass:"auth_card_footer fs-sm text-center mt-4"},[t("span",{staticClass:"text-muted"},[e._v(e._s(e.$t("alreadyHaveAccount")))]),e._v("  "),t("router-link",{staticClass:"text-decoration-none",attrs:{to:"/signup"}},[e._v(e._s(e.$t("signup")))])],1)],1)],1)],1)},u=[],a=r(7014),o=r(4659),i=r(5795),f={components:{Logo:a.Z},mixins:[o.oE],data(){return{email:"",errors:{}}},validations:{email:{required:i.C1,email:i.Do}},methods:{submit(){this.$v.$touch(),this.$v.$invalid||console.log(this.email)}}},l=f,d=r(1001),c=(0,d.Z)(l,n,u,!1,null,null,null),s=c.exports},4689:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),u=(0,n.regex)("alpha",/^[a-zA-Z]*$/);t["default"]=u},3331:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),u=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t["default"]=u},7673:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),u=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))};t["default"]=u},450:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),u=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))};t["default"]=u},4111:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.req=t.regex=t.ref=t.len=void 0,Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}});var n=u(r(8751));function u(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}var o=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===a(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=o;var i=function(e){return Array.isArray(e)?e.length:"object"===a(e)?Object.keys(e).length:String(e).length};t.len=i;var f=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=f;var l=function(e,t){return(0,n.default)({type:e},(function(e){return!o(e)||t.test(e)}))};t.regex=l},3107:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),u=(0,n.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t["default"]=u},184:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),u=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i,a=(0,n.regex)("email",u);t["default"]=a},5795:function(e,t,r){function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"vX",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Do",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"BS",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"PW",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"Ei",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"uv",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"uR",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"C1",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"CF",{enumerable:!0,get:function(){return v.default}});var u=S(r(4689)),a=S(r(3331)),o=S(r(8603)),i=S(r(450)),f=S(r(184)),l=S(r(2632)),d=S(r(837)),c=S(r(5136)),s=S(r(3795)),p=S(r(367)),v=S(r(2035)),y=S(r(310)),b=S(r(8612)),m=S(r(2009)),_=S(r(5208)),h=S(r(7673)),P=S(r(7850)),g=S(r(9935)),x=S(r(3134)),O=S(r(719)),j=S(r(3107)),w=A(r(4111));function M(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(M=function(e){return e?r:t})(e)}function A(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var r=M(t);if(r&&r.has(e))return r.get(e);var u={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(u,o,i):u[o]=e[o]}return u.default=e,r&&r.set(e,u),u}function S(e){return e&&e.__esModule?e:{default:e}}},719:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),u=(0,n.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t["default"]=u},2632:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),u=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(a)}));t["default"]=u;var a=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},837:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(a)}))};t["default"]=u;var a=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},5136:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),u=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))};t["default"]=u},3134:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),u=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t["default"]=u},3795:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),u=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))};t["default"]=u},9935:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),u=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t["default"]=u},7850:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),u=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))};t["default"]=u},8603:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),u=(0,n.regex)("numeric",/^[0-9]*$/);t["default"]=u},5208:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),u=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))};t["default"]=u},367:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),u=(0,n.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t["default"]=u},2035:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),u=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t["default"]=u},310:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),u=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t["default"]=u},8612:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),u=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))};t["default"]=u},2009:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),u=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i,a=(0,n.regex)("url",u);t["default"]=a},8751:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n="web"==={NODE_ENV:"production",VUE_APP_I18N_LOCALE:"en",VUE_APP_I18N_FALLBACK_LOCALE:"en",VUE_APP_API_URL:"https://soman-oman.com/api/v1",VUE_APP_BASE_URL:"https://soman-oman.com",BASE_URL:"/"}.BUILD?r(9886).R:r(7801).withParams,u=n;t["default"]=u},9886:function(e,t,r){function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}t.R=void 0;var u="undefined"!==typeof window?window:"undefined"!==typeof r.g?r.g:{},a=function(e,t){return"object"===n(e)&&void 0!==t?t:e((function(){}))},o=u.vuelidate?u.vuelidate.withParams:a;t.R=o}}]);