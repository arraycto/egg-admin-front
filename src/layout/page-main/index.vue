<template>
  <keep-alive :include="keepAlive">
    <router-view />
  </keep-alive>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "page-main",
  data() {
    return {};
  },
  computed: {
    ...mapState("d2admin", {
      keepAlive: state => state.page.keepAlive
    })
  }
};
</script>
