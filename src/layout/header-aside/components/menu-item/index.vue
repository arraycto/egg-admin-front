<template>
  <el-menu-item :index="menu.path || uniqueId" @click="$emit('click',menu)">
    <d2-icon :name="menu.icon||''" />
    <span slot="title">{{menu.title}}</span>
  </el-menu-item>
</template>

<script>
import { uniqueId } from "lodash";
export default {
  name: "d2-layout-menu-item",
  props: {
    menu: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  data() {
    return {
      uniqueId: uniqueId("d2-menu-empty-")
    };
  }
};
</script>
