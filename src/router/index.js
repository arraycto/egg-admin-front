import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import store from "@/store";
import util from "@/libs/util.js";
import { frameIn, frameOut, errorPage } from "./routes";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: frameIn.concat(...frameOut)
});

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  const isLogin = util.cookies.get("token");
  const isFrameOut = frameOut.some(item => item.name === to.name);
  // if (isFrameOut ) {
  //   next();
  // }

  if (!util.cookies.get("token") && to.name !== "login") {
    // 未登录且前往页面不是登录页，跳转到登录页，携带上登陆成功之后需要跳转的页面完整路径
    next({
      // replace: true,
      name: "login",
      query: {
        redirect: to.fullPath
      }
    });
  } else if (util.cookies.get("token") && to.name === "login") {
    // 已登录且前往页面时登录页时，跳转到首页
    next({
      name: "index"
    });
  } else {
    if (util.cookies.get("token") && !store.state.d2admin.menu.header.length) {
      const menuRoutes = await store.dispatch("d2admin/menu/getMenu");
      router.addRoutes(menuRoutes); // 动态的添加路由
      router.addRoutes(errorPage); // 增加404page
      next({ ...to, replace: true });
    } else {
      next(); // 否则全部重定向到登录页
      NProgress.done();
    }
  }
});

// router.afterEach(to => {
//   Util.opendPage(router.app, to.name, to.params, to.query, to.meta, to.path);
//   NProgress.done();
//   window.scrollTo(0, 0);
// });
router.afterEach(to => {
  // 进度条
  NProgress.done();
  // 多页控制 打开新的页面
  store.dispatch("d2admin/page/open", to);
  // 更改标题
  util.title(to.meta.title);
});

export default router;
