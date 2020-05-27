import layoutHeaderAside from "@/layout/header-aside";
import pageIframe from "@/layout/page-iframe";
import pageMain from "@/layout/page-main";

const router = {};

router.generateRoutes = (menuArr, parent = { path: "" }) => {
  const componentMap = {
    Main: pageMain,
    Iframe: pageIframe
  };
  return menuArr.map(menu => {
    menu.path = parent.path + menu.path;
    let path = menu.path;
    let component =
      componentMap[menu.component] ||
      (() => import("@/views/" + menu.component));
    const children =
      menu.children && menu.children.length
        ? router.generateRoutes(menu.children, menu)
        : [];
    return {
      ...menu,
      path,
      component,
      children,
      meta: {
        title: menu.title,
        cache: menu.cache,
        url: menu.url,
        blank: menu.blank,
        query: menu.query
      }
    };
  });
};

router.getLayoutRoutes = routes => {
  return [
    {
      path: "/",
      children: routes,
      component: layoutHeaderAside
    }
  ];
};

export default router;
