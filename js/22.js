(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./src/views/upms/dept/option.js":
/*!***************************************!*\
  !*** ./src/views/upms/dept/option.js ***!
  \***************************************/
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
    label: "上级部门",
    prop: "parentId",
    value: "0",
    hide: true,
    formslot: true,
    span: 24,
    rules: [{
      required: true,
      message: "请选择上级部门",
      trigger: "change"
    }]
  }, {
    label: "部门名称",
    prop: "name",
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
//# sourceMappingURL=22.js.map