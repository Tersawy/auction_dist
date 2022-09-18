(self["webpackChunkmawed"]=self["webpackChunkmawed"]||[]).push([[421],{8108:function(e,t,A){"use strict";A.d(t,{Z:function(){return c}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"account mt-5 position-relative"},[t("b-container",[t("div",{staticClass:"header mt-4"},[t("div",{staticClass:"h3 mb-0"},[e._v(e._s(e.$t("accountSettings")))])]),t("div",{staticClass:"my-4 py-2"},[t("b-nav",{staticClass:"custom_nav",attrs:{fill:""}},e._l(e.tabs,(function(A){return t("b-nav-item",{key:A.value,attrs:{active:e.isActive(A),to:A.to}},[e._v(e._s(A.title))])})),1)],1),t("b-row",[t("b-col",{attrs:{cols:"12",md:"9"}},[e._t("default")],2)],1)],1)],1)},s=[],n={props:{activeTab:{type:String,default:"general"}},data(){return{tabs:[{title:this.$t("general"),value:"general",isActive:!0,to:"/account"},{title:this.$t("calendars"),value:"calendars",isActive:!1,to:"/account/calendars"},{title:this.$t("integrations"),value:"integrations",isActive:!1,to:"/account/integrations"},{title:this.$t("availability"),value:"availability",isActive:!1,to:"/account/availability"},{title:this.$t("contacts"),value:"contacts",isActive:!1,to:"/account/contacts"}]}},methods:{isActive(e){return e.value==this.activeTab}}},i=n,l=A(1001),r=(0,l.Z)(i,a,s,!1,null,null,null),c=r.exports},5476:function(e,t,A){"use strict";A.d(t,{Z:function(){return r}});var a=function(){var e=this,t=e._self._c;return t("svg",{attrs:{focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true"}},[t("path",{attrs:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"}})])},s=[],n=A(1001),i={},l=(0,n.Z)(i,a,s,!1,null,null,null),r=l.exports},965:function(e,t,A){"use strict";A.d(t,{Z:function(){return c}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"dropdown_select_wrapper",class:{active:e.isFoucsed||e.isShown,required:e.required,icon_left:e.$slots.icon_left,is_invalid:e.is_invalid}},[t("div",{staticClass:"icon_left"},[e._t("icon_left",null,null,{active:e.isFoucsed||e.isShown})],2),t("div",{staticClass:"dropdown_select_control"},[t("span",{staticClass:"dropdown_select_label"},[e._v(e._s(e.label))]),e.$slots.default?e._e():t("b-dropdown",{staticClass:"dropdown_select",attrs:{block:"","toggle-class":"dropdown_select_btn d-flex justify-content-between align-items-center pl-0 ","menu-class":"w-100 p-0 shadow-lg border-0",variant:"text"},on:{shown:e.shown,hidden:e.hidden},scopedSlots:e._u([{key:"button-content",fn:function(){return[e._t("label",(function(){return[e.selectedOption?t("span",[e._v(e._s(e.selectedOption.text))]):e._e()]}))]},proxy:!0}],null,!0)},e._l(e.options,(function(A,a){return t("b-dropdown-item",{key:a,attrs:{"link-class":"p-3"},on:{click:function(t){return e.select(A)}}},[e._v(" "+e._s(A.text)+" ")])})),1),e._t("default")],2)])},s=[],n={props:{label:{type:String},value:{type:[String,Number]},required:{type:Boolean,default:!1},options:{type:Array,default:()=>[]},is_invalid:{type:Boolean,default:!1}},data(){return{isFoucsed:!1,isShown:!1}},mounted(){let e=document.querySelector(".dropdown_select_btn");e&&(e.addEventListener("focus",(()=>{this.isFoucsed=!0})),e.addEventListener("blur",(()=>{this.isFoucsed=!1})))},computed:{val:{get(){return this.value},set(e){this.$emit("input",e)}},selectedOption(){return this.options.find((e=>e.value==this.value))}},methods:{shown(){this.isShown=!0},hidden(){this.isShown=!1},select(e){this.val=e.value,this.$emit("change",e.value),this.$emit("item-selected",e)}}},i=n,l=A(1001),r=(0,l.Z)(i,a,s,!1,null,null,null),c=r.exports},7989:function(e,t,A){"use strict";A.r(t),A.d(t,{default:function(){return k}});var a=function(){var e=this,t=e._self._c;return t("account",{attrs:{activeTab:"calendars"}},[t("section",[t("div",{staticClass:"field_title pt-1 d-flex align-items-center"},[t("BIcon",{staticClass:"mr-2",attrs:{icon:"arrow-repeat"}}),t("div",{staticClass:"title font-weight-500"},[e._v(e._s(e.$t("sync")))])],1),t("div",{staticClass:"mt-3"},[t("div",{staticClass:"mb-5"},[t("div",{staticClass:"font-weight-normal d-flex align-items-center"},[t("span",[e._v(e._s(e.$t("readCalendars")))]),t("div",{directives:[{name:"b-modal",rawName:"v-b-modal.ReadCalendarsModal",modifiers:{ReadCalendarsModal:!0}}],staticClass:"d-flex align-items-center fs-md text-primary font-weight-500 ml-4 cursor-pointer"},[t("b-icon",{staticClass:"mr-2",attrs:{icon:"pencil",width:"1em"}}),t("span",[e._v(e._s(e.$t("edit")))])],1)]),t("span",{staticClass:"text-muted fs-sm"},[e._v(e._s(e.$t("readCalendarsDesc")))]),t("div",{staticClass:"fs-sm mt-4"},[e.readCalendars.length?e._e():t("div",{staticClass:"d-inline-block py-2 px-3 rounded-pill",staticStyle:{"background-color":"#ff001a1a"}},[t("div",{staticClass:"d-flex align-items-center"},[t("BIcon",{staticClass:"mr-2",attrs:{icon:"exclamation-circle",variant:"danger",scale:"1.2"}}),t("span",{staticClass:"text-muted"},[e._v(e._s(e.$t("noReadCalendars")))])],1)]),e._l(e.readCalendars,(function(a,s){return t("div",{key:s},[t("div",{staticClass:"d-flex align-items-center mb-2"},[t("b-img",{attrs:{src:A(7591)(`./${a.image}`),width:"16px"}}),t("span",{staticClass:"text-muted ml-2"},[e._v(e._s(a.email))])],1),e._l(a.calendars,(function(A,a){return t("div",{key:a},[t("div",{staticClass:"d-flex align-items-center"},[t("span",{staticClass:"mr-2 ml-3 rounded-circle",style:{backgroundColor:A.color,width:"8px",height:"8px"}}),t("span",[e._v(e._s(A.name))])])])}))],2)}))],2)]),t("div",{staticClass:"mb-4"},[t("div",{staticClass:"font-weight-normal d-flex align-items-center"},[t("span",[e._v(e._s(e.$t("writeCalendar")))]),t("div",{directives:[{name:"b-modal",rawName:"v-b-modal.WriteCalendarModal",modifiers:{WriteCalendarModal:!0}}],staticClass:"d-flex align-items-center fs-md text-primary font-weight-500 ml-4 cursor-pointer"},[t("b-icon",{staticClass:"mr-2",attrs:{icon:"pencil",width:"1em"}}),t("span",[e._v(e._s(e.$t("edit")))])],1)]),t("span",{staticClass:"text-muted fs-sm"},[e._v(e._s(e.$t("writeCalendarDesc")))]),t("div",{staticClass:"fs-sm mt-4"},[e.writeCalendar.length?e._e():t("div",{staticClass:"d-inline-block py-2 px-3 rounded-pill",staticStyle:{"background-color":"#ff001a1a"}},[t("div",{staticClass:"d-flex align-items-center"},[t("BIcon",{staticClass:"mr-2",attrs:{icon:"exclamation-circle",variant:"danger",scale:"1.2"}}),t("span",{staticClass:"text-muted"},[e._v(e._s(e.$t("noWriteCalendar")))])],1)]),e._l(e.writeCalendar,(function(a,s){return t("div",{key:s},[t("div",{staticClass:"d-flex align-items-center mb-2"},[t("b-img",{attrs:{src:A(7591)(`./${a.image}`),width:"16px"}}),t("span",{staticClass:"text-muted ml-2"},[e._v(e._s(a.email))])],1),e._l(a.calendars,(function(A,a){return t("div",{key:a},[t("div",{staticClass:"d-flex align-items-center"},[t("span",{staticClass:"mr-2 ml-3 rounded-circle",style:{backgroundColor:A.color,width:"8px",height:"8px"}}),t("span",[e._v(e._s(A.name))])])])}))],2)}))],2)])])]),t("section",{staticClass:"mt-5"},[t("div",{staticClass:"field_title pt-1 d-flex align-items-center"},[t("BIcon",{staticClass:"mr-2",attrs:{icon:"code",scale:"1.3"}}),t("div",{staticClass:"title font-weight-500"},[e._v(e._s(e.$t("connections")))])],1),t("div",{staticClass:"mt-3"},[t("div",{staticClass:"pb-3"},e._l(e.connections,(function(a,s){return t("div",{key:s,staticClass:"mb-4"},[t("div",{staticClass:"d-flex align-items-center"},[t("b-img",{attrs:{src:A(7591)(`./${a.image}`),width:"50px"}}),t("div",{staticClass:"ml-3"},[t("div",{staticClass:"mb-1 text-muted"},[e._v(e._s(a.name))]),t("div",[e._v(e._s(a.email))])]),a.hasDisconnect?t("div",{staticClass:"ml-auto"},[t("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn_icon",attrs:{title:e.$t("disconnect")}},[t("b-iconstack",{attrs:{"font-scale":"0.8"}},[t("b-icon",{attrs:{stacked:"",icon:"triangle","shift-v":"5"}}),t("b-icon",{attrs:{stacked:"",icon:"dash-lg","shift-v":"-6"}})],1)],1)]):e._e()],1)])})),0),t("button",{directives:[{name:"b-modal",rawName:"v-b-modal.CalendarConnectionModal",modifiers:{CalendarConnectionModal:!0}}],staticClass:"btn_outline d-flex align-items-center fs-sm"},[t("BIcon",{staticClass:"mr-2",attrs:{icon:"plus-lg"}}),t("span",[e._v(e._s(e.$t("addCalendarConnection")))])],1)])]),t("CalendarConnectionModal"),t("ReadCalendarsModal"),t("WriteCalendarModal")],1)},s=[],n=(A(6699),A(8108)),i=function(){var e=this,t=e._self._c;return t("b-modal",{attrs:{id:"CalendarConnectionModal","dialog-class":"full_modal no_static_height","hide-footer":"","hide-header":"",centered:"",size:"lg"},on:{hidden:e.reset},scopedSlots:e._u([{key:"default",fn:function(){return[t("div",{staticClass:"header d-flex justify-content-between align-items-center pl-2"},[t("span",{staticClass:"fs-lg"},[e._v(e._s(e.$t("addCalendarConnection")))]),t("BIcon",{staticClass:"btn_icon btn_icon_md text-muted",attrs:{icon:"x",scale:"0.8"},on:{click:e.reset}})],1),t("div",{staticClass:"p-2 pb-5"},[t("p",{staticClass:"fs-sm text-muted my-4 pb-1 pt-2"},[e._v(e._s(e.$t("addCalendarConnectionDesc")))]),t("div",{staticClass:"d-flex align-items-center"},[t("b-img",{attrs:{src:A(1798),width:"50px"}}),t("div",{staticClass:"ml-3"},[t("div",{staticClass:"mb-1"},[e._v(e._s(e.$t("googleCalendar")))]),t("div",{staticClass:"text-muted fs-sm"},[e._v(e._s(e.$t("googleCalendarDesc")))])]),t("a",{staticClass:"btn_outline ml-auto",attrs:{href:""}},[e._v(e._s(e.$t("connect")))])],1)])]},proxy:!0}])})},l=[],r={methods:{reset(){this.$bvModal.hide("CalendarConnectionModal")}}},c=r,d=A(1001),o=(0,d.Z)(c,i,l,!1,null,null,null),u=o.exports,m=function(){var e=this,t=e._self._c;return t("b-modal",{attrs:{id:"ReadCalendarsModal","dialog-class":"full_modal no_static_height","hide-footer":"","hide-header":"",centered:"",size:"lg"},on:{hidden:e.reset,shown:e.shown},scopedSlots:e._u([{key:"default",fn:function(){return[t("div",{staticClass:"header d-flex justify-content-between align-items-center"},[t("span",{staticClass:"fs-lg"},[e._v(e._s(e.$t("readCalendars")))]),t("BIcon",{staticClass:"btn_icon btn_icon_md text-muted",attrs:{icon:"x",scale:"0.8"},on:{click:e.reset}})],1),t("div",{staticClass:"p-2 pb-5"},[t("p",{staticClass:"fs-sm text-muted my-4 pb-1 pt-2"},[e._v(e._s(e.$t("readCalendarsDesc")))]),t("div",{staticClass:"mt-4"},e._l(e.providers,(function(a,s){return t("div",{key:s,staticClass:"mb-4"},[t("div",{staticClass:"d-flex align-items-center mb-2"},[t("b-img",{attrs:{src:A(7591)(`./${a.image}`),width:"22px"}}),t("span",{staticClass:"text-muted ml-2"},[e._v(e._s(a.userEmail))])],1),e._l(a.calendars,(function(A,a){return t("div",{key:a,staticClass:"py-2"},[t("div",{staticClass:"d-flex align-items-center ml-3"},[t("b-form-checkbox",{model:{value:A.shouldRead,callback:function(t){e.$set(A,"shouldRead",t)},expression:"calendar.shouldRead"}},[e._v(" "+e._s(A.name)+" ")])],1)])}))],2)})),0)]),t("div",{staticClass:"footer d-flex align-items-center justify-content-end"},[t("b-btn",{staticClass:"filter_btn active mx-3",attrs:{size:"sm"},on:{click:e.reset}},[e._v(e._s(e.$t("cancel")))]),t("b-overlay",{staticClass:"d-inline-block",attrs:{show:e.isLoading,rounded:"",opacity:"0.6","spinner-small":"","spinner-variant":"primary"}},[t("b-btn",{attrs:{type:"submit",variant:"primary",disabled:e.isLoading},on:{click:e.save}},[e._v(e._s(e.$t("save")))])],1)],1)]},proxy:!0}])})},H=[],f={data(){return{isLoading:!1,providers:[],calendarImages:{"microsoft.com":"microsoft.png","google.com":"google_calendar.png"}}},computed:{calendars(){return this.$store.state.account.calendars}},methods:{save(){let e=[];for(let t of this.providers)for(let A of t.calendars)e.push({userEmail:t.userEmail,calendarId:A.calendarId,shouldRead:A.shouldRead});this.isLoading=!0,this.$store.dispatch("changeReadCalendars",{read:e}).finally((()=>{this.isLoading=!1,this.$bvModal.hide("ReadCalendarsModal")}))},shown(){let e=[];for(let t of this.$me.integrations){if(!t.scopes.includes("calendar"))continue;let A={userEmail:t.userEmail,userId:t.userId,image:this.calendarImages[t.providerName],calendars:[]};e:for(let e of this.calendars){if(e.userId!=t.userId)continue e;let a=t.calendars.find((t=>t.calendarId==e.calendarId)),s=!!a&&a.shouldRead;A.calendars.push({calendarId:e.calendarId,shouldRead:s,name:e.calendarName})}e.push(A)}this.providers=e},reset(){this.$bvModal.hide("ReadCalendarsModal")}}},C=f,g=(0,d.Z)(C,m,H,!1,null,null,null),v=g.exports,p=function(){var e=this,t=e._self._c;return t("b-modal",{attrs:{id:"WriteCalendarModal","dialog-class":"full_modal no_static_height","hide-footer":"","hide-header":"",centered:"",size:"lg"},on:{hidden:e.reset,shown:e.shown},scopedSlots:e._u([{key:"default",fn:function(){return[t("div",{staticClass:"header d-flex justify-content-between align-items-center"},[t("span",{staticClass:"fs-lg"},[e._v(e._s(e.$t("writeCalendar")))]),t("BIcon",{staticClass:"btn_icon btn_icon_md text-muted",attrs:{icon:"x",scale:"0.8"},on:{click:e.reset}})],1),t("div",{staticClass:"p-2 pb-5"},[t("p",{staticClass:"fs-sm text-muted my-4 pb-1 pt-2"},[e._v(e._s(e.$t("writeCalendarDesc")))]),t("div",{staticClass:"mt-4"},[e.addEventToCalendar?e._e():t("form-select",{attrs:{options:e.writeCalendars,label:e.$t("writeCalendar")},model:{value:e.calendarId,callback:function(t){e.calendarId=t},expression:"calendarId"}},[t("BIcon",{attrs:{slot:"icon_left",icon:"calendar3"},slot:"icon_left"})],1),t("div",{staticClass:"d-flex align-items-center text-muted mt-5"},[t("NotAllowIcon",{staticClass:"mr-2",staticStyle:{fill:"#5e5e5e"},attrs:{width:"1.5rem"}}),t("p",{staticClass:"mb-0"},[e._v(e._s(e.$t("noWriteCalendar")))]),t("div",{staticClass:"ml-auto"},[t("b-checkbox",{attrs:{switch:""},model:{value:e.addEventToCalendar,callback:function(t){e.addEventToCalendar=t},expression:"addEventToCalendar"}})],1)],1)],1)]),t("div",{staticClass:"footer d-flex align-items-center justify-content-end"},[t("b-btn",{staticClass:"filter_btn active mx-3",attrs:{size:"sm"},on:{click:e.reset}},[e._v(e._s(e.$t("cancel")))]),t("b-overlay",{staticClass:"d-inline-block",attrs:{show:e.isLoading,rounded:"",opacity:"0.6","spinner-small":"","spinner-variant":"primary"}},[t("b-btn",{attrs:{type:"submit",variant:"primary",disabled:e.isLoading},on:{click:e.save}},[e._v(e._s(e.$t("save")))])],1)],1)]},proxy:!0}])})},h=[],w=A(965),b=A(5476),x={components:{FormSelect:w.Z,NotAllowIcon:b.Z},data(){return{isLoading:!1,calendarId:"",addEventToCalendar:!1,calendarImages:{"microsoft.com":"microsoft.png","google.com":"google_calendar.png"}}},computed:{calendars(){return this.$store.state.account.calendars},selectedCalendar(){return this.calendars.find((e=>e.calendarId==this.calendarId))},writeCalendars(){let e=this.calendars.filter((e=>e.hasWritePermission));return e.map((e=>({value:e.calendarId,text:e.calendarName})))},writeCalendar(){let e=null;for(let t of this.$me.integrations)if(t.scopes.includes("calendar")&&t.calendars.length)for(let A of t.calendars)if(A.shouldWrite){e=A;break}return e}},methods:{save(){let e={write:[]};!this.addEventToCalendar&&this.selectedCalendar&&(e.write=[{calendarId:this.selectedCalendar.calendarId,userEmail:this.selectedCalendar.userEmail}]),this.isLoading=!0,this.$store.dispatch("changeWriteCalendar",e).finally((()=>{this.isLoading=!1,this.$bvModal.hide("WriteCalendarModal")}))},shown(){this.calendarId=this.writeCalendar?this.writeCalendar.calendarId:""},reset(){this.$bvModal.hide("WriteCalendarModal")}}},D=x,I=(0,d.Z)(D,p,h,!1,null,null,null),y=I.exports,B={components:{Account:n.Z,CalendarConnectionModal:u,ReadCalendarsModal:v,WriteCalendarModal:y},data(){return{calendarImages:{"microsoft.com":"microsoft.png","google.com":"google_calendar.png"},calendarNames:{"microsoft.com":this.$t("outlookCalendar"),"google.com":this.$t("googleCalendar")}}},mounted(){this.calendarsLoading=!0,this.$store.dispatch("getCalendars").finally((()=>{this.calendarsLoading=!1}))},computed:{calendars(){return this.$store.state.account.calendars},readCalendars(){let e=[];for(let t of this.$me.integrations){if(!t.calendars||!t.calendars.length||!t.scopes.includes("calendar"))continue;let A=t.calendars.filter((e=>e.shouldRead));if(!A.length)continue;let a={email:t.userEmail,image:this.calendarImages[t.providerName],calendars:[]};for(let e of A){let t=this.calendars.find((t=>t.calendarId==e.calendarId));t&&a.calendars.push({calendarId:t.calendarId,name:t.calendarName,color:t.color||"#000000de"})}a.calendars.length&&e.push(a)}return e},writeCalendar(){let e=[];for(let t of this.$me.integrations){if(!t.calendars||!t.calendars.length||!t.scopes.includes("calendar"))continue;let A=t.calendars.filter((e=>e.shouldWrite));if(!A.length)continue;let a={email:t.userEmail,image:this.calendarImages[t.providerName],calendars:[]};for(let e of A){let A=this.calendars.find((A=>A.calendarId==e.calendarId&&A.userId==t.userId));A&&a.calendars.push({calendarId:A.calendarId,name:A.calendarName,color:A.color})}a.calendars.length&&e.push(a)}return e},connections(){let e=[];for(let t of this.calendars)t.isDefaultCalendar&&e.push({name:this.calendarNames[t.providerName],image:this.calendarImages[t.providerName],email:t.userEmail,hasDisconnect:!this.isAuthProviderCalendar(t.userId)});return e}},methods:{isAuthProviderCalendar(e){return!!this.$me.authProviders.find((t=>t.userId==e))}}},_=B,P=(0,d.Z)(_,a,s,!1,null,null,null),k=P.exports},7591:function(e,t,A){var a={"./cover_photo_one_tooltip.jpg":898,"./google_calendar.png":1798,"./google_contacts.png":8932,"./google_meet.svg":4056,"./linkedin.png":4333,"./logo.png":4676,"./microsoft.png":7582,"./microsoft_teams.svg":6914,"./twitter.png":2638,"./zoom.png":1565};function s(e){var t=n(e);return A(t)}function n(e){if(!A.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=n,e.exports=s,s.id=7591},4056:function(e,t,A){"use strict";e.exports=A.p+"img/google_meet.f7a2238f.svg"},6914:function(e,t,A){"use strict";e.exports=A.p+"img/microsoft_teams.3bf4d50c.svg"},898:function(e,t,A){"use strict";e.exports=A.p+"img/cover_photo_one_tooltip.fa5e74ef.jpg"},1798:function(e,t,A){"use strict";e.exports=A.p+"img/google_calendar.d7dad8ae.png"},8932:function(e){"use strict";e.exports="data:image/png;base64,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"},4333:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAABKNAAASjQEphQ1dAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAvFQTFRF////AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3dPNe8AAAAPp0Uk5TAAECAwQFBgcICQoLDA0ODxAREhMU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"},7582:function(e,t,A){"use strict";e.exports=A.p+"img/microsoft.208a2d8f.png"},2638:function(e,t,A){"use strict";e.exports=A.p+"img/twitter.58d9a117.png"},1565:function(e,t,A){"use strict";e.exports=A.p+"img/zoom.c66d5376.png"}}]);