<template>
  <d2-container type="ghost">
    <iframe :src="src" frameborder="0" style="height: 99%;width: 100%;background-color:#fff;"></iframe>
  </d2-container>
</template>

<script>
export default {
  name: "page-iframe",
  data() {
    return {
      src: ""
    };
  },
  watch: {
    $route: {
      handler(val) {
        this.src = val.meta.url;
      },
      immediate: true
    }
  }
};
</script>
