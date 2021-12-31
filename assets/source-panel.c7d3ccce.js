import{a4 as d,a8 as g,ab as t,a2 as O,aF as C,ac as z,a9 as A,ae as I,bb as Y,bc as J,a7 as j,be as N,bh as D,a3 as l,ad as K,a5 as U,af as G,aY as n,b0 as v,aa as ne,b1 as T,aN as le,aO as ue}from"./vendor.1e2d2fe8.js";import{b as R,a5 as $,F as V,E as X,z as Z,_ as x,a6 as ee,a7 as te,C as Q,a8 as de,a9 as ae,a0 as se,aa as oe}from"./App.341e2996.js";import{I as re}from"./arrow-right.1b66f904.js";import{I as ce}from"./search.9850ab84.js";import{I as pe}from"./plus.a06f20f9.js";import{F as _e}from"./filter-collapse-panel.a29774f4.js";import"./arrow-left.01749b3f.js";import"./edit.7d8f354b.js";import"./delete.d2d84629.js";import"./release.b91fb24f.js";const fe={},me={t:"1639131563580",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4137",width:"64",height:"64"},ve=t("path",{d:"M250.52 209.31999969A398.44000031 398.44000031 0 0 1 512 111.99999969c220.92 0 400.00000031 179.08000031 400.00000031 400.00000031 0 85.44-26.80000031 164.64-72.40000031 229.60000031L711.99999969 512h120A319.99999969 319.99999969 0 0 0 290.40000031 281.12l-39.88000031-71.80000031z m522.96 605.36000062A398.44000031 398.44000031 0 0 1 512 912.00000031C291.08 912.00000031 111.99999969 732.92 111.99999969 512c0-85.44 26.80000031-164.64 72.40000031-229.60000031L312.00000031 512H192.00000031a319.99999969 319.99999969 0 0 0 541.59999938 230.88l39.88000031 71.80000031z","p-id":"4138"},null,-1),he=[ve];function ge(e,s){return d(),g("svg",me,he)}var ie=R(fe,[["render",ge]]);const Fe=O({name:"DisplayApiStatus",props:{status:{type:String,default:$.incomplete},loadingText:{type:String,default:"\u5339\u914D\u4E2D"},successText:{type:String,default:"\u5339\u914D\u6210\u529F"},failedText:{type:String,default:"\u672A\u627E\u5230\u5B57\u6BB5"},completedText:{type:String,default:"\u914D\u7F6E\u5B8C\u6210"},incompleteText:{type:String,default:"\u914D\u7F6E\u672A\u5B8C\u6210"},optional:{type:Boolean,default:!1}},setup(e){const s=C(()=>e.status===$.loading?e.loadingText:e.status===$.success?e.successText:e.status===$.completed?e.completedText:e.optional?"\u53EF\u9009":e.status===$.failed?e.failedText:e.status===$.incomplete?e.incompleteText:e.status);return{apiStatus:$,statusText:s}}}),W=e=>(Y("data-v-494a8d1a"),e=e(),J(),e),be=W(()=>t("i",{class:"status-icon validating"},null,-1)),Ce=W(()=>t("i",{class:"status-icon validating"},null,-1)),Ee=W(()=>t("i",{class:"status-icon validating"},null,-1)),De={key:2,class:"status-icon --success"},we={class:"status-text"};function ye(e,s,E,h,u,r){return d(),g("div",null,[e.status===e.apiStatus.loading?(d(),g(z,{key:0},[be,Ce,Ee],64)):e.status===e.apiStatus.success||e.status===e.apiStatus.completed?(d(),g("i",{key:1,class:A(["status-icon",`--${e.status}`])},null,2)):e.optional?(d(),g("i",De)):(d(),g("i",{key:3,class:A(["status-icon",`--${e.status}`])},null,2)),t("span",we,I(e.statusText),1)])}var $e=R(Fe,[["render",ye],["__scopeId","data-v-494a8d1a"]]);const Se=O({name:"FilterConfig",components:{IconPlus:pe,FilterCollapsePanel:_e},setup(){const e=j(void 0),s=j(null),E=j(null),h=j({visible:!1,top:"4px",from:0,to:0}),u=N("apiDataConfig"),r=N("refreshData"),p=C(()=>{const a=u.value.pageFilters.map(o=>o.id);return V.dataFilters.filter(o=>!a.includes(o.id)).map(o=>({value:o.id,label:o.name}))}),_=C(()=>u.value.pageFilters.reduce((a,o)=>{const c=V.dataFilters.find(H=>H.id==o.id);return c&&a.push(c),a},[])),m=C(()=>{const a=[...X.coms,...X.subComs],o=Object.create(null);return a.forEach(c=>{for(const H in c.apiData)c.apiData[H].pageFilters.forEach(L=>{o[L.id]?(o[L.id].ids.push(c.id),o[L.id].names.push(c.alias)):o[L.id]={ids:[c.id],names:[c.alias]}})}),o}),F=C(()=>u.value.pageFilters.reduce((a,o)=>(a[o.id]=o.enabled,a),{})),f=a=>{u.value.pageFilters.push({id:a,enabled:!0}),r()},w=(a,o)=>{u.value.pageFilters.find(c=>c.id===a).enabled=o,r()},k=(a,o)=>{const c=a.trim();c&&o.name!==c&&(o.name=c,o.id>0&&V.updateFilterName(o))},S=()=>{s.value||(s.value={id:0,name:"\u65B0\u5EFA\u8FC7\u6EE4\u5668",code:"return data;",origin:"return data;",projectId:0,createAt:"",updateAt:""})},i=a=>{a>0?(u.value.pageFilters=u.value.pageFilters.filter(o=>o.id!==a),r()):s.value=null},y=async a=>{if(a.id>0)await V.updateFilter(a),F.value[a.id]&&r();else{const o=await V.createFilter(a);u.value.pageFilters.push({id:o,enabled:!0}),s.value=null,r()}},b=()=>{const{from:a,to:o}=h.value;if(a!==o){const c=u.value.pageFilters;c.splice(o,0,...c.splice(a,1)),r()}},B=(a,o,c)=>{h.value.visible=a,h.value.top=`${c.offsetTop-6}px`,a?h.value.to=o:(h.value.from=o,b())},M=()=>{B(!0,_.value.length,E.value)};return D("usedFilters",m),D("enabledFilters",F),D("onUsedChange",w),D("editFilterName",k),D("removeFilter",i),D("saveFilter",y),D("updateIndicator",B),{filterId:e,apiDataConfig:u,dataFilters:p,selectedFilters:_,newDataFilter:s,addPanelRef:E,dragInfo:h,selectFilter:f,addFilter:S,dragEnter:M}}}),ke={class:"filter-list"},Be=t("span",{class:"datav-empty"},"\u8FC7\u6EE4\u5668\u5217\u8868\u4E3A\u7A7A\uFF0C\u8BF7\u521B\u5EFA\u540E\u4F7F\u7528",-1),Ae=t("div",{class:"filter-dragging-wp"},null,-1);function Ie(e,s,E,h,u,r){const p=l("filter-collapse-panel"),_=l("n-select"),m=l("IconPlus"),F=l("n-icon");return d(),g("div",{class:A(["filter-wp",{"--disabled":!e.apiDataConfig.config.useFilter}])},[t("div",ke,[(d(!0),g(z,null,K(e.selectedFilters,(f,w)=>(d(),U(p,{key:f.id,index:w,"data-filter":f},null,8,["index","data-filter"]))),128)),e.newDataFilter?(d(),U(p,{key:0,"data-filter":e.newDataFilter,index:e.selectedFilters.length,"is-new":!0,draggable:!1,"has-feedback":!1,removable:!0},null,8,["data-filter","index"])):G("",!0),t("div",{ref:"addPanelRef",class:"add-filter",onDragenter:s[1]||(s[1]=(...f)=>e.dragEnter&&e.dragEnter(...f))},[n(_,{value:e.filterId,options:e.dataFilters,filterable:"","fallback-option":!1,placeholder:"\u6DFB\u52A0\u8FC7\u6EE4\u5668",class:"datav-new-select filter-select","onUpdate:value":e.selectFilter},{empty:v(()=>[Be]),_:1},8,["value","options","onUpdate:value"]),t("div",{class:"new-filter-btn",onClick:s[0]||(s[0]=(...f)=>e.addFilter&&e.addFilter(...f))},[n(F,{class:"icon-add"},{default:v(()=>[n(m)]),_:1})])],544)]),Ae,t("div",{class:"drag-indicator",style:ne({display:e.dragInfo.visible?"block":"none",top:e.dragInfo.top})},null,4)],2)}var Ne=R(Se,[["render",Ie]]);const je=O({name:"FieldGrid",props:{fields:{type:Object}}}),q=e=>(Y("data-v-c24bffaa"),e=e(),J(),e),Te={key:0,class:"field-wp"},Pe=q(()=>t("div",{class:"field-info"},"\u6570\u636E\u76F8\u5E94\u7ED3\u679C\u5E94\u4E3A\u5217\u8868\uFF0C\u5217\u8868\u5143\u7D20\u5305\u542B\u5982\u4E0B\u5B57\u6BB5",-1)),Ue={class:"field-grid"},Re=q(()=>t("div",{class:"field-item field-title"},"\u5B57\u6BB5",-1)),Me=q(()=>t("div",{class:"field-item field-title"},"\u6620\u5C04",-1)),Oe=q(()=>t("div",{class:"field-item field-title"},"\u8BF4\u660E",-1)),ze={class:"field-item"},Ve={class:"field-item"},Le={class:"field-item"};function Ge(e,s,E,h,u,r){return e.fields?(d(),g("div",Te,[Pe,t("div",Ue,[Re,Me,Oe,(d(!0),g(z,null,K(e.fields,(p,_)=>(d(),g(z,{key:_},[t("div",ze,I(_),1),t("div",Ve,I(p.map||"-"),1),t("div",Le,I(p.description||"-"),1)],64))),128))])])):G("",!0)}var qe=R(je,[["render",Ge],["__scopeId","data-v-c24bffaa"]]);const He=O({name:"SourceDrawer",components:{FilterConfig:Ne,FieldGrid:qe,IconSearch:ce,IconRefresh:ie,DsStaticEditor:Z(()=>x(()=>import("./ds-static-editor.29cc1305.js"),["assets/ds-static-editor.29cc1305.js","assets/App.341e2996.js","assets/App.0e26ef44.css","assets/vendor.1e2d2fe8.js"])),DsApiEditor:Z(()=>x(()=>import("./ds-api-editor.9d6110a2.js"),["assets/ds-api-editor.9d6110a2.js","assets/ds-api-editor.55953e49.css","assets/App.341e2996.js","assets/App.0e26ef44.css","assets/vendor.1e2d2fe8.js"]))},setup(){const e=j(!1),s=j(!1),E=te,h=Object.entries(ee()).map(([i,y])=>({value:i,label:y})),u=()=>{e.value=!0},r=N("com"),p=N("apiConfig"),_=N("apiDataConfig"),m=N("apiName"),F=C(()=>{var y;const i=Q.dataStatusMap[r.value.id];return i?(y=i[m])!=null?y:{}:{}}),f=C(()=>{const i=Q.originMap[r.value.id];return i?i[m]:""}),w=i=>{switch(i){case te.api:de(_.value.config);break}},k=C(()=>{const i=ae.dataMap[r.value.id];return i?i[m]:""}),S=async()=>{await se(r.value.id,m,p.value,_.value)};return D("refreshData",S),D("dataStatus",F),{visible:e,visiblePreview:s,apiType:E,datasources:h,apiConfig:p,apiDataConfig:_,dataStatus:F,dataOrign:f,resData:k,open:u,changeSource:w,refreshData:S}}}),Ye=t("p",{class:"source-drawer-title"},"\u8BBE\u7F6E\u6570\u636E\u6E90",-1),Je={class:"datasource-selector"},Ke=t("label",{class:"datasource-selector-title"},"\u6570\u636E\u6E90\u7C7B\u578B",-1),Qe={class:"datasource-select"},We={class:"datav-new-select-wp"},Xe={class:"ds-response-btn"},Ze=T(" \u9884\u89C8\u6570\u636E\u6E90\u8FD4\u56DE\u7ED3\u679C "),xe={class:"ds-preview-content"},et=t("span",{class:"use-filter-text"},"\u6570\u636E\u8FC7\u6EE4\u5668",-1),tt=t("span",{class:"tutorial-popup"},"\u6559\u7A0B",-1),at=t("span",null,"\u6570\u636E\u54CD\u5E94\u7ED3\u679C",-1),st={class:"data-response"};function ot(e,s,E,h,u,r){const p=l("n-select"),_=l("ds-static-editor"),m=l("ds-api-editor"),F=l("IconSearch"),f=l("n-icon"),w=l("g-monaco-editor"),k=l("n-popover"),S=l("n-checkbox"),i=l("filter-config"),y=l("field-grid"),b=l("IconRefresh"),B=l("n-drawer-content"),M=l("n-drawer");return d(),U(M,{show:e.visible,"onUpdate:show":s[3]||(s[3]=a=>e.visible=a),width:"500px",class:"source-drawer",to:"#edit-main-wp"},{default:v(()=>[n(B,{closable:""},{header:v(()=>[Ye]),default:v(()=>[t("div",{class:A(["step-title",{"--error":!!e.dataStatus.api}])}," \u6570\u636E\u6E90 ",2),t("div",Je,[Ke,t("div",Qe,[t("div",We,[n(p,{value:e.apiDataConfig.type,"onUpdate:value":[s[0]||(s[0]=a=>e.apiDataConfig.type=a),e.changeSource],options:e.datasources,filterable:"",class:"datav-new-select"},null,8,["value","options","onUpdate:value"])])])]),e.apiDataConfig.type===e.apiType.static?(d(),U(_,{key:0})):e.apiDataConfig.type===e.apiType.api?(d(),U(m,{key:1})):G("",!0),n(k,{show:e.visiblePreview,"onUpdate:show":s[1]||(s[1]=a=>e.visiblePreview=a),placement:"left",width:400,class:"editor-popover",style:{"--n-color":"#0000"}},{trigger:v(()=>[t("div",Xe,[n(f,{class:"refresh-btn"},{default:v(()=>[n(F)]),_:1}),Ze])]),default:v(()=>[t("div",xe,[n(w,{language:"json","read-only":!0,"auto-format":!0,height:180,code:e.dataOrign},null,8,["code"])])]),_:1},8,["show"]),t("div",{class:A(["step-title",{"--error":!!e.dataStatus.filter}])},[n(S,{checked:e.apiDataConfig.config.useFilter,"onUpdate:checked":s[2]||(s[2]=a=>e.apiDataConfig.config.useFilter=a),class:"use-filter-btn"},null,8,["checked"]),et,tt],2),n(i),n(y,{fields:e.apiConfig.fields},null,8,["fields"]),t("div",{class:A(["step-title",{"--error":!!e.dataStatus.api||!!e.dataStatus.filter}])},[at,n(f,{class:"refresh-btn",onClick:e.refreshData},{default:v(()=>[n(b)]),_:1},8,["onClick"])],2),t("div",st,[n(w,{language:"json","read-only":!0,"auto-format":!0,code:e.resData},null,8,["code"])])]),_:1})]),_:1},8,["show"])}var it=R(He,[["render",ot]]);const nt=O({name:"SourcePanel",components:{DisplayApiStatus:$e,SourceDrawer:it,IconArrowRight:re,IconRefresh:ie},props:{apiName:{type:String,required:!0},activeName:String,collapse:Boolean},setup(e){const s=C(()=>e.apiName===e.activeName),E=j(null),h=ee(),u=N("com"),r=C(()=>u.value.apis[e.apiName]),p=C(()=>u.value.apiData[e.apiName]);D("apiConfig",r),D("apiDataConfig",p),D("apiName",e.apiName);const _=C(()=>{const i=ae.dataMap[u.value.id];return i?i[e.apiName]:""}),m=C(()=>{const i=Q.fieldStatusMap[u.value.id];return i?i[e.apiName]:{}}),F=C(()=>{const i=Object.values(m.value);return i.includes(oe.loading)?$.loading:i.includes(oe.failed)?$.incomplete:$.completed}),f=N("changePanel");return{visible:s,sourceDrawerRef:E,datasources:h,com:u,apiConfig:r,apiDataConfig:p,fieldsStatus:m,totalStatus:F,datav_data:_,toggle:()=>{e.collapse&&f(e.apiName)},openSourceDrawer:()=>{var i;(i=E.value)==null||i.open()},refreshData:()=>{se(u.value.id,e.apiName,r.value,p.value)}}}}),P=e=>(Y("data-v-11637a49"),e=e(),J(),e),lt={class:"api-editor-title"},ut={class:"api-status success"},dt={class:"attr-source-wp"},rt={class:"data-attr-table-container"},ct={class:"data-attr-table"},pt=P(()=>t("thead",{class:"table-head"},[t("tr",{class:"table-head-row"},[t("th",{class:"th-item column-item attr-name"}," \u5B57\u6BB5 "),t("th",{class:"th-item column-item attr-value"}," \u6620\u5C04 "),t("th",{class:"th-item column-item attr-status"}," \u72B6\u6001 ")])],-1)),_t={class:"table-body"},ft={class:"column-item attr-name"},mt={class:"ellipsis2"},vt={class:"column-item attr-value"},ht={class:"column-item attr-status"},gt={key:1,class:"table-body-row"},Ft=P(()=>t("td",{class:"column-item attr-name"},[t("span",null,"\u4EFB\u610F")],-1)),bt=P(()=>t("td",{class:"column-item attr-value"},null,-1)),Ct={class:"column-item attr-status"},Et={class:"data-source"},Dt=P(()=>t("div",{class:"data-result-title"}," \u6570\u636E\u54CD\u5E94\u7ED3\u679C ",-1)),wt={class:"auto-update-config"},yt=T(" \u81EA\u52A8\u66F4\u65B0\u9009\u9879 "),$t=T(" \u79D2\u4E00\u6B21 "),St={class:"data-flow-wp"},kt={class:"ds-line"},Bt={class:"ds-title"},At={class:"ds-type-text"},It=T(" \u914D\u7F6E\u6570\u636E\u6E90 "),Nt={class:"ds-line mt5"},jt=P(()=>t("span",null,"\u6570\u636E\u54CD\u5E94\u7ED3\u679C ( \u53EA\u8BFB ) ",-1)),Tt=T(" \u5237\u65B0\u6570\u636E "),Pt={class:"ds-dots"},Ut=P(()=>t("span",{class:"ds-dot"},null,-1)),Rt=P(()=>t("span",{class:"ds-dot"},null,-1)),Mt={class:"data-response"};function Ot(e,s,E,h,u,r){const p=l("IconArrowRight"),_=l("n-icon"),m=l("display-api-status"),F=l("n-tooltip"),f=l("new-input"),w=l("n-checkbox"),k=l("n-button"),S=l("IconRefresh"),i=l("g-monaco-editor"),y=l("source-drawer");return d(),g("div",{class:A(["api-editor",{"--disable-fold":!e.collapse,"--fold":e.collapse&&e.visible}])},[t("div",lt,[t("div",{class:"api-desc ellipsis2",onClick:s[0]||(s[0]=(...b)=>e.toggle&&e.toggle(...b))},[e.collapse?(d(),U(_,{key:0,class:"api-fold-icon"},{default:v(()=>[n(p)]),_:1})):G("",!0),T(" "+I(e.apiConfig.description||"\u6570\u636E\u63A5\u53E3"),1)]),t("div",ut,[n(m,{status:e.totalStatus,"success-text":"\u914D\u7F6E\u5B8C\u6210"},null,8,["status"])])]),le(t("div",dt,[t("div",rt,[t("table",ct,[pt,t("tbody",_t,[Object.keys(e.apiConfig.fields).length>0?(d(!0),g(z,{key:0},K(e.apiConfig.fields,(b,B)=>(d(),g("tr",{key:B,class:"table-body-row"},[t("td",ft,[n(F,{placement:"left"},{trigger:v(()=>[t("span",mt,I(B),1)]),default:v(()=>[T(" "+I(b.description),1)]),_:2},1024)]),t("td",vt,[n(f,{"model-value":b.map,placeholder:"\u53EF\u81EA\u5B9A\u4E49",class:"attr-input",onChange:M=>b.map=M},null,8,["model-value","onChange"])]),t("td",ht,[n(m,{status:e.fieldsStatus[B],optional:b.optional},null,8,["status","optional"])])]))),128)):(d(),g("tr",gt,[Ft,bt,t("td",Ct,[n(m,{status:"completed"})])]))])])]),t("div",Et,[Dt,t("div",wt,[n(w,{checked:e.apiConfig.useAutoUpdate,"onUpdate:checked":s[1]||(s[1]=b=>e.apiConfig.useAutoUpdate=b),class:"auto-update-checkbox"},{default:v(()=>[yt]),_:1},8,["checked"]),n(f,{"model-value":e.apiConfig.autoUpdate,type:"number",disabled:!e.apiConfig.useAutoUpdate,class:"update-interval-input",onChange:s[2]||(s[2]=b=>e.apiConfig.autoUpdate=b)},null,8,["model-value","disabled"]),$t]),t("div",St,[t("div",kt,[t("div",Bt,[t("span",At,I(e.datasources[e.apiDataConfig.type]),1)]),n(k,{size:"tiny",class:"ds-action-btn",onClick:e.openSourceDrawer},{default:v(()=>[It]),_:1},8,["onClick"])]),t("div",Nt,[jt,n(F,{placement:"left"},{trigger:v(()=>[n(_,{class:"refresh-btn",onClick:e.refreshData},{default:v(()=>[n(S)]),_:1},8,["onClick"])]),default:v(()=>[Tt]),_:1})]),t("div",Pt,[t("span",{class:A(["ds-dot",[e.totalStatus==="completed"?"active":"error"]])},null,2),Ut,Rt])]),t("div",Mt,[n(i,{language:"json","read-only":!0,"auto-format":!0,code:e.datav_data,height:250,"full-screen-title":"\u6570\u636E\u54CD\u5E94\u7ED3\u679C"},null,8,["code"])])])],512),[[ue,e.visible]]),n(y,{ref:"sourceDrawerRef"},null,512)],2)}var Xt=R(nt,[["render",Ot],["__scopeId","data-v-11637a49"]]);export{Xt as default};
