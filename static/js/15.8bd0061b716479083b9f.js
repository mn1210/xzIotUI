webpackJsonp([15],{"2iOV":function(e,t){},"3W9+":function(e,t){},CtyE:function(e,t){},LAqv:function(e,t){},PoRN:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("ZLEe"),s=a.n(i),l=a("lC5x"),r=a.n(l),o=a("J0Oq"),n=a.n(o),c={name:"ErrConf",data:function(){return{tableLoading:!1,searchArr:[],pagination:{currentPage:1,totalPage:0,pagesize:10},errList:[],editErrDialogVisible:!1,addErrDialogVisible:!1,tableTotalPage1:0,configForm:{value:""},queryParams:{value:"",orderColumn:"gmtModified",orderType:"DESC"},rules:{value:[{required:!0,message:"请输入问题类型",trigger:"blur"}]}}},computed:{span:function(){return 1.1}},mounted:function(){var e=this;this.searchArr=[{id:"1",label:"问题描述",type:"input",value:"value"}],this.search();var t=document.documentElement.clientWidth||document.body.clientWidth;this.W=t>=1900,window.onresize=function(){var t=document.documentElement.clientWidth||document.body.clientWidth;e.W=t>=1900}},deactivated:function(){},methods:{sortChangeEvent:function(e){this.queryParams.orderColumn=e.order?e.prop:"gmtModified",this.queryParams.orderType=commonUtils.changeOrderType(e.order),this.pagination.currentPage=1,this.search()},deleteErrItem:function(e){var t=this;this.$confirm("此操作将删除该问题类型, 删除后不可撤销，是否继续?","提示",{cancelButtonClass:"btn-custom-cancel",confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$RequestUtil.post({url:"/device/repairProblemDefine/deleteRepairProblem",type:"sync",params:{id:e.id},success:function(e){t.$message({type:"success",message:"删除成功!"}),t.search()}})})},cancelEditErrDialog:function(){this.editErrDialogVisible=!1,this.configForm.value="",this.configForm.id=""},showEditErrDialog:function(e){this.editErrDialogVisible=!0,this.configForm.value=e.value,this.configForm.id=e.id},editErrType:function(){var e=this;this.$refs.configForm.validate(function(t){t&&e.$RequestUtil.post({url:"/device/repairProblemDefine/updateRepairProblem",type:"sync",params:e.configForm,success:function(t){e.search(),e.$message.success("编辑成功"),e.cancelEditErrDialog()}})})},cancelErrDialog:function(){this.addErrDialogVisible=!1,this.configForm.value="",this.configForm.id=""},pageChange:function(e){this.pagination.currentPage=e.page_index,this.pagination.pagesize=e.page_limit,this.search()},addErrItem:function(){var e=this;this.addErrDialogVisible=!0,setTimeout(function(){e.$refs.focusinput.focus()},0)},addErrType:function(){var e=this;this.$refs.configForm.validate(function(t){t&&e.$RequestUtil.post({url:"/device/repairProblemDefine/addRepairProblem",type:"sync",params:e.configForm,success:function(t){e.search(),e.$message.success("添加成功"),e.cancelErrDialog()}})})},searchPart:function(e){var t=this;this.pagination.currentPage=1,s()(e).forEach(function(a){t.queryParams[a]=e[a]}),this.search()},search:function(){var e=this;this.tableLoading=!0,this.$RequestUtil.post({url:"/device/repairProblemDefine/getRepairProblemPage",params:{page:this.pagination.currentPage,rows:this.pagination.pagesize,value:this.queryParams.value,orderType:this.queryParams.orderType,orderColumn:this.queryParams.orderColumn},success:function(t){e.errList=t.data,e.pagination.totalPage=t.totalPages,0==t.totalPages&&e.$message.warning("查询不到符合条件的数据")}}).finally(function(){e.tableLoading=!1})},backToOrderView:function(){this.$parent.showPage=0},clearSearch1:function(){this.errSearch.value=""},parseStartTime:function(e){if(null!=e.gmtCreate)return commonUtils.timestampToDate(e.gmtCreate)},parseEndTime:function(e){if(null!=e.deadline){var t=commonUtils.timestampToDate(e.deadline,!0);return t.substring(0,t.length-3)}},parseModifiedDate:function(e){if(null!=e.gmtModified)return commonUtils.timestampToDate(e.gmtModified)}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{width:"100%",heigh:"100%"}},[a("el-row",{staticClass:"operateBtn-wrap"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-arrow-left",size:"small"},on:{click:e.backToOrderView}},[e._v("返回")])],1),e._v(" "),a("div",{staticClass:"searchbar"},[a("searchInput",{attrs:{"search-arr":e.searchArr},on:{clear:function(t){e.clearPart(t)},search:function(t){e.searchPart(t)},querySelect:function(t){var a=t.queryString,i=t.cb;e.queryBindDtu(a,i)}}})],1),e._v(" "),e.$PERMISSION.REPAIRPROBLEMDEFINE_WRITE?a("div",{staticClass:"operatebar"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.addErrItem()}}},[e._v("新增")])],1):e._e(),e._v(" "),a("div",{staticClass:"list-div"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticClass:"deviceTable",staticStyle:{width:"100%"},attrs:{data:e.errList,stripe:""},on:{"sort-change":e.sortChangeEvent}},[a("el-table-column",{attrs:{prop:"value",sortable:"custom",label:"问题类型","min-width":"160"}}),e._v(" "),a("el-table-column",{attrs:{prop:"gmtCreate",label:"创建时间",formatter:e.parseStartTime,sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{prop:"gmtModified",label:"修改时间",formatter:e.parseModifiedDate,sortable:"custom"}}),e._v(" "),e.$PERMISSION.REPAIRPROBLEMDEFINE_WRITE?a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.$PERMISSION.REPAIRPROBLEMDEFINE_WRITE?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.showEditErrDialog(t.row)}}},[e._v("编辑")]):e._e(),e._v(" "),e.$PERMISSION.REPAIRPROBLEMDEFINE_WRITE?a("span",{staticClass:"vertical"}):e._e(),e._v(" "),e.$PERMISSION.REPAIRPROBLEMDEFINE_WRITE?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.deleteErrItem(t.row)}}},[e._v("删除")]):e._e()]}}],null,!1,45001866)}):e._e()],1),e._v(" "),a("Pagination",{attrs:{total:e.pagination.totalPage,"page-num":e.pagination.currentPage},on:{pageChange:e.pageChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:"新增问题类型",visible:e.addErrDialogVisible,width:5==e.span?"45%":"28%","close-on-click-modal":!1},on:{"update:visible":function(t){e.addErrDialogVisible=t},close:e.cancelErrDialog}},[a("el-form",{ref:"configForm",staticClass:"add_form",staticStyle:{width:"100%"},attrs:{model:e.configForm,rules:e.rules,"label-width":"80px"}},[a("el-row",[a("el-col",{attrs:{span:20,offset:2}},[a("div",{},[a("el-form-item",{staticClass:"el-inputcss",attrs:{label:"问题类型：",prop:"value",rules:e.rules.value}},[a("el-input",{ref:"focusinput",staticStyle:{"max-width":"180px"},attrs:{size:"small",maxlength:"16",placeholder:"问题类型"},model:{value:e.configForm.value,callback:function(t){e.$set(e.configForm,"value",t)},expression:"configForm.value"}})],1)],1)])],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.addErrType}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"编辑问题类型",visible:e.editErrDialogVisible,width:5==e.span?"45%":"28%","close-on-click-modal":!1},on:{"update:visible":function(t){e.editErrDialogVisible=t},close:e.cancelEditErrDialog}},[a("el-form",{ref:"configForm",staticClass:"add_form",staticStyle:{width:"100%"},attrs:{model:e.configForm,rules:e.rules,"label-width":"80px"}},[a("el-row",[a("el-col",{attrs:{span:20,offset:2}},[a("div",{},[a("el-form-item",{staticClass:"el-inputcss",attrs:{label:"问题类型：",prop:"value",rules:e.rules.value}},[a("el-input",{staticStyle:{"max-width":"180px"},attrs:{size:"small",maxlength:"16",placeholder:"问题类型"},model:{value:e.configForm.value,callback:function(t){e.$set(e.configForm,"value",t)},expression:"configForm.value"}})],1)],1)])],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.editErrType}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var u={name:"MaintainConf",components:{ErrConf:a("C7Lr")(c,d,!1,function(e){a("3W9+"),a("CtyE")},"data-v-1e331e5c",null).exports},data:function(){return{tableLoading:!1,searchArr:[],queryParams:{name:"",level:"",orderColumn:"gmtModified",orderType:"DESC"},pagination:{currentPage:1,totalPage:0,pagesize:10},TmouserShow:null,showPage:0,fristLoad:!1,levelOption:[{label:"一级",value:1},{label:"二级",value:2},{label:"三级",value:3}],searchFormTemp:"",searchForm:{level:null,name:""},addForm:{wrongCode:"",level:null,advice:"",name:"",description:"",remark:""},descriptionTemps:[],tableData:[],addDialogVisible:!1,editDialogVisible:!1,viewDialogVisible:!1,data:{token:localStorage.getItem("token")},rules:{name:[{required:!0,message:"请输入模板名称",trigger:"blur"}],level:[{required:!0,message:"请选择维修级别",trigger:"blur"}]},permission:JSON.parse(localStorage.getItem("permission"))}},computed:{},mounted:function(){this.initTable(),this.searchArr=[{id:"1",label:"模板名称",type:"input",value:"name"},{id:"2",label:"维修级别",type:"select",value:"level",data:[{label:"一级",value:1},{label:"二级",value:2},{label:"三级",value:3}]}],this.loaddescriptionTemps()},deactivated:function(){},methods:{sortChangeEvent:function(e){this.queryParams.orderColumn=e.order?e.prop:"gmtModified",this.queryParams.orderType=commonUtils.changeOrderType(e.order),this.pagination.currentPage=1,this.search()},TmouseOver:function(e){var t=this.$refs.Tmover.offsetHeight,a=this.$refs.Tmover.scrollHeight;t<a&&(this.TmouserShow=e)},Tonmouseout:function(){this.TmouserShow=null},showConfigDialog:function(){this.showPage=1},loaddescriptionTemps:function(){var e=this;return n()(r.a.mark(function t(){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$RequestUtil.post({url:"/device/repairProblemDefine/listRepairProblem",params:{}});case 2:"success"==(a=t.sent).data.result?(e.descriptionTemps=a.data.data,e.descriptionTemps.push({value:"其它"})):e.$message.error(a.data.msg||a.data.message);case 4:case"end":return t.stop()}},t,e)}))()},deleteConfig:function(e){var t=this;this.$confirm("此操作将删除该维修模板, 删除后不可撤销，是否继续?","提示",{cancelButtonClass:"btn-custom-cancel",cancelButtonText:"取消",confirmButtonText:"确定",type:"warning"}).then(function(){t.$RequestUtil.post({url:"/device/repairTemplate/deleteRepairTemplate",type:"sync",params:{id:e.id},success:function(e){-1!=e.code&&(t.$message({type:"success",message:"删除成功!"}),t.search(1))}})})},parseLeve:function(e){var t="";switch(Number(e.level)){case 1:t="一级";break;case 2:t="二级";break;case 3:t="三级"}return t},cancelEditDialog:function(){this.editDialogVisible=!1,this.addForm={wrongCode:"",level:null,advice:"",name:"",description:"",remark:""}},cancelViewDialog:function(){this.viewDialogVisible=!1,this.addForm={wrongCode:"",level:null,advice:"",name:"",description:"",remark:""}},cancelAddDialog:function(){this.addDialogVisible=!1,this.addForm={wrongCode:"",level:null,advice:"",name:"",description:"",remark:""}},submitAddDialog:function(){var e=this;this.$refs.addForm.validate(function(t){t&&e.$RequestUtil.postSync({url:"/device/repairTemplate/addRepairTemplate",type:"sync",params:e.addForm,success:function(t){e.$message.success("添加成功"),e.addDialogVisible=!1,e.initTable(),e.cancelAddDialog()}})})},submitEditDialog:function(){var e=this;this.$refs.editForm.validate(function(t){t&&e.$RequestUtil.postSync({url:"/device/repairTemplate/updateRepairTemplate",params:e.addForm,success:function(t){"success"==t.result?(e.$message.success("编辑成功"),e.editDialogVisible=!1,e.initTable(),e.cancelEditDialog()):e.$message.error(t.message)}})})},searchPart:function(e){var t=this;this.pagination.currentPage=1,s()(e).forEach(function(a){t.queryParams[a]=e[a]}),this.search()},clearSearch:function(){var e=this.searchForm;e.name="",e.level=null},search:function(){var e=this;this.tableLoading=!0,this.$RequestUtil.post({url:"/device/repairTemplate/getRepairTemplatePage",type:"sync",params:{page:this.pagination.currentPage,rows:this.pagination.pagesize,name:this.queryParams.name,level:this.queryParams.level,orderType:this.queryParams.orderType,orderColumn:this.queryParams.orderColumn},success:function(t){"success"==t.result?(e.tableData=t.data,e.pagination.totalPage=t.totalPages,0==t.totalPages&&e.fristLoad&&e.$message.warning("查询不到符合条件的数据"),e.fristLoad=!0):e.$message.error(t.message||t.msg)}}).finally(function(){e.tableLoading=!1})},pageChange:function(e){this.pagination.currentPage=e.page_index,this.pagination.pagesize=e.page_limit,this.search()},initTable:function(){this.search()},addWindowShow:function(){var e=this;this.addForm.description=this.descriptionTemps[0].value,this.addDialogVisible=!0,setTimeout(function(){e.$refs.focusinput.focus()},0)},showEditDialog:function(e){this.editDialogVisible=!0,this.addForm.name=e.name,this.addForm.id=e.id,this.addForm.level=e.level,this.addForm.wrongCode=e.wrongCode,this.addForm.advice=e.advice,this.addForm.description=e.description,this.addForm.remark=e.remark},showViewDialog:function(e){this.viewDialogVisible=!0,this.addForm.name=e.name,this.addForm.id=e.id,this.addForm.level=this.parseLeve(e),this.addForm.wrongCode=e.wrongCode,this.addForm.advice=e.advice,this.addForm.description=e.description,this.addForm.remark=e.remark},viewDevice:function(e){this.viewDialogVisible=!0},parseDate:function(e){if(null!=e.gmtCreate)return commonUtils.timestampToDate(e.gmtCreate,!0)}}},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"list-window",staticStyle:{width:"100%",heigh:"100%"},attrs:{id:"chechConf"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:0==e.showPage,expression:"showPage == 0"}]},[a("div",{staticClass:"searchbar"},[a("searchInput",{attrs:{"search-arr":e.searchArr},on:{clear:function(t){e.clearPart(t)},search:function(t){e.searchPart(t)},querySelect:function(t){var a=t.queryString,i=t.cb;e.queryBindDtu(a,i)}}})],1),e._v(" "),a("div",{staticClass:"operatebar"},[e.$PERMISSION.REPAIR_TEMPLATE_WRITE?a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.addWindowShow()}}},[e._v("新增模板")]):e._e(),e._v(" "),e.$PERMISSION.REPAIRPROBLEMDEFINE_READ?a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.showConfigDialog()}}},[e._v("问题类型配置")]):e._e()],1),e._v(" "),a("div",{staticClass:"list-div"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticClass:"deviceTable y_Public_table",staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""},on:{"sort-change":e.sortChangeEvent}},[a("el-table-column",{attrs:{prop:"name",sortable:"custom",label:"模板名称","min-width":"110","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"y_clamp"},[a("div",[e._v(e._s(t.row.name))])])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"wrongCode",sortable:"custom",label:"故障代码","min-width":"110"}}),e._v(" "),a("el-table-column",{attrs:{prop:"level",label:"使用级别",sortable:"custom",formatter:e.parseLeve,"min-width":"110"}}),e._v(" "),a("el-table-column",{attrs:{prop:"advice",sortable:"custom",label:"问题描述","min-width":"110","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"ellipsis"},[e._v(e._s(t.row.description))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"advice",sortable:"custom",label:"维修意见","min-width":"110"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("textareaCheckRows",{attrs:{"input-type":"pre","text-value":e.row.advice}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"remark",sortable:"custom",label:"备注","min-width":"110"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("textareaCheckRows",{attrs:{"input-type":"pre","text-value":e.row.remark}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"gmtCreate",sortable:"custom",label:"创建时间",formatter:e.parseDate,"min-width":"100"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"200px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.showViewDialog(t.row)}}},[e._v("查看")]),e._v(" "),e.$PERMISSION.REPAIR_TEMPLATE_WRITE?a("span",{staticClass:"vertical"}):e._e(),e._v(" "),e.$PERMISSION.REPAIR_TEMPLATE_WRITE?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.showEditDialog(t.row)}}},[e._v("编辑")]):e._e(),e._v(" "),e.$PERMISSION.REPAIR_TEMPLATE_WRITE?a("span",{staticClass:"vertical"}):e._e(),e._v(" "),e.$PERMISSION.REPAIR_TEMPLATE_WRITE?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.deleteConfig(t.row)}}},[e._v("删除")]):e._e()]}}])})],1),e._v(" "),a("Pagination",{attrs:{total:e.pagination.totalPage,"page-num":e.pagination.currentPage},on:{pageChange:e.pageChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:"新增维修模板",visible:e.addDialogVisible,left:"","close-on-click-modal":!1},on:{"update:visible":function(t){e.addDialogVisible=t},close:e.cancelAddDialog}},[a("el-form",{ref:"addForm",staticClass:"add_form",staticStyle:{width:"100%"},attrs:{model:e.addForm,rules:e.rules,"label-width":"80px","label-position":"left"}},[a("el-row",{staticStyle:{"margin-bottom":"0px"},attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"el-inputcss",attrs:{label:"模板名称：",prop:"name",rules:e.rules.name}},[a("el-input",{ref:"focusinput",attrs:{size:"small",maxlength:"16",placeholder:"模板名称"},nativeOn:{keyup:function(e){e.target.value=e.target.value.replace(/^\s+|\s+$/gm,"")}},model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"el-inputcss",attrs:{label:"维修级别：",prop:"level"}},[a("el-select",{staticStyle:{display:"block"},attrs:{size:"small",placeholder:"维修级别"},model:{value:e.addForm.level,callback:function(t){e.$set(e.addForm,"level",t)},expression:"addForm.level"}},e._l(e.levelOption,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1)],1),e._v(" "),a("el-row",{staticStyle:{"margin-bottom":"0px"},attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"el-inputcss",attrs:{label:"故障代码："}},[a("el-input",{attrs:{size:"small",maxlength:"16",placeholder:"故障代码"},model:{value:e.addForm.wrongCode,callback:function(t){e.$set(e.addForm,"wrongCode",t)},expression:"addForm.wrongCode"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"el-inputcss",attrs:{label:"问题描述："}},[a("el-select",{staticStyle:{display:"block"},attrs:{size:"small"},model:{value:e.addForm.description,callback:function(t){e.$set(e.addForm,"description",t)},expression:"addForm.description"}},e._l(e.descriptionTemps,function(e){return a("el-option",{key:e.id,attrs:{value:e.value}})}),1)],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{staticClass:"el-inputcss",attrs:{label:"维修建议："}},[a("el-input",{attrs:{autosize:{minRows:3,maxRows:4},type:"textarea",size:"small",maxlength:"50","show-word-limit":!0},model:{value:e.addForm.advice,callback:function(t){e.$set(e.addForm,"advice",t)},expression:"addForm.advice"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{staticClass:"el-inputcss",attrs:{label:"备注："}},[a("el-input",{attrs:{autosize:{minRows:3,maxRows:4},type:"textarea",size:"small",maxlength:"225","show-word-limit":!0},model:{value:e.addForm.remark,callback:function(t){e.$set(e.addForm,"remark",t)},expression:"addForm.remark"}})],1)],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submitAddDialog}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"编辑维修模板",visible:e.editDialogVisible,left:"","close-on-click-modal":!1},on:{"update:visible":function(t){e.editDialogVisible=t},close:e.cancelEditDialog}},[a("el-form",{ref:"editForm",staticClass:"add_form",staticStyle:{width:"100%"},attrs:{model:e.addForm,rules:e.rules,"label-width":"80px"}},[a("el-row",{staticStyle:{"margin-bottom":"0px"},attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"el-inputcss",attrs:{label:"模板名称：",prop:"name",rules:e.rules.name}},[a("el-input",{attrs:{size:"small",maxlength:"16",placeholder:"模板名称"},model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"el-inputcss",attrs:{label:"维修级别：",prop:"level"}},[a("el-select",{staticStyle:{display:"block"},attrs:{size:"small",placeholder:"维修级别"},model:{value:e.addForm.level,callback:function(t){e.$set(e.addForm,"level",t)},expression:"addForm.level"}},e._l(e.levelOption,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1)],1),e._v(" "),a("el-row",{staticStyle:{"margin-bottom":"0px"},attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"el-inputcss",attrs:{label:"故障代码："}},[a("el-input",{attrs:{size:"small",maxlength:"16",placeholder:"故障代码"},model:{value:e.addForm.wrongCode,callback:function(t){e.$set(e.addForm,"wrongCode",t)},expression:"addForm.wrongCode"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"el-inputcss",attrs:{label:"问题描述："}},[a("el-select",{staticStyle:{display:"block"},attrs:{size:"small"},model:{value:e.addForm.description,callback:function(t){e.$set(e.addForm,"description",t)},expression:"addForm.description"}},e._l(e.descriptionTemps,function(e){return a("el-option",{key:e.id,attrs:{value:e.value}})}),1)],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{staticClass:"el-inputcss",attrs:{label:"维修建议："}},[a("el-input",{attrs:{autosize:{minRows:3,maxRows:4},type:"textarea",size:"small",maxlength:"50","show-word-limit":!0},model:{value:e.addForm.advice,callback:function(t){e.$set(e.addForm,"advice",t)},expression:"addForm.advice"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{staticClass:"el-inputcss",attrs:{label:"备注："}},[a("el-input",{attrs:{autosize:{minRows:3,maxRows:4},type:"textarea",size:"small",maxlength:"225","show-word-limit":!0},model:{value:e.addForm.remark,callback:function(t){e.$set(e.addForm,"remark",t)},expression:"addForm.remark"}})],1)],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submitEditDialog}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"查看维修模板",visible:e.viewDialogVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.viewDialogVisible=t},close:e.cancelViewDialog}},[a("div",{staticClass:"detail_info"},[a("div",{staticClass:"info"},[a("div",{staticClass:"label"},[e._v("模板名称：")]),e._v(" "),a("div",{staticClass:"value"},[e._v(e._s(e.addForm.name))])]),e._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"label"},[e._v("维修级别：")]),e._v(" "),a("div",{staticClass:"value"},[e._v(e._s(e.addForm.level))])]),e._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"label"},[e._v("故障代码：")]),e._v(" "),a("div",{staticClass:"value"},[e._v(e._s(e.addForm.wrongCode))])]),e._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"label"},[e._v("问题描述：")]),e._v(" "),a("div",{staticClass:"value"},[e._v(e._s(e.addForm.description))])]),e._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"label"},[e._v("维修建议：")]),e._v(" "),a("div",{staticClass:"value"},[e._v(e._s(e.addForm.advice))])]),e._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"label"},[e._v("备注：")]),e._v(" "),a("div",{staticClass:"value"},e._l(e.addForm.remark.split("\n"),function(t,i){return a("div",{key:i},[e._v(e._s(t))])}),0)])])])],1),e._v(" "),1==e.showPage?[a("ErrConf",{staticStyle:{width:"100%",heigh:"100%"}})]:e._e()],2)},staticRenderFns:[]};var p=a("C7Lr")(u,m,!1,function(e){a("2iOV"),a("LAqv")},"data-v-221a29b6",null);t.default=p.exports}});