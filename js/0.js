(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/core-js/modules/es.array.every.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.every.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $every = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").every;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var STRICT_METHOD = arrayMethodIsStrict('every');
var USES_TO_LENGTH = arrayMethodUsesToLength('every');

// `Array.prototype.every` method
// https://tc39.github.io/ecma262/#sec-array.prototype.every
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./src/mixins/crud.js":
/*!****************************!*\
  !*** ./src/mixins/crud.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_every__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.every */ "./node_modules/core-js/modules/es.array.every.js");
/* harmony import */ var core_js_modules_es_array_every__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_every__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _github_workspace_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _github_workspace_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");







/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      // 设置属性
      crudOption: {
        rowKey: "_id",
        // 删除使用的key(id/_id/uuid/...)
        created: true,
        // 此页面是否在激活（进入）时，查询数据列表?
        getList: null,
        // 获取数据列表方法
        create: null,
        // 添加数据方法
        update: null,
        // 编辑数据方法
        remove: null // 删除单条数据方法

      },
      // 默认属性
      pageDefault: {
        total: 0,
        // 总条数
        currentPage: 1,
        // 当前页数
        pageSize: 10 // 每页显示多少条

      },
      page: null,
      sortDefault: {
        order: "descending",
        prop: "createTime"
      },
      // 排序
      sort: null,
      searchForm: {},
      // 查询条件
      tableData: [],
      // 数据列表
      formData: {},
      tableLoading: false,
      // 数据列表，loading状态
      dataSelections: [] // 数据列表，多选项

    };
  },
  created: function created() {
    if (this.crudOption.created) {
      this.getDataList();
    }
  },
  methods: {
    /**
     * @description 获取数据列表
     */
    getDataList: function getDataList() {
      var _this = this;

      return Object(_github_workspace_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.t0 = _this.beforeGetList;

                if (!_context2.t0) {
                  _context2.next = 4;
                  break;
                }

                _context2.next = 4;
                return _this.beforeGetList();

              case 4:
                _this.tableLoading = true;

                if (!_this.page) {
                  _this.page = _this.pageDefault || {};
                }

                if (!_this.sort) {
                  _this.sort = _this.sortDefault || {};
                }

                return _context2.abrupt("return", _this.crudOption.getList(Object(_github_workspace_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_github_workspace_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_github_workspace_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, _this.page), _this.sort), _this.searchForm)).then(function (response) {
                  console.log(response);
                  _this.tableData = response.data || [];
                  _this.page.total = response.total || 0;
                }).catch(function (e) {
                  _this.tableData = [];
                  _this.page.total = 0;
                }).finally( /*#__PURE__*/Object(_github_workspace_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _this.$refs.crud && _this.$refs.crud.selectClear();
                          _this.tableLoading = false;
                          _context.t0 = _this.afterGetList;

                          if (!_context.t0) {
                            _context.next = 6;
                            break;
                          }

                          _context.next = 6;
                          return _this.afterGetList();

                        case 6:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }))));

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },

    /**
     * @description 数据添加
     * @param {Object} row 为当前的数据
     * @param {Function} done 为表单关闭函数
     * @param {Function} loading 为表单停止loading函数
     **/
    handleSave: function handleSave(row, done, loading) {
      var _this2 = this;

      return Object(_github_workspace_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var obj;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.t0 = _this2.beforeSave;

                if (!_context4.t0) {
                  _context4.next = 4;
                  break;
                }

                _context4.next = 4;
                return _this2.beforeSave();

              case 4:
                obj = _this2.filterObj(row);
                delete obj[_this2.crudOption.rowKey];
                return _context4.abrupt("return", _this2.crudOption.create(obj).then(function (res) {
                  _this2.$message.success("保存成功");

                  _this2.getDataList();

                  done && done();
                }).catch(function (e) {
                  loading && loading();
                }).finally( /*#__PURE__*/Object(_github_workspace_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.t0 = _this2.afterSave;

                          if (!_context3.t0) {
                            _context3.next = 4;
                            break;
                          }

                          _context3.next = 4;
                          return _this2.afterSave();

                        case 4:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }))));

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },

    /**
     * @description 数据更新
     * @param {Object} row 为当前的数据
     * @param {Number} index 为当前更新数据的行数
     * @param {Function} done 为表单关闭函数
     * @param {Function} loading 为表单停止loading函数
     **/
    handleUpdate: function handleUpdate(row, index, done, loading) {
      var _this3 = this;

      return Object(_github_workspace_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var obj;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.t0 = _this3.beforeUpdate;

                if (!_context6.t0) {
                  _context6.next = 4;
                  break;
                }

                _context6.next = 4;
                return _this3.beforeUpdate();

              case 4:
                obj = _this3.filterObj(row);
                return _context6.abrupt("return", _this3.crudOption.update(obj[_this3.crudOption.rowKey], obj).then(function (res) {
                  _this3.$message.success("保存成功");

                  _this3.getDataList();

                  done && done();
                }).catch(function (e) {
                  loading && loading();
                }).finally( /*#__PURE__*/Object(_github_workspace_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.t0 = _this3.afterUpdate;

                          if (!_context5.t0) {
                            _context5.next = 4;
                            break;
                          }

                          _context5.next = 4;
                          return _this3.afterUpdate();

                        case 4:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }))));

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },

    /**
     * @description 删除行
     * @param {Object} row 行数据
     */
    rowDel: function rowDel(row) {
      var _this4 = this;

      return Object(_github_workspace_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.t0 = _this4.beforeRowDel;

                if (!_context8.t0) {
                  _context8.next = 4;
                  break;
                }

                _context8.next = 4;
                return _this4.beforeRowDel();

              case 4:
                return _context8.abrupt("return", _this4.$confirm("确认进行删除操作？", "提示", {
                  type: "warning"
                }).then(function () {
                  return _this4.crudOption.remove(row[_this4.crudOption.rowKey]);
                }).then(function (res) {
                  _this4.$message.success("删除成功");

                  _this4.getDataList();
                }).finally( /*#__PURE__*/Object(_github_workspace_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          _context7.t0 = _this4.afterRowDel;

                          if (!_context7.t0) {
                            _context7.next = 4;
                            break;
                          }

                          _context7.next = 4;
                          return _this4.afterRowDel();

                        case 4:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                }))));

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },

    /**
     * @description 搜索
     * @param {Object} form 搜索表单数据(不含自定义项)
     */
    searchChange: function searchChange(form, done) {
      this.searchForm = this.filterObj(Object.assign(this.searchForm, this.$refs.crud ? this.$refs.crud.searchForm : {}, form), [undefined, null, ""]);
      this.getDataList();
      done && done();
    },

    /**
     * @description 搜索重置
     */
    searchReset: function searchReset() {
      this.searchForm = {};
      this.page = this.pageDefault;
      this.getDataList();
    },

    /**
     * @description 多选
     * @param {Array} row 选中行数据
     */
    selectionChange: function selectionChange(row) {
      this.dataSelections = row;
    },

    /**
     * @description 批量删除
     */
    batchDel: function batchDel() {
      var _this5 = this;

      return Object(_github_workspace_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
        var length;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.t0 = _this5.beforeBatchDel;

                if (!_context10.t0) {
                  _context10.next = 4;
                  break;
                }

                _context10.next = 4;
                return _this5.beforeBatchDel();

              case 4:
                length = _this5.dataSelections.length;

                if (length) {
                  _context10.next = 7;
                  break;
                }

                return _context10.abrupt("return", _this5.$message.warning("请选择删除项"));

              case 7:
                return _context10.abrupt("return", _this5.$confirm("\u786E\u8BA4\u5220\u9664\u6240\u9009\u7684".concat(length, "\u6761\u6570\u636E\uFF1F"), "提示", {
                  type: "warning"
                }).then(function () {
                  var ids = _this5.dataSelections.map(function (item) {
                    return item[_this5.crudOption.rowKey];
                  }) // 根据后端接口传数组或者逗号拼接的字符串
                  .join(",");

                  return _this5.crudOption.remove(ids);
                }).then(function (res) {
                  _this5.$message.success("删除成功");

                  _this5.getDataList();
                }).finally( /*#__PURE__*/Object(_github_workspace_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                  return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          _context9.t0 = _this5.afterBatchDel;

                          if (!_context9.t0) {
                            _context9.next = 4;
                            break;
                          }

                          _context9.next = 4;
                          return _this5.afterBatchDel();

                        case 4:
                        case "end":
                          return _context9.stop();
                      }
                    }
                  }, _callee9);
                }))));

              case 8:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }))();
    },

    /**
     * @description 分页, 每页条数
     * @param {Number} size 每页条数
     */
    pageSizeChange: function pageSizeChange(size) {
      this.page.pageSize = size;
      this.getDataList();
    },

    /**
     * @description 分页, 当前页
     * @param {Number} current 当前页
     */
    pageCurrentChange: function pageCurrentChange(current) {
      this.page.currentPage = current;
      this.getDataList();
    },

    /**
     * @description 排序
     * @param {Object} column 列数据
     * @param {String} order 排序顺序
     * @param {String} prop 排序字段
     */
    sortChange: function sortChange(_ref6) {
      var column = _ref6.column,
          order = _ref6.order,
          prop = _ref6.prop;

      if (order && prop) {
        this.sort = {
          order: order,
          prop: prop
        };
      } else {
        this.sort = this.sortDefault;
      }

      this.getDataList();
    },

    /**
     * @description 过滤对象空值
     * @param {Object} row 被过滤对象
     * @param {Array} value 过滤的值
     */
    filterObj: function filterObj(row) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [undefined, null];
      var temp = {};

      var _loop = function _loop(key) {
        if (value.every(function (val) {
          return row[key] !== val;
        })) {
          temp[key] = row[key];
        }
      };

      for (var key in row) {
        _loop(key);
      }

      return temp;
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=0.js.map