<template>
  <avue-input
    :value="value"
    placeholder="请选择上级部门"
    type="tree"
    :dic="treeData"
    @input="$emit('input',$event)"
  ></avue-input>
</template>

<script>
import { getTree } from "@/api/upms/dept";

export default {
  name: "dept-select",
  props: ["value"],
  data() {
    return {
      treeData: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      getTree().then(res => {
        const buildTree = list => {
          return list.map(item => {
            let children = [];
            if (item.children && item.children.length) {
              children = buildTree(item.children);
            }
            return {
              label: item.name,
              value: item._id,
              children
            };
          });
        };
        this.treeData = [
          {
            label: "一级部门",
            value: "0",
            children: buildTree(res.data)
          }
        ];
      });
    }
  }
};
</script>

<style lang="" scoped>
</style>