"use strict";(self["webpackChunkmawed"]=self["webpackChunkmawed"]||[]).push([[177],{5291:function(t,e,s){s.r(e),s.d(e,{default:function(){return _}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("b-container",[e("div",{staticClass:"header mt-4 d-flex w-100 align-items-center justify-content-between"},[e("div",[e("h5",{staticClass:"text-muted"},[t._v(t._s(t.$me.firstName)+" "+t._s(t.$me.lastName))]),e("a",{staticClass:"fs-sm text-decoration-none",attrs:{href:`https://mawed.net/${t.$me.username}`,target:"_blank"}},[e("span",[t._v("https://mawed.net/"+t._s(t.$me.username))]),e("b-icon",{staticClass:"mx-1",attrs:{icon:"box-arrow-up-right"}})],1)]),e("router-link",{staticClass:"btn-add-link rounded-pill shadow-lg d-flex align-items-center justify-content-center btn btn-lg",attrs:{to:"/create"}},[e("b-icon",{staticClass:"icon_add_link mr-2",attrs:{icon:"plus",scale:"1.7",variant:"primary"}}),e("span",{staticClass:"fs-md"},[t._v(" "+t._s(t.$t("newLink"))+" ")])],1)],1),e("div",{staticClass:"invites mt-5"},[e("div",{staticClass:"invites-header d-flex align-items-center justify-content-between"},[e("div",{staticClass:"d-flex align-items-center"},[e("h4",{staticClass:"m-0"},[t._v(t._s(t.$t("invites")))]),e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:t.$t("invitiesTooltip")}},[e("b-icon",{staticClass:"fs-sm text-muted mx-1",attrs:{icon:"info-circle"}})],1)]),e("router-link",{staticClass:"fs-sm text-decoration-none",attrs:{to:"/invites"}},[t._v(t._s(t.$t("viewInvites")))])],1),e("div",{staticClass:"invites-body pt-4"},[e("b-row",{attrs:{cols:"1","cols-md":"2","cols-lg":"3"}},t._l(t.invites,(function(s){return e("b-col",{key:s.id,staticClass:"mb-4 h-auto"},[e("LinkInvite",{attrs:{invite:s},on:{onDelete:t.openDeleteInviteModal}})],1)})),1)],1)]),e("div",{staticClass:"event mt-5"},[e("div",{staticClass:"event-header d-flex align-items-center justify-content-between"},[e("div",{staticClass:"d-flex align-items-center"},[e("h4",{staticClass:"m-0"},[t._v(t._s(t.$t("upcomingEvents")))]),e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:t.$t("eventsTooltip")}},[e("b-icon",{staticClass:"fs-sm text-muted mx-1",attrs:{icon:"info-circle"}})],1)]),e("router-link",{staticClass:"fs-sm text-decoration-none",attrs:{to:"/events"}},[t._v(t._s(t.$t("viewUpcomingEvents")))])],1),e("div",{staticClass:"event-body pt-4"},[t.events.length?e("b-row",{attrs:{cols:"1","cols-md":"2","cols-lg":"3"}},t._l(t.events,(function(t){return e("b-col",{key:t.id,staticClass:"mb-4 h-auto"},[e("LinkEvent",{attrs:{event:t}})],1)})),1):e("p",{staticClass:"lead text-muted fs-default"},[t._v(" "+t._s(t.$t("noUpcomingEvents"))+" ")])],1)])]),e("DeleteModal",{ref:"deleteModal",attrs:{field:t.$t("theLink")},on:{ok:t.confirmDelete}})],1)},n=[],a=function(){var t=this,e=t._self._c;return e("b-card",{staticClass:"rounded-lg h-100",attrs:{"body-class":"pt-2 px-2 pb-2 pb-md-0"}},[e("div",{staticClass:"link-card pt-1 px-1 pb-1 pb-md-0 h-100 d-flex flex-column"},[e("div",{staticClass:"link-card-header d-flex w-100 align-items-center justify-content-between"},[e("div",{staticClass:"text-truncate"},[e("b-icon",{staticClass:"text-primary",attrs:{icon:"calendar2-event","font-scale":"1.4"}}),e("router-link",{staticClass:"text-decoration-none text-dark mx-2",attrs:{to:{name:"event",params:{id:t.event.id}}}},[e("strong",{staticClass:"fs-sm"},[t._v(t._s(t.eventTitle))])])],1),e("div",{staticClass:"d-block d-md-none"},[e("b-dropdown",{attrs:{variant:"link","toggle-class":"text-decoration-none p-0 box-shadow-none",right:"","no-caret":"","menu-class":"p-0 shadow border-0"},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn_icon ml-2",attrs:{title:t.$t("moreActions")}},[e("b-icon",{staticClass:"text-muted",attrs:{icon:"three-dots-vertical","font-scale":"1.5"}})],1)]},proxy:!0}])},[e("b-dropdown-item",{attrs:{"link-class":"p-3",to:{name:"event",params:{id:t.event.id}}}},[e("div",{staticClass:"d-flex align-items-center"},[e("b-icon",{staticClass:"mr-3",attrs:{icon:"calendar2-date",width:"1em","font-scale":"1.4"}}),e("span",[t._v(t._s(t.$t("viewEventDetails")))])],1)]),t.isOneOnOne?e("b-dropdown-item",{attrs:{"link-class":"p-3"}},[e("div",{staticClass:"d-flex align-items-center"},[e("b-icon",{staticClass:"mr-3",attrs:{icon:"calendar2-event",width:"1em","font-scale":"1.4"}}),e("span",[t._v(t._s(t.$t("reschedule")))])],1)]):t._e(),e("b-dropdown-item",{attrs:{"link-class":"p-3",to:{name:"eventCancel",params:{id:t.event.id}}}},[e("div",{staticClass:"d-flex align-items-center"},[e("b-icon",{staticClass:"mr-3",attrs:{icon:"x-circle",width:"1em"}}),e("span",[t._v(t._s(t.$t("cancel")))])],1)])],1)],1)]),e("div",{staticClass:"link-card-body ml-3 pl-2 fs-sm text-muted"},[e("div",{staticClass:"voted my-1"},[t._v(t._s(t.eventDate))]),e("div",{staticClass:"my-1"},[t._v(t._s(t.eventFrom)+" - "+t._s(t.eventTo))])]),e("div",{staticClass:"link-card-footer mt-auto py-3 d-none d-md-flex justify-content-end"},[e("router-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn_icon mx-2",attrs:{title:t.$t("viewEventDetails"),to:{name:"event",params:{id:t.event.id}}}},[e("b-icon",{staticClass:"text-muted",attrs:{icon:"calendar2-date","font-scale":"1.5"}})],1),t.isOneOnOne?e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn_icon mr-2",attrs:{title:t.$t("reschedule")}},[e("b-icon",{staticClass:"text-muted",attrs:{icon:"calendar2-event","font-scale":"1.5"}})],1):t._e(),e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn_icon",attrs:{title:t.$t("cancel"),role:"button"},on:{click:function(e){return t.$router.push({name:"eventCancel",params:{id:t.event.id}})}}},[e("b-icon",{staticClass:"text-muted",attrs:{icon:"x-circle","font-scale":"1.5"}})],1)],1)])])},o=[],r={props:{event:{type:Object,required:!0}},computed:{eventDate(){let t=new Date(this.event.startDate);return t=t.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"}),t},eventFrom(){let t=new Date(this.event.startDate);return t=t.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}),t.toLowerCase()},eventTo(){let t=60*this.event.duration*1e3,e=new Date(this.event.startDate);return e=e.getTime()+t,e=new Date(e),e=e.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}),e.toLowerCase()},isOneOnOne(){return"oneOnOne"==this.event.invite.type},eventTitle(){if(this.isOneOnOne){let t=this.event.invite.name,e=this.event.invitees.find((t=>!t.isGuest)).name,s=this.event.invite.user.firstName+" "+this.event.invite.user.lastName,i=this.$t("and");if("invitee_organizer"==this.event.invite.eventNameFormat)return`${e} ${i} ${s}`;if("invitee_organizer_name"==this.event.invite.eventNameFormat)return`${e} ${i} ${s}: ${t}`;if("name_invitee_organizer"==this.event.invite.eventNameFormat)return`${t}: ${e} ${i} ${s}`}return this.event.invite.name}}},l=r,c=s(1001),d=(0,c.Z)(l,a,o,!1,null,null,null),v=d.exports,m=s(9131),u=s(6938),p=s(3822),h=s(2003),f={components:{LinkEvent:v,LinkInvite:m.Z,DeleteModal:u.Z},async beforeRouteEnter(t,e,s){h.Z.commit("setAppLoading",!0);try{await Promise.all([h.Z.dispatch("getInvites","?perPage=6"),h.Z.dispatch("getEvents","?perPage=6")])}finally{h.Z.commit("setAppLoading",!1),s()}},computed:{invites(){return this.$store.getters.invites},events(){return this.$store.getters.events}},methods:{...(0,p.nv)(["getInvites","getEvents"]),openDeleteInviteModal(t){this.$refs.deleteModal.open(t)},async confirmDelete(t){this.$refs.deleteModal.setBusy(!0);try{await this.$store.dispatch("deleteInvite",t.inviteID),this.$store.state.invites.total>6&&await this.$store.dispatch("getInvites","?perPage=6")}finally{this.$refs.deleteModal.close()}}}},b=f,C=(0,c.Z)(b,i,n,!1,null,null,null),_=C.exports}}]);