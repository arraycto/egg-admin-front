<template>
  <el-submenu :index="menu.name || uniqueId">
    <template slot="title">
      <d2-icon :name="menu.icon||''" />
      <span slot="title">{{menu.title}}</span>
    </template>
    <template v-for="(child, childIndex) in menu.children">
      <d2LayoutMenuSub
        v-if="child.children&&child.children.length"
        :menu="child"
        :key="childIndex"
      />
      <d2LayoutMenuItem v-else :menu="child" :key="childIndex" @click="$emit('click',$event)" />
    </template>
  </el-submenu>
</template>

<script>
import { uniqueId } from "lodash";
// 组件
import d2LayoutMenuItem from "../menu-item";

export default {
  name: "d2-layout-menu-sub",
  components: {
    d2LayoutMenuItem
  },
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
