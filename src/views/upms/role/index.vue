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
      <template #menu="{row}">
        <el-button
          type="text"
          size="small"
          icon="el-icon-circle-plus-outline"
          @click="openMenu(row)"
        >权限</el-button>
      </template>
    </avue-crud>
    <el-dialog class="menu-dialog" title="菜单权限" :visible.sync="menuVisible" width="60%">
      <el-tree
        ref="menuTree"
        :data="menuTreeData"
        node-key="_id"
        default-expand-all
        show-checkbox
        @check="menuCheck"
      ></el-tree>
      <span slot="footer">
        <el-button type="primary" @click="saveMenu()">保存</el-button>
        <el-button @click="menuVisible=false">取 消</el-button>
      </span>
    </el-dialog>
  </d2-container>
</template>

<script>
import crudMixin from "@/mixins/crud";
import { tableOption } from "./option";
import { getList, create, update, remove } from "@/api/upms/role";
import { getTree as getMenuTree } from "@/api/admin/menu";

export default {
  name: "role",
  mixins: [crudMixin],
  data() {
    return {
      crudOption: {
        getList,
        create,
        update,
        remove
      },
      tableOption,
      menuVisible: false,
      menuTreeData: []
    };
  },
  created() {
    getMenuTree().then(res => {
      this.menuTreeData = this.$util.getElTree(res.data);
    });
  },
  methods: {
    async openMenu(row) {
      this.menuVisible = true;
      await this.$nextTick();
      this.formData = Object.assign({}, row);
      this.$refs.menuTree.setCheckedKeys(row.menuIds);
    },
    menuCheck(VNode, { checkedKeys }) {
      this.formData.menuIds = checkedKeys;
    },
    async saveMenu() {
      const { _id, menuIds } = this.formData;
      await this.handleUpdate({ _id, menuIds });
      this.menuVisible = false;
    }
  }
};
</script>

<style lang="scss">
.menu-dialog {
  .el-dialog__body {
    height: 500px;
    overflow-y: scroll;
  }
}
</style>