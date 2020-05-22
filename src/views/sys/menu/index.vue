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
      @row-update="handleUpdateHook"
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
        <el-button
          type="text"
          size="small"
          icon="el-icon-plus"
          @click="addMenu(row)"
          v-perm="'sys_menu_save'"
        >新增下级</el-button>
      </template>
      <template #componentForm="{row}">
        <el-select
          v-model="row.component"
          filterable
          allow-create
          default-first-option
          placeholder="请选择或输入前端组件"
        >
          <el-option label="Layout" value="Layout"></el-option>
          <el-option label="Main" value="Main"></el-option>
          <el-option label="Iframe" value="Iframe"></el-option>
        </el-select>
      </template>
    </avue-crud>
  </d2-container>
</template>

<script>
import crudMixin from "@/mixins/crud";
import { tableOption } from "./option";
import { getTree, create, update, remove } from "@/api/sys/menu";
import { mapActions } from "vuex";

export default {
  name: "sys-menu",
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
  watch: {
    formData: {
      handler(val) {
        const { component, type } = val;
        tableOption.column.forEach(item => {
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
    ...mapActions("d2admin/menu", ["getMenu"]),
    async addMenu(row) {
      this.$refs.crud.rowAdd();
      await this.$nextTick();
      this.formData.parentId = row._id;
    },
    async handleUpdateHook(...arg) {
      await this.handleUpdate.apply(this, arg);
      this.getMenu(true);
    }
  }
};
</script>