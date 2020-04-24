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
      <template #deptIdForm="{row}">
        <dept-select v-model="row.deptId"></dept-select>
      </template>
      <template #roleIds="{row}">
        <el-tag v-for="item in row.roleIdNames" :key="item._id">{{item.name}}</el-tag>
      </template>
      <template #roleIdsForm="{row}">
        <el-select v-model="row.roleIds" multiple>
          <el-option v-for="item in roleList" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </template>
      <template #deptId="{row}">
        <span>{{row.deptIdName&&row.deptIdName.name}}</span>
      </template>
    </avue-crud>
  </d2-container>
</template>

<script>
import crudMixin from "@/mixins/crud";
import { tableOption } from "./option";
import { getList, create, update, remove } from "@/api/upms/user";
import { getList as getRoleList } from "@/api/upms/role";

export default {
  name: "user",
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
      roleList: []
    };
  },
  created() {
    getRoleList().then(res => {
      this.roleList = res.data;
    });
  }
};
</script>
