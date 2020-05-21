// Element
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// flex 布局库
import "flex.css";
import "@/styles/index.scss";
// 组件
import "@/components";
// svg 图标
import "@/assets/svg-icons";
// 国际化
import i18n from "@/i18n.js";

// 功能插件
import pluginError from "@/plugin/error";
import pluginLog from "@/plugin/log";
import pluginOpen from "@/plugin/open";

// util.js
import * as util from "@/libs/util.js";

export default {
  async install(Vue, options) {
    // 设置为 false 以阻止 vue 在启动时生成生产提示
    // https://cn.vuejs.org/v2/api/#productionTip
    Vue.config.productionTip = false;
    // 当前环境
    Vue.prototype.$env = process.env.NODE_ENV;
    // 当前的 baseUrl
    Vue.prototype.$baseUrl = process.env.BASE_URL;
    // 当前版本
    Vue.prototype.$version = process.env.VUE_APP_VERSION;
    // 构建时间
    Vue.prototype.$buildTime = process.env.VUE_APP_BUILD_TIME;
    // util
    Vue.prototype.$util = util;

    // Element
    Vue.use(ElementUI, {
      i18n: (key, value) => i18n.t(key, value)
    });
    // 插件
    Vue.use(pluginError);
    Vue.use(pluginLog);
    Vue.use(pluginOpen);

    // 指令
    Vue.directive("perm", {
      bind: function(el, binding, vnode) {
        const permissions =
          vnode.componentInstance.$store.state.d2admin.menu.permissions;
        if (!permissions.some(item => item === binding.value)) {
          el.style.display = "none";
        }
      }
    });
  }
};
