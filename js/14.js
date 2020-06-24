(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/upms/dept/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/upms/dept/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _github_workspace_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _mixins_crud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/mixins/crud */ "./src/mixins/crud.js");
/* harmony import */ var _option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./option */ "./src/views/upms/dept/option.js");
/* harmony import */ var _api_sys_dept__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/sys/dept */ "./src/api/sys/dept.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "upms-dept",
  mixins: [_mixins_crud__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      crudOption: {
        getList: _api_sys_dept__WEBPACK_IMPORTED_MODULE_4__["getTree"],
        create: _api_sys_dept__WEBPACK_IMPORTED_MODULE_4__["create"],
        update: _api_sys_dept__WEBPACK_IMPORTED_MODULE_4__["update"],
        remove: _api_sys_dept__WEBPACK_IMPORTED_MODULE_4__["remove"]
      },
      tableOption: _option__WEBPACK_IMPORTED_MODULE_3__["tableOption"]
    };
  },
  computed: {
    deptTree: function deptTree() {
      return [{
        name: "一级部门",
        _id: "0",
        children: this.tableData
      }];
    }
  },
  methods: {
    addDept: function addDept(row) {
      var _this = this;

      return Object(_github_workspace_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.$refs.crud.rowAdd();

                _context.next = 3;
                return _this.$nextTick();

              case 3:
                _this.formData.parentId = row._id;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4f7348be-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/upms/dept/index.vue?vue&type=template&id=6848bfac&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4f7348be-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/upms/dept/index.vue?vue&type=template&id=6848bfac& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "d2-container",
    [
      _c("avue-crud", {
        ref: "crud",
        attrs: {
          page: _vm.page,
          "table-loading": _vm.tableLoading,
          option: _vm.tableOption,
          data: _vm.tableData
        },
        on: {
          "current-change": _vm.pageCurrentChange,
          "size-change": _vm.pageSizeChange,
          "search-change": _vm.searchChange,
          "search-reset": _vm.searchReset,
          "refresh-change": _vm.getDataList,
          "selection-change": _vm.selectionChange,
          "sort-change": _vm.sortChange,
          "row-save": _vm.handleSave,
          "row-update": _vm.handleUpdate,
          "row-del": _vm.rowDel
        },
        scopedSlots: _vm._u([
          {
            key: "parentIdForm",
            fn: function(ref) {
              var row = ref.row
              return [
                _c("avue-input-tree", {
                  attrs: {
                    placeholder: "请选择上级部门",
                    dic: _vm.deptTree,
                    props: { label: "name", value: "_id" }
                  },
                  model: {
                    value: row.parentId,
                    callback: function($$v) {
                      _vm.$set(row, "parentId", $$v)
                    },
                    expression: "row.parentId"
                  }
                })
              ]
            }
          },
          {
            key: "menu",
            fn: function(ref) {
              var row = ref.row
              return [
                _c(
                  "el-button",
                  {
                    attrs: {
                      type: "text",
                      size: "small",
                      icon: "el-icon-plus"
                    },
                    on: {
                      click: function($event) {
                        return _vm.addDept(row)
                      }
                    }
                  },
                  [_vm._v("新增下级")]
                )
              ]
            }
          }
        ]),
        model: {
          value: _vm.formData,
          callback: function($$v) {
            _vm.formData = $$v
          },
          expression: "formData"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/api/sys/dept.js":
/*!*****************************!*\
  !*** ./src/api/sys/dept.js ***!
  \*****************************/
/*! exports provided: getList, getTree, getInfo, create, update, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getList", function() { return getList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTree", function() { return getTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInfo", function() { return getInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _libs_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/axios */ "./src/libs/axios.js");

function getList(params) {
  return Object(_libs_axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/dept",
    params: params
  });
}
function getTree(params) {
  return Object(_libs_axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/dept/tree/get",
    params: params
  });
}
function getInfo(id) {
  return Object(_libs_axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/dept/" + id
  });
}
function create(data) {
  return Object(_libs_axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/dept",
    method: "post",
    data: data
  });
}
function update(id, data) {
  return Object(_libs_axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/dept/" + id,
    method: "put",
    data: data
  });
}
function remove(id) {
  return Object(_libs_axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/dept/" + id,
    method: "delete"
  });
}

/***/ }),

/***/ "./src/views/upms/dept/index.vue":
/*!***************************************!*\
  !*** ./src/views/upms/dept/index.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_6848bfac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6848bfac& */ "./src/views/upms/dept/index.vue?vue&type=template&id=6848bfac&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/upms/dept/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_6848bfac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_6848bfac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/upms/dept/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/upms/dept/index.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/views/upms/dept/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/upms/dept/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/upms/dept/index.vue?vue&type=template&id=6848bfac&":
/*!**********************************************************************!*\
  !*** ./src/views/upms/dept/index.vue?vue&type=template&id=6848bfac& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f7348be_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6848bfac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4f7348be-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=6848bfac& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4f7348be-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/upms/dept/index.vue?vue&type=template&id=6848bfac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f7348be_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6848bfac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f7348be_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6848bfac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

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
//# sourceMappingURL=14.js.map