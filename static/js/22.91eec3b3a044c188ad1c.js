webpackJsonp([22],{XIg1:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"list-window"},[e("el-dialog",{attrs:{"close-on-click-modal":!1,title:"详情",visible:t.dtuShow,width:"30%"},on:{"update:visible":function(a){t.dtuShow=a}}},[e("el-row",[t._v(t._s(t.payload))]),t._v(" "),e("el-row",{staticStyle:{width:"100%","text-align":"center"}},[e("el-button",{attrs:{type:"primary"},on:{click:t.close}},[t._v("关闭")])],1)],1),t._v(" "),e("el-row",{staticClass:"row",staticStyle:{"padding-top":"20px","padding-left":"20px"}},[e("div",{staticClass:"style-sear"},[t._v("DTUID：")]),t._v(" "),e("div",{staticClass:"time-input"},[e("el-input",{attrs:{size:"small"},model:{value:t.serialnum,callback:function(a){t.serialnum="string"==typeof a?a.trim():a},expression:"serialnum"}})],1),t._v(" "),e("div",{staticClass:"ser-but"},[e("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.searchBtn()}}},[t._v("查询")])],1),t._v(" "),e("div",{staticClass:"ser-but"},[e("el-button",{attrs:{size:"small"},on:{click:function(a){return t.clearPart()}}},[t._v("清空")])],1)]),t._v(" "),e("div",{staticClass:"list-div",staticStyle:{"padding-top":"60px"}},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.$store.state.loading,expression:"$store.state.loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData}},[e("el-table-column",{attrs:{prop:"dtuId",label:"DTUID"}}),t._v(" "),e("el-table-column",{attrs:{prop:"createTime",label:"时间"}}),t._v(" "),e("el-table-column",{attrs:{label:"操作",align:"left"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticClass:"list-btn2",attrs:{type:"text",size:"mini"},on:{click:function(e){return t.detali(a.row)}}},[t._v("详情")])]}}])})],1),t._v(" "),e("el-row",{directives:[{name:"show",rawName:"v-show",value:t.pageShow,expression:"pageShow"}],staticClass:"pagination-div"},[e("el-pagination",{attrs:{background:"",layout:"prev, pager, next","current-page":t.pagination.currentPage,total:t.pagination.total},on:{"update:currentPage":function(a){return t.$set(t.pagination,"currentPage",a)},"update:current-page":function(a){return t.$set(t.pagination,"currentPage",a)},"current-change":t.current_change}})],1)],1)],1)},staticRenderFns:[]};var n=e("C7Lr")({name:"list-window",data:function(){return{DTU_ID:"",payload:"",serialnum:"",pageSerialnum:"",pagination:{currentPage:1,total:1,page:1},pageShow:!1,dtuShow:!1,tableData:[],loading:!0}},mounted:function(){this.search(1,10,"")},methods:{detali:function(t){this.payload=t.payload,this.dtuShow=!0},close:function(){this.dtuShow=!1},search:function(t,a,e){var i=this;this.$RequestUtil.post({url:"/test/getDtuOriginalData",params:{page:t,rows:a,dtuId:e},success:function(t){i.pagination.total=t.total,i.tableData=t.list,i.pagination.total>10?i.pageShow=!0:i.pageShow=!1}})},clearPart:function(){this.DTU_ID="",this.serialnum="",this.payload="",this.search(1,10,this.DTU_ID)},searchBtn:function(){this.DTU_ID=this.serialnum,this.search(1,10,this.DTU_ID)},current_change:function(t){this.pagination.page=t,this.search(this.pagination.page,10,this.DTU_ID)}}},i,!1,function(t){e("uv0f"),e("iVq/")},"data-v-ea590208",null);a.default=n.exports},"iVq/":function(t,a){},uv0f:function(t,a){}});