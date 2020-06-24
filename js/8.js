(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/upms/user/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/upms/user/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_crud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mixins/crud */ "./src/mixins/crud.js");
/* harmony import */ var _option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./option */ "./src/views/upms/user/option.js");
/* harmony import */ var _api_sys_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/sys/user */ "./src/api/sys/user.js");
/* harmony import */ var _api_sys_role__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/sys/role */ "./src/api/sys/role.js");
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
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "upms-user",
  mixins: [_mixins_crud__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      crudOption: {
        getList: _api_sys_user__WEBPACK_IMPORTED_MODULE_2__["getList"],
        create: _api_sys_user__WEBPACK_IMPORTED_MODULE_2__["create"],
        update: _api_sys_user__WEBPACK_IMPORTED_MODULE_2__["update"],
        remove: _api_sys_user__WEBPACK_IMPORTED_MODULE_2__["remove"]
      },
      tableOption: _option__WEBPACK_IMPORTED_MODULE_1__["tableOption"],
      roleList: [],
      deptTree: []
    };
  },
  created: function created() {
    var _this = this;

    Object(_api_sys_role__WEBPACK_IMPORTED_MODULE_3__["getList"])().then(function (res) {
      _this.roleList = res.data;
    });
    Object(_api_sys_dept__WEBPACK_IMPORTED_MODULE_4__["getTree"])().then(function (res) {
      _this.deptTree = res.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4f7348be-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/upms/user/index.vue?vue&type=template&id=167c049c&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4f7348be-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/upms/user/index.vue?vue&type=template&id=167c049c& ***!
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
            key: "deptId",
            fn: function(ref) {
              var row = ref.row
              return [_c("span", [_vm._v(_vm._s(row.dept && row.dept.name))])]
            }
          },
          {
            key: "deptIdForm",
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
                    value: row.deptId,
                    callback: function($$v) {
                      _vm.$set(row, "deptId", $$v)
                    },
                    expression: "row.deptId"
                  }
                })
              ]
            }
          },
          {
            key: "roleIds",
            fn: function(ref) {
              var row = ref.row
              return _vm._l(row.roles, function(item) {
                return _c("el-tag", { key: item._id }, [
                  _vm._v(_vm._s(item.name))
                ])
              })
            }
          },
          {
            key: "roleIdsForm",
            fn: function(ref) {
              var row = ref.row
              return [
                _c(
                  "el-select",
                  {
                    attrs: { multiple: "" },
                    model: {
                      value: row.roleIds,
                      callback: function($$v) {
                        _vm.$set(row, "roleIds", $$v)
                      },
                      expression: "row.roleIds"
                    }
                  },
                  _vm._l(_vm.roleList, function(item) {
                    return _c("el-option", {
                      key: item._id,
                      attrs: { label: item.name, value: item._id }
                    })
                  }),
                  1
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

/***/ "./src/api/sys/role.js":
/*!*****************************!*\
  !*** ./src/api/sys/role.js ***!
  \*****************************/
/*! exports provided: getList, getInfo, create, update, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getList", function() { return getList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInfo", function() { return getInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _libs_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/axios */ "./src/libs/axios.js");
 // 获取列表

function getList(params) {
  return Object(_libs_axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/role",
    params: params
  });
} // 获取单条信息

function getInfo(id) {
  return Object(_libs_axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/role/".concat(id)
  });
} // 新增

function create(data) {
  return Object(_libs_axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/role",
    method: "post",
    data: data
  });
} // 修改

function update(id, data) {
  return Object(_libs_axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/role/" + id,
    method: "put",
    data: data
  });
} // 删除

function remove(id) {
  return Object(_libs_axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/role/".concat(id),
    method: "delete"
  });
}

/***/ }),

/***/ "./src/api/sys/user.js":
/*!*****************************!*\
  !*** ./src/api/sys/user.js ***!
  \*****************************/
/*! exports provided: getList, getInfo, create, update, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getList", function() { return getList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInfo", function() { return getInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _libs_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/axios */ "./src/libs/axios.js");
 // 获取列表

function getList(params) {
  return Object(_libs_axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/user",
    params: params
  });
} // 获取单条信息

function getInfo(id) {
  return Object(_libs_axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/user/" + id
  });
} // 新增

function create(data) {
  return Object(_libs_axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/user",
    method: "post",
    data: data
  });
} // 修改

function update(id, data) {
  return Object(_libs_axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/user/" + id,
    method: "put",
    data: data
  });
} // 删除

function remove(id) {
  return Object(_libs_axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/user/" + id,
    method: "delete"
  });
}

/***/ }),

/***/ "./src/views/upms/user/index.vue":
/*!***************************************!*\
  !*** ./src/views/upms/user/index.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_167c049c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=167c049c& */ "./src/views/upms/user/index.vue?vue&type=template&id=167c049c&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/upms/user/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_167c049c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_167c049c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/upms/user/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/upms/user/index.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/views/upms/user/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/upms/user/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/upms/user/index.vue?vue&type=template&id=167c049c&":
/*!**********************************************************************!*\
  !*** ./src/views/upms/user/index.vue?vue&type=template&id=167c049c& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f7348be_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_167c049c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4f7348be-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=167c049c& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4f7348be-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/upms/user/index.vue?vue&type=template&id=167c049c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f7348be_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_167c049c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f7348be_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_167c049c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/upms/user/option.js":
/*!***************************************!*\
  !*** ./src/views/upms/user/option.js ***!
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
  searchMenuSpan: 6,
  column: [{
    label: "用户名",
    prop: "username",
    search: true,
    rules: [{
      required: true,
      message: "请输入用户名",
      trigger: "change"
    }]
  }, {
    label: "密码",
    prop: "password",
    type: "password",
    hide: true,
    editDisplay: false,
    rules: [{
      required: true,
      message: "请输入密码",
      trigger: "change"
    }]
  }, {
    label: "部门",
    prop: "deptId",
    type: "tree",
    slot: true,
    formslot: true
  }, {
    label: "角色",
    prop: "roleIds",
    slot: true,
    formslot: true
  }, {
    label: "真实姓名",
    prop: "realName"
  }, {
    label: "性别",
    prop: "gender",
    type: "select",
    dicUrl: "/dict/type/gender"
  }, {
    label: "邮箱",
    prop: "email"
  }, {
    label: "手机号",
    prop: "mobile"
  }, {
    label: "状态",
    prop: "status",
    type: "switch",
    value: "1",
    dicData: [{
      label: "禁用",
      value: "0"
    }, {
      label: "启用",
      value: "1"
    }]
  }]
};

/***/ })

}]);
//# sourceMappingURL=8.js.map