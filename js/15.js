(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/sys/menu/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/sys/menu/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _github_workspace_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _github_workspace_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _mixins_crud__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/mixins/crud */ "./src/mixins/crud.js");
/* harmony import */ var _option__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./option */ "./src/views/sys/menu/option.js");
/* harmony import */ var _api_sys_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/api/sys/menu */ "./src/api/sys/menu.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");







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
  name: "sys-menu",
  mixins: [_mixins_crud__WEBPACK_IMPORTED_MODULE_7__["default"]],
  data: function data() {
    return {
      crudOption: {
        getList: _api_sys_menu__WEBPACK_IMPORTED_MODULE_9__["getTree"],
        create: _api_sys_menu__WEBPACK_IMPORTED_MODULE_9__["create"],
        update: _api_sys_menu__WEBPACK_IMPORTED_MODULE_9__["update"],
        remove: _api_sys_menu__WEBPACK_IMPORTED_MODULE_9__["remove"]
      },
      tableOption: _option__WEBPACK_IMPORTED_MODULE_8__["tableOption"]
    };
  },
  watch: {
    formData: {
      handler: function handler(val) {
        var component = val.component,
            type = val.type;
        _option__WEBPACK_IMPORTED_MODULE_8__["tableOption"].column.forEach(function (item) {
          switch (item.prop) {
            case "query":
              item.display = component && component.includes("/");
              break;

            case "url":
            case "blank":
              item.display = component === "Iframe";
              break;

            case "icon":
            case "path":
            case "component":
            case "name":
            case "cache":
              item.display = type === "0";
              break;

            default:
              break;
          }
        });
      },
      deep: true,
      immediate: true
    }
  },
  computed: Object(_github_workspace_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_github_workspace_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_10__["mapState"])("d2admin/menu", ["perm"])), {}, {
    permission: function permission() {
      return {
        addBtn: !!this.perm.sys_menu_save,
        editBtn: !!this.perm.sys_menu_update,
        delBtn: !!this.perm.sys_menu_delete,
        addSubBtn: !!this.perm.sys_menu_save
      };
    },
    menuTree: function menuTree() {
      return [{
        title: "一级菜单",
        _id: "0",
        children: this.tableData
      }];
    }
  }),
  methods: Object(_github_workspace_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_github_workspace_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_10__["mapActions"])("d2admin/menu", ["getMenu"])), {}, {
    addMenu: function addMenu(row) {
      var _this = this;

      return Object(_github_workspace_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
    },
    afterUpdate: function afterUpdate() {
      var _this2 = this;

      return Object(_github_workspace_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.getMenu(true);

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  })
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4f7348be-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/sys/menu/index.vue?vue&type=template&id=0a34233e&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4f7348be-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/sys/menu/index.vue?vue&type=template&id=0a34233e& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
                    placeholder: "请选择上级菜单",
                    dic: _vm.menuTree,
                    props: { label: "title", value: "_id" }
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
            key: "icon",
            fn: function(ref) {
              var row = ref.row
              return [_c("d2-icon", { attrs: { name: row.icon } })]
            }
          },
          {
            key: "iconForm",
            fn: function(ref) {
              var row = ref.row
              return [
                _c("d2-icon-select", {
                  model: {
                    value: row.icon,
                    callback: function($$v) {
                      _vm.$set(row, "icon", $$v)
                    },
                    expression: "row.icon"
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
                _vm.permission.addSubBtn
                  ? _c(
                      "el-button",
                      {
                        attrs: {
                          type: "text",
                          size: "small",
                          icon: "el-icon-plus"
                        },
                        on: {
                          click: function($event) {
                            return _vm.addMenu(row)
                          }
                        }
                      },
                      [_vm._v("新增下级")]
                    )
                  : _vm._e()
              ]
            }
          },
          {
            key: "componentForm",
            fn: function(ref) {
              var row = ref.row
              return [
                _c(
                  "el-select",
                  {
                    attrs: {
                      filterable: "",
                      "allow-create": "",
                      "default-first-option": "",
                      placeholder: "请选择或输入前端组件"
                    },
                    model: {
                      value: row.component,
                      callback: function($$v) {
                        _vm.$set(row, "component", $$v)
                      },
                      expression: "row.component"
                    }
                  },
                  [
                    _c("el-option", {
                      attrs: { label: "Main", value: "Main" }
                    }),
                    _c("el-option", {
                      attrs: { label: "Iframe", value: "Iframe" }
                    })
                  ],
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

/***/ "./src/views/sys/menu/index.vue":
/*!**************************************!*\
  !*** ./src/views/sys/menu/index.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_0a34233e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=0a34233e& */ "./src/views/sys/menu/index.vue?vue&type=template&id=0a34233e&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/sys/menu/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_0a34233e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_0a34233e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/sys/menu/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/sys/menu/index.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/views/sys/menu/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/sys/menu/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/sys/menu/index.vue?vue&type=template&id=0a34233e&":
/*!*********************************************************************!*\
  !*** ./src/views/sys/menu/index.vue?vue&type=template&id=0a34233e& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f7348be_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0a34233e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4f7348be-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=0a34233e& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4f7348be-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/sys/menu/index.vue?vue&type=template&id=0a34233e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f7348be_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0a34233e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f7348be_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0a34233e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/sys/menu/option.js":
/*!**************************************!*\
  !*** ./src/views/sys/menu/option.js ***!
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
    label: "上级菜单",
    prop: "parentId",
    value: "0",
    hide: true,
    formslot: true,
    span: 24,
    rules: [{
      required: true,
      message: "请选择上级菜单",
      trigger: "change"
    }]
  }, {
    label: "菜单名称",
    prop: "title",
    span: 24,
    rules: [{
      required: true,
      message: "请输入菜单名称",
      trigger: "change"
    }]
  }, {
    label: "类型",
    prop: "type",
    type: "select",
    dicData: [{
      label: "菜单",
      value: "0"
    }, {
      label: "按钮",
      value: "1"
    }],
    span: 24,
    value: "0",
    rules: [{
      required: true,
      message: "请选择类型",
      trigger: "change"
    }]
  }, {
    label: "图标",
    prop: "icon",
    slot: true,
    formslot: true,
    display: true,
    span: 24
  }, {
    label: "路由路径",
    prop: "path",
    span: 24
  }, {
    label: "前端组件",
    prop: "component",
    formslot: true,
    span: 24
  }, {
    label: "携带参数",
    prop: "query",
    display: false,
    hide: true,
    span: 24
  }, {
    label: "组件名",
    prop: "name",
    span: 24
  }, {
    label: "Iframe地址",
    prop: "url",
    display: false,
    hide: true,
    span: 18
  }, {
    label: "新窗口打开",
    prop: "blank",
    type: "switch",
    value: false,
    display: false,
    hide: true,
    span: 6
  }, {
    label: "排序",
    prop: "sort",
    type: "number",
    span: 24,
    value: 0
  }, {
    label: "权限",
    prop: "permissions",
    span: 24
  }, {
    label: "路由缓存",
    prop: "cache",
    type: "switch",
    span: 24,
    value: true
  }]
};

/***/ })

}]);
//# sourceMappingURL=15.js.map