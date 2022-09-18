"use strict";(self["webpackChunkmawed"]=self["webpackChunkmawed"]||[]).push([[856],{8108:function(t,e,a){a.d(e,{Z:function(){return d}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"account mt-5 position-relative"},[e("b-container",[e("div",{staticClass:"header mt-4"},[e("div",{staticClass:"h3 mb-0"},[t._v(t._s(t.$t("accountSettings")))])]),e("div",{staticClass:"my-4 py-2"},[e("b-nav",{staticClass:"custom_nav",attrs:{fill:""}},t._l(t.tabs,(function(a){return e("b-nav-item",{key:a.value,attrs:{active:t.isActive(a),to:a.to}},[t._v(t._s(a.title))])})),1)],1),e("b-row",[e("b-col",{attrs:{cols:"12",md:"9"}},[t._t("default")],2)],1)],1)],1)},s=[],r={props:{activeTab:{type:String,default:"general"}},data(){return{tabs:[{title:this.$t("general"),value:"general",isActive:!0,to:"/account"},{title:this.$t("calendars"),value:"calendars",isActive:!1,to:"/account/calendars"},{title:this.$t("integrations"),value:"integrations",isActive:!1,to:"/account/integrations"},{title:this.$t("availability"),value:"availability",isActive:!1,to:"/account/availability"},{title:this.$t("contacts"),value:"contacts",isActive:!1,to:"/account/contacts"}]}},methods:{isActive(t){return t.value==this.activeTab}}},l=r,n=a(1001),o=(0,n.Z)(l,i,s,!1,null,null,null),d=o.exports},2106:function(t,e,a){a.d(e,{Z:function(){return d}});var i=function(){var t=this,e=t._self._c;return e("b-list-group-item",{staticClass:"d-flex align-items-center justify-content-between user-select-none",attrs:{button:""},on:{click:t.clicked}},[e("div",{staticClass:"available_date d-flex align-items-center"},[t.intervals.length?e("BIcon",{attrs:{icon:"calendar-check",width:"1rem",scale:"1.5",variant:"success"}}):e("BIcon",{staticClass:"text-muted",attrs:{icon:"calendar-x",width:"1rem",scale:"1.5"}}),e("span",{staticClass:"ml-3"},[t._v(t._s(t.displayDate))])],1),e("div",{staticClass:"available_time d-flex align-items-center text-muted"},[t.isRepeats&&t.intervals.length?e("BIcon",{staticClass:"text-muted mx-2",attrs:{icon:"arrow-repeat",width:"1rem",scale:"1.2"}}):t._e(),e("div",{staticClass:"text-right"},t._l(t.intervals,(function(a,i){return e("div",{key:i},[t._v(" "+t._s(t.intervalStr(a))+" ")])})),0),e("BIcon",{staticClass:"ml-3",attrs:{icon:""+(t.$isRtl?"chevron-left":"chevron-right"),width:"1rem"}})],1)])},s=[],r={props:{date:{},dateFormat:{type:String,default:""},availableDates:{type:Array,required:!0}},data(){return{isRepeats:!1}},computed:{displayDate(){return this.dateFormat?this.$moment(this.date).format(this.dateFormat):this.$isRtl?"ال"+this.$moment(this.date).locale("ar").format("ddd, D MMM"):this.$moment(this.date).format("ddd, MMM D")},intervals(){let t=[];for(let e of this.availableDates){let{duration:a,dates:i,rruleSet:s}=e,r=s.toString();for(let e of i)if(e=this.$moment(e).utc(),e.isSame(this.date,"date")){let i=e.hour()+e.minute()/60,s=i+a/60;t.push({start:i,end:s}),this.isRepeats=-1!=r.indexOf("BYDAY")}}return t}},methods:{intervalStr({start:t,end:e}){let a=this.$moment().set(this.hourAndMinute(t)).format("h:mm a"),i=this.$moment().set(this.hourAndMinute(e)).format("h:mm a");return`${a} - ${i}`},hourAndMinute(t){let e=Math.floor(t),a=Math.floor(60*(t-e));return{hour:e,minute:a}},clicked(){this.$emit("click",{intervals:this.intervals,date:this.date})}}},l=r,n=a(1001),o=(0,n.Z)(l,i,s,!1,null,null,null),d=o.exports},965:function(t,e,a){a.d(e,{Z:function(){return d}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown_select_wrapper",class:{active:t.isFoucsed||t.isShown,required:t.required,icon_left:t.$slots.icon_left,is_invalid:t.is_invalid}},[e("div",{staticClass:"icon_left"},[t._t("icon_left",null,null,{active:t.isFoucsed||t.isShown})],2),e("div",{staticClass:"dropdown_select_control"},[e("span",{staticClass:"dropdown_select_label"},[t._v(t._s(t.label))]),t.$slots.default?t._e():e("b-dropdown",{staticClass:"dropdown_select",attrs:{block:"","toggle-class":"dropdown_select_btn d-flex justify-content-between align-items-center pl-0 ","menu-class":"w-100 p-0 shadow-lg border-0",variant:"text"},on:{shown:t.shown,hidden:t.hidden},scopedSlots:t._u([{key:"button-content",fn:function(){return[t._t("label",(function(){return[t.selectedOption?e("span",[t._v(t._s(t.selectedOption.text))]):t._e()]}))]},proxy:!0}],null,!0)},t._l(t.options,(function(a,i){return e("b-dropdown-item",{key:i,attrs:{"link-class":"p-3"},on:{click:function(e){return t.select(a)}}},[t._v(" "+t._s(a.text)+" ")])})),1),t._t("default")],2)])},s=[],r={props:{label:{type:String},value:{type:[String,Number]},required:{type:Boolean,default:!1},options:{type:Array,default:()=>[]},is_invalid:{type:Boolean,default:!1}},data(){return{isFoucsed:!1,isShown:!1}},mounted(){let t=document.querySelector(".dropdown_select_btn");t&&(t.addEventListener("focus",(()=>{this.isFoucsed=!0})),t.addEventListener("blur",(()=>{this.isFoucsed=!1})))},computed:{val:{get(){return this.value},set(t){this.$emit("input",t)}},selectedOption(){return this.options.find((t=>t.value==this.value))}},methods:{shown(){this.isShown=!0},hidden(){this.isShown=!1},select(t){this.val=t.value,this.$emit("change",t.value),this.$emit("item-selected",t)}}},l=r,n=a(1001),o=(0,n.Z)(l,i,s,!1,null,null,null),d=o.exports},9290:function(t,e,a){a.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("b-modal",{attrs:{id:"AvailabilityModal","dialog-class":"full_modal no_static_height","hide-footer":"","hide-header":"",centered:"",size:"lg"},on:{hidden:t.reset,shown:t.shown},scopedSlots:t._u([{key:"default",fn:function(){return[e("div",{staticClass:"header d-flex justify-content-between align-items-center"},[e("div",{staticClass:"fs-lg"},[e("span",[t._v(t._s(t.$t("availability")))]),t._v("  "),e("span",{staticClass:"text-muted"},[t._v(t._s(t.displayDate))])]),e("BIcon",{staticClass:"btn_icon btn_icon_md text-muted",attrs:{icon:"x",scale:"0.8"},on:{click:t.reset}})],1),e("b-form",{on:{submit:function(e){return e.preventDefault(),t.save.apply(null,arguments)}}},[e("div",{staticClass:"body mb-3 my-5"},[0==t.intervals.length?e("div",{staticClass:"p-4 text-center border rounded-lg text-muted"},[t._v(t._s(t.$t("noAvailability")))]):t._e(),t._l(t.intervals,(function(a,i){return e("div",{key:i,staticClass:"mb-4"},[e("div",{staticClass:"d-flex align-items-center"},[e("form-select",{staticClass:"mr-4",attrs:{label:t.$t("start"),options:t.intervalsStartOptions,is_invalid:!!t.error(i)},on:{change:e=>t.timeChanged(e,i)},model:{value:a.start,callback:function(e){t.$set(a,"start",e)},expression:"interval.start"}}),e("form-select",{attrs:{label:t.$t("end"),options:t.intervalsEndOptions,is_invalid:!!t.error(i)},on:{change:e=>t.timeChanged(e,i)},model:{value:a.end,callback:function(e){t.$set(a,"end",e)},expression:"interval.end"}}),e("div",{staticClass:"w-25 position-relative",staticStyle:{top:"12px"}},[e("span",{staticClass:"btn_icon btn_icon_md mx-auto",on:{click:function(e){return t.removeIntreval(i)}}},[e("BIcon",{staticClass:"text-muted",attrs:{icon:"trash",scale:"1.4"}})],1)])],1),t.error(i)?e("span",{staticClass:"fs-xs text-danger"},[t._v(t._s(t.error(i).msg))]):t._e()])})),e("div",{staticClass:"d-flex align-items-center my-4"},[e("b-btn",{staticClass:"fs-sm font-weight-500",attrs:{variant:"outline-primary"},on:{click:t.addInterval}},[t._v(t._s(t.$t("addNewInterval")))]),e("b-btn",{staticClass:"fs-sm font-weight-500 ml-3",attrs:{variant:"outline-danger",disabled:0==t.intervals.length},on:{click:t.removeIntrevals}},[t._v(t._s(t.$t("removeAll")))])],1),t.noRepeat?t._e():e("form-select",{attrs:{label:t.$t("repeats"),options:t.repeatsOptions,required:""},model:{value:t.repeats,callback:function(e){t.repeats=e},expression:"repeats"}})],2),e("div",{staticClass:"footer d-flex align-items-center justify-content-end"},[e("b-btn",{staticClass:"filter_btn active mx-3",attrs:{size:"sm"},on:{click:t.reset}},[t._v(t._s(t.$t("cancel")))]),e("b-btn",{attrs:{type:"submit",variant:"primary"}},[t._v(t._s(t.$t("apply")))])],1)])]},proxy:!0}])})},s=[],r=(a(6699),a(9868)),l=a(965),n=(a(6289),{components:{FormInput:r.Z,FormSelect:l.Z},props:{duration:{type:[Number,String],required:!0},dateFormat:{type:String,default:""},noRepeat:{type:Boolean,default:!1}},data(){return{date:null,intervals:[{start:4,end:6.5},{start:7,end:17},{start:.5,end:3},{start:9,end:12}],repeats:"only",errors:[]}},computed:{displayDate(){return this.dateFormat?this.date.clone().format(this.dateFormat):this.$isRtl?"ال"+this.date.clone().format("ddd, D MMM"):this.date.clone().format("ddd, MMM D")},intervalsStartOptions(){return this.$store.state.invites.intervalsStartOptions},intervalsEndOptions(){return this.$store.state.invites.intervalsEndOptions},repeatsOptions(){let t=this.date.clone().startOf("date"),e=[{text:`${t.format("MMM D")} ${this.$t("only")}`,value:"only"},{text:`All ${t.format("dddd")}s`,value:"all"}];return this.$isRtl&&(e[1].text=`${this.$t("all")} ${t.format("dddd")}`),[5,6].includes(t.weekday())||e.push({text:this.$t("allWeekdays"),value:"weekdays"}),e}},methods:{addInterval(){this.intervals.push({start:9,end:17})},removeIntreval(t){this.removeError(t),this.intervals.splice(t,1)},removeIntrevals(){this.intervals=[],this.errors=[]},error(t){return this.errors.find((e=>e.index==t))},removeError(t){this.errors=this.errors.filter((e=>e.index!=t))},setError(t,e){this.removeError(t),this.errors.push({index:t,msg:e})},validateInterval(t){let{start:e,end:a}=this.intervals[t];if(e>=a)return this.setError(t,this.$t("startTimeMustBeforeEndTime")),!1;let i=60*(a-e);return i<+this.duration?(this.setError(t,this.$t("intervalMustAtLeastDuration")),!1):0==this.errors.length},timeChanged(t,e){this.removeError(e),this.validateInterval(e)},validate(){let t=!0;for(let e=0;e<this.intervals.length;e++)if(!this.validateInterval(e)){t=!1;break}return t},save(){if(!this.validate())return;let t=[],e=[];for(let a=0;a<this.intervals.length;a++){if(e.includes(a))continue;let i=this.intervals[a],s=this.intervals.filter((({start:t,end:s},r)=>r!=a&&!e.includes(r)&&((t>i.start&&t<i.end||i.start>t&&i.start<s||t==i.start||s==i.end)&&(e.push(r),!0))));s.length>0&&(i={start:Math.min(...s.map((({start:t})=>t)),i.start),end:Math.max(...s.map((({end:t})=>t)),i.end)}),t.push(i),e.push(a)}this.$emit("submit",{date:this.date,intervals:t,repeats:this.noRepeat?"all":this.repeats}),this.$bvModal.hide("AvailabilityModal")},show({date:t,intervals:e}){this.date=t,this.intervals=e,this.repeats="only",this.$bvModal.show("AvailabilityModal")},shown(){},reset(){this.$bvModal.hide("AvailabilityModal"),setTimeout((()=>{this.removeIntrevals()}),300)}}}),o=n,d=a(1001),u=(0,d.Z)(o,i,s,!1,null,null,null),c=u.exports},6465:function(t,e,a){a.r(e),a.d(e,{default:function(){return v}});var i=function(){var t=this,e=t._self._c;return e("account",{attrs:{activeTab:"availability"}},[e("section",[e("div",{staticClass:"field_title pt-1 mb-1 d-flex align-items-center"},[e("BIcon",{staticClass:"mr-2",attrs:{icon:"arrow-repeat"}}),e("div",{staticClass:"title font-weight-500"},[t._v(t._s(t.$t("defaultAvailability")))])],1),e("p",{staticClass:"fs-sm text-muted"},[t._v(t._s(t.$t("defaultAvailabilityDesc")))]),e("div",{staticClass:"mt-3"},[e("div",{staticClass:"mb-5"},[e("b-list-group",t._l(t.range,(function(a,i){return e("AvailableItem",{key:i,attrs:{date:a,availableDates:t.availableDates,dateFormat:"dddd"},on:{click:t.openAvailabilityModal}})})),1)],1)])]),e("AvailabilityModal",{ref:"availabilityModal",attrs:{duration:30,dateFormat:"dddd",noRepeat:""},on:{submit:t.availableDateChanged}})],1)},s=[],r=(a(6699),a(8108)),l=a(2106),n=a(9290),o=a(6289),d={components:{Account:r.Z,AvailableItem:l.Z,AvailabilityModal:n.Z},data(){return{availability:[]}},mounted(){this.availability=this.$me.defaultWeekAvailability.map((t=>{let{rrule:e,duration:a}=t;return e=e.replace(/DTSTART:YYYYMMDDTHHmmssZ/g,"DTSTART:"+this.$moment().utc().startOf("week").startOf("date").locale("en").format("YYYYMMDDTHHmmss")+"Z"),e=e.replace(/UNTIL=YYYYMMDDTHHmmssZ/g,"UNTIL="+this.$moment().utc().endOf("week").startOf("date").locale("en").format("YYYYMMDDTHHmmss")+"Z"),{duration:a,rrule:e}})),this.endAppLoading()},watch:{"$me.defaultWeekAvailability"(t){this.availability=t.map((t=>{let{rrule:e,duration:a}=t;return e=e.replace(/DTSTART:YYYYMMDDTHHmmssZ/g,"DTSTART:"+this.$moment().utc().startOf("week").startOf("date").locale("en").format("YYYYMMDDTHHmmss")+"Z"),e=e.replace(/UNTIL=YYYYMMDDTHHmmssZ/g,"UNTIL="+this.$moment().utc().endOf("week").startOf("date").locale("en").format("YYYYMMDDTHHmmss")+"Z"),{duration:a,rrule:e}}))}},computed:{FDOL(){return this.$moment().utc().startOf("week").startOf("date")},EDOL(){return this.$moment().utc().endOf("week").startOf("date")},range(){let t=[],e=this.FDOL.clone();while(e<=this.EDOL)t.push(e.clone()),e.add(1,"day");return t},availableDates(){return this.availability.map((t=>{let e=(0,o.SA)(t.rrule);return{duration:t.duration,dates:e.between(this.FDOL.toDate(),this.EDOL.clone().add(1,"d").toDate()),rruleSet:e}}))}},methods:{openAvailabilityModal(t){this.$refs.availabilityModal.show(t)},availableDateChanged(t){let e=[],a=t=>!!e.find((e=>e.duration==t.duration&&e.rrule==t.rrule)),{date:i,intervals:s}=t;for(let n of s){let{start:t,end:a}=n,s=60*(a-t),{hour:r,minute:l}=this.hourAndMinute(t),d=new o.pF;d.rrule(new o.Ci({freq:o.Ci.WEEKLY,dtstart:this.FDOL.toDate(),until:this.EDOL.clone().add(1,"d").toDate(),byweekday:[i.clone().weekday()],byhour:[r],byminute:[l]})),e.push({duration:s,rrule:d.toString()})}if(0==this.availability.length)return void(this.availability=e);let r=i.clone().locale("en").format("dd").toUpperCase();for(let n of this.availability){let{duration:t,rrule:i}=n,s=this.weekdaysFromRRuleString(i),l=1==s.length?"all":"weekdays";if("all"==l){if(s[0]!=r){let s={duration:t,rrule:i};a(s)||e.push(s)}}else if("weekdays"==l){if(s.includes(r)){let t=new RegExp(`,${r}|${r},`,"g");i=i.replace(t,"")}let l={duration:t,rrule:i};a(l)||e.push(l)}}this.availability=e;let l=e.map((t=>{let{rrule:e,duration:a}=t;return e=e.replace(/\d+T\d+Z/g,"YYYYMMDDTHHmmssZ"),{duration:a,rrule:e}}));this.$store.dispatch("changeDefaultAvailability",{defaultWeekAvailability:l})},hourAndMinute(t){let e=Math.floor(t),a=Math.round(60*(t-e));return{hour:e,minute:a}},weekdaysFromRRuleString(t){if(-1==t.indexOf("BYDAY"))return[];let e=t.match(/BYDAY=([^;]+)/);return e[1].split(",")},exDatesFromRRuleString(t){if(-1==t.indexOf("EXDATE"))return[];let e=t.split("EXDATE:")[1];return e=e.split(","),e}}},u=d,c=a(1001),h=(0,c.Z)(u,i,s,!1,null,null,null),v=h.exports}}]);