import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import store from "@/store";
import { setTitle, cookies, routerUtil } from "@/libs/util";
import { frameIn, frameOut, errorPage } from "./routes";
import layoutHeaderAside from "@/layout/header-aside";
Vue.use(VueRouter);

const router = new VueRouter({
  base: process.env.VUE_APP_PUBLIC_PATH || "/",
  mode: "history",
  routes: frameIn.concat(...frameOut)
});

router.beforeEach(async (to, from, next) => {
  // 进度条
  NProgress.start();
  // 关闭搜索面板
  store.commit("d2admin/search/set", false);
  const isLogin = cookies.get("token"); // 是否已登录
  const isFrameOut = frameOut.some(item => item.name === to.name); // 是否框架外页面
  const hasMenu = store.state.d2admin.menu.header.length; // 是否已获取菜单
  if (isFrameOut) {
    if (isLogin && to.name === "login") {
      // 已登录且前往页面时登录页时，跳转到首页
      next({ name: "index" });
    }
  } else {
    if (!isLogin) {
      // 未登录，跳转到登录页，携带上登陆成功之后需要跳转的页面完整路径
      next({
        name: "login",
        query: { redirect: to.fullPath }
      });
    } else if (!hasMenu) {
      // 已登录，未获取到菜单
      const menuRoutes = await store.dispatch("d2admin/menu/getMenu");
      store.commit("d2admin/page/init", [...frameIn, ...menuRoutes]);
      // 动态的添加路由
      router.addRoutes(routerUtil.getLayoutRoutes(menuRoutes));
      router.addRoutes(errorPage); // 增加404page
      next({ ...to, replace: true });
    }
  }
  // 确认已经加载多标签页数据 https://github.com/d2-projects/d2-admin/issues/201
  await store.dispatch("d2admin/page/isLoaded");
  // 确认已经加载组件尺寸设置 https://github.com/d2-projects/d2-admin/issues/198
  await store.dispatch("d2admin/size/isLoaded");
  next();
  NProgress.done();
});

router.afterEach(to => {
  // 进度条
  NProgress.done();
  // 多页控制 打开新的页面
  store.dispatch("d2admin/page/open", to);
  // 更改标题
  setTitle(to.meta.title);
});

export default router;
