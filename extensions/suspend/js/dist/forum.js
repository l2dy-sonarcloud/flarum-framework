module.exports=function(t){var e={};function n(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=11)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["components/Notification"]},function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat["models/User"]},function(t,e){t.exports=flarum.core.compat["utils/withAttr"]},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["utils/Stream"]},function(t,e){t.exports=flarum.core.compat["utils/UserControls"]},function(t,e){t.exports=flarum.core.compat["components/Badge"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e,n){"use strict";n.r(e);var s=n(6),a=n(0),r=n.n(a),o=n(8),u=n.n(o),i=n(1),l=n.n(i),p=n(9),c=n.n(p),d=n(3),f=n.n(d),y=n(4),h=n.n(y);function b(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var v=n(10),_=n.n(v),x=n(7),g=n.n(x),j=n(5),S=n.n(j),U=function(t){function e(){return t.apply(this,arguments)||this}b(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e);var n=this.attrs.user.suspendedUntil(),s=null;new Date>n&&(n=null),n&&(s=9999===n.getFullYear()?"indefinitely":"limited"),this.status=g()(s),this.daysRemaining=g()("limited"===s&&1-dayjs().diff(n,"days"))},n.className=function(){return"SuspendUserModal Modal--small"},n.title=function(){return app.translator.trans("flarum-suspend.forum.suspend_user.title",{user:this.attrs.user})},n.content=function(){var t=this;return m("div",{className:"Modal-body"},m("div",{className:"Form"},m("div",{className:"Form-group"},m("label",null,app.translator.trans("flarum-suspend.forum.suspend_user.status_heading")),m("div",null,m("label",{className:"checkbox"},m("input",{type:"radio",name:"status",checked:!this.status(),value:"",onclick:S()("value",this.status)}),app.translator.trans("flarum-suspend.forum.suspend_user.not_suspended_label")),m("label",{className:"checkbox"},m("input",{type:"radio",name:"status",checked:"indefinitely"===this.status(),value:"indefinitely",onclick:S()("value",this.status)}),app.translator.trans("flarum-suspend.forum.suspend_user.indefinitely_label")),m("label",{className:"checkbox SuspendUserModal-days"},m("input",{type:"radio",name:"status",checked:"limited"===this.status(),value:"limited",onclick:function(e){t.status(e.target.value),m.redraw.sync(),t.$(".SuspendUserModal-days-input input").select(),e.redraw=!1}}),app.translator.trans("flarum-suspend.forum.suspend_user.limited_time_label"),"limited"===this.status()?m("div",{className:"SuspendUserModal-days-input"},m("input",{type:"number",min:"0",value:this.daysRemaining(),oninput:S()("value",this.daysRemaining),className:"FormControl"}),app.translator.trans("flarum-suspend.forum.suspend_user.limited_time_days_text")):""))),m("div",{className:"Form-group"},m(l.a,{className:"Button Button--primary",loading:this.loading,type:"submit"},app.translator.trans("flarum-suspend.forum.suspend_user.submit_button")))))},n.onsubmit=function(t){var e=this;t.preventDefault(),this.loading=!0;var n=null;switch(this.status()){case"indefinitely":n=new Date("2038-01-01");break;case"limited":n=dayjs().add(this.daysRemaining(),"days").toDate()}this.attrs.user.save({suspendedUntil:n}).then((function(){return e.hide()}),this.loaded.bind(this))},e}(_.a),M=n(2),N=n.n(M),k=function(t){function e(){return t.apply(this,arguments)||this}b(e,t);var n=e.prototype;return n.icon=function(){return"fas fa-ban"},n.href=function(){return app.route.user(this.attrs.notification.subject())},n.content=function(){var t=this.attrs.notification,e=t.content(),n=dayjs(e.date).from(t.createdAt(),!0);return app.translator.trans("flarum-suspend.forum.notifications.user_suspended_text",{user:t.fromUser(),timeReadable:n})},e}(N.a),O=function(t){function e(){return t.apply(this,arguments)||this}b(e,t);var n=e.prototype;return n.icon=function(){return"fas fa-ban"},n.href=function(){return app.route.user(this.attrs.notification.subject())},n.content=function(){var t=this.attrs.notification;return app.translator.trans("flarum-suspend.forum.notifications.user_unsuspended_text",{user:t.fromUser()})},e}(N.a);r.a.initializers.add("flarum-suspend",(function(){r.a.notificationComponents.userSuspended=k,r.a.notificationComponents.userUnsuspended=O,h.a.prototype.canSuspend=f.a.attribute("canSuspend"),h.a.prototype.suspendedUntil=f.a.attribute("suspendedUntil",f.a.transformDate),Object(s.extend)(u.a,"moderationControls",(function(t,e){e.canSuspend()&&t.add("suspend",l.a.component({icon:"fas fa-ban",onclick:function(){return r.a.modal.show(U,{user:e})}},r.a.translator.trans("flarum-suspend.forum.user_controls.suspend_button")))})),Object(s.extend)(h.a.prototype,"badges",(function(t){var e=this.suspendedUntil();new Date<e&&t.add("suspended",c.a.component({icon:"fas fa-ban",type:"suspended",label:r.a.translator.trans("flarum-suspend.forum.user_badge.suspended_tooltip")}))}))}))}]);
//# sourceMappingURL=forum.js.map