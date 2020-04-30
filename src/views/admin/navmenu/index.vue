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
      <template #parentIdForm="{row}">
        <avue-input-tree
          v-model="row.parentId"
          placeholder="请选择上级菜单"
          :dic="menuTree"
          :props="{label:'title',value:'_id'}"
        ></avue-input-tree>
      </template>
      <template #icon="{row}">
        <d2-icon :name="row.icon" />
      </template>
      <template #iconForm="{row}">
        <d2-icon-select v-model="row.icon"></d2-icon-select>
      </template>
      <template #menu="{row}">
        <el-button type="text" size="small" icon="el-icon-plus" @click="addMenu(row)">新增下级</el-button>
      </template>
    </avue-crud>
  </d2-container>
</template>

<script>
import crudMixin from "@/mixins/crud";
import { tableOption } from "./option";
import { getTree, create, update, remove } from "@/api/admin/menu";

export default {
  name: "navmenu",
  mixins: [crudMixin],
  data() {
    return {
      crudOption: {
        getList: getTree,
        create,
        update,
        remove
      },
      tableOption
    };
  },
  computed: {
    menuTree() {
      return [
        {
          title: "一级菜单",
          _id: "0",
          children: this.tableData
        }
      ];
    }
  },
  methods: {
    async addMenu(row) {
      this.$refs.crud.rowAdd();
      await this.$nextTick();
      this.formData.parentId = row._id;
    }
  }
};
</script>
