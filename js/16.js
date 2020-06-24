(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./src/views/monitor/log/option.js":
/*!*****************************************!*\
  !*** ./src/views/monitor/log/option.js ***!
  \*****************************************/
/*! exports provided: tableOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableOption", function() { return tableOption; });
var tableOption = {
  rowKey: "_id",
  align: "center",
  index: true,
  addBtn: false,
  menu: false,
  searchMenuSpan: 6,
  column: [{
    label: "请求方式",
    prop: "method",
    search: true
  }, {
    label: "请求地址",
    prop: "url",
    search: true
  }, {
    label: "操作名称",
    prop: "summary"
  }, {
    label: "ip地址",
    prop: "ip",
    search: true
  }, {
    label: "请求耗时",
    prop: "time"
  }, {
    label: "请求参数",
    prop: "params",
    overHidden: true
  }, {
    label: "操作用户",
    prop: "username",
    search: true
  }, {
    label: "用户标识",
    prop: "userAgent",
    overHidden: true
  }, {
    label: "状态",
    prop: "status",
    type: "select",
    dicData: [{
      label: "正常",
      value: 1
    }, {
      label: "异常",
      value: 0
    }]
  }, // {
  //   label: "类型",
  //   prop: "type",
  // },
  {
    label: "错误信息",
    prop: "error",
    overHidden: true
  }, {
    label: "日志时间",
    prop: "createTime",
    type: "datetimerange",
    search: true
  }]
};

/***/ })

}]);
//# sourceMappingURL=16.js.map