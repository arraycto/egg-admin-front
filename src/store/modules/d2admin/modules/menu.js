// 设置文件
import setting from "@/setting.js";
import { getMenu, getPermissions } from "@/api/sys/menu.js";
import { routerUtil } from "@/libs/util";

export default {
  namespaced: true,
  state: {
    // 顶栏菜单
    header: [],
    // 侧栏菜单
    aside: [],
    // 侧边栏收缩
    asideCollapse: setting.menu.asideCollapse,
    // 权限
    perms: [],
    perm: {}
  },
  actions: {
    /**
     * 设置侧边栏展开或者收缩
     * @param {Object} context
     * @param {Boolean} collapse is collapse
     */
    asideCollapseSet({ state, dispatch }, collapse) {
      return new Promise(async resolve => {
        // store 赋值
        state.asideCollapse = collapse;
        // 持久化
        await dispatch(
          "d2admin/db/set",
          {
            dbName: "sys",
            path: "menu.asideCollapse",
            value: state.asideCollapse,
            user: true
          },
          { root: true }
        );
        // end
        resolve();
      });
    },
    /**
     * 切换侧边栏展开和收缩
     * @param {Object} context
     */
    asideCollapseToggle({ state, dispatch }) {
      return new Promise(async resolve => {
        // store 赋值
        state.asideCollapse = !state.asideCollapse;
        // 持久化
        await dispatch(
          "d2admin/db/set",
          {
            dbName: "sys",
            path: "menu.asideCollapse",
            value: state.asideCollapse,
            user: true
          },
          { root: true }
        );
        // end
        resolve();
      });
    },
    /**
     * 从持久化数据读取侧边栏展开或者收缩
     * @param {Object} context
     */
    asideCollapseLoad({ state, dispatch }) {
      return new Promise(async resolve => {
        // store 赋值
        state.asideCollapse = await dispatch(
          "d2admin/db/get",
          {
            dbName: "sys",
            path: "menu.asideCollapse",
            defaultValue: setting.menu.asideCollapse,
            user: true
          },
          { root: true }
        );
        // end
        resolve();
      });
    },
    getMenu({ state, commit }, force) {
      return new Promise(async resolve => {
        if (!state.header || !state.header.length || force) {
          const menu = await getMenu();
          let routes = routerUtil.generateRoutes(menu);
          commit("headerSet", routes);
          commit("d2admin/search/init", routes, { root: true });
          const permissions = await getPermissions();
          commit("permsSet", permissions);
        }
        resolve(state.header);
      });
    }
  },
  mutations: {
    /**
     * @description 设置顶栏菜单
     * @param {Object} state state
     * @param {Array} menu menu setting
     */
    headerSet(state, menu) {
      // store 赋值
      state.header = menu;
    },
    /**
     * @description 设置侧边栏菜单
     * @param {Object} state state
     * @param {Array} menu menu setting
     */
    asideSet(state, menu) {
      // store 赋值
      state.aside = menu;
    },
    /**
     * @description 设置权限
     * @param {Object} state state
     * @param {Array} perms permissions
     */
    permsSet(state, perms = []) {
      // store 赋值
      state.perms = perms;
      const perm = {};
      perms.forEach(item => {
        perm[item] = true;
      });
      state.perm = perm;
    }
  }
};
