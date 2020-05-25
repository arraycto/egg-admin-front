import layoutHeaderAside from "@/layout/header-aside";

/**
 * 在主框架内显示
 */
export const frameIn = [
  {
    path: "/",
    redirect: { name: "index" },
    component: layoutHeaderAside,
    children: [
      // 首页
      {
        path: "index",
        name: "index",
        meta: {
          auth: true
        },
        component: () => import("@/views/system/index")
      },
      // 系统 前端日志
      {
        path: "sys-log",
        name: "sys-log",
        meta: {
          title: "前端日志",
          auth: true
        },
        component: () => import("@/views/system/log")
      },
      // 刷新页面 必须保留
      {
        path: "refresh",
        name: "refresh",
        hidden: true,
        component: () => import("@/views/system/function/refresh")
      },
      // 页面重定向 必须保留
      {
        path: "redirect/:route*",
        name: "redirect",
        hidden: true,
        component: () => import("@/views/system/function/redirect")
      }
    ]
  }
];

/**
 * 在主框架之外显示
 */
export const frameOut = [
  // 登录
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/system/login")
  }
];

/**
 * 错误页面
 */
export const errorPage = [
  {
    path: "*",
    name: "404",
    component: () => import("@/views/system/error/404")
  }
];

// 导出需要显示菜单的
// export const frameInRoutes = frameIn;

// 重新组织后导出
export default [...frameIn, ...frameOut, ...errorPage];
