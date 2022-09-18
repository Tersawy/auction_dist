"use strict";(self["webpackChunkmawed"]=self["webpackChunkmawed"]||[]).push([[117],{2106:function(t,e,s){s.d(e,{Z:function(){return d}});var a=function(){var t=this,e=t._self._c;return e("b-list-group-item",{staticClass:"d-flex align-items-center justify-content-between user-select-none",attrs:{button:""},on:{click:t.clicked}},[e("div",{staticClass:"available_date d-flex align-items-center"},[t.intervals.length?e("BIcon",{attrs:{icon:"calendar-check",width:"1rem",scale:"1.5",variant:"success"}}):e("BIcon",{staticClass:"text-muted",attrs:{icon:"calendar-x",width:"1rem",scale:"1.5"}}),e("span",{staticClass:"ml-3"},[t._v(t._s(t.displayDate))])],1),e("div",{staticClass:"available_time d-flex align-items-center text-muted"},[t.isRepeats&&t.intervals.length?e("BIcon",{staticClass:"text-muted mx-2",attrs:{icon:"arrow-repeat",width:"1rem",scale:"1.2"}}):t._e(),e("div",{staticClass:"text-right"},t._l(t.intervals,(function(s,a){return e("div",{key:a},[t._v(" "+t._s(t.intervalStr(s))+" ")])})),0),e("BIcon",{staticClass:"ml-3",attrs:{icon:""+(t.$isRtl?"chevron-left":"chevron-right"),width:"1rem"}})],1)])},i=[],n={props:{date:{},dateFormat:{type:String,default:""},availableDates:{type:Array,required:!0}},data(){return{isRepeats:!1}},computed:{displayDate(){return this.dateFormat?this.$moment(this.date).format(this.dateFormat):this.$isRtl?"ال"+this.$moment(this.date).locale("ar").format("ddd, D MMM"):this.$moment(this.date).format("ddd, MMM D")},intervals(){let t=[];for(let e of this.availableDates){let{duration:s,dates:a,rruleSet:i}=e,n=i.toString();for(let e of a)if(e=this.$moment(e).utc(),e.isSame(this.date,"date")){let a=e.hour()+e.minute()/60,i=a+s/60;t.push({start:a,end:i}),this.isRepeats=-1!=n.indexOf("BYDAY")}}return t}},methods:{intervalStr({start:t,end:e}){let s=this.$moment().set(this.hourAndMinute(t)).format("h:mm a"),a=this.$moment().set(this.hourAndMinute(e)).format("h:mm a");return`${s} - ${a}`},hourAndMinute(t){let e=Math.floor(t),s=Math.floor(60*(t-e));return{hour:e,minute:s}},clicked(){this.$emit("click",{intervals:this.intervals,date:this.date})}}},r=n,l=s(1001),o=(0,l.Z)(r,a,i,!1,null,null,null),d=o.exports},965:function(t,e,s){s.d(e,{Z:function(){return d}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown_select_wrapper",class:{active:t.isFoucsed||t.isShown,required:t.required,icon_left:t.$slots.icon_left,is_invalid:t.is_invalid}},[e("div",{staticClass:"icon_left"},[t._t("icon_left",null,null,{active:t.isFoucsed||t.isShown})],2),e("div",{staticClass:"dropdown_select_control"},[e("span",{staticClass:"dropdown_select_label"},[t._v(t._s(t.label))]),t.$slots.default?t._e():e("b-dropdown",{staticClass:"dropdown_select",attrs:{block:"","toggle-class":"dropdown_select_btn d-flex justify-content-between align-items-center pl-0 ","menu-class":"w-100 p-0 shadow-lg border-0",variant:"text"},on:{shown:t.shown,hidden:t.hidden},scopedSlots:t._u([{key:"button-content",fn:function(){return[t._t("label",(function(){return[t.selectedOption?e("span",[t._v(t._s(t.selectedOption.text))]):t._e()]}))]},proxy:!0}],null,!0)},t._l(t.options,(function(s,a){return e("b-dropdown-item",{key:a,attrs:{"link-class":"p-3"},on:{click:function(e){return t.select(s)}}},[t._v(" "+t._s(s.text)+" ")])})),1),t._t("default")],2)])},i=[],n={props:{label:{type:String},value:{type:[String,Number]},required:{type:Boolean,default:!1},options:{type:Array,default:()=>[]},is_invalid:{type:Boolean,default:!1}},data(){return{isFoucsed:!1,isShown:!1}},mounted(){let t=document.querySelector(".dropdown_select_btn");t&&(t.addEventListener("focus",(()=>{this.isFoucsed=!0})),t.addEventListener("blur",(()=>{this.isFoucsed=!1})))},computed:{val:{get(){return this.value},set(t){this.$emit("input",t)}},selectedOption(){return this.options.find((t=>t.value==this.value))}},methods:{shown(){this.isShown=!0},hidden(){this.isShown=!1},select(t){this.val=t.value,this.$emit("change",t.value),this.$emit("item-selected",t)}}},r=n,l=s(1001),o=(0,l.Z)(r,a,i,!1,null,null,null),d=o.exports},9290:function(t,e,s){s.d(e,{Z:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("b-modal",{attrs:{id:"AvailabilityModal","dialog-class":"full_modal no_static_height","hide-footer":"","hide-header":"",centered:"",size:"lg"},on:{hidden:t.reset,shown:t.shown},scopedSlots:t._u([{key:"default",fn:function(){return[e("div",{staticClass:"header d-flex justify-content-between align-items-center"},[e("div",{staticClass:"fs-lg"},[e("span",[t._v(t._s(t.$t("availability")))]),t._v("  "),e("span",{staticClass:"text-muted"},[t._v(t._s(t.displayDate))])]),e("BIcon",{staticClass:"btn_icon btn_icon_md text-muted",attrs:{icon:"x",scale:"0.8"},on:{click:t.reset}})],1),e("b-form",{on:{submit:function(e){return e.preventDefault(),t.save.apply(null,arguments)}}},[e("div",{staticClass:"body mb-3 my-5"},[0==t.intervals.length?e("div",{staticClass:"p-4 text-center border rounded-lg text-muted"},[t._v(t._s(t.$t("noAvailability")))]):t._e(),t._l(t.intervals,(function(s,a){return e("div",{key:a,staticClass:"mb-4"},[e("div",{staticClass:"d-flex align-items-center"},[e("form-select",{staticClass:"mr-4",attrs:{label:t.$t("start"),options:t.intervalsStartOptions,is_invalid:!!t.error(a)},on:{change:e=>t.timeChanged(e,a)},model:{value:s.start,callback:function(e){t.$set(s,"start",e)},expression:"interval.start"}}),e("form-select",{attrs:{label:t.$t("end"),options:t.intervalsEndOptions,is_invalid:!!t.error(a)},on:{change:e=>t.timeChanged(e,a)},model:{value:s.end,callback:function(e){t.$set(s,"end",e)},expression:"interval.end"}}),e("div",{staticClass:"w-25 position-relative",staticStyle:{top:"12px"}},[e("span",{staticClass:"btn_icon btn_icon_md mx-auto",on:{click:function(e){return t.removeIntreval(a)}}},[e("BIcon",{staticClass:"text-muted",attrs:{icon:"trash",scale:"1.4"}})],1)])],1),t.error(a)?e("span",{staticClass:"fs-xs text-danger"},[t._v(t._s(t.error(a).msg))]):t._e()])})),e("div",{staticClass:"d-flex align-items-center my-4"},[e("b-btn",{staticClass:"fs-sm font-weight-500",attrs:{variant:"outline-primary"},on:{click:t.addInterval}},[t._v(t._s(t.$t("addNewInterval")))]),e("b-btn",{staticClass:"fs-sm font-weight-500 ml-3",attrs:{variant:"outline-danger",disabled:0==t.intervals.length},on:{click:t.removeIntrevals}},[t._v(t._s(t.$t("removeAll")))])],1),t.noRepeat?t._e():e("form-select",{attrs:{label:t.$t("repeats"),options:t.repeatsOptions,required:""},model:{value:t.repeats,callback:function(e){t.repeats=e},expression:"repeats"}})],2),e("div",{staticClass:"footer d-flex align-items-center justify-content-end"},[e("b-btn",{staticClass:"filter_btn active mx-3",attrs:{size:"sm"},on:{click:t.reset}},[t._v(t._s(t.$t("cancel")))]),e("b-btn",{attrs:{type:"submit",variant:"primary"}},[t._v(t._s(t.$t("apply")))])],1)])]},proxy:!0}])})},i=[],n=(s(6699),s(5294)),r=s(965),l=(s(6289),{components:{FormInput:n.Z,FormSelect:r.Z},props:{duration:{type:[Number,String],required:!0},dateFormat:{type:String,default:""},noRepeat:{type:Boolean,default:!1}},data(){return{date:null,intervals:[{start:4,end:6.5},{start:7,end:17},{start:.5,end:3},{start:9,end:12}],repeats:"only",errors:[]}},computed:{displayDate(){return this.dateFormat?this.date.clone().format(this.dateFormat):this.$isRtl?"ال"+this.date.clone().format("ddd, D MMM"):this.date.clone().format("ddd, MMM D")},intervalsStartOptions(){return this.$store.state.invites.intervalsStartOptions},intervalsEndOptions(){return this.$store.state.invites.intervalsEndOptions},repeatsOptions(){let t=this.date.clone().startOf("date"),e=[{text:`${t.format("MMM D")} ${this.$t("only")}`,value:"only"},{text:`All ${t.format("dddd")}s`,value:"all"}];return this.$isRtl&&(e[1].text=`${this.$t("all")} ${t.format("dddd")}`),[5,6].includes(t.weekday())||e.push({text:this.$t("allWeekdays"),value:"weekdays"}),e}},methods:{addInterval(){this.intervals.push({start:9,end:17})},removeIntreval(t){this.removeError(t),this.intervals.splice(t,1)},removeIntrevals(){this.intervals=[],this.errors=[]},error(t){return this.errors.find((e=>e.index==t))},removeError(t){this.errors=this.errors.filter((e=>e.index!=t))},setError(t,e){this.removeError(t),this.errors.push({index:t,msg:e})},validateInterval(t){let{start:e,end:s}=this.intervals[t];if(e>=s)return this.setError(t,this.$t("startTimeMustBeforeEndTime")),!1;let a=60*(s-e);return a<+this.duration?(this.setError(t,this.$t("intervalMustAtLeastDuration")),!1):0==this.errors.length},timeChanged(t,e){this.removeError(e),this.validateInterval(e)},validate(){let t=!0;for(let e=0;e<this.intervals.length;e++)if(!this.validateInterval(e)){t=!1;break}return t},save(){if(!this.validate())return;let t=[],e=[];for(let s=0;s<this.intervals.length;s++){if(e.includes(s))continue;let a=this.intervals[s],i=this.intervals.filter((({start:t,end:i},n)=>n!=s&&!e.includes(n)&&((t>a.start&&t<a.end||a.start>t&&a.start<i||t==a.start||i==a.end)&&(e.push(n),!0))));i.length>0&&(a={start:Math.min(...i.map((({start:t})=>t)),a.start),end:Math.max(...i.map((({end:t})=>t)),a.end)}),t.push(a),e.push(s)}this.$emit("submit",{date:this.date,intervals:t,repeats:this.noRepeat?"all":this.repeats}),this.$bvModal.hide("AvailabilityModal")},show({date:t,intervals:e}){this.date=t,this.intervals=e,this.repeats="only",this.$bvModal.show("AvailabilityModal")},shown(){},reset(){this.$bvModal.hide("AvailabilityModal"),setTimeout((()=>{this.removeIntrevals()}),300)}}}),o=l,d=s(1001),c=(0,d.Z)(o,a,i,!1,null,null,null),u=c.exports}}]);
//# sourceMappingURL=117.3f442174.js.map