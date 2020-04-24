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
  // return env[process.env.NODE_ENV](file);
  return env.production(file);
};

export const generateRoutes = menuArr => {
  const recursiveMenu = (menu, parent = { path: "" }) => {
    const children =
      menu.children && menu.children.length
        ? menu.children.map(c => recursiveMenu(c, menu))
        : [];
    const component = menu.component
      ? menu.component === "Layout"
        ? layoutHeaderAside
        : _import(menu.component)
      : null;
    const path = parent.path + menu.path;
    return {
      ...menu,
      path,
      children,
      component,
      meta: {
        auth: menu.auth,
        title: menu.title,
        cache: menu.cache
      }
    };
  };
  return menuArr.map(m => recursiveMenu(m));
};

export const getMenuTree = list => {
  return list.map(item => {
    let children = [];
    if (item.children && item.children.length) {
      children = getMenuTree(item.children);
    }
    return {
      ...item,
      label: item.title,
      value: item._id,
      children
    };
  });
};
