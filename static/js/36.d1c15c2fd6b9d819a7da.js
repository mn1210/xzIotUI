webpackJsonp([36],{"2JpJ":function(t,s){},etg3:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"firmwareDetail"},[a("el-dialog",{attrs:{"close-on-click-modal":!1,title:"固件详情",visible:t.$parent.detailModel,width:"25%","before-close":t.handleClose},on:{"update:visible":function(s){return t.$set(t.$parent,"detailModel",s)}}},[a("span",{staticClass:"spanClass el-inputcss"},[t._v("当前固件号：")]),t._v(" "),a("span",{staticClass:"firm-class"},[t._v(t._s(t.firmwareDetail.firmwareVersion))]),t._v(" "),a("br"),t._v(" "),a("span",{staticClass:"spanClass el-inputcss"},[t._v("版本说明：")]),t._v(" "),a("span",{staticClass:"firm-class"},[t._v(t._s(t.firmwareDetail.firmwareInfo))]),t._v(" "),a("br"),t._v(" "),a("span",{staticClass:"spanClass el-inputcss"},[t._v("固件地址：")]),t._v(" "),a("span",{staticClass:"firm-class"},[t._v(t._s(t.firmwareDetail.download))]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(s){t.$parent.detailModel=!1}}},[t._v("关闭")])],1)])],1)},staticRenderFns:[]};var i=a("C7Lr")({name:"firmwareDetail",props:["firmwareDetail"],data:function(){return{detailModel:!1,detailR:[]}},methods:{handleClose:function(t){t()},handleClick:function(t,s){},getList:function(t){this.detailR=t}}},e,!1,function(t){a("2JpJ")},"data-v-86393400",null);s.default=i.exports}});