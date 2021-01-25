module.exports=function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=21)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat["models/User"]},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["components/UserPage"]},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["helpers/username"]},function(t,e){t.exports=flarum.core.compat["utils/ItemList"]},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/LinkButton"]},function(t,e){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,e){t.exports=flarum.core.compat["helpers/fullTime"]},function(t,e){t.exports=flarum.core.compat["utils/extractText"]},function(t,e){t.exports=flarum.core.compat["helpers/avatar"]},function(t,e){t.exports=flarum.core.compat["components/Dropdown"]},function(t,e){t.exports=flarum.core.compat["components/Link"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e){t.exports=flarum.core.compat["utils/Stream"]},function(t,e){t.exports=flarum.core.compat["utils/withAttr"]},function(t,e){t.exports=flarum.core.compat["helpers/listItems"]},function(t,e){t.exports=flarum.core},function(t,e,o){"use strict";o.r(e);var r=o(0),n=o.n(r),a=o(8),s=o(4),i=o.n(s),u=o(9),c=o.n(u);function l(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t}).apply(this,arguments)}var d=o(5),f=o.n(d),h=o(10),N=o.n(h),b=o(6),y=o.n(b),v=o(11),M=o.n(v),x=o(12),g=o.n(x),w=o(13),C=o.n(w),_=o(14),O=o.n(_),L=o(7),B=o.n(L),I=o(3),j=o.n(I),k=o(15),A=o.n(k),P=function(t){function e(){return t.apply(this,arguments)||this}l(e,t);var o=e.prototype;return o.view=function(){var t=this.attrs.note,e=t.addedByUser(),o=M()(t.createdAt()),r=this.noteActions(t);return m("div",{className:"ModeratorNotesListItem"},r.length?O.a.component({icon:"fas fa-ellipsis-v",className:"ModeratorNotesListItem-controls",buttonClassName:"Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right"},r):"",m("div",{className:"ModeratorNotesListItem-main"},m("div",{className:"ModeratorNotesListItem-title"},m(A.a,{href:e?app.route.user(e):"#",className:"ModeratorNotesListItem-author",title:g()(app.translator.trans("fof-moderator-notes.forum.moderatorNotes.created_text",{user:e,date:o})),config:function(t){$(t).tooltip({placement:"right"}),m.route.apply(this,arguments)}},C()(e,{title:""})," ",y()(e))),m("p",null,o),m("hr",null),m("div",{className:"ModeratorNotesListItem-note"},m("ul",{className:"ModeratorNotesListItem-info"},m("li",{className:"item-content"},m("span",null,m.trust(t.note())))))))},o.noteActions=function(t){var e=this,o=new B.a;return app.session.user.canDeleteModeratorNotes()&&o.add("delete",j.a.component({icon:"far fa-trash-alt",onclick:function(){return e.deleteNote(t)}},app.translator.trans("fof-moderator-notes.forum.moderatorNotes.delete"))),o.toArray()},o.deleteNote=function(t){if(!0===confirm(app.translator.trans("fof-moderator-notes.forum.moderatorNotes.confirm")))return t.delete().then((function(){})).catch((function(){})).then((function(){location.reload()}))},e}(f.a),D=o(16),S=o.n(D),U=o(17),F=o.n(U),V=o(18),R=o.n(V),T=function(t){function e(){return t.apply(this,arguments)||this}l(e,t);var o=e.prototype;return o.oninit=function(e){t.prototype.oninit.call(this,e),this.noteContent=F()("")},o.className=function(){return"ModeratorNotesCreateModal Modal--large"},o.title=function(){return app.translator.trans("fof-moderator-notes.forum.moderatorNotes.create-heading")},o.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("div",{className:"Form-group"},m("div",null,m("label",null,app.translator.trans("fof-moderator-notes.forum.moderatorNotes.input_heading",{username:y()(this.attrs.user)}),m("textarea",{className:"FormControl",value:this.noteContent(),oninput:R()("value",this.noteContent),rows:"6"})))),m("div",{className:"Form-group"},m(j.a,{className:"Button Button--primary Button--block",type:"submit",loading:this.loading},app.translator.trans("fof-moderator-notes.forum.moderatorNotes.submit_button")))))},o.onsubmit=function(t){t.preventDefault(),this.loading=!0,app.store.createRecord("notes").save({userId:this.attrs.user.id(),note:this.noteContent()},{errorHandler:this.onerror.bind(this)}).then(this.hide.bind(this)).then(this.attrs.callback).catch((function(){})).then(this.loaded.bind(this))},o.onerror=function(e){422===e.status&&(e.alert.attrs=app.translator.trans("fof-moderator-notes.forum.no_content_given")),t.prototype.onerror.call(this,e)},e}(S.a),E=o(19),z=o.n(E),H=function(t){function e(){return t.apply(this,arguments)||this}l(e,t);var o=e.prototype;return o.oninit=function(e){t.prototype.oninit.call(this,e),this.loading=!0,this.notes=[],this.refresh()},o.view=function(){var t;return this.loading&&(t=N.a.component()),m("div",{className:"ModeratorNotesList"},m("h1",{className:"ModeratorNotesList-notes"},n.a.translator.trans("fof-moderator-notes.forum.user.notes")),m("div",{class:"ModeratorNotes-toolbar"},m("ul",{className:"ModeratorNotes-toolbar-action"},z()(this.actionItems().toArray()))),m("ul",{className:"ModeratorNotesList-discussions"},this.notes.map((function(t){return m("li",{key:t.id(),"data-id":t.id()},P.component({note:t}))})),!this.loading&&0===this.notes.length&&m("label",null,n.a.translator.trans("fof-moderator-notes.forum.moderatorNotes.noNotes"))),m("div",{className:"ModeratorNotesList-loadMore"},t))},o.actionItems=function(){var t=new B.a,e=n.a.session.user.canCreateModeratorNotes();return t.add("create_note",j.a.component({className:"Button Button--primary",onclick:this.handleOnClickCreate.bind(this),disabled:!e},n.a.translator.trans("fof-moderator-notes.forum.moderatorNotes.add_button"))),t},o.parseResults=function(t){return[].push.apply(this.notes,t),this.loading=!1,m.redraw(),t},o.refresh=function(){var t=this;return n.a.store.find("notes",this.attrs.params.user.id()).then((function(e){t.notes=[],t.parseResults(e)}),(function(){t.loading=!1,m.redraw.sync()}))},o.handleOnClickCreate=function(t){t.preventDefault(),n.a.modal.show(T,p({callback:this.refresh.bind(this)},this.attrs.params))},e}(f.a),q=function(t){function e(){return t.apply(this,arguments)||this}l(e,t);var o=e.prototype;return o.oninit=function(e){t.prototype.oninit.call(this,e),this.loadUser(m.route.param("username"))},o.content=function(){return m("div",{className:"DiscussionsUserPage"},H.component({params:{user:this.user,sort:"newest"}}))},e}(i.a),G=o(1),J=o.n(G),K=o(2),Q=o.n(K),W=function(){Q.a.prototype.canViewModeratorNotes=J.a.attribute("canViewModeratorNotes"),Q.a.prototype.moderatorNoteCount=J.a.attribute("moderatorNoteCount"),app.routes["user.notes"]={path:"/u/:username/notes",component:q},Object(a.extend)(i.a.prototype,"navItems",(function(t){this.user.canViewModeratorNotes()&&t.add("notes",c.a.component({href:app.route("user.notes",{username:this.user.username()}),icon:"fas fa-sticky-note"},[app.translator.trans("fof-moderator-notes.forum.user.notes"),this.user.moderatorNoteCount()>0?m("span",{className:"Button-badge"},this.user.moderatorNoteCount()):""]),10)}))};function X(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Y(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var Z=function(t){function e(){for(var e,o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return Y(X(e=t.call.apply(t,[this].concat(r))||this),"id",J.a.attribute("id")),Y(X(e),"note",J.a.attribute("note")),Y(X(e),"createdAt",J.a.attribute("createdAt",J.a.transformDate)),Y(X(e),"addedByUser",J.a.hasOne("addedByUser")),e}return l(e,t),e}(J.a),tt=o(20);n.a.initializers.add("fof-moderator-notes",(function(t){t.store.models.notes=Z,Q.a.prototype.canViewModeratorNotes=J.a.attribute("canViewModeratorNotes"),Q.a.prototype.canCreateModeratorNotes=J.a.attribute("canCreateModeratorNotes"),Q.a.prototype.canDeleteModeratorNotes=J.a.attribute("canDeleteModeratorNotes"),W()}));var et=[new tt.Extend.Model("moderatorNotes",Z)];o.d(e,"extend",(function(){return et}))}]);
//# sourceMappingURL=forum.js.map