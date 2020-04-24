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
        <avue-input v-model="row.parentId" placeholder="请选择上级菜单" type="tree" :dic="menuTree"></avue-input>
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
import { getList, create, update, remove } from "@/api/admin/menu";

export default {
  name: "navmenu",
  mixins: [crudMixin],
  data() {
    return {
      crudOption: {
        getList,
        create,
        update,
        remove
      },
      tableOption
    };
  },
  computed: {
    menuTree() {
      const getMenuTree = list => {
        return list.map(item => {
          let children = [];
          if (item.children && item.children.length) {
            children = getMenuTree(item.children);
          }
          return {
            label: item.title,
            value: item._id,
            children
          };
        });
      };
      return [
        {
          label: "一级菜单",
          value: "0",
          children: getMenuTree(this.tableData)
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
