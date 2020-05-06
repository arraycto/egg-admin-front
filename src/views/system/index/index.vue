<template>
  <d2-container class="index-page">
    <p>
      <b>应用名称</b>
      <span>后台管理系统</span>
    </p>
    <p>
      <b>版本信息</b>
      <span>{{appVersion}}</span>
    </p>
    <p v-for="(value,key) in sysInfo" :key="key">
      <b>{{key}}</b>
      <span>{{value}}</span>
    </p>
  </d2-container>
</template>

<script>
import { getSysInfo } from "@/api/sys/sysinfo";

export default {
  name: "index-page",
  data() {
    return {
      appVersion: process.env.VUE_APP_VERSION,
      sysInfo: {}
    };
  },
  created() {
    getSysInfo().then(res => {
      this.sysInfo = res.data;
    });
  }
};
</script>

<style lang="scss" scoped>
.index-page {
  p {
    b {
      margin-right: 10px;
    }
  }
}
</style>
