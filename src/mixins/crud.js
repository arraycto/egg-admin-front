export default {
  data() {
    return {
      // 设置属性
      crudOption: {
        rowKey: "_id", // 删除使用的key(id/_id/uuid/...)
        activated: true, // 此页面是否在激活（进入）时，查询数据列表?
        getList: null, // 获取数据列表方法
        create: null, // 添加数据方法
        update: null, // 编辑数据方法
        remove: null // 删除单条数据方法
        // removes: null // 删除多条数据方法
      },
      // 默认属性
      pageDefault: {
        total: 0, // 总条数
        currentPage: 1, // 当前页数
        pageSize: 10 // 每页显示多少条
      },
      page: {},
      searchForm: {}, // 查询条件
      tableData: [], // 数据列表
      formData: {},
      tableLoading: false, // 数据列表，loading状态
      dataSelections: [] // 数据列表，多选项
    };
  },
  created() {
    this.page = this.pageDefault;
    if (this.crudOption.activated) {
      this.getDataList();
    }
  },
  methods: {
    // 获取数据列表
    getDataList() {
      this.tableLoading = true;
      this.crudOption
        .getList({
          ...this.page,
          ...this.searchForm
        })
        .then(response => {
          console.log(response);
          this.tableData = response.data || [];
          this.page.total = response.total || 0;
        })
        .catch(e => {
          console.error(e);
          this.tableData = [];
          this.page.total = 0;
        })
        .finally(() => {
          this.$refs.crud && this.$refs.crud.selectClear();
          this.tableLoading = false;
        });
    },
    /**
     * @title 数据添加
     * @param row 为当前的数据
     * @param {Function} done 为表单关闭函数
     *
     **/
    handleSave(row, done, loading) {
      let obj = this.filterObj(row);
      delete obj[this.crudOption.rowKey];
      return this.crudOption
        .create(obj)
        .then(res => {
          this.$message({
            showClose: true,
            message: "保存成功",
            type: "success"
          });
          this.getDataList();
          done && done();
        })
        .catch(e => {
          loading && loading();
        });
    },
    /**
     * @title 数据更新
     * @param {Object} row 为当前的数据
     * @param {Number} index 为当前更新数据的行数
     * @param {Function} done 为表单关闭函数
     **/
    handleUpdate(row, index, done, loading) {
      let obj = this.filterObj(row);
      this.crudOption
        .update(obj[this.crudOption.rowKey], obj)
        .then(res => {
          this.$message({
            showClose: true,
            message: "保存成功",
            type: "success"
          });
          this.getDataList();
          done && done();
        })
        .catch(e => {
          loading && loading();
        });
    },
    /**
     * @title 删除行
     * @param {Object} row 行数据
     */
    rowDel(row) {
      this.$confirm("确认进行删除操作？", "提示", {
        type: "warning"
      })
        .then(() => {
          return this.crudOption.remove(row[this.crudOption.rowKey]);
        })
        .then(res => {
          this.$message({
            showClose: true,
            message: "删除成功",
            type: "success"
          });
          this.getDataList();
        });
    },
    /**
     * @title 搜索
     * @param {Object} form 搜索表单数据(不含自定义项)
     */
    searchChange(form, done) {
      this.searchForm = form;
      this.getDataList();
      done && done();
    },
    /**
     * @title 搜索重置
     */
    searchReset() {
      this.searchForm = {};
      this.page = this.pageDefault;
      this.getDataList();
    },
    /**
     * @title 多选
     * @param {Array} row 选中行数据
     */
    selectionChange(row) {
      this.dataSelections = row;
    },
    /**
     * @title 批量删除
     */
    batchDel() {
      const length = this.dataSelections.length;
      if (!length) {
        return this.$message.warning("请选择删除项");
      }
      this.$confirm(`确认删除所选的${length}条数据？`, "提示", {
        type: "warning"
      })
        .then(() => {
          let ids = this.dataSelections
            .map(item => {
              return item[this.crudOption.rowKey];
            })
            // 根据后端接口传数组或者逗号拼接的字符串
            .join(",");
          return this.crudOption.remove(ids);
        })
        .then(res => {
          this.$message.success("删除成功");
          this.getDataList();
        });
    },
    /**
     * @title 分页, 每页条数
     * @param {integer} size 每页条数
     */
    pageSizeChange(size) {
      this.page.pageSize = size;
      this.getDataList();
    },
    /**
     * @title 分页, 当前页
     * @param {integer} current 当前页
     */
    pageCurrentChange(current) {
      this.page.currentPage = current;
      this.getDataList();
    },
    /**
     * @title 过滤对象空值
     * @param {Object} row 被过滤对象
     */
    filterObj(row) {
      let temp = {};
      for (const key in row) {
        if (row[key] !== undefined && row[key] !== null && !key.includes("$")) {
          temp[key] = row[key];
        }
      }

      return temp;
    }
  }
};
