export default {
  methods: {
    menuClick(menu) {
      if (/^d2-menu-empty-\d+$/.test(menu.path) || menu.path === undefined) {
        this.$message.warning("临时菜单");
      } else if (menu.component.name.includes("page-main")) {
        // 点击头部菜单
        this.$store.commit("d2admin/menu/asideSet", menu.children || []);
      } else if (menu.component.name === "page-iframe" && menu.meta.blank) {
        window.open(menu.meta.url, "_blank");
      } else {
        this.$router.push({
          path: menu.path + (menu.query || "")
        });
      }
    }
  }
};
