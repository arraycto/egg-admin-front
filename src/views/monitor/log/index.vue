<template>
  <d2-container>
    <avue-crud
      ref="crud"
      v-model="formData"
      :page="page"
      :data="tableData"
      :table-loading="tableLoading"
      :option="tableOption"
      @current-change="pageCurrentChange"
      @size-change="pageSizeChange"
      @row-update="handleUpdate"
      @row-save="handleSave"
      @search-change="searchChange"
      @search-reset="searchReset"
      @refresh-change="getDataList"
      @selection-change="selectionChange"
      @row-del="rowDel"
    ></avue-crud>
  </d2-container>
</template>

<script>
import crudMixin from "@/mixins/crud";
import { tableOption } from "./option";
import { getList } from "@/api/sys/log";

export default {
  name: "sys-log",
  mixins: [crudMixin],
  data() {
    return {
      crudOption: {
        created: false,
        getList: null
      },
      tableOption
    };
  },
  watch: {
    $route: {
      handler(val) {
        this.crudOption.getList = getList[val.query.type];
        this.getDataList();
      },
      immediate: true
    }
  }
};
</script>
