import cookies from "./util.cookies";
import db from "./util.db";
import log from "./util.log";
import layoutHeaderAside from "@/layout/header-aside";

const util = {
  cookies,
  db,
  log
};

/**
 * @description 更新标题
 * @param {String} title 标题
 */
util.title = function(titleText) {
  const processTitle = process.env.VUE_APP_TITLE || "D2Admin";
  window.document.title = `${processTitle}${
    titleText ? ` | ${titleText}` : ""
  }`;
};

/**
 * @description 打开新页面
 * @param {String} url 地址
 */
util.open = function(url) {
  var a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("target", "_blank");
  a.setAttribute("id", "d2admin-link-temp");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(document.getElementById("d2admin-link-temp"));
};

export default util;

export const title = titleText => {
  const processTitle = process.env.VUE_APP_TITLE || "D2Admin";
  window.document.title = `${processTitle}${
    titleText ? ` | ${titleText}` : ""
  }`;
};

export const _import = file => {
  const env = {
    development: file => require("@/views/" + file).default,
    production: file => () => import("@/views/" + file)
  };
  return env[process.env.NODE_ENV](file);
};

export const generateRoutes = menuArr => {
  const recursiveMenu = menu => {
    const children =
      menu.children && menu.children.length
        ? menu.children.map(c => recursiveMenu(c))
        : [];
    const component = menu.component
      ? menu.component === "Layout"
        ? layoutHeaderAside
        : _import(menu.component)
      : null;
    return {
      ...menu,
      children,
      component,
      meta: {
        auth: menu.auth,
        title: menu.title
      }
    };
  };
  return menuArr.map(m => recursiveMenu(m));
};

export const dynamicRoutes = routeArr => {
  let routes = [];
  const recursiveRoutes = route => {
    if (route.children && route.children.length) {
      return route.children.forEach(item => recursiveRoutes(item));
    }
    routes.push(route);
  };
  routeArr.forEach(item => recursiveRoutes(item));
  return routes;
};
