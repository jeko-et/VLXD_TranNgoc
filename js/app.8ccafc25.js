(function(M){function t(t){for(var i,n,j=t[0],I=t[1],c=t[2],r=0,o=[];r<j.length;r++)n=j[r],u[n]&&o.push(u[n][0]),u[n]=0;for(i in I)Object.prototype.hasOwnProperty.call(I,i)&&(M[i]=I[i]);A&&A(t);while(o.length)o.shift()();return g.push.apply(g,c||[]),e()}function e(){for(var M,t=0;t<g.length;t++){for(var e=g[t],i=!0,j=1;j<e.length;j++){var I=e[j];0!==u[I]&&(i=!1)}i&&(g.splice(t--,1),M=n(n.s=e[0]))}return M}var i={},u={1:0},g=[];function n(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return M[t].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=M,n.c=i,n.d=function(M,t,e){n.o(M,t)||Object.defineProperty(M,t,{configurable:!1,enumerable:!0,get:e})},n.r=function(M){Object.defineProperty(M,"__esModule",{value:!0})},n.n=function(M){var t=M&&M.__esModule?function(){return M["default"]}:function(){return M};return n.d(t,"a",t),t},n.o=function(M,t){return Object.prototype.hasOwnProperty.call(M,t)},n.p="/";var j=window["webpackJsonp"]=window["webpackJsonp"]||[],I=j.push.bind(j);j.push=t,j=j.slice();for(var c=0;c<j.length;c++)t(j[c]);var A=I;g.push([11,0]),e()})({"/6EM":function(M,t,e){},11:function(M,t,e){M.exports=e("JJXq")},"5xMd":function(M,t,e){"use strict";var i=e("s8w7"),u=e.n(i);u.a},DY7K:function(M,t,e){"use strict";var i=e("/6EM"),u=e.n(i);u.a},F8gN:function(M,t,e){},Hl11:function(M,t,e){},JJXq:function(M,t,e){"use strict";e.r(t);var i={};e.d(i,"getRecs",function(){return MM}),e.d(i,"getCols",function(){return tM}),e.d(i,"getFields",function(){return eM}),e.d(i,"getIsLoading",function(){return iM}),e.d(i,"getTitle",function(){return uM}),e.d(i,"getSelected",function(){return gM}),e.d(i,"getIsModalOpened",function(){return nM}),e.d(i,"getEditingRec",function(){return jM});var u={};e.d(u,"setRecs",function(){return AM}),e.d(u,"setIsLoading",function(){return rM}),e.d(u,"setSelected",function(){return oM}),e.d(u,"setEditingRec",function(){return NM}),e.d(u,"discardEditingRec",function(){return aM}),e.d(u,"setIsModalOpened",function(){return xM});var g={};e.d(g,"fetchRecs",function(){return lM}),e.d(g,"deleteRecs",function(){return dM}),e.d(g,"updateRec",function(){return zM});var n=e("MVZn"),j=e.n(n),I=e("UzXO"),c=e("Kw5r"),A=e("4IOb");c["a"].use(A["H"],{cfg:{},iconSet:I["a"],components:{QLayout:A["l"],QLayoutHeader:A["o"],QLayoutDrawer:A["m"],QPageContainer:A["u"],QPage:A["t"],QToolbar:A["D"],QToolbarTitle:A["E"],QBtn:A["d"],QIcon:A["g"],QList:A["p"],QListHeader:A["q"],QItem:A["i"],QItemMain:A["j"],QItemSide:A["k"],QSearch:A["v"],QTable:A["z"],QAlert:A["c"],QSpinner:A["x"],QSpinnerPie:A["y"],QLayoutFooter:A["n"],QSelect:A["w"],QTh:A["C"],QTr:A["F"],QTd:A["B"],QTableColumns:A["A"],QModal:A["r"],QModalLayout:A["s"],QField:A["f"],QInput:A["h"],QChip:A["e"]},directives:{Ripple:A["G"],CloseOverlay:A["a"]},plugins:{Notify:A["b"]}});var r=e("lIOY");Object(r["a"])("/service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.")},cached:function(M){console.log("Content has been cached for offline use.")},updated:function(M){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(M){console.error("Error during service worker registration:",M)}});e("QBu7"),e("flf9"),e("Hl11"),e("fm0S");var o=function(){var M=this,t=M.$createElement,e=M._self._c||t;return e("div",{attrs:{id:"q-app"}},[e("router-view")],1)},N=[];o._withStripped=!0;var a={name:"App"},x=a,D=(e("ZL7j"),e("KHd+")),L=Object(D["a"])(x,o,N,!1,null,null,null),T=L.exports,s=e("jE9Z"),y=function(){var M=this,t=M.$createElement,e=M._self._c||t;return e("div",{staticClass:"fixed-center text-center"},[M._m(0),M._m(1),e("q-btn",{staticStyle:{width:"200px"},attrs:{color:"secondary"},on:{click:function(t){M.$router.push("/")}}},[M._v("Go back")])],1)},E=[function(){var M=this,t=M.$createElement,i=M._self._c||t;return i("p",[i("img",{staticStyle:{width:"30vw","max-width":"150px"},attrs:{src:e("xOSM")}})])},function(){var M=this,t=M.$createElement,e=M._self._c||t;return e("p",{staticClass:"text-faded"},[M._v("Sorry, nothing here..."),e("strong",[M._v("(404)")])])}];y._withStripped=!0;var l={},d=Object(D["a"])(l,y,E,!1,null,null,null),z=d.exports,S=function(){var M=this,t=M.$createElement,e=M._self._c||t;return e("q-layout",{attrs:{view:"hHh Lpr fFf"}},[e("q-layout-header",[e("q-toolbar",{attrs:{color:"green",glossy:"mat"===M.$q.theme,inverted:"ios"===M.$q.theme}},[e("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(t){M.leftDrawerOpen=!M.leftDrawerOpen}}},[e("q-icon",{attrs:{name:"menu"}})],1),e("q-toolbar-title",[M._v("\n        VLXD Trần Ngọc\n      ")])],1)],1),e("q-layout-footer",[e("div",{staticClass:"text-white et-footer text-weight-light text-center"},[e("small",[e("cite",[M._v("© Copyright 2018 Elitetech Vietnam Co., Ltd. All rights reserved.")])])])]),e("q-layout-drawer",{attrs:{"content-class":"mat"===M.$q.theme?"bg-grey-2":null},model:{value:M.leftDrawerOpen,callback:function(t){M.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[e("q-list",{attrs:{"no-border":"",link:"","inset-delimiter":""}},[e("q-item",{attrs:{to:"/products"}},[e("q-item-side",{attrs:{icon:"shopping_basket"}}),e("q-item-main",{attrs:{label:"Sản Phẩm",sublabel:"Liệt Kê & Tìm Kiếm Sản Phẩm"}})],1),e("q-item",{nativeOn:{click:function(t){M.openURL("https://github.com/quasarframework/")}}},[e("q-item-side",{attrs:{icon:"code"}}),e("q-item-main",{attrs:{label:"GitHub",sublabel:"github.com/quasarframework"}})],1),e("q-item",{nativeOn:{click:function(t){M.openURL("https://discord.gg/5TDhbDg")}}},[e("q-item-side",{attrs:{icon:"chat"}}),e("q-item-main",{attrs:{label:"Discord Chat Channel",sublabel:"https://discord.gg/5TDhbDg"}})],1),e("q-item",{nativeOn:{click:function(t){M.openURL("http://forum.quasar-framework.org")}}},[e("q-item-side",{attrs:{icon:"record_voice_over"}}),e("q-item-main",{attrs:{label:"Forum",sublabel:"forum.quasar-framework.org"}})],1),e("q-item",{nativeOn:{click:function(t){M.openURL("https://twitter.com/quasarframework")}}},[e("q-item-side",{attrs:{icon:"rss feed"}}),e("q-item-main",{attrs:{label:"Twitter",sublabel:"@quasarframework"}})],1)],1)],1),e("q-page-container",[e("router-view")],1)],1)},p=[];S._withStripped=!0;var O={name:"LayoutDefault",data:function(){return{leftDrawerOpen:this.$q.platform.is.desktop}},methods:{openURL:A["I"]}},C=O,f=(e("DY7K"),Object(D["a"])(C,S,p,!1,null,null,null)),k=f.exports,Y=function(){var M=this,t=M.$createElement,e=M._self._c||t;return e("div",[e("et-grid",{attrs:{type:"product"}}),e("et-modal",{attrs:{type:"product"}})],1)},m=[];Y._withStripped=!0;var Q=function(){var M=this,t=M.$createElement,e=M._self._c||t;return e("q-table",{attrs:{data:M.getRecs,columns:M.getCols,filter:M.filter,"rows-per-page-options":[15,20,25,50,0],loading:M.getIsLoading,pagination:M.pagination,"selected-rows-label":M.selectedLabel,selected:M.selected,selection:"multiple","table-class":"et-grid",dense:"","row-key":"id",color:"purple",separator:"cell","no-results-label":"Không tìm thấy kết quả nào ...","rows-per-page-label":"Hiện"},on:{"update:pagination":function(t){M.pagination=t},"update:selected":function(t){M.selected=t}},scopedSlots:M._u([{key:"top-left",fn:function(t){return[e("q-btn",{staticClass:"q-mr-sm",attrs:{loading:M.getIsLoading,color:"primary"},on:{click:M.fetchRecs}},[e("q-icon",{attrs:{name:"refresh",size:"25px"}}),e("q-spinner-pie",{attrs:{slot:"loading",size:"25px"},slot:"loading"})],1),e("q-btn",{staticClass:"q-mr-sm",attrs:{"wait-for-ripple":"",disabled:M.getIsLoading,color:"green"},on:{click:function(t){M.setEditingRec({})}}},[e("q-icon",{attrs:{name:"add",size:"25px"}})],1),e("q-icon",{attrs:{name:"shopping_basket",size:"25px"}}),e("cite",[M._v(M._s(M.getTitle))])]}},{key:"top-right",fn:function(t){return[e("div",{staticClass:"q-mr-sm",staticStyle:{width:"300px"}},[e("q-search",{attrs:{clearable:!0,placeholder:"Tìm kiếm ...",color:"blue",inverted:""},model:{value:M.filter,callback:function(t){M.filter=t},expression:"filter"}})],1),e("q-btn",{attrs:{flat:"",round:"",dense:"",icon:t.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:t.toggleFullscreen}})]}},{key:"body-cell-edit",fn:function(t){return e("q-td",{staticClass:"q-pa-none",attrs:{"auto-width":"",props:t}},[e("q-btn",{attrs:{round:"",flat:"","wait-for-ripple":"",dense:"",icon:"settings",color:"orange-10"},on:{click:function(e){M.setEditingRec(t.row)}}})],1)}},{key:"top-selection",fn:function(t){return[e("div",{staticClass:"q-table-control"},[e("q-btn",{staticStyle:{"margin-right":"5px"},attrs:{loading:M.getIsLoading,color:"red"},on:{click:M.deleteRecs}},[e("q-icon",{attrs:{name:"delete",size:"25px"}}),e("q-spinner-pie",{attrs:{slot:"loading",size:"25px"},slot:"loading"})],1),e("q-icon",{attrs:{name:"shopping_basket",size:"25px"}}),e("cite",[M._v(M._s(M.getTitle))])],1)]}}])})},w=[];Q._withStripped=!0;var h=e("L2JU"),b={props:{type:{default:"xxx",type:String}},data:function(){return{filter:"",pagination:{sortBy:null,descending:!1,page:1,rowsPerPage:25}}},computed:j()({},Object(h["d"])({getRecs:function(M,t){return t[this.type+"/getRecs"]},getCols:function(M,t){return t[this.type+"/getCols"]},getIsLoading:function(M,t){return t[this.type+"/getIsLoading"]},getTitle:function(M,t){return t[this.type+"/getTitle"]}}),{selected:{get:function(){return this.$store.getters[this.type+"/getSelected"]},set:function(M){this.$store.commit(this.type+"/setSelected",M)}}}),methods:j()({},Object(h["b"])({fetchRecs:function(M,t){return M(this.type+"/fetchRecs",t)},deleteRecs:function(M,t){return M(this.type+"/deleteRecs",t)}}),Object(h["c"])({setEditingRec:function(M,t){return M(this.type+"/setEditingRec",t)}}),{selectedLabel:function(M){return"Đã chọn ".concat(M)}})},U=b,v=(e("e6bA"),e("hZhS"),Object(D["a"])(U,Q,w,!1,null,null,null)),q=v.exports,R=function(){var M=this,t=M.$createElement,e=M._self._c||t;return e("q-modal",{attrs:{"no-backdrop-dismiss":"","no-esc-dismiss":"","content-css":{minWidth:"75vw",minHeight:"80vh"}},model:{value:M.isModalOpened,callback:function(t){M.isModalOpened=t},expression:"isModalOpened"}},[e("q-modal-layout",[e("q-toolbar",{attrs:{slot:"header",color:"tertiary"},slot:"header"},[e("q-btn",{staticClass:"q-mr-md",attrs:{icon:"keyboard_arrow_left",disabled:M.getIsLoading,"wait-for-ripple":"",color:"grey-7"},on:{click:M.discardEditingRec}}),e("q-btn",{attrs:{loading:M.getIsLoading,color:M.getEditingRec.id?"orange-10":"green"},on:{click:M.updateRec}},[e("q-icon",{attrs:{name:M.getEditingRec.id?"save":"add",size:"25px"}}),e("q-spinner-pie",{attrs:{slot:"loading",size:"25px"},slot:"loading"})],1),e("q-toolbar-title",[M._v("\n          "+M._s(M.getEditingRec.name)+"\n        ")])],1),e("div",{staticClass:"layout-padding"},M._l(M.getFields,function(t){return t.hidden?M._e():e("q-field",{key:t.name,staticClass:"q-mb-md",attrs:{"label-width":3,icon:t.icon,label:t.label,helper:t.desc,"error-label":"Some error"}},[e("q-input",{attrs:{type:t.type,color:"orange-10"},model:{value:M.getEditingRec[t.name],callback:function(e){M.$set(M.getEditingRec,t.name,e)},expression:"getEditingRec[field.name]"}})],1)}))],1)],1)},_=[];R._withStripped=!0;var P={props:{type:{default:"xxx",type:String}},data:function(){return{}},computed:j()({},Object(h["d"])({getIsLoading:function(M,t){return t[this.type+"/getIsLoading"]},getFields:function(M,t){return t[this.type+"/getFields"]},getEditingRec:function(M,t){return t[this.type+"/getEditingRec"]}}),{isModalOpened:{get:function(){return this.$store.getters[this.type+"/getIsModalOpened"]},set:function(M){this.$store.commit(this.type+"/setIsModalOpened",M)}}}),methods:j()({},Object(h["b"])({updateRec:function(M,t){return M(this.type+"/updateRec",t)}}),Object(h["c"])({discardEditingRec:function(M,t){return M(this.type+"/discardEditingRec",t)}}))},Z=P,$=(e("5xMd"),Object(D["a"])(Z,R,_,!1,null,null,null)),H=$.exports,F={components:{etGrid:q,etModal:H},data:function(){return{}}},B=F,G=(e("RHPs"),e("vwNb"),Object(D["a"])(B,Y,m,!1,null,null,null)),V=G.exports,W=[{path:"/",component:k,children:[{path:"products",component:V}]},{path:"*",component:z}];c["a"].use(s["a"]);var X=new s["a"]({mode:"history",base:"/",scrollBehavior:function(){return{y:0}},routes:W}),J=X,K={title:"Thông Tin Sản Phẩm",isLoading:!1,isModalOpened:!1,editingRec:{},backupRec:{},selected:[],recs:[],cols:[{name:"edit",align:"left",field:"edit",width:"34px"},{name:"code",label:"Mã Hàng",align:"left",field:"code",sortable:!0},{name:"name",label:"Tên Sản Phẩm",align:"left",field:"name",sortable:!0},{name:"unit",label:"Đơn Vị",align:"left",field:"unit",sortable:!0},{name:"listingPrice",label:"Giá Tham Khảo",align:"left",field:"listingPrice",sortable:!0}],fields:[{name:"id",hidden:!0},{name:"code",label:"Mã Hàng",type:"text",icon:"outlined_flag"},{name:"name",label:"Tên Sản Phẩm",type:"text",icon:"import_contacts"},{name:"unit",label:"Đơn Vị",type:"text",icon:"store"},{name:"listingPrice",label:"Giá Niêm Yết",type:"number",icon:"attach_money"}]},MM=function(M){return M.recs},tM=function(M){return M.cols},eM=function(M){return M.fields},iM=function(M){return M.isLoading},uM=function(M){return M.title},gM=function(M){return M.selected},nM=function(M){return M.isModalOpened},jM=function(M){return M.editingRec},IM=e("LvDl"),cM=e.n(IM),AM=function(M,t){M.recs=t},rM=function(M,t){M.isLoading=t},oM=function(M,t){M.selected=t},NM=function(M,t){M.editingRec=t,M.backupRec=cM.a.clone(t),M.isModalOpened=!0},aM=function(M){cM.a.extend(M.editingRec,M.backupRec),M.isModalOpened=!1},xM=function(M,t){M.isModalOpened=t},DM=(e("f3/d"),e("Z2Ku"),e("L9s1"),e("HEwt"),e("vDqi")),LM=e.n(DM),TM=LM.a.create({timeout:2e4,transformResponse:LM.a.defaults.transformResponse.concat(function(M){return M.data})}),sM=function(M){return TM.get("/api",{params:{query:M}})},yM=function(M,t){return TM({method:"post",url:"/api",headers:{"Content-Type":"application/json"},data:JSON.stringify({query:t,variables:{input:M}})})},EM=function(M,t){A["b"].create({message:M,type:t,timeout:2e3})},lM=function(M){var t=M.commit;t("setIsLoading",!0),sM("{\n    listProduct {\n      id\n      name\n      code\n      unit\n      listingPrice\n    }\n  }").then(function(M){var e=M.data;EM("Success","positive"),t("setRecs",e.listProduct),t("setIsLoading",!1)}).catch(function(M){console.log(M),EM("Code: ".concat(M.response.status," - ").concat(M.response.statusText),"negative"),t("setIsLoading",!1)})},dM=function(M){var t=M.commit,e=M.getters;t("setIsLoading",!0);var i=Array.from(e.getSelected,function(M){return M.id});yM(i,"mutation ($input: [Int]) {\n      deleteProduct(input: $input)\n    }").then(function(M){var u=M.data;EM("Đã xóa ".concat(u.deleteProduct," sản phẩm"),"info"),t("setIsLoading",!1),cM.a.remove(e.getRecs,function(M){return i.includes(M.id)}),t("setSelected",[]),t("setRecs",cM.a.clone(e.getRecs))}).catch(function(M){EM("Code: ".concat(M.response.status," - ").concat(M.response.statusText),"negative"),t("setIsLoading",!1)})},zM=function(M){var t=M.commit,e=M.getters;t("setIsLoading",!0),yM(cM.a.omit(e.getEditingRec,["__index"]),"mutation ($input: ProductInput) {\n      updateProduct(input: $input) {\n        id\n        code\n        name\n        unit\n        listingPrice\n      }\n    }").then(function(M){var e=M.data;EM("Đã cập nhật: ".concat(e.updateProduct.name),"positive"),t("setIsLoading",!1),t("setIsModalOpened",!1)}).catch(function(M){EM("Code: ".concat(M.response.status," - ").concat(M.response.statusText),"negative"),t("setIsLoading",!1)})},SM={namespaced:!0,state:K,getters:i,mutations:u,actions:g};c["a"].use(h["a"]);var pM=new h["a"].Store({modules:{product:SM}}),OM=pM,CM=function(M){var t=M.Vue;t.prototype.$axios=LM.a},fM=e("/jzl"),kM=e.n(fM);c["a"].config.productionTip=!0;var YM=j()({el:"#q-app",router:J,store:OM},T),mM=[];mM.push(CM),mM.forEach(function(M){return M({app:YM,router:J,store:OM,Vue:c["a"]})}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&document.addEventListener("DOMContentLoaded",function(){kM.a.attach(document.body)},!1),new c["a"](YM)},RHPs:function(M,t,e){"use strict";var i=e("F8gN"),u=e.n(i);u.a},Vbic:function(M,t,e){},ZL7j:function(M,t,e){"use strict";var i=e("usnz"),u=e.n(i);u.a},e6bA:function(M,t,e){"use strict";var i=e("v3u+"),u=e.n(i);u.a},fm0S:function(M,t,e){},hZhS:function(M,t,e){"use strict";var i=e("Vbic"),u=e.n(i);u.a},s8w7:function(M,t,e){},sT3l:function(M,t,e){},usnz:function(M,t,e){},"v3u+":function(M,t,e){},vwNb:function(M,t,e){"use strict";var i=e("sT3l"),u=e.n(i);u.a},xOSM:function(M,t){M.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjYuNyAxNjguOSIgd2lkdGg9IjE2Ni43IiBoZWlnaHQ9IjE2OC45IiBpc29sYXRpb249Imlzb2xhdGUiPjxkZWZzPjxjbGlwUGF0aD48cmVjdCB3aWR0aD0iMTY2LjciIGhlaWdodD0iMTY4LjkiLz48L2NsaXBQYXRoPjwvZGVmcz48ZyBjbGlwLXBhdGg9InVybCgjX2NsaXBQYXRoX1BQUGlFY09SaFJTWXdvcEVFTm5hUkZ6emVZU1htd3R0KSI+PHBhdGggZD0iTTY1LjYgMTM1LjJDNjUuNiAxMzcuMSA2NC4xIDEzOC42IDYyLjIgMTM4LjYgNjAuNCAxMzguNiA1OC45IDEzNy4xIDU4LjkgMTM1LjIgNTguOSAxMzAuNyA2MS45IDEyNi43IDY2LjggMTI0IDcxLjEgMTIxLjYgNzcgMTIwLjEgODMuMyAxMjAuMSA4OS43IDEyMC4xIDk1LjYgMTIxLjYgOTkuOSAxMjQgMTA0LjcgMTI2LjcgMTA3LjggMTMwLjcgMTA3LjggMTM1LjIgMTA3LjggMTM3LjEgMTA2LjMgMTM4LjYgMTA0LjQgMTM4LjYgMTAyLjYgMTM4LjYgMTAxLjEgMTM3LjEgMTAxLjEgMTM1LjIgMTAxLjEgMTMzLjMgOTkuNCAxMzEuMyA5Ni42IDEyOS44IDkzLjMgMTI3LjkgODguNiAxMjYuOCA4My4zIDEyNi44IDc4LjEgMTI2LjggNzMuNCAxMjcuOSA3MCAxMjkuOCA2Ny4zIDEzMS4zIDY1LjYgMTMzLjMgNjUuNiAxMzUuMlpNMTQ5LjIgMTUzLjNDMTQ5LjIgMTU3LjYgMTQ3LjUgMTYxLjUgMTQ0LjYgMTY0LjQgMTQxLjggMTY3LjIgMTM3LjkgMTY4LjkgMTMzLjYgMTY4LjkgMTI5LjMgMTY4LjkgMTI1LjQgMTY3LjIgMTIyLjYgMTY0LjQgMTIwLjkgMTYyLjggMTE5LjcgMTYwLjkgMTE4LjkgMTU4LjcgMTE0LjEgMTYxIDEwOSAxNjIuOCAxMDMuNyAxNjQuMSA5Ny4yIDE2NS44IDkwLjQgMTY2LjYgODMuMyAxNjYuNiA2MC4zIDE2Ni42IDM5LjUgMTU3LjMgMjQuNCAxNDIuMiA5LjMgMTI3LjEgMCAxMDYuMyAwIDgzLjMgMCA2MC4zIDkuMyAzOS41IDI0LjQgMjQuNCAzOS41IDkuMyA2MC4zIDAgODMuMyAwIDEwNi40IDAgMTI3LjIgOS4zIDE0Mi4zIDI0LjQgMTU3LjMgMzkuNSAxNjYuNyA2MC4zIDE2Ni43IDgzLjMgMTY2LjcgOTQuNSAxNjQuNSAxMDUuMSAxNjAuNSAxMTQuOSAxNTYuNiAxMjQuMiAxNTEuMSAxMzIuNyAxNDQuNCAxNDAgMTQ3IDE0NS4xIDE0OS4yIDE1MC4yIDE0OS4yIDE1My4zWk0xMzAuNyAxMjYuM0MxMzEuMSAxMjUuNSAxMzEuOCAxMjUgMTMyLjUgMTI0LjhMMTMyLjYgMTI0LjcgMTMyLjYgMTI0LjcgMTMyLjcgMTI0LjcgMTMyLjcgMTI0LjcgMTMyLjggMTI0LjcgMTMyLjkgMTI0LjYgMTMyLjkgMTI0LjYgMTMyLjkgMTI0LjYgMTMzIDEyNC42IDEzMyAxMjQuNkMxMzMgMTI0LjYgMTMzLjEgMTI0LjYgMTMzLjEgMTI0LjZMMTMzLjEgMTI0LjYgMTMzLjIgMTI0LjYgMTMzLjIgMTI0LjZDMTMzLjkgMTI0LjUgMTM0LjYgMTI0LjYgMTM1LjIgMTI1IDEzNS44IDEyNS4zIDEzNi4zIDEyNS44IDEzNi42IDEyNi40TDEzNi42IDEyNi40IDEzNi42IDEyNi40IDEzNi42IDEyNi40IDEzNi42IDEyNi40IDEzNi42IDEyNi40IDEzNi42IDEyNi41IDEzNi42IDEyNi41IDEzNi42IDEyNi41IDEzNi42IDEyNi41IDEzNi42IDEyNi41IDEzNi43IDEyNi41QzEzNyAxMjcuMiAxMzcuNyAxMjguMyAxMzguNCAxMjkuNkwxMzguNCAxMjkuNiAxMzguNSAxMjkuNyAxMzguNSAxMjkuNyAxMzguNiAxMjkuOCAxMzguNiAxMjkuOSAxMzguNiAxMjkuOSAxMzguNyAxMzAgMTM4LjcgMTMwLjEgMTM4LjcgMTMwLjEgMTM4LjcgMTMwLjEgMTM4LjggMTMwLjIgMTM4LjggMTMwLjIgMTM4LjggMTMwLjMgMTM4LjkgMTMwLjMgMTM4LjkgMTMwLjQgMTM4LjkgMTMwLjQgMTM4LjkgMTMwLjQgMTM5IDEzMC41IDEzOSAxMzAuNSAxMzkgMTMwLjYgMTM5LjEgMTMwLjcgMTM5LjEgMTMwLjcgMTM5LjEgMTMwLjcgMTM5LjIgMTMwLjggMTM5LjIgMTMwLjggMTM5LjIgMTMwLjlDMTM5LjggMTMxLjggMTQwLjQgMTMyLjkgMTQxIDEzMy45IDE0Ni41IDEyNy42IDE1MS4xIDEyMC4zIDE1NC4zIDExMi40IDE1OCAxMDMuNCAxNjAgOTMuNiAxNjAgODMuMyAxNjAgNjIuMSAxNTEuNCA0MyAxMzcuNiAyOS4xIDEyMy43IDE1LjIgMTA0LjUgNi43IDgzLjMgNi43IDYyLjIgNi43IDQzIDE1LjIgMjkuMSAyOS4xIDE1LjIgNDMgNi43IDYyLjEgNi43IDgzLjMgNi43IDEwNC41IDE1LjIgMTIzLjYgMjkuMSAxMzcuNSA0MyAxNTEuNCA2Mi4yIDE2MCA4My4zIDE2MCA4OS44IDE2MCA5Ni4xIDE1OS4yIDEwMi4xIDE1Ny43IDEwNy44IDE1Ni4yIDExMy4xIDE1NC4yIDExOC4xIDE1MS43TDExOC4xIDE1MS42IDExOC4yIDE1MS42IDExOC4yIDE1MS4zIDExOC4yIDE1MS4zIDExOC4zIDE1MSAxMTguMyAxNTEgMTE4LjQgMTUwLjcgMTE4LjQgMTUwLjYgMTE4LjUgMTUwLjQgMTE4LjUgMTUwLjMgMTE4LjUgMTUwIDExOC42IDE0OS45IDExOC42IDE0OS43IDExOC43IDE0OS42IDExOC44IDE0OS4zQzExOC45IDE0OC45IDExOSAxNDguNSAxMTkuMSAxNDguMkwxMTkuMiAxNDguMSAxMTkuMyAxNDcuOCAxMTkuMyAxNDcuNyAxMTkuNCAxNDcuNCAxMTkuNCAxNDcuNEMxMTkuNSAxNDcuMSAxMTkuNiAxNDYuOSAxMTkuNyAxNDYuN0wxMTkuNyAxNDYuNiAxMTkuOCAxNDYuMyAxMTkuOSAxNDYuMiAxMjAgMTQ1LjkgMTIwLjEgMTQ1LjlDMTIwLjIgMTQ1LjYgMTIwLjMgMTQ1LjMgMTIwLjQgMTQ1LjFMMTIwLjQgMTQ1LjEgMTIwLjYgMTQ0LjcgMTIwLjYgMTQ0LjYgMTIwLjcgMTQ0LjMgMTIwLjggMTQ0LjIgMTIwLjkgMTQzLjkgMTIwLjkgMTQzLjggMTIxIDE0My44IDEyMS4xIDE0My41IDEyMS4xIDE0My40IDEyMS4yIDE0My4yIDEyMS4zIDE0MyAxMjEuNCAxNDNDMTIxLjYgMTQyLjYgMTIxLjcgMTQyLjIgMTIyIDE0MS44TDEyMiAxNDEuNyAxMjIuMiAxNDEuNCAxMjIuMiAxNDEuMyAxMjIuNCAxNDAuOSAxMjIuNCAxNDAuOSAxMjIuNiAxNDAuNSAxMjIuNiAxNDAuNSAxMjIuOCAxNDAuMSAxMjMgMTM5LjggMTIzIDEzOS43IDEyMyAxMzkuNyAxMjMuNCAxMzguOSAxMjMuNSAxMzguOSAxMjMuNiAxMzguNiAxMjMuNyAxMzguNCAxMjMuOCAxMzguMyAxMjMuOSAxMzggMTI0IDEzNy45IDEyNC4yIDEzNy42IDEyNC4yIDEzNy41IDEyNC40IDEzNy4yIDEyNC40IDEzNy4yIDEyNC42IDEzNi44IDEyNC42IDEzNi44IDEyNC44IDEzNi40IDEyNC44IDEzNi40IDEyNSAxMzYuMSAxMjUuMSAxMzYgMTI1LjIgMTM1LjcgMTI1LjMgMTM1LjYgMTI1LjQgMTM1LjMgMTI1LjUgMTM1LjIgMTI1LjYgMTM1IDEyNS43IDEzNC44IDEyNS44IDEzNC42IDEyNS45IDEzNC40IDEyNi4yIDEzNCAxMjYuMiAxMzMuOSAxMjYuNCAxMzMuNiAxMjYuNCAxMzMuNiAxMjYuNiAxMzMuMyAxMjYuNiAxMzMuMiAxMjYuOCAxMzIuOSAxMjYuOCAxMzIuOSAxMjcgMTMyLjUgMTI3IDEzMi41IDEyNy4zIDEzMi4yIDEyNy40IDEzMS45IDEyNy40IDEzMS44IDEyNy42IDEzMS42IDEyNy43IDEzMS41IDEyNy44IDEzMS4zIDEyNy45IDEzMS4xIDEyOCAxMzEgMTI4LjEgMTMwLjggMTI4LjEgMTMwLjYgMTI4LjMgMTMwLjQgMTI4LjMgMTMwLjQgMTI4LjUgMTMwLjEgMTI4LjUgMTMwLjEgMTI4LjcgMTI5LjggMTI4LjcgMTI5LjggMTI4LjggMTI5LjUgMTI4LjggMTI5LjUgMTI4LjkgMTI5LjQgMTI4LjkgMTI5LjMgMTI5IDEyOS4zIDEyOSAxMjkuMiAxMjkgMTI5LjEgMTI5IDEyOS4xIDEyOS4xIDEyOSAxMjkuMSAxMjkgMTI5LjIgMTI4LjkgMTI5LjIgMTI4LjkgMTI5LjIgMTI4LjggMTI5LjIgMTI4LjggMTI5LjMgMTI4LjggMTI5LjMgMTI4LjggMTI5LjMgMTI4LjcgMTI5LjMgMTI4LjcgMTI5LjMgMTI4LjcgMTI5LjMgMTI4LjcgMTI5LjQgMTI4LjYgMTI5LjQgMTI4LjYgMTI5LjQgMTI4LjUgMTI5LjQgMTI4LjUgMTI5LjQgMTI4LjQgMTI5LjUgMTI4LjQgMTI5LjUgMTI4LjQgMTI5LjUgMTI4LjQgMTI5LjUgMTI4LjQgMTI5LjUgMTI4LjMgMTI5LjUgMTI4LjMgMTI5LjYgMTI4LjIgMTI5LjYgMTI4LjIgMTI5LjYgMTI4LjIgMTI5LjYgMTI4LjIgMTI5LjYgMTI4LjEgMTI5LjYgMTI4LjEgMTI5LjcgMTI4LjEgMTI5LjcgMTI4LjEgMTI5LjcgMTI4IDEyOS43IDEyOCAxMjkuOCAxMjcuOSAxMjkuOCAxMjcuOSAxMjkuOCAxMjcuOSAxMjkuOCAxMjcuOSAxMjkuOCAxMjcuOCAxMjkuOCAxMjcuOCAxMjkuOCAxMjcuOCAxMjkuOCAxMjcuOCAxMjkuOSAxMjcuNyAxMjkuOSAxMjcuNyAxMjkuOSAxMjcuNyAxMjkuOSAxMjcuNyAxMjkuOSAxMjcuNiAxMjkuOSAxMjcuNiAxMzAgMTI3LjYgMTMwIDEyNy42IDEzMCAxMjcuNSAxMzAgMTI3LjUgMTMwIDEyNy40IDEzMCAxMjcuNCAxMzAuMSAxMjcuNCAxMzAuMSAxMjcuNCAxMzAuMSAxMjcuNCAxMzAuMSAxMjcuNCAxMzAuMSAxMjcuMyAxMzAuMSAxMjcuMyAxMzAuMSAxMjcuMyAxMzAuMSAxMjcuMyAxMzAuMiAxMjcuMiAxMzAuMiAxMjcuMiAxMzAuMiAxMjcuMiAxMzAuMiAxMjcuMiAxMzAuMiAxMjcuMSAxMzAuMiAxMjcuMSAxMzAuMiAxMjcuMSAxMzAuMiAxMjcuMSAxMzAuMyAxMjcgMTMwLjMgMTI3IDEzMC4zIDEyNyAxMzAuMyAxMjcgMTMwLjMgMTI3IDEzMC4zIDEyNyAxMzAuNCAxMjYuOSAxMzAuNCAxMjYuOSAxMzAuNCAxMjYuOSAxMzAuNCAxMjYuOSAxMzAuNCAxMjYuOCAxMzAuNCAxMjYuOCAxMzAuNCAxMjYuOCAxMzAuNCAxMjYuOCAxMzAuNCAxMjYuOCAxMzAuNCAxMjYuOCAxMzAuNSAxMjYuNyAxMzAuNSAxMjYuNyAxMzAuNSAxMjYuNyAxMzAuNSAxMjYuNyAxMzAuNSAxMjYuNyAxMzAuNSAxMjYuNyAxMzAuNSAxMjYuNiAxMzAuNSAxMjYuNiAxMzAuNSAxMjYuNiAxMzAuNSAxMjYuNiAxMzAuNiAxMjYuNSAxMzAuNiAxMjYuNSAxMzAuNiAxMjYuNSAxMzAuNiAxMjYuNSAxMzAuNiAxMjYuNSAxMzAuNiAxMjYuNSAxMzAuNiAxMjYuNCAxMzAuNiAxMjYuNCAxMzAuNyAxMjYuNCAxMzAuNyAxMjYuNCAxMzAuNyAxMjYuNCAxMzAuNyAxMjYuNCAxMzAuNyAxMjYuMyAxMzAuNyAxMjYuMyAxMzAuNyAxMjYuMyAxMzAuNyAxMjYuM1pNMTQwIDE1OS42QzE0MS41IDE1OC4xIDE0Mi42IDE1NS44IDE0Mi42IDE1My4zIDE0Mi42IDE1MSAxNDAuMSAxNDYgMTM3LjQgMTQxLjFMMTM3LjQgMTQxLjEgMTM3LjQgMTQxLjEgMTM3LjQgMTQxLjFDMTM3IDE0MC40IDEzNi43IDEzOS44IDEzNi4zIDEzOS4xTDEzNi4yIDEzOSAxMzYuMiAxMzguOSAxMzYuMSAxMzguOSAxMzYuMSAxMzguOCAxMzYgMTM4LjUgMTM1LjkgMTM4LjVDMTM1LjIgMTM3LjIgMTM0LjUgMTM2LjEgMTMzLjkgMTM1TDEzMy44IDEzNC45IDEzMy44IDEzNC44IDEzMy44IDEzNC44IDEzMy43IDEzNC43IDEzMy42IDEzNC42IDEzMy42IDEzNC41IDEzMy40IDEzNC44IDEzMy4zIDEzNS4xIDEzMy4zIDEzNS4xIDEzMy4xIDEzNS40IDEzMy4xIDEzNS40IDEzMi45IDEzNS43IDEzMi43IDEzNiAxMzIuNyAxMzYgMTMyLjUgMTM2LjMgMTMyLjUgMTM2LjMgMTMyLjQgMTM2LjYgMTMyLjIgMTM2LjkgMTMyLjIgMTM2LjkgMTMyIDEzNy4yIDEzMS44IDEzNy41IDEzMS44IDEzNy41IDEzMS42IDEzNy45IDEzMS42IDEzNy45IDEzMS40IDEzOC4yIDEzMS40IDEzOC4yIDEzMS4yIDEzOC41IDEzMSAxMzguOSAxMzEgMTM4LjkgMTMwLjggMTM5LjIgMTMwLjggMTM5LjIgMTMwLjcgMTM5LjUgMTMwLjcgMTM5LjUgMTMwLjUgMTM5LjkgMTMwLjUgMTM5LjkgMTMwLjMgMTQwLjIgMTMwLjEgMTQwLjUgMTMwLjEgMTQwLjUgMTI5LjkgMTQwLjkgMTI5LjkgMTQwLjkgMTI5LjcgMTQxLjIgMTI5LjcgMTQxLjIgMTI5LjYgMTQxLjUgMTI5LjQgMTQxLjkgMTI5LjIgMTQyLjIgMTI5LjIgMTQyLjIgMTI5IDE0Mi42IDEyOSAxNDIuNiAxMjguOCAxNDIuOSAxMjguNiAxNDMuMiAxMjguNiAxNDMuMiAxMjguNSAxNDMuNiAxMjguMyAxNDMuOSAxMjguMyAxNDMuOSAxMjguMSAxNDQuMyAxMjguMSAxNDQuMyAxMjcuOSAxNDQuNiAxMjcuOSAxNDQuNiAxMjcuOCAxNDQuOSAxMjcuNiAxNDUuMiAxMjcuNCAxNDUuNiAxMjcuMyAxNDUuOSAxMjcuMyAxNDUuOSAxMjcuMSAxNDYuMiAxMjcgMTQ2LjUgMTI3IDE0Ni41IDEyNi44IDE0Ni44IDEyNi44IDE0Ni44IDEyNi43IDE0Ny4yIDEyNi43IDE0Ny4yIDEyNi41IDE0Ny41IDEyNi41IDE0Ny41IDEyNi40IDE0Ny44IDEyNi40IDE0Ny44IDEyNi4zIDE0OC4xIDEyNi4xIDE0OC40IDEyNiAxNDguNiAxMjYgMTQ4LjYgMTI1LjkgMTQ5IDEyNS45IDE0OSAxMjUuNyAxNDkuMyAxMjUuNyAxNDkuNSAxMjUuNyAxNDkuNSAxMjUuNiAxNDkuOCAxMjUuNiAxNDkuOCAxMjUuNCAxNTAgMTI1LjQgMTUwIDEyNS4zIDE1MC4zIDEyNS4zIDE1MC4zIDEyNS4zIDE1MC42IDEyNS4zIDE1MC42IDEyNS4yIDE1MC44IDEyNS4yIDE1MC44IDEyNS4xIDE1MS4xIDEyNS4xIDE1MS4xIDEyNSAxNTEuMyAxMjUgMTUxLjMgMTI1IDE1MS42IDEyNSAxNTEuNiAxMjQuOSAxNTEuOCAxMjQuOSAxNTEuOCAxMjQuOCAxNTIgMTI0LjggMTUyIDEyNC44IDE1Mi4yIDEyNC44IDE1Mi4yIDEyNC44IDE1Mi40IDEyNC44IDE1Mi40QzEyNC43IDE1Mi41IDEyNC43IDE1Mi41IDEyNC43IDE1Mi42TDEyNC43IDE1Mi42IDEyNC43IDE1Mi44IDEyNC43IDE1Mi44QzEyNC43IDE1Mi45IDEyNC43IDE1Mi45IDEyNC43IDE1M0wxMjQuNyAxNTMgMTI0LjYgMTUzLjIgMTI0LjYgMTUzLjIgMTI0LjYgMTUzLjMgMTI0LjYgMTUzLjRDMTI0LjcgMTU1LjkgMTI1LjcgMTU4LjEgMTI3LjMgMTU5LjcgMTI4LjkgMTYxLjMgMTMxLjEgMTYyLjMgMTMzLjYgMTYyLjMgMTM2LjEgMTYyLjMgMTM4LjMgMTYxLjMgMTQwIDE1OS42Wk0xMzUuMyA3Mi43QzEzNi4yIDc0LjMgMTM1LjYgNzYuMyAxMzMuOSA3Ny4yIDEzMi4zIDc4IDEzMC4zIDc3LjQgMTI5LjQgNzUuOCAxMjguNyA3NC4zIDEyNy42IDcyLjkgMTI2LjMgNzEuOSAxMjUgNzAuOCAxMjMuNCA3MC4xIDEyMS44IDY5LjZMMTIxLjggNjkuNkMxMjAuOCA2OS40IDExOS44IDY5LjIgMTE4LjkgNjkuMiAxMTcuOCA2OS4yIDExNi44IDY5LjMgMTE1LjggNjkuNSAxMTQgNjkuOSAxMTIuMyA2OC44IDExMS44IDY3IDExMS41IDY1LjIgMTEyLjYgNjMuNSAxMTQuNCA2MyAxMTUuOCA2Mi43IDExNy40IDYyLjYgMTE4LjkgNjIuNiAxMjAuNSA2Mi42IDEyMiA2Mi44IDEyMy40IDYzLjJMMTIzLjYgNjMuMkMxMjYuMSA2My45IDEyOC40IDY1LjEgMTMwLjQgNjYuNyAxMzIuNSA2OC4zIDEzNC4xIDcwLjQgMTM1LjMgNzIuN1pNMzcuMiA3NS44QzM2LjQgNzcuNCAzNC40IDc4IDMyLjcgNzcuMiAzMS4xIDc2LjMgMzAuNSA3NC4zIDMxLjMgNzIuNyAzMi41IDcwLjQgMzQuMiA2OC4zIDM2LjIgNjYuNyAzOC4yIDY1LjEgNDAuNiA2My45IDQzLjEgNjMuMkw0My4yIDYzLjJDNDQuNyA2Mi44IDQ2LjIgNjIuNiA0Ny43IDYyLjYgNDkuMyA2Mi42IDUwLjggNjIuNyA1Mi4zIDYzIDU0LjEgNjMuNSA1NS4yIDY1LjIgNTQuOCA2NyA1NC40IDY4LjggNTIuNiA2OS45IDUwLjkgNjkuNSA0OS45IDY5LjMgNDguOCA2OS4yIDQ3LjggNjkuMiA0Ni44IDY5LjIgNDUuOCA2OS40IDQ0LjkgNjkuNkw0NC45IDY5LjZDNDMuMiA3MC4xIDQxLjcgNzAuOCA0MC40IDcxLjkgMzkuMSA3Mi45IDM4IDc0LjMgMzcuMiA3NS44Wk0xMjUuMiA5Mi43QzEyNS4yIDkwLjcgMTI0LjUgODguOSAxMjMuMyA4Ny42IDEyMi4yIDg2LjUgMTIwLjYgODUuNyAxMTkgODUuNyAxMTcuMyA4NS43IDExNS44IDg2LjUgMTE0LjcgODcuNiAxMTMuNSA4OC45IDExMi44IDkwLjcgMTEyLjggOTIuNyAxMTIuOCA5NC42IDExMy41IDk2LjQgMTE0LjcgOTcuNyAxMTUuOCA5OC45IDExNy4zIDk5LjYgMTE5IDk5LjYgMTIwLjYgOTkuNiAxMjIuMiA5OC45IDEyMy4zIDk3LjcgMTI0LjUgOTYuNCAxMjUuMiA5NC42IDEyNS4yIDkyLjdaTTEyOC4yIDgzLjJDMTMwLjQgODUuNiAxMzEuOCA4OSAxMzEuOCA5Mi43IDEzMS44IDk2LjQgMTMwLjQgOTkuNyAxMjguMiAxMDIuMiAxMjUuOCAxMDQuNyAxMjIuNiAxMDYuMyAxMTkgMTA2LjMgMTE1LjQgMTA2LjMgMTEyLjEgMTA0LjcgMTA5LjggMTAyLjIgMTA3LjUgOTkuNyAxMDYuMSA5Ni40IDEwNi4xIDkyLjcgMTA2LjEgODkgMTA3LjUgODUuNiAxMDkuOCA4My4yIDExMi4xIDgwLjYgMTE1LjQgNzkuMSAxMTkgNzkuMSAxMjIuNiA3OS4xIDEyNS44IDgwLjYgMTI4LjIgODMuMlpNNTMuOSA5Mi43QzUzLjkgOTAuNyA1My4yIDg4LjkgNTIgODcuNiA1MC45IDg2LjUgNDkuNCA4NS43IDQ3LjcgODUuNyA0NiA4NS43IDQ0LjUgODYuNSA0My40IDg3LjYgNDIuMiA4OC45IDQxLjUgOTAuNyA0MS41IDkyLjcgNDEuNSA5NC42IDQyLjIgOTYuNCA0My40IDk3LjcgNDQuNSA5OC45IDQ2IDk5LjYgNDcuNyA5OS42IDQ5LjQgOTkuNiA1MC45IDk4LjkgNTIgOTcuNyA1My4yIDk2LjQgNTMuOSA5NC42IDUzLjkgOTIuN1pNNTYuOSA4My4yQzU5LjIgODUuNiA2MC41IDg5IDYwLjUgOTIuNyA2MC41IDk2LjQgNTkuMiA5OS43IDU2LjkgMTAyLjIgNTQuNSAxMDQuNyA1MS4zIDEwNi4zIDQ3LjcgMTA2LjMgNDQuMSAxMDYuMyA0MC45IDEwNC43IDM4LjUgMTAyLjIgMzYuMiA5OS43IDM0LjggOTYuNCAzNC44IDkyLjcgMzQuOCA4OSAzNi4yIDg1LjYgMzguNSA4My4yIDQwLjkgODAuNiA0NC4xIDc5LjEgNDcuNyA3OS4xIDUxLjMgNzkuMSA1NC41IDgwLjYgNTYuOSA4My4yWiIgZmlsbD0icmdiKDEsMjIsMzkpIiBmaWxsLW9wYWNpdHk9IjAuMiIvPjwvZz48L3N2Zz4K"}});