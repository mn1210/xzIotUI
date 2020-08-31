webpackJsonp([17,36],{"2JpJ":function(e,t){},Z3Ph:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("etg3"),s=r("kirP"),i={name:"firmwareList",components:{FirmDetail:a.default},data:function(){return{selFirmList:[],searchFirm:"",orderColumn:"gmtModified",orderType:"DESC",queryParams:{firm:""},selectRow:{},chonseRows:[],addModel:!1,editModel:!1,detailModel:!1,addCart:{firmwareVersion:"",firmwareInfo:"",download:"",papersUrl:""},editCart:{firmwareVersion:"",firmwareInfo:""},pagination:{currentPage:1,totalPage:0,pagesize:10},rules:{firmwareVersion:[{required:!0,message:"请输入固件版本号",trigger:"blur"}],firmwareInfo:[{required:!0,message:"请输入固件备注",trigger:"blur"}]},fileFirmList:[],searchArr:[]}},created:function(){this.search()},mounted:function(){this.searchArr=[{id:"1",label:"固件版本号",value:"firm",type:"input",maxLen:"15"}]},methods:{sortChangeEvent:function(e){this.orderColumn=e.order?e.prop:"gmtModified",this.orderType=commonUtils.changeOrderType(e.order),this.pagination.currentPage=1,this.search()},btnSearch:function(e){this.pagination.currentPage=1,this.queryParams.firm=e.firm,this.search()},del:function(e){var t=this;this.$confirm("是否确认删除固件?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$RequestUtil.post({url:"/device/firmware/deleteFirmware",params:{id:e},success:function(e){e&&"success"==e.result?(t.$message({message:e.msg,type:"success"}),t.toSearch()):t.$message({message:e.msg,type:"error"})}})}).catch(function(){})},toSearch:function(){this.pagination.currentPage=1,this.search()},search:function(){var e=this;this.$RequestUtil.post({url:"/device/firmware/getFirmwareListPage",params:{firmwareVersion:this.queryParams.firm,page:this.pagination.currentPage,rows:this.pagination.pagesize,orderColumn:this.orderColumn,orderType:this.orderType},success:function(t){e.selFirmList=t.data,e.pagination.totalPage=t.totalPages}})},beforeUpload:function(e){return e.name.endsWith(".tar")?e.size>1e7?(this.$message.error("文件不能大于10M"),!1):void 0:(this.$message.error("只能上传tar文件"),!1)},fileSuccess:function(e,t,r){this.addCart.download=e.data.url,this.$refs.addCartForm.validate()},fileRemove:function(){this.addCart.download="",this.addCart.papersUrl=""},progressFirm:function(e,t,r){},formatterTime:function(e){var t=new Date(e.gmtModified);return Object(s.a)(t,"yyyy-MM-dd hh:mm")},resetForm:function(e){this.$refs[e].resetFields()},pageChange:function(e){this.pagination.currentPage=e.page_index,this.pagination.pagesize=e.page_limit,this.search()},edit:function(e){this.editCart.firmwareVersion=e.firmwareVersion,this.editCart.firmwareInfo=e.firmwareInfo,this.editCart.download=e.download,this.editCart.id=e.id,""!=e.downloadName?this.fileFirmList=[{name:e.downloadName,url:e.download}]:this.fileFirmList=[],this.editModel=!0},toEdit:function(){var e=this;this.$refs.editCartForm.validate(function(t){if(!t)return!1;e.$confirm("是否确认编辑固件信息?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.sureUpdate()}).catch(function(){})})},sureUpdate:function(){var e=this;this.$RequestUtil.post({url:"/device/firmware/modifyFirmware",params:{id:this.editCart.id,firmwareVersion:this.editCart.firmwareVersion,firmwareInfo:this.editCart.firmwareInfo,download:this.editCart.download},success:function(t){"success"==t.result?(e.$message({message:t.msg,type:"success"}),e.editModel=!1,e.resetForm("editCartForm"),e.search()):e.$message({message:t.msg,type:"error"})}})},toSave:function(){var e=this;this.$refs.addCartForm.validate(function(t){if(!t)return!1;e.$confirm("是否确认保存固件信息?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.sureSave()}).catch(function(){})})},sureSave:function(){var e=this;this.$RequestUtil.post({url:"/device/firmware/insertFirmware",params:{firmwareVersion:this.addCart.firmwareVersion,firmwareInfo:this.addCart.firmwareInfo,download:this.addCart.download},success:function(t){"success"==t.result?(e.$message({message:t.msg,type:"success"}),e.fileFirmList=[],e.addModel=!1,e.resetForm("addCartForm"),e.search()):e.$message({message:t.msg,type:"error"})}})},handleSelectionChange:function(e){this.chonseRows=e},addClose:function(e){e(),this.resetForm("addCartForm"),this.addCart.papersUrl="",this.fileFirmList=[]},editClose:function(e){e(),this.resetForm("editCartForm"),this.editCart.papersUrl="",this.fileFirmList=[]},delFirmware:function(){var e=this;0!=this.chonseRows.length?this.$confirm("确认删除此固件？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(t){e.sureDel()}).catch(function(e){}):this.$message({message:"请勾选需要删除的固件",type:"warning"})},sureDel:function(){for(var e=this,t=[],r=0;r<this.chonseRows.length;r++)t.push(this.chonseRows[r].id);t.length<=0?this.$message({message:"请勾选需要删除的固件",type:"warning"}):this.$RequestUtil.post({url:"/test/deleteFirmwareList.do",params:{delLists:t},success:function(t){"success"==t.result?(e.$message({message:t.message,type:"success"}),e.search()):e.$message({message:t.message,type:"error"})}})},getDetail:function(e){this.selectRow=e,this.detailModel=!0}}},o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"list-window"},[r("div",{staticClass:"searchbar"},[r("searchInput",{attrs:{searchArr:e.searchArr},on:{clear:function(t){e.queryParams.firm=""},search:function(t){e.btnSearch(t)}}})],1),e._v(" "),e.$PERMISSION.FIRMWARE_WRITE?r("div",{staticClass:"operatebar"},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.addModel=!0}}},[e._v("新增")])],1):e._e(),e._v(" "),r("div",{staticClass:"list-div"},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.selFirmList,"default-sort":{prop:e.queryParams.orderColumn,order:"descending"}},on:{"sort-change":e.sortChangeEvent}},[r("el-table-column",{attrs:{prop:"firmwareVersion",label:"固件版本号","min-width":"120",sortable:"custom"}}),e._v(" "),r("el-table-column",{attrs:{prop:"firmwareInfo",label:"版本说明","min-width":"120",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("div",[r("textareaCheckRows",{attrs:{inputType:"pre",rowClass:"value",textValue:e.row.firmwareInfo}})],1)]}}])}),e._v(" "),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"downloadName",label:"固件下载地址","min-width":"200",sortable:"custom"}}),e._v(" "),r("el-table-column",{attrs:{prop:"gmtModified",label:"上传时间","min-width":"80",formatter:e.formatterTime,sortable:"custom"}}),e._v(" "),r("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text"},on:{click:function(){return e.getDetail(t.row)}}},[e._v("详情")]),e._v(" "),e.$PERMISSION.FIRMWARE_WRITE?r("span",[r("span",{staticClass:"vertical"}),e._v(" "),r("el-button",{attrs:{type:"text"},on:{click:function(){return e.edit(t.row)}}},[e._v("编辑")]),e._v(" "),r("span",{staticClass:"vertical"}),e._v(" "),r("el-button",{attrs:{type:"text"},on:{click:function(){return e.del(t.row.id)}}},[e._v("删除")])],1):e._e()]}}])})],1),e._v(" "),[r("Pagination",{attrs:{total:e.pagination.totalPage,"page-num":e.pagination.currentPage},on:{pageChange:e.pageChange}})]],2),e._v(" "),r("el-dialog",{attrs:{"close-on-click-modal":!1,title:"新增固件",visible:e.addModel,width:"30%","before-close":e.addClose},on:{"update:visible":function(t){e.addModel=t}}},[r("el-row",{attrs:{type:"flex"}},[r("el-col",{attrs:{span:22}},[r("el-form",{ref:"addCartForm",attrs:{model:e.addCart,rules:e.rules,"label-width":"120px","label-position":"right"}},[r("el-form-item",{staticClass:"el-inputcss",attrs:{label:"固件版本号：",prop:"firmwareVersion"}},[r("el-input",{attrs:{placeholder:"请输入固件版本号"},model:{value:e.addCart.firmwareVersion,callback:function(t){e.$set(e.addCart,"firmwareVersion",t)},expression:"addCart.firmwareVersion"}})],1),e._v(" "),r("el-form-item",{staticClass:"el-inputcss",attrs:{label:"版本说明：",prop:"firmwareInfo"}},[r("textareaCheckRows",{attrs:{textValue:e.addCart.firmwareInfo,isReadOnly:!1,placeholder:"请输入版本说明"},on:{"update:textValue":function(t){return e.$set(e.addCart,"firmwareInfo",t)},"update:text-value":function(t){return e.$set(e.addCart,"firmwareInfo",t)}}})],1),e._v(" "),r("el-form-item",{staticClass:"el-inputcss",attrs:{label:"固件上传：",prop:"papersUrl"}},[r("el-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],model:{value:e.addCart.papersUrl,callback:function(t){e.$set(e.addCart,"papersUrl",t)},expression:"addCart.papersUrl"}}),e._v(" "),r("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/wuyuan/uploadFirmware","on-success":e.fileSuccess,"before-upload":e.beforeUpload,"on-remove":e.fileRemove,"on-progress":e.progressFirm,limit:1}},[r("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传tar文件")])],1)],1)],1)],1)],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.toSave}},[e._v("确 定")])],1)],1),e._v(" "),r("el-dialog",{attrs:{"close-on-click-modal":!1,title:"编辑固件",visible:e.editModel,width:"30%","before-close":e.editClose},on:{"update:visible":function(t){e.editModel=t}}},[r("el-row",{attrs:{type:"flex"}},[r("el-col",{attrs:{span:22}},[r("el-form",{ref:"editCartForm",attrs:{model:e.editCart,rules:e.rules,"label-width":"120px","label-position":"right"}},[r("el-form-item",{staticClass:"el-inputcss",attrs:{label:"固件版本号：",prop:"firmwareVersion"}},[r("el-input",{attrs:{placeholder:"请输入固件版本号"},model:{value:e.editCart.firmwareVersion,callback:function(t){e.$set(e.editCart,"firmwareVersion",t)},expression:"editCart.firmwareVersion"}})],1),e._v(" "),r("el-form-item",{staticClass:"el-inputcss",attrs:{label:"版本说明：",prop:"firmwareInfo"}},[r("el-input",{attrs:{placeholder:"请输入版本说明"},model:{value:e.editCart.firmwareInfo,callback:function(t){e.$set(e.editCart,"firmwareInfo",t)},expression:"editCart.firmwareInfo"}})],1),e._v(" "),r("el-form-item",{staticClass:"el-inputcss",attrs:{label:"固件上传：",prop:"papersUrl"}},[r("el-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],model:{value:e.addCart.papersUrl,callback:function(t){e.$set(e.addCart,"papersUrl",t)},expression:"addCart.papersUrl"}}),e._v(" "),r("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/wuyuan/uploadFirmware","on-success":e.fileSuccess,"before-upload":e.beforeUpload,"on-remove":e.fileRemove,"file-list":e.fileFirmList,"on-progress":e.progressFirm,limit:1,disabled:""}},[r("el-button",{attrs:{size:"small",type:"primary",disabled:""}},[e._v("点击上传")]),e._v(" "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传tar文件")])],1)],1)],1)],1)],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.toEdit}},[e._v("确 定")])],1)],1),e._v(" "),r("FirmDetail",{attrs:{"firmware-detail":e.selectRow}})],1)},staticRenderFns:[]};var n=r("C7Lr")(i,o,!1,function(e){r("bJEt")},"data-v-15e82c5a",null);t.default=n.exports},bJEt:function(e,t){},etg3:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"firmwareDetail"},[r("el-dialog",{attrs:{"close-on-click-modal":!1,title:"固件详情",visible:e.$parent.detailModel,width:"25%","before-close":e.handleClose},on:{"update:visible":function(t){return e.$set(e.$parent,"detailModel",t)}}},[r("span",{staticClass:"spanClass el-inputcss"},[e._v("当前固件号：")]),e._v(" "),r("span",{staticClass:"firm-class"},[e._v(e._s(e.firmwareDetail.firmwareVersion))]),e._v(" "),r("br"),e._v(" "),r("span",{staticClass:"spanClass el-inputcss"},[e._v("版本说明：")]),e._v(" "),r("span",{staticClass:"firm-class"},[e._v(e._s(e.firmwareDetail.firmwareInfo))]),e._v(" "),r("br"),e._v(" "),r("span",{staticClass:"spanClass el-inputcss"},[e._v("固件地址：")]),e._v(" "),r("span",{staticClass:"firm-class"},[e._v(e._s(e.firmwareDetail.download))]),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.$parent.detailModel=!1}}},[e._v("关闭")])],1)])],1)},staticRenderFns:[]};var s=r("C7Lr")({name:"firmwareDetail",props:["firmwareDetail"],data:function(){return{detailModel:!1,detailR:[]}},methods:{handleClose:function(e){e()},handleClick:function(e,t){},getList:function(e){this.detailR=e}}},a,!1,function(e){r("2JpJ")},"data-v-86393400",null);t.default=s.exports},kirP:function(e,t,r){"use strict";function a(e){return("00"+e).substr(e.length)}t.a=function(e,t){/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));var r={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};for(var s in r)if(new RegExp("("+s+")").test(t)){var i=r[s]+"";t=t.replace(RegExp.$1,1===RegExp.$1.length?i:a(i))}return t}}});