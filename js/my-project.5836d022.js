(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["my-project"],{"030d":function(e,t,n){},"08cc":function(e,t,n){var r=n("1a8c");function c(e){return e===e&&!r(e)}e.exports=c},1411:function(e,t,n){"use strict";n("fb57")},1838:function(e,t,n){var r=n("c05f"),c=n("9b02"),a=n("8604"),u=n("f608"),o=n("08cc"),i=n("20ec"),l=n("f4d6"),s=1,p=2;function d(e,t){return u(e)&&o(t)?i(l(e),t):function(n){var u=c(n,e);return void 0===u&&u===t?a(n,e):r(t,u,s|p)}}e.exports=d},"18d8":function(e,t,n){var r=n("234d"),c=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,u=r((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(c,(function(e,n,r,c){t.push(r?c.replace(a,"$1"):n||e)})),t}));e.exports=u},"20ec":function(e,t){function n(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}}e.exports=n},2164:function(e,t,n){var r=n("cae7");function c(e,t,n){var c=-1,a=e.criteria,u=t.criteria,o=a.length,i=n.length;while(++c<o){var l=r(a[c],u[c]);if(l){if(c>=i)return l;var s=n[c];return l*("desc"==s?-1:1)}}return e.index-t.index}e.exports=c},"234d":function(e,t,n){var r=n("e380"),c=500;function a(e){var t=r(e,(function(e){return n.size===c&&n.clear(),e})),n=t.cache;return t}e.exports=a},"242e":function(e,t,n){var r=n("72af"),c=n("ec69");function a(e,t){return e&&r(e,t,c)}e.exports=a},"26e8":function(e,t){function n(e,t){return null!=e&&t in Object(e)}e.exports=n},"2c9e":function(e,t,n){"use strict";n("8c33")},"3bb4":function(e,t,n){var r=n("08cc"),c=n("ec69");function a(e){var t=c(e),n=t.length;while(n--){var a=t[n],u=e[a];t[n]=[a,u,r(u)]}return t}e.exports=a},"3cbc":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c=Object(r["fb"])("data-v-7294b08d");Object(r["G"])("data-v-7294b08d");var a={class:"my-project"},u={class:"project-main"},o={class:"project-manage"},i={class:"manage-title"},l={class:"my-project project-group"},s=Object(r["m"])("span",{style:{"margin-left":"2px"}},"我的分组",-1),p={class:"project-num"},d={key:0,class:"new-group"},f={class:"project-name project-ungrouped"},b={class:"project-num"},v={class:"project-name"},j={class:"project-num"},O={class:"group-btns"},m={class:"project-screen-list"};Object(r["E"])();var h=c((function(e,t,n,h,g,y){var w=Object(r["M"])("project-list"),x=Object(r["M"])("g-loading"),k=Object(r["N"])("focus");return Object(r["D"])(),Object(r["i"])(x,{spinning:e.loading},{default:c((function(){return[Object(r["m"])("div",a,[Object(r["m"])("div",u,[Object(r["m"])("div",o,[Object(r["m"])("div",i,[Object(r["m"])("div",l,[s,Object(r["m"])("i",{class:"el-icon-plus btn-add-icon",onClick:t[1]||(t[1]=function(t){return e.adding=!0})})]),Object(r["m"])("div",{class:["my-project project-all",{"project-checked-color":e.selectedGroupId===e.group.id}],onClick:t[2]||(t[2]=function(t){return e.toggleProject(e.group.id)})},[Object(r["m"])("span",null,Object(r["Q"])(e.group.name),1),Object(r["m"])("span",p,Object(r["Q"])(e.group.children.length),1)],2),e.adding?(Object(r["D"])(),Object(r["i"])("div",d,[Object(r["cb"])(Object(r["m"])("input",{class:"edit-input",onBlur:t[3]||(t[3]=function(){return e.onAddInputBlur&&e.onAddInputBlur.apply(e,arguments)}),onKeyup:t[4]||(t[4]=Object(r["db"])((function(){return e.addGroup&&e.addGroup.apply(e,arguments)}),["enter"]))},null,544),[[k]])])):Object(r["j"])("",!0)]),Object(r["m"])("div",{class:["manage-main",{draging:e.draging}]},[Object(r["m"])("div",{class:["main-project",{"project-checked-color":e.selectedGroupId===e.ungroup.id}],onClick:t[5]||(t[5]=function(t){return e.toggleProject(e.ungroup.id)}),onDragover:t[6]||(t[6]=Object(r["eb"])((function(){}),["prevent"])),onDragenter:t[7]||(t[7]=function(){return e.onDragEnter&&e.onDragEnter.apply(e,arguments)}),onDragleave:t[8]||(t[8]=function(){return e.onDragLeave&&e.onDragLeave.apply(e,arguments)}),onDrop:t[9]||(t[9]=function(t){return e.onDrop(t,e.ungroup)})},[Object(r["m"])("span",f,Object(r["Q"])(e.ungroup.name),1),Object(r["m"])("span",b,Object(r["Q"])(e.ungroup.children.length),1)],34),(Object(r["D"])(!0),Object(r["i"])(r["b"],null,Object(r["K"])(e.groups,(function(n){return Object(r["D"])(),Object(r["i"])("div",{key:n.id,class:["main-project group-project",{"project-checked-color":e.selectedGroupId===n.id}],onClick:function(t){return e.toggleProject(n.id)},onDragover:t[10]||(t[10]=Object(r["eb"])((function(){}),["prevent"])),onDragenter:t[11]||(t[11]=function(){return e.onDragEnter&&e.onDragEnter.apply(e,arguments)}),onDragleave:t[12]||(t[12]=function(){return e.onDragLeave&&e.onDragLeave.apply(e,arguments)}),onDrop:function(t){return e.onDrop(t,n)}},[n.editing?Object(r["cb"])((Object(r["D"])(),Object(r["i"])("input",{key:0,"default-value":n.name,class:"edit-input",onBlur:function(t){return e.onEditInputBlur(t,n)},onKeyup:Object(r["db"])((function(t){return e.editGroup(t,n)}),["enter"])},null,40,["default-value","onBlur","onKeyup"])),[[k]]):(Object(r["D"])(),Object(r["i"])(r["b"],{key:1},[Object(r["m"])("span",v,Object(r["Q"])(n.name),1),Object(r["m"])("span",j,Object(r["Q"])(n.children.length),1),Object(r["m"])("span",O,[Object(r["m"])("i",{class:"v-icon-edit",onClick:function(e){return n.editing=!0}},null,8,["onClick"]),Object(r["m"])("i",{class:"v-icon-delete",onClick:function(t){return e.confirmDeleteGroup(n)}},null,8,["onClick"])])],64))],42,["onClick","onDrop"])})),128))],2)]),Object(r["m"])("div",m,[Object(r["m"])(w,{group:e.selectedGroup},null,8,["group"])])])])]})),_:1},8,["spinning"])})),g=n("c973"),y=n.n(g),w=n("a34a"),x=n.n(w),k=n("5bc3"),E=n.n(k),P=n("55b5"),D=n.n(P),C=n("0644"),_=n.n(C),I=n("9ab4"),T=n("6fc5"),G=n("0613"),M=n("9495"),R=n("6ca5");T["e"].rawError=!0;var S=function(e){function t(){var t;return t=e.apply(this,arguments)||this,t.allGroups=[],t}D()(t,e);var n=t.prototype;return n.SET_PROJECTS=function(e){this.allGroups=e},n.DELETE_PROJECT=function(e){var t=this.allGroups.find((function(t){return t.id===e.gid}));t&&(t.children=t.children.filter((function(t){return t.id!==e.pid})))},n.UPDATE_PROJECT_NAME=function(e){var t=this.allGroups.find((function(t){return t.id===e.id}));t&&(t.name=e.newName)},n.MOVE_PROJECT=function(e){var t=e.pid,n=e.fromId,r=e.toId,c=this.allGroups.find((function(e){return e.id===n})),a=this.allGroups.find((function(e){return e.id===r}));if(c&&a){var u=c.children.findIndex((function(e){return e.id===t})),o=c.children.splice(u,1)[0];o.groupId=r,a.children.push(o)}},n.COPY_PROJECT=function(e){var t=this.allGroups.find((function(t){return t.id===e.gid}));if(t){var n=t.children.find((function(t){return t.id===e.pid})),r=_()(n);r.id=Math.round(1e3*Math.random()),r.name+="_copy",t.children.push(r)}},n.CREATE_PROJECT_GROUP=function(e){var t=new M["a"](e.id,e.name,[]);t.type=M["b"].group,this.allGroups.unshift(t)},n.DELETE_PROJECT_GROUP=function(e){var t=this.allGroups.findIndex((function(t){return t.id===e})),n=this.allGroups.find((function(e){return e.type===M["b"].ungroup}));if(t>-1&&n){var r=this.allGroups.splice(t,1),c=r[0];c.children.forEach((function(e){e.groupId=n.id,n.children.push(e)}))}},n.getProjects=function(){var e=y()(x.a.mark((function e(){var t,n,r;return x.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R["h"]();case 3:if(t=e.sent,0!==t.data.code){e.next=11;break}n=t.data.data||[],r=new M["a"](0,"未分组",[]),n.forEach((function(e){e.children.forEach((function(t){e.type===M["b"].ungroup?(t.groupId=0,r.children.push(t)):t.groupId=e.id}))})),this.SET_PROJECTS([r].concat(n.filter((function(e){return e.type===M["b"].group})))),e.next=12;break;case 11:throw Error(t.data.message);case 12:e.next=17;break;case 14:throw e.prev=14,e.t0=e["catch"](0),e.t0;case 17:case"end":return e.stop()}}),e,this,[[0,14]])})));function t(){return e.apply(this,arguments)}return t}(),n.deleteProject=function(){var e=y()(x.a.mark((function e(t){var n;return x.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R["d"](t.pid);case 3:if(n=e.sent,0!==n.data.code){e.next=8;break}this.DELETE_PROJECT(t),e.next=9;break;case 8:throw Error(n.data.message);case 9:e.next=14;break;case 11:throw e.prev=11,e.t0=e["catch"](0),e.t0;case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));function t(t){return e.apply(this,arguments)}return t}(),n.updateProjectName=function(){var e=y()(x.a.mark((function e(t){var n;return x.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R["n"](t.id,t.newName);case 3:if(n=e.sent,0===n.data.code){e.next=6;break}throw Error(n.data.message);case 6:e.next=11;break;case 8:throw e.prev=8,e.t0=e["catch"](0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));function t(t){return e.apply(this,arguments)}return t}(),n.moveProject=function(){var e=y()(x.a.mark((function e(t){var n,r,c,a;return x.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=t.pid,r=t.fromId,c=t.toId,e.next=4,R["k"](n,r,c);case 4:if(a=e.sent,0!==a.data.code){e.next=9;break}this.MOVE_PROJECT(t),e.next=10;break;case 9:throw Error(a.data.message);case 10:e.next=15;break;case 12:throw e.prev=12,e.t0=e["catch"](0),e.t0;case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));function t(t){return e.apply(this,arguments)}return t}(),n.copyProject=function(){var e=y()(x.a.mark((function e(t){var n;return x.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R["a"](t.pid);case 3:if(n=e.sent,0!==n.data.code){e.next=8;break}this.COPY_PROJECT(t),e.next=9;break;case 8:throw Error(n.data.message);case 9:e.next=14;break;case 11:throw e.prev=11,e.t0=e["catch"](0),e.t0;case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));function t(t){return e.apply(this,arguments)}return t}(),n.createProjectGroup=function(){var e=y()(x.a.mark((function e(t){var n,r;return x.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R["c"]({name:t});case 3:if(n=e.sent,r=n.data,0!==r.code){e.next=9;break}this.CREATE_PROJECT_GROUP({id:r.data,name:t}),e.next=10;break;case 9:throw Error(r.message);case 10:e.next=15;break;case 12:throw e.prev=12,e.t0=e["catch"](0),e.t0;case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));function t(t){return e.apply(this,arguments)}return t}(),n.deleteProjectGroup=function(){var e=y()(x.a.mark((function e(t){var n;return x.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R["e"](t);case 3:if(n=e.sent,0!==n.data.code){e.next=8;break}this.DELETE_PROJECT_GROUP(t),e.next=9;break;case 8:throw Error(n.data.message);case 9:e.next=14;break;case 11:throw e.prev=11,e.t0=e["catch"](0),e.t0;case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));function t(t){return e.apply(this,arguments)}return t}(),n.updateProjectGroupName=function(){var e=y()(x.a.mark((function e(t){var n;return x.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R["m"](t.id,t.newName);case 3:if(n=e.sent,0===n.data.code){e.next=6;break}throw Error(n.data.message);case 6:e.next=11;break;case 8:throw e.prev=8,e.t0=e["catch"](0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));function t(t){return e.apply(this,arguments)}return t}(),E()(t,[{key:"group",get:function(){var e=this.allGroups.flatMap((function(e){return e.children}));return new M["a"](-1,"全部应用",e)}},{key:"ungroup",get:function(){var e=this.allGroups.find((function(e){return e.type===M["b"].ungroup}));return e||new M["a"](0,"未分组",[])}},{key:"groups",get:function(){return this.allGroups.filter((function(e){return e.type===M["b"].group}))}}]),t}(T["d"]);Object(I["a"])([T["c"]],S.prototype,"SET_PROJECTS",null),Object(I["a"])([T["c"]],S.prototype,"DELETE_PROJECT",null),Object(I["a"])([T["c"]],S.prototype,"UPDATE_PROJECT_NAME",null),Object(I["a"])([T["c"]],S.prototype,"MOVE_PROJECT",null),Object(I["a"])([T["c"]],S.prototype,"COPY_PROJECT",null),Object(I["a"])([T["c"]],S.prototype,"CREATE_PROJECT_GROUP",null),Object(I["a"])([T["c"]],S.prototype,"DELETE_PROJECT_GROUP",null),Object(I["a"])([T["a"]],S.prototype,"getProjects",null),Object(I["a"])([T["a"]],S.prototype,"deleteProject",null),Object(I["a"])([T["a"]],S.prototype,"updateProjectName",null),Object(I["a"])([T["a"]],S.prototype,"moveProject",null),Object(I["a"])([T["a"]],S.prototype,"copyProject",null),Object(I["a"])([T["a"]],S.prototype,"createProjectGroup",null),Object(I["a"])([T["a"]],S.prototype,"deleteProjectGroup",null),Object(I["a"])([T["a"]],S.prototype,"updateProjectGroupName",null),S=Object(I["a"])([Object(T["b"])({dynamic:!0,store:G["a"],name:"project"})],S);var J=Object(T["f"])(S),U=n("99c2"),V=n("2340"),A=n("8a04"),N=n.n(A),L=Object(r["fb"])("data-v-242115bf");Object(r["G"])("data-v-242115bf");var B=Object(r["m"])("div",{class:"new-projects-title"},"选择下面的方式进行创建",-1),Q={class:"new-projects"},q=Object(r["m"])("img",{src:N.a},null,-1),K=Object(r["m"])("span",{class:"project-type ellipsis"},"PC端创建",-1),z={class:"project-header"},F={class:"project-title"},Y={class:"header-manager"},$={class:"search"},X=Object(r["m"])("i",{class:"v-icon-search"},null,-1),Z={class:"sort-type"},H=Object(r["m"])("i",{class:"el-icon-caret-bottom arrow-icon"},null,-1),W={class:"main-screen"};Object(r["E"])();var ee=L((function(e,t,n,c,a,u){var o=Object(r["M"])("router-link"),i=Object(r["M"])("g-drop-list-item"),l=Object(r["M"])("g-drop-list"),s=Object(r["M"])("g-drop-list-popover"),p=Object(r["M"])("my-screen"),d=Object(r["M"])("publish-screen");return Object(r["D"])(),Object(r["i"])("div",null,[B,Object(r["m"])("div",Q,[Object(r["m"])(o,{to:{name:"CreateScreen"},target:"_blank",class:"new-project"},{default:L((function(){return[q,K]})),_:1})]),Object(r["m"])("div",z,[Object(r["m"])("div",F,[Object(r["m"])("h2",null,Object(r["Q"])(e.group?e.group.name:""),1)]),Object(r["m"])("div",Y,[Object(r["m"])("div",$,[Object(r["cb"])(Object(r["m"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.searchText=t}),class:"search-input",placeholder:"搜索"},null,512),[[r["X"],e.searchText,void 0,{trim:!0}]])]),X,Object(r["m"])(s,null,{droplist:L((function(){return[Object(r["m"])(l,null,{default:L((function(){return[(Object(r["D"])(!0),Object(r["i"])(r["b"],null,Object(r["K"])(e.sorts,(function(t,n){return Object(r["D"])(),Object(r["i"])(i,{key:n,onClick:function(t){return e.onSortChange(n)}},{default:L((function(){return[Object(r["l"])(Object(r["Q"])(t),1)]})),_:2},1032,["onClick"])})),128))]})),_:1})]})),default:L((function(){return[Object(r["m"])("div",Z,[Object(r["m"])("span",{class:"sort-text",title:e.sorts[e.sort]},Object(r["Q"])(e.sorts[e.sort]),9,["title"]),H])]})),_:1})])]),Object(r["m"])("div",W,[(Object(r["D"])(!0),Object(r["i"])(r["b"],null,Object(r["K"])(e.screens,(function(e){return Object(r["D"])(),Object(r["i"])("div",{key:e.id},[Object(r["m"])(p,{screen:e},null,8,["screen"])])})),128))]),Object(r["m"])(d,{modelValue:e.visiblePublish,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.visiblePublish=t}),"project-id":e.publishAppId},null,8,["modelValue","project-id"])])})),te=n("c707"),ne=n.n(te),re=Object(r["fb"])("data-v-26bae5bc");Object(r["G"])("data-v-26bae5bc");var ce={class:"my-screen"},ae={class:"screen"},ue={class:"screen-info"},oe={class:"screen-edit"},ie={class:"screen-button"},le=Object(r["l"])(" 编辑 "),se={class:"main-button"},pe=Object(r["m"])("i",{class:"v-icon-move"},null,-1),de=Object(r["m"])("i",{class:"v-icon-copy"},null,-1),fe=Object(r["m"])("i",{class:"v-icon-delete"},null,-1),be=Object(r["m"])("i",{class:"v-icon-preview"},null,-1),ve=Object(r["m"])("i",{class:"v-icon-release"},null,-1),je={class:"screen-main"},Oe={class:"main-name"},me={class:"screen-name-input"},he=Object(r["m"])("i",{class:"v-icon-edit"},null,-1),ge={class:"publish-info"};Object(r["E"])();var ye=re((function(e,t,n,c,a,u){var o=Object(r["M"])("el-button"),i=Object(r["M"])("router-link"),l=Object(r["M"])("g-tooltip-popover");return Object(r["D"])(),Object(r["i"])("div",ce,[Object(r["m"])("div",ae,[Object(r["m"])("div",ue,[Object(r["m"])("div",{class:"screen-img",style:e.thumbnail},null,4),Object(r["m"])("div",oe,[Object(r["m"])("div",ie,[Object(r["m"])(i,{to:{name:"Screen",params:{projectId:e.screen.id}},target:"_blank",class:"edit-wrap"},{default:re((function(){return[Object(r["m"])(o,{type:"primary",size:"small",class:"edit"},{default:re((function(){return[le]})),_:1})]})),_:1},8,["to"]),Object(r["m"])("div",se,[Object(r["m"])(l,{content:"移动"},{default:re((function(){return[Object(r["m"])("span",{class:"button-span",draggable:"true",onDragstart:t[1]||(t[1]=function(){return e.onDragStart&&e.onDragStart.apply(e,arguments)}),onDragend:t[2]||(t[2]=function(){return e.onDragEnd&&e.onDragEnd.apply(e,arguments)})},[pe],32)]})),_:1}),Object(r["m"])(l,{content:"复制"},{default:re((function(){return[Object(r["m"])("span",{class:"button-span",onClick:t[3]||(t[3]=function(){return e.confirmCopyProject&&e.confirmCopyProject.apply(e,arguments)})},[de])]})),_:1}),Object(r["m"])(l,{content:"删除"},{default:re((function(){return[Object(r["m"])("span",{class:"button-span",onClick:t[4]||(t[4]=function(){return e.confirmDeleteProject&&e.confirmDeleteProject.apply(e,arguments)})},[fe])]})),_:1})])]),Object(r["m"])(i,{to:{name:"Screen",params:{projectId:e.screen.id}},target:"_blank",class:"preview"},{default:re((function(){return[Object(r["m"])(l,{content:"预览"},{default:re((function(){return[be]})),_:1})]})),_:1},8,["to"]),Object(r["m"])("div",{class:"public",onClick:t[5]||(t[5]=function(){return e.doPublish&&e.doPublish.apply(e,arguments)})},[Object(r["m"])(l,{content:"发布"},{default:re((function(){return[ve]})),_:1})])])]),Object(r["m"])("div",je,[Object(r["m"])("div",Oe,[Object(r["m"])(l,{placement:"top-start","show-after":1e3,content:e.screen.name},{default:re((function(){return[Object(r["m"])("div",me,[he,Object(r["cb"])(Object(r["m"])("input",{"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.screenName=t}),class:"input",onBlur:t[7]||(t[7]=function(){return e.onInputBlur&&e.onInputBlur.apply(e,arguments)})},null,544),[[r["X"],e.screenName,void 0,{trim:!0}]])])]})),_:1},8,["content"]),Object(r["m"])("div",ge,[Object(r["m"])("span",{class:["dot",{published:e.publishState.published}]},null,2),Object(r["m"])("span",null,Object(r["Q"])(e.publishState.text),1)])])])])])})),we=n("b641"),xe=Object(r["n"])({name:"MyScreen",props:{screen:{type:Object,required:!0}},setup:function(e){var t=J.deleteProject,n=J.copyProject,c=J.updateProjectName,a=Object(r["T"])(e.screen),u=a.id,o=a.name,i=a.groupId,l=a.share,s=a.config,p=Object(r["I"])(o.value),d=Object(r["I"])(o.value),f=Object(r["g"])((function(){return s.value.screenshot?{"background-image":"url("+s.value.screenshot+")"}:{"background-image":"url("+we["b"]+")","background-size":"50%","background-position":"center center","background-repeat":"no-repeat",filter:"grayscale(1)",opacity:.07}})),b=Object(r["g"])((function(){var e=!!l.value;return{published:e,text:e?"已发布":"未发布"}})),v=function(){var e=y()(x.a.mark((function e(){return x.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!p.value){e.next=12;break}return e.prev=1,e.next=4,c({id:u.value,newName:p.value});case 4:o.value=p.value,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),U["b"].error(U["b"].format(e.t0));case 10:e.next=13;break;case 12:p.value=d.value;case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),j=function(){n({pid:u.value,gid:i.value})},O=function(){U["a"].confirmAsync("<b>"+p.value+"</b> 删除后无法恢复，确认删除？",(function(){return t({pid:u.value,gid:i.value})}))},m=Object(r["q"])("dragStart"),h=Object(r["q"])("dragEnd"),g=Object(r["q"])("publish"),w=Object(we["c"])(),k=function(e){m();var t=e.dataTransfer;t&&(t.effectAllowed="move",t.setDragImage(w,30,30),t.setData("text",u.value+","+i.value))},E=function(){h()},P=function(){g(u.value)};return{name:o,thumbnail:f,publishState:b,screenName:p,oldScreenName:d,onInputBlur:v,confirmCopyProject:j,confirmDeleteProject:O,onDragStart:k,onDragEnd:E,doPublish:P}}});n("4ef9");xe.render=ye,xe.__scopeId="data-v-26bae5bc";var ke=xe,Ee=Object(r["fb"])("data-v-f4dd8a68");Object(r["G"])("data-v-f4dd8a68");var Pe={class:"share-setting","element-loading-background":"rgba(48, 54, 64, 0.8)"},De={class:"share-header"},Ce={class:"header-wp"},_e=Object(r["m"])("label",{class:"label-color"},"发布分享：",-1),Ie={class:"share-switch"},Te={class:"share-tutorial"},Ge=Object(r["l"])(" 查看教程 "),Me={class:"share-verify"},Re=Object(r["m"])("div",{class:"label-color"},"分享链接",-1),Se={class:"link-content"},Je=Object(r["m"])("div",{class:"label-color"},"访问密码",-1),Ue={class:"share-pwd"},Ve={class:"initial-dialog"};Object(r["E"])();var Ae=Ee((function(e,t,n,c,a,u){var o=Object(r["M"])("el-switch"),i=Object(r["M"])("router-link"),l=Object(r["M"])("el-tooltip"),s=Object(r["M"])("g-input"),p=Object(r["M"])("el-button"),d=Object(r["M"])("el-dialog"),f=Object(r["N"])("loading");return Object(r["D"])(),Object(r["i"])(d,{modelValue:e.visible,"onUpdate:modelValue":t[10]||(t[10]=function(t){return e.visible=t}),title:"发布",width:"435px",onClose:e.closeDialog},{default:Ee((function(){return[Object(r["cb"])(Object(r["m"])("div",Pe,[Object(r["m"])("div",De,[Object(r["m"])("div",Ce,[_e,Object(r["m"])("div",Ie,[Object(r["m"])(o,{modelValue:e.isPublish,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.isPublish=t})},null,8,["modelValue"])])]),Object(r["m"])("div",Te,[Object(r["m"])(i,{to:{name:"MyCase"},class:"share-tutorial-url",target:"_blank"},{default:Ee((function(){return[Ge]})),_:1})])]),Object(r["m"])("div",Me,[Re,Object(r["m"])("div",Se,[Object(r["m"])(l,{modelValue:e.showTooltip,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.showTooltip=t}),effect:"blue",placement:"top",content:"点击复制",manual:!0,disabled:!e.isPublish},{default:Ee((function(){return[Object(r["m"])("textarea",{value:e.shareUrl,class:"g-input share-input",readonly:"",placeholder:"开启发布分享后可获取访问链接",onClick:t[2]||(t[2]=function(){return e.copyUrl&&e.copyUrl.apply(e,arguments)}),onMouseenter:t[3]||(t[3]=function(t){return e.showTooltip=!0}),onMouseleave:t[4]||(t[4]=function(t){return e.showTooltip=!1})},null,40,["value"])]})),_:1},8,["modelValue","disabled"]),Object(r["m"])("div",{class:"func-btn",onClick:t[6]||(t[6]=function(){return e.copyUrl&&e.copyUrl.apply(e,arguments)})},"复制")]),Je,Object(r["m"])("div",Ue,[Object(r["m"])(s,{modelValue:e.password,"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.password=t}),type:e.passwordType,placeholder:"设置访问密码",class:"pwd-input"},null,8,["modelValue","type"]),Object(r["m"])("div",{class:"func-btn",onClick:t[8]||(t[8]=function(t){return e.passwordType?e.passwordType="":e.passwordType="password"})},Object(r["Q"])(e.passwordType?"查看":"隐藏"),1),Object(r["m"])("div",{class:"func-btn",onClick:t[9]||(t[9]=function(t){return e.password=""})}," 清空 ")])]),Object(r["m"])("div",Ve,[Object(r["m"])(p,{type:"primary",class:"publish-btn",onClick:e.publish},{default:Ee((function(){return[Object(r["l"])(Object(r["Q"])(e.isPublish?"发布大屏":"保存"),1)]})),_:1},8,["onClick"])])],512),[[f,e.loading]])]})),_:1},8,["modelValue","onClose"])})),Ne=n("6ddb"),Le=n("9613"),Be=Object(r["n"])({name:"PublishScreen",props:{projectId:{type:Number,required:!0},modelValue:{type:Boolean,required:!0}},emits:[Le["a"]],setup:function(e,t){var n=Object(r["I"])(!1),c=Object(r["I"])(!1),a=Object(r["I"])(!1),u=Object(r["I"])(""),o=Object(r["I"])("password"),i=Object(r["I"])(!0),l=Object(r["g"])((function(){return c.value?Object(R["j"])(e.projectId):""})),s=function(){c.value&&Object(r["u"])((function(){Object(Ne["a"])(l.value)&&U["b"].success("复制成功")}))},p=function(){n.value=!1,t.emit(Le["a"],!1)};Object(r["Z"])((function(){return e.modelValue}),(function(e){n.value=!!e})),Object(r["Z"])((function(){return e.projectId}),y()(x.a.mark((function t(){var n,r;return x.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(R["i"])(e.projectId);case 3:n=t.sent,0===n.data.code&&(r=n.data.data,i.value=!1,c.value=!!r.share,u.value=r.password),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))));var d=function(){var t=y()(x.a.mark((function t(){var n,r;return x.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,i.value=!0,n={share:l.value,password:u.value},t.next=5,Object(R["l"])(e.projectId,n);case 5:r=t.sent,0===r.data.code&&(i.value=!1,p(),U["b"].success(c.value?"发布成功":"保存成功")),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),U["b"].error("发布失败");case 12:return t.prev=12,i.value=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(){return t.apply(this,arguments)}}();return{visible:n,isPublish:c,shareUrl:l,showTooltip:a,password:u,copyUrl:s,closeDialog:p,loading:i,passwordType:o,publish:d}}});n("1411");Be.render=Ae,Be.__scopeId="data-v-f4dd8a68";var Qe=Be,qe=Object(r["n"])({name:"ProjectList",components:{MyScreen:ke,PublishScreen:Qe},props:{group:Object},setup:function(e){var t=Object(r["I"])(""),n=Object(r["I"])("name"),c=Object(r["I"])({name:"按名称排序",createAt:"按创建时间排序",updateAt:"按修改时间排序"}),a=Object(r["I"])(!1),u=Object(r["I"])(0),o=Object(r["S"])(e,"group"),i=function(e){n.value=e},l=Object(r["g"])((function(){var e=o.value?o.value.children:[];if(t.value){var r=t.value.toLowerCase();e=e.filter((function(e){return e.name.toLowerCase().includes(r)}))}return ne()(e,n.value)}));return Object(r["F"])("publish",(function(e){a.value=!0,u.value=e})),{searchText:t,sort:n,sorts:c,visiblePublish:a,publishAppId:u,onSortChange:i,screens:l}}});n("2c9e");qe.render=ee,qe.__scopeId="data-v-242115bf";var Ke=qe,ze=Object(r["n"])({name:"MyProject",components:{ProjectList:Ke},setup:function(){var e=J.getProjects,t=J.moveProject,n=J.createProjectGroup,c=J.deleteProjectGroup,a=J.updateProjectGroupName,u=Object(r["I"])(-1),o=Object(r["I"])(!0),i=Object(r["I"])(!1),l=Object(r["I"])(!1),s=Object(r["g"])((function(){return J.group})),p=Object(r["g"])((function(){return J.ungroup})),d=Object(r["g"])((function(){return J.groups})),f=Object(r["g"])((function(){return-1===u.value?s.value:0===u.value?p.value:d.value.find((function(e){return e.id===u.value}))})),b=function(e){u.value=e},v=function(e){if(i.value){var t=(e.target.value||"").trim();t||(i.value=!1)}},j=function(){var e=y()(x.a.mark((function e(t){var r;return x.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i.value){e.next=2;break}return e.abrupt("return");case 2:if(r=(t.target.value||"").trim(),!r){e.next=15;break}return e.prev=4,e.next=7,n(r);case 7:i.value=!1,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](4),U["b"].error(U["b"].format(e.t0));case 13:e.next=16;break;case 15:i.value=!1;case 16:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}(),O=function(e,t){if(t.editing){var n=(e.target.value||"").trim();n&&t.name!==n||(t.editing=!1)}},m=function(){var e=y()(x.a.mark((function e(t,n){var r;return x.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.editing){e.next=2;break}return e.abrupt("return");case 2:if(r=(t.target.value||"").trim(),!r||n.name===r){e.next=16;break}return e.prev=4,e.next=7,a({id:n.id,newName:r});case 7:n.name=r,n.editing=!1,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](4),U["b"].error(U["b"].format(e.t0));case 14:e.next=17;break;case 16:n.editing=!1;case 17:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t,n){return e.apply(this,arguments)}}(),h=function(e){U["a"].confirmAsync("<b>"+e.name+"</b> 删除后无法恢复，该分组中的可视化应用将全部移动到未分组，确认删除？",(function(){return c(e.id)}),{success:function(){b(p.value.id)}})};Object(r["F"])("dragStart",(function(){l.value=!0})),Object(r["F"])("dragEnd",(function(){l.value=!1}));var g=function(e){Object(V["a"])(e.target,"drag-enter")},w=function(e){Object(V["d"])(e.target,"drag-enter")},k=function(e,n){e.preventDefault(),Object(V["d"])(e.target,"drag-enter");var r=e.dataTransfer.getData("text");if(r){var c=r.split(",").map((function(e){return parseInt(e)})),a=c[0],u=c[1];u!==n.id&&t({pid:a,fromId:u,toId:n.id})}};return Object(r["A"])((function(){e().finally((function(){o.value=!1}))})),{loading:o,group:s,ungroup:p,groups:d,selectedGroup:f,selectedGroupId:u,adding:i,toggleProject:b,onAddInputBlur:v,addGroup:j,onEditInputBlur:O,editGroup:m,confirmDeleteGroup:h,draging:l,onDragEnter:g,onDragLeave:w,onDrop:k}}});n("df3b");ze.render=h,ze.__scopeId="data-v-7294b08d";t["default"]=ze},"48a0":function(e,t,n){var r=n("242e"),c=n("950a"),a=c(r);e.exports=a},"4ef9":function(e,t,n){"use strict";n("d740")},"642a":function(e,t,n){var r=n("966f"),c=n("3bb4"),a=n("20ec");function u(e){var t=c(e);return 1==t.length&&t[0][2]?a(t[0][0],t[0][1]):function(n){return n===e||r(n,e,t)}}e.exports=u},"656b":function(e,t,n){var r=n("e2e4"),c=n("f4d6");function a(e,t){t=r(t,e);var n=0,a=t.length;while(null!=e&&n<a)e=e[c(t[n++])];return n&&n==a?e:void 0}e.exports=a},"6a5c":function(e,t,n){var r=n("7948"),c=n("656b"),a=n("badf"),u=n("97d3"),o=n("d4b2"),i=n("b047f"),l=n("2164"),s=n("cd9d"),p=n("6747");function d(e,t,n){t=t.length?r(t,(function(e){return p(e)?function(t){return c(t,1===e.length?e[0]:e)}:e})):[s];var d=-1;t=r(t,i(a));var f=u(e,(function(e,n,c){var a=r(t,(function(t){return t(e)}));return{criteria:a,index:++d,value:e}}));return o(f,(function(e,t){return l(e,t,n)}))}e.exports=d},"72af":function(e,t,n){var r=n("99cd"),c=r();e.exports=c},"76dd":function(e,t,n){var r=n("ce86");function c(e){return null==e?"":r(e)}e.exports=c},7948:function(e,t){function n(e,t){var n=-1,r=null==e?0:e.length,c=Array(r);while(++n<r)c[n]=t(e[n],n,e);return c}e.exports=n},8604:function(e,t,n){var r=n("26e8"),c=n("e2c0");function a(e,t){return null!=e&&c(e,t,r)}e.exports=a},"8a04":function(e,t,n){e.exports=n.p+"img/new-project.ff7594fa.png"},"8c33":function(e,t,n){},9495:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c})),function(e){e[e["ungroup"]=0]="ungroup",e[e["group"]=1]="group"}(r||(r={}));var c=function(e,t,n){void 0===e&&(e=0),void 0===t&&(t=""),void 0===n&&(n=[]),this.id=e,this.name=t,this.children=n,this.type=r.ungroup}},"950a":function(e,t,n){var r=n("30c9");function c(e,t){return function(n,c){if(null==n)return n;if(!r(n))return e(n,c);var a=n.length,u=t?a:-1,o=Object(n);while(t?u--:++u<a)if(!1===c(o[u],u,o))break;return n}}e.exports=c},"966f":function(e,t,n){var r=n("7e64"),c=n("c05f"),a=1,u=2;function o(e,t,n,o){var i=n.length,l=i,s=!o;if(null==e)return!l;e=Object(e);while(i--){var p=n[i];if(s&&p[2]?p[1]!==e[p[0]]:!(p[0]in e))return!1}while(++i<l){p=n[i];var d=p[0],f=e[d],b=p[1];if(s&&p[2]){if(void 0===f&&!(d in e))return!1}else{var v=new r;if(o)var j=o(f,b,d,e,t,v);if(!(void 0===j?c(b,f,a|u,o,v):j))return!1}}return!0}e.exports=o},"97d3":function(e,t,n){var r=n("48a0"),c=n("30c9");function a(e,t){var n=-1,a=c(e)?Array(e.length):[];return r(e,(function(e,r,c){a[++n]=t(e,r,c)})),a}e.exports=a},"99cd":function(e,t){function n(e){return function(t,n,r){var c=-1,a=Object(t),u=r(t),o=u.length;while(o--){var i=u[e?o:++c];if(!1===n(a[i],i,a))break}return t}}e.exports=n},"9aff":function(e,t,n){var r=n("9638"),c=n("30c9"),a=n("c0983"),u=n("1a8c");function o(e,t,n){if(!u(n))return!1;var o=typeof t;return!!("number"==o?c(n)&&a(t,n.length):"string"==o&&t in n)&&r(n[t],e)}e.exports=o},"9b02":function(e,t,n){var r=n("656b");function c(e,t,n){var c=null==e?void 0:r(e,t);return void 0===c?n:c}e.exports=c},badf:function(e,t,n){var r=n("642a"),c=n("1838"),a=n("cd9d"),u=n("6747"),o=n("f9ce");function i(e){return"function"==typeof e?e:null==e?a:"object"==typeof e?u(e)?c(e[0],e[1]):r(e):o(e)}e.exports=i},c707:function(e,t,n){var r=n("5c69"),c=n("6a5c"),a=n("100e"),u=n("9aff"),o=a((function(e,t){if(null==e)return[];var n=t.length;return n>1&&u(e,t[0],t[1])?t=[]:n>2&&u(t[0],t[1],t[2])&&(t=[t[0]]),c(e,r(t,1),[])}));e.exports=o},cae7:function(e,t,n){var r=n("ffd6");function c(e,t){if(e!==t){var n=void 0!==e,c=null===e,a=e===e,u=r(e),o=void 0!==t,i=null===t,l=t===t,s=r(t);if(!i&&!s&&!u&&e>t||u&&o&&l&&!i&&!s||c&&o&&l||!n&&l||!a)return 1;if(!c&&!u&&!s&&e<t||s&&n&&a&&!c&&!u||i&&n&&a||!o&&a||!l)return-1}return 0}e.exports=c},ce86:function(e,t,n){var r=n("9e69"),c=n("7948"),a=n("6747"),u=n("ffd6"),o=1/0,i=r?r.prototype:void 0,l=i?i.toString:void 0;function s(e){if("string"==typeof e)return e;if(a(e))return c(e,s)+"";if(u(e))return l?l.call(e):"";var t=e+"";return"0"==t&&1/e==-o?"-0":t}e.exports=s},d4b2:function(e,t){function n(e,t){var n=e.length;e.sort(t);while(n--)e[n]=e[n].value;return e}e.exports=n},d740:function(e,t,n){},df3b:function(e,t,n){"use strict";n("030d")},e2c0:function(e,t,n){var r=n("e2e4"),c=n("d370"),a=n("6747"),u=n("c0983"),o=n("b218"),i=n("f4d6");function l(e,t,n){t=r(t,e);var l=-1,s=t.length,p=!1;while(++l<s){var d=i(t[l]);if(!(p=null!=e&&n(e,d)))break;e=e[d]}return p||++l!=s?p:(s=null==e?0:e.length,!!s&&o(s)&&u(d,s)&&(a(e)||c(e)))}e.exports=l},e2e4:function(e,t,n){var r=n("6747"),c=n("f608"),a=n("18d8"),u=n("76dd");function o(e,t){return r(e)?e:c(e,t)?[e]:a(u(e))}e.exports=o},e380:function(e,t,n){var r=n("7b83"),c="Expected a function";function a(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(c);var n=function(){var r=arguments,c=t?t.apply(this,r):r[0],a=n.cache;if(a.has(c))return a.get(c);var u=e.apply(this,r);return n.cache=a.set(c,u)||a,u};return n.cache=new(a.Cache||r),n}a.Cache=r,e.exports=a},e3f8:function(e,t,n){var r=n("656b");function c(e){return function(t){return r(t,e)}}e.exports=c},ef5d:function(e,t){function n(e){return function(t){return null==t?void 0:t[e]}}e.exports=n},f4d6:function(e,t,n){var r=n("ffd6"),c=1/0;function a(e){if("string"==typeof e||r(e))return e;var t=e+"";return"0"==t&&1/e==-c?"-0":t}e.exports=a},f608:function(e,t,n){var r=n("6747"),c=n("ffd6"),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,u=/^\w*$/;function o(e,t){if(r(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!c(e))||(u.test(e)||!a.test(e)||null!=t&&e in Object(t))}e.exports=o},f9ce:function(e,t,n){var r=n("ef5d"),c=n("e3f8"),a=n("f608"),u=n("f4d6");function o(e){return a(e)?r(u(e)):c(e)}e.exports=o},fb57:function(e,t,n){}}]);
//# sourceMappingURL=my-project.5836d022.js.map