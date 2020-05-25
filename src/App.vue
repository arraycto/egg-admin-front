<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  watch: {
    "$i18n.locale": "i18nHandle",
    "$route.matched"(val) {
      const _side = this.$store.state.d2admin.menu.header.filter(
        menu => menu.path === val[1].path
      );
      this.$store.commit(
        "d2admin/menu/asideSet",
        _side.length > 0 ? _side[0].children : []
      );
    }
  },
  created() {
    this.i18nHandle(this.$i18n.locale);
  },
  methods: {
    i18nHandle(val, oldVal) {
      this.$util.cookies.set("lang", val);
      document.querySelector("html").setAttribute("lang", val);
    }
  }
};
</script>

<style lang="scss">
@import "~@/assets/style/public-class.scss";
</style>
