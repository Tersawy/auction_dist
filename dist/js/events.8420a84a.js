"use strict";(self["webpackChunkmawed"]=self["webpackChunkmawed"]||[]).push([[136],{6939:function(t,e,a){a.d(e,{Z:function(){return c}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex align-items-center justify-content-end"},[e("div",{staticClass:"mx-2 fs-sm"},[t._v(t._s(t.paginateFrom)+"-"+t._s(t.paginateTo)+" of "+t._s(t.total))]),e("b-pagination",{staticClass:"custom_pagination",attrs:{"hide-goto-end-buttons":"","total-rows":t.total,"per-page":t.perPage},scopedSlots:t._u([{key:"prev-text",fn:function(){return[t._v(" < ")]},proxy:!0},{key:"next-text",fn:function(){return[t._v(" > ")]},proxy:!0}]),model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)},s=[],i={props:{currentPage:{type:Number,default:1},total:{type:Number,default:1},perPage:{type:Number,default:1}},computed:{page:{get(){return this.currentPage},set(t){this.$emit("update:currentPage",t)}},paginateTo(){let t=this.currentPage*this.perPage;return t>this.total&&(t=this.total),t},paginateFrom(){return(this.currentPage-1)*this.perPage+1}}},r=i,l=a(1001),o=(0,l.Z)(r,n,s,!1,null,null,null),c=o.exports},7712:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"events"},[e("b-container",[e("div",{staticClass:"header mt-4"},[e("div",{staticClass:"h3 font-weight-normal"},[t._v(t._s(t.$t("myEvents")))])]),e("b-overlay",{attrs:{show:t.isLoading,variant:"white","spinner-variant":"primary","no-fade":"",opacity:"1"}},[e("div",{staticClass:"d-flex mt-5"},[e("b-dropdown",{staticClass:"d-flex align-items-center",attrs:{right:"","menu-class":"p-0 shadow border-0","toggle-class":`filter_btn ${!!t.filters.time.value&&"active"}`},scopedSlots:t._u([{key:"button-content",fn:function(){return[t.filters.time.value?e("b-icon",{staticClass:"mr-2",attrs:{icon:"check2",variant:"primary",scale:"1.2"}}):e("b-icon",{staticClass:"mr-2",attrs:{icon:"calendar2-week",variant:"primary"}}),e("div",{staticClass:"mx-2"},[t._v(t._s(t.filters.time.text))])]},proxy:!0}])},t._l(t.timesOptions,(function(a){return e("b-dropdown-item",{key:a.value,attrs:{"link-class":`p-3 ${t.filters.time.value==a.value&&"active"}`},on:{click:function(e){t.filters.time=a}}},[t._v(" "+t._s(a.text)+" ")])})),1),e("b-dropdown",{staticClass:"mx-3 d-flex align-items-center",attrs:{right:"","menu-class":"p-0 shadow border-0","toggle-class":`filter_btn ${!!t.filters.link.value&&"active"}`},scopedSlots:t._u([{key:"button-content",fn:function(){return[t.filters.link.value?e("b-icon",{staticClass:"mr-2",attrs:{icon:"check2",variant:"primary",scale:"1.2"}}):e("b-icon",{staticClass:"mr-2",attrs:{icon:"files",variant:"primary"}}),e("div",{staticClass:"mx-2"},[t._v(t._s(t.filters.link.text))])]},proxy:!0}])},t._l(t.linksOptions,(function(a){return e("b-dropdown-item",{key:a.value,attrs:{"link-class":`p-3 ${t.filters.link.value==a.value&&"active"}`},on:{click:function(e){t.filters.link=a}}},[t._v(" "+t._s(a.text)+" ")])})),1)],1),e("b-table",{attrs:{fields:t.table.fields,items:t.events,"current-page":1,"row-clicked":"",responsive:"",borderless:"",hover:"","table-class":"mt-4 fs-sm","thead-tr-class":"border-bottom text-muted","tbody-tr-class":"cursor-pointer"},on:{"row-clicked":t.showEvent},scopedSlots:t._u([{key:"cell(eventName)",fn:function({value:a}){return[Array.isArray(a)?e("div",[e("span",{staticClass:"text-nowrap"},[t._v(t._s(a[0]))]),t._v(" "+t._s(t.$t("and"))+" "),e("span",{staticClass:"text-nowrap"},[t._v(t._s(a[1]))])]):e("div",[t._v(t._s(a))])]}}])})],1),t.eventsTotal?e("Paginate",{attrs:{currentPage:t.table.currentPage,perPage:t.table.perPage,total:t.eventsTotal},on:{"update:currentPage":function(e){return t.$set(t.table,"currentPage",e)},"update:current-page":function(e){return t.$set(t.table,"currentPage",e)}}}):t._e()],1)],1)},s=[],i=a(6939),r=a(2003),l={components:{Paginate:i.Z},data(){return{filters:{time:{text:"All time",value:""},link:{text:"All links",value:""}},table:{fields:[{label:"Date",key:"date",tdClass:"text-nowrap"},{label:"Event name",key:"eventName"},{label:"Invitee Email",key:"inviteeEmail"},{label:"Link",key:"link",tdClass:"text-nowrap"}],perPage:10,currentPage:1},isLoading:!1}},async beforeRouteEnter(t,e,a){r.Z.commit("setAppLoading",!0);try{await r.Z.dispatch("getEvents","?perPage=10")}finally{r.Z.commit("setAppLoading",!1),a()}},watch:{"table.perPage"(){this.getEvents()},"table.currentPage"(){this.getEvents()}},computed:{timesOptions(){return this.$store.state.events.timesOptions},linksOptions(){return this.$store.state.events.linksOptions},events(){return this.$store.state.events.all.map((t=>({id:t.id,date:this.date(t.startDate),eventName:this.getEventName(t),inviteeEmail:t.invitees.map((t=>t.email)).join(", "),link:t.invite.name})))},eventsTotal(){return this.$store.state.events.total}},methods:{async getEvents(){this.isLoading=!0;let t=`?perPage=${this.table.perPage}&page=${this.table.currentPage}`;try{await this.$store.dispatch("getEvents",t)}finally{this.isLoading=!1}},getEventName(t){let e=t.invite.name,a="oneOnOne"==t.invite.type;if(!a)return e;let n=t.invite.user,s=t.invitees.find((t=>!t.isGuest));return n=n.firstName+" "+n.lastName,[s.name,n]},date(t){return new Date(t).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric"})},showEvent(t){this.$router.push({name:"event",params:{id:t.id,event:t}})}}},o=l,c=a(1001),u=(0,c.Z)(o,n,s,!1,null,null,null),p=u.exports}}]);