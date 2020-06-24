(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./src/views/sys/dict/option.js":
/*!**************************************!*\
  !*** ./src/views/sys/dict/option.js ***!
  \**************************************/
/*! exports provided: tableOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableOption", function() { return tableOption; });
var tableOption = {
  rowKey: "_id",
  align: "center",
  index: true,
  column: [{
    label: "字典类型",
    prop: "type",
    span: 24,
    rules: [{
      required: true,
      message: "请输入字典类型",
      trigger: "change"
    }]
  }, {
    label: "父节点ID",
    prop: "parentId",
    hide: true,
    display: false,
    value: "0"
  }, {
    label: "字典名称",
    prop: "label",
    span: 24,
    rules: [{
      required: true,
      message: "请输入字典名称",
      trigger: "change"
    }]
  }, {
    label: "数据值",
    prop: "value",
    span: 24,
    rules: [{
      required: true,
      message: "请输入数据值",
      trigger: "change"
    }]
  }, {
    label: "备注",
    prop: "remark",
    span: 24
  }, {
    label: "排序",
    prop: "sort",
    type: "number",
    span: 24
  }]
};

/***/ })

}]);
//# sourceMappingURL=17.js.map