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
    >
      <template #menuLeft>
        <d2-upload multiple :show-file-list="false" @change="fileListChange">
          <el-button size="small" type="primary">上传</el-button>
        </d2-upload>
      </template>
      <template #menu="{row,index}">
        <el-button type="text" size="small" icon="el-icon-view" @click="preview(row,index)">预览</el-button>
      </template>
    </avue-crud>
  </d2-container>
</template>

<script>
import crudMixin from "@/mixins/crud";
import { tableOption } from "./option";
import { getList, remove } from "@/api/sys/upload";

export default {
  name: "sys-template",
  mixins: [crudMixin],
  data() {
    return {
      crudOption: {
        getList,
        remove
      },
      tableOption,
      uploadIds: ""
    };
  },
  methods: {
    fileListChange(fileList) {
      this.getDataList();
    },
    preview(row, index) {
      this.$ImagePreview(this.tableData, index);
    }
  }
};
</script>
