import utilCookies from "./util.cookies";
import utilDb from "./util.db";
import utilLog from "./util.log";
import utilRouter from "./util.router";

export const cookies = utilCookies;

export const db = utilDb;

export const log = utilLog;

export const routerUtil = utilRouter;

/**
 * @description 更新标题
 * @param {String} title 标题
 */
export const setTitle = titleText => {
  const processTitle = process.env.VUE_APP_TITLE || "D2Admin";
  window.document.title = `${processTitle}${
    titleText ? ` | ${titleText}` : ""
  }`;
};

/**
 * @description 首字母大写
 */
export const capitalize = ([first, ...rest]) => {
  return first.toUpperCase() + rest.join("");
};
