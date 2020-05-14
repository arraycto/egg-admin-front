import cookies from "./util.cookies";
import db from "./util.db";
import log from "./util.log";
import layoutHeaderAside from "@/layout/header-aside";
import pageIframe from "@/layout/page-iframe";
import pageMain from "@/layout/page-main";

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
  const envMap = {
    development: file => require("@/views/" + file).default,
    production: file => () => import("@/views/" + file)
  };
  // return env[process.env.NODE_ENV](file);
  return envMap.production(file);
};

export const generateRoutes = (menuArr, parent = { path: "" }) => {
  const componentMap = {
    Layout: layoutHeaderAside,
    Main: pageMain,
    Iframe: pageIframe
  };
  return menuArr.map(menu => {
    menu.path = parent.path + menu.path;
    let path = menu.path;
    let component = componentMap[menu.component] || _import(menu.component);
    const children =
      menu.children && menu.children.length
        ? generateRoutes(menu.children, menu)
        : [];
    const result = {
      ...menu,
      path,
      children,
      component,
      meta: {
        title: menu.title,
        cache: menu.cache,
        url: menu.url
      }
    };
    return result;
  });
};
